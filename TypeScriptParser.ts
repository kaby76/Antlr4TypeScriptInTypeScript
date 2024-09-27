// Generated from TypeScriptParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TypeScriptParserListener from "./TypeScriptParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import TypeScriptParserBase from './TypeScriptParserBase.js';

export default class TypeScriptParser extends TypeScriptParserBase {
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly RegularExpressionLiteral = 3;
	public static readonly OpenBracket = 4;
	public static readonly CloseBracket = 5;
	public static readonly OpenParen = 6;
	public static readonly CloseParen = 7;
	public static readonly OpenBrace = 8;
	public static readonly TemplateCloseBrace = 9;
	public static readonly CloseBrace = 10;
	public static readonly SemiColon = 11;
	public static readonly Comma = 12;
	public static readonly Assign = 13;
	public static readonly QuestionMark = 14;
	public static readonly QuestionMarkDot = 15;
	public static readonly Colon = 16;
	public static readonly Ellipsis = 17;
	public static readonly Dot = 18;
	public static readonly PlusPlus = 19;
	public static readonly MinusMinus = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly BitNot = 23;
	public static readonly Not = 24;
	public static readonly Multiply = 25;
	public static readonly Divide = 26;
	public static readonly Modulus = 27;
	public static readonly Power = 28;
	public static readonly NullCoalesce = 29;
	public static readonly Hashtag = 30;
	public static readonly LeftShiftArithmetic = 31;
	public static readonly LessThan = 32;
	public static readonly MoreThan = 33;
	public static readonly LessThanEquals = 34;
	public static readonly GreaterThanEquals = 35;
	public static readonly Equals_ = 36;
	public static readonly NotEquals = 37;
	public static readonly IdentityEquals = 38;
	public static readonly IdentityNotEquals = 39;
	public static readonly BitAnd = 40;
	public static readonly BitXOr = 41;
	public static readonly BitOr = 42;
	public static readonly And = 43;
	public static readonly Or = 44;
	public static readonly MultiplyAssign = 45;
	public static readonly DivideAssign = 46;
	public static readonly ModulusAssign = 47;
	public static readonly PlusAssign = 48;
	public static readonly MinusAssign = 49;
	public static readonly LeftShiftArithmeticAssign = 50;
	public static readonly RightShiftArithmeticAssign = 51;
	public static readonly RightShiftLogicalAssign = 52;
	public static readonly BitAndAssign = 53;
	public static readonly BitXorAssign = 54;
	public static readonly BitOrAssign = 55;
	public static readonly PowerAssign = 56;
	public static readonly NullishCoalescingAssign = 57;
	public static readonly ARROW = 58;
	public static readonly NullLiteral = 59;
	public static readonly BooleanLiteral = 60;
	public static readonly DecimalLiteral = 61;
	public static readonly HexIntegerLiteral = 62;
	public static readonly OctalIntegerLiteral = 63;
	public static readonly OctalIntegerLiteral2 = 64;
	public static readonly BinaryIntegerLiteral = 65;
	public static readonly BigHexIntegerLiteral = 66;
	public static readonly BigOctalIntegerLiteral = 67;
	public static readonly BigBinaryIntegerLiteral = 68;
	public static readonly BigDecimalIntegerLiteral = 69;
	public static readonly Break = 70;
	public static readonly Do = 71;
	public static readonly Instanceof = 72;
	public static readonly Typeof = 73;
	public static readonly Case = 74;
	public static readonly Else = 75;
	public static readonly New = 76;
	public static readonly Var = 77;
	public static readonly Catch = 78;
	public static readonly Finally = 79;
	public static readonly Return = 80;
	public static readonly Void = 81;
	public static readonly Continue = 82;
	public static readonly For = 83;
	public static readonly Switch = 84;
	public static readonly While = 85;
	public static readonly Debugger = 86;
	public static readonly Function_ = 87;
	public static readonly This = 88;
	public static readonly With = 89;
	public static readonly Default = 90;
	public static readonly If = 91;
	public static readonly Throw = 92;
	public static readonly Delete = 93;
	public static readonly In = 94;
	public static readonly Try = 95;
	public static readonly As = 96;
	public static readonly From = 97;
	public static readonly ReadOnly = 98;
	public static readonly Async = 99;
	public static readonly Await = 100;
	public static readonly Yield = 101;
	public static readonly YieldStar = 102;
	public static readonly Class = 103;
	public static readonly Enum = 104;
	public static readonly Extends = 105;
	public static readonly Super = 106;
	public static readonly Const = 107;
	public static readonly Export = 108;
	public static readonly Import = 109;
	public static readonly Implements = 110;
	public static readonly Let = 111;
	public static readonly Private = 112;
	public static readonly Public = 113;
	public static readonly Interface = 114;
	public static readonly Package = 115;
	public static readonly Protected = 116;
	public static readonly Static = 117;
	public static readonly Any = 118;
	public static readonly Number = 119;
	public static readonly Never = 120;
	public static readonly Boolean = 121;
	public static readonly String = 122;
	public static readonly Unique = 123;
	public static readonly Symbol = 124;
	public static readonly Undefined = 125;
	public static readonly Object = 126;
	public static readonly Of = 127;
	public static readonly KeyOf = 128;
	public static readonly TypeAlias = 129;
	public static readonly Constructor = 130;
	public static readonly Namespace = 131;
	public static readonly Require = 132;
	public static readonly Module = 133;
	public static readonly Declare = 134;
	public static readonly Abstract = 135;
	public static readonly Is = 136;
	public static readonly At = 137;
	public static readonly Identifier = 138;
	public static readonly StringLiteral = 139;
	public static readonly BackTick = 140;
	public static readonly WhiteSpaces = 141;
	public static readonly LineTerminator = 142;
	public static readonly HtmlComment = 143;
	public static readonly CDataComment = 144;
	public static readonly UnexpectedCharacter = 145;
	public static readonly TemplateStringEscapeAtom = 146;
	public static readonly TemplateStringStartExpression = 147;
	public static readonly TemplateStringAtom = 148;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_initializer = 0;
	public static readonly RULE_bindingPattern = 1;
	public static readonly RULE_typeParameters = 2;
	public static readonly RULE_typeParameterList = 3;
	public static readonly RULE_typeParameter = 4;
	public static readonly RULE_constraint = 5;
	public static readonly RULE_typeArguments = 6;
	public static readonly RULE_typeArgumentList = 7;
	public static readonly RULE_typeArgument = 8;
	public static readonly RULE_type_ = 9;
	public static readonly RULE_unionOrIntersectionOrPrimaryType = 10;
	public static readonly RULE_primaryType = 11;
	public static readonly RULE_predefinedType = 12;
	public static readonly RULE_typeReference = 13;
	public static readonly RULE_typeGeneric = 14;
	public static readonly RULE_typeName = 15;
	public static readonly RULE_objectType = 16;
	public static readonly RULE_typeBody = 17;
	public static readonly RULE_typeMemberList = 18;
	public static readonly RULE_typeMember = 19;
	public static readonly RULE_arrayType = 20;
	public static readonly RULE_tupleType = 21;
	public static readonly RULE_tupleElementTypes = 22;
	public static readonly RULE_functionType = 23;
	public static readonly RULE_constructorType = 24;
	public static readonly RULE_typeQuery = 25;
	public static readonly RULE_typeQueryExpression = 26;
	public static readonly RULE_propertySignatur = 27;
	public static readonly RULE_typeAnnotation = 28;
	public static readonly RULE_callSignature = 29;
	public static readonly RULE_parameterList = 30;
	public static readonly RULE_requiredParameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_optionalParameter = 33;
	public static readonly RULE_restParameter = 34;
	public static readonly RULE_requiredParameter = 35;
	public static readonly RULE_accessibilityModifier = 36;
	public static readonly RULE_identifierOrPattern = 37;
	public static readonly RULE_constructSignature = 38;
	public static readonly RULE_indexSignature = 39;
	public static readonly RULE_methodSignature = 40;
	public static readonly RULE_typeAliasDeclaration = 41;
	public static readonly RULE_constructorDeclaration = 42;
	public static readonly RULE_interfaceDeclaration = 43;
	public static readonly RULE_interfaceExtendsClause = 44;
	public static readonly RULE_classOrInterfaceTypeList = 45;
	public static readonly RULE_enumDeclaration = 46;
	public static readonly RULE_enumBody = 47;
	public static readonly RULE_enumMemberList = 48;
	public static readonly RULE_enumMember = 49;
	public static readonly RULE_namespaceDeclaration = 50;
	public static readonly RULE_namespaceName = 51;
	public static readonly RULE_importAliasDeclaration = 52;
	public static readonly RULE_decoratorList = 53;
	public static readonly RULE_decorator = 54;
	public static readonly RULE_decoratorMemberExpression = 55;
	public static readonly RULE_decoratorCallExpression = 56;
	public static readonly RULE_program = 57;
	public static readonly RULE_sourceElement = 58;
	public static readonly RULE_statement = 59;
	public static readonly RULE_block = 60;
	public static readonly RULE_statementList = 61;
	public static readonly RULE_abstractDeclaration = 62;
	public static readonly RULE_importStatement = 63;
	public static readonly RULE_importFromBlock = 64;
	public static readonly RULE_importModuleItems = 65;
	public static readonly RULE_importAliasName = 66;
	public static readonly RULE_moduleExportName = 67;
	public static readonly RULE_importedBinding = 68;
	public static readonly RULE_importDefault = 69;
	public static readonly RULE_importNamespace = 70;
	public static readonly RULE_importFrom = 71;
	public static readonly RULE_aliasName = 72;
	public static readonly RULE_exportStatement = 73;
	public static readonly RULE_exportFromBlock = 74;
	public static readonly RULE_exportModuleItems = 75;
	public static readonly RULE_exportAliasName = 76;
	public static readonly RULE_declaration = 77;
	public static readonly RULE_variableStatement = 78;
	public static readonly RULE_variableDeclarationList = 79;
	public static readonly RULE_variableDeclaration = 80;
	public static readonly RULE_emptyStatement_ = 81;
	public static readonly RULE_expressionStatement = 82;
	public static readonly RULE_ifStatement = 83;
	public static readonly RULE_iterationStatement = 84;
	public static readonly RULE_varModifier = 85;
	public static readonly RULE_continueStatement = 86;
	public static readonly RULE_breakStatement = 87;
	public static readonly RULE_returnStatement = 88;
	public static readonly RULE_yieldStatement = 89;
	public static readonly RULE_withStatement = 90;
	public static readonly RULE_switchStatement = 91;
	public static readonly RULE_caseBlock = 92;
	public static readonly RULE_caseClauses = 93;
	public static readonly RULE_caseClause = 94;
	public static readonly RULE_defaultClause = 95;
	public static readonly RULE_labelledStatement = 96;
	public static readonly RULE_throwStatement = 97;
	public static readonly RULE_tryStatement = 98;
	public static readonly RULE_catchProduction = 99;
	public static readonly RULE_finallyProduction = 100;
	public static readonly RULE_debuggerStatement = 101;
	public static readonly RULE_functionDeclaration = 102;
	public static readonly RULE_classDeclaration = 103;
	public static readonly RULE_classHeritage = 104;
	public static readonly RULE_classTail = 105;
	public static readonly RULE_classExtendsClause = 106;
	public static readonly RULE_implementsClause = 107;
	public static readonly RULE_classElement = 108;
	public static readonly RULE_propertyMemberDeclaration = 109;
	public static readonly RULE_propertyMemberBase = 110;
	public static readonly RULE_indexMemberDeclaration = 111;
	public static readonly RULE_generatorMethod = 112;
	public static readonly RULE_generatorFunctionDeclaration = 113;
	public static readonly RULE_generatorBlock = 114;
	public static readonly RULE_generatorDefinition = 115;
	public static readonly RULE_iteratorBlock = 116;
	public static readonly RULE_iteratorDefinition = 117;
	public static readonly RULE_classElementName = 118;
	public static readonly RULE_privateIdentifier = 119;
	public static readonly RULE_formalParameterList = 120;
	public static readonly RULE_formalParameterArg = 121;
	public static readonly RULE_lastFormalParameterArg = 122;
	public static readonly RULE_functionBody = 123;
	public static readonly RULE_sourceElements = 124;
	public static readonly RULE_arrayLiteral = 125;
	public static readonly RULE_elementList = 126;
	public static readonly RULE_arrayElement = 127;
	public static readonly RULE_objectLiteral = 128;
	public static readonly RULE_propertyAssignment = 129;
	public static readonly RULE_getAccessor = 130;
	public static readonly RULE_setAccessor = 131;
	public static readonly RULE_propertyName = 132;
	public static readonly RULE_arguments = 133;
	public static readonly RULE_argumentList = 134;
	public static readonly RULE_argument = 135;
	public static readonly RULE_expressionSequence = 136;
	public static readonly RULE_singleExpression = 137;
	public static readonly RULE_asExpression = 138;
	public static readonly RULE_assignable = 139;
	public static readonly RULE_anonymousFunction = 140;
	public static readonly RULE_arrowFunctionDeclaration = 141;
	public static readonly RULE_arrowFunctionParameters = 142;
	public static readonly RULE_arrowFunctionBody = 143;
	public static readonly RULE_assignmentOperator = 144;
	public static readonly RULE_literal = 145;
	public static readonly RULE_templateStringLiteral = 146;
	public static readonly RULE_templateStringAtom = 147;
	public static readonly RULE_numericLiteral = 148;
	public static readonly RULE_bigintLiteral = 149;
	public static readonly RULE_getter = 150;
	public static readonly RULE_setter = 151;
	public static readonly RULE_identifierName = 152;
	public static readonly RULE_identifier = 153;
	public static readonly RULE_identifierOrKeyWord = 154;
	public static readonly RULE_reservedWord = 155;
	public static readonly RULE_keyword = 156;
	public static readonly RULE_eos = 157;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'['", "']'", 
                                                            "'('", "')'", 
                                                            "'{'", null, 
                                                            "'}'", "';'", 
                                                            "','", "'='", 
                                                            "'?'", "'?.'", 
                                                            "':'", "'...'", 
                                                            "'.'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'~'", 
                                                            "'!'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'**'", "'??'", 
                                                            "'#'", "'<<'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'==='", "'!=='", 
                                                            "'&'", "'^'", 
                                                            "'|'", "'&&'", 
                                                            "'||'", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'+='", "'-='", 
                                                            "'<<='", "'>>='", 
                                                            "'>>>='", "'&='", 
                                                            "'^='", "'|='", 
                                                            "'**='", "'??='", 
                                                            "'=>'", "'null'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'break'", "'do'", 
                                                            "'instanceof'", 
                                                            "'typeof'", 
                                                            "'case'", "'else'", 
                                                            "'new'", "'var'", 
                                                            "'catch'", "'finally'", 
                                                            "'return'", 
                                                            "'void'", "'continue'", 
                                                            "'for'", "'switch'", 
                                                            "'while'", "'debugger'", 
                                                            "'function'", 
                                                            "'this'", "'with'", 
                                                            "'default'", 
                                                            "'if'", "'throw'", 
                                                            "'delete'", 
                                                            "'in'", "'try'", 
                                                            "'as'", "'from'", 
                                                            "'readonly'", 
                                                            "'async'", "'await'", 
                                                            "'yield'", "'yield*'", 
                                                            "'class'", "'enum'", 
                                                            "'extends'", 
                                                            "'super'", "'const'", 
                                                            "'export'", 
                                                            "'import'", 
                                                            "'implements'", 
                                                            "'let'", "'private'", 
                                                            "'public'", 
                                                            "'interface'", 
                                                            "'package'", 
                                                            "'protected'", 
                                                            "'static'", 
                                                            "'any'", "'number'", 
                                                            "'never'", "'boolean'", 
                                                            "'string'", 
                                                            "'unique'", 
                                                            "'symbol'", 
                                                            "'undefined'", 
                                                            "'object'", 
                                                            "'of'", "'keyof'", 
                                                            "'type'", "'constructor'", 
                                                            "'namespace'", 
                                                            "'require'", 
                                                            "'module'", 
                                                            "'declare'", 
                                                            "'abstract'", 
                                                            "'is'", "'@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "MultiLineComment", 
                                                             "SingleLineComment", 
                                                             "RegularExpressionLiteral", 
                                                             "OpenBracket", 
                                                             "CloseBracket", 
                                                             "OpenParen", 
                                                             "CloseParen", 
                                                             "OpenBrace", 
                                                             "TemplateCloseBrace", 
                                                             "CloseBrace", 
                                                             "SemiColon", 
                                                             "Comma", "Assign", 
                                                             "QuestionMark", 
                                                             "QuestionMarkDot", 
                                                             "Colon", "Ellipsis", 
                                                             "Dot", "PlusPlus", 
                                                             "MinusMinus", 
                                                             "Plus", "Minus", 
                                                             "BitNot", "Not", 
                                                             "Multiply", 
                                                             "Divide", "Modulus", 
                                                             "Power", "NullCoalesce", 
                                                             "Hashtag", 
                                                             "LeftShiftArithmetic", 
                                                             "LessThan", 
                                                             "MoreThan", 
                                                             "LessThanEquals", 
                                                             "GreaterThanEquals", 
                                                             "Equals_", 
                                                             "NotEquals", 
                                                             "IdentityEquals", 
                                                             "IdentityNotEquals", 
                                                             "BitAnd", "BitXOr", 
                                                             "BitOr", "And", 
                                                             "Or", "MultiplyAssign", 
                                                             "DivideAssign", 
                                                             "ModulusAssign", 
                                                             "PlusAssign", 
                                                             "MinusAssign", 
                                                             "LeftShiftArithmeticAssign", 
                                                             "RightShiftArithmeticAssign", 
                                                             "RightShiftLogicalAssign", 
                                                             "BitAndAssign", 
                                                             "BitXorAssign", 
                                                             "BitOrAssign", 
                                                             "PowerAssign", 
                                                             "NullishCoalescingAssign", 
                                                             "ARROW", "NullLiteral", 
                                                             "BooleanLiteral", 
                                                             "DecimalLiteral", 
                                                             "HexIntegerLiteral", 
                                                             "OctalIntegerLiteral", 
                                                             "OctalIntegerLiteral2", 
                                                             "BinaryIntegerLiteral", 
                                                             "BigHexIntegerLiteral", 
                                                             "BigOctalIntegerLiteral", 
                                                             "BigBinaryIntegerLiteral", 
                                                             "BigDecimalIntegerLiteral", 
                                                             "Break", "Do", 
                                                             "Instanceof", 
                                                             "Typeof", "Case", 
                                                             "Else", "New", 
                                                             "Var", "Catch", 
                                                             "Finally", 
                                                             "Return", "Void", 
                                                             "Continue", 
                                                             "For", "Switch", 
                                                             "While", "Debugger", 
                                                             "Function_", 
                                                             "This", "With", 
                                                             "Default", 
                                                             "If", "Throw", 
                                                             "Delete", "In", 
                                                             "Try", "As", 
                                                             "From", "ReadOnly", 
                                                             "Async", "Await", 
                                                             "Yield", "YieldStar", 
                                                             "Class", "Enum", 
                                                             "Extends", 
                                                             "Super", "Const", 
                                                             "Export", "Import", 
                                                             "Implements", 
                                                             "Let", "Private", 
                                                             "Public", "Interface", 
                                                             "Package", 
                                                             "Protected", 
                                                             "Static", "Any", 
                                                             "Number", "Never", 
                                                             "Boolean", 
                                                             "String", "Unique", 
                                                             "Symbol", "Undefined", 
                                                             "Object", "Of", 
                                                             "KeyOf", "TypeAlias", 
                                                             "Constructor", 
                                                             "Namespace", 
                                                             "Require", 
                                                             "Module", "Declare", 
                                                             "Abstract", 
                                                             "Is", "At", 
                                                             "Identifier", 
                                                             "StringLiteral", 
                                                             "BackTick", 
                                                             "WhiteSpaces", 
                                                             "LineTerminator", 
                                                             "HtmlComment", 
                                                             "CDataComment", 
                                                             "UnexpectedCharacter", 
                                                             "TemplateStringEscapeAtom", 
                                                             "TemplateStringStartExpression", 
                                                             "TemplateStringAtom" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"initializer", "bindingPattern", "typeParameters", "typeParameterList", 
		"typeParameter", "constraint", "typeArguments", "typeArgumentList", "typeArgument", 
		"type_", "unionOrIntersectionOrPrimaryType", "primaryType", "predefinedType", 
		"typeReference", "typeGeneric", "typeName", "objectType", "typeBody", 
		"typeMemberList", "typeMember", "arrayType", "tupleType", "tupleElementTypes", 
		"functionType", "constructorType", "typeQuery", "typeQueryExpression", 
		"propertySignatur", "typeAnnotation", "callSignature", "parameterList", 
		"requiredParameterList", "parameter", "optionalParameter", "restParameter", 
		"requiredParameter", "accessibilityModifier", "identifierOrPattern", "constructSignature", 
		"indexSignature", "methodSignature", "typeAliasDeclaration", "constructorDeclaration", 
		"interfaceDeclaration", "interfaceExtendsClause", "classOrInterfaceTypeList", 
		"enumDeclaration", "enumBody", "enumMemberList", "enumMember", "namespaceDeclaration", 
		"namespaceName", "importAliasDeclaration", "decoratorList", "decorator", 
		"decoratorMemberExpression", "decoratorCallExpression", "program", "sourceElement", 
		"statement", "block", "statementList", "abstractDeclaration", "importStatement", 
		"importFromBlock", "importModuleItems", "importAliasName", "moduleExportName", 
		"importedBinding", "importDefault", "importNamespace", "importFrom", "aliasName", 
		"exportStatement", "exportFromBlock", "exportModuleItems", "exportAliasName", 
		"declaration", "variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement_", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
		"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
		"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
		"functionDeclaration", "classDeclaration", "classHeritage", "classTail", 
		"classExtendsClause", "implementsClause", "classElement", "propertyMemberDeclaration", 
		"propertyMemberBase", "indexMemberDeclaration", "generatorMethod", "generatorFunctionDeclaration", 
		"generatorBlock", "generatorDefinition", "iteratorBlock", "iteratorDefinition", 
		"classElementName", "privateIdentifier", "formalParameterList", "formalParameterArg", 
		"lastFormalParameterArg", "functionBody", "sourceElements", "arrayLiteral", 
		"elementList", "arrayElement", "objectLiteral", "propertyAssignment", 
		"getAccessor", "setAccessor", "propertyName", "arguments", "argumentList", 
		"argument", "expressionSequence", "singleExpression", "asExpression", 
		"assignable", "anonymousFunction", "arrowFunctionDeclaration", "arrowFunctionParameters", 
		"arrowFunctionBody", "assignmentOperator", "literal", "templateStringLiteral", 
		"templateStringAtom", "numericLiteral", "bigintLiteral", "getter", "setter", 
		"identifierName", "identifier", "identifierOrKeyWord", "reservedWord", 
		"keyword", "eos",
	];
	public get grammarFileName(): string { return "TypeScriptParser.g4"; }
	public get literalNames(): (string | null)[] { return TypeScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TypeScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return TypeScriptParser.ruleNames; }
	public get serializedATN(): number[] { return TypeScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TypeScriptParser._ATN, TypeScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let localctx: InitializerContext = new InitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TypeScriptParser.RULE_initializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 316;
			this.match(TypeScriptParser.Assign);
			this.state = 317;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bindingPattern(): BindingPatternContext {
		let localctx: BindingPatternContext = new BindingPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TypeScriptParser.RULE_bindingPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				{
				this.state = 319;
				this.arrayLiteral();
				}
				break;
			case 8:
				{
				this.state = 320;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TypeScriptParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
			this.match(TypeScriptParser.LessThan);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32 || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4290773035) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 1167) !== 0)) {
				{
				this.state = 324;
				this.typeParameterList();
				}
			}

			this.state = 327;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let localctx: TypeParameterListContext = new TypeParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TypeScriptParser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
			this.typeParameter();
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 330;
				this.match(TypeScriptParser.Comma);
				this.state = 331;
				this.typeParameter();
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TypeScriptParser.RULE_typeParameter);
		let _la: number;
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 337;
				this.identifier();
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 338;
					this.constraint();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 341;
				this.identifier();
				this.state = 342;
				this.match(TypeScriptParser.Assign);
				this.state = 343;
				this.typeArgument();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 345;
				this.typeParameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let localctx: ConstraintContext = new ConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TypeScriptParser.RULE_constraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(TypeScriptParser.Extends);
			this.state = 349;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TypeScriptParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this.match(TypeScriptParser.LessThan);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 336) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 939525377) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 360743177) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 3293183) !== 0)) {
				{
				this.state = 352;
				this.typeArgumentList();
				}
			}

			this.state = 355;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let localctx: TypeArgumentListContext = new TypeArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TypeScriptParser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this.typeArgument();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 358;
				this.match(TypeScriptParser.Comma);
				this.state = 359;
				this.typeArgument();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TypeScriptParser.RULE_typeArgument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 365;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TypeScriptParser.RULE_type_);
		let _la: number;
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40 || _la===42) {
					{
					this.state = 367;
					_la = this._input.LA(1);
					if(!(_la===40 || _la===42)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 370;
				this.unionOrIntersectionOrPrimaryType(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 371;
				this.functionType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 372;
				this.constructorType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 373;
				this.typeGeneric();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(_p: number): UnionOrIntersectionOrPrimaryTypeContext;
	// @RuleVersion(0)
	public unionOrIntersectionOrPrimaryType(_p?: number): UnionOrIntersectionOrPrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: UnionOrIntersectionOrPrimaryTypeContext = new UnionOrIntersectionOrPrimaryTypeContext(this, this._ctx, _parentState);
		let _prevctx: UnionOrIntersectionOrPrimaryTypeContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PrimaryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 377;
			this.primaryType(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 387;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 385;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new UnionContext(this, new UnionOrIntersectionOrPrimaryTypeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 379;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 380;
						this.match(TypeScriptParser.BitOr);
						this.state = 381;
						this.unionOrIntersectionOrPrimaryType(4);
						}
						break;
					case 2:
						{
						localctx = new IntersectionContext(this, new UnionOrIntersectionOrPrimaryTypeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 382;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 383;
						this.match(TypeScriptParser.BitAnd);
						this.state = 384;
						this.unionOrIntersectionOrPrimaryType(3);
						}
						break;
					}
					}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public primaryType(): PrimaryTypeContext;
	public primaryType(_p: number): PrimaryTypeContext;
	// @RuleVersion(0)
	public primaryType(_p?: number): PrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryTypeContext = new PrimaryTypeContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryTypeContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, TypeScriptParser.RULE_primaryType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				localctx = new ParenthesizedPrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 391;
				this.match(TypeScriptParser.OpenParen);
				this.state = 392;
				this.type_();
				this.state = 393;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			case 2:
				{
				localctx = new PredefinedPrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 395;
				this.predefinedType();
				}
				break;
			case 3:
				{
				localctx = new ReferencePrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 396;
				this.typeReference();
				}
				break;
			case 4:
				{
				localctx = new ObjectPrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 397;
				this.objectType();
				}
				break;
			case 5:
				{
				localctx = new TuplePrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 398;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 399;
				this.tupleElementTypes();
				this.state = 400;
				this.match(TypeScriptParser.CloseBracket);
				}
				break;
			case 6:
				{
				localctx = new QueryPrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 402;
				this.typeQuery();
				}
				break;
			case 7:
				{
				localctx = new ThisPrimTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 403;
				this.match(TypeScriptParser.This);
				}
				break;
			case 8:
				{
				localctx = new RedefinitionOfTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 404;
				this.typeReference();
				this.state = 405;
				this.match(TypeScriptParser.Is);
				this.state = 406;
				this.primaryType(2);
				}
				break;
			case 9:
				{
				localctx = new KeyOfTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 408;
				this.match(TypeScriptParser.KeyOf);
				this.state = 409;
				this.primaryType(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArrayPrimTypeContext(this, new PrimaryTypeContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_primaryType);
					this.state = 412;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 413;
					if (!(this.notLineTerminator())) {
						throw this.createFailedPredicateException("this.notLineTerminator()");
					}
					this.state = 414;
					this.match(TypeScriptParser.OpenBracket);
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 336) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 541081607) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4290773035) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3215) !== 0)) {
						{
						this.state = 415;
						this.primaryType(0);
						}
					}

					this.state = 418;
					this.match(TypeScriptParser.CloseBracket);
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public predefinedType(): PredefinedTypeContext {
		let localctx: PredefinedTypeContext = new PredefinedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TypeScriptParser.RULE_predefinedType);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 424;
				this.match(TypeScriptParser.Any);
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 425;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case 119:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 426;
				this.match(TypeScriptParser.Number);
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 427;
				this.match(TypeScriptParser.DecimalLiteral);
				}
				break;
			case 121:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 428;
				this.match(TypeScriptParser.Boolean);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 429;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			case 122:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 430;
				this.match(TypeScriptParser.String);
				}
				break;
			case 139:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 431;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case 123:
			case 124:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===123) {
					{
					this.state = 432;
					this.match(TypeScriptParser.Unique);
					}
				}

				this.state = 435;
				this.match(TypeScriptParser.Symbol);
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 436;
				this.match(TypeScriptParser.Never);
				}
				break;
			case 125:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 437;
				this.match(TypeScriptParser.Undefined);
				}
				break;
			case 126:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 438;
				this.match(TypeScriptParser.Object);
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 439;
				this.match(TypeScriptParser.Void);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let localctx: TypeReferenceContext = new TypeReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, TypeScriptParser.RULE_typeReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 442;
			this.typeName();
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 443;
				this.typeGeneric();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeGeneric(): TypeGenericContext {
		let localctx: TypeGenericContext = new TypeGenericContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, TypeScriptParser.RULE_typeGeneric);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 446;
			this.match(TypeScriptParser.LessThan);
			this.state = 447;
			this.typeArgumentList();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 448;
				this.typeGeneric();
				}
			}

			this.state = 451;
			this.match(TypeScriptParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, TypeScriptParser.RULE_typeName);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 453;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 454;
				this.namespaceName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let localctx: ObjectTypeContext = new ObjectTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, TypeScriptParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 457;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 268435461) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965375) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 104447) !== 0)) {
				{
				this.state = 458;
				this.typeBody();
				}
			}

			this.state = 461;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeBody(): TypeBodyContext {
		let localctx: TypeBodyContext = new TypeBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, TypeScriptParser.RULE_typeBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this.typeMemberList();
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11 || _la===12) {
				{
				this.state = 464;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===12)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeMemberList(): TypeMemberListContext {
		let localctx: TypeMemberListContext = new TypeMemberListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, TypeScriptParser.RULE_typeMemberList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 467;
			this.typeMember();
			this.state = 472;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 468;
					_la = this._input.LA(1);
					if(!(_la===11 || _la===12)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 469;
					this.typeMember();
					}
					}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeMember(): TypeMemberContext {
		let localctx: TypeMemberContext = new TypeMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, TypeScriptParser.RULE_typeMember);
		let _la: number;
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 475;
				this.propertySignatur();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 476;
				this.callSignature();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 477;
				this.constructSignature();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 478;
				this.indexSignature();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 479;
				this.methodSignature();
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 480;
					this.match(TypeScriptParser.ARROW);
					this.state = 481;
					this.type_();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, TypeScriptParser.RULE_arrayType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 486;
			this.primaryType(0);
			this.state = 487;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 488;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 489;
			this.match(TypeScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let localctx: TupleTypeContext = new TupleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, TypeScriptParser.RULE_tupleType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 491;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 492;
			this.tupleElementTypes();
			this.state = 493;
			this.match(TypeScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleElementTypes(): TupleElementTypesContext {
		let localctx: TupleElementTypesContext = new TupleElementTypesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, TypeScriptParser.RULE_tupleElementTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 495;
			this.type_();
			this.state = 500;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 496;
					this.match(TypeScriptParser.Comma);
					this.state = 497;
					this.type_();
					}
					}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 503;
				this.match(TypeScriptParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let localctx: FunctionTypeContext = new FunctionTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, TypeScriptParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 506;
				this.typeParameters();
				}
			}

			this.state = 509;
			this.match(TypeScriptParser.OpenParen);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 55295) !== 0)) {
				{
				this.state = 510;
				this.parameterList();
				}
			}

			this.state = 513;
			this.match(TypeScriptParser.CloseParen);
			this.state = 514;
			this.match(TypeScriptParser.ARROW);
			this.state = 515;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorType(): ConstructorTypeContext {
		let localctx: ConstructorTypeContext = new ConstructorTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, TypeScriptParser.RULE_constructorType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			this.match(TypeScriptParser.New);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 518;
				this.typeParameters();
				}
			}

			this.state = 521;
			this.match(TypeScriptParser.OpenParen);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 55295) !== 0)) {
				{
				this.state = 522;
				this.parameterList();
				}
			}

			this.state = 525;
			this.match(TypeScriptParser.CloseParen);
			this.state = 526;
			this.match(TypeScriptParser.ARROW);
			this.state = 527;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeQuery(): TypeQueryContext {
		let localctx: TypeQueryContext = new TypeQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, TypeScriptParser.RULE_typeQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			this.match(TypeScriptParser.Typeof);
			this.state = 530;
			this.typeQueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeQueryExpression(): TypeQueryExpressionContext {
		let localctx: TypeQueryExpressionContext = new TypeQueryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, TypeScriptParser.RULE_typeQueryExpression);
		try {
			let _alt: number;
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 532;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 536;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 533;
						this.identifierName();
						this.state = 534;
						this.match(TypeScriptParser.Dot);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 538;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 540;
				this.identifierName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertySignatur(): PropertySignaturContext {
		let localctx: PropertySignaturContext = new PropertySignaturContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, TypeScriptParser.RULE_propertySignatur);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 544;
				this.match(TypeScriptParser.ReadOnly);
				}
				break;
			}
			this.state = 547;
			this.propertyName();
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 548;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 551;
				this.typeAnnotation();
				}
			}

			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 554;
				this.match(TypeScriptParser.ARROW);
				this.state = 555;
				this.type_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let localctx: TypeAnnotationContext = new TypeAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, TypeScriptParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			this.match(TypeScriptParser.Colon);
			this.state = 559;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public callSignature(): CallSignatureContext {
		let localctx: CallSignatureContext = new CallSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, TypeScriptParser.RULE_callSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 561;
				this.typeParameters();
				}
			}

			this.state = 564;
			this.match(TypeScriptParser.OpenParen);
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 55295) !== 0)) {
				{
				this.state = 565;
				this.parameterList();
				}
			}

			this.state = 568;
			this.match(TypeScriptParser.CloseParen);
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 569;
				this.typeAnnotation();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, TypeScriptParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 572;
				this.restParameter();
				}
				break;
			case 4:
			case 8:
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 137:
			case 138:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 573;
				this.parameter();
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 574;
						this.match(TypeScriptParser.Comma);
						this.state = 575;
						this.parameter();
						}
						}
					}
					this.state = 580;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 583;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 581;
					this.match(TypeScriptParser.Comma);
					this.state = 582;
					this.restParameter();
					}
					break;
				}
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 585;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public requiredParameterList(): RequiredParameterListContext {
		let localctx: RequiredParameterListContext = new RequiredParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, TypeScriptParser.RULE_requiredParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this.requiredParameter();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 591;
				this.match(TypeScriptParser.Comma);
				this.state = 592;
				this.requiredParameter();
				}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, TypeScriptParser.RULE_parameter);
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 598;
				this.requiredParameter();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 599;
				this.optionalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionalParameter(): OptionalParameterContext {
		let localctx: OptionalParameterContext = new OptionalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, TypeScriptParser.RULE_optionalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 602;
				this.decoratorList();
				}
			}

			{
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 608;
			this.identifierOrPattern();
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				{
				this.state = 609;
				this.match(TypeScriptParser.QuestionMark);
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 610;
					this.typeAnnotation();
					}
				}

				}
				break;
			case 13:
			case 16:
				{
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 613;
					this.typeAnnotation();
					}
				}

				this.state = 616;
				this.initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public restParameter(): RestParameterContext {
		let localctx: RestParameterContext = new RestParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, TypeScriptParser.RULE_restParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			this.match(TypeScriptParser.Ellipsis);
			this.state = 620;
			this.singleExpression(0);
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 621;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public requiredParameter(): RequiredParameterContext {
		let localctx: RequiredParameterContext = new RequiredParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, TypeScriptParser.RULE_requiredParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 624;
				this.decoratorList();
				}
			}

			this.state = 628;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 627;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 630;
			this.identifierOrPattern();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 631;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public accessibilityModifier(): AccessibilityModifierContext {
		let localctx: AccessibilityModifierContext = new AccessibilityModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, TypeScriptParser.RULE_accessibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			_la = this._input.LA(1);
			if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 19) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrPattern(): IdentifierOrPatternContext {
		let localctx: IdentifierOrPatternContext = new IdentifierOrPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, TypeScriptParser.RULE_identifierOrPattern);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 636;
				this.identifierName();
				}
				break;
			case 4:
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 637;
				this.bindingPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructSignature(): ConstructSignatureContext {
		let localctx: ConstructSignatureContext = new ConstructSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, TypeScriptParser.RULE_constructSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 640;
			this.match(TypeScriptParser.New);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 641;
				this.typeParameters();
				}
			}

			this.state = 644;
			this.match(TypeScriptParser.OpenParen);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 55295) !== 0)) {
				{
				this.state = 645;
				this.parameterList();
				}
			}

			this.state = 648;
			this.match(TypeScriptParser.CloseParen);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 649;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexSignature(): IndexSignatureContext {
		let localctx: IndexSignatureContext = new IndexSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, TypeScriptParser.RULE_indexSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 653;
			this.identifier();
			this.state = 654;
			this.match(TypeScriptParser.Colon);
			this.state = 655;
			_la = this._input.LA(1);
			if(!(_la===119 || _la===122)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 656;
			this.match(TypeScriptParser.CloseBracket);
			this.state = 657;
			this.typeAnnotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodSignature(): MethodSignatureContext {
		let localctx: MethodSignatureContext = new MethodSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, TypeScriptParser.RULE_methodSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 659;
			this.propertyName();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 660;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 663;
			this.callSignature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		let localctx: TypeAliasDeclarationContext = new TypeAliasDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, TypeScriptParser.RULE_typeAliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 665;
				this.match(TypeScriptParser.Export);
				}
			}

			this.state = 668;
			this.match(TypeScriptParser.TypeAlias);
			this.state = 669;
			this.identifier();
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 670;
				this.typeParameters();
				}
			}

			this.state = 673;
			this.match(TypeScriptParser.Assign);
			this.state = 674;
			this.type_();
			this.state = 675;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, TypeScriptParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 19) !== 0)) {
				{
				this.state = 677;
				this.accessibilityModifier();
				}
			}

			this.state = 680;
			this.match(TypeScriptParser.Constructor);
			this.state = 681;
			this.match(TypeScriptParser.OpenParen);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
				{
				this.state = 682;
				this.formalParameterList();
				}
			}

			this.state = 685;
			this.match(TypeScriptParser.CloseParen);
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				{
				this.state = 686;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 687;
				this.functionBody();
				this.state = 688;
				this.match(TypeScriptParser.CloseBrace);
				}
				}
				break;
			case 2:
				{
				this.state = 690;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, TypeScriptParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 693;
				this.match(TypeScriptParser.Export);
				}
			}

			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===134) {
				{
				this.state = 696;
				this.match(TypeScriptParser.Declare);
				}
			}

			this.state = 699;
			this.match(TypeScriptParser.Interface);
			this.state = 700;
			this.identifier();
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 701;
				this.typeParameters();
				}
			}

			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 704;
				this.interfaceExtendsClause();
				}
			}

			this.state = 707;
			this.objectType();
			this.state = 709;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 708;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceExtendsClause(): InterfaceExtendsClauseContext {
		let localctx: InterfaceExtendsClauseContext = new InterfaceExtendsClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, TypeScriptParser.RULE_interfaceExtendsClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 711;
			this.match(TypeScriptParser.Extends);
			this.state = 712;
			this.classOrInterfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		let localctx: ClassOrInterfaceTypeListContext = new ClassOrInterfaceTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, TypeScriptParser.RULE_classOrInterfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this.typeReference();
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 715;
				this.match(TypeScriptParser.Comma);
				this.state = 716;
				this.typeReference();
				}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, TypeScriptParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107) {
				{
				this.state = 722;
				this.match(TypeScriptParser.Const);
				}
			}

			this.state = 725;
			this.match(TypeScriptParser.Enum);
			this.state = 726;
			this.identifier();
			this.state = 727;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965375) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 104447) !== 0)) {
				{
				this.state = 728;
				this.enumBody();
				}
			}

			this.state = 731;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let localctx: EnumBodyContext = new EnumBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, TypeScriptParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 733;
			this.enumMemberList();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 734;
				this.match(TypeScriptParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumMemberList(): EnumMemberListContext {
		let localctx: EnumMemberListContext = new EnumMemberListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, TypeScriptParser.RULE_enumMemberList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 737;
			this.enumMember();
			this.state = 742;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 738;
					this.match(TypeScriptParser.Comma);
					this.state = 739;
					this.enumMember();
					}
					}
				}
				this.state = 744;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumMember(): EnumMemberContext {
		let localctx: EnumMemberContext = new EnumMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, TypeScriptParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 745;
			this.propertyName();
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 746;
				this.match(TypeScriptParser.Assign);
				this.state = 747;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespaceDeclaration(): NamespaceDeclarationContext {
		let localctx: NamespaceDeclarationContext = new NamespaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, TypeScriptParser.RULE_namespaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===134) {
				{
				this.state = 750;
				this.match(TypeScriptParser.Declare);
				}
			}

			this.state = 753;
			this.match(TypeScriptParser.Namespace);
			this.state = 754;
			this.namespaceName();
			this.state = 755;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this.statementList();
				}
				break;
			}
			this.state = 759;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespaceName(): NamespaceNameContext {
		let localctx: NamespaceNameContext = new NamespaceNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, TypeScriptParser.RULE_namespaceName);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 761;
			this.identifier();
			this.state = 770;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 762;
						this.match(TypeScriptParser.Dot);
						}
						}
						this.state = 765;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===18);
					this.state = 767;
					this.identifier();
					}
					}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importAliasDeclaration(): ImportAliasDeclarationContext {
		let localctx: ImportAliasDeclarationContext = new ImportAliasDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, TypeScriptParser.RULE_importAliasDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 773;
			this.identifier();
			this.state = 774;
			this.match(TypeScriptParser.Assign);
			this.state = 775;
			this.namespaceName();
			this.state = 776;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decoratorList(): DecoratorListContext {
		let localctx: DecoratorListContext = new DecoratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, TypeScriptParser.RULE_decoratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 779;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 778;
					this.decorator();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let localctx: DecoratorContext = new DecoratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, TypeScriptParser.RULE_decorator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 783;
			this.match(TypeScriptParser.At);
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 784;
				this.decoratorMemberExpression(0);
				}
				break;
			case 2:
				{
				this.state = 785;
				this.decoratorCallExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public decoratorMemberExpression(): DecoratorMemberExpressionContext;
	public decoratorMemberExpression(_p: number): DecoratorMemberExpressionContext;
	// @RuleVersion(0)
	public decoratorMemberExpression(_p?: number): DecoratorMemberExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: DecoratorMemberExpressionContext = new DecoratorMemberExpressionContext(this, this._ctx, _parentState);
		let _prevctx: DecoratorMemberExpressionContext = localctx;
		let _startState: number = 110;
		this.enterRecursionRule(localctx, 110, TypeScriptParser.RULE_decoratorMemberExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 96:
			case 97:
			case 99:
			case 101:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 135:
			case 138:
				{
				this.state = 789;
				this.identifier();
				}
				break;
			case 6:
				{
				this.state = 790;
				this.match(TypeScriptParser.OpenParen);
				this.state = 791;
				this.singleExpression(0);
				this.state = 792;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 801;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new DecoratorMemberExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_decoratorMemberExpression);
					this.state = 796;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 797;
					this.match(TypeScriptParser.Dot);
					this.state = 798;
					this.identifierName();
					}
					}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decoratorCallExpression(): DecoratorCallExpressionContext {
		let localctx: DecoratorCallExpressionContext = new DecoratorCallExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, TypeScriptParser.RULE_decoratorCallExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 804;
			this.decoratorMemberExpression(0);
			this.state = 805;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, TypeScriptParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 807;
				this.sourceElements();
				}
				break;
			}
			this.state = 810;
			this.match(TypeScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let localctx: SourceElementContext = new SourceElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, TypeScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 812;
				this.match(TypeScriptParser.Export);
				}
				break;
			}
			this.state = 815;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, TypeScriptParser.RULE_statement);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 817;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 818;
				this.variableStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 819;
				this.importStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 820;
				this.exportStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 821;
				this.emptyStatement_();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 822;
				this.abstractDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 823;
				this.classDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 824;
				this.functionDeclaration();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 825;
				this.expressionStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 826;
				this.interfaceDeclaration();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 827;
				this.namespaceDeclaration();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 828;
				this.ifStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 829;
				this.iterationStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 830;
				this.continueStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 831;
				this.breakStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 832;
				this.returnStatement();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 833;
				this.yieldStatement();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 834;
				this.withStatement();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 835;
				this.labelledStatement();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 836;
				this.switchStatement();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 837;
				this.throwStatement();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 838;
				this.tryStatement();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 839;
				this.debuggerStatement();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 840;
				this.arrowFunctionDeclaration();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 841;
				this.generatorFunctionDeclaration();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 842;
				this.typeAliasDeclaration();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 843;
				this.enumDeclaration();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 844;
				this.match(TypeScriptParser.Export);
				this.state = 845;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, TypeScriptParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 848;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 849;
				this.statementList();
				}
				break;
			}
			this.state = 852;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, TypeScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 854;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 857;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public abstractDeclaration(): AbstractDeclarationContext {
		let localctx: AbstractDeclarationContext = new AbstractDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, TypeScriptParser.RULE_abstractDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 859;
			this.match(TypeScriptParser.Abstract);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.identifier();
				this.state = 861;
				this.callSignature();
				}
				break;
			case 2:
				{
				this.state = 863;
				this.variableStatement();
				}
				break;
			}
			this.state = 866;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, TypeScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 868;
			this.match(TypeScriptParser.Import);
			this.state = 869;
			this.importFromBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importFromBlock(): ImportFromBlockContext {
		let localctx: ImportFromBlockContext = new ImportFromBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, TypeScriptParser.RULE_importFromBlock);
		try {
			this.state = 883;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
			case 25:
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 872;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 871;
					this.importDefault();
					}
					break;
				}
				this.state = 876;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 25:
				case 59:
				case 60:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 135:
				case 138:
					{
					this.state = 874;
					this.importNamespace();
					}
					break;
				case 8:
					{
					this.state = 875;
					this.importModuleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 878;
				this.importFrom();
				this.state = 879;
				this.eos();
				}
				break;
			case 139:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 881;
				this.match(TypeScriptParser.StringLiteral);
				this.state = 882;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importModuleItems(): ImportModuleItemsContext {
		let localctx: ImportModuleItemsContext = new ImportModuleItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, TypeScriptParser.RULE_importModuleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 885;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 891;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 886;
					this.importAliasName();
					this.state = 887;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 104447) !== 0)) {
				{
				this.state = 894;
				this.importAliasName();
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 895;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 900;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importAliasName(): ImportAliasNameContext {
		let localctx: ImportAliasNameContext = new ImportAliasNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, TypeScriptParser.RULE_importAliasName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 902;
			this.moduleExportName();
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96) {
				{
				this.state = 903;
				this.match(TypeScriptParser.As);
				this.state = 904;
				this.importedBinding();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleExportName(): ModuleExportNameContext {
		let localctx: ModuleExportNameContext = new ModuleExportNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, TypeScriptParser.RULE_moduleExportName);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 907;
				this.identifierName();
				}
				break;
			case 139:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 908;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importedBinding(): ImportedBindingContext {
		let localctx: ImportedBindingContext = new ImportedBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, TypeScriptParser.RULE_importedBinding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 911;
			_la = this._input.LA(1);
			if(!(_la===100 || _la===101 || _la===138)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDefault(): ImportDefaultContext {
		let localctx: ImportDefaultContext = new ImportDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, TypeScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.aliasName();
			this.state = 914;
			this.match(TypeScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let localctx: ImportNamespaceContext = new ImportNamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, TypeScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				{
				this.state = 916;
				this.match(TypeScriptParser.Multiply);
				}
				break;
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				{
				this.state = 917;
				this.identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96) {
				{
				this.state = 920;
				this.match(TypeScriptParser.As);
				this.state = 921;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importFrom(): ImportFromContext {
		let localctx: ImportFromContext = new ImportFromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, TypeScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 924;
			this.match(TypeScriptParser.From);
			this.state = 925;
			this.match(TypeScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let localctx: AliasNameContext = new AliasNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, TypeScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 927;
			this.identifierName();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96) {
				{
				this.state = 928;
				this.match(TypeScriptParser.As);
				this.state = 929;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let localctx: ExportStatementContext = new ExportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, TypeScriptParser.RULE_exportStatement);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				localctx = new ExportDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 932;
				this.match(TypeScriptParser.Export);
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 933;
					this.match(TypeScriptParser.Default);
					}
					break;
				}
				this.state = 938;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 936;
					this.exportFromBlock();
					}
					break;
				case 2:
					{
					this.state = 937;
					this.declaration();
					}
					break;
				}
				this.state = 940;
				this.eos();
				}
				break;
			case 2:
				localctx = new ExportDefaultDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 942;
				this.match(TypeScriptParser.Export);
				this.state = 943;
				this.match(TypeScriptParser.Default);
				this.state = 944;
				this.singleExpression(0);
				this.state = 945;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportFromBlock(): ExportFromBlockContext {
		let localctx: ExportFromBlockContext = new ExportFromBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, TypeScriptParser.RULE_exportFromBlock);
		try {
			this.state = 959;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 949;
				this.importNamespace();
				this.state = 950;
				this.importFrom();
				this.state = 951;
				this.eos();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 953;
				this.exportModuleItems();
				this.state = 955;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 954;
					this.importFrom();
					}
					break;
				}
				this.state = 957;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportModuleItems(): ExportModuleItemsContext {
		let localctx: ExportModuleItemsContext = new ExportModuleItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, TypeScriptParser.RULE_exportModuleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 961;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 967;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 962;
					this.exportAliasName();
					this.state = 963;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			}
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294965251) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294965247) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 104447) !== 0)) {
				{
				this.state = 970;
				this.exportAliasName();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 971;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 976;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportAliasName(): ExportAliasNameContext {
		let localctx: ExportAliasNameContext = new ExportAliasNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, TypeScriptParser.RULE_exportAliasName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this.moduleExportName();
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96) {
				{
				this.state = 979;
				this.match(TypeScriptParser.As);
				this.state = 980;
				this.moduleExportName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, TypeScriptParser.RULE_declaration);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 983;
				this.variableStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 984;
				this.classDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 985;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let localctx: VariableStatementContext = new VariableStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, TypeScriptParser.RULE_variableStatement);
		let _la: number;
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 988;
				this.bindingPattern();
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 989;
					this.typeAnnotation();
					}
				}

				this.state = 992;
				this.initializer();
				this.state = 994;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 993;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 19) !== 0)) {
					{
					this.state = 996;
					this.accessibilityModifier();
					}
				}

				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===77 || _la===107 || _la===111) {
					{
					this.state = 999;
					this.varModifier();
					}
				}

				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===98) {
					{
					this.state = 1002;
					this.match(TypeScriptParser.ReadOnly);
					}
				}

				this.state = 1005;
				this.variableDeclarationList();
				this.state = 1007;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1006;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1009;
				this.match(TypeScriptParser.Declare);
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===77 || _la===107 || _la===111) {
					{
					this.state = 1010;
					this.varModifier();
					}
				}

				this.state = 1013;
				this.variableDeclarationList();
				this.state = 1015;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1014;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, TypeScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1019;
			this.variableDeclaration();
			this.state = 1024;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1020;
					this.match(TypeScriptParser.Comma);
					this.state = 1021;
					this.variableDeclaration();
					}
					}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 119, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, TypeScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 96:
			case 97:
			case 99:
			case 101:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 135:
			case 138:
				{
				this.state = 1027;
				this.identifierOrKeyWord();
				}
				break;
			case 4:
				{
				this.state = 1028;
				this.arrayLiteral();
				}
				break;
			case 8:
				{
				this.state = 1029;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1032;
				this.typeAnnotation();
				}
				break;
			}
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.singleExpression(0);
				}
				break;
			}
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1038;
				this.match(TypeScriptParser.Assign);
				this.state = 1040;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1039;
					this.typeParameters();
					}
					break;
				}
				this.state = 1042;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 162, TypeScriptParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1045;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, TypeScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1047;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw this.createFailedPredicateException("this.notOpenBraceAndNotFunction()");
			}
			this.state = 1048;
			this.expressionSequence();
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, TypeScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1052;
			this.match(TypeScriptParser.If);
			this.state = 1053;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1054;
			this.expressionSequence();
			this.state = 1055;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1056;
			this.statement();
			this.state = 1059;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1057;
				this.match(TypeScriptParser.Else);
				this.state = 1058;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let localctx: IterationStatementContext = new IterationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, TypeScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				localctx = new DoStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1061;
				this.match(TypeScriptParser.Do);
				this.state = 1062;
				this.statement();
				this.state = 1063;
				this.match(TypeScriptParser.While);
				this.state = 1064;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1065;
				this.expressionSequence();
				this.state = 1066;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1067;
				this.eos();
				}
				break;
			case 2:
				localctx = new WhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1069;
				this.match(TypeScriptParser.While);
				this.state = 1070;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1071;
				this.expressionSequence();
				this.state = 1072;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1073;
				this.statement();
				}
				break;
			case 3:
				localctx = new ForStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1075;
				this.match(TypeScriptParser.For);
				this.state = 1076;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 540999723) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
					{
					this.state = 1077;
					this.expressionSequence();
					}
				}

				this.state = 1080;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 540999723) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
					{
					this.state = 1081;
					this.expressionSequence();
					}
				}

				this.state = 1084;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 540999723) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
					{
					this.state = 1085;
					this.expressionSequence();
					}
				}

				this.state = 1088;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1089;
				this.statement();
				}
				break;
			case 4:
				localctx = new ForVarStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1090;
				this.match(TypeScriptParser.For);
				this.state = 1091;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1092;
				this.varModifier();
				this.state = 1093;
				this.variableDeclarationList();
				this.state = 1094;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 540999723) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
					{
					this.state = 1095;
					this.expressionSequence();
					}
				}

				this.state = 1098;
				this.match(TypeScriptParser.SemiColon);
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 540999723) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
					{
					this.state = 1099;
					this.expressionSequence();
					}
				}

				this.state = 1102;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1103;
				this.statement();
				}
				break;
			case 5:
				localctx = new ForInStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1105;
				this.match(TypeScriptParser.For);
				this.state = 1106;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1107;
				this.singleExpression(0);
				this.state = 1108;
				this.match(TypeScriptParser.In);
				this.state = 1109;
				this.expressionSequence();
				this.state = 1110;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1111;
				this.statement();
				}
				break;
			case 6:
				localctx = new ForVarInStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1113;
				this.match(TypeScriptParser.For);
				this.state = 1114;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1115;
				this.varModifier();
				this.state = 1116;
				this.variableDeclaration();
				this.state = 1117;
				this.match(TypeScriptParser.In);
				this.state = 1118;
				this.expressionSequence();
				this.state = 1119;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1120;
				this.statement();
				}
				break;
			case 7:
				localctx = new ForOfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1122;
				this.match(TypeScriptParser.For);
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===100) {
					{
					this.state = 1123;
					this.match(TypeScriptParser.Await);
					}
				}

				this.state = 1126;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1127;
				this.singleExpression(0);
				this.state = 1128;
				this.identifier();
				this.state = 1129;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 1130;
				this.expressionSequence();
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 1131;
					this.match(TypeScriptParser.As);
					this.state = 1132;
					this.type_();
					}
				}

				this.state = 1135;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1136;
				this.statement();
				}
				break;
			case 8:
				localctx = new ForVarOfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1138;
				this.match(TypeScriptParser.For);
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===100) {
					{
					this.state = 1139;
					this.match(TypeScriptParser.Await);
					}
				}

				this.state = 1142;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1143;
				this.varModifier();
				this.state = 1144;
				this.variableDeclaration();
				this.state = 1145;
				this.identifier();
				this.state = 1146;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 1147;
				this.expressionSequence();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 1148;
					this.match(TypeScriptParser.As);
					this.state = 1149;
					this.type_();
					}
				}

				this.state = 1152;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1153;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let localctx: VarModifierContext = new VarModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, TypeScriptParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1157;
			_la = this._input.LA(1);
			if(!(_la===77 || _la===107 || _la===111)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, TypeScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
			this.match(TypeScriptParser.Continue);
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1160;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1161;
				this.identifier();
				}
				break;
			}
			this.state = 1164;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, TypeScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1166;
			this.match(TypeScriptParser.Break);
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1168;
				this.identifier();
				}
				break;
			}
			this.state = 1171;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, TypeScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1173;
			this.match(TypeScriptParser.Return);
			this.state = 1176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1174;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1175;
				this.expressionSequence();
				}
				break;
			}
			this.state = 1178;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let localctx: YieldStatementContext = new YieldStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, TypeScriptParser.RULE_yieldStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1180;
			_la = this._input.LA(1);
			if(!(_la===101 || _la===102)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1181;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 1182;
				this.expressionSequence();
				}
				break;
			}
			this.state = 1185;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let localctx: WithStatementContext = new WithStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, TypeScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1187;
			this.match(TypeScriptParser.With);
			this.state = 1188;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1189;
			this.expressionSequence();
			this.state = 1190;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1191;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, TypeScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1193;
			this.match(TypeScriptParser.Switch);
			this.state = 1194;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1195;
			this.expressionSequence();
			this.state = 1196;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1197;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let localctx: CaseBlockContext = new CaseBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, TypeScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1199;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 1200;
				this.caseClauses();
				}
			}

			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1203;
				this.defaultClause();
				this.state = 1205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 1204;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 1209;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let localctx: CaseClausesContext = new CaseClausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, TypeScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1211;
				this.caseClause();
				}
				}
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===74);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let localctx: CaseClauseContext = new CaseClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, TypeScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1216;
			this.match(TypeScriptParser.Case);
			this.state = 1217;
			this.expressionSequence();
			this.state = 1218;
			this.match(TypeScriptParser.Colon);
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1219;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let localctx: DefaultClauseContext = new DefaultClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, TypeScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1222;
			this.match(TypeScriptParser.Default);
			this.state = 1223;
			this.match(TypeScriptParser.Colon);
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1224;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let localctx: LabelledStatementContext = new LabelledStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, TypeScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1227;
			this.identifier();
			this.state = 1228;
			this.match(TypeScriptParser.Colon);
			this.state = 1229;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, TypeScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1231;
			this.match(TypeScriptParser.Throw);
			this.state = 1232;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 1233;
			this.expressionSequence();
			this.state = 1234;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, TypeScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1236;
			this.match(TypeScriptParser.Try);
			this.state = 1237;
			this.block();
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				{
				this.state = 1238;
				this.catchProduction();
				this.state = 1240;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1239;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case 79:
				{
				this.state = 1242;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let localctx: CatchProductionContext = new CatchProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, TypeScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.match(TypeScriptParser.Catch);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 1246;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1247;
				this.identifier();
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1248;
					this.typeAnnotation();
					}
				}

				this.state = 1251;
				this.match(TypeScriptParser.CloseParen);
				}
			}

			this.state = 1255;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let localctx: FinallyProductionContext = new FinallyProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, TypeScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1257;
			this.match(TypeScriptParser.Finally);
			this.state = 1258;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let localctx: DebuggerStatementContext = new DebuggerStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, TypeScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1260;
			this.match(TypeScriptParser.Debugger);
			this.state = 1261;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, TypeScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===99) {
				{
				this.state = 1263;
				this.match(TypeScriptParser.Async);
				}
			}

			this.state = 1266;
			this.match(TypeScriptParser.Function_);
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1267;
				this.match(TypeScriptParser.Multiply);
				}
			}

			this.state = 1270;
			this.identifier();
			this.state = 1271;
			this.callSignature();
			this.state = 1277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				{
				{
				this.state = 1272;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1273;
				this.functionBody();
				this.state = 1274;
				this.match(TypeScriptParser.CloseBrace);
				}
				}
				break;
			case 11:
				{
				this.state = 1276;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, TypeScriptParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 1279;
				this.decoratorList();
				}
			}

			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 1282;
				this.match(TypeScriptParser.Export);
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 1283;
					this.match(TypeScriptParser.Default);
					}
				}

				}
			}

			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===135) {
				{
				this.state = 1288;
				this.match(TypeScriptParser.Abstract);
				}
			}

			this.state = 1291;
			this.match(TypeScriptParser.Class);
			this.state = 1292;
			this.identifier();
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 1293;
				this.typeParameters();
				}
			}

			this.state = 1296;
			this.classHeritage();
			this.state = 1297;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classHeritage(): ClassHeritageContext {
		let localctx: ClassHeritageContext = new ClassHeritageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, TypeScriptParser.RULE_classHeritage);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 1299;
				this.classExtendsClause();
				}
			}

			this.state = 1303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===110) {
				{
				this.state = 1302;
				this.implementsClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classTail(): ClassTailContext {
		let localctx: ClassTailContext = new ClassTailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, TypeScriptParser.RULE_classTail);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1305;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1306;
					this.classElement();
					}
					}
				}
				this.state = 1311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			}
			this.state = 1312;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classExtendsClause(): ClassExtendsClauseContext {
		let localctx: ClassExtendsClauseContext = new ClassExtendsClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, TypeScriptParser.RULE_classExtendsClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1314;
			this.match(TypeScriptParser.Extends);
			this.state = 1315;
			this.typeReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public implementsClause(): ImplementsClauseContext {
		let localctx: ImplementsClauseContext = new ImplementsClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, TypeScriptParser.RULE_implementsClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1317;
			this.match(TypeScriptParser.Implements);
			this.state = 1318;
			this.classOrInterfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classElement(): ClassElementContext {
		let localctx: ClassElementContext = new ClassElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, TypeScriptParser.RULE_classElement);
		try {
			this.state = 1327;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1320;
				this.constructorDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1322;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
				case 1:
					{
					this.state = 1321;
					this.decoratorList();
					}
					break;
				}
				this.state = 1324;
				this.propertyMemberDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1325;
				this.indexMemberDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1326;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyMemberDeclaration(): PropertyMemberDeclarationContext {
		let localctx: PropertyMemberDeclarationContext = new PropertyMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, TypeScriptParser.RULE_propertyMemberDeclaration);
		let _la: number;
		try {
			this.state = 1358;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				localctx = new PropertyDeclarationExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1329;
				this.propertyMemberBase();
				this.state = 1330;
				this.propertyName();
				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 1331;
					this.match(TypeScriptParser.QuestionMark);
					}
				}

				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1334;
					this.typeAnnotation();
					}
				}

				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 1337;
					this.initializer();
					}
				}

				this.state = 1340;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			case 2:
				localctx = new MethodDeclarationExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1342;
				this.propertyMemberBase();
				this.state = 1343;
				this.propertyName();
				this.state = 1344;
				this.callSignature();
				this.state = 1350;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					{
					this.state = 1345;
					this.match(TypeScriptParser.OpenBrace);
					this.state = 1346;
					this.functionBody();
					this.state = 1347;
					this.match(TypeScriptParser.CloseBrace);
					}
					}
					break;
				case 11:
					{
					this.state = 1349;
					this.match(TypeScriptParser.SemiColon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 3:
				localctx = new GetterSetterDeclarationExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1352;
				this.propertyMemberBase();
				this.state = 1355;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1353;
					this.getAccessor();
					}
					break;
				case 2:
					{
					this.state = 1354;
					this.setAccessor();
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new AbstractMemberDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1357;
				this.abstractDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyMemberBase(): PropertyMemberBaseContext {
		let localctx: PropertyMemberBaseContext = new PropertyMemberBaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, TypeScriptParser.RULE_propertyMemberBase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1360;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 1364;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1363;
				this.match(TypeScriptParser.Async);
				}
				break;
			}
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1366;
				this.match(TypeScriptParser.Static);
				}
				break;
			}
			this.state = 1370;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1369;
				this.match(TypeScriptParser.ReadOnly);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexMemberDeclaration(): IndexMemberDeclarationContext {
		let localctx: IndexMemberDeclarationContext = new IndexMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, TypeScriptParser.RULE_indexMemberDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1372;
			this.indexSignature();
			this.state = 1373;
			this.match(TypeScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generatorMethod(): GeneratorMethodContext {
		let localctx: GeneratorMethodContext = new GeneratorMethodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, TypeScriptParser.RULE_generatorMethod);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1377;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1375;
				this.match(TypeScriptParser.Async);
				this.state = 1376;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				}
				break;
			}
			this.state = 1380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1379;
				this.match(TypeScriptParser.Multiply);
				}
			}

			this.state = 1382;
			this.propertyName();
			this.state = 1383;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
				{
				this.state = 1384;
				this.formalParameterList();
				}
			}

			this.state = 1387;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1388;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1389;
			this.functionBody();
			this.state = 1390;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext {
		let localctx: GeneratorFunctionDeclarationContext = new GeneratorFunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, TypeScriptParser.RULE_generatorFunctionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===99) {
				{
				this.state = 1392;
				this.match(TypeScriptParser.Async);
				}
			}

			this.state = 1395;
			this.match(TypeScriptParser.Function_);
			this.state = 1396;
			this.match(TypeScriptParser.Multiply);
			this.state = 1398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4290773035) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 1167) !== 0)) {
				{
				this.state = 1397;
				this.identifier();
				}
			}

			this.state = 1400;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
				{
				this.state = 1401;
				this.formalParameterList();
				}
			}

			this.state = 1404;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1405;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1406;
			this.functionBody();
			this.state = 1407;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generatorBlock(): GeneratorBlockContext {
		let localctx: GeneratorBlockContext = new GeneratorBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, TypeScriptParser.RULE_generatorBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1410;
			this.generatorDefinition();
			this.state = 1415;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1411;
					this.match(TypeScriptParser.Comma);
					this.state = 1412;
					this.generatorDefinition();
					}
					}
				}
				this.state = 1417;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
			}
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 1418;
				this.match(TypeScriptParser.Comma);
				}
			}

			this.state = 1421;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generatorDefinition(): GeneratorDefinitionContext {
		let localctx: GeneratorDefinitionContext = new GeneratorDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, TypeScriptParser.RULE_generatorDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1423;
			this.match(TypeScriptParser.Multiply);
			this.state = 1424;
			this.iteratorDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iteratorBlock(): IteratorBlockContext {
		let localctx: IteratorBlockContext = new IteratorBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, TypeScriptParser.RULE_iteratorBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1426;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1427;
			this.iteratorDefinition();
			this.state = 1432;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1428;
					this.match(TypeScriptParser.Comma);
					this.state = 1429;
					this.iteratorDefinition();
					}
					}
				}
				this.state = 1434;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			}
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 1435;
				this.match(TypeScriptParser.Comma);
				}
			}

			this.state = 1438;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iteratorDefinition(): IteratorDefinitionContext {
		let localctx: IteratorDefinitionContext = new IteratorDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, TypeScriptParser.RULE_iteratorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1440;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 1441;
			this.singleExpression(0);
			this.state = 1442;
			this.match(TypeScriptParser.CloseBracket);
			this.state = 1443;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
				{
				this.state = 1444;
				this.formalParameterList();
				}
			}

			this.state = 1447;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1448;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1449;
			this.functionBody();
			this.state = 1450;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classElementName(): ClassElementNameContext {
		let localctx: ClassElementNameContext = new ClassElementNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, TypeScriptParser.RULE_classElementName);
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1452;
				this.propertyName();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1453;
				this.privateIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public privateIdentifier(): PrivateIdentifierContext {
		let localctx: PrivateIdentifierContext = new PrivateIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, TypeScriptParser.RULE_privateIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1456;
			this.match(TypeScriptParser.Hashtag);
			this.state = 1457;
			this.identifierName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, TypeScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1459;
				this.formalParameterArg();
				this.state = 1464;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1460;
						this.match(TypeScriptParser.Comma);
						this.state = 1461;
						this.formalParameterArg();
						}
						}
					}
					this.state = 1466;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
				}
				this.state = 1469;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1467;
					this.match(TypeScriptParser.Comma);
					this.state = 1468;
					this.lastFormalParameterArg();
					}
					break;
				}
				this.state = 1472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 1471;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1474;
				this.lastFormalParameterArg();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1475;
				this.arrayLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1476;
				this.objectLiteral();
				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1477;
					this.match(TypeScriptParser.Colon);
					this.state = 1478;
					this.formalParameterList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let localctx: FormalParameterArgContext = new FormalParameterArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, TypeScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 1483;
				this.decorator();
				}
			}

			this.state = 1487;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1486;
				this.accessibilityModifier();
				}
				break;
			}
			this.state = 1489;
			this.assignable();
			this.state = 1491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 1490;
				this.match(TypeScriptParser.QuestionMark);
				}
			}

			this.state = 1494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1493;
				this.typeAnnotation();
				}
			}

			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 1496;
				this.match(TypeScriptParser.Assign);
				this.state = 1497;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, TypeScriptParser.RULE_lastFormalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1500;
			this.match(TypeScriptParser.Ellipsis);
			this.state = 1501;
			this.identifier();
			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1502;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let localctx: FunctionBodyContext = new FunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, TypeScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1505;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let localctx: SourceElementsContext = new SourceElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, TypeScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1509;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1508;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1511;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let localctx: ArrayLiteralContext = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, TypeScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1513;
			this.match(TypeScriptParser.OpenBracket);
			this.state = 1514;
			this.elementList();
			this.state = 1515;
			this.match(TypeScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let localctx: ElementListContext = new ElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, TypeScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1520;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1517;
					this.match(TypeScriptParser.Comma);
					}
					}
				}
				this.state = 1522;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
			}
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 541016107) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
				{
				this.state = 1523;
				this.arrayElement();
				}
			}

			this.state = 1534;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1526;
						this.match(TypeScriptParser.Comma);
						}
						}
						this.state = 1529;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===12);
					this.state = 1531;
					this.arrayElement();
					}
					}
				}
				this.state = 1536;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
			}
			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 1537;
				this.match(TypeScriptParser.Comma);
				}
				}
				this.state = 1542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let localctx: ArrayElementContext = new ArrayElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, TypeScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 1543;
				this.match(TypeScriptParser.Ellipsis);
				}
			}

			this.state = 1548;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1546;
				this.singleExpression(0);
				}
				break;
			case 2:
				{
				this.state = 1547;
				this.identifier();
				}
				break;
			}
			this.state = 1551;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				this.state = 1550;
				this.match(TypeScriptParser.Comma);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let localctx: ObjectLiteralContext = new ObjectLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, TypeScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1553;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				this.state = 1554;
				this.propertyAssignment();
				this.state = 1559;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1555;
						this.match(TypeScriptParser.Comma);
						this.state = 1556;
						this.propertyAssignment();
						}
						}
					}
					this.state = 1561;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
				}
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 1562;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
				break;
			}
			this.state = 1567;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, TypeScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 1588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				localctx = new PropertyExpressionAssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1569;
				this.propertyName();
				this.state = 1570;
				_la = this._input.LA(1);
				if(!(_la===13 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1571;
				this.singleExpression(0);
				}
				break;
			case 2:
				localctx = new ComputedPropertyExpressionAssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1573;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 1574;
				this.singleExpression(0);
				this.state = 1575;
				this.match(TypeScriptParser.CloseBracket);
				this.state = 1576;
				this.match(TypeScriptParser.Colon);
				this.state = 1577;
				this.singleExpression(0);
				}
				break;
			case 3:
				localctx = new PropertyGetterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1579;
				this.getAccessor();
				}
				break;
			case 4:
				localctx = new PropertySetterContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1580;
				this.setAccessor();
				}
				break;
			case 5:
				localctx = new MethodPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1581;
				this.generatorMethod();
				}
				break;
			case 6:
				localctx = new PropertyShorthandContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1582;
				this.identifierOrKeyWord();
				}
				break;
			case 7:
				localctx = new SpreadOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 1583;
					this.match(TypeScriptParser.Ellipsis);
					}
				}

				this.state = 1586;
				this.singleExpression(0);
				}
				break;
			case 8:
				localctx = new RestParameterInObjectContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1587;
				this.restParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getAccessor(): GetAccessorContext {
		let localctx: GetAccessorContext = new GetAccessorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, TypeScriptParser.RULE_getAccessor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1590;
			this.getter();
			this.state = 1591;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1592;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1593;
				this.typeAnnotation();
				}
			}

			this.state = 1596;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1597;
			this.functionBody();
			this.state = 1598;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setAccessor(): SetAccessorContext {
		let localctx: SetAccessorContext = new SetAccessorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, TypeScriptParser.RULE_setAccessor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1600;
			this.setter();
			this.state = 1601;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
				{
				this.state = 1602;
				this.formalParameterList();
				}
			}

			this.state = 1605;
			this.match(TypeScriptParser.CloseParen);
			this.state = 1606;
			this.match(TypeScriptParser.OpenBrace);
			this.state = 1607;
			this.functionBody();
			this.state = 1608;
			this.match(TypeScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let localctx: PropertyNameContext = new PropertyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, TypeScriptParser.RULE_propertyName);
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1610;
				this.identifierName();
				}
				break;
			case 139:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1611;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1612;
				this.numericLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1613;
				this.match(TypeScriptParser.OpenBracket);
				this.state = 1614;
				this.singleExpression(0);
				this.state = 1615;
				this.match(TypeScriptParser.CloseBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, TypeScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1619;
			this.match(TypeScriptParser.OpenParen);
			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 541016107) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4294967295) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 235519) !== 0)) {
				{
				this.state = 1620;
				this.argumentList();
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 1621;
					this.match(TypeScriptParser.Comma);
					}
				}

				}
			}

			this.state = 1626;
			this.match(TypeScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, TypeScriptParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1628;
			this.argument();
			this.state = 1633;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1629;
					this.match(TypeScriptParser.Comma);
					this.state = 1630;
					this.argument();
					}
					}
				}
				this.state = 1635;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 217, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, TypeScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 1636;
				this.match(TypeScriptParser.Ellipsis);
				}
			}

			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1639;
				this.singleExpression(0);
				}
				break;
			case 2:
				{
				this.state = 1640;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, TypeScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1643;
			this.singleExpression(0);
			this.state = 1648;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1644;
					this.match(TypeScriptParser.Comma);
					this.state = 1645;
					this.singleExpression(0);
					}
					}
				}
				this.state = 1650;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SingleExpressionContext = new SingleExpressionContext(this, this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = localctx;
		let _startState: number = 274;
		this.enterRecursionRule(localctx, 274, TypeScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1716;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				localctx = new FunctionExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1652;
				this.anonymousFunction();
				}
				break;
			case 2:
				{
				localctx = new ClassExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1653;
				this.match(TypeScriptParser.Class);
				this.state = 1655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4290773035) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 1167) !== 0)) {
					{
					this.state = 1654;
					this.identifier();
					}
				}

				this.state = 1658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===32) {
					{
					this.state = 1657;
					this.typeParameters();
					}
				}

				this.state = 1660;
				this.classHeritage();
				this.state = 1661;
				this.classTail();
				}
				break;
			case 3:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1663;
				this.match(TypeScriptParser.New);
				this.state = 1664;
				this.singleExpression(0);
				this.state = 1666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===32) {
					{
					this.state = 1665;
					this.typeArguments();
					}
				}

				this.state = 1668;
				this.arguments();
				}
				break;
			case 4:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1670;
				this.match(TypeScriptParser.New);
				this.state = 1671;
				this.singleExpression(0);
				this.state = 1673;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1672;
					this.typeArguments();
					}
					break;
				}
				}
				break;
			case 5:
				{
				localctx = new DeleteExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1675;
				this.match(TypeScriptParser.Delete);
				this.state = 1676;
				this.singleExpression(42);
				}
				break;
			case 6:
				{
				localctx = new VoidExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1677;
				this.match(TypeScriptParser.Void);
				this.state = 1678;
				this.singleExpression(41);
				}
				break;
			case 7:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1679;
				this.match(TypeScriptParser.Typeof);
				this.state = 1680;
				this.singleExpression(40);
				}
				break;
			case 8:
				{
				localctx = new PreIncrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1681;
				this.match(TypeScriptParser.PlusPlus);
				this.state = 1682;
				this.singleExpression(39);
				}
				break;
			case 9:
				{
				localctx = new PreDecreaseExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1683;
				this.match(TypeScriptParser.MinusMinus);
				this.state = 1684;
				this.singleExpression(38);
				}
				break;
			case 10:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1685;
				this.match(TypeScriptParser.Plus);
				this.state = 1686;
				this.singleExpression(37);
				}
				break;
			case 11:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1687;
				this.match(TypeScriptParser.Minus);
				this.state = 1688;
				this.singleExpression(36);
				}
				break;
			case 12:
				{
				localctx = new BitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1689;
				this.match(TypeScriptParser.BitNot);
				this.state = 1690;
				this.singleExpression(35);
				}
				break;
			case 13:
				{
				localctx = new NotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1691;
				this.match(TypeScriptParser.Not);
				this.state = 1692;
				this.singleExpression(34);
				}
				break;
			case 14:
				{
				localctx = new AwaitExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1693;
				this.match(TypeScriptParser.Await);
				this.state = 1694;
				this.singleExpression(33);
				}
				break;
			case 15:
				{
				localctx = new IteratorsExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1695;
				this.iteratorBlock();
				}
				break;
			case 16:
				{
				localctx = new GeneratorsExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1696;
				this.generatorBlock();
				}
				break;
			case 17:
				{
				localctx = new GeneratorsFunctionExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1697;
				this.generatorFunctionDeclaration();
				}
				break;
			case 18:
				{
				localctx = new YieldExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1698;
				this.yieldStatement();
				}
				break;
			case 19:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1699;
				this.match(TypeScriptParser.This);
				}
				break;
			case 20:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1700;
				this.identifierName();
				this.state = 1702;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1701;
					this.singleExpression(0);
					}
					break;
				}
				}
				break;
			case 21:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1704;
				this.match(TypeScriptParser.Super);
				}
				break;
			case 22:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1705;
				this.literal();
				}
				break;
			case 23:
				{
				localctx = new ArrayLiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1706;
				this.arrayLiteral();
				}
				break;
			case 24:
				{
				localctx = new ObjectLiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1707;
				this.objectLiteral();
				}
				break;
			case 25:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1708;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1709;
				this.expressionSequence();
				this.state = 1710;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			case 26:
				{
				localctx = new GenericTypesContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1712;
				this.typeArguments();
				this.state = 1714;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1713;
					this.expressionSequence();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1832;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1830;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
					case 1:
						{
						localctx = new OptionalChainExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1718;
						if (!(this.precpred(this._ctx, 50))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 50)");
						}
						this.state = 1719;
						this.match(TypeScriptParser.QuestionMarkDot);
						this.state = 1720;
						this.singleExpression(51);
						}
						break;
					case 2:
						{
						localctx = new PowerExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1721;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 1722;
						this.match(TypeScriptParser.Power);
						this.state = 1723;
						this.singleExpression(32);
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1724;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 1725;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 234881024) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1726;
						this.singleExpression(32);
						}
						break;
					case 4:
						{
						localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1727;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 1728;
						_la = this._input.LA(1);
						if(!(_la===21 || _la===22)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1729;
						this.singleExpression(31);
						}
						break;
					case 5:
						{
						localctx = new CoalesceExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1730;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 1731;
						this.match(TypeScriptParser.NullCoalesce);
						this.state = 1732;
						this.singleExpression(30);
						}
						break;
					case 6:
						{
						localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1733;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 1740;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
						case 1:
							{
							this.state = 1734;
							this.match(TypeScriptParser.LeftShiftArithmetic);
							}
							break;
						case 2:
							{
							this.state = 1735;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1736;
							this.match(TypeScriptParser.MoreThan);
							}
							break;
						case 3:
							{
							this.state = 1737;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1738;
							this.match(TypeScriptParser.MoreThan);
							this.state = 1739;
							this.match(TypeScriptParser.MoreThan);
							}
							break;
						}
						this.state = 1742;
						this.singleExpression(29);
						}
						break;
					case 7:
						{
						localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1743;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 1744;
						_la = this._input.LA(1);
						if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1745;
						this.singleExpression(28);
						}
						break;
					case 8:
						{
						localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1746;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1747;
						this.match(TypeScriptParser.Instanceof);
						this.state = 1748;
						this.singleExpression(27);
						}
						break;
					case 9:
						{
						localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1749;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1750;
						this.match(TypeScriptParser.In);
						this.state = 1751;
						this.singleExpression(26);
						}
						break;
					case 10:
						{
						localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1752;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1753;
						_la = this._input.LA(1);
						if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1754;
						this.singleExpression(25);
						}
						break;
					case 11:
						{
						localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1755;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1756;
						this.match(TypeScriptParser.BitAnd);
						this.state = 1757;
						this.singleExpression(24);
						}
						break;
					case 12:
						{
						localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1758;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1759;
						this.match(TypeScriptParser.BitXOr);
						this.state = 1760;
						this.singleExpression(23);
						}
						break;
					case 13:
						{
						localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1761;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1762;
						this.match(TypeScriptParser.BitOr);
						this.state = 1763;
						this.singleExpression(22);
						}
						break;
					case 14:
						{
						localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1764;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1765;
						this.match(TypeScriptParser.And);
						this.state = 1766;
						this.singleExpression(21);
						}
						break;
					case 15:
						{
						localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1767;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1768;
						this.match(TypeScriptParser.Or);
						this.state = 1769;
						this.singleExpression(20);
						}
						break;
					case 16:
						{
						localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1770;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1771;
						this.match(TypeScriptParser.QuestionMark);
						this.state = 1772;
						this.singleExpression(0);
						this.state = 1773;
						this.match(TypeScriptParser.Colon);
						this.state = 1774;
						this.singleExpression(19);
						}
						break;
					case 17:
						{
						localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1776;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1777;
						this.match(TypeScriptParser.Assign);
						this.state = 1778;
						this.singleExpression(18);
						}
						break;
					case 18:
						{
						localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1779;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1780;
						this.assignmentOperator();
						this.state = 1781;
						this.singleExpression(17);
						}
						break;
					case 19:
						{
						localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1783;
						if (!(this.precpred(this._ctx, 51))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 51)");
						}
						this.state = 1785;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===15) {
							{
							this.state = 1784;
							this.match(TypeScriptParser.QuestionMarkDot);
							}
						}

						this.state = 1787;
						this.match(TypeScriptParser.OpenBracket);
						this.state = 1788;
						this.expressionSequence();
						this.state = 1789;
						this.match(TypeScriptParser.CloseBracket);
						}
						break;
					case 20:
						{
						localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1791;
						if (!(this.precpred(this._ctx, 49))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 49)");
						}
						this.state = 1793;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===24) {
							{
							this.state = 1792;
							this.match(TypeScriptParser.Not);
							}
						}

						this.state = 1795;
						this.match(TypeScriptParser.Dot);
						this.state = 1797;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===30) {
							{
							this.state = 1796;
							this.match(TypeScriptParser.Hashtag);
							}
						}

						this.state = 1799;
						this.identifierName();
						this.state = 1801;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
						case 1:
							{
							this.state = 1800;
							this.typeGeneric();
							}
							break;
						}
						}
						break;
					case 21:
						{
						localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1803;
						if (!(this.precpred(this._ctx, 48))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 48)");
						}
						this.state = 1805;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===14) {
							{
							this.state = 1804;
							this.match(TypeScriptParser.QuestionMark);
							}
						}

						this.state = 1807;
						this.match(TypeScriptParser.Dot);
						this.state = 1809;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===30) {
							{
							this.state = 1808;
							this.match(TypeScriptParser.Hashtag);
							}
						}

						this.state = 1811;
						this.identifierName();
						this.state = 1813;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
						case 1:
							{
							this.state = 1812;
							this.typeGeneric();
							}
							break;
						}
						}
						break;
					case 22:
						{
						localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1815;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 1816;
						this.arguments();
						}
						break;
					case 23:
						{
						localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1817;
						if (!(this.precpred(this._ctx, 44))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 44)");
						}
						this.state = 1818;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1819;
						this.match(TypeScriptParser.PlusPlus);
						}
						break;
					case 24:
						{
						localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1820;
						if (!(this.precpred(this._ctx, 43))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 43)");
						}
						this.state = 1821;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1822;
						this.match(TypeScriptParser.MinusMinus);
						}
						break;
					case 25:
						{
						localctx = new TemplateStringExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1823;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1824;
						this.templateStringLiteral();
						}
						break;
					case 26:
						{
						localctx = new CastAsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1825;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1826;
						this.match(TypeScriptParser.As);
						this.state = 1827;
						this.asExpression();
						}
						break;
					case 27:
						{
						localctx = new NonNullAssertionExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TypeScriptParser.RULE_singleExpression);
						this.state = 1828;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1829;
						this.match(TypeScriptParser.Not);
						}
						break;
					}
					}
				}
				this.state = 1834;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asExpression(): AsExpressionContext {
		let localctx: AsExpressionContext = new AsExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, TypeScriptParser.RULE_asExpression);
		try {
			this.state = 1841;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1835;
				this.predefinedType();
				this.state = 1838;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1836;
					this.match(TypeScriptParser.OpenBracket);
					this.state = 1837;
					this.match(TypeScriptParser.CloseBracket);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1840;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let localctx: AssignableContext = new AssignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, TypeScriptParser.RULE_assignable);
		try {
			this.state = 1847;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1843;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1844;
				this.keyword();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1845;
				this.arrayLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1846;
				this.objectLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anonymousFunction(): AnonymousFunctionContext {
		let localctx: AnonymousFunctionContext = new AnonymousFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, TypeScriptParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.state = 1870;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1849;
				this.functionDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===99) {
					{
					this.state = 1850;
					this.match(TypeScriptParser.Async);
					}
				}

				this.state = 1853;
				this.match(TypeScriptParser.Function_);
				this.state = 1855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1854;
					this.match(TypeScriptParser.Multiply);
					}
				}

				this.state = 1857;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
					{
					this.state = 1858;
					this.formalParameterList();
					}
				}

				this.state = 1861;
				this.match(TypeScriptParser.CloseParen);
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1862;
					this.typeAnnotation();
					}
				}

				this.state = 1865;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1866;
				this.functionBody();
				this.state = 1867;
				this.match(TypeScriptParser.CloseBrace);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1869;
				this.arrowFunctionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		let localctx: ArrowFunctionDeclarationContext = new ArrowFunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, TypeScriptParser.RULE_arrowFunctionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1873;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 1872;
				this.match(TypeScriptParser.Async);
				}
				break;
			}
			this.state = 1875;
			this.arrowFunctionParameters();
			this.state = 1877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1876;
				this.typeAnnotation();
				}
			}

			this.state = 1879;
			this.match(TypeScriptParser.ARROW);
			this.state = 1880;
			this.arrowFunctionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, TypeScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 135:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1882;
				this.propertyName();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1883;
				this.match(TypeScriptParser.OpenParen);
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131344) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 2147483647) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 13) !== 0)) {
					{
					this.state = 1884;
					this.formalParameterList();
					}
				}

				this.state = 1887;
				this.match(TypeScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, TypeScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 1895;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1890;
				this.singleExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1891;
				this.match(TypeScriptParser.OpenBrace);
				this.state = 1892;
				this.functionBody();
				this.state = 1893;
				this.match(TypeScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, TypeScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1897;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 8191) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, TypeScriptParser.RULE_literal);
		try {
			this.state = 1906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1899;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1900;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			case 139:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1901;
				this.match(TypeScriptParser.StringLiteral);
				}
				break;
			case 140:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1902;
				this.templateStringLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1903;
				this.match(TypeScriptParser.RegularExpressionLiteral);
				}
				break;
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1904;
				this.numericLiteral();
				}
				break;
			case 66:
			case 67:
			case 68:
			case 69:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1905;
				this.bigintLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateStringLiteral(): TemplateStringLiteralContext {
		let localctx: TemplateStringLiteralContext = new TemplateStringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, TypeScriptParser.RULE_templateStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1908;
			this.match(TypeScriptParser.BackTick);
			this.state = 1912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 7) !== 0)) {
				{
				{
				this.state = 1909;
				this.templateStringAtom();
				}
				}
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1915;
			this.match(TypeScriptParser.BackTick);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateStringAtom(): TemplateStringAtomContext {
		let localctx: TemplateStringAtomContext = new TemplateStringAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, TypeScriptParser.RULE_templateStringAtom);
		try {
			this.state = 1923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 148:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1917;
				this.match(TypeScriptParser.TemplateStringAtom);
				}
				break;
			case 147:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1918;
				this.match(TypeScriptParser.TemplateStringStartExpression);
				this.state = 1919;
				this.singleExpression(0);
				this.state = 1920;
				this.match(TypeScriptParser.TemplateCloseBrace);
				}
				break;
			case 146:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1922;
				this.match(TypeScriptParser.TemplateStringEscapeAtom);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let localctx: NumericLiteralContext = new NumericLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, TypeScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1925;
			_la = this._input.LA(1);
			if(!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bigintLiteral(): BigintLiteralContext {
		let localctx: BigintLiteralContext = new BigintLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, TypeScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1927;
			_la = this._input.LA(1);
			if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let localctx: GetterContext = new GetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, TypeScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1929;
			if (!(this.n("get"))) {
				throw this.createFailedPredicateException("this.n(\"get\")");
			}
			this.state = 1930;
			this.identifier();
			this.state = 1931;
			this.classElementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let localctx: SetterContext = new SetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, TypeScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1933;
			if (!(this.n("set"))) {
				throw this.createFailedPredicateException("this.n(\"set\")");
			}
			this.state = 1934;
			this.identifier();
			this.state = 1935;
			this.classElementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let localctx: IdentifierNameContext = new IdentifierNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, TypeScriptParser.RULE_identifierName);
		try {
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1937;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1938;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, TypeScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1941;
			_la = this._input.LA(1);
			if(!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4290773035) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 1167) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		let localctx: IdentifierOrKeyWordContext = new IdentifierOrKeyWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, TypeScriptParser.RULE_identifierOrKeyWord);
		try {
			this.state = 1946;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1943;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1944;
				this.match(TypeScriptParser.TypeAlias);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1945;
				this.match(TypeScriptParser.Require);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let localctx: ReservedWordContext = new ReservedWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, TypeScriptParser.RULE_reservedWord);
		try {
			this.state = 1951;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
			case 129:
			case 132:
			case 133:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1948;
				this.keyword();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1949;
				this.match(TypeScriptParser.NullLiteral);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1950;
				this.match(TypeScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, TypeScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1953;
			_la = this._input.LA(1);
			if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 4294967295) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 1678606335) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let localctx: EosContext = new EosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, TypeScriptParser.RULE_eos);
		try {
			this.state = 1959;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1955;
				this.match(TypeScriptParser.SemiColon);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1956;
				this.match(TypeScriptParser.EOF);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1957;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1958;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.unionOrIntersectionOrPrimaryType_sempred(localctx as UnionOrIntersectionOrPrimaryTypeContext, predIndex);
		case 11:
			return this.primaryType_sempred(localctx as PrimaryTypeContext, predIndex);
		case 20:
			return this.arrayType_sempred(localctx as ArrayTypeContext, predIndex);
		case 55:
			return this.decoratorMemberExpression_sempred(localctx as DecoratorMemberExpressionContext, predIndex);
		case 82:
			return this.expressionStatement_sempred(localctx as ExpressionStatementContext, predIndex);
		case 84:
			return this.iterationStatement_sempred(localctx as IterationStatementContext, predIndex);
		case 86:
			return this.continueStatement_sempred(localctx as ContinueStatementContext, predIndex);
		case 87:
			return this.breakStatement_sempred(localctx as BreakStatementContext, predIndex);
		case 88:
			return this.returnStatement_sempred(localctx as ReturnStatementContext, predIndex);
		case 89:
			return this.yieldStatement_sempred(localctx as YieldStatementContext, predIndex);
		case 97:
			return this.throwStatement_sempred(localctx as ThrowStatementContext, predIndex);
		case 112:
			return this.generatorMethod_sempred(localctx as GeneratorMethodContext, predIndex);
		case 137:
			return this.singleExpression_sempred(localctx as SingleExpressionContext, predIndex);
		case 150:
			return this.getter_sempred(localctx as GetterContext, predIndex);
		case 151:
			return this.setter_sempred(localctx as SetterContext, predIndex);
		case 157:
			return this.eos_sempred(localctx as EosContext, predIndex);
		}
		return true;
	}
	private unionOrIntersectionOrPrimaryType_sempred(localctx: UnionOrIntersectionOrPrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primaryType_sempred(localctx: PrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private arrayType_sempred(localctx: ArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private decoratorMemberExpression_sempred(localctx: DecoratorMemberExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expressionStatement_sempred(localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.p("of");
		case 8:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.notLineTerminator();
		}
		return true;
	}
	private generatorMethod_sempred(localctx: GeneratorMethodContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.notLineTerminator();
		}
		return true;
	}
	private singleExpression_sempred(localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 50);
		case 16:
			return this.precpred(this._ctx, 32);
		case 17:
			return this.precpred(this._ctx, 31);
		case 18:
			return this.precpred(this._ctx, 30);
		case 19:
			return this.precpred(this._ctx, 29);
		case 20:
			return this.precpred(this._ctx, 28);
		case 21:
			return this.precpred(this._ctx, 27);
		case 22:
			return this.precpred(this._ctx, 26);
		case 23:
			return this.precpred(this._ctx, 25);
		case 24:
			return this.precpred(this._ctx, 24);
		case 25:
			return this.precpred(this._ctx, 23);
		case 26:
			return this.precpred(this._ctx, 22);
		case 27:
			return this.precpred(this._ctx, 21);
		case 28:
			return this.precpred(this._ctx, 20);
		case 29:
			return this.precpred(this._ctx, 19);
		case 30:
			return this.precpred(this._ctx, 18);
		case 31:
			return this.precpred(this._ctx, 17);
		case 32:
			return this.precpred(this._ctx, 16);
		case 33:
			return this.precpred(this._ctx, 51);
		case 34:
			return this.precpred(this._ctx, 49);
		case 35:
			return this.precpred(this._ctx, 48);
		case 36:
			return this.precpred(this._ctx, 45);
		case 37:
			return this.precpred(this._ctx, 44);
		case 38:
			return this.notLineTerminator();
		case 39:
			return this.precpred(this._ctx, 43);
		case 40:
			return this.notLineTerminator();
		case 41:
			return this.precpred(this._ctx, 15);
		case 42:
			return this.precpred(this._ctx, 2);
		case 43:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private getter_sempred(localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.n("get");
		}
		return true;
	}
	private setter_sempred(localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.n("set");
		}
		return true;
	}
	private eos_sempred(localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.lineTerminatorAhead();
		case 47:
			return this.closeBrace();
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,148,1962,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,1,0,1,0,1,0,1,1,1,1,3,1,322,8,1,1,2,1,2,3,2,326,8,2,1,2,1,2,1,3,1,
	3,1,3,5,3,333,8,3,10,3,12,3,336,9,3,1,4,1,4,3,4,340,8,4,1,4,1,4,1,4,1,4,
	1,4,3,4,347,8,4,1,5,1,5,1,5,1,6,1,6,3,6,354,8,6,1,6,1,6,1,7,1,7,1,7,5,7,
	361,8,7,10,7,12,7,364,9,7,1,8,1,8,1,9,3,9,369,8,9,1,9,1,9,1,9,1,9,3,9,375,
	8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,386,8,10,10,10,12,
	10,389,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,411,8,11,1,11,1,11,1,11,1,
	11,3,11,417,8,11,1,11,5,11,420,8,11,10,11,12,11,423,9,11,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,3,12,434,8,12,1,12,1,12,1,12,1,12,1,12,3,
	12,441,8,12,1,13,1,13,3,13,445,8,13,1,14,1,14,1,14,3,14,450,8,14,1,14,1,
	14,1,15,1,15,3,15,456,8,15,1,16,1,16,3,16,460,8,16,1,16,1,16,1,17,1,17,
	3,17,466,8,17,1,18,1,18,1,18,5,18,471,8,18,10,18,12,18,474,9,18,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,3,19,483,8,19,3,19,485,8,19,1,20,1,20,1,20,
	1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,5,22,499,8,22,10,22,12,22,
	502,9,22,1,22,3,22,505,8,22,1,23,3,23,508,8,23,1,23,1,23,3,23,512,8,23,
	1,23,1,23,1,23,1,23,1,24,1,24,3,24,520,8,24,1,24,1,24,3,24,524,8,24,1,24,
	1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,4,26,537,8,26,11,26,12,
	26,538,1,26,1,26,3,26,543,8,26,1,27,3,27,546,8,27,1,27,1,27,3,27,550,8,
	27,1,27,3,27,553,8,27,1,27,1,27,3,27,557,8,27,1,28,1,28,1,28,1,29,3,29,
	563,8,29,1,29,1,29,3,29,567,8,29,1,29,1,29,3,29,571,8,29,1,30,1,30,1,30,
	1,30,5,30,577,8,30,10,30,12,30,580,9,30,1,30,1,30,3,30,584,8,30,1,30,3,
	30,587,8,30,3,30,589,8,30,1,31,1,31,1,31,5,31,594,8,31,10,31,12,31,597,
	9,31,1,32,1,32,3,32,601,8,32,1,33,3,33,604,8,33,1,33,3,33,607,8,33,1,33,
	1,33,1,33,3,33,612,8,33,1,33,3,33,615,8,33,1,33,3,33,618,8,33,1,34,1,34,
	1,34,3,34,623,8,34,1,35,3,35,626,8,35,1,35,3,35,629,8,35,1,35,1,35,3,35,
	633,8,35,1,36,1,36,1,37,1,37,3,37,639,8,37,1,38,1,38,3,38,643,8,38,1,38,
	1,38,3,38,647,8,38,1,38,1,38,3,38,651,8,38,1,39,1,39,1,39,1,39,1,39,1,39,
	1,39,1,40,1,40,3,40,662,8,40,1,40,1,40,1,41,3,41,667,8,41,1,41,1,41,1,41,
	3,41,672,8,41,1,41,1,41,1,41,1,41,1,42,3,42,679,8,42,1,42,1,42,1,42,3,42,
	684,8,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,692,8,42,1,43,3,43,695,8,43,
	1,43,3,43,698,8,43,1,43,1,43,1,43,3,43,703,8,43,1,43,3,43,706,8,43,1,43,
	1,43,3,43,710,8,43,1,44,1,44,1,44,1,45,1,45,1,45,5,45,718,8,45,10,45,12,
	45,721,9,45,1,46,3,46,724,8,46,1,46,1,46,1,46,1,46,3,46,730,8,46,1,46,1,
	46,1,47,1,47,3,47,736,8,47,1,48,1,48,1,48,5,48,741,8,48,10,48,12,48,744,
	9,48,1,49,1,49,1,49,3,49,749,8,49,1,50,3,50,752,8,50,1,50,1,50,1,50,1,50,
	3,50,758,8,50,1,50,1,50,1,51,1,51,4,51,764,8,51,11,51,12,51,765,1,51,5,
	51,769,8,51,10,51,12,51,772,9,51,1,52,1,52,1,52,1,52,1,52,1,53,4,53,780,
	8,53,11,53,12,53,781,1,54,1,54,1,54,3,54,787,8,54,1,55,1,55,1,55,1,55,1,
	55,1,55,3,55,795,8,55,1,55,1,55,1,55,5,55,800,8,55,10,55,12,55,803,9,55,
	1,56,1,56,1,56,1,57,3,57,809,8,57,1,57,1,57,1,58,3,58,814,8,58,1,58,1,58,
	1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	3,59,847,8,59,1,60,1,60,3,60,851,8,60,1,60,1,60,1,61,4,61,856,8,61,11,61,
	12,61,857,1,62,1,62,1,62,1,62,1,62,3,62,865,8,62,1,62,1,62,1,63,1,63,1,
	63,1,64,3,64,873,8,64,1,64,1,64,3,64,877,8,64,1,64,1,64,1,64,1,64,1,64,
	3,64,884,8,64,1,65,1,65,1,65,1,65,5,65,890,8,65,10,65,12,65,893,9,65,1,
	65,1,65,3,65,897,8,65,3,65,899,8,65,1,65,1,65,1,66,1,66,1,66,3,66,906,8,
	66,1,67,1,67,3,67,910,8,67,1,68,1,68,1,69,1,69,1,69,1,70,1,70,3,70,919,
	8,70,1,70,1,70,3,70,923,8,70,1,71,1,71,1,71,1,72,1,72,1,72,3,72,931,8,72,
	1,73,1,73,3,73,935,8,73,1,73,1,73,3,73,939,8,73,1,73,1,73,1,73,1,73,1,73,
	1,73,1,73,3,73,948,8,73,1,74,1,74,1,74,1,74,1,74,1,74,3,74,956,8,74,1,74,
	1,74,3,74,960,8,74,1,75,1,75,1,75,1,75,5,75,966,8,75,10,75,12,75,969,9,
	75,1,75,1,75,3,75,973,8,75,3,75,975,8,75,1,75,1,75,1,76,1,76,1,76,3,76,
	982,8,76,1,77,1,77,1,77,3,77,987,8,77,1,78,1,78,3,78,991,8,78,1,78,1,78,
	3,78,995,8,78,1,78,3,78,998,8,78,1,78,3,78,1001,8,78,1,78,3,78,1004,8,78,
	1,78,1,78,3,78,1008,8,78,1,78,1,78,3,78,1012,8,78,1,78,1,78,3,78,1016,8,
	78,3,78,1018,8,78,1,79,1,79,1,79,5,79,1023,8,79,10,79,12,79,1026,9,79,1,
	80,1,80,1,80,3,80,1031,8,80,1,80,3,80,1034,8,80,1,80,3,80,1037,8,80,1,80,
	1,80,3,80,1041,8,80,1,80,3,80,1044,8,80,1,81,1,81,1,82,1,82,1,82,3,82,1051,
	8,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1060,8,83,1,84,1,84,1,84,1,
	84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,
	1079,8,84,1,84,1,84,3,84,1083,8,84,1,84,1,84,3,84,1087,8,84,1,84,1,84,1,
	84,1,84,1,84,1,84,1,84,1,84,3,84,1097,8,84,1,84,1,84,3,84,1101,8,84,1,84,
	1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,
	84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1125,8,84,1,84,1,84,1,84,1,84,1,84,
	1,84,1,84,3,84,1134,8,84,1,84,1,84,1,84,1,84,1,84,3,84,1141,8,84,1,84,1,
	84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1151,8,84,1,84,1,84,1,84,3,84,1156,
	8,84,1,85,1,85,1,86,1,86,1,86,3,86,1163,8,86,1,86,1,86,1,87,1,87,1,87,3,
	87,1170,8,87,1,87,1,87,1,88,1,88,1,88,3,88,1177,8,88,1,88,1,88,1,89,1,89,
	1,89,3,89,1184,8,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,
	91,1,91,1,91,1,91,1,92,1,92,3,92,1202,8,92,1,92,1,92,3,92,1206,8,92,3,92,
	1208,8,92,1,92,1,92,1,93,4,93,1213,8,93,11,93,12,93,1214,1,94,1,94,1,94,
	1,94,3,94,1221,8,94,1,95,1,95,1,95,3,95,1226,8,95,1,96,1,96,1,96,1,96,1,
	97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,3,98,1241,8,98,1,98,3,98,1244,
	8,98,1,99,1,99,1,99,1,99,3,99,1250,8,99,1,99,1,99,3,99,1254,8,99,1,99,1,
	99,1,100,1,100,1,100,1,101,1,101,1,101,1,102,3,102,1265,8,102,1,102,1,102,
	3,102,1269,8,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,3,102,1278,8,
	102,1,103,3,103,1281,8,103,1,103,1,103,3,103,1285,8,103,3,103,1287,8,103,
	1,103,3,103,1290,8,103,1,103,1,103,1,103,3,103,1295,8,103,1,103,1,103,1,
	103,1,104,3,104,1301,8,104,1,104,3,104,1304,8,104,1,105,1,105,5,105,1308,
	8,105,10,105,12,105,1311,9,105,1,105,1,105,1,106,1,106,1,106,1,107,1,107,
	1,107,1,108,1,108,3,108,1323,8,108,1,108,1,108,1,108,3,108,1328,8,108,1,
	109,1,109,1,109,3,109,1333,8,109,1,109,3,109,1336,8,109,1,109,3,109,1339,
	8,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,3,109,
	1351,8,109,1,109,1,109,1,109,3,109,1356,8,109,1,109,3,109,1359,8,109,1,
	110,3,110,1362,8,110,1,110,3,110,1365,8,110,1,110,3,110,1368,8,110,1,110,
	3,110,1371,8,110,1,111,1,111,1,111,1,112,1,112,3,112,1378,8,112,1,112,3,
	112,1381,8,112,1,112,1,112,1,112,3,112,1386,8,112,1,112,1,112,1,112,1,112,
	1,112,1,113,3,113,1394,8,113,1,113,1,113,1,113,3,113,1399,8,113,1,113,1,
	113,3,113,1403,8,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,
	114,5,114,1414,8,114,10,114,12,114,1417,9,114,1,114,3,114,1420,8,114,1,
	114,1,114,1,115,1,115,1,115,1,116,1,116,1,116,1,116,5,116,1431,8,116,10,
	116,12,116,1434,9,116,1,116,3,116,1437,8,116,1,116,1,116,1,117,1,117,1,
	117,1,117,1,117,3,117,1446,8,117,1,117,1,117,1,117,1,117,1,117,1,118,1,
	118,3,118,1455,8,118,1,119,1,119,1,119,1,120,1,120,1,120,5,120,1463,8,120,
	10,120,12,120,1466,9,120,1,120,1,120,3,120,1470,8,120,1,120,3,120,1473,
	8,120,1,120,1,120,1,120,1,120,1,120,3,120,1480,8,120,3,120,1482,8,120,1,
	121,3,121,1485,8,121,1,121,3,121,1488,8,121,1,121,1,121,3,121,1492,8,121,
	1,121,3,121,1495,8,121,1,121,1,121,3,121,1499,8,121,1,122,1,122,1,122,3,
	122,1504,8,122,1,123,3,123,1507,8,123,1,124,4,124,1510,8,124,11,124,12,
	124,1511,1,125,1,125,1,125,1,125,1,126,5,126,1519,8,126,10,126,12,126,1522,
	9,126,1,126,3,126,1525,8,126,1,126,4,126,1528,8,126,11,126,12,126,1529,
	1,126,5,126,1533,8,126,10,126,12,126,1536,9,126,1,126,5,126,1539,8,126,
	10,126,12,126,1542,9,126,1,127,3,127,1545,8,127,1,127,1,127,3,127,1549,
	8,127,1,127,3,127,1552,8,127,1,128,1,128,1,128,1,128,5,128,1558,8,128,10,
	128,12,128,1561,9,128,1,128,3,128,1564,8,128,3,128,1566,8,128,1,128,1,128,
	1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
	1,129,1,129,1,129,3,129,1585,8,129,1,129,1,129,3,129,1589,8,129,1,130,1,
	130,1,130,1,130,3,130,1595,8,130,1,130,1,130,1,130,1,130,1,131,1,131,1,
	131,3,131,1604,8,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,
	132,1,132,1,132,1,132,3,132,1618,8,132,1,133,1,133,1,133,3,133,1623,8,133,
	3,133,1625,8,133,1,133,1,133,1,134,1,134,1,134,5,134,1632,8,134,10,134,
	12,134,1635,9,134,1,135,3,135,1638,8,135,1,135,1,135,3,135,1642,8,135,1,
	136,1,136,1,136,5,136,1647,8,136,10,136,12,136,1650,9,136,1,137,1,137,1,
	137,1,137,3,137,1656,8,137,1,137,3,137,1659,8,137,1,137,1,137,1,137,1,137,
	1,137,1,137,3,137,1667,8,137,1,137,1,137,1,137,1,137,1,137,3,137,1674,8,
	137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,
	137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,
	137,1,137,1,137,1,137,3,137,1703,8,137,1,137,1,137,1,137,1,137,1,137,1,
	137,1,137,1,137,1,137,1,137,3,137,1715,8,137,3,137,1717,8,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,1741,8,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,3,137,1786,8,137,1,137,1,137,1,137,
	1,137,1,137,1,137,3,137,1794,8,137,1,137,1,137,3,137,1798,8,137,1,137,1,
	137,3,137,1802,8,137,1,137,1,137,3,137,1806,8,137,1,137,1,137,3,137,1810,
	8,137,1,137,1,137,3,137,1814,8,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,5,137,1831,8,137,
	10,137,12,137,1834,9,137,1,138,1,138,1,138,3,138,1839,8,138,1,138,3,138,
	1842,8,138,1,139,1,139,1,139,1,139,3,139,1848,8,139,1,140,1,140,3,140,1852,
	8,140,1,140,1,140,3,140,1856,8,140,1,140,1,140,3,140,1860,8,140,1,140,1,
	140,3,140,1864,8,140,1,140,1,140,1,140,1,140,1,140,3,140,1871,8,140,1,141,
	3,141,1874,8,141,1,141,1,141,3,141,1878,8,141,1,141,1,141,1,141,1,142,1,
	142,1,142,3,142,1886,8,142,1,142,3,142,1889,8,142,1,143,1,143,1,143,1,143,
	1,143,3,143,1896,8,143,1,144,1,144,1,145,1,145,1,145,1,145,1,145,1,145,
	1,145,3,145,1907,8,145,1,146,1,146,5,146,1911,8,146,10,146,12,146,1914,
	9,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,1,147,3,147,1924,8,147,
	1,148,1,148,1,149,1,149,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,
	1,152,1,152,3,152,1940,8,152,1,153,1,153,1,154,1,154,1,154,3,154,1947,8,
	154,1,155,1,155,1,155,3,155,1952,8,155,1,156,1,156,1,157,1,157,1,157,1,
	157,3,157,1960,8,157,1,157,0,4,20,22,110,274,158,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
	146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
	182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
	218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
	254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
	290,292,294,296,298,300,302,304,306,308,310,312,314,0,17,2,0,40,40,42,42,
	1,0,11,12,2,0,112,113,116,116,2,0,119,119,122,122,2,0,100,101,138,138,3,
	0,77,77,107,107,111,111,1,0,101,102,2,0,13,13,16,16,1,0,25,27,1,0,21,22,
	1,0,32,35,1,0,36,39,1,0,45,57,1,0,61,65,1,0,66,69,6,0,96,97,99,99,101,101,
	118,131,135,135,138,138,6,0,70,101,103,117,119,119,121,122,129,129,132,
	133,2198,0,316,1,0,0,0,2,321,1,0,0,0,4,323,1,0,0,0,6,329,1,0,0,0,8,346,
	1,0,0,0,10,348,1,0,0,0,12,351,1,0,0,0,14,357,1,0,0,0,16,365,1,0,0,0,18,
	374,1,0,0,0,20,376,1,0,0,0,22,410,1,0,0,0,24,440,1,0,0,0,26,442,1,0,0,0,
	28,446,1,0,0,0,30,455,1,0,0,0,32,457,1,0,0,0,34,463,1,0,0,0,36,467,1,0,
	0,0,38,484,1,0,0,0,40,486,1,0,0,0,42,491,1,0,0,0,44,495,1,0,0,0,46,507,
	1,0,0,0,48,517,1,0,0,0,50,529,1,0,0,0,52,542,1,0,0,0,54,545,1,0,0,0,56,
	558,1,0,0,0,58,562,1,0,0,0,60,588,1,0,0,0,62,590,1,0,0,0,64,600,1,0,0,0,
	66,603,1,0,0,0,68,619,1,0,0,0,70,625,1,0,0,0,72,634,1,0,0,0,74,638,1,0,
	0,0,76,640,1,0,0,0,78,652,1,0,0,0,80,659,1,0,0,0,82,666,1,0,0,0,84,678,
	1,0,0,0,86,694,1,0,0,0,88,711,1,0,0,0,90,714,1,0,0,0,92,723,1,0,0,0,94,
	733,1,0,0,0,96,737,1,0,0,0,98,745,1,0,0,0,100,751,1,0,0,0,102,761,1,0,0,
	0,104,773,1,0,0,0,106,779,1,0,0,0,108,783,1,0,0,0,110,794,1,0,0,0,112,804,
	1,0,0,0,114,808,1,0,0,0,116,813,1,0,0,0,118,846,1,0,0,0,120,848,1,0,0,0,
	122,855,1,0,0,0,124,859,1,0,0,0,126,868,1,0,0,0,128,883,1,0,0,0,130,885,
	1,0,0,0,132,902,1,0,0,0,134,909,1,0,0,0,136,911,1,0,0,0,138,913,1,0,0,0,
	140,918,1,0,0,0,142,924,1,0,0,0,144,927,1,0,0,0,146,947,1,0,0,0,148,959,
	1,0,0,0,150,961,1,0,0,0,152,978,1,0,0,0,154,986,1,0,0,0,156,1017,1,0,0,
	0,158,1019,1,0,0,0,160,1030,1,0,0,0,162,1045,1,0,0,0,164,1047,1,0,0,0,166,
	1052,1,0,0,0,168,1155,1,0,0,0,170,1157,1,0,0,0,172,1159,1,0,0,0,174,1166,
	1,0,0,0,176,1173,1,0,0,0,178,1180,1,0,0,0,180,1187,1,0,0,0,182,1193,1,0,
	0,0,184,1199,1,0,0,0,186,1212,1,0,0,0,188,1216,1,0,0,0,190,1222,1,0,0,0,
	192,1227,1,0,0,0,194,1231,1,0,0,0,196,1236,1,0,0,0,198,1245,1,0,0,0,200,
	1257,1,0,0,0,202,1260,1,0,0,0,204,1264,1,0,0,0,206,1280,1,0,0,0,208,1300,
	1,0,0,0,210,1305,1,0,0,0,212,1314,1,0,0,0,214,1317,1,0,0,0,216,1327,1,0,
	0,0,218,1358,1,0,0,0,220,1361,1,0,0,0,222,1372,1,0,0,0,224,1377,1,0,0,0,
	226,1393,1,0,0,0,228,1409,1,0,0,0,230,1423,1,0,0,0,232,1426,1,0,0,0,234,
	1440,1,0,0,0,236,1454,1,0,0,0,238,1456,1,0,0,0,240,1481,1,0,0,0,242,1484,
	1,0,0,0,244,1500,1,0,0,0,246,1506,1,0,0,0,248,1509,1,0,0,0,250,1513,1,0,
	0,0,252,1520,1,0,0,0,254,1544,1,0,0,0,256,1553,1,0,0,0,258,1588,1,0,0,0,
	260,1590,1,0,0,0,262,1600,1,0,0,0,264,1617,1,0,0,0,266,1619,1,0,0,0,268,
	1628,1,0,0,0,270,1637,1,0,0,0,272,1643,1,0,0,0,274,1716,1,0,0,0,276,1841,
	1,0,0,0,278,1847,1,0,0,0,280,1870,1,0,0,0,282,1873,1,0,0,0,284,1888,1,0,
	0,0,286,1895,1,0,0,0,288,1897,1,0,0,0,290,1906,1,0,0,0,292,1908,1,0,0,0,
	294,1923,1,0,0,0,296,1925,1,0,0,0,298,1927,1,0,0,0,300,1929,1,0,0,0,302,
	1933,1,0,0,0,304,1939,1,0,0,0,306,1941,1,0,0,0,308,1946,1,0,0,0,310,1951,
	1,0,0,0,312,1953,1,0,0,0,314,1959,1,0,0,0,316,317,5,13,0,0,317,318,3,274,
	137,0,318,1,1,0,0,0,319,322,3,250,125,0,320,322,3,256,128,0,321,319,1,0,
	0,0,321,320,1,0,0,0,322,3,1,0,0,0,323,325,5,32,0,0,324,326,3,6,3,0,325,
	324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,5,33,0,0,328,5,1,0,
	0,0,329,334,3,8,4,0,330,331,5,12,0,0,331,333,3,8,4,0,332,330,1,0,0,0,333,
	336,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,7,1,0,0,0,336,334,1,0,0,
	0,337,339,3,306,153,0,338,340,3,10,5,0,339,338,1,0,0,0,339,340,1,0,0,0,
	340,347,1,0,0,0,341,342,3,306,153,0,342,343,5,13,0,0,343,344,3,16,8,0,344,
	347,1,0,0,0,345,347,3,4,2,0,346,337,1,0,0,0,346,341,1,0,0,0,346,345,1,0,
	0,0,347,9,1,0,0,0,348,349,5,105,0,0,349,350,3,18,9,0,350,11,1,0,0,0,351,
	353,5,32,0,0,352,354,3,14,7,0,353,352,1,0,0,0,353,354,1,0,0,0,354,355,1,
	0,0,0,355,356,5,33,0,0,356,13,1,0,0,0,357,362,3,16,8,0,358,359,5,12,0,0,
	359,361,3,16,8,0,360,358,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,363,
	1,0,0,0,363,15,1,0,0,0,364,362,1,0,0,0,365,366,3,18,9,0,366,17,1,0,0,0,
	367,369,7,0,0,0,368,367,1,0,0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,375,
	3,20,10,0,371,375,3,46,23,0,372,375,3,48,24,0,373,375,3,28,14,0,374,368,
	1,0,0,0,374,371,1,0,0,0,374,372,1,0,0,0,374,373,1,0,0,0,375,19,1,0,0,0,
	376,377,6,10,-1,0,377,378,3,22,11,0,378,387,1,0,0,0,379,380,10,3,0,0,380,
	381,5,42,0,0,381,386,3,20,10,4,382,383,10,2,0,0,383,384,5,40,0,0,384,386,
	3,20,10,3,385,379,1,0,0,0,385,382,1,0,0,0,386,389,1,0,0,0,387,385,1,0,0,
	0,387,388,1,0,0,0,388,21,1,0,0,0,389,387,1,0,0,0,390,391,6,11,-1,0,391,
	392,5,6,0,0,392,393,3,18,9,0,393,394,5,7,0,0,394,411,1,0,0,0,395,411,3,
	24,12,0,396,411,3,26,13,0,397,411,3,32,16,0,398,399,5,4,0,0,399,400,3,44,
	22,0,400,401,5,5,0,0,401,411,1,0,0,0,402,411,3,50,25,0,403,411,5,88,0,0,
	404,405,3,26,13,0,405,406,5,136,0,0,406,407,3,22,11,2,407,411,1,0,0,0,408,
	409,5,128,0,0,409,411,3,22,11,1,410,390,1,0,0,0,410,395,1,0,0,0,410,396,
	1,0,0,0,410,397,1,0,0,0,410,398,1,0,0,0,410,402,1,0,0,0,410,403,1,0,0,0,
	410,404,1,0,0,0,410,408,1,0,0,0,411,421,1,0,0,0,412,413,10,6,0,0,413,414,
	4,11,3,0,414,416,5,4,0,0,415,417,3,22,11,0,416,415,1,0,0,0,416,417,1,0,
	0,0,417,418,1,0,0,0,418,420,5,5,0,0,419,412,1,0,0,0,420,423,1,0,0,0,421,
	419,1,0,0,0,421,422,1,0,0,0,422,23,1,0,0,0,423,421,1,0,0,0,424,441,5,118,
	0,0,425,441,5,59,0,0,426,441,5,119,0,0,427,441,5,61,0,0,428,441,5,121,0,
	0,429,441,5,60,0,0,430,441,5,122,0,0,431,441,5,139,0,0,432,434,5,123,0,
	0,433,432,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,441,5,124,0,0,436,
	441,5,120,0,0,437,441,5,125,0,0,438,441,5,126,0,0,439,441,5,81,0,0,440,
	424,1,0,0,0,440,425,1,0,0,0,440,426,1,0,0,0,440,427,1,0,0,0,440,428,1,0,
	0,0,440,429,1,0,0,0,440,430,1,0,0,0,440,431,1,0,0,0,440,433,1,0,0,0,440,
	436,1,0,0,0,440,437,1,0,0,0,440,438,1,0,0,0,440,439,1,0,0,0,441,25,1,0,
	0,0,442,444,3,30,15,0,443,445,3,28,14,0,444,443,1,0,0,0,444,445,1,0,0,0,
	445,27,1,0,0,0,446,447,5,32,0,0,447,449,3,14,7,0,448,450,3,28,14,0,449,
	448,1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,452,5,33,0,0,452,29,1,0,
	0,0,453,456,3,306,153,0,454,456,3,102,51,0,455,453,1,0,0,0,455,454,1,0,
	0,0,456,31,1,0,0,0,457,459,5,8,0,0,458,460,3,34,17,0,459,458,1,0,0,0,459,
	460,1,0,0,0,460,461,1,0,0,0,461,462,5,10,0,0,462,33,1,0,0,0,463,465,3,36,
	18,0,464,466,7,1,0,0,465,464,1,0,0,0,465,466,1,0,0,0,466,35,1,0,0,0,467,
	472,3,38,19,0,468,469,7,1,0,0,469,471,3,38,19,0,470,468,1,0,0,0,471,474,
	1,0,0,0,472,470,1,0,0,0,472,473,1,0,0,0,473,37,1,0,0,0,474,472,1,0,0,0,
	475,485,3,54,27,0,476,485,3,58,29,0,477,485,3,76,38,0,478,485,3,78,39,0,
	479,482,3,80,40,0,480,481,5,58,0,0,481,483,3,18,9,0,482,480,1,0,0,0,482,
	483,1,0,0,0,483,485,1,0,0,0,484,475,1,0,0,0,484,476,1,0,0,0,484,477,1,0,
	0,0,484,478,1,0,0,0,484,479,1,0,0,0,485,39,1,0,0,0,486,487,3,22,11,0,487,
	488,4,20,4,0,488,489,5,4,0,0,489,490,5,5,0,0,490,41,1,0,0,0,491,492,5,4,
	0,0,492,493,3,44,22,0,493,494,5,5,0,0,494,43,1,0,0,0,495,500,3,18,9,0,496,
	497,5,12,0,0,497,499,3,18,9,0,498,496,1,0,0,0,499,502,1,0,0,0,500,498,1,
	0,0,0,500,501,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,503,505,5,12,0,0,
	504,503,1,0,0,0,504,505,1,0,0,0,505,45,1,0,0,0,506,508,3,4,2,0,507,506,
	1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,511,5,6,0,0,510,512,3,60,30,
	0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,0,0,0,513,514,5,7,0,0,514,515,
	5,58,0,0,515,516,3,18,9,0,516,47,1,0,0,0,517,519,5,76,0,0,518,520,3,4,2,
	0,519,518,1,0,0,0,519,520,1,0,0,0,520,521,1,0,0,0,521,523,5,6,0,0,522,524,
	3,60,30,0,523,522,1,0,0,0,523,524,1,0,0,0,524,525,1,0,0,0,525,526,5,7,0,
	0,526,527,5,58,0,0,527,528,3,18,9,0,528,49,1,0,0,0,529,530,5,73,0,0,530,
	531,3,52,26,0,531,51,1,0,0,0,532,543,3,306,153,0,533,534,3,304,152,0,534,
	535,5,18,0,0,535,537,1,0,0,0,536,533,1,0,0,0,537,538,1,0,0,0,538,536,1,
	0,0,0,538,539,1,0,0,0,539,540,1,0,0,0,540,541,3,304,152,0,541,543,1,0,0,
	0,542,532,1,0,0,0,542,536,1,0,0,0,543,53,1,0,0,0,544,546,5,98,0,0,545,544,
	1,0,0,0,545,546,1,0,0,0,546,547,1,0,0,0,547,549,3,264,132,0,548,550,5,14,
	0,0,549,548,1,0,0,0,549,550,1,0,0,0,550,552,1,0,0,0,551,553,3,56,28,0,552,
	551,1,0,0,0,552,553,1,0,0,0,553,556,1,0,0,0,554,555,5,58,0,0,555,557,3,
	18,9,0,556,554,1,0,0,0,556,557,1,0,0,0,557,55,1,0,0,0,558,559,5,16,0,0,
	559,560,3,18,9,0,560,57,1,0,0,0,561,563,3,4,2,0,562,561,1,0,0,0,562,563,
	1,0,0,0,563,564,1,0,0,0,564,566,5,6,0,0,565,567,3,60,30,0,566,565,1,0,0,
	0,566,567,1,0,0,0,567,568,1,0,0,0,568,570,5,7,0,0,569,571,3,56,28,0,570,
	569,1,0,0,0,570,571,1,0,0,0,571,59,1,0,0,0,572,589,3,68,34,0,573,578,3,
	64,32,0,574,575,5,12,0,0,575,577,3,64,32,0,576,574,1,0,0,0,577,580,1,0,
	0,0,578,576,1,0,0,0,578,579,1,0,0,0,579,583,1,0,0,0,580,578,1,0,0,0,581,
	582,5,12,0,0,582,584,3,68,34,0,583,581,1,0,0,0,583,584,1,0,0,0,584,586,
	1,0,0,0,585,587,5,12,0,0,586,585,1,0,0,0,586,587,1,0,0,0,587,589,1,0,0,
	0,588,572,1,0,0,0,588,573,1,0,0,0,589,61,1,0,0,0,590,595,3,70,35,0,591,
	592,5,12,0,0,592,594,3,70,35,0,593,591,1,0,0,0,594,597,1,0,0,0,595,593,
	1,0,0,0,595,596,1,0,0,0,596,63,1,0,0,0,597,595,1,0,0,0,598,601,3,70,35,
	0,599,601,3,66,33,0,600,598,1,0,0,0,600,599,1,0,0,0,601,65,1,0,0,0,602,
	604,3,106,53,0,603,602,1,0,0,0,603,604,1,0,0,0,604,606,1,0,0,0,605,607,
	3,72,36,0,606,605,1,0,0,0,606,607,1,0,0,0,607,608,1,0,0,0,608,617,3,74,
	37,0,609,611,5,14,0,0,610,612,3,56,28,0,611,610,1,0,0,0,611,612,1,0,0,0,
	612,618,1,0,0,0,613,615,3,56,28,0,614,613,1,0,0,0,614,615,1,0,0,0,615,616,
	1,0,0,0,616,618,3,0,0,0,617,609,1,0,0,0,617,614,1,0,0,0,618,67,1,0,0,0,
	619,620,5,17,0,0,620,622,3,274,137,0,621,623,3,56,28,0,622,621,1,0,0,0,
	622,623,1,0,0,0,623,69,1,0,0,0,624,626,3,106,53,0,625,624,1,0,0,0,625,626,
	1,0,0,0,626,628,1,0,0,0,627,629,3,72,36,0,628,627,1,0,0,0,628,629,1,0,0,
	0,629,630,1,0,0,0,630,632,3,74,37,0,631,633,3,56,28,0,632,631,1,0,0,0,632,
	633,1,0,0,0,633,71,1,0,0,0,634,635,7,2,0,0,635,73,1,0,0,0,636,639,3,304,
	152,0,637,639,3,2,1,0,638,636,1,0,0,0,638,637,1,0,0,0,639,75,1,0,0,0,640,
	642,5,76,0,0,641,643,3,4,2,0,642,641,1,0,0,0,642,643,1,0,0,0,643,644,1,
	0,0,0,644,646,5,6,0,0,645,647,3,60,30,0,646,645,1,0,0,0,646,647,1,0,0,0,
	647,648,1,0,0,0,648,650,5,7,0,0,649,651,3,56,28,0,650,649,1,0,0,0,650,651,
	1,0,0,0,651,77,1,0,0,0,652,653,5,4,0,0,653,654,3,306,153,0,654,655,5,16,
	0,0,655,656,7,3,0,0,656,657,5,5,0,0,657,658,3,56,28,0,658,79,1,0,0,0,659,
	661,3,264,132,0,660,662,5,14,0,0,661,660,1,0,0,0,661,662,1,0,0,0,662,663,
	1,0,0,0,663,664,3,58,29,0,664,81,1,0,0,0,665,667,5,108,0,0,666,665,1,0,
	0,0,666,667,1,0,0,0,667,668,1,0,0,0,668,669,5,129,0,0,669,671,3,306,153,
	0,670,672,3,4,2,0,671,670,1,0,0,0,671,672,1,0,0,0,672,673,1,0,0,0,673,674,
	5,13,0,0,674,675,3,18,9,0,675,676,3,314,157,0,676,83,1,0,0,0,677,679,3,
	72,36,0,678,677,1,0,0,0,678,679,1,0,0,0,679,680,1,0,0,0,680,681,5,130,0,
	0,681,683,5,6,0,0,682,684,3,240,120,0,683,682,1,0,0,0,683,684,1,0,0,0,684,
	685,1,0,0,0,685,691,5,7,0,0,686,687,5,8,0,0,687,688,3,246,123,0,688,689,
	5,10,0,0,689,692,1,0,0,0,690,692,5,11,0,0,691,686,1,0,0,0,691,690,1,0,0,
	0,691,692,1,0,0,0,692,85,1,0,0,0,693,695,5,108,0,0,694,693,1,0,0,0,694,
	695,1,0,0,0,695,697,1,0,0,0,696,698,5,134,0,0,697,696,1,0,0,0,697,698,1,
	0,0,0,698,699,1,0,0,0,699,700,5,114,0,0,700,702,3,306,153,0,701,703,3,4,
	2,0,702,701,1,0,0,0,702,703,1,0,0,0,703,705,1,0,0,0,704,706,3,88,44,0,705,
	704,1,0,0,0,705,706,1,0,0,0,706,707,1,0,0,0,707,709,3,32,16,0,708,710,5,
	11,0,0,709,708,1,0,0,0,709,710,1,0,0,0,710,87,1,0,0,0,711,712,5,105,0,0,
	712,713,3,90,45,0,713,89,1,0,0,0,714,719,3,26,13,0,715,716,5,12,0,0,716,
	718,3,26,13,0,717,715,1,0,0,0,718,721,1,0,0,0,719,717,1,0,0,0,719,720,1,
	0,0,0,720,91,1,0,0,0,721,719,1,0,0,0,722,724,5,107,0,0,723,722,1,0,0,0,
	723,724,1,0,0,0,724,725,1,0,0,0,725,726,5,104,0,0,726,727,3,306,153,0,727,
	729,5,8,0,0,728,730,3,94,47,0,729,728,1,0,0,0,729,730,1,0,0,0,730,731,1,
	0,0,0,731,732,5,10,0,0,732,93,1,0,0,0,733,735,3,96,48,0,734,736,5,12,0,
	0,735,734,1,0,0,0,735,736,1,0,0,0,736,95,1,0,0,0,737,742,3,98,49,0,738,
	739,5,12,0,0,739,741,3,98,49,0,740,738,1,0,0,0,741,744,1,0,0,0,742,740,
	1,0,0,0,742,743,1,0,0,0,743,97,1,0,0,0,744,742,1,0,0,0,745,748,3,264,132,
	0,746,747,5,13,0,0,747,749,3,274,137,0,748,746,1,0,0,0,748,749,1,0,0,0,
	749,99,1,0,0,0,750,752,5,134,0,0,751,750,1,0,0,0,751,752,1,0,0,0,752,753,
	1,0,0,0,753,754,5,131,0,0,754,755,3,102,51,0,755,757,5,8,0,0,756,758,3,
	122,61,0,757,756,1,0,0,0,757,758,1,0,0,0,758,759,1,0,0,0,759,760,5,10,0,
	0,760,101,1,0,0,0,761,770,3,306,153,0,762,764,5,18,0,0,763,762,1,0,0,0,
	764,765,1,0,0,0,765,763,1,0,0,0,765,766,1,0,0,0,766,767,1,0,0,0,767,769,
	3,306,153,0,768,763,1,0,0,0,769,772,1,0,0,0,770,768,1,0,0,0,770,771,1,0,
	0,0,771,103,1,0,0,0,772,770,1,0,0,0,773,774,3,306,153,0,774,775,5,13,0,
	0,775,776,3,102,51,0,776,777,5,11,0,0,777,105,1,0,0,0,778,780,3,108,54,
	0,779,778,1,0,0,0,780,781,1,0,0,0,781,779,1,0,0,0,781,782,1,0,0,0,782,107,
	1,0,0,0,783,786,5,137,0,0,784,787,3,110,55,0,785,787,3,112,56,0,786,784,
	1,0,0,0,786,785,1,0,0,0,787,109,1,0,0,0,788,789,6,55,-1,0,789,795,3,306,
	153,0,790,791,5,6,0,0,791,792,3,274,137,0,792,793,5,7,0,0,793,795,1,0,0,
	0,794,788,1,0,0,0,794,790,1,0,0,0,795,801,1,0,0,0,796,797,10,2,0,0,797,
	798,5,18,0,0,798,800,3,304,152,0,799,796,1,0,0,0,800,803,1,0,0,0,801,799,
	1,0,0,0,801,802,1,0,0,0,802,111,1,0,0,0,803,801,1,0,0,0,804,805,3,110,55,
	0,805,806,3,266,133,0,806,113,1,0,0,0,807,809,3,248,124,0,808,807,1,0,0,
	0,808,809,1,0,0,0,809,810,1,0,0,0,810,811,5,0,0,1,811,115,1,0,0,0,812,814,
	5,108,0,0,813,812,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,816,3,118,
	59,0,816,117,1,0,0,0,817,847,3,120,60,0,818,847,3,156,78,0,819,847,3,126,
	63,0,820,847,3,146,73,0,821,847,3,162,81,0,822,847,3,124,62,0,823,847,3,
	206,103,0,824,847,3,204,102,0,825,847,3,164,82,0,826,847,3,86,43,0,827,
	847,3,100,50,0,828,847,3,166,83,0,829,847,3,168,84,0,830,847,3,172,86,0,
	831,847,3,174,87,0,832,847,3,176,88,0,833,847,3,178,89,0,834,847,3,180,
	90,0,835,847,3,192,96,0,836,847,3,182,91,0,837,847,3,194,97,0,838,847,3,
	196,98,0,839,847,3,202,101,0,840,847,3,282,141,0,841,847,3,226,113,0,842,
	847,3,82,41,0,843,847,3,92,46,0,844,845,5,108,0,0,845,847,3,118,59,0,846,
	817,1,0,0,0,846,818,1,0,0,0,846,819,1,0,0,0,846,820,1,0,0,0,846,821,1,0,
	0,0,846,822,1,0,0,0,846,823,1,0,0,0,846,824,1,0,0,0,846,825,1,0,0,0,846,
	826,1,0,0,0,846,827,1,0,0,0,846,828,1,0,0,0,846,829,1,0,0,0,846,830,1,0,
	0,0,846,831,1,0,0,0,846,832,1,0,0,0,846,833,1,0,0,0,846,834,1,0,0,0,846,
	835,1,0,0,0,846,836,1,0,0,0,846,837,1,0,0,0,846,838,1,0,0,0,846,839,1,0,
	0,0,846,840,1,0,0,0,846,841,1,0,0,0,846,842,1,0,0,0,846,843,1,0,0,0,846,
	844,1,0,0,0,847,119,1,0,0,0,848,850,5,8,0,0,849,851,3,122,61,0,850,849,
	1,0,0,0,850,851,1,0,0,0,851,852,1,0,0,0,852,853,5,10,0,0,853,121,1,0,0,
	0,854,856,3,118,59,0,855,854,1,0,0,0,856,857,1,0,0,0,857,855,1,0,0,0,857,
	858,1,0,0,0,858,123,1,0,0,0,859,864,5,135,0,0,860,861,3,306,153,0,861,862,
	3,58,29,0,862,865,1,0,0,0,863,865,3,156,78,0,864,860,1,0,0,0,864,863,1,
	0,0,0,865,866,1,0,0,0,866,867,3,314,157,0,867,125,1,0,0,0,868,869,5,109,
	0,0,869,870,3,128,64,0,870,127,1,0,0,0,871,873,3,138,69,0,872,871,1,0,0,
	0,872,873,1,0,0,0,873,876,1,0,0,0,874,877,3,140,70,0,875,877,3,130,65,0,
	876,874,1,0,0,0,876,875,1,0,0,0,877,878,1,0,0,0,878,879,3,142,71,0,879,
	880,3,314,157,0,880,884,1,0,0,0,881,882,5,139,0,0,882,884,3,314,157,0,883,
	872,1,0,0,0,883,881,1,0,0,0,884,129,1,0,0,0,885,891,5,8,0,0,886,887,3,132,
	66,0,887,888,5,12,0,0,888,890,1,0,0,0,889,886,1,0,0,0,890,893,1,0,0,0,891,
	889,1,0,0,0,891,892,1,0,0,0,892,898,1,0,0,0,893,891,1,0,0,0,894,896,3,132,
	66,0,895,897,5,12,0,0,896,895,1,0,0,0,896,897,1,0,0,0,897,899,1,0,0,0,898,
	894,1,0,0,0,898,899,1,0,0,0,899,900,1,0,0,0,900,901,5,10,0,0,901,131,1,
	0,0,0,902,905,3,134,67,0,903,904,5,96,0,0,904,906,3,136,68,0,905,903,1,
	0,0,0,905,906,1,0,0,0,906,133,1,0,0,0,907,910,3,304,152,0,908,910,5,139,
	0,0,909,907,1,0,0,0,909,908,1,0,0,0,910,135,1,0,0,0,911,912,7,4,0,0,912,
	137,1,0,0,0,913,914,3,144,72,0,914,915,5,12,0,0,915,139,1,0,0,0,916,919,
	5,25,0,0,917,919,3,304,152,0,918,916,1,0,0,0,918,917,1,0,0,0,919,922,1,
	0,0,0,920,921,5,96,0,0,921,923,3,304,152,0,922,920,1,0,0,0,922,923,1,0,
	0,0,923,141,1,0,0,0,924,925,5,97,0,0,925,926,5,139,0,0,926,143,1,0,0,0,
	927,930,3,304,152,0,928,929,5,96,0,0,929,931,3,304,152,0,930,928,1,0,0,
	0,930,931,1,0,0,0,931,145,1,0,0,0,932,934,5,108,0,0,933,935,5,90,0,0,934,
	933,1,0,0,0,934,935,1,0,0,0,935,938,1,0,0,0,936,939,3,148,74,0,937,939,
	3,154,77,0,938,936,1,0,0,0,938,937,1,0,0,0,939,940,1,0,0,0,940,941,3,314,
	157,0,941,948,1,0,0,0,942,943,5,108,0,0,943,944,5,90,0,0,944,945,3,274,
	137,0,945,946,3,314,157,0,946,948,1,0,0,0,947,932,1,0,0,0,947,942,1,0,0,
	0,948,147,1,0,0,0,949,950,3,140,70,0,950,951,3,142,71,0,951,952,3,314,157,
	0,952,960,1,0,0,0,953,955,3,150,75,0,954,956,3,142,71,0,955,954,1,0,0,0,
	955,956,1,0,0,0,956,957,1,0,0,0,957,958,3,314,157,0,958,960,1,0,0,0,959,
	949,1,0,0,0,959,953,1,0,0,0,960,149,1,0,0,0,961,967,5,8,0,0,962,963,3,152,
	76,0,963,964,5,12,0,0,964,966,1,0,0,0,965,962,1,0,0,0,966,969,1,0,0,0,967,
	965,1,0,0,0,967,968,1,0,0,0,968,974,1,0,0,0,969,967,1,0,0,0,970,972,3,152,
	76,0,971,973,5,12,0,0,972,971,1,0,0,0,972,973,1,0,0,0,973,975,1,0,0,0,974,
	970,1,0,0,0,974,975,1,0,0,0,975,976,1,0,0,0,976,977,5,10,0,0,977,151,1,
	0,0,0,978,981,3,134,67,0,979,980,5,96,0,0,980,982,3,134,67,0,981,979,1,
	0,0,0,981,982,1,0,0,0,982,153,1,0,0,0,983,987,3,156,78,0,984,987,3,206,
	103,0,985,987,3,204,102,0,986,983,1,0,0,0,986,984,1,0,0,0,986,985,1,0,0,
	0,987,155,1,0,0,0,988,990,3,2,1,0,989,991,3,56,28,0,990,989,1,0,0,0,990,
	991,1,0,0,0,991,992,1,0,0,0,992,994,3,0,0,0,993,995,5,11,0,0,994,993,1,
	0,0,0,994,995,1,0,0,0,995,1018,1,0,0,0,996,998,3,72,36,0,997,996,1,0,0,
	0,997,998,1,0,0,0,998,1000,1,0,0,0,999,1001,3,170,85,0,1000,999,1,0,0,0,
	1000,1001,1,0,0,0,1001,1003,1,0,0,0,1002,1004,5,98,0,0,1003,1002,1,0,0,
	0,1003,1004,1,0,0,0,1004,1005,1,0,0,0,1005,1007,3,158,79,0,1006,1008,5,
	11,0,0,1007,1006,1,0,0,0,1007,1008,1,0,0,0,1008,1018,1,0,0,0,1009,1011,
	5,134,0,0,1010,1012,3,170,85,0,1011,1010,1,0,0,0,1011,1012,1,0,0,0,1012,
	1013,1,0,0,0,1013,1015,3,158,79,0,1014,1016,5,11,0,0,1015,1014,1,0,0,0,
	1015,1016,1,0,0,0,1016,1018,1,0,0,0,1017,988,1,0,0,0,1017,997,1,0,0,0,1017,
	1009,1,0,0,0,1018,157,1,0,0,0,1019,1024,3,160,80,0,1020,1021,5,12,0,0,1021,
	1023,3,160,80,0,1022,1020,1,0,0,0,1023,1026,1,0,0,0,1024,1022,1,0,0,0,1024,
	1025,1,0,0,0,1025,159,1,0,0,0,1026,1024,1,0,0,0,1027,1031,3,308,154,0,1028,
	1031,3,250,125,0,1029,1031,3,256,128,0,1030,1027,1,0,0,0,1030,1028,1,0,
	0,0,1030,1029,1,0,0,0,1031,1033,1,0,0,0,1032,1034,3,56,28,0,1033,1032,1,
	0,0,0,1033,1034,1,0,0,0,1034,1036,1,0,0,0,1035,1037,3,274,137,0,1036,1035,
	1,0,0,0,1036,1037,1,0,0,0,1037,1043,1,0,0,0,1038,1040,5,13,0,0,1039,1041,
	3,4,2,0,1040,1039,1,0,0,0,1040,1041,1,0,0,0,1041,1042,1,0,0,0,1042,1044,
	3,274,137,0,1043,1038,1,0,0,0,1043,1044,1,0,0,0,1044,161,1,0,0,0,1045,1046,
	5,11,0,0,1046,163,1,0,0,0,1047,1048,4,82,6,0,1048,1050,3,272,136,0,1049,
	1051,5,11,0,0,1050,1049,1,0,0,0,1050,1051,1,0,0,0,1051,165,1,0,0,0,1052,
	1053,5,91,0,0,1053,1054,5,6,0,0,1054,1055,3,272,136,0,1055,1056,5,7,0,0,
	1056,1059,3,118,59,0,1057,1058,5,75,0,0,1058,1060,3,118,59,0,1059,1057,
	1,0,0,0,1059,1060,1,0,0,0,1060,167,1,0,0,0,1061,1062,5,71,0,0,1062,1063,
	3,118,59,0,1063,1064,5,85,0,0,1064,1065,5,6,0,0,1065,1066,3,272,136,0,1066,
	1067,5,7,0,0,1067,1068,3,314,157,0,1068,1156,1,0,0,0,1069,1070,5,85,0,0,
	1070,1071,5,6,0,0,1071,1072,3,272,136,0,1072,1073,5,7,0,0,1073,1074,3,118,
	59,0,1074,1156,1,0,0,0,1075,1076,5,83,0,0,1076,1078,5,6,0,0,1077,1079,3,
	272,136,0,1078,1077,1,0,0,0,1078,1079,1,0,0,0,1079,1080,1,0,0,0,1080,1082,
	5,11,0,0,1081,1083,3,272,136,0,1082,1081,1,0,0,0,1082,1083,1,0,0,0,1083,
	1084,1,0,0,0,1084,1086,5,11,0,0,1085,1087,3,272,136,0,1086,1085,1,0,0,0,
	1086,1087,1,0,0,0,1087,1088,1,0,0,0,1088,1089,5,7,0,0,1089,1156,3,118,59,
	0,1090,1091,5,83,0,0,1091,1092,5,6,0,0,1092,1093,3,170,85,0,1093,1094,3,
	158,79,0,1094,1096,5,11,0,0,1095,1097,3,272,136,0,1096,1095,1,0,0,0,1096,
	1097,1,0,0,0,1097,1098,1,0,0,0,1098,1100,5,11,0,0,1099,1101,3,272,136,0,
	1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,1102,1,0,0,0,1102,1103,5,7,0,0,
	1103,1104,3,118,59,0,1104,1156,1,0,0,0,1105,1106,5,83,0,0,1106,1107,5,6,
	0,0,1107,1108,3,274,137,0,1108,1109,5,94,0,0,1109,1110,3,272,136,0,1110,
	1111,5,7,0,0,1111,1112,3,118,59,0,1112,1156,1,0,0,0,1113,1114,5,83,0,0,
	1114,1115,5,6,0,0,1115,1116,3,170,85,0,1116,1117,3,160,80,0,1117,1118,5,
	94,0,0,1118,1119,3,272,136,0,1119,1120,5,7,0,0,1120,1121,3,118,59,0,1121,
	1156,1,0,0,0,1122,1124,5,83,0,0,1123,1125,5,100,0,0,1124,1123,1,0,0,0,1124,
	1125,1,0,0,0,1125,1126,1,0,0,0,1126,1127,5,6,0,0,1127,1128,3,274,137,0,
	1128,1129,3,306,153,0,1129,1130,4,84,7,0,1130,1133,3,272,136,0,1131,1132,
	5,96,0,0,1132,1134,3,18,9,0,1133,1131,1,0,0,0,1133,1134,1,0,0,0,1134,1135,
	1,0,0,0,1135,1136,5,7,0,0,1136,1137,3,118,59,0,1137,1156,1,0,0,0,1138,1140,
	5,83,0,0,1139,1141,5,100,0,0,1140,1139,1,0,0,0,1140,1141,1,0,0,0,1141,1142,
	1,0,0,0,1142,1143,5,6,0,0,1143,1144,3,170,85,0,1144,1145,3,160,80,0,1145,
	1146,3,306,153,0,1146,1147,4,84,8,0,1147,1150,3,272,136,0,1148,1149,5,96,
	0,0,1149,1151,3,18,9,0,1150,1148,1,0,0,0,1150,1151,1,0,0,0,1151,1152,1,
	0,0,0,1152,1153,5,7,0,0,1153,1154,3,118,59,0,1154,1156,1,0,0,0,1155,1061,
	1,0,0,0,1155,1069,1,0,0,0,1155,1075,1,0,0,0,1155,1090,1,0,0,0,1155,1105,
	1,0,0,0,1155,1113,1,0,0,0,1155,1122,1,0,0,0,1155,1138,1,0,0,0,1156,169,
	1,0,0,0,1157,1158,7,5,0,0,1158,171,1,0,0,0,1159,1162,5,82,0,0,1160,1161,
	4,86,9,0,1161,1163,3,306,153,0,1162,1160,1,0,0,0,1162,1163,1,0,0,0,1163,
	1164,1,0,0,0,1164,1165,3,314,157,0,1165,173,1,0,0,0,1166,1169,5,70,0,0,
	1167,1168,4,87,10,0,1168,1170,3,306,153,0,1169,1167,1,0,0,0,1169,1170,1,
	0,0,0,1170,1171,1,0,0,0,1171,1172,3,314,157,0,1172,175,1,0,0,0,1173,1176,
	5,80,0,0,1174,1175,4,88,11,0,1175,1177,3,272,136,0,1176,1174,1,0,0,0,1176,
	1177,1,0,0,0,1177,1178,1,0,0,0,1178,1179,3,314,157,0,1179,177,1,0,0,0,1180,
	1183,7,6,0,0,1181,1182,4,89,12,0,1182,1184,3,272,136,0,1183,1181,1,0,0,
	0,1183,1184,1,0,0,0,1184,1185,1,0,0,0,1185,1186,3,314,157,0,1186,179,1,
	0,0,0,1187,1188,5,89,0,0,1188,1189,5,6,0,0,1189,1190,3,272,136,0,1190,1191,
	5,7,0,0,1191,1192,3,118,59,0,1192,181,1,0,0,0,1193,1194,5,84,0,0,1194,1195,
	5,6,0,0,1195,1196,3,272,136,0,1196,1197,5,7,0,0,1197,1198,3,184,92,0,1198,
	183,1,0,0,0,1199,1201,5,8,0,0,1200,1202,3,186,93,0,1201,1200,1,0,0,0,1201,
	1202,1,0,0,0,1202,1207,1,0,0,0,1203,1205,3,190,95,0,1204,1206,3,186,93,
	0,1205,1204,1,0,0,0,1205,1206,1,0,0,0,1206,1208,1,0,0,0,1207,1203,1,0,0,
	0,1207,1208,1,0,0,0,1208,1209,1,0,0,0,1209,1210,5,10,0,0,1210,185,1,0,0,
	0,1211,1213,3,188,94,0,1212,1211,1,0,0,0,1213,1214,1,0,0,0,1214,1212,1,
	0,0,0,1214,1215,1,0,0,0,1215,187,1,0,0,0,1216,1217,5,74,0,0,1217,1218,3,
	272,136,0,1218,1220,5,16,0,0,1219,1221,3,122,61,0,1220,1219,1,0,0,0,1220,
	1221,1,0,0,0,1221,189,1,0,0,0,1222,1223,5,90,0,0,1223,1225,5,16,0,0,1224,
	1226,3,122,61,0,1225,1224,1,0,0,0,1225,1226,1,0,0,0,1226,191,1,0,0,0,1227,
	1228,3,306,153,0,1228,1229,5,16,0,0,1229,1230,3,118,59,0,1230,193,1,0,0,
	0,1231,1232,5,92,0,0,1232,1233,4,97,13,0,1233,1234,3,272,136,0,1234,1235,
	3,314,157,0,1235,195,1,0,0,0,1236,1237,5,95,0,0,1237,1243,3,120,60,0,1238,
	1240,3,198,99,0,1239,1241,3,200,100,0,1240,1239,1,0,0,0,1240,1241,1,0,0,
	0,1241,1244,1,0,0,0,1242,1244,3,200,100,0,1243,1238,1,0,0,0,1243,1242,1,
	0,0,0,1244,197,1,0,0,0,1245,1253,5,78,0,0,1246,1247,5,6,0,0,1247,1249,3,
	306,153,0,1248,1250,3,56,28,0,1249,1248,1,0,0,0,1249,1250,1,0,0,0,1250,
	1251,1,0,0,0,1251,1252,5,7,0,0,1252,1254,1,0,0,0,1253,1246,1,0,0,0,1253,
	1254,1,0,0,0,1254,1255,1,0,0,0,1255,1256,3,120,60,0,1256,199,1,0,0,0,1257,
	1258,5,79,0,0,1258,1259,3,120,60,0,1259,201,1,0,0,0,1260,1261,5,86,0,0,
	1261,1262,3,314,157,0,1262,203,1,0,0,0,1263,1265,5,99,0,0,1264,1263,1,0,
	0,0,1264,1265,1,0,0,0,1265,1266,1,0,0,0,1266,1268,5,87,0,0,1267,1269,5,
	25,0,0,1268,1267,1,0,0,0,1268,1269,1,0,0,0,1269,1270,1,0,0,0,1270,1271,
	3,306,153,0,1271,1277,3,58,29,0,1272,1273,5,8,0,0,1273,1274,3,246,123,0,
	1274,1275,5,10,0,0,1275,1278,1,0,0,0,1276,1278,5,11,0,0,1277,1272,1,0,0,
	0,1277,1276,1,0,0,0,1278,205,1,0,0,0,1279,1281,3,106,53,0,1280,1279,1,0,
	0,0,1280,1281,1,0,0,0,1281,1286,1,0,0,0,1282,1284,5,108,0,0,1283,1285,5,
	90,0,0,1284,1283,1,0,0,0,1284,1285,1,0,0,0,1285,1287,1,0,0,0,1286,1282,
	1,0,0,0,1286,1287,1,0,0,0,1287,1289,1,0,0,0,1288,1290,5,135,0,0,1289,1288,
	1,0,0,0,1289,1290,1,0,0,0,1290,1291,1,0,0,0,1291,1292,5,103,0,0,1292,1294,
	3,306,153,0,1293,1295,3,4,2,0,1294,1293,1,0,0,0,1294,1295,1,0,0,0,1295,
	1296,1,0,0,0,1296,1297,3,208,104,0,1297,1298,3,210,105,0,1298,207,1,0,0,
	0,1299,1301,3,212,106,0,1300,1299,1,0,0,0,1300,1301,1,0,0,0,1301,1303,1,
	0,0,0,1302,1304,3,214,107,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,209,
	1,0,0,0,1305,1309,5,8,0,0,1306,1308,3,216,108,0,1307,1306,1,0,0,0,1308,
	1311,1,0,0,0,1309,1307,1,0,0,0,1309,1310,1,0,0,0,1310,1312,1,0,0,0,1311,
	1309,1,0,0,0,1312,1313,5,10,0,0,1313,211,1,0,0,0,1314,1315,5,105,0,0,1315,
	1316,3,26,13,0,1316,213,1,0,0,0,1317,1318,5,110,0,0,1318,1319,3,90,45,0,
	1319,215,1,0,0,0,1320,1328,3,84,42,0,1321,1323,3,106,53,0,1322,1321,1,0,
	0,0,1322,1323,1,0,0,0,1323,1324,1,0,0,0,1324,1328,3,218,109,0,1325,1328,
	3,222,111,0,1326,1328,3,118,59,0,1327,1320,1,0,0,0,1327,1322,1,0,0,0,1327,
	1325,1,0,0,0,1327,1326,1,0,0,0,1328,217,1,0,0,0,1329,1330,3,220,110,0,1330,
	1332,3,264,132,0,1331,1333,5,14,0,0,1332,1331,1,0,0,0,1332,1333,1,0,0,0,
	1333,1335,1,0,0,0,1334,1336,3,56,28,0,1335,1334,1,0,0,0,1335,1336,1,0,0,
	0,1336,1338,1,0,0,0,1337,1339,3,0,0,0,1338,1337,1,0,0,0,1338,1339,1,0,0,
	0,1339,1340,1,0,0,0,1340,1341,5,11,0,0,1341,1359,1,0,0,0,1342,1343,3,220,
	110,0,1343,1344,3,264,132,0,1344,1350,3,58,29,0,1345,1346,5,8,0,0,1346,
	1347,3,246,123,0,1347,1348,5,10,0,0,1348,1351,1,0,0,0,1349,1351,5,11,0,
	0,1350,1345,1,0,0,0,1350,1349,1,0,0,0,1351,1359,1,0,0,0,1352,1355,3,220,
	110,0,1353,1356,3,260,130,0,1354,1356,3,262,131,0,1355,1353,1,0,0,0,1355,
	1354,1,0,0,0,1356,1359,1,0,0,0,1357,1359,3,124,62,0,1358,1329,1,0,0,0,1358,
	1342,1,0,0,0,1358,1352,1,0,0,0,1358,1357,1,0,0,0,1359,219,1,0,0,0,1360,
	1362,3,72,36,0,1361,1360,1,0,0,0,1361,1362,1,0,0,0,1362,1364,1,0,0,0,1363,
	1365,5,99,0,0,1364,1363,1,0,0,0,1364,1365,1,0,0,0,1365,1367,1,0,0,0,1366,
	1368,5,117,0,0,1367,1366,1,0,0,0,1367,1368,1,0,0,0,1368,1370,1,0,0,0,1369,
	1371,5,98,0,0,1370,1369,1,0,0,0,1370,1371,1,0,0,0,1371,221,1,0,0,0,1372,
	1373,3,78,39,0,1373,1374,5,11,0,0,1374,223,1,0,0,0,1375,1376,5,99,0,0,1376,
	1378,4,112,14,0,1377,1375,1,0,0,0,1377,1378,1,0,0,0,1378,1380,1,0,0,0,1379,
	1381,5,25,0,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,1381,1382,1,0,0,0,1382,
	1383,3,264,132,0,1383,1385,5,6,0,0,1384,1386,3,240,120,0,1385,1384,1,0,
	0,0,1385,1386,1,0,0,0,1386,1387,1,0,0,0,1387,1388,5,7,0,0,1388,1389,5,8,
	0,0,1389,1390,3,246,123,0,1390,1391,5,10,0,0,1391,225,1,0,0,0,1392,1394,
	5,99,0,0,1393,1392,1,0,0,0,1393,1394,1,0,0,0,1394,1395,1,0,0,0,1395,1396,
	5,87,0,0,1396,1398,5,25,0,0,1397,1399,3,306,153,0,1398,1397,1,0,0,0,1398,
	1399,1,0,0,0,1399,1400,1,0,0,0,1400,1402,5,6,0,0,1401,1403,3,240,120,0,
	1402,1401,1,0,0,0,1402,1403,1,0,0,0,1403,1404,1,0,0,0,1404,1405,5,7,0,0,
	1405,1406,5,8,0,0,1406,1407,3,246,123,0,1407,1408,5,10,0,0,1408,227,1,0,
	0,0,1409,1410,5,8,0,0,1410,1415,3,230,115,0,1411,1412,5,12,0,0,1412,1414,
	3,230,115,0,1413,1411,1,0,0,0,1414,1417,1,0,0,0,1415,1413,1,0,0,0,1415,
	1416,1,0,0,0,1416,1419,1,0,0,0,1417,1415,1,0,0,0,1418,1420,5,12,0,0,1419,
	1418,1,0,0,0,1419,1420,1,0,0,0,1420,1421,1,0,0,0,1421,1422,5,10,0,0,1422,
	229,1,0,0,0,1423,1424,5,25,0,0,1424,1425,3,234,117,0,1425,231,1,0,0,0,1426,
	1427,5,8,0,0,1427,1432,3,234,117,0,1428,1429,5,12,0,0,1429,1431,3,234,117,
	0,1430,1428,1,0,0,0,1431,1434,1,0,0,0,1432,1430,1,0,0,0,1432,1433,1,0,0,
	0,1433,1436,1,0,0,0,1434,1432,1,0,0,0,1435,1437,5,12,0,0,1436,1435,1,0,
	0,0,1436,1437,1,0,0,0,1437,1438,1,0,0,0,1438,1439,5,10,0,0,1439,233,1,0,
	0,0,1440,1441,5,4,0,0,1441,1442,3,274,137,0,1442,1443,5,5,0,0,1443,1445,
	5,6,0,0,1444,1446,3,240,120,0,1445,1444,1,0,0,0,1445,1446,1,0,0,0,1446,
	1447,1,0,0,0,1447,1448,5,7,0,0,1448,1449,5,8,0,0,1449,1450,3,246,123,0,
	1450,1451,5,10,0,0,1451,235,1,0,0,0,1452,1455,3,264,132,0,1453,1455,3,238,
	119,0,1454,1452,1,0,0,0,1454,1453,1,0,0,0,1455,237,1,0,0,0,1456,1457,5,
	30,0,0,1457,1458,3,304,152,0,1458,239,1,0,0,0,1459,1464,3,242,121,0,1460,
	1461,5,12,0,0,1461,1463,3,242,121,0,1462,1460,1,0,0,0,1463,1466,1,0,0,0,
	1464,1462,1,0,0,0,1464,1465,1,0,0,0,1465,1469,1,0,0,0,1466,1464,1,0,0,0,
	1467,1468,5,12,0,0,1468,1470,3,244,122,0,1469,1467,1,0,0,0,1469,1470,1,
	0,0,0,1470,1472,1,0,0,0,1471,1473,5,12,0,0,1472,1471,1,0,0,0,1472,1473,
	1,0,0,0,1473,1482,1,0,0,0,1474,1482,3,244,122,0,1475,1482,3,250,125,0,1476,
	1479,3,256,128,0,1477,1478,5,16,0,0,1478,1480,3,240,120,0,1479,1477,1,0,
	0,0,1479,1480,1,0,0,0,1480,1482,1,0,0,0,1481,1459,1,0,0,0,1481,1474,1,0,
	0,0,1481,1475,1,0,0,0,1481,1476,1,0,0,0,1482,241,1,0,0,0,1483,1485,3,108,
	54,0,1484,1483,1,0,0,0,1484,1485,1,0,0,0,1485,1487,1,0,0,0,1486,1488,3,
	72,36,0,1487,1486,1,0,0,0,1487,1488,1,0,0,0,1488,1489,1,0,0,0,1489,1491,
	3,278,139,0,1490,1492,5,14,0,0,1491,1490,1,0,0,0,1491,1492,1,0,0,0,1492,
	1494,1,0,0,0,1493,1495,3,56,28,0,1494,1493,1,0,0,0,1494,1495,1,0,0,0,1495,
	1498,1,0,0,0,1496,1497,5,13,0,0,1497,1499,3,274,137,0,1498,1496,1,0,0,0,
	1498,1499,1,0,0,0,1499,243,1,0,0,0,1500,1501,5,17,0,0,1501,1503,3,306,153,
	0,1502,1504,3,56,28,0,1503,1502,1,0,0,0,1503,1504,1,0,0,0,1504,245,1,0,
	0,0,1505,1507,3,248,124,0,1506,1505,1,0,0,0,1506,1507,1,0,0,0,1507,247,
	1,0,0,0,1508,1510,3,116,58,0,1509,1508,1,0,0,0,1510,1511,1,0,0,0,1511,1509,
	1,0,0,0,1511,1512,1,0,0,0,1512,249,1,0,0,0,1513,1514,5,4,0,0,1514,1515,
	3,252,126,0,1515,1516,5,5,0,0,1516,251,1,0,0,0,1517,1519,5,12,0,0,1518,
	1517,1,0,0,0,1519,1522,1,0,0,0,1520,1518,1,0,0,0,1520,1521,1,0,0,0,1521,
	1524,1,0,0,0,1522,1520,1,0,0,0,1523,1525,3,254,127,0,1524,1523,1,0,0,0,
	1524,1525,1,0,0,0,1525,1534,1,0,0,0,1526,1528,5,12,0,0,1527,1526,1,0,0,
	0,1528,1529,1,0,0,0,1529,1527,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,
	0,1531,1533,3,254,127,0,1532,1527,1,0,0,0,1533,1536,1,0,0,0,1534,1532,1,
	0,0,0,1534,1535,1,0,0,0,1535,1540,1,0,0,0,1536,1534,1,0,0,0,1537,1539,5,
	12,0,0,1538,1537,1,0,0,0,1539,1542,1,0,0,0,1540,1538,1,0,0,0,1540,1541,
	1,0,0,0,1541,253,1,0,0,0,1542,1540,1,0,0,0,1543,1545,5,17,0,0,1544,1543,
	1,0,0,0,1544,1545,1,0,0,0,1545,1548,1,0,0,0,1546,1549,3,274,137,0,1547,
	1549,3,306,153,0,1548,1546,1,0,0,0,1548,1547,1,0,0,0,1549,1551,1,0,0,0,
	1550,1552,5,12,0,0,1551,1550,1,0,0,0,1551,1552,1,0,0,0,1552,255,1,0,0,0,
	1553,1565,5,8,0,0,1554,1559,3,258,129,0,1555,1556,5,12,0,0,1556,1558,3,
	258,129,0,1557,1555,1,0,0,0,1558,1561,1,0,0,0,1559,1557,1,0,0,0,1559,1560,
	1,0,0,0,1560,1563,1,0,0,0,1561,1559,1,0,0,0,1562,1564,5,12,0,0,1563,1562,
	1,0,0,0,1563,1564,1,0,0,0,1564,1566,1,0,0,0,1565,1554,1,0,0,0,1565,1566,
	1,0,0,0,1566,1567,1,0,0,0,1567,1568,5,10,0,0,1568,257,1,0,0,0,1569,1570,
	3,264,132,0,1570,1571,7,7,0,0,1571,1572,3,274,137,0,1572,1589,1,0,0,0,1573,
	1574,5,4,0,0,1574,1575,3,274,137,0,1575,1576,5,5,0,0,1576,1577,5,16,0,0,
	1577,1578,3,274,137,0,1578,1589,1,0,0,0,1579,1589,3,260,130,0,1580,1589,
	3,262,131,0,1581,1589,3,224,112,0,1582,1589,3,308,154,0,1583,1585,5,17,
	0,0,1584,1583,1,0,0,0,1584,1585,1,0,0,0,1585,1586,1,0,0,0,1586,1589,3,274,
	137,0,1587,1589,3,68,34,0,1588,1569,1,0,0,0,1588,1573,1,0,0,0,1588,1579,
	1,0,0,0,1588,1580,1,0,0,0,1588,1581,1,0,0,0,1588,1582,1,0,0,0,1588,1584,
	1,0,0,0,1588,1587,1,0,0,0,1589,259,1,0,0,0,1590,1591,3,300,150,0,1591,1592,
	5,6,0,0,1592,1594,5,7,0,0,1593,1595,3,56,28,0,1594,1593,1,0,0,0,1594,1595,
	1,0,0,0,1595,1596,1,0,0,0,1596,1597,5,8,0,0,1597,1598,3,246,123,0,1598,
	1599,5,10,0,0,1599,261,1,0,0,0,1600,1601,3,302,151,0,1601,1603,5,6,0,0,
	1602,1604,3,240,120,0,1603,1602,1,0,0,0,1603,1604,1,0,0,0,1604,1605,1,0,
	0,0,1605,1606,5,7,0,0,1606,1607,5,8,0,0,1607,1608,3,246,123,0,1608,1609,
	5,10,0,0,1609,263,1,0,0,0,1610,1618,3,304,152,0,1611,1618,5,139,0,0,1612,
	1618,3,296,148,0,1613,1614,5,4,0,0,1614,1615,3,274,137,0,1615,1616,5,5,
	0,0,1616,1618,1,0,0,0,1617,1610,1,0,0,0,1617,1611,1,0,0,0,1617,1612,1,0,
	0,0,1617,1613,1,0,0,0,1618,265,1,0,0,0,1619,1624,5,6,0,0,1620,1622,3,268,
	134,0,1621,1623,5,12,0,0,1622,1621,1,0,0,0,1622,1623,1,0,0,0,1623,1625,
	1,0,0,0,1624,1620,1,0,0,0,1624,1625,1,0,0,0,1625,1626,1,0,0,0,1626,1627,
	5,7,0,0,1627,267,1,0,0,0,1628,1633,3,270,135,0,1629,1630,5,12,0,0,1630,
	1632,3,270,135,0,1631,1629,1,0,0,0,1632,1635,1,0,0,0,1633,1631,1,0,0,0,
	1633,1634,1,0,0,0,1634,269,1,0,0,0,1635,1633,1,0,0,0,1636,1638,5,17,0,0,
	1637,1636,1,0,0,0,1637,1638,1,0,0,0,1638,1641,1,0,0,0,1639,1642,3,274,137,
	0,1640,1642,3,306,153,0,1641,1639,1,0,0,0,1641,1640,1,0,0,0,1642,271,1,
	0,0,0,1643,1648,3,274,137,0,1644,1645,5,12,0,0,1645,1647,3,274,137,0,1646,
	1644,1,0,0,0,1647,1650,1,0,0,0,1648,1646,1,0,0,0,1648,1649,1,0,0,0,1649,
	273,1,0,0,0,1650,1648,1,0,0,0,1651,1652,6,137,-1,0,1652,1717,3,280,140,
	0,1653,1655,5,103,0,0,1654,1656,3,306,153,0,1655,1654,1,0,0,0,1655,1656,
	1,0,0,0,1656,1658,1,0,0,0,1657,1659,3,4,2,0,1658,1657,1,0,0,0,1658,1659,
	1,0,0,0,1659,1660,1,0,0,0,1660,1661,3,208,104,0,1661,1662,3,210,105,0,1662,
	1717,1,0,0,0,1663,1664,5,76,0,0,1664,1666,3,274,137,0,1665,1667,3,12,6,
	0,1666,1665,1,0,0,0,1666,1667,1,0,0,0,1667,1668,1,0,0,0,1668,1669,3,266,
	133,0,1669,1717,1,0,0,0,1670,1671,5,76,0,0,1671,1673,3,274,137,0,1672,1674,
	3,12,6,0,1673,1672,1,0,0,0,1673,1674,1,0,0,0,1674,1717,1,0,0,0,1675,1676,
	5,93,0,0,1676,1717,3,274,137,42,1677,1678,5,81,0,0,1678,1717,3,274,137,
	41,1679,1680,5,73,0,0,1680,1717,3,274,137,40,1681,1682,5,19,0,0,1682,1717,
	3,274,137,39,1683,1684,5,20,0,0,1684,1717,3,274,137,38,1685,1686,5,21,0,
	0,1686,1717,3,274,137,37,1687,1688,5,22,0,0,1688,1717,3,274,137,36,1689,
	1690,5,23,0,0,1690,1717,3,274,137,35,1691,1692,5,24,0,0,1692,1717,3,274,
	137,34,1693,1694,5,100,0,0,1694,1717,3,274,137,33,1695,1717,3,232,116,0,
	1696,1717,3,228,114,0,1697,1717,3,226,113,0,1698,1717,3,178,89,0,1699,1717,
	5,88,0,0,1700,1702,3,304,152,0,1701,1703,3,274,137,0,1702,1701,1,0,0,0,
	1702,1703,1,0,0,0,1703,1717,1,0,0,0,1704,1717,5,106,0,0,1705,1717,3,290,
	145,0,1706,1717,3,250,125,0,1707,1717,3,256,128,0,1708,1709,5,6,0,0,1709,
	1710,3,272,136,0,1710,1711,5,7,0,0,1711,1717,1,0,0,0,1712,1714,3,12,6,0,
	1713,1715,3,272,136,0,1714,1713,1,0,0,0,1714,1715,1,0,0,0,1715,1717,1,0,
	0,0,1716,1651,1,0,0,0,1716,1653,1,0,0,0,1716,1663,1,0,0,0,1716,1670,1,0,
	0,0,1716,1675,1,0,0,0,1716,1677,1,0,0,0,1716,1679,1,0,0,0,1716,1681,1,0,
	0,0,1716,1683,1,0,0,0,1716,1685,1,0,0,0,1716,1687,1,0,0,0,1716,1689,1,0,
	0,0,1716,1691,1,0,0,0,1716,1693,1,0,0,0,1716,1695,1,0,0,0,1716,1696,1,0,
	0,0,1716,1697,1,0,0,0,1716,1698,1,0,0,0,1716,1699,1,0,0,0,1716,1700,1,0,
	0,0,1716,1704,1,0,0,0,1716,1705,1,0,0,0,1716,1706,1,0,0,0,1716,1707,1,0,
	0,0,1716,1708,1,0,0,0,1716,1712,1,0,0,0,1717,1832,1,0,0,0,1718,1719,10,
	50,0,0,1719,1720,5,15,0,0,1720,1831,3,274,137,51,1721,1722,10,32,0,0,1722,
	1723,5,28,0,0,1723,1831,3,274,137,32,1724,1725,10,31,0,0,1725,1726,7,8,
	0,0,1726,1831,3,274,137,32,1727,1728,10,30,0,0,1728,1729,7,9,0,0,1729,1831,
	3,274,137,31,1730,1731,10,29,0,0,1731,1732,5,29,0,0,1732,1831,3,274,137,
	30,1733,1740,10,28,0,0,1734,1741,5,31,0,0,1735,1736,5,33,0,0,1736,1741,
	5,33,0,0,1737,1738,5,33,0,0,1738,1739,5,33,0,0,1739,1741,5,33,0,0,1740,
	1734,1,0,0,0,1740,1735,1,0,0,0,1740,1737,1,0,0,0,1741,1742,1,0,0,0,1742,
	1831,3,274,137,29,1743,1744,10,27,0,0,1744,1745,7,10,0,0,1745,1831,3,274,
	137,28,1746,1747,10,26,0,0,1747,1748,5,72,0,0,1748,1831,3,274,137,27,1749,
	1750,10,25,0,0,1750,1751,5,94,0,0,1751,1831,3,274,137,26,1752,1753,10,24,
	0,0,1753,1754,7,11,0,0,1754,1831,3,274,137,25,1755,1756,10,23,0,0,1756,
	1757,5,40,0,0,1757,1831,3,274,137,24,1758,1759,10,22,0,0,1759,1760,5,41,
	0,0,1760,1831,3,274,137,23,1761,1762,10,21,0,0,1762,1763,5,42,0,0,1763,
	1831,3,274,137,22,1764,1765,10,20,0,0,1765,1766,5,43,0,0,1766,1831,3,274,
	137,21,1767,1768,10,19,0,0,1768,1769,5,44,0,0,1769,1831,3,274,137,20,1770,
	1771,10,18,0,0,1771,1772,5,14,0,0,1772,1773,3,274,137,0,1773,1774,5,16,
	0,0,1774,1775,3,274,137,19,1775,1831,1,0,0,0,1776,1777,10,17,0,0,1777,1778,
	5,13,0,0,1778,1831,3,274,137,18,1779,1780,10,16,0,0,1780,1781,3,288,144,
	0,1781,1782,3,274,137,17,1782,1831,1,0,0,0,1783,1785,10,51,0,0,1784,1786,
	5,15,0,0,1785,1784,1,0,0,0,1785,1786,1,0,0,0,1786,1787,1,0,0,0,1787,1788,
	5,4,0,0,1788,1789,3,272,136,0,1789,1790,5,5,0,0,1790,1831,1,0,0,0,1791,
	1793,10,49,0,0,1792,1794,5,24,0,0,1793,1792,1,0,0,0,1793,1794,1,0,0,0,1794,
	1795,1,0,0,0,1795,1797,5,18,0,0,1796,1798,5,30,0,0,1797,1796,1,0,0,0,1797,
	1798,1,0,0,0,1798,1799,1,0,0,0,1799,1801,3,304,152,0,1800,1802,3,28,14,
	0,1801,1800,1,0,0,0,1801,1802,1,0,0,0,1802,1831,1,0,0,0,1803,1805,10,48,
	0,0,1804,1806,5,14,0,0,1805,1804,1,0,0,0,1805,1806,1,0,0,0,1806,1807,1,
	0,0,0,1807,1809,5,18,0,0,1808,1810,5,30,0,0,1809,1808,1,0,0,0,1809,1810,
	1,0,0,0,1810,1811,1,0,0,0,1811,1813,3,304,152,0,1812,1814,3,28,14,0,1813,
	1812,1,0,0,0,1813,1814,1,0,0,0,1814,1831,1,0,0,0,1815,1816,10,45,0,0,1816,
	1831,3,266,133,0,1817,1818,10,44,0,0,1818,1819,4,137,38,0,1819,1831,5,19,
	0,0,1820,1821,10,43,0,0,1821,1822,4,137,40,0,1822,1831,5,20,0,0,1823,1824,
	10,15,0,0,1824,1831,3,292,146,0,1825,1826,10,2,0,0,1826,1827,5,96,0,0,1827,
	1831,3,276,138,0,1828,1829,10,1,0,0,1829,1831,5,24,0,0,1830,1718,1,0,0,
	0,1830,1721,1,0,0,0,1830,1724,1,0,0,0,1830,1727,1,0,0,0,1830,1730,1,0,0,
	0,1830,1733,1,0,0,0,1830,1743,1,0,0,0,1830,1746,1,0,0,0,1830,1749,1,0,0,
	0,1830,1752,1,0,0,0,1830,1755,1,0,0,0,1830,1758,1,0,0,0,1830,1761,1,0,0,
	0,1830,1764,1,0,0,0,1830,1767,1,0,0,0,1830,1770,1,0,0,0,1830,1776,1,0,0,
	0,1830,1779,1,0,0,0,1830,1783,1,0,0,0,1830,1791,1,0,0,0,1830,1803,1,0,0,
	0,1830,1815,1,0,0,0,1830,1817,1,0,0,0,1830,1820,1,0,0,0,1830,1823,1,0,0,
	0,1830,1825,1,0,0,0,1830,1828,1,0,0,0,1831,1834,1,0,0,0,1832,1830,1,0,0,
	0,1832,1833,1,0,0,0,1833,275,1,0,0,0,1834,1832,1,0,0,0,1835,1838,3,24,12,
	0,1836,1837,5,4,0,0,1837,1839,5,5,0,0,1838,1836,1,0,0,0,1838,1839,1,0,0,
	0,1839,1842,1,0,0,0,1840,1842,3,274,137,0,1841,1835,1,0,0,0,1841,1840,1,
	0,0,0,1842,277,1,0,0,0,1843,1848,3,306,153,0,1844,1848,3,312,156,0,1845,
	1848,3,250,125,0,1846,1848,3,256,128,0,1847,1843,1,0,0,0,1847,1844,1,0,
	0,0,1847,1845,1,0,0,0,1847,1846,1,0,0,0,1848,279,1,0,0,0,1849,1871,3,204,
	102,0,1850,1852,5,99,0,0,1851,1850,1,0,0,0,1851,1852,1,0,0,0,1852,1853,
	1,0,0,0,1853,1855,5,87,0,0,1854,1856,5,25,0,0,1855,1854,1,0,0,0,1855,1856,
	1,0,0,0,1856,1857,1,0,0,0,1857,1859,5,6,0,0,1858,1860,3,240,120,0,1859,
	1858,1,0,0,0,1859,1860,1,0,0,0,1860,1861,1,0,0,0,1861,1863,5,7,0,0,1862,
	1864,3,56,28,0,1863,1862,1,0,0,0,1863,1864,1,0,0,0,1864,1865,1,0,0,0,1865,
	1866,5,8,0,0,1866,1867,3,246,123,0,1867,1868,5,10,0,0,1868,1871,1,0,0,0,
	1869,1871,3,282,141,0,1870,1849,1,0,0,0,1870,1851,1,0,0,0,1870,1869,1,0,
	0,0,1871,281,1,0,0,0,1872,1874,5,99,0,0,1873,1872,1,0,0,0,1873,1874,1,0,
	0,0,1874,1875,1,0,0,0,1875,1877,3,284,142,0,1876,1878,3,56,28,0,1877,1876,
	1,0,0,0,1877,1878,1,0,0,0,1878,1879,1,0,0,0,1879,1880,5,58,0,0,1880,1881,
	3,286,143,0,1881,283,1,0,0,0,1882,1889,3,264,132,0,1883,1885,5,6,0,0,1884,
	1886,3,240,120,0,1885,1884,1,0,0,0,1885,1886,1,0,0,0,1886,1887,1,0,0,0,
	1887,1889,5,7,0,0,1888,1882,1,0,0,0,1888,1883,1,0,0,0,1889,285,1,0,0,0,
	1890,1896,3,274,137,0,1891,1892,5,8,0,0,1892,1893,3,246,123,0,1893,1894,
	5,10,0,0,1894,1896,1,0,0,0,1895,1890,1,0,0,0,1895,1891,1,0,0,0,1896,287,
	1,0,0,0,1897,1898,7,12,0,0,1898,289,1,0,0,0,1899,1907,5,59,0,0,1900,1907,
	5,60,0,0,1901,1907,5,139,0,0,1902,1907,3,292,146,0,1903,1907,5,3,0,0,1904,
	1907,3,296,148,0,1905,1907,3,298,149,0,1906,1899,1,0,0,0,1906,1900,1,0,
	0,0,1906,1901,1,0,0,0,1906,1902,1,0,0,0,1906,1903,1,0,0,0,1906,1904,1,0,
	0,0,1906,1905,1,0,0,0,1907,291,1,0,0,0,1908,1912,5,140,0,0,1909,1911,3,
	294,147,0,1910,1909,1,0,0,0,1911,1914,1,0,0,0,1912,1910,1,0,0,0,1912,1913,
	1,0,0,0,1913,1915,1,0,0,0,1914,1912,1,0,0,0,1915,1916,5,140,0,0,1916,293,
	1,0,0,0,1917,1924,5,148,0,0,1918,1919,5,147,0,0,1919,1920,3,274,137,0,1920,
	1921,5,9,0,0,1921,1924,1,0,0,0,1922,1924,5,146,0,0,1923,1917,1,0,0,0,1923,
	1918,1,0,0,0,1923,1922,1,0,0,0,1924,295,1,0,0,0,1925,1926,7,13,0,0,1926,
	297,1,0,0,0,1927,1928,7,14,0,0,1928,299,1,0,0,0,1929,1930,4,150,44,0,1930,
	1931,3,306,153,0,1931,1932,3,236,118,0,1932,301,1,0,0,0,1933,1934,4,151,
	45,0,1934,1935,3,306,153,0,1935,1936,3,236,118,0,1936,303,1,0,0,0,1937,
	1940,3,306,153,0,1938,1940,3,310,155,0,1939,1937,1,0,0,0,1939,1938,1,0,
	0,0,1940,305,1,0,0,0,1941,1942,7,15,0,0,1942,307,1,0,0,0,1943,1947,3,306,
	153,0,1944,1947,5,129,0,0,1945,1947,5,132,0,0,1946,1943,1,0,0,0,1946,1944,
	1,0,0,0,1946,1945,1,0,0,0,1947,309,1,0,0,0,1948,1952,3,312,156,0,1949,1952,
	5,59,0,0,1950,1952,5,60,0,0,1951,1948,1,0,0,0,1951,1949,1,0,0,0,1951,1950,
	1,0,0,0,1952,311,1,0,0,0,1953,1954,7,16,0,0,1954,313,1,0,0,0,1955,1960,
	5,11,0,0,1956,1960,5,0,0,1,1957,1960,4,157,46,0,1958,1960,4,157,47,0,1959,
	1955,1,0,0,0,1959,1956,1,0,0,0,1959,1957,1,0,0,0,1959,1958,1,0,0,0,1960,
	315,1,0,0,0,258,321,325,334,339,346,353,362,368,374,385,387,410,416,421,
	433,440,444,449,455,459,465,472,482,484,500,504,507,511,519,523,538,542,
	545,549,552,556,562,566,570,578,583,586,588,595,600,603,606,611,614,617,
	622,625,628,632,638,642,646,650,661,666,671,678,683,691,694,697,702,705,
	709,719,723,729,735,742,748,751,757,765,770,781,786,794,801,808,813,846,
	850,857,864,872,876,883,891,896,898,905,909,918,922,930,934,938,947,955,
	959,967,972,974,981,986,990,994,997,1000,1003,1007,1011,1015,1017,1024,
	1030,1033,1036,1040,1043,1050,1059,1078,1082,1086,1096,1100,1124,1133,1140,
	1150,1155,1162,1169,1176,1183,1201,1205,1207,1214,1220,1225,1240,1243,1249,
	1253,1264,1268,1277,1280,1284,1286,1289,1294,1300,1303,1309,1322,1327,1332,
	1335,1338,1350,1355,1358,1361,1364,1367,1370,1377,1380,1385,1393,1398,1402,
	1415,1419,1432,1436,1445,1454,1464,1469,1472,1479,1481,1484,1487,1491,1494,
	1498,1503,1506,1511,1520,1524,1529,1534,1540,1544,1548,1551,1559,1563,1565,
	1584,1588,1594,1603,1617,1622,1624,1633,1637,1641,1648,1655,1658,1666,1673,
	1702,1714,1716,1740,1785,1793,1797,1801,1805,1809,1813,1830,1832,1838,1841,
	1847,1851,1855,1859,1863,1870,1873,1877,1885,1888,1895,1906,1912,1923,1939,
	1946,1951,1959];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypeScriptParser.__ATN) {
			TypeScriptParser.__ATN = new ATNDeserializer().deserialize(TypeScriptParser._serializedATN);
		}

		return TypeScriptParser.__ATN;
	}


	static DecisionsToDFA = TypeScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class InitializerContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_initializer;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterInitializer) {
	 		listener.enterInitializer(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitInitializer) {
	 		listener.exitInitializer(this);
		}
	}
}


