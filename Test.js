// Generated from trgen 0.23.7
import { CharStreams } from 'antlr4';
import { CommonTokenStream } from 'antlr4';
import { ErrorListener } from 'antlr4';
import { Token } from 'antlr4';
import { writeFileSync } from 'fs';
import { openSync } from 'fs';
import { readSync } from 'fs';
import { writeSync } from 'fs';
import { closeSync } from 'fs';
import TypeScriptLexer from './TypeScriptLexer.js';
import TypeScriptParser from './TypeScriptParser.js';
import { StringBuilder } from 'typescript-string-operations';
import { Timer } from 'timer-node';
import { ParseTreeWalker } from 'antlr4';
import MyListener from './MyListener';
function getChar() {
    let buffer = Buffer.alloc(1);
    var xx = 0;
    try {
        xx = readSync(0, buffer, 0, 1, null);
    }
    catch (err) {
    }
    if (xx === 0) {
        return '';
    }
    return buffer.toString('utf8');
}
class MyErrorListener extends ErrorListener {
    constructor(quiet, tee, output) {
        super();
        this._quiet = quiet;
        this._tee = tee;
        this._output = output;
        this.had_error = false;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.had_error = true;
        if (this._tee) {
            writeSync(this._output, `line ${line}:${column} ${msg}\n`);
        }
        if (!this._quiet) {
            console.error(`line ${line}:${column} ${msg}`);
        }
    }
}
var tee = false;
var show_profile = false;
var show_tree = false;
var show_tokens = false;
var show_trace = false;
var error_code = 0;
var quiet = false;
var encoding = 'utf8';
var string_instance = 0;
var prefix = '';
var inputs = [];
var is_fns = [];
function splitLines(t) { return t.split(/\r\n|\r|\n/); }
function main() {
    for (let i = 2; i < process.argv.length; ++i) {
        switch (process.argv[i]) {
            case '-tokens':
                show_tokens = true;
                break;
            case '-tree':
                show_tree = true;
                break;
            case '-prefix':
                prefix = process.argv[++i] + ' ';
                break;
            case '-input':
                inputs.push(process.argv[++i]);
                is_fns.push(false);
                break;
            case '-tee':
                tee = true;
                break;
            case '-encoding':
                encoding = process.argv[++i];
                break;
            case '-x':
                var sb = new StringBuilder();
                var ch;
                while ((ch = getChar()) != '') {
                    sb.Append(ch);
                }
                var input = sb.ToString();
                var sp = splitLines(input);
                for (var ii of sp) {
                    if (ii == '')
                        continue;
                    inputs.push(ii);
                    is_fns.push(true);
                }
                break;
            case '-q':
                quiet = true;
                break;
            case '-trace':
                show_trace = true;
                break;
            default:
                inputs.push(process.argv[i]);
                is_fns.push(true);
                break;
        }
    }
    if (inputs.length == 0) {
        ParseStdin();
    }
    else {
        const timer = new Timer({ label: 'test-timer' });
        timer.start();
        for (var f = 0; f < inputs.length; ++f) {
            if (is_fns[f])
                ParseFilename(inputs[f], f);
            else
                ParseString(inputs[f], f);
        }
        timer.stop();
        var t = timer.time().m * 60 + timer.time().s + timer.time().ms / 1000;
        if (!quiet)
            console.error('Total Time: ' + t);
    }
    process.exitCode = error_code;
}
function ParseStdin() {
    var sb = new StringBuilder();
    var ch;
    while ((ch = getChar()) != '') {
        sb.Append(ch);
    }
    var input = sb.ToString();
    var str = CharStreams.fromString(input);
    DoParse(str, "stdin", 0);
}
function ParseString(input, row_number) {
    var str = CharStreams.fromString(input);
    DoParse(str, "string" + string_instance++, row_number);
}
function ParseFilename(input, row_number) {
    var str = CharStreams.fromPathSync(input, encoding);
    DoParse(str, input, row_number);
}
function DoParse(str, input_name, row_number) {
    const lexer = new TypeScriptLexer(str);
    const tokens = new CommonTokenStream(lexer);
    const parser = new TypeScriptParser(tokens);
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    var output = tee ? openSync(input_name + ".errors", 'w') : 1;
    var listener_parser = new MyErrorListener(quiet, tee, output);
    var listener_lexer = new MyErrorListener(quiet, tee, output);
    parser.addErrorListener(listener_parser);
    lexer.addErrorListener(listener_lexer);
    if (show_tokens) {
        for (var i = 0;; ++i) {
            var ro_token = lexer.nextToken();
            var token = ro_token;
            token.tokenIndex = i;
            console.error(token.toString());
            if (token.type === Token.EOF)
                break;
        }
        lexer.reset();
    }
    if (show_trace) {
        //       parser._interp.trace_atn_sim = true;
    }
    const timer = new Timer({ label: 'test-timer2' });
    timer.start();
    const tree = parser.program();
    timer.stop();
    var result = "";
    if (listener_parser.had_error || listener_lexer.had_error) {
        result = 'fail';
        error_code = 1;
    }
    else {
        result = 'success';
    }
    var t = timer.time().m * 60 + timer.time().s + timer.time().ms / 1000;
    if (show_tree) {
        if (tee) {
            writeFileSync(input_name + ".tree", tree.toStringTree(parser.ruleNames, parser));
        }
        else {
            console.error(tree.toStringTree(parser.ruleNames, parser));
        }
    }
    const walker = new MyListener();
    ParseTreeWalker.DEFAULT.walk(walker, tree);
    if (!quiet) {
        console.error(prefix + 'TypeScript ' + row_number + ' ' + input_name + ' ' + result + ' ' + t);
    }
    if (tee) {
        closeSync(output);
    }
}
main();
