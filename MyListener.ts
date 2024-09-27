import { ParseTreeWalker } from 'antlr4';
import { PrimaryContext } from "./TypeScriptParser.js";
import TypeScriptParserListener from './TypeScriptParserListener';

export default class MyListener extends TypeScriptParserListener {
    enterPrimary = (ctx: PrimaryContext) => {
        console.log("enterPrimary");
    };
}