export class BindingPatternContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_bindingPattern;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBindingPattern) {
	 		listener.enterBindingPattern(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBindingPattern) {
	 		listener.exitBindingPattern(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan(): TerminalNode {
		return this.getToken(TypeScriptParser.LessThan, 0);
	}
	public MoreThan(): TerminalNode {
		return this.getToken(TypeScriptParser.MoreThan, 0);
	}
	public typeParameterList(): TypeParameterListContext {
		return this.getTypedRuleContext(TypeParameterListContext, 0) as TypeParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeParameters;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeParameterList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeParameterList) {
	 		listener.enterTypeParameterList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeParameterList) {
	 		listener.exitTypeParameterList(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public typeArgument(): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, 0) as TypeArgumentContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeParameter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Extends(): TerminalNode {
		return this.getToken(TypeScriptParser.Extends, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_constraint;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterConstraint) {
	 		listener.enterConstraint(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitConstraint) {
	 		listener.exitConstraint(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan(): TerminalNode {
		return this.getToken(TypeScriptParser.LessThan, 0);
	}
	public MoreThan(): TerminalNode {
		return this.getToken(TypeScriptParser.MoreThan, 0);
	}
	public typeArgumentList(): TypeArgumentListContext {
		return this.getTypedRuleContext(TypeArgumentListContext, 0) as TypeArgumentListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeArguments;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeArgumentList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeArgumentList) {
	 		listener.enterTypeArgumentList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeArgumentList) {
	 		listener.exitTypeArgumentList(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeArgument;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext {
		return this.getTypedRuleContext(UnionOrIntersectionOrPrimaryTypeContext, 0) as UnionOrIntersectionOrPrimaryTypeContext;
	}
	public BitOr(): TerminalNode {
		return this.getToken(TypeScriptParser.BitOr, 0);
	}
	public BitAnd(): TerminalNode {
		return this.getToken(TypeScriptParser.BitAnd, 0);
	}
	public functionType(): FunctionTypeContext {
		return this.getTypedRuleContext(FunctionTypeContext, 0) as FunctionTypeContext;
	}
	public constructorType(): ConstructorTypeContext {
		return this.getTypedRuleContext(ConstructorTypeContext, 0) as ConstructorTypeContext;
	}
	public typeGeneric(): TypeGenericContext {
		return this.getTypedRuleContext(TypeGenericContext, 0) as TypeGenericContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_type_;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterType_) {
	 		listener.enterType_(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitType_) {
	 		listener.exitType_(this);
		}
	}
}


export class UnionOrIntersectionOrPrimaryTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_unionOrIntersectionOrPrimaryType;
	}
	public override copyFrom(ctx: UnionOrIntersectionOrPrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class IntersectionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unionOrIntersectionOrPrimaryType_list(): UnionOrIntersectionOrPrimaryTypeContext[] {
		return this.getTypedRuleContexts(UnionOrIntersectionOrPrimaryTypeContext) as UnionOrIntersectionOrPrimaryTypeContext[];
	}
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext {
		return this.getTypedRuleContext(UnionOrIntersectionOrPrimaryTypeContext, i) as UnionOrIntersectionOrPrimaryTypeContext;
	}
	public BitAnd(): TerminalNode {
		return this.getToken(TypeScriptParser.BitAnd, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIntersection) {
	 		listener.enterIntersection(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIntersection) {
	 		listener.exitIntersection(this);
		}
	}
}
export class PrimaryContext extends UnionOrIntersectionOrPrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryType(): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, 0) as PrimaryTypeContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
}
export class UnionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unionOrIntersectionOrPrimaryType_list(): UnionOrIntersectionOrPrimaryTypeContext[] {
		return this.getTypedRuleContexts(UnionOrIntersectionOrPrimaryTypeContext) as UnionOrIntersectionOrPrimaryTypeContext[];
	}
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext {
		return this.getTypedRuleContext(UnionOrIntersectionOrPrimaryTypeContext, i) as UnionOrIntersectionOrPrimaryTypeContext;
	}
	public BitOr(): TerminalNode {
		return this.getToken(TypeScriptParser.BitOr, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterUnion) {
	 		listener.enterUnion(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitUnion) {
	 		listener.exitUnion(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_primaryType;
	}
	public override copyFrom(ctx: PrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class RedefinitionOfTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public Is(): TerminalNode {
		return this.getToken(TypeScriptParser.Is, 0);
	}
	public primaryType(): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, 0) as PrimaryTypeContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRedefinitionOfType) {
	 		listener.enterRedefinitionOfType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRedefinitionOfType) {
	 		listener.exitRedefinitionOfType(this);
		}
	}
}
export class PredefinedPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public predefinedType(): PredefinedTypeContext {
		return this.getTypedRuleContext(PredefinedTypeContext, 0) as PredefinedTypeContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPredefinedPrimType) {
	 		listener.enterPredefinedPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPredefinedPrimType) {
	 		listener.exitPredefinedPrimType(this);
		}
	}
}
export class ArrayPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryType_list(): PrimaryTypeContext[] {
		return this.getTypedRuleContexts(PrimaryTypeContext) as PrimaryTypeContext[];
	}
	public primaryType(i: number): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, i) as PrimaryTypeContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrayPrimType) {
	 		listener.enterArrayPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrayPrimType) {
	 		listener.exitArrayPrimType(this);
		}
	}
}
export class ParenthesizedPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterParenthesizedPrimType) {
	 		listener.enterParenthesizedPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitParenthesizedPrimType) {
	 		listener.exitParenthesizedPrimType(this);
		}
	}
}
export class ThisPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public This(): TerminalNode {
		return this.getToken(TypeScriptParser.This, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterThisPrimType) {
	 		listener.enterThisPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitThisPrimType) {
	 		listener.exitThisPrimType(this);
		}
	}
}
export class TuplePrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getTypedRuleContext(TupleElementTypesContext, 0) as TupleElementTypesContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTuplePrimType) {
	 		listener.enterTuplePrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTuplePrimType) {
	 		listener.exitTuplePrimType(this);
		}
	}
}
export class KeyOfTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KeyOf(): TerminalNode {
		return this.getToken(TypeScriptParser.KeyOf, 0);
	}
	public primaryType(): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, 0) as PrimaryTypeContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterKeyOfType) {
	 		listener.enterKeyOfType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitKeyOfType) {
	 		listener.exitKeyOfType(this);
		}
	}
}
export class ObjectPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public objectType(): ObjectTypeContext {
		return this.getTypedRuleContext(ObjectTypeContext, 0) as ObjectTypeContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterObjectPrimType) {
	 		listener.enterObjectPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitObjectPrimType) {
	 		listener.exitObjectPrimType(this);
		}
	}
}
export class ReferencePrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterReferencePrimType) {
	 		listener.enterReferencePrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitReferencePrimType) {
	 		listener.exitReferencePrimType(this);
		}
	}
}
export class QueryPrimTypeContext extends PrimaryTypeContext {
	constructor(parser: TypeScriptParser, ctx: PrimaryTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeQuery(): TypeQueryContext {
		return this.getTypedRuleContext(TypeQueryContext, 0) as TypeQueryContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterQueryPrimType) {
	 		listener.enterQueryPrimType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitQueryPrimType) {
	 		listener.exitQueryPrimType(this);
		}
	}
}


