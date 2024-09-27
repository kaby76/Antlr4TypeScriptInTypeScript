// Generated from TypeScriptParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { InitializerContext } from "./TypeScriptParser.js";
import { BindingPatternContext } from "./TypeScriptParser.js";
import { TypeParametersContext } from "./TypeScriptParser.js";
import { TypeParameterListContext } from "./TypeScriptParser.js";
import { TypeParameterContext } from "./TypeScriptParser.js";
import { ConstraintContext } from "./TypeScriptParser.js";
import { TypeArgumentsContext } from "./TypeScriptParser.js";
import { TypeArgumentListContext } from "./TypeScriptParser.js";
import { TypeArgumentContext } from "./TypeScriptParser.js";
import { Type_Context } from "./TypeScriptParser.js";
import { IntersectionContext } from "./TypeScriptParser.js";
import { PrimaryContext } from "./TypeScriptParser.js";
import { UnionContext } from "./TypeScriptParser.js";
import { RedefinitionOfTypeContext } from "./TypeScriptParser.js";
import { PredefinedPrimTypeContext } from "./TypeScriptParser.js";
import { ArrayPrimTypeContext } from "./TypeScriptParser.js";
import { ParenthesizedPrimTypeContext } from "./TypeScriptParser.js";
import { ThisPrimTypeContext } from "./TypeScriptParser.js";
import { TuplePrimTypeContext } from "./TypeScriptParser.js";
import { KeyOfTypeContext } from "./TypeScriptParser.js";
import { ObjectPrimTypeContext } from "./TypeScriptParser.js";
import { ReferencePrimTypeContext } from "./TypeScriptParser.js";
import { QueryPrimTypeContext } from "./TypeScriptParser.js";
import { PredefinedTypeContext } from "./TypeScriptParser.js";
import { TypeReferenceContext } from "./TypeScriptParser.js";
import { TypeGenericContext } from "./TypeScriptParser.js";
import { TypeNameContext } from "./TypeScriptParser.js";
import { ObjectTypeContext } from "./TypeScriptParser.js";
import { TypeBodyContext } from "./TypeScriptParser.js";
import { TypeMemberListContext } from "./TypeScriptParser.js";
import { TypeMemberContext } from "./TypeScriptParser.js";
import { ArrayTypeContext } from "./TypeScriptParser.js";
import { TupleTypeContext } from "./TypeScriptParser.js";
import { TupleElementTypesContext } from "./TypeScriptParser.js";
import { FunctionTypeContext } from "./TypeScriptParser.js";
import { ConstructorTypeContext } from "./TypeScriptParser.js";
import { TypeQueryContext } from "./TypeScriptParser.js";
import { TypeQueryExpressionContext } from "./TypeScriptParser.js";
import { PropertySignaturContext } from "./TypeScriptParser.js";
import { TypeAnnotationContext } from "./TypeScriptParser.js";
import { CallSignatureContext } from "./TypeScriptParser.js";
import { ParameterListContext } from "./TypeScriptParser.js";
import { RequiredParameterListContext } from "./TypeScriptParser.js";
import { ParameterContext } from "./TypeScriptParser.js";
import { OptionalParameterContext } from "./TypeScriptParser.js";
import { RestParameterContext } from "./TypeScriptParser.js";
import { RequiredParameterContext } from "./TypeScriptParser.js";
import { AccessibilityModifierContext } from "./TypeScriptParser.js";
import { IdentifierOrPatternContext } from "./TypeScriptParser.js";
import { ConstructSignatureContext } from "./TypeScriptParser.js";
import { IndexSignatureContext } from "./TypeScriptParser.js";
import { MethodSignatureContext } from "./TypeScriptParser.js";
import { TypeAliasDeclarationContext } from "./TypeScriptParser.js";
import { ConstructorDeclarationContext } from "./TypeScriptParser.js";
import { InterfaceDeclarationContext } from "./TypeScriptParser.js";
import { InterfaceExtendsClauseContext } from "./TypeScriptParser.js";
import { ClassOrInterfaceTypeListContext } from "./TypeScriptParser.js";
import { EnumDeclarationContext } from "./TypeScriptParser.js";
import { EnumBodyContext } from "./TypeScriptParser.js";
import { EnumMemberListContext } from "./TypeScriptParser.js";
import { EnumMemberContext } from "./TypeScriptParser.js";
import { NamespaceDeclarationContext } from "./TypeScriptParser.js";
import { NamespaceNameContext } from "./TypeScriptParser.js";
import { ImportAliasDeclarationContext } from "./TypeScriptParser.js";
import { DecoratorListContext } from "./TypeScriptParser.js";
import { DecoratorContext } from "./TypeScriptParser.js";
import { DecoratorMemberExpressionContext } from "./TypeScriptParser.js";
import { DecoratorCallExpressionContext } from "./TypeScriptParser.js";
import { ProgramContext } from "./TypeScriptParser.js";
import { SourceElementContext } from "./TypeScriptParser.js";
import { StatementContext } from "./TypeScriptParser.js";
import { BlockContext } from "./TypeScriptParser.js";
import { StatementListContext } from "./TypeScriptParser.js";
import { AbstractDeclarationContext } from "./TypeScriptParser.js";
import { ImportStatementContext } from "./TypeScriptParser.js";
import { ImportFromBlockContext } from "./TypeScriptParser.js";
import { ImportModuleItemsContext } from "./TypeScriptParser.js";
import { ImportAliasNameContext } from "./TypeScriptParser.js";
import { ModuleExportNameContext } from "./TypeScriptParser.js";
import { ImportedBindingContext } from "./TypeScriptParser.js";
import { ImportDefaultContext } from "./TypeScriptParser.js";
import { ImportNamespaceContext } from "./TypeScriptParser.js";
import { ImportFromContext } from "./TypeScriptParser.js";
import { AliasNameContext } from "./TypeScriptParser.js";
import { ExportDeclarationContext } from "./TypeScriptParser.js";
import { ExportDefaultDeclarationContext } from "./TypeScriptParser.js";
import { ExportFromBlockContext } from "./TypeScriptParser.js";
import { ExportModuleItemsContext } from "./TypeScriptParser.js";
import { ExportAliasNameContext } from "./TypeScriptParser.js";
import { DeclarationContext } from "./TypeScriptParser.js";
import { VariableStatementContext } from "./TypeScriptParser.js";
import { VariableDeclarationListContext } from "./TypeScriptParser.js";
import { VariableDeclarationContext } from "./TypeScriptParser.js";
import { EmptyStatement_Context } from "./TypeScriptParser.js";
import { ExpressionStatementContext } from "./TypeScriptParser.js";
import { IfStatementContext } from "./TypeScriptParser.js";
import { DoStatementContext } from "./TypeScriptParser.js";
import { WhileStatementContext } from "./TypeScriptParser.js";
import { ForStatementContext } from "./TypeScriptParser.js";
import { ForVarStatementContext } from "./TypeScriptParser.js";
import { ForInStatementContext } from "./TypeScriptParser.js";
import { ForVarInStatementContext } from "./TypeScriptParser.js";
import { ForOfStatementContext } from "./TypeScriptParser.js";
import { ForVarOfStatementContext } from "./TypeScriptParser.js";
import { VarModifierContext } from "./TypeScriptParser.js";
import { ContinueStatementContext } from "./TypeScriptParser.js";
import { BreakStatementContext } from "./TypeScriptParser.js";
import { ReturnStatementContext } from "./TypeScriptParser.js";
import { YieldStatementContext } from "./TypeScriptParser.js";
import { WithStatementContext } from "./TypeScriptParser.js";
import { SwitchStatementContext } from "./TypeScriptParser.js";
import { CaseBlockContext } from "./TypeScriptParser.js";
import { CaseClausesContext } from "./TypeScriptParser.js";
import { CaseClauseContext } from "./TypeScriptParser.js";
import { DefaultClauseContext } from "./TypeScriptParser.js";
import { LabelledStatementContext } from "./TypeScriptParser.js";
import { ThrowStatementContext } from "./TypeScriptParser.js";
import { TryStatementContext } from "./TypeScriptParser.js";
import { CatchProductionContext } from "./TypeScriptParser.js";
import { FinallyProductionContext } from "./TypeScriptParser.js";
import { DebuggerStatementContext } from "./TypeScriptParser.js";
import { FunctionDeclarationContext } from "./TypeScriptParser.js";
import { ClassDeclarationContext } from "./TypeScriptParser.js";
import { ClassHeritageContext } from "./TypeScriptParser.js";
import { ClassTailContext } from "./TypeScriptParser.js";
import { ClassExtendsClauseContext } from "./TypeScriptParser.js";
import { ImplementsClauseContext } from "./TypeScriptParser.js";
import { ClassElementContext } from "./TypeScriptParser.js";
import { PropertyDeclarationExpressionContext } from "./TypeScriptParser.js";
import { MethodDeclarationExpressionContext } from "./TypeScriptParser.js";
import { GetterSetterDeclarationExpressionContext } from "./TypeScriptParser.js";
import { AbstractMemberDeclarationContext } from "./TypeScriptParser.js";
import { PropertyMemberBaseContext } from "./TypeScriptParser.js";
import { IndexMemberDeclarationContext } from "./TypeScriptParser.js";
import { GeneratorMethodContext } from "./TypeScriptParser.js";
import { GeneratorFunctionDeclarationContext } from "./TypeScriptParser.js";
import { GeneratorBlockContext } from "./TypeScriptParser.js";
import { GeneratorDefinitionContext } from "./TypeScriptParser.js";
import { IteratorBlockContext } from "./TypeScriptParser.js";
import { IteratorDefinitionContext } from "./TypeScriptParser.js";
import { ClassElementNameContext } from "./TypeScriptParser.js";
import { PrivateIdentifierContext } from "./TypeScriptParser.js";
import { FormalParameterListContext } from "./TypeScriptParser.js";
import { FormalParameterArgContext } from "./TypeScriptParser.js";
import { LastFormalParameterArgContext } from "./TypeScriptParser.js";
import { FunctionBodyContext } from "./TypeScriptParser.js";
import { SourceElementsContext } from "./TypeScriptParser.js";
import { ArrayLiteralContext } from "./TypeScriptParser.js";
import { ElementListContext } from "./TypeScriptParser.js";
import { ArrayElementContext } from "./TypeScriptParser.js";
import { ObjectLiteralContext } from "./TypeScriptParser.js";
import { PropertyExpressionAssignmentContext } from "./TypeScriptParser.js";
import { ComputedPropertyExpressionAssignmentContext } from "./TypeScriptParser.js";
import { PropertyGetterContext } from "./TypeScriptParser.js";
import { PropertySetterContext } from "./TypeScriptParser.js";
import { MethodPropertyContext } from "./TypeScriptParser.js";
import { PropertyShorthandContext } from "./TypeScriptParser.js";
import { SpreadOperatorContext } from "./TypeScriptParser.js";
import { RestParameterInObjectContext } from "./TypeScriptParser.js";
import { GetAccessorContext } from "./TypeScriptParser.js";
import { SetAccessorContext } from "./TypeScriptParser.js";
import { PropertyNameContext } from "./TypeScriptParser.js";
import { ArgumentsContext } from "./TypeScriptParser.js";
import { ArgumentListContext } from "./TypeScriptParser.js";
import { ArgumentContext } from "./TypeScriptParser.js";
import { ExpressionSequenceContext } from "./TypeScriptParser.js";
import { TemplateStringExpressionContext } from "./TypeScriptParser.js";
import { GeneratorsExpressionContext } from "./TypeScriptParser.js";
import { PowerExpressionContext } from "./TypeScriptParser.js";
import { InExpressionContext } from "./TypeScriptParser.js";
import { GenericTypesContext } from "./TypeScriptParser.js";
import { OptionalChainExpressionContext } from "./TypeScriptParser.js";
import { ArgumentsExpressionContext } from "./TypeScriptParser.js";
import { ThisExpressionContext } from "./TypeScriptParser.js";
import { TypeofExpressionContext } from "./TypeScriptParser.js";
import { GeneratorsFunctionExpressionContext } from "./TypeScriptParser.js";
import { EqualityExpressionContext } from "./TypeScriptParser.js";
import { BitXOrExpressionContext } from "./TypeScriptParser.js";
import { CastAsExpressionContext } from "./TypeScriptParser.js";
import { MultiplicativeExpressionContext } from "./TypeScriptParser.js";
import { BitShiftExpressionContext } from "./TypeScriptParser.js";
import { AdditiveExpressionContext } from "./TypeScriptParser.js";
import { RelationalExpressionContext } from "./TypeScriptParser.js";
import { BitNotExpressionContext } from "./TypeScriptParser.js";
import { NewExpressionContext } from "./TypeScriptParser.js";
import { LiteralExpressionContext } from "./TypeScriptParser.js";
import { ArrayLiteralExpressionContext } from "./TypeScriptParser.js";
import { MemberDotExpressionContext } from "./TypeScriptParser.js";
import { MemberIndexExpressionContext } from "./TypeScriptParser.js";
import { BitAndExpressionContext } from "./TypeScriptParser.js";
import { BitOrExpressionContext } from "./TypeScriptParser.js";
import { AssignmentOperatorExpressionContext } from "./TypeScriptParser.js";
import { VoidExpressionContext } from "./TypeScriptParser.js";
import { TernaryExpressionContext } from "./TypeScriptParser.js";
import { LogicalAndExpressionContext } from "./TypeScriptParser.js";
import { PreIncrementExpressionContext } from "./TypeScriptParser.js";
import { ObjectLiteralExpressionContext } from "./TypeScriptParser.js";
import { LogicalOrExpressionContext } from "./TypeScriptParser.js";
import { NonNullAssertionExpressionContext } from "./TypeScriptParser.js";
import { NotExpressionContext } from "./TypeScriptParser.js";
import { PreDecreaseExpressionContext } from "./TypeScriptParser.js";
import { AwaitExpressionContext } from "./TypeScriptParser.js";
import { FunctionExpressionContext } from "./TypeScriptParser.js";
import { UnaryMinusExpressionContext } from "./TypeScriptParser.js";
import { AssignmentExpressionContext } from "./TypeScriptParser.js";
import { PostDecreaseExpressionContext } from "./TypeScriptParser.js";
import { InstanceofExpressionContext } from "./TypeScriptParser.js";
import { UnaryPlusExpressionContext } from "./TypeScriptParser.js";
import { DeleteExpressionContext } from "./TypeScriptParser.js";
import { IteratorsExpressionContext } from "./TypeScriptParser.js";
import { SuperExpressionContext } from "./TypeScriptParser.js";
import { ParenthesizedExpressionContext } from "./TypeScriptParser.js";
import { PostIncrementExpressionContext } from "./TypeScriptParser.js";
import { YieldExpressionContext } from "./TypeScriptParser.js";
import { ClassExpressionContext } from "./TypeScriptParser.js";
import { IdentifierExpressionContext } from "./TypeScriptParser.js";
import { CoalesceExpressionContext } from "./TypeScriptParser.js";
import { AsExpressionContext } from "./TypeScriptParser.js";
import { AssignableContext } from "./TypeScriptParser.js";
import { AnonymousFunctionContext } from "./TypeScriptParser.js";
import { ArrowFunctionDeclarationContext } from "./TypeScriptParser.js";
import { ArrowFunctionParametersContext } from "./TypeScriptParser.js";
import { ArrowFunctionBodyContext } from "./TypeScriptParser.js";
import { AssignmentOperatorContext } from "./TypeScriptParser.js";
import { LiteralContext } from "./TypeScriptParser.js";
import { TemplateStringLiteralContext } from "./TypeScriptParser.js";
import { TemplateStringAtomContext } from "./TypeScriptParser.js";
import { NumericLiteralContext } from "./TypeScriptParser.js";
import { BigintLiteralContext } from "./TypeScriptParser.js";
import { GetterContext } from "./TypeScriptParser.js";
import { SetterContext } from "./TypeScriptParser.js";
import { IdentifierNameContext } from "./TypeScriptParser.js";
import { IdentifierContext } from "./TypeScriptParser.js";
import { IdentifierOrKeyWordContext } from "./TypeScriptParser.js";
import { ReservedWordContext } from "./TypeScriptParser.js";
import { KeywordContext } from "./TypeScriptParser.js";
import { EosContext } from "./TypeScriptParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TypeScriptParser`.
 */
