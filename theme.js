import fs from "fs";

import { ansi, base16 } from "./colors";

const theme = {
	// ========= METADATA =========
	name: `Laser`,
	type: `dark`,

	// ========= SYNTAX =========
	tokenColors: [
		{
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Punctuation`,
			scope: [
				`punctuation`,
				`meta.delimeter.column`,
				`keyword.other.template.begin`,
				`keyword.other.template.end`,
			],
			settings: {
				foreground: ansi.white,
			},
		},

		{
			name: `Comment`,
			scope: [`comment`],
			settings: {
				fontStyle: `italic`,
				foreground: base16.comments,
			},
		},
		{
			name: `Variables`,
			scope: [`variable`, `string constant.other.placeholder`],
			settings: {
				foreground: base16.variables,
			},
		},
		{
			name: `Colors`,
			scope: [`constant.other.color`],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			name: `Invalid`,
			scope: [`invalid`, `invalid.illegal`],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Keyword, Storage`,
			scope: [`keyword`, `storage.type`, `storage.modifier`],
			settings: {
				fontStyle: `italic`,
				foreground: base16.keywords,
			},
		},
		{
			name: `Operator, Misc`,
			scope: [
				`keyword.control`,
				`constant.other.color`,
				`meta.tag`,
				`punctuation.definition.tag`,
				`punctuation.separator.inheritance.php`,
				`punctuation.definition.tag.html`,
				`punctuation.definition.tag.begin.html`,
				`punctuation.definition.tag.end.html`,
				`punctuation.section.embedded`,
				`keyword.other.template`,
				`keyword.other.substitution`,
			],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Tag`,
			scope: [
				`entity.name.tag`,
				`meta.tag.sgml`,
				`markup.deleted.git_gutter`,
			],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Function, Special Method`,
			scope: [
				`entity.name.function`,
				`meta.function-call`,
				`variable.function`,
				`support.function`,
				`keyword.other.special-method`,
			],
			settings: {
				foreground: base16.functions,
			},
		},
		{
			name: `Block Level Variables`,
			scope: [`meta.block variable.other`],
			settings: {
				foreground: base16.variables,
			},
		},
		{
			name: `Other Variable, String Link`,
			scope: [`support.other.variable`, `string.other.link`],
			settings: {
				foreground: base16.variables,
			},
		},
		{
			name: `Function Params`,
			scope: [`variable.other.readwrite`, `variable.parameter.function`],
			settings: {
				foreground: ansi.green,
			},
		},
		{
			name: `Number, Constant, Function Argument, Tag Attribute, Embedded`,
			scope: [
				`constant.numeric`,
				`constant.language`,
				`support.constant`,
				`constant.character`,
				`constant.escape`,
				`variable.parameter`,
				`keyword.other.unit`,
				`keyword.other`,
			],
			settings: {
				foreground: base16.numbers,
			},
		},
		{
			name: `String, Symbols, Inherited Class, Markup Heading`,
			scope: [
				`string`,
				`constant.other.symbol`,
				`constant.other.key`,
				`entity.other.inherited-class`,
				`markup.heading`,
				`markup.inserted.git_gutter`,
				`meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js`,
				`string.json`,
				`support.type.property-name.json`,
			],
			settings: {
				fontStyle: `normal`,
				foreground: base16.strings,
			},
		},
		{
			name: `Class, Support`,
			scope: [
				`entity.name`,
				`support.type`,
				`support.class`,
				`support.orther.namespace.use.php`,
				`meta.use.php`,
				`support.other.namespace.php`,
				`markup.changed.git_gutter`,
				`support.type.sys-types`,
			],
			settings: {
				foreground: base16.functions,
			},
		},
		{
			name: `Entity Types`,
			scope: [`support.type`],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `CSS Class and Support`,
			scope: [
				`source.css support.type.property-name`,
				`source.sass support.type.property-name`,
				`source.scss support.type.property-name`,
				`source.less support.type.property-name`,
				`source.stylus support.type.property-name`,
				`source.postcss support.type.property-name`,
			],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Sub-methods`,
			scope: [
				`entity.name.module.js`,
				`variable.import.parameter.js`,
				`variable.other.class.js`,
			],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Language methods`,
			scope: [`variable.language`],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.red,
			},
		},
		{
			name: `entity.name.method.js`,
			scope: [`entity.name.method.js`],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.cyan,
			},
		},
		{
			name: `meta.method.js`,
			scope: [
				`meta.class-method.js entity.name.function.js`,
				`variable.function.constructor`,
			],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Attributes`,
			scope: [`entity.other.attribute-name`],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `HTML Attributes`,
			scope: [
				`text.html.basic entity.other.attribute-name.html`,
				`text.html.basic entity.other.attribute-name`,
			],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.yellow,
			},
		},
		{
			name: `CSS Classes`,
			scope: [`entity.other.attribute-name.class`],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `CSS ID's`,
			scope: [`source.sass keyword.control`],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Inserted`,
			scope: [`markup.inserted`],
			settings: {
				foreground: ansi.green,
			},
		},
		{
			name: `Deleted`,
			scope: [`markup.deleted`],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Changed`,
			scope: [`markup.changed`],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `Regular Expressions`,
			scope: [`string.regexp`],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Regular Expressions`,
			scope: [`keyword.control.anchor.regexp`],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `Escape Characters`,
			scope: [`constant.character.escape`],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `URL`,
			scope: [`*url*`, `*link*`, `*uri*`],
			settings: {
				fontStyle: `underline`,
			},
		},
		{
			name: `Decorators`,
			scope: [
				`tag.decorator.js entity.name.tag.js`,
				`tag.decorator.js punctuation.definition.tag.js`,
			],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.cyan,
			},
		},
		{
			name: `ES7 Bind Operator`,
			scope: [
				`source.js constant.other.object.key.js string.unquoted.label.js`,
			],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.red,
			},
		},
		{
			name: `JSON Key - Level 0`,
			scope: [
				`source.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `JSON Key - Level 1`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `JSON Key - Level 2`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `JSON Key - Level 3`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.red,
			},
		},
		{
			name: `JSON Key - Level 4`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `JSON Key - Level 5`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `JSON Key - Level 6`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `JSON Key - Level 7`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `JSON Key - Level 8`,
			scope: [
				`source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
			],
			settings: {
				foreground: ansi.green,
			},
		},
		{
			name: `Markdown - Plain`,
			scope: [
				`text.html.markdown`,
				`punctuation.definition.list_item.markdown`,
			],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			name: `Markdown - Markup Raw Inline`,
			scope: [`text.html.markdown markup.inline.raw.markdown`],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `Markdown - Markup Raw Inline Punctuation`,
			scope: [
				`text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown`,
			],
			settings: {
				foreground: ansi.whiteBright,
			},
		},
		{
			name: `Markdown - Line Break`,
			scope: [`text.html.markdown meta.dummy.line-break`],
			settings: {
				foreground: ``,
			},
		},
		{
			name: `Markdown - Heading`,
			scope: [
				`markdown.heading`,
				`markup.heading | markup.heading entity.name`,
				`markup.heading.markdown punctuation.definition.heading.markdown`,
			],
			settings: {
				foreground: ansi.green,
			},
		},
		{
			name: `Markup - Italic`,
			scope: [`markup.italic`],
			settings: {
				fontStyle: `italic`,
				foreground: ansi.yellow,
			},
		},
		{
			name: `Markup - Bold`,
			scope: [`markup.bold`, `markup.bold string`],
			settings: {
				fontStyle: `bold`,
				foreground: ansi.yellow,
			},
		},
		{
			name: `Markup - Bold-Italic`,
			scope: [
				`markup.bold markup.italic`,
				`markup.italic markup.bold`,
				`markup.quote markup.bold`,
				`markup.bold markup.italic string`,
				`markup.italic markup.bold string`,
				`markup.quote markup.bold string`,
			],
			settings: {
				fontStyle: `bold`,
				foreground: ansi.yellow,
			},
		},
		{
			name: `Markup - Underline`,
			scope: [`markup.underline`],
			settings: {
				fontStyle: `underline`,
				foreground: ansi.yellow,
			},
		},
		{
			name: `Markup - Strike`,
			scope: [`markup.strike`],
			settings: {
				fontStyle: `strike`,
				foreground: ``,
			},
		},
		{
			name: `Markdown - Blockquote`,
			scope: [`markup.quote punctuation.definition.blockquote.markdown`],
			settings: {
				foreground: ansi.whiteBright,
			},
		},
		{
			name: `Markup - Quote`,
			scope: [`markup.quote`],
			settings: {
				fontStyle: `italic`,
				foreground: ``,
			},
		},
		{
			name: `Markdown - Link`,
			scope: [`string.other.link.title.markdown`],
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			name: `Markdown - Link Description`,
			scope: [`string.other.link.description.title.markdown`],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `Markdown - Link Anchor`,
			scope: [`constant.other.reference.link.markdown`],
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			name: `Markup - Raw Block`,
			scope: [`markup.raw.block`],
			settings: {
				foreground: ansi.magenta,
			},
		},
		{
			name: `Markdown - Raw Block Fenced`,
			scope: [`markup.raw.block.fenced.markdown`],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			name: `Markdown - Fenced Bode Block`,
			scope: [`punctuation.definition.fenced.markdown`],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			name: `Markdown - Fenced Bode Block Variable`,
			scope: [
				`markup.raw.block.fenced.markdown`,
				`variable.language.fenced.markdown`,
				`punctuation.section.class.end`,
			],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			name: `Markdown - Fenced Language`,
			scope: [`variable.language.fenced.markdown`],
			settings: {
				foreground: ansi.whiteBright,
			},
		},
		{
			name: `Markdown - Separator`,
			scope: [`meta.separator`],
			settings: {
				fontStyle: `bold`,

				foreground: ansi.whiteBright,
			},
		},
		{
			name: `Markup - Table`,
			scope: [`markup.table`],
			settings: {
				foreground: ansi.white,
			},
		},
		{
			scope: `token.info-token`,
			settings: {
				foreground: ansi.cyan,
			},
		},
		{
			scope: `token.warn-token`,
			settings: {
				foreground: ansi.yellow,
			},
		},
		{
			scope: `token.error-token`,
			settings: {
				foreground: ansi.red,
			},
		},
		{
			scope: `token.debug-token`,
			settings: {
				foreground: ansi.magenta,
			},
		},

		{
			name: `JSX Attributes`,
			scope: `entity.other.attribute-name.jsx`,
			settings: { fontStyle: `italic`, foreground: ansi.yellow },
		},
		{
			name: `JSX Tags`,
			scope: `entity.name.tag.jsx`,
			settings: { foreground: ansi.cyan },
		},
		{
			name: `Tags`,
			scope: `punctuation.definition.tag`,
			settings: { foreground: ansi.red },
		},
	],

	// ========= WORKBENCH =========
	colors: {
		// Contrast Colors =========
		// contrastActiveBorder: ansi.red,
		contrastBorder: ansi.black,

		// Base Colors =========
		focusBorder: ansi.black,
		foreground: ansi.red,
		"widget.shadow": `${ansi.black}00`,
		"selection.background": ansi.red,
		descriptionForeground: ansi.red,
		errorForeground: ansi.red,

		// Text Colors =========
		"textBlockQuote.background": ansi.blue,
		"textBlockQuote.border": ansi.cyan,
		"textCodeBlock.background": ansi.blue,
		"textLink.activeForeground": ansi.red,
		"textLink.foreground": ansi.cyan,
		"textPreformat.foreground": ansi.yellow,
		"textSeparator.foreground": ansi.cyan,

		// Button Control =========
		"button.background": ansi.red,
		"button.foreground": ansi.blue,
		"button.hoverBackground": ansi.green,

		// Dropdown Control =========
		"dropdown.background": ansi.blue,
		"dropdown.listBackground": ansi.blue,
		"dropdown.border": ansi.blue,
		"dropdown.foreground": ansi.cyan,

		// Input Control =========
		"input.background": ansi.blue,
		"input.border": ansi.blue,
		"input.foreground": ansi.cyan,
		"input.placeholderForeground": ansi.white,
		"inputOption.activeBorder": ansi.whiteBright,
		"inputValidation.errorBackground": ansi.blue,
		"inputValidation.errorBorder": ansi.black,
		"inputValidation.infoBackground": ansi.blue,
		"inputValidation.infoBorder": ansi.black,
		"inputValidation.warningBackground": ansi.blue,
		"inputValidation.warningBorder": ansi.black,

		// Scrollbar Control =========
		"scrollbar.shadow": `${ansi.black}00`,
		"scrollbarSlider.activeBackground": ansi.yellow,
		"scrollbarSlider.background": ansi.red,
		"scrollbarSlider.hoverBackground": ansi.yellow,

		// Badge =========
		"badge.foreground": ansi.cyan,
		"badge.background": ansi.blue,

		// Progress Bar =========
		"progressBar.background": ansi.blue,

		// Lists and Trees =========
		"list.activeSelectionBackground": ansi.blue,
		"list.activeSelectionForeground": ansi.white,
		"list.inactiveSelectionBackground": ansi.blue,
		"list.inactiveSelectionForeground": ansi.white,
		"list.dropBackground": ansi.blue,
		"list.focusBackground": ansi.blue,
		"list.focusForeground": ansi.whiteBright,
		"list.highlightForeground": ansi.red,
		"list.hoverBackground": ansi.blue,
		"list.hoverForeground": ansi.red,
		"list.inactiveFocusBackground": ansi.blue,
		"list.invalidItemForeground": ansi.red,
		"list.errorForeground": ansi.red,
		"list.warningForeground": ansi.whiteBright,

		// Activity Bar =========
		"activityBar.background": ansi.blue,
		"activityBar.dropBackground": ansi.blackBright,
		"activityBar.foreground": ansi.cyan,
		"activityBar.border": ansi.black,
		"activityBarBadge.background": ansi.red,
		"activityBarBadge.foreground": ansi.blackBright,

		// Side Bar =========
		"sideBar.background": ansi.blackBright,
		"sideBar.foreground": ansi.red,
		"sideBar.border": ansi.black,
		"sideBar.dropBackground": ansi.blue,
		"sideBarTitle.foreground": ansi.whiteBright,
		"sideBarSectionHeader.background": ansi.blue,
		"sideBarSectionHeader.foreground": ansi.whiteBright,

		// Editor Groups & Tabs =========
		"editorGroup.border": ansi.red,
		"editorGroup.dropBackground": `${ansi.blue}80`,
		"editorGroup.emptyBackground": ansi.blue,
		"editorGroup.focusedEmptyBorder": ansi.black,
		"editorGroupHeader.noTabsBackground": ansi.blackBright,
		"editorGroupHeader.tabsBackground": ansi.blackBright,
		"editorGroupHeader.tabsBorder": ansi.black,

		"tab.activeBackground": ansi.blue,
		"tab.activeForeground": ansi.whiteBright,
		"tab.border": ansi.black,
		"tab.activeBorder": ansi.red,
		// "tab.unfocusedActiveBorder": "#000",
		// "tab.activeBorderTop": "#000",
		// "tab.unfocusedActiveBorderTop": "#000 ,
		"tab.inactiveBackground": ansi.blackBright,
		"tab.inactiveForeground": ansi.red,
		// "tab.unfocusedActiveForeground": "#000",
		// "tab.unfocusedInactiveForeground": "#000",
		"tab.hoverBackground": ansi.blue,
		// "tab.unfocusedHoverBackground": "#000",
		// "tab.hoverBorder": ansi.red,
		// "tab.unfocusedHoverBorder": "#000 ",

		// Editor Colors =========
		"editor.background": ansi.blackBright,
		"editor.foreground": ansi.red,
		"editorLineNumber.foreground": ansi.red,
		"editorLineNumber.activeForeground": ansi.white,
		"editorCursor.background": ansi.black,
		"editorCursor.foreground": ansi.red,
		"editor.selectionBackground": `${ansi.red}80`,
		"editor.selectionForeground": ansi.blackBright,
		"editor.inactiveSelectionBackground": `${ansi.cyan}80`,
		"editor.selectionHighlightBackground": `${ansi.cyan}80`,
		// "editor.selectionHighlightBorder": `#000`,
		"editor.wordHighlightBackground": `${ansi.cyan}80`,
		// "editor.wordHighlightBorder": "#000",
		"editor.wordHighlightStrongBackground": `${ansi.cyan}80`,
		// "editor.wordHighlightStrongBorder": "#000",
		"editor.findMatchBackground": `${ansi.red}80`,
		"editor.findMatchHighlightBackground": `${ansi.cyan}80`,
		"editor.findRangeHighlightBackground": `${ansi.red}80`,
		// "editor.findMatchBorder": "#000",
		// "editor.findMatchHighlightBorder": "#000",
		// "editor.findRangeHighlightBorder": "#000",
		"editor.hoverHighlightBackground": `${ansi.cyan}80`,
		"editor.lineHighlightBackground": ansi.blue,
		// "editor.lineHighlightBorder": "#000 ",
		"editorLink.activeForeground": ansi.cyan,
		"editor.rangeHighlightBackground": `${ansi.red}80`,
		// "editor.rangeHighlightBorder": `#000`,
		"editorWhitespace.foreground": `${ansi.red}40`,
		"editorIndentGuide.background": `${ansi.black}80`,
		"editorIndentGuide.activeBackground": `${ansi.red}80`,
		"editorRuler.foreground": `${ansi.red}30`,
		"editorCodeLens.foreground": ansi.red,
		"editorBracketMatch.background": ansi.blue,
		"editorBracketMatch.border": ansi.blue,
		"editorOverviewRuler.border": ansi.black,
		"editorOverviewRuler.findMatchForeground": `${ansi.cyan}80`,
		"editorOverviewRuler.rangeHighlightForeground": `${ansi.cyan}80`,
		"editorOverviewRuler.selectionHighlightForeground": `${ansi.cyan}80`,
		"editorOverviewRuler.wordHighlightForeground": `${ansi.cyan}80`,
		"editorOverviewRuler.wordHighlightStrongForeground": `${ansi.cyan}80`,
		"editorOverviewRuler.modifiedForeground": ansi.cyan,
		"editorOverviewRuler.addedForeground": ansi.green,
		"editorOverviewRuler.deletedForeground": ansi.cyan,
		"editorOverviewRuler.errorForeground": ansi.red,
		"editorOverviewRuler.warningForeground": ansi.yellow,
		"editorOverviewRuler.infoForeground": ansi.green,
		"editorOverviewRuler.bracketMatchForeground": ansi.cyan,
		"editorError.foreground": ansi.red,
		// "editorError.border": ansi.blue,
		"editorWarning.foreground": ansi.yellow,
		// "editorWarning.border": `#000`,
		"editorInfo.foreground": ansi.cyan,
		// "editorInfo.border": `#000`,
		"editorHint.foreground": ansi.green,
		// "editorHint.border": `#000`,
		"editorGutter.background": ansi.blackBright,
		"editorGutter.modifiedBackground": ansi.cyan,
		"editorGutter.addedBackground": ansi.green,
		"editorGutter.deletedBackground": ansi.red,

		// Diff Editor Colors =========
		"diffEditor.insertedTextBackground": `${ansi.green}80`,
		// "diffEditor.insertedTextBorder": `#000`,
		"diffEditor.removedTextBackground": `${ansi.red}80`,
		// "diffEditor.removedTextBorder": `#000`,

		// Editor Widget Colors =========
		"editorWidget.background": ansi.blue,
		"editorWidget.border": ansi.red,
		"editorWidget.resizeBorder": ansi.black,
		"editorSuggestWidget.background": ansi.blackBright,
		"editorSuggestWidget.border": ansi.black,
		"editorSuggestWidget.foreground": ansi.white,
		"editorSuggestWidget.highlightForeground": ansi.white,
		"editorSuggestWidget.selectedBackground": ansi.blue,
		"editorHoverWidget.background": ansi.blue,
		"editorHoverWidget.border": ansi.black,
		"debugExceptionWidget.background": ansi.blue,
		"debugExceptionWidget.border": ansi.black,
		"editorMarkerNavigation.background": ansi.blue,
		"editorMarkerNavigationError.background": ansi.red,
		"editorMarkerNavigationWarning.background": ansi.blue,
		"editorMarkerNavigationInfo.background": ansi.blue,

		// Peek View Colors =========
		"peekView.border": ansi.black,
		"peekViewEditor.background": ansi.blue,
		"peekViewEditorGutter.background": ansi.blue,
		"peekViewEditor.matchHighlightBackground": `${ansi.cyan}80`,
		// "peekViewEditor.matchHighlightBorder": `red`,
		"peekViewResult.background": ansi.blue,
		"peekViewResult.fileForeground": ansi.whiteBright,
		"peekViewResult.lineForeground": ansi.white,
		"peekViewResult.matchHighlightBackground": ansi.red,
		"peekViewResult.selectionBackground": ansi.blue,
		"peekViewResult.selectionForeground": ansi.white,
		"peekViewTitle.background": ansi.red,
		"peekViewTitleDescription.foreground": ansi.blackBright,
		"peekViewTitleLabel.foreground": ansi.black,

		// Merge Conflicts =========
		"merge.currentHeaderBackground": `${ansi.cyan}80`,
		"merge.currentContentBackground": `${ansi.cyan}40`,
		"merge.incomingHeaderBackground": `${ansi.green}80`,
		"merge.incomingContentBackground": `${ansi.green}40`,
		"merge.border": ansi.black,
		"merge.commonContentBackground": `${ansi.blue}80`,
		"merge.commonHeaderBackground": `${ansi.cyan}40`,
		"editorOverviewRuler.currentContentForeground": ansi.white,
		"editorOverviewRuler.incomingContentForeground": ansi.white,
		"editorOverviewRuler.commonContentForeground": ansi.white,

		// Panel Colors =========
		"panel.background": ansi.blackBright,
		"panel.border": ansi.black,
		"panel.dropBackground": ansi.blue,
		"panelTitle.activeBorder": ansi.white,
		"panelTitle.activeForeground": ansi.white,
		"panelTitle.inactiveForeground": ansi.red,

		// Status Bar Colors =========
		"statusBar.background": ansi.blue,
		"statusBar.foreground": ansi.cyan,
		"statusBar.border": ansi.black,
		"statusBar.debuggingBackground": ansi.red,
		"statusBar.debuggingForeground": ansi.black,
		"statusBar.debuggingBorder": ansi.black,
		"statusBar.noFolderBackground": ansi.blue,
		"statusBar.noFolderForeground": ansi.cyan,
		"statusBar.noFolderBorder": ansi.black,
		"statusBarItem.activeBackground": ansi.yellow,
		"statusBarItem.hoverBackground": ansi.red,
		"statusBarItem.prominentBackground": ansi.green,
		"statusBarItem.prominentHoverBackground": ansi.red,

		// Title Bar Colors (macOS) =========
		"titleBar.activeBackground": ansi.red,
		"titleBar.activeForeground": ansi.blackBright,
		"titleBar.inactiveBackground": ansi.blue,
		"titleBar.inactiveForeground": ansi.cyan,
		"titleBar.border": ansi.black,

		// Notification Colors =========
		"notificationCenter.border": ansi.black,
		"notificationCenterHeader.foreground": ansi.white,
		"notificationCenterHeader.background": ansi.black,
		"notificationToast.border": ansi.black,
		"notifications.foreground": ansi.black,
		"notifications.background": ansi.red,
		"notifications.border": ansi.black,
		"notificationLink.foreground": ansi.white,

		// Extensions =========
		"extensionButton.prominentForeground": ansi.white,
		"extensionButton.prominentBackground": ansi.blue,
		"extensionButton.prominentHoverBackground": ansi.red,

		// Quick Picker =========
		"pickerGroup.border": ansi.black,
		"pickerGroup.foreground": ansi.white,

		// Integrated Terminal Colors =========
		"terminal.background": ansi.blackBright,
		"terminal.border": ansi.red,

		"terminal.foreground": ansi.red,

		"terminal.ansiBlack": ansi.black,
		"terminal.ansiBlue": ansi.blue,
		"terminal.ansiCyan": ansi.cyan,
		"terminal.ansiGreen": ansi.green,
		"terminal.ansiMagenta": ansi.magenta,
		"terminal.ansiRed": ansi.red,
		"terminal.ansiWhite": ansi.white,
		"terminal.ansiYellow": ansi.yellow,
		"terminal.ansiBrightBlack": ansi.blackBright,
		"terminal.ansiBrightBlue": ansi.cyan,
		"terminal.ansiBrightCyan": ansi.cyanBright,
		"terminal.ansiBrightGreen": ansi.greenBright,
		"terminal.ansiBrightMagenta": ansi.magentaBright,
		"terminal.ansiBrightRed": ansi.redBright,
		"terminal.ansiBrightWhite": ansi.whiteBright,
		"terminal.ansiBrightYellow": ansi.yellowBright,

		"terminal.selectionBackground": `${ansi.red}80`,
		"terminalCursor.background": ansi.black,
		"terminalCursor.foreground": ansi.red,

		// Debug =========
		"debugToolBar.background": ansi.blackBright,
		"debugToolBar.border": ansi.black,

		// Welcome Page =========
		"welcomePage.buttonBackground": ansi.blue,
		"welcomePage.buttonHoverBackground": ansi.cyan,
		"walkThrough.embeddedEditorBackground": ansi.black,

		// Git Colors =========
		"gitDecoration.modifiedResourceForeground": ansi.cyan,
		"gitDecoration.deletedResourceForeground": ansi.red,
		"gitDecoration.untrackedResourceForeground": ansi.yellow,
		"gitDecoration.ignoredResourceForeground": ansi.white,
		"gitDecoration.conflictingResourceForeground": ansi.red,
		"gitDecoration.submoduleResourceForeground": ansi.green,
	},
};

fs.writeFile(
	`./compiled/Lasers.json`,
	JSON.stringify(theme, null, 2),
	`utf8`,
	(err) => {
		if (err) console.log(err);
	},
);