export class PredefinedTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Any(): TerminalNode {
		return this.getToken(TypeScriptParser.Any, 0);
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.NullLiteral, 0);
	}
	public Number(): TerminalNode {
		return this.getToken(TypeScriptParser.Number, 0);
	}
	public DecimalLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.DecimalLiteral, 0);
	}
	public Boolean(): TerminalNode {
		return this.getToken(TypeScriptParser.Boolean, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BooleanLiteral, 0);
	}
	public String(): TerminalNode {
		return this.getToken(TypeScriptParser.String, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
	public Symbol(): TerminalNode {
		return this.getToken(TypeScriptParser.Symbol, 0);
	}
	public Unique(): TerminalNode {
		return this.getToken(TypeScriptParser.Unique, 0);
	}
	public Never(): TerminalNode {
		return this.getToken(TypeScriptParser.Never, 0);
	}
	public Undefined(): TerminalNode {
		return this.getToken(TypeScriptParser.Undefined, 0);
	}
	public Object(): TerminalNode {
		return this.getToken(TypeScriptParser.Object, 0);
	}
	public Void(): TerminalNode {
		return this.getToken(TypeScriptParser.Void, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_predefinedType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPredefinedType) {
	 		listener.enterPredefinedType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPredefinedType) {
	 		listener.exitPredefinedType(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public typeGeneric(): TypeGenericContext {
		return this.getTypedRuleContext(TypeGenericContext, 0) as TypeGenericContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeReference;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeReference) {
	 		listener.enterTypeReference(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeReference) {
	 		listener.exitTypeReference(this);
		}
	}
}


export class TypeGenericContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LessThan(): TerminalNode {
		return this.getToken(TypeScriptParser.LessThan, 0);
	}
	public typeArgumentList(): TypeArgumentListContext {
		return this.getTypedRuleContext(TypeArgumentListContext, 0) as TypeArgumentListContext;
	}
	public MoreThan(): TerminalNode {
		return this.getToken(TypeScriptParser.MoreThan, 0);
	}
	public typeGeneric(): TypeGenericContext {
		return this.getTypedRuleContext(TypeGenericContext, 0) as TypeGenericContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeGeneric;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeGeneric) {
	 		listener.enterTypeGeneric(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeGeneric) {
	 		listener.exitTypeGeneric(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public namespaceName(): NamespaceNameContext {
		return this.getTypedRuleContext(NamespaceNameContext, 0) as NamespaceNameContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public typeBody(): TypeBodyContext {
		return this.getTypedRuleContext(TypeBodyContext, 0) as TypeBodyContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_objectType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterObjectType) {
	 		listener.enterObjectType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitObjectType) {
	 		listener.exitObjectType(this);
		}
	}
}


export class TypeBodyContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeMemberList(): TypeMemberListContext {
		return this.getTypedRuleContext(TypeMemberListContext, 0) as TypeMemberListContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeBody;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeBody) {
	 		listener.enterTypeBody(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeBody) {
	 		listener.exitTypeBody(this);
		}
	}
}


export class TypeMemberListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeMember_list(): TypeMemberContext[] {
		return this.getTypedRuleContexts(TypeMemberContext) as TypeMemberContext[];
	}
	public typeMember(i: number): TypeMemberContext {
		return this.getTypedRuleContext(TypeMemberContext, i) as TypeMemberContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, i);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeMemberList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeMemberList) {
	 		listener.enterTypeMemberList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeMemberList) {
	 		listener.exitTypeMemberList(this);
		}
	}
}


export class TypeMemberContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertySignatur(): PropertySignaturContext {
		return this.getTypedRuleContext(PropertySignaturContext, 0) as PropertySignaturContext;
	}
	public callSignature(): CallSignatureContext {
		return this.getTypedRuleContext(CallSignatureContext, 0) as CallSignatureContext;
	}
	public constructSignature(): ConstructSignatureContext {
		return this.getTypedRuleContext(ConstructSignatureContext, 0) as ConstructSignatureContext;
	}
	public indexSignature(): IndexSignatureContext {
		return this.getTypedRuleContext(IndexSignatureContext, 0) as IndexSignatureContext;
	}
	public methodSignature(): MethodSignatureContext {
		return this.getTypedRuleContext(MethodSignatureContext, 0) as MethodSignatureContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(TypeScriptParser.ARROW, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeMember;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeMember) {
	 		listener.enterTypeMember(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeMember) {
	 		listener.exitTypeMember(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryType(): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, 0) as PrimaryTypeContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrayType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getTypedRuleContext(TupleElementTypesContext, 0) as TupleElementTypesContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_tupleType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTupleType) {
	 		listener.enterTupleType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTupleType) {
	 		listener.exitTupleType(this);
		}
	}
}


export class TupleElementTypesContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): Type_Context[] {
		return this.getTypedRuleContexts(Type_Context) as Type_Context[];
	}
	public type_(i: number): Type_Context {
		return this.getTypedRuleContext(Type_Context, i) as Type_Context;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_tupleElementTypes;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTupleElementTypes) {
	 		listener.enterTupleElementTypes(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTupleElementTypes) {
	 		listener.exitTupleElementTypes(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public ARROW(): TerminalNode {
		return this.getToken(TypeScriptParser.ARROW, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_functionType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFunctionType) {
	 		listener.enterFunctionType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFunctionType) {
	 		listener.exitFunctionType(this);
		}
	}
}


export class ConstructorTypeContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public New(): TerminalNode {
		return this.getToken(TypeScriptParser.New, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public ARROW(): TerminalNode {
		return this.getToken(TypeScriptParser.ARROW, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_constructorType;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterConstructorType) {
	 		listener.enterConstructorType(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitConstructorType) {
	 		listener.exitConstructorType(this);
		}
	}
}


export class TypeQueryContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Typeof(): TerminalNode {
		return this.getToken(TypeScriptParser.Typeof, 0);
	}
	public typeQueryExpression(): TypeQueryExpressionContext {
		return this.getTypedRuleContext(TypeQueryExpressionContext, 0) as TypeQueryExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeQuery;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeQuery) {
	 		listener.enterTypeQuery(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeQuery) {
	 		listener.exitTypeQuery(this);
		}
	}
}


export class TypeQueryExpressionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public identifierName_list(): IdentifierNameContext[] {
		return this.getTypedRuleContexts(IdentifierNameContext) as IdentifierNameContext[];
	}
	public identifierName(i: number): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, i) as IdentifierNameContext;
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeQueryExpression;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeQueryExpression) {
	 		listener.enterTypeQueryExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeQueryExpression) {
	 		listener.exitTypeQueryExpression(this);
		}
	}
}


