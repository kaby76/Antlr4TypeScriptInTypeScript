import TypeScriptParserListener from './TypeScriptParserListener';
export default class MyListener extends TypeScriptParserListener {
    constructor() {
        super(...arguments);
        this.enterPrimary = (ctx) => {
            console.log("enterPrimary");
        };
    }
}
