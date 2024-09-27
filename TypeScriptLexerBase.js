import { Lexer, Token } from "antlr4";
import TypeScriptLexer from './TypeScriptLexer';
/**
 * All lexer methods that used in grammar (IsStrictMode)
 * should start with Upper Case Char similar to Lexer rules.
 */
export default class TypeScriptLexerBase extends Lexer {
    constructor(input) {
        super(input);
        /**
         * Stores values of nested modes. By default mode is strict or
         * defined externally (useStrictDefault)
         */
        this.scopeStrictModes = [];
        /**
         * Keeps track of the current depth of nested template string backticks.
         * E.g. after the X in:
         *
         * `${a ? `${X
         *
         * templateDepth will be 2. This variable is needed to determine if a `}` is a
         * plain CloseBrace, or one that closes an expression inside a template string.
         */
        this.templateDepth = 0;
        /**
         * Keeps track of the depth of open- and close-braces. Used for expressions like:
         *
         * `${[1, 2, 3].map(x => { return x * 2;}).join("")}`
         *
         * where the '}' from `return x * 2;}` should not become a `TemplateCloseBrace`
         * token but rather a `CloseBrace` token.
         */
        this.bracesDepth = 0;
    }
    get UseStrictDefault() {
        return this.useStrictDefault;
    }
    set UseStrictDefault(value) {
        this.useStrictDefault = value;
        this.useStrictCurrent = value;
    }
    IsStartOfFile() {
        return this.lastToken == null;
    }
    IsStrictMode() {
        return this.useStrictCurrent;
    }
    StartTemplateString() {
        this.bracesDepth = 0;
    }
    IsInTemplateString() {
        return this.templateDepth > 0 && this.bracesDepth == 0;
    }
    /**
     * Return the next token from the character stream and records this last
     * token in case it resides on the default channel. This recorded token
     * is used to determine when the lexer could possibly match a regex
     * literal. Also changes scopeStrictModes stack if tokenize special
     * string 'use strict';
     *
     * @return the next token from the character stream.
     */
    nextToken() {
        // Get the next token.
        const next = super.nextToken();
        if (next.channel == Token.DEFAULT_CHANNEL) {
            // Keep track of the last token on the default channel.
            this.lastToken = next;
        }
        return next;
    }
    ProcessOpenBrace() {
        this.bracesDepth++;
        this.useStrictCurrent = (this.scopeStrictModes.length > 0 && this.scopeStrictModes[this.scopeStrictModes.length - 1]) || this.UseStrictDefault;
        this.scopeStrictModes.push(this.useStrictCurrent);
    }
    ProcessCloseBrace() {
        this.bracesDepth--;
        this.useStrictCurrent = this.scopeStrictModes.length > 0 ? this.scopeStrictModes.pop() : this.UseStrictDefault;
    }
    ProcessStringLiteral() {
        if (this.lastToken == null || this.lastToken.type == TypeScriptLexer.OpenBrace) {
            const text = this.text;
            if (text === "\"use strict\"" || text === "'use strict'") {
                if (this.scopeStrictModes.length > 0) {
                    this.scopeStrictModes.pop();
                }
                this.useStrictCurrent = true;
                this.scopeStrictModes.push(this.useStrictCurrent);
            }
        }
    }
    IncreaseTemplateDepth() {
        this.templateDepth++;
    }
    DecreaseTemplateDepth() {
        this.templateDepth--;
    }
    /**
    * Returns {@code true} if the lexer can match a regex literal.
    */
    IsRegexPossible() {
        if (this.lastToken == null) {
            // No token has been produced yet: at the start of the input,
            // no division is possible, so a regex literal _is_ possible.
            return true;
        }
        switch (this.lastToken.type) {
            case TypeScriptLexer.Identifier:
            case TypeScriptLexer.NullLiteral:
            case TypeScriptLexer.BooleanLiteral:
            case TypeScriptLexer.This:
            case TypeScriptLexer.CloseBracket:
            case TypeScriptLexer.CloseParen:
            case TypeScriptLexer.OctalIntegerLiteral:
            case TypeScriptLexer.DecimalLiteral:
            case TypeScriptLexer.HexIntegerLiteral:
            case TypeScriptLexer.StringLiteral:
            case TypeScriptLexer.PlusPlus:
            case TypeScriptLexer.MinusMinus:
                // After any of the tokens above, no regex literal can follow.
                return false;
            default:
                // In all other cases, a regex literal _is_ possible.
                return true;
        }
    }
}