export class PropertySignaturContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public ReadOnly(): TerminalNode {
		return this.getToken(TypeScriptParser.ReadOnly, 0);
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(TypeScriptParser.ARROW, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_propertySignatur;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertySignatur) {
	 		listener.enterPropertySignatur(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertySignatur) {
	 		listener.exitPropertySignatur(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeAnnotation;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeAnnotation) {
	 		listener.enterTypeAnnotation(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeAnnotation) {
	 		listener.exitTypeAnnotation(this);
		}
	}
}


export class CallSignatureContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_callSignature;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCallSignature) {
	 		listener.enterCallSignature(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCallSignature) {
	 		listener.exitCallSignature(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public restParameter(): RestParameterContext {
		return this.getTypedRuleContext(RestParameterContext, 0) as RestParameterContext;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_parameterList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
}


export class RequiredParameterListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public requiredParameter_list(): RequiredParameterContext[] {
		return this.getTypedRuleContexts(RequiredParameterContext) as RequiredParameterContext[];
	}
	public requiredParameter(i: number): RequiredParameterContext {
		return this.getTypedRuleContext(RequiredParameterContext, i) as RequiredParameterContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_requiredParameterList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRequiredParameterList) {
	 		listener.enterRequiredParameterList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRequiredParameterList) {
	 		listener.exitRequiredParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public requiredParameter(): RequiredParameterContext {
		return this.getTypedRuleContext(RequiredParameterContext, 0) as RequiredParameterContext;
	}
	public optionalParameter(): OptionalParameterContext {
		return this.getTypedRuleContext(OptionalParameterContext, 0) as OptionalParameterContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_parameter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
}


export class OptionalParameterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrPattern(): IdentifierOrPatternContext {
		return this.getTypedRuleContext(IdentifierOrPatternContext, 0) as IdentifierOrPatternContext;
	}
	public decoratorList(): DecoratorListContext {
		return this.getTypedRuleContext(DecoratorListContext, 0) as DecoratorListContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_optionalParameter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterOptionalParameter) {
	 		listener.enterOptionalParameter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitOptionalParameter) {
	 		listener.exitOptionalParameter(this);
		}
	}
}


export class RestParameterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(TypeScriptParser.Ellipsis, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_restParameter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRestParameter) {
	 		listener.enterRestParameter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRestParameter) {
	 		listener.exitRestParameter(this);
		}
	}
}


export class RequiredParameterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrPattern(): IdentifierOrPatternContext {
		return this.getTypedRuleContext(IdentifierOrPatternContext, 0) as IdentifierOrPatternContext;
	}
	public decoratorList(): DecoratorListContext {
		return this.getTypedRuleContext(DecoratorListContext, 0) as DecoratorListContext;
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_requiredParameter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRequiredParameter) {
	 		listener.enterRequiredParameter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRequiredParameter) {
	 		listener.exitRequiredParameter(this);
		}
	}
}