export default class TypeScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TypeScriptParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.bindingPattern`.
	 * @param ctx the parse tree
	 */
	enterBindingPattern?: (ctx: BindingPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.bindingPattern`.
	 * @param ctx the parse tree
	 */
	exitBindingPattern?: (ctx: BindingPatternContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;
	/**
	 * Enter a parse tree produced by the `Intersection`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterIntersection?: (ctx: IntersectionContext) => void;
	/**
	 * Exit a parse tree produced by the `Intersection`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitIntersection?: (ctx: IntersectionContext) => void;
	/**
	 * Enter a parse tree produced by the `Primary`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `Primary`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by the `Union`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterUnion?: (ctx: UnionContext) => void;
	/**
	 * Exit a parse tree produced by the `Union`
	 * labeled alternative in `TypeScriptParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitUnion?: (ctx: UnionContext) => void;
	/**
	 * Enter a parse tree produced by the `RedefinitionOfType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterRedefinitionOfType?: (ctx: RedefinitionOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `RedefinitionOfType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitRedefinitionOfType?: (ctx: RedefinitionOfTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `PredefinedPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedPrimType?: (ctx: PredefinedPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `PredefinedPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedPrimType?: (ctx: PredefinedPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ArrayPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterArrayPrimType?: (ctx: ArrayPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitArrayPrimType?: (ctx: ArrayPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ParenthesizedPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPrimType?: (ctx: ParenthesizedPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPrimType?: (ctx: ParenthesizedPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ThisPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterThisPrimType?: (ctx: ThisPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitThisPrimType?: (ctx: ThisPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `TuplePrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterTuplePrimType?: (ctx: TuplePrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `TuplePrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitTuplePrimType?: (ctx: TuplePrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `KeyOfType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterKeyOfType?: (ctx: KeyOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `KeyOfType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitKeyOfType?: (ctx: KeyOfTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ObjectPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterObjectPrimType?: (ctx: ObjectPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitObjectPrimType?: (ctx: ObjectPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ReferencePrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterReferencePrimType?: (ctx: ReferencePrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ReferencePrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitReferencePrimType?: (ctx: ReferencePrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `QueryPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimType?: (ctx: QueryPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `QueryPrimType`
	 * labeled alternative in `TypeScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimType?: (ctx: QueryPrimTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeGeneric`.
	 * @param ctx the parse tree
	 */
	enterTypeGeneric?: (ctx: TypeGenericContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeGeneric`.
	 * @param ctx the parse tree
	 */
	exitTypeGeneric?: (ctx: TypeGenericContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeBody`.
	 * @param ctx the parse tree
	 */
	enterTypeBody?: (ctx: TypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeBody`.
	 * @param ctx the parse tree
	 */
	exitTypeBody?: (ctx: TypeBodyContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeMemberList`.
	 * @param ctx the parse tree
	 */
	enterTypeMemberList?: (ctx: TypeMemberListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeMemberList`.
	 * @param ctx the parse tree
	 */
	exitTypeMemberList?: (ctx: TypeMemberListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeMember`.
	 * @param ctx the parse tree
	 */
	enterTypeMember?: (ctx: TypeMemberContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeMember`.
	 * @param ctx the parse tree
	 */
	exitTypeMember?: (ctx: TypeMemberContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.tupleElementTypes`.
	 * @param ctx the parse tree
	 */
	enterTupleElementTypes?: (ctx: TupleElementTypesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.tupleElementTypes`.
	 * @param ctx the parse tree
	 */
	exitTupleElementTypes?: (ctx: TupleElementTypesContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.constructorType`.
	 * @param ctx the parse tree
	 */
	enterConstructorType?: (ctx: ConstructorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.constructorType`.
	 * @param ctx the parse tree
	 */
	exitConstructorType?: (ctx: ConstructorTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	enterTypeQuery?: (ctx: TypeQueryContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	exitTypeQuery?: (ctx: TypeQueryContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeQueryExpression?: (ctx: TypeQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeQueryExpression?: (ctx: TypeQueryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.propertySignatur`.
	 * @param ctx the parse tree
	 */
	enterPropertySignatur?: (ctx: PropertySignaturContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.propertySignatur`.
	 * @param ctx the parse tree
	 */
	exitPropertySignatur?: (ctx: PropertySignaturContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.callSignature`.
	 * @param ctx the parse tree
	 */
	enterCallSignature?: (ctx: CallSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.callSignature`.
	 * @param ctx the parse tree
	 */
	exitCallSignature?: (ctx: CallSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.requiredParameterList`.
	 * @param ctx the parse tree
	 */
	enterRequiredParameterList?: (ctx: RequiredParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.requiredParameterList`.
	 * @param ctx the parse tree
	 */
	exitRequiredParameterList?: (ctx: RequiredParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.optionalParameter`.
	 * @param ctx the parse tree
	 */
	enterOptionalParameter?: (ctx: OptionalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.optionalParameter`.
	 * @param ctx the parse tree
	 */
	exitOptionalParameter?: (ctx: OptionalParameterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.restParameter`.
	 * @param ctx the parse tree
	 */
	enterRestParameter?: (ctx: RestParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.restParameter`.
	 * @param ctx the parse tree
	 */
	exitRestParameter?: (ctx: RestParameterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.requiredParameter`.
	 * @param ctx the parse tree
	 */
	enterRequiredParameter?: (ctx: RequiredParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.requiredParameter`.
	 * @param ctx the parse tree
	 */
	exitRequiredParameter?: (ctx: RequiredParameterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.accessibilityModifier`.
	 * @param ctx the parse tree
	 */
	enterAccessibilityModifier?: (ctx: AccessibilityModifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.accessibilityModifier`.
	 * @param ctx the parse tree
	 */
	exitAccessibilityModifier?: (ctx: AccessibilityModifierContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.identifierOrPattern`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrPattern?: (ctx: IdentifierOrPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.identifierOrPattern`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrPattern?: (ctx: IdentifierOrPatternContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.constructSignature`.
	 * @param ctx the parse tree
	 */
	enterConstructSignature?: (ctx: ConstructSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.constructSignature`.
	 * @param ctx the parse tree
	 */
	exitConstructSignature?: (ctx: ConstructSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.indexSignature`.
	 * @param ctx the parse tree
	 */
	enterIndexSignature?: (ctx: IndexSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.indexSignature`.
	 * @param ctx the parse tree
	 */
	exitIndexSignature?: (ctx: IndexSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	enterMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	exitMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.interfaceExtendsClause`.
	 * @param ctx the parse tree
	 */
	enterInterfaceExtendsClause?: (ctx: InterfaceExtendsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.interfaceExtendsClause`.
	 * @param ctx the parse tree
	 */
	exitInterfaceExtendsClause?: (ctx: InterfaceExtendsClauseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classOrInterfaceTypeList`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceTypeList?: (ctx: ClassOrInterfaceTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classOrInterfaceTypeList`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceTypeList?: (ctx: ClassOrInterfaceTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.enumMemberList`.
	 * @param ctx the parse tree
	 */
	enterEnumMemberList?: (ctx: EnumMemberListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.enumMemberList`.
	 * @param ctx the parse tree
	 */
	exitEnumMemberList?: (ctx: EnumMemberListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.enumMember`.
	 * @param ctx the parse tree
	 */
	enterEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.enumMember`.
	 * @param ctx the parse tree
	 */
	exitEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	enterNamespaceName?: (ctx: NamespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	exitNamespaceName?: (ctx: NamespaceNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportAliasDeclaration?: (ctx: ImportAliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportAliasDeclaration?: (ctx: ImportAliasDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.decoratorList`.
	 * @param ctx the parse tree
	 */
	enterDecoratorList?: (ctx: DecoratorListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.decoratorList`.
	 * @param ctx the parse tree
	 */
	exitDecoratorList?: (ctx: DecoratorListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.decorator`.
	 * @param ctx the parse tree
	 */
	enterDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.decorator`.
	 * @param ctx the parse tree
	 */
	exitDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.decoratorMemberExpression`.
	 * @param ctx the parse tree
	 */
	enterDecoratorMemberExpression?: (ctx: DecoratorMemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.decoratorMemberExpression`.
	 * @param ctx the parse tree
	 */
	exitDecoratorMemberExpression?: (ctx: DecoratorMemberExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.decoratorCallExpression`.
	 * @param ctx the parse tree
	 */
	enterDecoratorCallExpression?: (ctx: DecoratorCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.decoratorCallExpression`.
	 * @param ctx the parse tree
	 */
	exitDecoratorCallExpression?: (ctx: DecoratorCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.abstractDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAbstractDeclaration?: (ctx: AbstractDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.abstractDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAbstractDeclaration?: (ctx: AbstractDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importFromBlock`.
	 * @param ctx the parse tree
	 */
	enterImportFromBlock?: (ctx: ImportFromBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importFromBlock`.
	 * @param ctx the parse tree
	 */
	exitImportFromBlock?: (ctx: ImportFromBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importModuleItems`.
	 * @param ctx the parse tree
	 */
	enterImportModuleItems?: (ctx: ImportModuleItemsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importModuleItems`.
	 * @param ctx the parse tree
	 */
	exitImportModuleItems?: (ctx: ImportModuleItemsContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importAliasName`.
	 * @param ctx the parse tree
	 */
	enterImportAliasName?: (ctx: ImportAliasNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importAliasName`.
	 * @param ctx the parse tree
	 */
	exitImportAliasName?: (ctx: ImportAliasNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.moduleExportName`.
	 * @param ctx the parse tree
	 */
	enterModuleExportName?: (ctx: ModuleExportNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.moduleExportName`.
	 * @param ctx the parse tree
	 */
	exitModuleExportName?: (ctx: ModuleExportNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importedBinding`.
	 * @param ctx the parse tree
	 */
	enterImportedBinding?: (ctx: ImportedBindingContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importedBinding`.
	 * @param ctx the parse tree
	 */
	exitImportedBinding?: (ctx: ImportedBindingContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importDefault`.
	 * @param ctx the parse tree
	 */
	enterImportDefault?: (ctx: ImportDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importDefault`.
	 * @param ctx the parse tree
	 */
	exitImportDefault?: (ctx: ImportDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 */
	enterImportNamespace?: (ctx: ImportNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 */
	exitImportNamespace?: (ctx: ImportNamespaceContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.importFrom`.
	 * @param ctx the parse tree
	 */
	enterImportFrom?: (ctx: ImportFromContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.importFrom`.
	 * @param ctx the parse tree
	 */
	exitImportFrom?: (ctx: ImportFromContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.aliasName`.
	 * @param ctx the parse tree
	 */
	enterAliasName?: (ctx: AliasNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.aliasName`.
	 * @param ctx the parse tree
	 */
	exitAliasName?: (ctx: AliasNameContext) => void;
	/**
	 * Enter a parse tree produced by the `ExportDeclaration`
	 * labeled alternative in `TypeScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportDeclaration?: (ctx: ExportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `ExportDeclaration`
	 * labeled alternative in `TypeScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportDeclaration?: (ctx: ExportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `ExportDefaultDeclaration`
	 * labeled alternative in `TypeScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportDefaultDeclaration?: (ctx: ExportDefaultDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `ExportDefaultDeclaration`
	 * labeled alternative in `TypeScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportDefaultDeclaration?: (ctx: ExportDefaultDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.exportFromBlock`.
	 * @param ctx the parse tree
	 */
	enterExportFromBlock?: (ctx: ExportFromBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.exportFromBlock`.
	 * @param ctx the parse tree
	 */
	exitExportFromBlock?: (ctx: ExportFromBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.exportModuleItems`.
	 * @param ctx the parse tree
	 */
	enterExportModuleItems?: (ctx: ExportModuleItemsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.exportModuleItems`.
	 * @param ctx the parse tree
	 */
	exitExportModuleItems?: (ctx: ExportModuleItemsContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.exportAliasName`.
	 * @param ctx the parse tree
	 */
	enterExportAliasName?: (ctx: ExportAliasNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.exportAliasName`.
	 * @param ctx the parse tree
	 */
	exitExportAliasName?: (ctx: ExportAliasNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `DoStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `DoStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarStatement?: (ctx: ForVarStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarStatement?: (ctx: ForVarStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForInStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForInStatement?: (ctx: ForInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForInStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForInStatement?: (ctx: ForInStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarInStatement?: (ctx: ForVarInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarInStatement?: (ctx: ForVarInStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForOfStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForOfStatement?: (ctx: ForOfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForOfStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForOfStatement?: (ctx: ForOfStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ForVarOfStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarOfStatement?: (ctx: ForVarOfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarOfStatement`
	 * labeled alternative in `TypeScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarOfStatement?: (ctx: ForVarOfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	enterVarModifier?: (ctx: VarModifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	exitVarModifier?: (ctx: VarModifierContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	enterWithStatement?: (ctx: WithStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	exitWithStatement?: (ctx: WithStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabelledStatement?: (ctx: LabelledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabelledStatement?: (ctx: LabelledStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	enterCatchProduction?: (ctx: CatchProductionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	exitCatchProduction?: (ctx: CatchProductionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	enterFinallyProduction?: (ctx: FinallyProductionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	exitFinallyProduction?: (ctx: FinallyProductionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDebuggerStatement?: (ctx: DebuggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDebuggerStatement?: (ctx: DebuggerStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classHeritage`.
	 * @param ctx the parse tree
	 */
	enterClassHeritage?: (ctx: ClassHeritageContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classHeritage`.
	 * @param ctx the parse tree
	 */
	exitClassHeritage?: (ctx: ClassHeritageContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classTail`.
	 * @param ctx the parse tree
	 */
	enterClassTail?: (ctx: ClassTailContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classTail`.
	 * @param ctx the parse tree
	 */
	exitClassTail?: (ctx: ClassTailContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classExtendsClause`.
	 * @param ctx the parse tree
	 */
	enterClassExtendsClause?: (ctx: ClassExtendsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classExtendsClause`.
	 * @param ctx the parse tree
	 */
	exitClassExtendsClause?: (ctx: ClassExtendsClauseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.implementsClause`.
	 * @param ctx the parse tree
	 */
	enterImplementsClause?: (ctx: ImplementsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.implementsClause`.
	 * @param ctx the parse tree
	 */
	exitImplementsClause?: (ctx: ImplementsClauseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classElement`.
	 * @param ctx the parse tree
	 */
	enterClassElement?: (ctx: ClassElementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classElement`.
	 * @param ctx the parse tree
	 */
	exitClassElement?: (ctx: ClassElementContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertyDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclarationExpression?: (ctx: PropertyDeclarationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclarationExpression?: (ctx: PropertyDeclarationExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MethodDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclarationExpression?: (ctx: MethodDeclarationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclarationExpression?: (ctx: MethodDeclarationExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `GetterSetterDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGetterSetterDeclarationExpression?: (ctx: GetterSetterDeclarationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GetterSetterDeclarationExpression`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGetterSetterDeclarationExpression?: (ctx: GetterSetterDeclarationExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AbstractMemberDeclaration`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAbstractMemberDeclaration?: (ctx: AbstractMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `AbstractMemberDeclaration`
	 * labeled alternative in `TypeScriptParser.propertyMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAbstractMemberDeclaration?: (ctx: AbstractMemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.propertyMemberBase`.
	 * @param ctx the parse tree
	 */
	enterPropertyMemberBase?: (ctx: PropertyMemberBaseContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.propertyMemberBase`.
	 * @param ctx the parse tree
	 */
	exitPropertyMemberBase?: (ctx: PropertyMemberBaseContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.indexMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIndexMemberDeclaration?: (ctx: IndexMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.indexMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIndexMemberDeclaration?: (ctx: IndexMemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.generatorMethod`.
	 * @param ctx the parse tree
	 */
	enterGeneratorMethod?: (ctx: GeneratorMethodContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.generatorMethod`.
	 * @param ctx the parse tree
	 */
	exitGeneratorMethod?: (ctx: GeneratorMethodContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.generatorFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGeneratorFunctionDeclaration?: (ctx: GeneratorFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.generatorFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGeneratorFunctionDeclaration?: (ctx: GeneratorFunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.generatorBlock`.
	 * @param ctx the parse tree
	 */
	enterGeneratorBlock?: (ctx: GeneratorBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.generatorBlock`.
	 * @param ctx the parse tree
	 */
	exitGeneratorBlock?: (ctx: GeneratorBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.generatorDefinition`.
	 * @param ctx the parse tree
	 */
	enterGeneratorDefinition?: (ctx: GeneratorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.generatorDefinition`.
	 * @param ctx the parse tree
	 */
	exitGeneratorDefinition?: (ctx: GeneratorDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.iteratorBlock`.
	 * @param ctx the parse tree
	 */
	enterIteratorBlock?: (ctx: IteratorBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.iteratorBlock`.
	 * @param ctx the parse tree
	 */
	exitIteratorBlock?: (ctx: IteratorBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.iteratorDefinition`.
	 * @param ctx the parse tree
	 */
	enterIteratorDefinition?: (ctx: IteratorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.iteratorDefinition`.
	 * @param ctx the parse tree
	 */
	exitIteratorDefinition?: (ctx: IteratorDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.classElementName`.
	 * @param ctx the parse tree
	 */
	enterClassElementName?: (ctx: ClassElementNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.classElementName`.
	 * @param ctx the parse tree
	 */
	exitClassElementName?: (ctx: ClassElementNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.privateIdentifier`.
	 * @param ctx the parse tree
	 */
	enterPrivateIdentifier?: (ctx: PrivateIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.privateIdentifier`.
	 * @param ctx the parse tree
	 */
	exitPrivateIdentifier?: (ctx: PrivateIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	enterArrayElement?: (ctx: ArrayElementContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	exitArrayElement?: (ctx: ArrayElementContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetter?: (ctx: PropertyGetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetter?: (ctx: PropertyGetterContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertySetter`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertySetter?: (ctx: PropertySetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertySetter`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertySetter?: (ctx: PropertySetterContext) => void;
	/**
	 * Enter a parse tree produced by the `MethodProperty`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterMethodProperty?: (ctx: MethodPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodProperty`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitMethodProperty?: (ctx: MethodPropertyContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyShorthand?: (ctx: PropertyShorthandContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyShorthand?: (ctx: PropertyShorthandContext) => void;
	/**
	 * Enter a parse tree produced by the `SpreadOperator`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterSpreadOperator?: (ctx: SpreadOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `SpreadOperator`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitSpreadOperator?: (ctx: SpreadOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `RestParameterInObject`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterRestParameterInObject?: (ctx: RestParameterInObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `RestParameterInObject`
	 * labeled alternative in `TypeScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitRestParameterInObject?: (ctx: RestParameterInObjectContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.getAccessor`.
	 * @param ctx the parse tree
	 */
	enterGetAccessor?: (ctx: GetAccessorContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.getAccessor`.
	 * @param ctx the parse tree
	 */
	exitGetAccessor?: (ctx: GetAccessorContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.setAccessor`.
	 * @param ctx the parse tree
	 */
	enterSetAccessor?: (ctx: SetAccessorContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.setAccessor`.
	 * @param ctx the parse tree
	 */
	exitSetAccessor?: (ctx: SetAccessorContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Enter a parse tree produced by the `TemplateStringExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTemplateStringExpression?: (ctx: TemplateStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TemplateStringExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTemplateStringExpression?: (ctx: TemplateStringExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `GeneratorsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneratorsExpression?: (ctx: GeneratorsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneratorsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneratorsExpression?: (ctx: GeneratorsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PowerExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PowerExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `InExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `GenericTypes`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterGenericTypes?: (ctx: GenericTypesContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericTypes`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitGenericTypes?: (ctx: GenericTypesContext) => void;
	/**
	 * Enter a parse tree produced by the `OptionalChainExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterOptionalChainExpression?: (ctx: OptionalChainExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `OptionalChainExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitOptionalChainExpression?: (ctx: OptionalChainExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ThisExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `GeneratorsFunctionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneratorsFunctionExpression?: (ctx: GeneratorsFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneratorsFunctionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneratorsFunctionExpression?: (ctx: GeneratorsFunctionExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterCastAsExpression?: (ctx: CastAsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitCastAsExpression?: (ctx: CastAsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `NewExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `VoidExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidExpression?: (ctx: VoidExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidExpression?: (ctx: VoidExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `NonNullAssertionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNonNullAssertionExpression?: (ctx: NonNullAssertionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NonNullAssertionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNonNullAssertionExpression?: (ctx: NonNullAssertionExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AwaitExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAwaitExpression?: (ctx: AwaitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AwaitExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAwaitExpression?: (ctx: AwaitExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `IteratorsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIteratorsExpression?: (ctx: IteratorsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IteratorsExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIteratorsExpression?: (ctx: IteratorsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `SuperExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SuperExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `YieldExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterYieldExpression?: (ctx: YieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `YieldExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitYieldExpression?: (ctx: YieldExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ClassExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterClassExpression?: (ctx: ClassExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ClassExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitClassExpression?: (ctx: ClassExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CoalesceExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CoalesceExpression`
	 * labeled alternative in `TypeScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.asExpression`.
	 * @param ctx the parse tree
	 */
	enterAsExpression?: (ctx: AsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.asExpression`.
	 * @param ctx the parse tree
	 */
	exitAsExpression?: (ctx: AsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterAssignable?: (ctx: AssignableContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitAssignable?: (ctx: AssignableContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 */
	enterAnonymousFunction?: (ctx: AnonymousFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 */
	exitAnonymousFunction?: (ctx: AnonymousFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrowFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionDeclaration?: (ctx: ArrowFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrowFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionDeclaration?: (ctx: ArrowFunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.templateStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterTemplateStringLiteral?: (ctx: TemplateStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.templateStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitTemplateStringLiteral?: (ctx: TemplateStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.templateStringAtom`.
	 * @param ctx the parse tree
	 */
	enterTemplateStringAtom?: (ctx: TemplateStringAtomContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.templateStringAtom`.
	 * @param ctx the parse tree
	 */
	exitTemplateStringAtom?: (ctx: TemplateStringAtomContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.bigintLiteral`.
	 * @param ctx the parse tree
	 */
	enterBigintLiteral?: (ctx: BigintLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.bigintLiteral`.
	 * @param ctx the parse tree
	 */
	exitBigintLiteral?: (ctx: BigintLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.identifierOrKeyWord`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrKeyWord?: (ctx: IdentifierOrKeyWordContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.identifierOrKeyWord`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrKeyWord?: (ctx: IdentifierOrKeyWordContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Enter a parse tree produced by `TypeScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `TypeScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