export class AccessibilityModifierContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Public(): TerminalNode {
		return this.getToken(TypeScriptParser.Public, 0);
	}
	public Private(): TerminalNode {
		return this.getToken(TypeScriptParser.Private, 0);
	}
	public Protected(): TerminalNode {
		return this.getToken(TypeScriptParser.Protected, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_accessibilityModifier;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAccessibilityModifier) {
	 		listener.enterAccessibilityModifier(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAccessibilityModifier) {
	 		listener.exitAccessibilityModifier(this);
		}
	}
}


export class IdentifierOrPatternContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public bindingPattern(): BindingPatternContext {
		return this.getTypedRuleContext(BindingPatternContext, 0) as BindingPatternContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_identifierOrPattern;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIdentifierOrPattern) {
	 		listener.enterIdentifierOrPattern(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIdentifierOrPattern) {
	 		listener.exitIdentifierOrPattern(this);
		}
	}
}


export class ConstructSignatureContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public New(): TerminalNode {
		return this.getToken(TypeScriptParser.New, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_constructSignature;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterConstructSignature) {
	 		listener.enterConstructSignature(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitConstructSignature) {
	 		listener.exitConstructSignature(this);
		}
	}
}


export class IndexSignatureContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public Number(): TerminalNode {
		return this.getToken(TypeScriptParser.Number, 0);
	}
	public String(): TerminalNode {
		return this.getToken(TypeScriptParser.String, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_indexSignature;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIndexSignature) {
	 		listener.enterIndexSignature(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIndexSignature) {
	 		listener.exitIndexSignature(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public callSignature(): CallSignatureContext {
		return this.getTypedRuleContext(CallSignatureContext, 0) as CallSignatureContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_methodSignature;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMethodSignature) {
	 		listener.enterMethodSignature(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMethodSignature) {
	 		listener.exitMethodSignature(this);
		}
	}
}


export class TypeAliasDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TypeAlias(): TerminalNode {
		return this.getToken(TypeScriptParser.TypeAlias, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_typeAliasDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeAliasDeclaration) {
	 		listener.enterTypeAliasDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeAliasDeclaration) {
	 		listener.exitTypeAliasDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Constructor(): TerminalNode {
		return this.getToken(TypeScriptParser.Constructor, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_constructorDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterConstructorDeclaration) {
	 		listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitConstructorDeclaration) {
	 		listener.exitConstructorDeclaration(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Interface(): TerminalNode {
		return this.getToken(TypeScriptParser.Interface, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public objectType(): ObjectTypeContext {
		return this.getTypedRuleContext(ObjectTypeContext, 0) as ObjectTypeContext;
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public Declare(): TerminalNode {
		return this.getToken(TypeScriptParser.Declare, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public interfaceExtendsClause(): InterfaceExtendsClauseContext {
		return this.getTypedRuleContext(InterfaceExtendsClauseContext, 0) as InterfaceExtendsClauseContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterInterfaceDeclaration) {
	 		listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitInterfaceDeclaration) {
	 		listener.exitInterfaceDeclaration(this);
		}
	}
}


export class InterfaceExtendsClauseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Extends(): TerminalNode {
		return this.getToken(TypeScriptParser.Extends, 0);
	}
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeListContext, 0) as ClassOrInterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_interfaceExtendsClause;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterInterfaceExtendsClause) {
	 		listener.enterInterfaceExtendsClause(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitInterfaceExtendsClause) {
	 		listener.exitInterfaceExtendsClause(this);
		}
	}
}


export class ClassOrInterfaceTypeListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference_list(): TypeReferenceContext[] {
		return this.getTypedRuleContexts(TypeReferenceContext) as TypeReferenceContext[];
	}
	public typeReference(i: number): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, i) as TypeReferenceContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classOrInterfaceTypeList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassOrInterfaceTypeList) {
	 		listener.enterClassOrInterfaceTypeList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassOrInterfaceTypeList) {
	 		listener.exitClassOrInterfaceTypeList(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Enum(): TerminalNode {
		return this.getToken(TypeScriptParser.Enum, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Const(): TerminalNode {
		return this.getToken(TypeScriptParser.Const, 0);
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_enumDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumMemberList(): EnumMemberListContext {
		return this.getTypedRuleContext(EnumMemberListContext, 0) as EnumMemberListContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_enumBody;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
}


export class EnumMemberListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumMember_list(): EnumMemberContext[] {
		return this.getTypedRuleContexts(EnumMemberContext) as EnumMemberContext[];
	}
	public enumMember(i: number): EnumMemberContext {
		return this.getTypedRuleContext(EnumMemberContext, i) as EnumMemberContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_enumMemberList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEnumMemberList) {
	 		listener.enterEnumMemberList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEnumMemberList) {
	 		listener.exitEnumMemberList(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_enumMember;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEnumMember) {
	 		listener.enterEnumMember(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEnumMember) {
	 		listener.exitEnumMember(this);
		}
	}
}


export class NamespaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Namespace(): TerminalNode {
		return this.getToken(TypeScriptParser.Namespace, 0);
	}
	public namespaceName(): NamespaceNameContext {
		return this.getTypedRuleContext(NamespaceNameContext, 0) as NamespaceNameContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Declare(): TerminalNode {
		return this.getToken(TypeScriptParser.Declare, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_namespaceDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNamespaceDeclaration) {
	 		listener.enterNamespaceDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNamespaceDeclaration) {
	 		listener.exitNamespaceDeclaration(this);
		}
	}
}


export class NamespaceNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_namespaceName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNamespaceName) {
	 		listener.enterNamespaceName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNamespaceName) {
	 		listener.exitNamespaceName(this);
		}
	}
}


export class ImportAliasDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public namespaceName(): NamespaceNameContext {
		return this.getTypedRuleContext(NamespaceNameContext, 0) as NamespaceNameContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importAliasDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportAliasDeclaration) {
	 		listener.enterImportAliasDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportAliasDeclaration) {
	 		listener.exitImportAliasDeclaration(this);
		}
	}
}


export class DecoratorListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decorator_list(): DecoratorContext[] {
		return this.getTypedRuleContexts(DecoratorContext) as DecoratorContext[];
	}
	public decorator(i: number): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, i) as DecoratorContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_decoratorList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDecoratorList) {
	 		listener.enterDecoratorList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDecoratorList) {
	 		listener.exitDecoratorList(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public At(): TerminalNode {
		return this.getToken(TypeScriptParser.At, 0);
	}
	public decoratorMemberExpression(): DecoratorMemberExpressionContext {
		return this.getTypedRuleContext(DecoratorMemberExpressionContext, 0) as DecoratorMemberExpressionContext;
	}
	public decoratorCallExpression(): DecoratorCallExpressionContext {
		return this.getTypedRuleContext(DecoratorCallExpressionContext, 0) as DecoratorCallExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_decorator;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDecorator) {
	 		listener.enterDecorator(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDecorator) {
	 		listener.exitDecorator(this);
		}
	}
}


export class DecoratorMemberExpressionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public decoratorMemberExpression(): DecoratorMemberExpressionContext {
		return this.getTypedRuleContext(DecoratorMemberExpressionContext, 0) as DecoratorMemberExpressionContext;
	}
	public Dot(): TerminalNode {
		return this.getToken(TypeScriptParser.Dot, 0);
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_decoratorMemberExpression;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDecoratorMemberExpression) {
	 		listener.enterDecoratorMemberExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDecoratorMemberExpression) {
	 		listener.exitDecoratorMemberExpression(this);
		}
	}
}


export class DecoratorCallExpressionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decoratorMemberExpression(): DecoratorMemberExpressionContext {
		return this.getTypedRuleContext(DecoratorMemberExpressionContext, 0) as DecoratorMemberExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_decoratorCallExpression;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDecoratorCallExpression) {
	 		listener.enterDecoratorCallExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDecoratorCallExpression) {
	 		listener.exitDecoratorCallExpression(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(TypeScriptParser.EOF, 0);
	}
	public sourceElements(): SourceElementsContext {
		return this.getTypedRuleContext(SourceElementsContext, 0) as SourceElementsContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_program;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_sourceElement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSourceElement) {
	 		listener.enterSourceElement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSourceElement) {
	 		listener.exitSourceElement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public variableStatement(): VariableStatementContext {
		return this.getTypedRuleContext(VariableStatementContext, 0) as VariableStatementContext;
	}
	public importStatement(): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext;
	}
	public exportStatement(): ExportStatementContext {
		return this.getTypedRuleContext(ExportStatementContext, 0) as ExportStatementContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
	public abstractDeclaration(): AbstractDeclarationContext {
		return this.getTypedRuleContext(AbstractDeclarationContext, 0) as AbstractDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public namespaceDeclaration(): NamespaceDeclarationContext {
		return this.getTypedRuleContext(NamespaceDeclarationContext, 0) as NamespaceDeclarationContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public iterationStatement(): IterationStatementContext {
		return this.getTypedRuleContext(IterationStatementContext, 0) as IterationStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}
	public withStatement(): WithStatementContext {
		return this.getTypedRuleContext(WithStatementContext, 0) as WithStatementContext;
	}
	public labelledStatement(): LabelledStatementContext {
		return this.getTypedRuleContext(LabelledStatementContext, 0) as LabelledStatementContext;
	}
	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
	public debuggerStatement(): DebuggerStatementContext {
		return this.getTypedRuleContext(DebuggerStatementContext, 0) as DebuggerStatementContext;
	}
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		return this.getTypedRuleContext(ArrowFunctionDeclarationContext, 0) as ArrowFunctionDeclarationContext;
	}
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext {
		return this.getTypedRuleContext(GeneratorFunctionDeclarationContext, 0) as GeneratorFunctionDeclarationContext;
	}
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		return this.getTypedRuleContext(TypeAliasDeclarationContext, 0) as TypeAliasDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_statement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_block;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_statementList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterStatementList) {
	 		listener.enterStatementList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitStatementList) {
	 		listener.exitStatementList(this);
		}
	}
}


export class AbstractDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Abstract(): TerminalNode {
		return this.getToken(TypeScriptParser.Abstract, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public callSignature(): CallSignatureContext {
		return this.getTypedRuleContext(CallSignatureContext, 0) as CallSignatureContext;
	}
	public variableStatement(): VariableStatementContext {
		return this.getTypedRuleContext(VariableStatementContext, 0) as VariableStatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_abstractDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAbstractDeclaration) {
	 		listener.enterAbstractDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAbstractDeclaration) {
	 		listener.exitAbstractDeclaration(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Import(): TerminalNode {
		return this.getToken(TypeScriptParser.Import, 0);
	}
	public importFromBlock(): ImportFromBlockContext {
		return this.getTypedRuleContext(ImportFromBlockContext, 0) as ImportFromBlockContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importFrom(): ImportFromContext {
		return this.getTypedRuleContext(ImportFromContext, 0) as ImportFromContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public importNamespace(): ImportNamespaceContext {
		return this.getTypedRuleContext(ImportNamespaceContext, 0) as ImportNamespaceContext;
	}
	public importModuleItems(): ImportModuleItemsContext {
		return this.getTypedRuleContext(ImportModuleItemsContext, 0) as ImportModuleItemsContext;
	}
	public importDefault(): ImportDefaultContext {
		return this.getTypedRuleContext(ImportDefaultContext, 0) as ImportDefaultContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importFromBlock;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportFromBlock) {
	 		listener.enterImportFromBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportFromBlock) {
	 		listener.exitImportFromBlock(this);
		}
	}
}


export class ImportModuleItemsContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public importAliasName_list(): ImportAliasNameContext[] {
		return this.getTypedRuleContexts(ImportAliasNameContext) as ImportAliasNameContext[];
	}
	public importAliasName(i: number): ImportAliasNameContext {
		return this.getTypedRuleContext(ImportAliasNameContext, i) as ImportAliasNameContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importModuleItems;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportModuleItems) {
	 		listener.enterImportModuleItems(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportModuleItems) {
	 		listener.exitImportModuleItems(this);
		}
	}
}


export class ImportAliasNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleExportName(): ModuleExportNameContext {
		return this.getTypedRuleContext(ModuleExportNameContext, 0) as ModuleExportNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public importedBinding(): ImportedBindingContext {
		return this.getTypedRuleContext(ImportedBindingContext, 0) as ImportedBindingContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importAliasName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportAliasName) {
	 		listener.enterImportAliasName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportAliasName) {
	 		listener.exitImportAliasName(this);
		}
	}
}


export class ModuleExportNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_moduleExportName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterModuleExportName) {
	 		listener.enterModuleExportName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitModuleExportName) {
	 		listener.exitModuleExportName(this);
		}
	}
}


export class ImportedBindingContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(TypeScriptParser.Identifier, 0);
	}
	public Yield(): TerminalNode {
		return this.getToken(TypeScriptParser.Yield, 0);
	}
	public Await(): TerminalNode {
		return this.getToken(TypeScriptParser.Await, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importedBinding;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportedBinding) {
	 		listener.enterImportedBinding(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportedBinding) {
	 		listener.exitImportedBinding(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasName(): AliasNameContext {
		return this.getTypedRuleContext(AliasNameContext, 0) as AliasNameContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importDefault;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportDefault) {
	 		listener.enterImportDefault(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportDefault) {
	 		listener.exitImportDefault(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public identifierName_list(): IdentifierNameContext[] {
		return this.getTypedRuleContexts(IdentifierNameContext) as IdentifierNameContext[];
	}
	public identifierName(i: number): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, i) as IdentifierNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importNamespace;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportNamespace) {
	 		listener.enterImportNamespace(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportNamespace) {
	 		listener.exitImportNamespace(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public From(): TerminalNode {
		return this.getToken(TypeScriptParser.From, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_importFrom;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImportFrom) {
	 		listener.enterImportFrom(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImportFrom) {
	 		listener.exitImportFrom(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName_list(): IdentifierNameContext[] {
		return this.getTypedRuleContexts(IdentifierNameContext) as IdentifierNameContext[];
	}
	public identifierName(i: number): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, i) as IdentifierNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_aliasName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAliasName) {
	 		listener.enterAliasName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAliasName) {
	 		listener.exitAliasName(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_exportStatement;
	}
	public override copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	constructor(parser: TypeScriptParser, ctx: ExportStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public Default(): TerminalNode {
		return this.getToken(TypeScriptParser.Default, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExportDefaultDeclaration) {
	 		listener.enterExportDefaultDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExportDefaultDeclaration) {
	 		listener.exitExportDefaultDeclaration(this);
		}
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	constructor(parser: TypeScriptParser, ctx: ExportStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public exportFromBlock(): ExportFromBlockContext {
		return this.getTypedRuleContext(ExportFromBlockContext, 0) as ExportFromBlockContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public Default(): TerminalNode {
		return this.getToken(TypeScriptParser.Default, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExportDeclaration) {
	 		listener.enterExportDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExportDeclaration) {
	 		listener.exitExportDeclaration(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importNamespace(): ImportNamespaceContext {
		return this.getTypedRuleContext(ImportNamespaceContext, 0) as ImportNamespaceContext;
	}
	public importFrom(): ImportFromContext {
		return this.getTypedRuleContext(ImportFromContext, 0) as ImportFromContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public exportModuleItems(): ExportModuleItemsContext {
		return this.getTypedRuleContext(ExportModuleItemsContext, 0) as ExportModuleItemsContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_exportFromBlock;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExportFromBlock) {
	 		listener.enterExportFromBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExportFromBlock) {
	 		listener.exitExportFromBlock(this);
		}
	}
}


export class ExportModuleItemsContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public exportAliasName_list(): ExportAliasNameContext[] {
		return this.getTypedRuleContexts(ExportAliasNameContext) as ExportAliasNameContext[];
	}
	public exportAliasName(i: number): ExportAliasNameContext {
		return this.getTypedRuleContext(ExportAliasNameContext, i) as ExportAliasNameContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_exportModuleItems;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExportModuleItems) {
	 		listener.enterExportModuleItems(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExportModuleItems) {
	 		listener.exitExportModuleItems(this);
		}
	}
}


export class ExportAliasNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleExportName_list(): ModuleExportNameContext[] {
		return this.getTypedRuleContexts(ModuleExportNameContext) as ModuleExportNameContext[];
	}
	public moduleExportName(i: number): ModuleExportNameContext {
		return this.getTypedRuleContext(ModuleExportNameContext, i) as ModuleExportNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_exportAliasName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExportAliasName) {
	 		listener.enterExportAliasName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExportAliasName) {
	 		listener.exitExportAliasName(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableStatement(): VariableStatementContext {
		return this.getTypedRuleContext(VariableStatementContext, 0) as VariableStatementContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_declaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bindingPattern(): BindingPatternContext {
		return this.getTypedRuleContext(BindingPatternContext, 0) as BindingPatternContext;
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public varModifier(): VarModifierContext {
		return this.getTypedRuleContext(VarModifierContext, 0) as VarModifierContext;
	}
	public ReadOnly(): TerminalNode {
		return this.getToken(TypeScriptParser.ReadOnly, 0);
	}
	public Declare(): TerminalNode {
		return this.getToken(TypeScriptParser.Declare, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_variableStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterVariableStatement) {
	 		listener.enterVariableStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitVariableStatement) {
	 		listener.exitVariableStatement(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_variableDeclarationList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterVariableDeclarationList) {
	 		listener.enterVariableDeclarationList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitVariableDeclarationList) {
	 		listener.exitVariableDeclarationList(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		return this.getTypedRuleContext(IdentifierOrKeyWordContext, 0) as IdentifierOrKeyWordContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_variableDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_emptyStatement_;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEmptyStatement_) {
	 		listener.enterEmptyStatement_(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEmptyStatement_) {
	 		listener.exitEmptyStatement_(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_expressionStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(TypeScriptParser.If, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public Else(): TerminalNode {
		return this.getToken(TypeScriptParser.Else, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_ifStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_iterationStatement;
	}
	public override copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForVarOfStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public varModifier(): VarModifierContext {
		return this.getTypedRuleContext(VarModifierContext, 0) as VarModifierContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public Await(): TerminalNode {
		return this.getToken(TypeScriptParser.Await, 0);
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForVarOfStatement) {
	 		listener.enterForVarOfStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForVarOfStatement) {
	 		listener.exitForVarOfStatement(this);
		}
	}
}
export class DoStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Do(): TerminalNode {
		return this.getToken(TypeScriptParser.Do, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public While(): TerminalNode {
		return this.getToken(TypeScriptParser.While, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDoStatement) {
	 		listener.enterDoStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDoStatement) {
	 		listener.exitDoStatement(this);
		}
	}
}
export class ForVarStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public varModifier(): VarModifierContext {
		return this.getTypedRuleContext(VarModifierContext, 0) as VarModifierContext;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, i);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expressionSequence_list(): ExpressionSequenceContext[] {
		return this.getTypedRuleContexts(ExpressionSequenceContext) as ExpressionSequenceContext[];
	}
	public expressionSequence(i: number): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, i) as ExpressionSequenceContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForVarStatement) {
	 		listener.enterForVarStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForVarStatement) {
	 		listener.exitForVarStatement(this);
		}
	}
}
export class ForVarInStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public varModifier(): VarModifierContext {
		return this.getTypedRuleContext(VarModifierContext, 0) as VarModifierContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public In(): TerminalNode {
		return this.getToken(TypeScriptParser.In, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForVarInStatement) {
	 		listener.enterForVarInStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForVarInStatement) {
	 		listener.exitForVarInStatement(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public While(): TerminalNode {
		return this.getToken(TypeScriptParser.While, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, i);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expressionSequence_list(): ExpressionSequenceContext[] {
		return this.getTypedRuleContexts(ExpressionSequenceContext) as ExpressionSequenceContext[];
	}
	public expressionSequence(i: number): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, i) as ExpressionSequenceContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForStatement) {
	 		listener.exitForStatement(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public In(): TerminalNode {
		return this.getToken(TypeScriptParser.In, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForInStatement) {
	 		listener.enterForInStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForInStatement) {
	 		listener.exitForInStatement(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	constructor(parser: TypeScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public Await(): TerminalNode {
		return this.getToken(TypeScriptParser.Await, 0);
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterForOfStatement) {
	 		listener.enterForOfStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitForOfStatement) {
	 		listener.exitForOfStatement(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(TypeScriptParser.Var, 0);
	}
	public Let(): TerminalNode {
		return this.getToken(TypeScriptParser.Let, 0);
	}
	public Const(): TerminalNode {
		return this.getToken(TypeScriptParser.Const, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_varModifier;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterVarModifier) {
	 		listener.enterVarModifier(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitVarModifier) {
	 		listener.exitVarModifier(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Continue(): TerminalNode {
		return this.getToken(TypeScriptParser.Continue, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_continueStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterContinueStatement) {
	 		listener.enterContinueStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitContinueStatement) {
	 		listener.exitContinueStatement(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Break(): TerminalNode {
		return this.getToken(TypeScriptParser.Break, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_breakStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(TypeScriptParser.Return, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_returnStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public Yield(): TerminalNode {
		return this.getToken(TypeScriptParser.Yield, 0);
	}
	public YieldStar(): TerminalNode {
		return this.getToken(TypeScriptParser.YieldStar, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_yieldStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterYieldStatement) {
	 		listener.enterYieldStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitYieldStatement) {
	 		listener.exitYieldStatement(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public With(): TerminalNode {
		return this.getToken(TypeScriptParser.With, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_withStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterWithStatement) {
	 		listener.enterWithStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitWithStatement) {
	 		listener.exitWithStatement(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Switch(): TerminalNode {
		return this.getToken(TypeScriptParser.Switch, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public caseBlock(): CaseBlockContext {
		return this.getTypedRuleContext(CaseBlockContext, 0) as CaseBlockContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_switchStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSwitchStatement) {
	 		listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSwitchStatement) {
	 		listener.exitSwitchStatement(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public caseClauses_list(): CaseClausesContext[] {
		return this.getTypedRuleContexts(CaseClausesContext) as CaseClausesContext[];
	}
	public caseClauses(i: number): CaseClausesContext {
		return this.getTypedRuleContext(CaseClausesContext, i) as CaseClausesContext;
	}
	public defaultClause(): DefaultClauseContext {
		return this.getTypedRuleContext(DefaultClauseContext, 0) as DefaultClauseContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_caseBlock;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCaseBlock) {
	 		listener.enterCaseBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCaseBlock) {
	 		listener.exitCaseBlock(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public caseClause_list(): CaseClauseContext[] {
		return this.getTypedRuleContexts(CaseClauseContext) as CaseClauseContext[];
	}
	public caseClause(i: number): CaseClauseContext {
		return this.getTypedRuleContext(CaseClauseContext, i) as CaseClauseContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_caseClauses;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCaseClauses) {
	 		listener.enterCaseClauses(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCaseClauses) {
	 		listener.exitCaseClauses(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Case(): TerminalNode {
		return this.getToken(TypeScriptParser.Case, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_caseClause;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCaseClause) {
	 		listener.enterCaseClause(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCaseClause) {
	 		listener.exitCaseClause(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Default(): TerminalNode {
		return this.getToken(TypeScriptParser.Default, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_defaultClause;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDefaultClause) {
	 		listener.enterDefaultClause(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDefaultClause) {
	 		listener.exitDefaultClause(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_labelledStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLabelledStatement) {
	 		listener.enterLabelledStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLabelledStatement) {
	 		listener.exitLabelledStatement(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Throw(): TerminalNode {
		return this.getToken(TypeScriptParser.Throw, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_throwStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterThrowStatement) {
	 		listener.enterThrowStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitThrowStatement) {
	 		listener.exitThrowStatement(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Try(): TerminalNode {
		return this.getToken(TypeScriptParser.Try, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catchProduction(): CatchProductionContext {
		return this.getTypedRuleContext(CatchProductionContext, 0) as CatchProductionContext;
	}
	public finallyProduction(): FinallyProductionContext {
		return this.getTypedRuleContext(FinallyProductionContext, 0) as FinallyProductionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_tryStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Catch(): TerminalNode {
		return this.getToken(TypeScriptParser.Catch, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_catchProduction;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCatchProduction) {
	 		listener.enterCatchProduction(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCatchProduction) {
	 		listener.exitCatchProduction(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Finally(): TerminalNode {
		return this.getToken(TypeScriptParser.Finally, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_finallyProduction;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFinallyProduction) {
	 		listener.enterFinallyProduction(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFinallyProduction) {
	 		listener.exitFinallyProduction(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Debugger(): TerminalNode {
		return this.getToken(TypeScriptParser.Debugger, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_debuggerStatement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDebuggerStatement) {
	 		listener.enterDebuggerStatement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDebuggerStatement) {
	 		listener.exitDebuggerStatement(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function_(): TerminalNode {
		return this.getToken(TypeScriptParser.Function_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public callSignature(): CallSignatureContext {
		return this.getTypedRuleContext(CallSignatureContext, 0) as CallSignatureContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_functionDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Class(): TerminalNode {
		return this.getToken(TypeScriptParser.Class, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classHeritage(): ClassHeritageContext {
		return this.getTypedRuleContext(ClassHeritageContext, 0) as ClassHeritageContext;
	}
	public classTail(): ClassTailContext {
		return this.getTypedRuleContext(ClassTailContext, 0) as ClassTailContext;
	}
	public decoratorList(): DecoratorListContext {
		return this.getTypedRuleContext(DecoratorListContext, 0) as DecoratorListContext;
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public Abstract(): TerminalNode {
		return this.getToken(TypeScriptParser.Abstract, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public Default(): TerminalNode {
		return this.getToken(TypeScriptParser.Default, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
}


export class ClassHeritageContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classExtendsClause(): ClassExtendsClauseContext {
		return this.getTypedRuleContext(ClassExtendsClauseContext, 0) as ClassExtendsClauseContext;
	}
	public implementsClause(): ImplementsClauseContext {
		return this.getTypedRuleContext(ImplementsClauseContext, 0) as ImplementsClauseContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classHeritage;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassHeritage) {
	 		listener.enterClassHeritage(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassHeritage) {
	 		listener.exitClassHeritage(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public classElement_list(): ClassElementContext[] {
		return this.getTypedRuleContexts(ClassElementContext) as ClassElementContext[];
	}
	public classElement(i: number): ClassElementContext {
		return this.getTypedRuleContext(ClassElementContext, i) as ClassElementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classTail;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassTail) {
	 		listener.enterClassTail(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassTail) {
	 		listener.exitClassTail(this);
		}
	}
}


export class ClassExtendsClauseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Extends(): TerminalNode {
		return this.getToken(TypeScriptParser.Extends, 0);
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classExtendsClause;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassExtendsClause) {
	 		listener.enterClassExtendsClause(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassExtendsClause) {
	 		listener.exitClassExtendsClause(this);
		}
	}
}


export class ImplementsClauseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Implements(): TerminalNode {
		return this.getToken(TypeScriptParser.Implements, 0);
	}
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeListContext, 0) as ClassOrInterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_implementsClause;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterImplementsClause) {
	 		listener.enterImplementsClause(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitImplementsClause) {
	 		listener.exitImplementsClause(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
	public propertyMemberDeclaration(): PropertyMemberDeclarationContext {
		return this.getTypedRuleContext(PropertyMemberDeclarationContext, 0) as PropertyMemberDeclarationContext;
	}
	public decoratorList(): DecoratorListContext {
		return this.getTypedRuleContext(DecoratorListContext, 0) as DecoratorListContext;
	}
	public indexMemberDeclaration(): IndexMemberDeclarationContext {
		return this.getTypedRuleContext(IndexMemberDeclarationContext, 0) as IndexMemberDeclarationContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classElement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassElement) {
	 		listener.enterClassElement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassElement) {
	 		listener.exitClassElement(this);
		}
	}
}


export class PropertyMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_propertyMemberDeclaration;
	}
	public override copyFrom(ctx: PropertyMemberDeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	constructor(parser: TypeScriptParser, ctx: PropertyMemberDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getTypedRuleContext(PropertyMemberBaseContext, 0) as PropertyMemberBaseContext;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyDeclarationExpression) {
	 		listener.enterPropertyDeclarationExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyDeclarationExpression) {
	 		listener.exitPropertyDeclarationExpression(this);
		}
	}
}
export class MethodDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	constructor(parser: TypeScriptParser, ctx: PropertyMemberDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getTypedRuleContext(PropertyMemberBaseContext, 0) as PropertyMemberBaseContext;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public callSignature(): CallSignatureContext {
		return this.getTypedRuleContext(CallSignatureContext, 0) as CallSignatureContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMethodDeclarationExpression) {
	 		listener.enterMethodDeclarationExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMethodDeclarationExpression) {
	 		listener.exitMethodDeclarationExpression(this);
		}
	}
}
export class GetterSetterDeclarationExpressionContext extends PropertyMemberDeclarationContext {
	constructor(parser: TypeScriptParser, ctx: PropertyMemberDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyMemberBase(): PropertyMemberBaseContext {
		return this.getTypedRuleContext(PropertyMemberBaseContext, 0) as PropertyMemberBaseContext;
	}
	public getAccessor(): GetAccessorContext {
		return this.getTypedRuleContext(GetAccessorContext, 0) as GetAccessorContext;
	}
	public setAccessor(): SetAccessorContext {
		return this.getTypedRuleContext(SetAccessorContext, 0) as SetAccessorContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGetterSetterDeclarationExpression) {
	 		listener.enterGetterSetterDeclarationExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGetterSetterDeclarationExpression) {
	 		listener.exitGetterSetterDeclarationExpression(this);
		}
	}
}
export class AbstractMemberDeclarationContext extends PropertyMemberDeclarationContext {
	constructor(parser: TypeScriptParser, ctx: PropertyMemberDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public abstractDeclaration(): AbstractDeclarationContext {
		return this.getTypedRuleContext(AbstractDeclarationContext, 0) as AbstractDeclarationContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAbstractMemberDeclaration) {
	 		listener.enterAbstractMemberDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAbstractMemberDeclaration) {
	 		listener.exitAbstractMemberDeclaration(this);
		}
	}
}


export class PropertyMemberBaseContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public Static(): TerminalNode {
		return this.getToken(TypeScriptParser.Static, 0);
	}
	public ReadOnly(): TerminalNode {
		return this.getToken(TypeScriptParser.ReadOnly, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_propertyMemberBase;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyMemberBase) {
	 		listener.enterPropertyMemberBase(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyMemberBase) {
	 		listener.exitPropertyMemberBase(this);
		}
	}
}


export class IndexMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public indexSignature(): IndexSignatureContext {
		return this.getTypedRuleContext(IndexSignatureContext, 0) as IndexSignatureContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_indexMemberDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIndexMemberDeclaration) {
	 		listener.enterIndexMemberDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIndexMemberDeclaration) {
	 		listener.exitIndexMemberDeclaration(this);
		}
	}
}


export class GeneratorMethodContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_generatorMethod;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorMethod) {
	 		listener.enterGeneratorMethod(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorMethod) {
	 		listener.exitGeneratorMethod(this);
		}
	}
}


export class GeneratorFunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function_(): TerminalNode {
		return this.getToken(TypeScriptParser.Function_, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_generatorFunctionDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorFunctionDeclaration) {
	 		listener.enterGeneratorFunctionDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorFunctionDeclaration) {
	 		listener.exitGeneratorFunctionDeclaration(this);
		}
	}
}


export class GeneratorBlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public generatorDefinition_list(): GeneratorDefinitionContext[] {
		return this.getTypedRuleContexts(GeneratorDefinitionContext) as GeneratorDefinitionContext[];
	}
	public generatorDefinition(i: number): GeneratorDefinitionContext {
		return this.getTypedRuleContext(GeneratorDefinitionContext, i) as GeneratorDefinitionContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_generatorBlock;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorBlock) {
	 		listener.enterGeneratorBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorBlock) {
	 		listener.exitGeneratorBlock(this);
		}
	}
}


export class GeneratorDefinitionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public iteratorDefinition(): IteratorDefinitionContext {
		return this.getTypedRuleContext(IteratorDefinitionContext, 0) as IteratorDefinitionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_generatorDefinition;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorDefinition) {
	 		listener.enterGeneratorDefinition(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorDefinition) {
	 		listener.exitGeneratorDefinition(this);
		}
	}
}


export class IteratorBlockContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public iteratorDefinition_list(): IteratorDefinitionContext[] {
		return this.getTypedRuleContexts(IteratorDefinitionContext) as IteratorDefinitionContext[];
	}
	public iteratorDefinition(i: number): IteratorDefinitionContext {
		return this.getTypedRuleContext(IteratorDefinitionContext, i) as IteratorDefinitionContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_iteratorBlock;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIteratorBlock) {
	 		listener.enterIteratorBlock(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIteratorBlock) {
	 		listener.exitIteratorBlock(this);
		}
	}
}


export class IteratorDefinitionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_iteratorDefinition;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIteratorDefinition) {
	 		listener.enterIteratorDefinition(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIteratorDefinition) {
	 		listener.exitIteratorDefinition(this);
		}
	}
}


export class ClassElementNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public privateIdentifier(): PrivateIdentifierContext {
		return this.getTypedRuleContext(PrivateIdentifierContext, 0) as PrivateIdentifierContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_classElementName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassElementName) {
	 		listener.enterClassElementName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassElementName) {
	 		listener.exitClassElementName(this);
		}
	}
}


export class PrivateIdentifierContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hashtag(): TerminalNode {
		return this.getToken(TypeScriptParser.Hashtag, 0);
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_privateIdentifier;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPrivateIdentifier) {
	 		listener.enterPrivateIdentifier(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPrivateIdentifier) {
	 		listener.exitPrivateIdentifier(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameterArg_list(): FormalParameterArgContext[] {
		return this.getTypedRuleContexts(FormalParameterArgContext) as FormalParameterArgContext[];
	}
	public formalParameterArg(i: number): FormalParameterArgContext {
		return this.getTypedRuleContext(FormalParameterArgContext, i) as FormalParameterArgContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		return this.getTypedRuleContext(LastFormalParameterArgContext, 0) as LastFormalParameterArgContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_formalParameterList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFormalParameterList) {
	 		listener.enterFormalParameterList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFormalParameterList) {
	 		listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
	public decorator(): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, 0) as DecoratorContext;
	}
	public accessibilityModifier(): AccessibilityModifierContext {
		return this.getTypedRuleContext(AccessibilityModifierContext, 0) as AccessibilityModifierContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_formalParameterArg;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFormalParameterArg) {
	 		listener.enterFormalParameterArg(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFormalParameterArg) {
	 		listener.exitFormalParameterArg(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(TypeScriptParser.Ellipsis, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_lastFormalParameterArg;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLastFormalParameterArg) {
	 		listener.enterLastFormalParameterArg(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLastFormalParameterArg) {
	 		listener.exitLastFormalParameterArg(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceElements(): SourceElementsContext {
		return this.getTypedRuleContext(SourceElementsContext, 0) as SourceElementsContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_functionBody;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFunctionBody) {
	 		listener.enterFunctionBody(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFunctionBody) {
	 		listener.exitFunctionBody(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceElement_list(): SourceElementContext[] {
		return this.getTypedRuleContexts(SourceElementContext) as SourceElementContext[];
	}
	public sourceElement(i: number): SourceElementContext {
		return this.getTypedRuleContext(SourceElementContext, i) as SourceElementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_sourceElements;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSourceElements) {
	 		listener.enterSourceElements(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSourceElements) {
	 		listener.exitSourceElements(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public elementList(): ElementListContext {
		return this.getTypedRuleContext(ElementListContext, 0) as ElementListContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrayLiteral;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrayLiteral) {
	 		listener.enterArrayLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrayLiteral) {
	 		listener.exitArrayLiteral(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
	public arrayElement_list(): ArrayElementContext[] {
		return this.getTypedRuleContexts(ArrayElementContext) as ArrayElementContext[];
	}
	public arrayElement(i: number): ArrayElementContext {
		return this.getTypedRuleContext(ArrayElementContext, i) as ArrayElementContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_elementList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterElementList) {
	 		listener.enterElementList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitElementList) {
	 		listener.exitElementList(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(TypeScriptParser.Ellipsis, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrayElement;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrayElement) {
	 		listener.enterArrayElement(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrayElement) {
	 		listener.exitArrayElement(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public propertyAssignment_list(): PropertyAssignmentContext[] {
		return this.getTypedRuleContexts(PropertyAssignmentContext) as PropertyAssignmentContext[];
	}
	public propertyAssignment(i: number): PropertyAssignmentContext {
		return this.getTypedRuleContext(PropertyAssignmentContext, i) as PropertyAssignmentContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_objectLiteral;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterObjectLiteral) {
	 		listener.enterObjectLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitObjectLiteral) {
	 		listener.exitObjectLiteral(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_propertyAssignment;
	}
	public override copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyExpressionAssignment) {
	 		listener.enterPropertyExpressionAssignment(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyExpressionAssignment) {
	 		listener.exitPropertyExpressionAssignment(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterComputedPropertyExpressionAssignment) {
	 		listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitComputedPropertyExpressionAssignment) {
	 		listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
}
export class SpreadOperatorContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(TypeScriptParser.Ellipsis, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSpreadOperator) {
	 		listener.enterSpreadOperator(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSpreadOperator) {
	 		listener.exitSpreadOperator(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		return this.getTypedRuleContext(IdentifierOrKeyWordContext, 0) as IdentifierOrKeyWordContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyShorthand) {
	 		listener.enterPropertyShorthand(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyShorthand) {
	 		listener.exitPropertyShorthand(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public setAccessor(): SetAccessorContext {
		return this.getTypedRuleContext(SetAccessorContext, 0) as SetAccessorContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertySetter) {
	 		listener.enterPropertySetter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertySetter) {
	 		listener.exitPropertySetter(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public getAccessor(): GetAccessorContext {
		return this.getTypedRuleContext(GetAccessorContext, 0) as GetAccessorContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyGetter) {
	 		listener.enterPropertyGetter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyGetter) {
	 		listener.exitPropertyGetter(this);
		}
	}
}
export class RestParameterInObjectContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public restParameter(): RestParameterContext {
		return this.getTypedRuleContext(RestParameterContext, 0) as RestParameterContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRestParameterInObject) {
	 		listener.enterRestParameterInObject(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRestParameterInObject) {
	 		listener.exitRestParameterInObject(this);
		}
	}
}
export class MethodPropertyContext extends PropertyAssignmentContext {
	constructor(parser: TypeScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public generatorMethod(): GeneratorMethodContext {
		return this.getTypedRuleContext(GeneratorMethodContext, 0) as GeneratorMethodContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMethodProperty) {
	 		listener.enterMethodProperty(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMethodProperty) {
	 		listener.exitMethodProperty(this);
		}
	}
}


export class GetAccessorContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public getter(): GetterContext {
		return this.getTypedRuleContext(GetterContext, 0) as GetterContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_getAccessor;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGetAccessor) {
	 		listener.enterGetAccessor(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGetAccessor) {
	 		listener.exitGetAccessor(this);
		}
	}
}


export class SetAccessorContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public setter(): SetterContext {
		return this.getTypedRuleContext(SetterContext, 0) as SetterContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_setAccessor;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSetAccessor) {
	 		listener.enterSetAccessor(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSetAccessor) {
	 		listener.exitSetAccessor(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_propertyName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPropertyName) {
	 		listener.enterPropertyName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPropertyName) {
	 		listener.exitPropertyName(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arguments;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_argumentList;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(TypeScriptParser.Ellipsis, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_argument;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArgument) {
	 		listener.enterArgument(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArgument) {
	 		listener.exitArgument(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_expressionSequence;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterExpressionSequence) {
	 		listener.enterExpressionSequence(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitExpressionSequence) {
	 		listener.exitExpressionSequence(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_singleExpression;
	}
	public override copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getTypedRuleContext(TemplateStringLiteralContext, 0) as TemplateStringLiteralContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTemplateStringExpression) {
	 		listener.enterTemplateStringExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTemplateStringExpression) {
	 		listener.exitTemplateStringExpression(this);
		}
	}
}
export class GeneratorsExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public generatorBlock(): GeneratorBlockContext {
		return this.getTypedRuleContext(GeneratorBlockContext, 0) as GeneratorBlockContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorsExpression) {
	 		listener.enterGeneratorsExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorsExpression) {
	 		listener.exitGeneratorsExpression(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Power(): TerminalNode {
		return this.getToken(TypeScriptParser.Power, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPowerExpression) {
	 		listener.enterPowerExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPowerExpression) {
	 		listener.exitPowerExpression(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public In(): TerminalNode {
		return this.getToken(TypeScriptParser.In, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterInExpression) {
	 		listener.enterInExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitInExpression) {
	 		listener.exitInExpression(this);
		}
	}
}
export class GenericTypesContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGenericTypes) {
	 		listener.enterGenericTypes(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGenericTypes) {
	 		listener.exitGenericTypes(this);
		}
	}
}
export class OptionalChainExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public QuestionMarkDot(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMarkDot, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterOptionalChainExpression) {
	 		listener.enterOptionalChainExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitOptionalChainExpression) {
	 		listener.exitOptionalChainExpression(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArgumentsExpression) {
	 		listener.enterArgumentsExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArgumentsExpression) {
	 		listener.exitArgumentsExpression(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public This(): TerminalNode {
		return this.getToken(TypeScriptParser.This, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterThisExpression) {
	 		listener.enterThisExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitThisExpression) {
	 		listener.exitThisExpression(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Typeof(): TerminalNode {
		return this.getToken(TypeScriptParser.Typeof, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTypeofExpression) {
	 		listener.enterTypeofExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTypeofExpression) {
	 		listener.exitTypeofExpression(this);
		}
	}
}
export class GeneratorsFunctionExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public generatorFunctionDeclaration(): GeneratorFunctionDeclarationContext {
		return this.getTypedRuleContext(GeneratorFunctionDeclarationContext, 0) as GeneratorFunctionDeclarationContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGeneratorsFunctionExpression) {
	 		listener.enterGeneratorsFunctionExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGeneratorsFunctionExpression) {
	 		listener.exitGeneratorsFunctionExpression(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Equals_(): TerminalNode {
		return this.getToken(TypeScriptParser.Equals_, 0);
	}
	public NotEquals(): TerminalNode {
		return this.getToken(TypeScriptParser.NotEquals, 0);
	}
	public IdentityEquals(): TerminalNode {
		return this.getToken(TypeScriptParser.IdentityEquals, 0);
	}
	public IdentityNotEquals(): TerminalNode {
		return this.getToken(TypeScriptParser.IdentityNotEquals, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitXOr(): TerminalNode {
		return this.getToken(TypeScriptParser.BitXOr, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBitXOrExpression) {
	 		listener.enterBitXOrExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBitXOrExpression) {
	 		listener.exitBitXOrExpression(this);
		}
	}
}
export class CastAsExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public asExpression(): AsExpressionContext {
		return this.getTypedRuleContext(AsExpressionContext, 0) as AsExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCastAsExpression) {
	 		listener.enterCastAsExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCastAsExpression) {
	 		listener.exitCastAsExpression(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public Divide(): TerminalNode {
		return this.getToken(TypeScriptParser.Divide, 0);
	}
	public Modulus(): TerminalNode {
		return this.getToken(TypeScriptParser.Modulus, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public LeftShiftArithmetic(): TerminalNode {
		return this.getToken(TypeScriptParser.LeftShiftArithmetic, 0);
	}
	public MoreThan_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.MoreThan);
	}
	public MoreThan(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.MoreThan, i);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBitShiftExpression) {
	 		listener.enterBitShiftExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBitShiftExpression) {
	 		listener.exitBitShiftExpression(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Plus(): TerminalNode {
		return this.getToken(TypeScriptParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(TypeScriptParser.Minus, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public LessThan(): TerminalNode {
		return this.getToken(TypeScriptParser.LessThan, 0);
	}
	public MoreThan(): TerminalNode {
		return this.getToken(TypeScriptParser.MoreThan, 0);
	}
	public LessThanEquals(): TerminalNode {
		return this.getToken(TypeScriptParser.LessThanEquals, 0);
	}
	public GreaterThanEquals(): TerminalNode {
		return this.getToken(TypeScriptParser.GreaterThanEquals, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BitNot(): TerminalNode {
		return this.getToken(TypeScriptParser.BitNot, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBitNotExpression) {
	 		listener.enterBitNotExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBitNotExpression) {
	 		listener.exitBitNotExpression(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public New(): TerminalNode {
		return this.getToken(TypeScriptParser.New, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNewExpression) {
	 		listener.enterNewExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNewExpression) {
	 		listener.exitNewExpression(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrayLiteralExpression) {
	 		listener.enterArrayLiteralExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrayLiteralExpression) {
	 		listener.exitArrayLiteralExpression(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Dot(): TerminalNode {
		return this.getToken(TypeScriptParser.Dot, 0);
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public Not(): TerminalNode {
		return this.getToken(TypeScriptParser.Not, 0);
	}
	public Hashtag(): TerminalNode {
		return this.getToken(TypeScriptParser.Hashtag, 0);
	}
	public typeGeneric(): TypeGenericContext {
		return this.getTypedRuleContext(TypeGenericContext, 0) as TypeGenericContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMemberDotExpression) {
	 		listener.enterMemberDotExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMemberDotExpression) {
	 		listener.exitMemberDotExpression(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public QuestionMarkDot(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMarkDot, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterMemberIndexExpression) {
	 		listener.enterMemberIndexExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitMemberIndexExpression) {
	 		listener.exitMemberIndexExpression(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitAnd(): TerminalNode {
		return this.getToken(TypeScriptParser.BitAnd, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBitAndExpression) {
	 		listener.enterBitAndExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBitAndExpression) {
	 		listener.exitBitAndExpression(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitOr(): TerminalNode {
		return this.getToken(TypeScriptParser.BitOr, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBitOrExpression) {
	 		listener.enterBitOrExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBitOrExpression) {
	 		listener.exitBitOrExpression(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAssignmentOperatorExpression) {
	 		listener.enterAssignmentOperatorExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAssignmentOperatorExpression) {
	 		listener.exitAssignmentOperatorExpression(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Void(): TerminalNode {
		return this.getToken(TypeScriptParser.Void, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterVoidExpression) {
	 		listener.enterVoidExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitVoidExpression) {
	 		listener.exitVoidExpression(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(TypeScriptParser.QuestionMark, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(TypeScriptParser.Colon, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public And(): TerminalNode {
		return this.getToken(TypeScriptParser.And, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(TypeScriptParser.PlusPlus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPreIncrementExpression) {
	 		listener.enterPreIncrementExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPreIncrementExpression) {
	 		listener.exitPreIncrementExpression(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterObjectLiteralExpression) {
	 		listener.enterObjectLiteralExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitObjectLiteralExpression) {
	 		listener.exitObjectLiteralExpression(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Or(): TerminalNode {
		return this.getToken(TypeScriptParser.Or, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
}
export class NonNullAssertionExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Not(): TerminalNode {
		return this.getToken(TypeScriptParser.Not, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNonNullAssertionExpression) {
	 		listener.enterNonNullAssertionExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNonNullAssertionExpression) {
	 		listener.exitNonNullAssertionExpression(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Not(): TerminalNode {
		return this.getToken(TypeScriptParser.Not, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNotExpression) {
	 		listener.enterNotExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNotExpression) {
	 		listener.exitNotExpression(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(TypeScriptParser.MinusMinus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPreDecreaseExpression) {
	 		listener.enterPreDecreaseExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPreDecreaseExpression) {
	 		listener.exitPreDecreaseExpression(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Await(): TerminalNode {
		return this.getToken(TypeScriptParser.Await, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAwaitExpression) {
	 		listener.enterAwaitExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAwaitExpression) {
	 		listener.exitAwaitExpression(this);
		}
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public anonymousFunction(): AnonymousFunctionContext {
		return this.getTypedRuleContext(AnonymousFunctionContext, 0) as AnonymousFunctionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterFunctionExpression) {
	 		listener.enterFunctionExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitFunctionExpression) {
	 		listener.exitFunctionExpression(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Minus(): TerminalNode {
		return this.getToken(TypeScriptParser.Minus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterUnaryMinusExpression) {
	 		listener.enterUnaryMinusExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitUnaryMinusExpression) {
	 		listener.exitUnaryMinusExpression(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(TypeScriptParser.Assign, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(TypeScriptParser.MinusMinus, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPostDecreaseExpression) {
	 		listener.enterPostDecreaseExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPostDecreaseExpression) {
	 		listener.exitPostDecreaseExpression(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Instanceof(): TerminalNode {
		return this.getToken(TypeScriptParser.Instanceof, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterInstanceofExpression) {
	 		listener.enterInstanceofExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitInstanceofExpression) {
	 		listener.exitInstanceofExpression(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Plus(): TerminalNode {
		return this.getToken(TypeScriptParser.Plus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterUnaryPlusExpression) {
	 		listener.enterUnaryPlusExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitUnaryPlusExpression) {
	 		listener.exitUnaryPlusExpression(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Delete(): TerminalNode {
		return this.getToken(TypeScriptParser.Delete, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterDeleteExpression) {
	 		listener.enterDeleteExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitDeleteExpression) {
	 		listener.exitDeleteExpression(this);
		}
	}
}
export class IteratorsExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public iteratorBlock(): IteratorBlockContext {
		return this.getTypedRuleContext(IteratorBlockContext, 0) as IteratorBlockContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIteratorsExpression) {
	 		listener.enterIteratorsExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIteratorsExpression) {
	 		listener.exitIteratorsExpression(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Super(): TerminalNode {
		return this.getToken(TypeScriptParser.Super, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSuperExpression) {
	 		listener.enterSuperExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSuperExpression) {
	 		listener.exitSuperExpression(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(TypeScriptParser.PlusPlus, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterPostIncrementExpression) {
	 		listener.enterPostIncrementExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitPostIncrementExpression) {
	 		listener.exitPostIncrementExpression(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterYieldExpression) {
	 		listener.enterYieldExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitYieldExpression) {
	 		listener.exitYieldExpression(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Class(): TerminalNode {
		return this.getToken(TypeScriptParser.Class, 0);
	}
	public classHeritage(): ClassHeritageContext {
		return this.getTypedRuleContext(ClassHeritageContext, 0) as ClassHeritageContext;
	}
	public classTail(): ClassTailContext {
		return this.getTypedRuleContext(ClassTailContext, 0) as ClassTailContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterClassExpression) {
	 		listener.enterClassExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitClassExpression) {
	 		listener.exitClassExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	constructor(parser: TypeScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public NullCoalesce(): TerminalNode {
		return this.getToken(TypeScriptParser.NullCoalesce, 0);
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterCoalesceExpression) {
	 		listener.enterCoalesceExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitCoalesceExpression) {
	 		listener.exitCoalesceExpression(this);
		}
	}
}


export class AsExpressionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public predefinedType(): PredefinedTypeContext {
		return this.getTypedRuleContext(PredefinedTypeContext, 0) as PredefinedTypeContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBracket, 0);
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBracket, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_asExpression;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAsExpression) {
	 		listener.enterAsExpression(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAsExpression) {
	 		listener.exitAsExpression(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_assignable;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAssignable) {
	 		listener.enterAssignable(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAssignable) {
	 		listener.exitAssignable(this);
		}
	}
}


export class AnonymousFunctionContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public Function_(): TerminalNode {
		return this.getToken(TypeScriptParser.Function_, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(TypeScriptParser.Multiply, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		return this.getTypedRuleContext(ArrowFunctionDeclarationContext, 0) as ArrowFunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_anonymousFunction;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAnonymousFunction) {
	 		listener.enterAnonymousFunction(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAnonymousFunction) {
	 		listener.exitAnonymousFunction(this);
		}
	}
}


export class ArrowFunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getTypedRuleContext(ArrowFunctionParametersContext, 0) as ArrowFunctionParametersContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(TypeScriptParser.ARROW, 0);
	}
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getTypedRuleContext(ArrowFunctionBodyContext, 0) as ArrowFunctionBodyContext;
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrowFunctionDeclaration;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrowFunctionDeclaration) {
	 		listener.enterArrowFunctionDeclaration(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrowFunctionDeclaration) {
	 		listener.exitArrowFunctionDeclaration(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseParen, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrowFunctionParameters;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrowFunctionParameters) {
	 		listener.enterArrowFunctionParameters(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrowFunctionParameters) {
	 		listener.exitArrowFunctionParameters(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.OpenBrace, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.CloseBrace, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_arrowFunctionBody;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterArrowFunctionBody) {
	 		listener.enterArrowFunctionBody(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitArrowFunctionBody) {
	 		listener.exitArrowFunctionBody(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MultiplyAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.MultiplyAssign, 0);
	}
	public DivideAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.DivideAssign, 0);
	}
	public ModulusAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.ModulusAssign, 0);
	}
	public PlusAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.MinusAssign, 0);
	}
	public LeftShiftArithmeticAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.LeftShiftArithmeticAssign, 0);
	}
	public RightShiftArithmeticAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.RightShiftArithmeticAssign, 0);
	}
	public RightShiftLogicalAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.RightShiftLogicalAssign, 0);
	}
	public BitAndAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.BitAndAssign, 0);
	}
	public BitXorAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.BitXorAssign, 0);
	}
	public BitOrAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.BitOrAssign, 0);
	}
	public PowerAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.PowerAssign, 0);
	}
	public NullishCoalescingAssign(): TerminalNode {
		return this.getToken(TypeScriptParser.NullishCoalescingAssign, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_assignmentOperator;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.NullLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BooleanLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.StringLiteral, 0);
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getTypedRuleContext(TemplateStringLiteralContext, 0) as TemplateStringLiteralContext;
	}
	public RegularExpressionLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.RegularExpressionLiteral, 0);
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public bigintLiteral(): BigintLiteralContext {
		return this.getTypedRuleContext(BigintLiteralContext, 0) as BigintLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_literal;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class TemplateStringLiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BackTick_list(): TerminalNode[] {
	    	return this.getTokens(TypeScriptParser.BackTick);
	}
	public BackTick(i: number): TerminalNode {
		return this.getToken(TypeScriptParser.BackTick, i);
	}
	public templateStringAtom_list(): TemplateStringAtomContext[] {
		return this.getTypedRuleContexts(TemplateStringAtomContext) as TemplateStringAtomContext[];
	}
	public templateStringAtom(i: number): TemplateStringAtomContext {
		return this.getTypedRuleContext(TemplateStringAtomContext, i) as TemplateStringAtomContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_templateStringLiteral;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTemplateStringLiteral) {
	 		listener.enterTemplateStringLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTemplateStringLiteral) {
	 		listener.exitTemplateStringLiteral(this);
		}
	}
}


export class TemplateStringAtomContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TemplateStringAtom(): TerminalNode {
		return this.getToken(TypeScriptParser.TemplateStringAtom, 0);
	}
	public TemplateStringStartExpression(): TerminalNode {
		return this.getToken(TypeScriptParser.TemplateStringStartExpression, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public TemplateCloseBrace(): TerminalNode {
		return this.getToken(TypeScriptParser.TemplateCloseBrace, 0);
	}
	public TemplateStringEscapeAtom(): TerminalNode {
		return this.getToken(TypeScriptParser.TemplateStringEscapeAtom, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_templateStringAtom;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterTemplateStringAtom) {
	 		listener.enterTemplateStringAtom(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitTemplateStringAtom) {
	 		listener.exitTemplateStringAtom(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DecimalLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.DecimalLiteral, 0);
	}
	public HexIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.HexIntegerLiteral, 0);
	}
	public OctalIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.OctalIntegerLiteral, 0);
	}
	public OctalIntegerLiteral2(): TerminalNode {
		return this.getToken(TypeScriptParser.OctalIntegerLiteral2, 0);
	}
	public BinaryIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BinaryIntegerLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_numericLiteral;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BigDecimalIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BigDecimalIntegerLiteral, 0);
	}
	public BigHexIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BigHexIntegerLiteral, 0);
	}
	public BigOctalIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BigOctalIntegerLiteral, 0);
	}
	public BigBinaryIntegerLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BigBinaryIntegerLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_bigintLiteral;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterBigintLiteral) {
	 		listener.enterBigintLiteral(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitBigintLiteral) {
	 		listener.exitBigintLiteral(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classElementName(): ClassElementNameContext {
		return this.getTypedRuleContext(ClassElementNameContext, 0) as ClassElementNameContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_getter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterGetter) {
	 		listener.enterGetter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitGetter) {
	 		listener.exitGetter(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classElementName(): ClassElementNameContext {
		return this.getTypedRuleContext(ClassElementNameContext, 0) as ClassElementNameContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_setter;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterSetter) {
	 		listener.enterSetter(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitSetter) {
	 		listener.exitSetter(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public reservedWord(): ReservedWordContext {
		return this.getTypedRuleContext(ReservedWordContext, 0) as ReservedWordContext;
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_identifierName;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIdentifierName) {
	 		listener.enterIdentifierName(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIdentifierName) {
	 		listener.exitIdentifierName(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(TypeScriptParser.Identifier, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public From(): TerminalNode {
		return this.getToken(TypeScriptParser.From, 0);
	}
	public Yield(): TerminalNode {
		return this.getToken(TypeScriptParser.Yield, 0);
	}
	public Of(): TerminalNode {
		return this.getToken(TypeScriptParser.Of, 0);
	}
	public Any(): TerminalNode {
		return this.getToken(TypeScriptParser.Any, 0);
	}
	public Number(): TerminalNode {
		return this.getToken(TypeScriptParser.Number, 0);
	}
	public Boolean(): TerminalNode {
		return this.getToken(TypeScriptParser.Boolean, 0);
	}
	public String(): TerminalNode {
		return this.getToken(TypeScriptParser.String, 0);
	}
	public Unique(): TerminalNode {
		return this.getToken(TypeScriptParser.Unique, 0);
	}
	public Symbol(): TerminalNode {
		return this.getToken(TypeScriptParser.Symbol, 0);
	}
	public Never(): TerminalNode {
		return this.getToken(TypeScriptParser.Never, 0);
	}
	public Undefined(): TerminalNode {
		return this.getToken(TypeScriptParser.Undefined, 0);
	}
	public Object(): TerminalNode {
		return this.getToken(TypeScriptParser.Object, 0);
	}
	public KeyOf(): TerminalNode {
		return this.getToken(TypeScriptParser.KeyOf, 0);
	}
	public TypeAlias(): TerminalNode {
		return this.getToken(TypeScriptParser.TypeAlias, 0);
	}
	public Constructor(): TerminalNode {
		return this.getToken(TypeScriptParser.Constructor, 0);
	}
	public Namespace(): TerminalNode {
		return this.getToken(TypeScriptParser.Namespace, 0);
	}
	public Abstract(): TerminalNode {
		return this.getToken(TypeScriptParser.Abstract, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_identifier;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class IdentifierOrKeyWordContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public TypeAlias(): TerminalNode {
		return this.getToken(TypeScriptParser.TypeAlias, 0);
	}
	public Require(): TerminalNode {
		return this.getToken(TypeScriptParser.Require, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_identifierOrKeyWord;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterIdentifierOrKeyWord) {
	 		listener.enterIdentifierOrKeyWord(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitIdentifierOrKeyWord) {
	 		listener.exitIdentifierOrKeyWord(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.NullLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(TypeScriptParser.BooleanLiteral, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_reservedWord;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterReservedWord) {
	 		listener.enterReservedWord(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitReservedWord) {
	 		listener.exitReservedWord(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Break(): TerminalNode {
		return this.getToken(TypeScriptParser.Break, 0);
	}
	public Do(): TerminalNode {
		return this.getToken(TypeScriptParser.Do, 0);
	}
	public Instanceof(): TerminalNode {
		return this.getToken(TypeScriptParser.Instanceof, 0);
	}
	public Typeof(): TerminalNode {
		return this.getToken(TypeScriptParser.Typeof, 0);
	}
	public Case(): TerminalNode {
		return this.getToken(TypeScriptParser.Case, 0);
	}
	public Else(): TerminalNode {
		return this.getToken(TypeScriptParser.Else, 0);
	}
	public New(): TerminalNode {
		return this.getToken(TypeScriptParser.New, 0);
	}
	public Var(): TerminalNode {
		return this.getToken(TypeScriptParser.Var, 0);
	}
	public Catch(): TerminalNode {
		return this.getToken(TypeScriptParser.Catch, 0);
	}
	public Finally(): TerminalNode {
		return this.getToken(TypeScriptParser.Finally, 0);
	}
	public Return(): TerminalNode {
		return this.getToken(TypeScriptParser.Return, 0);
	}
	public Void(): TerminalNode {
		return this.getToken(TypeScriptParser.Void, 0);
	}
	public Continue(): TerminalNode {
		return this.getToken(TypeScriptParser.Continue, 0);
	}
	public For(): TerminalNode {
		return this.getToken(TypeScriptParser.For, 0);
	}
	public Switch(): TerminalNode {
		return this.getToken(TypeScriptParser.Switch, 0);
	}
	public While(): TerminalNode {
		return this.getToken(TypeScriptParser.While, 0);
	}
	public Debugger(): TerminalNode {
		return this.getToken(TypeScriptParser.Debugger, 0);
	}
	public Function_(): TerminalNode {
		return this.getToken(TypeScriptParser.Function_, 0);
	}
	public This(): TerminalNode {
		return this.getToken(TypeScriptParser.This, 0);
	}
	public With(): TerminalNode {
		return this.getToken(TypeScriptParser.With, 0);
	}
	public Default(): TerminalNode {
		return this.getToken(TypeScriptParser.Default, 0);
	}
	public If(): TerminalNode {
		return this.getToken(TypeScriptParser.If, 0);
	}
	public Throw(): TerminalNode {
		return this.getToken(TypeScriptParser.Throw, 0);
	}
	public Delete(): TerminalNode {
		return this.getToken(TypeScriptParser.Delete, 0);
	}
	public In(): TerminalNode {
		return this.getToken(TypeScriptParser.In, 0);
	}
	public Try(): TerminalNode {
		return this.getToken(TypeScriptParser.Try, 0);
	}
	public Class(): TerminalNode {
		return this.getToken(TypeScriptParser.Class, 0);
	}
	public Enum(): TerminalNode {
		return this.getToken(TypeScriptParser.Enum, 0);
	}
	public Extends(): TerminalNode {
		return this.getToken(TypeScriptParser.Extends, 0);
	}
	public Super(): TerminalNode {
		return this.getToken(TypeScriptParser.Super, 0);
	}
	public Const(): TerminalNode {
		return this.getToken(TypeScriptParser.Const, 0);
	}
	public Export(): TerminalNode {
		return this.getToken(TypeScriptParser.Export, 0);
	}
	public Import(): TerminalNode {
		return this.getToken(TypeScriptParser.Import, 0);
	}
	public Implements(): TerminalNode {
		return this.getToken(TypeScriptParser.Implements, 0);
	}
	public Let(): TerminalNode {
		return this.getToken(TypeScriptParser.Let, 0);
	}
	public Private(): TerminalNode {
		return this.getToken(TypeScriptParser.Private, 0);
	}
	public Public(): TerminalNode {
		return this.getToken(TypeScriptParser.Public, 0);
	}
	public Interface(): TerminalNode {
		return this.getToken(TypeScriptParser.Interface, 0);
	}
	public Package(): TerminalNode {
		return this.getToken(TypeScriptParser.Package, 0);
	}
	public Protected(): TerminalNode {
		return this.getToken(TypeScriptParser.Protected, 0);
	}
	public Static(): TerminalNode {
		return this.getToken(TypeScriptParser.Static, 0);
	}
	public Yield(): TerminalNode {
		return this.getToken(TypeScriptParser.Yield, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(TypeScriptParser.Async, 0);
	}
	public Await(): TerminalNode {
		return this.getToken(TypeScriptParser.Await, 0);
	}
	public ReadOnly(): TerminalNode {
		return this.getToken(TypeScriptParser.ReadOnly, 0);
	}
	public From(): TerminalNode {
		return this.getToken(TypeScriptParser.From, 0);
	}
	public As(): TerminalNode {
		return this.getToken(TypeScriptParser.As, 0);
	}
	public Require(): TerminalNode {
		return this.getToken(TypeScriptParser.Require, 0);
	}
	public TypeAlias(): TerminalNode {
		return this.getToken(TypeScriptParser.TypeAlias, 0);
	}
	public String(): TerminalNode {
		return this.getToken(TypeScriptParser.String, 0);
	}
	public Boolean(): TerminalNode {
		return this.getToken(TypeScriptParser.Boolean, 0);
	}
	public Number(): TerminalNode {
		return this.getToken(TypeScriptParser.Number, 0);
	}
	public Module(): TerminalNode {
		return this.getToken(TypeScriptParser.Module, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_keyword;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	constructor(parser?: TypeScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(TypeScriptParser.SemiColon, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(TypeScriptParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return TypeScriptParser.RULE_eos;
	}
	public enterRule(listener: TypeScriptParserListener): void {
	    if(listener.enterEos) {
	 		listener.enterEos(this);
		}
	}
	public exitRule(listener: TypeScriptParserListener): void {
	    if(listener.exitEos) {
	 		listener.exitEos(this);
		}
	}
}
