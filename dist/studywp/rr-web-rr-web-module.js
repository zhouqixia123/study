(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rr-web-rr-web-module"],{

/***/ "/CRp":
/*!**************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/types.js ***!
  \**************************************************/
/*! exports provided: EventType, IncrementalSource, MediaInteractions, MouseInteractions, ReplayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return IncrementalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaInteractions", function() { return MediaInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return MouseInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return ReplayerEvents; });
var EventType;
(function (EventType) {
    EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
    EventType[EventType["Load"] = 1] = "Load";
    EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
    EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
    EventType[EventType["Meta"] = 4] = "Meta";
    EventType[EventType["Custom"] = 5] = "Custom";
    EventType[EventType["Plugin"] = 6] = "Plugin";
})(EventType || (EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
    IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
    IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
    IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
    IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
    IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
    IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
    IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
    IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
    IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
    IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
    IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
    IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
    IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
})(IncrementalSource || (IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
    MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
    MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
    MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
    MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
    MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
    MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
    MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
    MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
    MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
    MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
})(MouseInteractions || (MouseInteractions = {}));
var MediaInteractions;
(function (MediaInteractions) {
    MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
    MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
    MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
})(MediaInteractions || (MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
    ReplayerEvents["Start"] = "start";
    ReplayerEvents["Pause"] = "pause";
    ReplayerEvents["Resume"] = "resume";
    ReplayerEvents["Resize"] = "resize";
    ReplayerEvents["Finish"] = "finish";
    ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
    ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
    ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
    ReplayerEvents["SkipStart"] = "skip-start";
    ReplayerEvents["SkipEnd"] = "skip-end";
    ReplayerEvents["MouseInteraction"] = "mouse-interaction";
    ReplayerEvents["EventCast"] = "event-cast";
    ReplayerEvents["CustomEvent"] = "custom-event";
    ReplayerEvents["Flush"] = "flush";
    ReplayerEvents["StateChange"] = "state-change";
    ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (ReplayerEvents = {}));




/***/ }),

/***/ "/EhK":
/*!*************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/plugins/console/record/index.js ***!
  \*************************************************************************/
/*! exports provided: PLUGIN_NAME, getRecordConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return getRecordConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "oyId");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "uWcg");
/* harmony import */ var _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-stack-parser.js */ "nd5x");





var defaultLogOptions = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    lengthThreshold: 1000,
    logger: console,
};
function initLogObserver(cb, logOptions) {
    var e_1, _a;
    var _this = this;
    var logger = logOptions.logger;
    if (!logger) {
        return function () { };
    }
    var logCount = 0;
    var cancelHandlers = [];
    if (logOptions.level.includes('error')) {
        if (window) {
            var originalOnError_1 = window.onerror;
            window.onerror = function (msg, file, line, col, error) {
                if (originalOnError_1) {
                    originalOnError_1.apply(_this, [msg, file, line, col, error]);
                }
                var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_3__["ErrorStackParser"].parse(error).map(function (stackFrame) { return stackFrame.toString(); });
                var payload = [Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])(msg, logOptions.stringifyOptions)];
                cb({
                    level: 'error',
                    trace: trace,
                    payload: payload,
                });
            };
            cancelHandlers.push(function () {
                window.onerror = originalOnError_1;
            });
        }
    }
    try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(logOptions.level), _c = _b.next(); !_c.done; _c = _b.next()) {
            var levelType = _c.value;
            cancelHandlers.push(replace(logger, levelType));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        cancelHandlers.forEach(function (h) { return h(); });
    };
    function replace(_logger, level) {
        var _this = this;
        if (!_logger[level]) {
            return function () { };
        }
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(_logger, level, function (original) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                original.apply(_this, args);
                try {
                    var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_3__["ErrorStackParser"].parse(new Error())
                        .map(function (stackFrame) { return stackFrame.toString(); })
                        .splice(1);
                    var payload = args.map(function (s) {
                        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])(s, logOptions.stringifyOptions);
                    });
                    logCount++;
                    if (logCount < logOptions.lengthThreshold) {
                        cb({
                            level: level,
                            trace: trace,
                            payload: payload,
                        });
                    }
                    else if (logCount === logOptions.lengthThreshold) {
                        cb({
                            level: 'warn',
                            trace: [],
                            payload: [
                                Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])('The number of log records reached the threshold.'),
                            ],
                        });
                    }
                }
                catch (error) {
                    original.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['rrweb logger error:', error], args));
                }
            };
        });
    }
}
var PLUGIN_NAME = 'rrweb/console@1';
var getRecordConsolePlugin = function (options) { return ({
    name: PLUGIN_NAME,
    observer: initLogObserver,
    options: options
        ? Object.assign({}, defaultLogOptions, options)
        : defaultLogOptions,
}); };




/***/ }),

/***/ "7oHR":
/*!*****************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \*****************************************************************************/
/*! exports provided: IGNORED_NODE, NodeType, addHoverClass, buildNodeWithSN, isElement, isShadowRoot, maskInputValue, needMaskingText, rebuild, serializeNodeWithId, snapshot, transformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORED_NODE", function() { return IGNORED_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHoverClass", function() { return addHoverClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNodeWithSN", function() { return buildNodeWithSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInputValue", function() { return maskInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needMaskingText", function() { return needMaskingText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuild", function() { return rebuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeNodeWithId", function() { return serializeNodeWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshot", function() { return snapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAttribute", function() { return transformAttribute; });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var _a;
    var host = (_a = n) === null || _a === void 0 ? void 0 : _a.host;
    return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
function maskInputValue(_a) {
    var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    if (maskInputOptions[tagName.toLowerCase()] ||
        maskInputOptions[type]) {
        if (maskInputFn) {
            text = maskInputFn(text);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}

var _id = 1;
var tagNameRegex = RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = element.tagName.toLowerCase().trim();
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    return isCSSImportRule(rule)
        ? getCssRulesString(rule.styleSheet) || ''
        : rule.cssText;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function extractOrigin(url) {
    var origin;
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (DATA_URI.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (filePath[0] === '/') {
            return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars, match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return el.tagName === 'svg' || el instanceof SVGElement;
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (name === 'src' || ((name === 'href' || name === 'xlink:href') && value)) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        value &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, getHref());
    }
    else {
        return value;
    }
}
function _isBlockedElement(element, blockClass, blockSelector) {
    if (typeof blockClass === 'string') {
        if (element.classList.contains(blockClass)) {
            return true;
        }
    }
    else {
        for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
            var className = element.classList[eIndex];
            if (blockClass.test(className)) {
                return true;
            }
        }
    }
    if (blockSelector) {
        return element.matches(blockSelector);
    }
    return false;
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        if (typeof maskTextClass === 'string') {
            if (node.classList.contains(maskTextClass)) {
                return true;
            }
        }
        else {
            node.classList.forEach(function (className) {
                if (maskTextClass.test(className)) {
                    return true;
                }
            });
        }
        if (maskTextSelector) {
            if (node.matches(maskTextSelector)) {
                return true;
            }
        }
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return;
    }
    iframeEl.addEventListener('load', listener);
}
function serializeNode(n, options) {
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn;
    var rootId;
    if (doc.__sn) {
        var docId = doc.__sn.id;
        rootId = docId === 1 ? undefined : docId;
    }
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            return {
                type: NodeType.Document,
                childNodes: [],
                rootId: rootId,
            };
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId: rootId,
            };
        case n.ELEMENT_NODE:
            var needBlock = _isBlockedElement(n, blockClass, blockSelector);
            var tagName = getValidTagName(n);
            var attributes_1 = {};
            for (var _i = 0, _b = Array.from(n.attributes); _i < _b.length; _i++) {
                var _c = _b[_i], name = _c.name, value = _c.value;
                attributes_1[name] = transformAttribute(doc, tagName, name, value);
            }
            if (tagName === 'link' && inlineStylesheet) {
                var stylesheet = Array.from(doc.styleSheets).find(function (s) {
                    return s.href === n.href;
                });
                var cssText = getCssRulesString(stylesheet);
                if (cssText) {
                    delete attributes_1.rel;
                    delete attributes_1.href;
                    attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
                }
            }
            if (tagName === 'style' &&
                n.sheet &&
                !(n.innerText ||
                    n.textContent ||
                    '').trim().length) {
                var cssText = getCssRulesString(n.sheet);
                if (cssText) {
                    attributes_1._cssText = absoluteToStylesheet(cssText, getHref());
                }
            }
            if (tagName === 'input' ||
                tagName === 'textarea' ||
                tagName === 'select') {
                var value = n.value;
                if (attributes_1.type !== 'radio' &&
                    attributes_1.type !== 'checkbox' &&
                    attributes_1.type !== 'submit' &&
                    attributes_1.type !== 'button' &&
                    value) {
                    attributes_1.value = maskInputValue({
                        type: attributes_1.type,
                        tagName: tagName,
                        value: value,
                        maskInputOptions: maskInputOptions,
                        maskInputFn: maskInputFn,
                    });
                }
                else if (n.checked) {
                    attributes_1.checked = n.checked;
                }
            }
            if (tagName === 'option') {
                var selectValue = n.parentElement;
                if (attributes_1.value === selectValue.value) {
                    attributes_1.selected = n.selected;
                }
            }
            if (tagName === 'canvas' && recordCanvas) {
                attributes_1.rr_dataURL = n.toDataURL();
            }
            if (tagName === 'audio' || tagName === 'video') {
                attributes_1.rr_mediaState = n.paused
                    ? 'paused'
                    : 'played';
                attributes_1.rr_mediaCurrentTime = n.currentTime;
            }
            if (n.scrollLeft) {
                attributes_1.rr_scrollLeft = n.scrollLeft;
            }
            if (n.scrollTop) {
                attributes_1.rr_scrollTop = n.scrollTop;
            }
            if (needBlock) {
                var _d = n.getBoundingClientRect(), width = _d.width, height = _d.height;
                attributes_1 = {
                    class: attributes_1.class,
                    rr_width: width + "px",
                    rr_height: height + "px",
                };
            }
            if (tagName === 'iframe' && !keepIframeSrcFn(attributes_1.src)) {
                delete attributes_1.src;
            }
            return {
                type: NodeType.Element,
                tagName: tagName,
                attributes: attributes_1,
                childNodes: [],
                isSVG: isSVGElement(n) || undefined,
                needBlock: needBlock,
                rootId: rootId,
            };
        case n.TEXT_NODE:
            var parentTagName = n.parentNode && n.parentNode.tagName;
            var textContent = n.textContent;
            var isStyle = parentTagName === 'STYLE' ? true : undefined;
            var isScript = parentTagName === 'SCRIPT' ? true : undefined;
            if (isStyle && textContent) {
                textContent = absoluteToStylesheet(textContent, getHref());
            }
            if (isScript) {
                textContent = 'SCRIPT_PLACEHOLDER';
            }
            if (!isStyle &&
                !isScript &&
                needMaskingText(n, maskTextClass, maskTextSelector) &&
                textContent) {
                textContent = maskTextFn
                    ? maskTextFn(textContent)
                    : textContent.replace(/[\S]/g, '*');
            }
            return {
                type: NodeType.Text,
                textContent: textContent || '',
                isStyle: isStyle,
                rootId: rootId,
            };
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId,
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId,
            };
        default:
            return false;
    }
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'preload' &&
                    sn.attributes.as === 'script'))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, map = options.map, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.recordCanvas, recordCanvas = _d === void 0 ? false : _d, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _e = options.iframeLoadTimeout, iframeLoadTimeout = _e === void 0 ? 5000 : _e, _f = options.keepIframeSrcFn, keepIframeSrcFn = _f === void 0 ? function () { return false; } : _f;
    var _g = options.preserveWhiteSpace, preserveWhiteSpace = _g === void 0 ? true : _g;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn,
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if ('__sn' in n) {
        id = n.__sn.id;
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    n.__sn = serializedNode;
    if (id === IGNORED_NODE) {
        return null;
    }
    map[id] = n;
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            _serializedNode.type === NodeType.Element &&
            _serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            map: map,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn,
        };
        for (var _i = 0, _h = Array.from(n.childNodes); _i < _h.length; _i++) {
            var childN = _h[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            serializedNode.isShadowHost = true;
            for (var _j = 0, _k = Array.from(n.shadowRoot.childNodes); _j < _k.length; _j++) {
                var childN = _k[_j];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedChildNode.isShadow = true;
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode && isShadowRoot(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    map: map,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn,
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.blockClass, blockClass = _b === void 0 ? 'rr-block' : _b, _c = _a.blockSelector, blockSelector = _c === void 0 ? null : _c, _d = _a.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = _a.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = _a.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, _g = _a.recordCanvas, recordCanvas = _g === void 0 ? false : _g, _h = _a.maskAllInputs, maskAllInputs = _h === void 0 ? false : _h, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _j = _a.slimDOM, slimDOM = _j === void 0 ? false : _j, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, _k = _a.keepIframeSrcFn, keepIframeSrcFn = _k === void 0 ? function () { return false; } : _k;
    var idNodeMap = {};
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : maskAllInputs === false
            ? {
                password: true,
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true,
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return [
        serializeNodeWithId(n, {
            doc: n,
            map: idNodeMap,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: false,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn,
        }),
        idNodeMap,
    ];
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList,
            },
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c !== false) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str,
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : '',
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations(),
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames,
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style,
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style,
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style,
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2]),
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls,
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style,
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls,
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations(),
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null,
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR, 'g');
function addHoverClass(cssText) {
    var ast = parse(cssText, {
        silent: true,
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    var selectors = [];
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
    });
    if (selectors.length === 0)
        return cssText;
    var selectorMatcher = new RegExp(selectors
        .filter(function (selector, index) { return selectors.indexOf(selector) === index; })
        .sort(function (a, b) { return b.length - a.length; })
        .map(function (selector) {
        return escapeRegExp(selector);
    })
        .join('|'), 'g');
    return cssText.replace(selectorMatcher, function (selector) {
        var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
        return selector + ", " + newSelector;
    });
}
function buildNode(n, options) {
    var doc = options.doc, hackCss = options.hackCss;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element:
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var _loop_1 = function (name) {
                if (!n.attributes.hasOwnProperty(name)) {
                    return "continue";
                }
                var value = n.attributes[name];
                value =
                    typeof value === 'boolean' || typeof value === 'number' ? '' : value;
                if (!name.startsWith('rr_')) {
                    var isTextarea = tagName === 'textarea' && name === 'value';
                    var isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';
                    if (isRemoteOrDynamicCss && hackCss) {
                        value = addHoverClass(value);
                    }
                    if (isTextarea || isRemoteOrDynamicCss) {
                        var child = doc.createTextNode(value);
                        for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                            var c = _a[_i];
                            if (c.nodeType === node_1.TEXT_NODE) {
                                node_1.removeChild(c);
                            }
                        }
                        node_1.appendChild(child);
                        return "continue";
                    }
                    try {
                        if (n.isSVG && name === 'xlink:href') {
                            node_1.setAttributeNS('http://www.w3.org/1999/xlink', name, value);
                        }
                        else if (name === 'onload' ||
                            name === 'onclick' ||
                            name.substring(0, 7) === 'onmouse') {
                            node_1.setAttribute('_' + name, value);
                        }
                        else if (tagName === 'meta' &&
                            n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                            name == 'content') {
                            node_1.setAttribute('csp-content', value);
                            return "continue";
                        }
                        else {
                            node_1.setAttribute(name, value);
                        }
                    }
                    catch (error) {
                    }
                }
                else {
                    if (tagName === 'canvas' && name === 'rr_dataURL') {
                        var image_1 = document.createElement('img');
                        image_1.src = value;
                        image_1.onload = function () {
                            var ctx = node_1.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                            }
                        };
                    }
                    if (name === 'rr_width') {
                        node_1.style.width = value;
                    }
                    if (name === 'rr_height') {
                        node_1.style.height = value;
                    }
                    if (name === 'rr_mediaCurrentTime') {
                        node_1.currentTime = n.attributes
                            .rr_mediaCurrentTime;
                    }
                    if (name === 'rr_mediaState') {
                        switch (value) {
                            case 'played':
                                node_1
                                    .play()
                                    .catch(function (e) { return console.warn('media playback error', e); });
                                break;
                            case 'paused':
                                node_1.pause();
                                break;
                        }
                    }
                }
            };
            for (var name in n.attributes) {
                _loop_1(name);
            }
            if (n.isShadowHost) {
                if (!node_1.shadowRoot) {
                    node_1.attachShadow({ mode: 'open' });
                }
                else {
                    while (node_1.shadowRoot.firstChild) {
                        node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
                    }
                }
            }
            return node_1;
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss ? addHoverClass(n.textContent) : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    var doc = options.doc, map = options.map, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.hackCss, hackCss = _b === void 0 ? true : _b, afterAppend = options.afterAppend;
    var node = buildNode(n, { doc: doc, hackCss: hackCss });
    if (!node) {
        return null;
    }
    if (n.rootId) {
        console.assert(map[n.rootId] === doc, 'Target document should has the same root id.');
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        node = doc;
    }
    node.__sn = n;
    map[n.id] = node;
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
            var childN = _c[_i];
            var childNode = buildNodeWithSN(childN, {
                doc: doc,
                map: map,
                skipChild: false,
                hackCss: hackCss,
                afterAppend: afterAppend,
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode);
            }
        }
    }
    return node;
}
function visit(idNodeMap, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (var key in idNodeMap) {
        if (idNodeMap[key]) {
            walk(idNodeMap[key]);
        }
    }
}
function handleScroll(node) {
    var n = node.__sn;
    if (n.type !== NodeType.Element) {
        return;
    }
    var el = node;
    for (var name in n.attributes) {
        if (!(n.attributes.hasOwnProperty(name) && name.startsWith('rr_'))) {
            continue;
        }
        var value = n.attributes[name];
        if (name === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    var doc = options.doc, onVisit = options.onVisit, _a = options.hackCss, hackCss = _a === void 0 ? true : _a, afterAppend = options.afterAppend;
    var idNodeMap = {};
    var node = buildNodeWithSN(n, {
        doc: doc,
        map: idNodeMap,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
    });
    visit(idNodeMap, function (visitedNode) {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode);
    });
    return [node, idNodeMap];
}




/***/ }),

/***/ "ATd1":
/*!**********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/packer/unpack.js ***!
  \**********************************************************/
/*! exports provided: unpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return unpack; });
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/fflate/esm/browser.js */ "R8qc");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "l3hQ");



var unpack = function (raw) {
    if (typeof raw !== 'string') {
        return raw;
    }
    try {
        var e = JSON.parse(raw);
        if (e.timestamp) {
            return e;
        }
    }
    catch (error) {
    }
    try {
        var e = JSON.parse(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["unzlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strToU8"])(raw, true))));
        if (e.v === _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"]) {
            return e;
        }
        throw new Error("These events were packed with packer " + e.v + " which is incompatible with current packer " + _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"] + ".");
    }
    catch (error) {
        console.error(error);
        throw new Error('Unknown data format.');
    }
};




/***/ }),

/***/ "As3v":
/*!**********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/record/shadow-dom-manager.js ***!
  \**********************************************************************/
/*! exports provided: ShadowDomManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDomManager", function() { return ShadowDomManager; });
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer.js */ "D1P6");


var ShadowDomManager = (function () {
    function ShadowDomManager(options) {
        this.mutationCb = options.mutationCb;
        this.scrollCb = options.scrollCb;
        this.bypassOptions = options.bypassOptions;
        this.mirror = options.mirror;
    }
    ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_0__["initMutationObserver"])(this.mutationCb, doc, this.bypassOptions.blockClass, this.bypassOptions.blockSelector, this.bypassOptions.maskTextClass, this.bypassOptions.maskTextSelector, this.bypassOptions.inlineStylesheet, this.bypassOptions.maskInputOptions, this.bypassOptions.maskTextFn, this.bypassOptions.maskInputFn, this.bypassOptions.recordCanvas, this.bypassOptions.slimDOMOptions, this.mirror, this.bypassOptions.iframeManager, this, shadowRoot);
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_0__["initScrollObserver"])(this.scrollCb, shadowRoot, this.mirror, this.bypassOptions.blockClass, this.bypassOptions.sampling);
    };
    return ShadowDomManager;
}());




/***/ }),

/***/ "AwHt":
/*!********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/packer/pack.js ***!
  \********************************************************/
/*! exports provided: pack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ext/fflate/esm/browser.js */ "R8qc");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "l3hQ");




var pack = function (event) {
    var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { v: _base_js__WEBPACK_IMPORTED_MODULE_2__["MARK"] });
    return Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["zlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strToU8"])(JSON.stringify(_e))), true);
};




/***/ }),

/***/ "D1P6":
/*!************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/record/observer.js ***!
  \************************************************************/
/*! exports provided: INPUT_TAGS, initMutationObserver, initObservers, initScrollObserver, mutationBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_TAGS", function() { return INPUT_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMutationObserver", function() { return initMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObservers", function() { return initObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScrollObserver", function() { return initScrollObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationBuffers", function() { return mutationBuffers; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ext/rrweb-snapshot/es/rrweb-snapshot.js */ "7oHR");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "/CRp");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "oyId");
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutation.js */ "KG/8");






var mutationBuffers = [];
function getEventTarget(event) {
    try {
        if ('composedPath' in event) {
            var path = event.composedPath();
            if (path.length) {
                return path[0];
            }
        }
        else if ('path' in event &&
            event.path.length) {
            return event.path[0];
        }
        return event.target;
    }
    catch (_a) {
        return event.target;
    }
}
function initMutationObserver(cb, doc, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, maskInputFn, recordCanvas, slimDOMOptions, mirror, iframeManager, shadowDomManager, rootEl) {
    var _a, _b, _c;
    var mutationBuffer = new _mutation_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    mutationBuffers.push(mutationBuffer);
    mutationBuffer.init(cb, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, maskInputFn, recordCanvas, slimDOMOptions, doc, mirror, iframeManager, shadowDomManager);
    var mutationObserverCtor = window.MutationObserver ||
        window.__rrMutationObserver;
    var angularZoneSymbol = (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.Zone) === null || _b === void 0 ? void 0 : _b.__symbol__) === null || _c === void 0 ? void 0 : _c.call(_b, 'MutationObserver');
    if (angularZoneSymbol &&
        window[angularZoneSymbol]) {
        mutationObserverCtor = window[angularZoneSymbol];
    }
    var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
    observer.observe(rootEl, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true,
    });
    return observer;
}
function initMoveObserver(cb, sampling, doc, mirror) {
    if (sampling.mousemove === false) {
        return function () { };
    }
    var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
    var callbackThreshold = typeof sampling.mousemoveCallback === 'number'
        ? sampling.mousemoveCallback
        : 500;
    var positions = [];
    var timeBaseline;
    var wrappedCb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (source) {
        var totalOffset = Date.now() - timeBaseline;
        cb(positions.map(function (p) {
            p.timeOffset -= totalOffset;
            return p;
        }), source);
        positions = [];
        timeBaseline = null;
    }, callbackThreshold);
    var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
        var target = getEventTarget(evt);
        var _a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isTouchEvent"])(evt)
            ? evt.changedTouches[0]
            : evt, clientX = _a.clientX, clientY = _a.clientY;
        if (!timeBaseline) {
            timeBaseline = Date.now();
        }
        positions.push({
            x: clientX,
            y: clientY,
            id: mirror.getId(target),
            timeOffset: Date.now() - timeBaseline,
        });
        wrappedCb(evt instanceof DragEvent
            ? _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Drag
            : evt instanceof MouseEvent
                ? _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove
                : _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].TouchMove);
    }, threshold, {
        trailing: false,
    });
    var handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('mousemove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('touchmove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('drag', updatePosition, doc),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initMouseInteractionObserver(cb, doc, mirror, blockClass, sampling) {
    if (sampling.mouseInteraction === false) {
        return function () { };
    }
    var disableMap = sampling.mouseInteraction === true ||
        sampling.mouseInteraction === undefined
        ? {}
        : sampling.mouseInteraction;
    var handlers = [];
    var getHandler = function (eventKey) {
        return function (event) {
            var target = getEventTarget(event);
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBlocked"])(target, blockClass)) {
                return;
            }
            var e = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isTouchEvent"])(event) ? event.changedTouches[0] : event;
            if (!e) {
                return;
            }
            var id = mirror.getId(target);
            var clientX = e.clientX, clientY = e.clientY;
            cb({
                type: _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"][eventKey],
                id: id,
                x: clientX,
                y: clientY,
            });
        };
    };
    Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"])
        .filter(function (key) {
        return Number.isNaN(Number(key)) &&
            !key.endsWith('_Departed') &&
            disableMap[key] !== false;
    })
        .forEach(function (eventKey) {
        var eventName = eventKey.toLowerCase();
        var handler = getHandler(eventKey);
        handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])(eventName, handler, doc));
    });
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initScrollObserver(cb, doc, mirror, blockClass, sampling) {
    var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
        var target = getEventTarget(evt);
        if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBlocked"])(target, blockClass)) {
            return;
        }
        var id = mirror.getId(target);
        if (target === doc) {
            var scrollEl = (doc.scrollingElement || doc.documentElement);
            cb({
                id: id,
                x: scrollEl.scrollLeft,
                y: scrollEl.scrollTop,
            });
        }
        else {
            cb({
                id: id,
                x: target.scrollLeft,
                y: target.scrollTop,
            });
        }
    }, sampling.scroll || 100);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('scroll', updatePosition, doc);
}
function initViewportResizeObserver(cb) {
    var lastH = -1;
    var lastW = -1;
    var updateDimension = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function () {
        var height = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])();
        var width = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowWidth"])();
        if (lastH !== height || lastW !== width) {
            cb({
                width: Number(width),
                height: Number(height),
            });
            lastH = height;
            lastW = width;
        }
    }, 200);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('resize', updateDimension, window);
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(cb, doc, mirror, blockClass, ignoreClass, maskInputOptions, maskInputFn, sampling) {
    function eventHandler(event) {
        var target = getEventTarget(event);
        if (!target ||
            !target.tagName ||
            INPUT_TAGS.indexOf(target.tagName) < 0 ||
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBlocked"])(target, blockClass)) {
            return;
        }
        var type = target.type;
        if (target.classList.contains(ignoreClass)) {
            return;
        }
        var text = target.value;
        var isChecked = false;
        if (type === 'radio' || type === 'checkbox') {
            isChecked = target.checked;
        }
        else if (maskInputOptions[target.tagName.toLowerCase()] ||
            maskInputOptions[type]) {
            text = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
                maskInputOptions: maskInputOptions,
                tagName: target.tagName,
                type: type,
                value: text,
                maskInputFn: maskInputFn,
            });
        }
        cbWithDedup(target, { text: text, isChecked: isChecked });
        var name = target.name;
        if (type === 'radio' && name && isChecked) {
            doc
                .querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]")
                .forEach(function (el) {
                if (el !== target) {
                    cbWithDedup(el, {
                        text: el.value,
                        isChecked: !isChecked,
                    });
                }
            });
        }
    }
    function cbWithDedup(target, v) {
        var lastInputValue = lastInputValueMap.get(target);
        if (!lastInputValue ||
            lastInputValue.text !== v.text ||
            lastInputValue.isChecked !== v.isChecked) {
            lastInputValueMap.set(target, v);
            var id = mirror.getId(target);
            cb(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v), { id: id }));
        }
    }
    var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
    var handlers = events.map(function (eventName) { return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])(eventName, eventHandler, doc); });
    var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    var hookProperties = [
        [HTMLInputElement.prototype, 'value'],
        [HTMLInputElement.prototype, 'checked'],
        [HTMLSelectElement.prototype, 'value'],
        [HTMLTextAreaElement.prototype, 'value'],
        [HTMLSelectElement.prototype, 'selectedIndex'],
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
        handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(hookProperties.map(function (p) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hookSetter"])(p[0], p[1], {
                set: function () {
                    eventHandler({ target: this });
                },
            });
        })));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initStyleSheetObserver(cb, mirror) {
    var insertRule = CSSStyleSheet.prototype.insertRule;
    CSSStyleSheet.prototype.insertRule = function (rule, index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            cb({
                id: id,
                adds: [{ rule: rule, index: index }],
            });
        }
        return insertRule.apply(this, arguments);
    };
    var deleteRule = CSSStyleSheet.prototype.deleteRule;
    CSSStyleSheet.prototype.deleteRule = function (index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            cb({
                id: id,
                removes: [{ index: index }],
            });
        }
        return deleteRule.apply(this, arguments);
    };
    return function () {
        CSSStyleSheet.prototype.insertRule = insertRule;
        CSSStyleSheet.prototype.deleteRule = deleteRule;
    };
}
function initMediaInteractionObserver(mediaInteractionCb, blockClass, mirror) {
    var handler = function (type) { return function (event) {
        var target = getEventTarget(event);
        if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBlocked"])(target, blockClass)) {
            return;
        }
        mediaInteractionCb({
            type: type,
            id: mirror.getId(target),
            currentTime: target.currentTime,
        });
    }; };
    var handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('play', handler(_types_js__WEBPACK_IMPORTED_MODULE_2__["MediaInteractions"].Play)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('pause', handler(_types_js__WEBPACK_IMPORTED_MODULE_2__["MediaInteractions"].Pause)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('seeked', handler(_types_js__WEBPACK_IMPORTED_MODULE_2__["MediaInteractions"].Seeked)),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initCanvasMutationObserver(cb, blockClass, mirror) {
    var e_1, _a;
    var props = Object.getOwnPropertyNames(CanvasRenderingContext2D.prototype);
    var handlers = [];
    var _loop_1 = function (prop) {
        try {
            if (typeof CanvasRenderingContext2D.prototype[prop] !== 'function') {
                return "continue";
            }
            var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["patch"])(CanvasRenderingContext2D.prototype, prop, function (original) {
                return function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBlocked"])(this.canvas, blockClass)) {
                        setTimeout(function () {
                            var recordArgs = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args);
                            if (prop === 'drawImage') {
                                if (recordArgs[0] &&
                                    recordArgs[0] instanceof HTMLCanvasElement) {
                                    var canvas = recordArgs[0];
                                    var ctx = canvas.getContext('2d');
                                    var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                                    var pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                                    recordArgs[0] = JSON.stringify(pix);
                                }
                            }
                            cb({
                                id: mirror.getId(_this.canvas),
                                property: prop,
                                args: recordArgs,
                            });
                        }, 0);
                    }
                    return original.apply(this, args);
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_a) {
            var hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hookSetter"])(CanvasRenderingContext2D.prototype, prop, {
                set: function (v) {
                    cb({
                        id: mirror.getId(this.canvas),
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    };
    try {
        for (var props_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            _loop_1(prop);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initFontObserver(cb) {
    var handlers = [];
    var fontMap = new WeakMap();
    var originalFontFace = FontFace;
    window.FontFace = function FontFace(family, source, descriptors) {
        var fontFace = new originalFontFace(family, source, descriptors);
        fontMap.set(fontFace, {
            family: family,
            buffer: typeof source !== 'string',
            descriptors: descriptors,
            fontSource: typeof source === 'string'
                ? source
                :
                    JSON.stringify(Array.from(new Uint8Array(source))),
        });
        return fontFace;
    };
    var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["patch"])(document.fonts, 'add', function (original) {
        return function (fontFace) {
            setTimeout(function () {
                var p = fontMap.get(fontFace);
                if (p) {
                    cb(p);
                    fontMap.delete(fontFace);
                }
            }, 0);
            return original.apply(this, [fontFace]);
        };
    });
    handlers.push(function () {
        window.FonFace = originalFontFace;
    });
    handlers.push(restoreHandler);
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function mergeHooks(o, hooks) {
    var mutationCb = o.mutationCb, mousemoveCb = o.mousemoveCb, mouseInteractionCb = o.mouseInteractionCb, scrollCb = o.scrollCb, viewportResizeCb = o.viewportResizeCb, inputCb = o.inputCb, mediaInteractionCb = o.mediaInteractionCb, styleSheetRuleCb = o.styleSheetRuleCb, canvasMutationCb = o.canvasMutationCb, fontCb = o.fontCb;
    o.mutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mutation) {
            hooks.mutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        mutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.mousemoveCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mousemove) {
            hooks.mousemove.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        mousemoveCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.mouseInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mouseInteraction) {
            hooks.mouseInteraction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        mouseInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.scrollCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.scroll) {
            hooks.scroll.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        scrollCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.viewportResizeCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.viewportResize) {
            hooks.viewportResize.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        viewportResizeCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.inputCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.input) {
            hooks.input.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        inputCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.mediaInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mediaInteaction) {
            hooks.mediaInteaction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        mediaInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.styleSheetRuleCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleSheetRule) {
            hooks.styleSheetRule.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        styleSheetRuleCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.canvasMutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.canvasMutation) {
            hooks.canvasMutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        canvasMutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
    o.fontCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.font) {
            hooks.font.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
        }
        fontCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(p));
    };
}
function initObservers(o, hooks) {
    var e_2, _a;
    if (hooks === void 0) { hooks = {}; }
    mergeHooks(o, hooks);
    var mutationObserver = initMutationObserver(o.mutationCb, o.doc, o.blockClass, o.blockSelector, o.maskTextClass, o.maskTextSelector, o.inlineStylesheet, o.maskInputOptions, o.maskTextFn, o.maskInputFn, o.recordCanvas, o.slimDOMOptions, o.mirror, o.iframeManager, o.shadowDomManager, o.doc);
    var mousemoveHandler = initMoveObserver(o.mousemoveCb, o.sampling, o.doc, o.mirror);
    var mouseInteractionHandler = initMouseInteractionObserver(o.mouseInteractionCb, o.doc, o.mirror, o.blockClass, o.sampling);
    var scrollHandler = initScrollObserver(o.scrollCb, o.doc, o.mirror, o.blockClass, o.sampling);
    var viewportResizeHandler = initViewportResizeObserver(o.viewportResizeCb);
    var inputHandler = initInputObserver(o.inputCb, o.doc, o.mirror, o.blockClass, o.ignoreClass, o.maskInputOptions, o.maskInputFn, o.sampling);
    var mediaInteractionHandler = initMediaInteractionObserver(o.mediaInteractionCb, o.blockClass, o.mirror);
    var styleSheetObserver = initStyleSheetObserver(o.styleSheetRuleCb, o.mirror);
    var canvasMutationObserver = o.recordCanvas
        ? initCanvasMutationObserver(o.canvasMutationCb, o.blockClass, o.mirror)
        : function () { };
    var fontObserver = o.collectFonts ? initFontObserver(o.fontCb) : function () { };
    var pluginHandlers = [];
    try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(o.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
            var plugin = _c.value;
            pluginHandlers.push(plugin.observer(plugin.callback, plugin.options));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return function () {
        mutationObserver.disconnect();
        mousemoveHandler();
        mouseInteractionHandler();
        scrollHandler();
        viewportResizeHandler();
        inputHandler();
        mediaInteractionHandler();
        styleSheetObserver();
        canvasMutationObserver();
        fontObserver();
        pluginHandlers.forEach(function (h) { return h(); });
    };
}




/***/ }),

/***/ "DQJ2":
/*!*********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/replay/index.js ***!
  \*********************************************************/
/*! exports provided: Replayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return Replayer; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ext/rrweb-snapshot/es/rrweb-snapshot.js */ "7oHR");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "/CRp");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "oyId");
/* harmony import */ var _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ext/mitt/dist/mitt.es.js */ "wCtE");
/* harmony import */ var _smoothscroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smoothscroll.js */ "wqC1");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer.js */ "vJR0");
/* harmony import */ var _machine_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./machine.js */ "WX7R");
/* harmony import */ var _styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/inject-style.js */ "NMCL");











var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt = _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_4__["default"] || _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_4__;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var defaultMouseTailConfig = {
    duration: 500,
    lineCap: 'round',
    lineWidth: 3,
    strokeStyle: 'red',
};
var Replayer = (function () {
    function Replayer(events, config) {
        var _this = this;
        this.mouseTail = null;
        this.tailPositions = [];
        this.emitter = mitt();
        this.legacy_missingNodeRetryMap = {};
        this.imageMap = new Map();
        this.mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["createMirror"])();
        this.firstPlayedEvent = null;
        this.newDocumentQueue = [];
        if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
            throw new Error('Replayer need at least 2 events.');
        }
        var defaultConfig = {
            speed: 1,
            maxSpeed: 360,
            root: document.body,
            loadTimeout: 0,
            skipInactive: false,
            showWarning: true,
            showDebug: false,
            blockClass: 'rr-block',
            liveMode: false,
            insertStyleRules: [],
            triggerFocus: true,
            UNSAFE_replayCanvas: false,
            pauseAnimation: true,
            mouseTail: defaultMouseTailConfig,
        };
        this.config = Object.assign({}, defaultConfig, config);
        this.handleResize = this.handleResize.bind(this);
        this.getCastFn = this.getCastFn.bind(this);
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Resize, this.handleResize);
        this.setupDom();
        this.treeIndex = new _utils_js__WEBPACK_IMPORTED_MODULE_3__["TreeIndex"]();
        this.fragmentParentMap = new Map();
        this.elementStateMap = new Map();
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Flush, function () {
            var e_1, _a, e_2, _b;
            var _c = _this.treeIndex.flush(), scrollMap = _c.scrollMap, inputMap = _c.inputMap;
            _this.fragmentParentMap.forEach(function (parent, frag) {
                return _this.restoreRealParent(frag, parent);
            });
            _this.fragmentParentMap.clear();
            _this.elementStateMap.clear();
            try {
                for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(scrollMap.values()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var d = _e.value;
                    _this.applyScroll(d);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(inputMap.values()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var d = _g.value;
                    _this.applyInput(d);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].PlayBack, function () {
            _this.firstPlayedEvent = null;
            _this.mirror.reset();
        });
        var timer = new _timer_js__WEBPACK_IMPORTED_MODULE_6__["Timer"]([], (config === null || config === void 0 ? void 0 : config.speed) || defaultConfig.speed);
        this.service = Object(_machine_js__WEBPACK_IMPORTED_MODULE_7__["createPlayerService"])({
            events: events
                .map(function (e) {
                if (config && config.unpackFn) {
                    return config.unpackFn(e);
                }
                return e;
            })
                .sort(function (a1, a2) { return a1.timestamp - a2.timestamp; }),
            timer: timer,
            timeOffset: 0,
            baselineTime: 0,
            lastPlayedEvent: null,
        }, {
            getCastFn: this.getCastFn,
            emitter: this.emitter,
        });
        this.service.start();
        this.service.subscribe(function (state) {
            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].StateChange, {
                player: state,
            });
        });
        this.speedService = Object(_machine_js__WEBPACK_IMPORTED_MODULE_7__["createSpeedService"])({
            normalSpeed: -1,
            timer: timer,
        });
        this.speedService.start();
        this.speedService.subscribe(function (state) {
            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].StateChange, {
                speed: state,
            });
        });
        var firstMeta = this.service.state.context.events.find(function (e) { return e.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta; });
        var firstFullsnapshot = this.service.state.context.events.find(function (e) { return e.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot; });
        if (firstMeta) {
            var _a = firstMeta.data, width_1 = _a.width, height_1 = _a.height;
            setTimeout(function () {
                _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Resize, {
                    width: width_1,
                    height: height_1,
                });
            }, 0);
        }
        if (firstFullsnapshot) {
            setTimeout(function () {
                if (_this.firstPlayedEvent) {
                    return;
                }
                _this.firstPlayedEvent = firstFullsnapshot;
                _this.rebuildFullSnapshot(firstFullsnapshot);
                _this.iframe.contentWindow.scrollTo(firstFullsnapshot.data.initialOffset);
            }, 1);
        }
    }
    Object.defineProperty(Replayer.prototype, "timer", {
        get: function () {
            return this.service.state.context.timer;
        },
        enumerable: false,
        configurable: true
    });
    Replayer.prototype.on = function (event, handler) {
        this.emitter.on(event, handler);
        return this;
    };
    Replayer.prototype.off = function (event, handler) {
        this.emitter.off(event, handler);
        return this;
    };
    Replayer.prototype.setConfig = function (config) {
        var _this = this;
        Object.keys(config).forEach(function (key) {
            _this.config[key] = config[key];
        });
        if (!this.config.skipInactive) {
            this.backToNormal();
        }
        if (typeof config.speed !== 'undefined') {
            this.speedService.send({
                type: 'SET_SPEED',
                payload: {
                    speed: config.speed,
                },
            });
        }
        if (typeof config.mouseTail !== 'undefined') {
            if (config.mouseTail === false) {
                if (this.mouseTail) {
                    this.mouseTail.style.display = 'none';
                }
            }
            else {
                if (!this.mouseTail) {
                    this.mouseTail = document.createElement('canvas');
                    this.mouseTail.width = Number.parseFloat(this.iframe.width);
                    this.mouseTail.height = Number.parseFloat(this.iframe.height);
                    this.mouseTail.classList.add('replayer-mouse-tail');
                    this.wrapper.insertBefore(this.mouseTail, this.iframe);
                }
                this.mouseTail.style.display = 'inherit';
            }
        }
    };
    Replayer.prototype.getMetaData = function () {
        var firstEvent = this.service.state.context.events[0];
        var lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
            startTime: firstEvent.timestamp,
            endTime: lastEvent.timestamp,
            totalTime: lastEvent.timestamp - firstEvent.timestamp,
        };
    };
    Replayer.prototype.getCurrentTime = function () {
        return this.timer.timeOffset + this.getTimeOffset();
    };
    Replayer.prototype.getTimeOffset = function () {
        var _a = this.service.state.context, baselineTime = _a.baselineTime, events = _a.events;
        return baselineTime - events[0].timestamp;
    };
    Replayer.prototype.getMirror = function () {
        return this.mirror;
    };
    Replayer.prototype.play = function (timeOffset) {
        var _a;
        if (timeOffset === void 0) { timeOffset = 0; }
        if (this.service.state.matches('paused')) {
            this.service.send({ type: 'PLAY', payload: { timeOffset: timeOffset } });
        }
        else {
            this.service.send({ type: 'PAUSE' });
            this.service.send({ type: 'PLAY', payload: { timeOffset: timeOffset } });
        }
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.remove('rrweb-paused');
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Start);
    };
    Replayer.prototype.pause = function (timeOffset) {
        var _a;
        if (timeOffset === undefined && this.service.state.matches('playing')) {
            this.service.send({ type: 'PAUSE' });
        }
        if (typeof timeOffset === 'number') {
            this.play(timeOffset);
            this.service.send({ type: 'PAUSE' });
        }
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.add('rrweb-paused');
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Pause);
    };
    Replayer.prototype.resume = function (timeOffset) {
        if (timeOffset === void 0) { timeOffset = 0; }
        console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface.");
        this.play(timeOffset);
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Resume);
    };
    Replayer.prototype.startLive = function (baselineTime) {
        this.service.send({ type: 'TO_LIVE', payload: { baselineTime: baselineTime } });
    };
    Replayer.prototype.addEvent = function (rawEvent) {
        var _this = this;
        var event = this.config.unpackFn
            ? this.config.unpackFn(rawEvent)
            : rawEvent;
        Promise.resolve().then(function () {
            return _this.service.send({ type: 'ADD_EVENT', payload: { event: event } });
        });
    };
    Replayer.prototype.enableInteract = function () {
        this.iframe.setAttribute('scrolling', 'auto');
        this.iframe.style.pointerEvents = 'auto';
    };
    Replayer.prototype.disableInteract = function () {
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.style.pointerEvents = 'none';
    };
    Replayer.prototype.setupDom = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('replayer-wrapper');
        this.config.root.appendChild(this.wrapper);
        this.mouse = document.createElement('div');
        this.mouse.classList.add('replayer-mouse');
        this.wrapper.appendChild(this.mouse);
        if (this.config.mouseTail !== false) {
            this.mouseTail = document.createElement('canvas');
            this.mouseTail.classList.add('replayer-mouse-tail');
            this.mouseTail.style.display = 'inherit';
            this.wrapper.appendChild(this.mouseTail);
        }
        this.iframe = document.createElement('iframe');
        var attributes = ['allow-same-origin'];
        if (this.config.UNSAFE_replayCanvas) {
            attributes.push('allow-scripts');
        }
        this.iframe.style.display = 'none';
        this.iframe.setAttribute('sandbox', attributes.join(' '));
        this.disableInteract();
        this.wrapper.appendChild(this.iframe);
        if (this.iframe.contentWindow && this.iframe.contentDocument) {
            Object(_smoothscroll_js__WEBPACK_IMPORTED_MODULE_5__["polyfill"])(this.iframe.contentWindow, this.iframe.contentDocument);
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(this.iframe.contentWindow);
        }
    };
    Replayer.prototype.handleResize = function (dimension) {
        var e_3, _a;
        this.iframe.style.display = 'inherit';
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])([this.mouseTail, this.iframe]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                if (!el) {
                    continue;
                }
                el.setAttribute('width', String(dimension.width));
                el.setAttribute('height', String(dimension.height));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Replayer.prototype.getCastFn = function (event, isSync) {
        var _this = this;
        if (isSync === void 0) { isSync = false; }
        var castFn;
        switch (event.type) {
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].DomContentLoaded:
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Load:
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Custom:
                castFn = function () {
                    _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].CustomEvent, event);
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta:
                castFn = function () {
                    return _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Resize, {
                        width: event.data.width,
                        height: event.data.height,
                    });
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot:
                castFn = function () {
                    if (_this.firstPlayedEvent && _this.firstPlayedEvent === event) {
                        return;
                    }
                    _this.rebuildFullSnapshot(event, isSync);
                    _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot:
                castFn = function () {
                    var e_4, _a;
                    _this.applyIncremental(event, isSync);
                    if (isSync) {
                        return;
                    }
                    if (event === _this.nextUserInteractionEvent) {
                        _this.nextUserInteractionEvent = null;
                        _this.backToNormal();
                    }
                    if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
                        try {
                            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var _event = _c.value;
                                if (_event.timestamp <= event.timestamp) {
                                    continue;
                                }
                                if (_this.isUserInteraction(_event)) {
                                    if (_event.delay - event.delay >
                                        SKIP_TIME_THRESHOLD *
                                            _this.speedService.state.context.timer.speed) {
                                        _this.nextUserInteractionEvent = _event;
                                    }
                                    break;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        if (_this.nextUserInteractionEvent) {
                            var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
                            var payload = {
                                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), _this.config.maxSpeed),
                            };
                            _this.speedService.send({ type: 'FAST_FORWARD', payload: payload });
                            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].SkipStart, payload);
                        }
                    }
                };
                break;
        }
        var wrappedCastFn = function () {
            var e_5, _a;
            if (castFn) {
                castFn();
            }
            try {
                for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.config.plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var plugin = _c.value;
                    plugin.handler(event, isSync, { replayer: _this });
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            _this.service.send({ type: 'CAST_EVENT', payload: { event: event } });
            var last_index = _this.service.state.context.events.length - 1;
            if (event ===
                _this.service.state.context.events[last_index]) {
                var finish_1 = function () {
                    if (last_index < _this.service.state.context.events.length - 1) {
                        return;
                    }
                    _this.backToNormal();
                    _this.service.send('END');
                    _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Finish);
                };
                if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot &&
                    event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove &&
                    event.data.positions.length) {
                    setTimeout(function () {
                        finish_1();
                    }, Math.max(0, -event.data.positions[0].timeOffset + 50));
                }
                else {
                    finish_1();
                }
            }
        };
        return wrappedCastFn;
    };
    Replayer.prototype.rebuildFullSnapshot = function (event, isSync) {
        var e_6, _a;
        var _this = this;
        if (isSync === void 0) { isSync = false; }
        if (!this.iframe.contentDocument) {
            return console.warn('Looks like your replayer has been destroyed.');
        }
        if (Object.keys(this.legacy_missingNodeRetryMap).length) {
            console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
        }
        this.legacy_missingNodeRetryMap = {};
        var collected = [];
        this.mirror.map = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["rebuild"])(event.data.node, {
            doc: this.iframe.contentDocument,
            afterAppend: function (builtNode) {
                _this.collectIframeAndAttachDocument(collected, builtNode);
            },
        })[1];
        var _loop_1 = function (mutationInQueue, builtNode) {
            this_1.attachDocumentToIframe(mutationInQueue, builtNode);
            this_1.newDocumentQueue = this_1.newDocumentQueue.filter(function (m) { return m !== mutationInQueue; });
            if (builtNode.contentDocument) {
                var _a = builtNode.contentDocument, documentElement_1 = _a.documentElement, head_1 = _a.head;
                this_1.insertStyleRules(documentElement_1, head_1);
            }
        };
        var this_1 = this;
        try {
            for (var collected_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_1_1 = collected_1.next(); !collected_1_1.done; collected_1_1 = collected_1.next()) {
                var _b = collected_1_1.value, mutationInQueue = _b.mutationInQueue, builtNode = _b.builtNode;
                _loop_1(mutationInQueue, builtNode);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (collected_1_1 && !collected_1_1.done && (_a = collected_1.return)) _a.call(collected_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var _c = this.iframe.contentDocument, documentElement = _c.documentElement, head = _c.head;
        this.insertStyleRules(documentElement, head);
        if (!this.service.state.matches('playing')) {
            this.iframe.contentDocument
                .getElementsByTagName('html')[0]
                .classList.add('rrweb-paused');
        }
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].FullsnapshotRebuilded, event);
        if (!isSync) {
            this.waitForStylesheetLoad();
        }
        if (this.config.UNSAFE_replayCanvas) {
            this.preloadAllImages();
        }
    };
    Replayer.prototype.insertStyleRules = function (documentElement, head) {
        var styleEl = document.createElement('style');
        documentElement.insertBefore(styleEl, head);
        var injectStylesRules = Object(_styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.config.blockClass).concat(this.config.insertStyleRules);
        if (this.config.pauseAnimation) {
            injectStylesRules.push('html.rrweb-paused * { animation-play-state: paused !important; }');
        }
        for (var idx = 0; idx < injectStylesRules.length; idx++) {
            styleEl.sheet.insertRule(injectStylesRules[idx], idx);
        }
    };
    Replayer.prototype.attachDocumentToIframe = function (mutation, iframeEl) {
        var e_7, _a;
        var _this = this;
        var collected = [];
        if (!iframeEl.contentDocument) {
            var parent = iframeEl.parentNode;
            while (parent) {
                if (this.fragmentParentMap.has(parent)) {
                    var frag = parent;
                    var realParent = this.fragmentParentMap.get(frag);
                    this.restoreRealParent(frag, realParent);
                    break;
                }
                parent = parent.parentNode;
            }
        }
        Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
            doc: iframeEl.contentDocument,
            map: this.mirror.map,
            hackCss: true,
            skipChild: false,
            afterAppend: function (builtNode) {
                _this.collectIframeAndAttachDocument(collected, builtNode);
            },
        });
        var _loop_2 = function (mutationInQueue, builtNode) {
            this_2.attachDocumentToIframe(mutationInQueue, builtNode);
            this_2.newDocumentQueue = this_2.newDocumentQueue.filter(function (m) { return m !== mutationInQueue; });
            if (builtNode.contentDocument) {
                var _a = builtNode.contentDocument, documentElement = _a.documentElement, head = _a.head;
                this_2.insertStyleRules(documentElement, head);
            }
        };
        var this_2 = this;
        try {
            for (var collected_2 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_2_1 = collected_2.next(); !collected_2_1.done; collected_2_1 = collected_2.next()) {
                var _b = collected_2_1.value, mutationInQueue = _b.mutationInQueue, builtNode = _b.builtNode;
                _loop_2(mutationInQueue, builtNode);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (collected_2_1 && !collected_2_1.done && (_a = collected_2.return)) _a.call(collected_2);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    Replayer.prototype.collectIframeAndAttachDocument = function (collected, builtNode) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(builtNode)) {
            var mutationInQueue = this.newDocumentQueue.find(function (m) { return m.parentId === builtNode.__sn.id; });
            if (mutationInQueue) {
                collected.push({ mutationInQueue: mutationInQueue, builtNode: builtNode });
            }
        }
    };
    Replayer.prototype.waitForStylesheetLoad = function () {
        var _this = this;
        var _a;
        var head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;
        if (head) {
            var unloadSheets_1 = new Set();
            var timer_1;
            var beforeLoadState_1 = this.service.state;
            var stateHandler_1 = function () {
                beforeLoadState_1 = _this.service.state;
            };
            this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Start, stateHandler_1);
            this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Pause, stateHandler_1);
            var unsubscribe_1 = function () {
                _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Start, stateHandler_1);
                _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Pause, stateHandler_1);
            };
            head
                .querySelectorAll('link[rel="stylesheet"]')
                .forEach(function (css) {
                if (!css.sheet) {
                    unloadSheets_1.add(css);
                    css.addEventListener('load', function () {
                        unloadSheets_1.delete(css);
                        if (unloadSheets_1.size === 0 && timer_1 !== -1) {
                            if (beforeLoadState_1.matches('playing')) {
                                _this.play(_this.getCurrentTime());
                            }
                            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].LoadStylesheetEnd);
                            if (timer_1) {
                                window.clearTimeout(timer_1);
                            }
                            unsubscribe_1();
                        }
                    });
                }
            });
            if (unloadSheets_1.size > 0) {
                this.service.send({ type: 'PAUSE' });
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].LoadStylesheetStart);
                timer_1 = window.setTimeout(function () {
                    if (beforeLoadState_1.matches('playing')) {
                        _this.play(_this.getCurrentTime());
                    }
                    timer_1 = -1;
                    unsubscribe_1();
                }, this.config.loadTimeout);
            }
        }
    };
    Replayer.prototype.preloadAllImages = function () {
        var e_8, _a;
        var _this = this;
        var beforeLoadState = this.service.state;
        var stateHandler = function () {
            beforeLoadState = _this.service.state;
        };
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Start, stateHandler);
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Pause, stateHandler);
        var count = 0;
        var resolved = 0;
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event = _c.value;
                if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot &&
                    event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].CanvasMutation &&
                    event.data.property === 'drawImage' &&
                    typeof event.data.args[0] === 'string' &&
                    !this.imageMap.has(event)) {
                    count++;
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.createImageData(canvas.width, canvas.height);
                    var d = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                    d = JSON.parse(event.data.args[0]);
                    ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(imgd, 0, 0);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (count !== resolved) {
            this.service.send({ type: 'PAUSE' });
        }
    };
    Replayer.prototype.applyIncremental = function (e, isSync) {
        var _this = this;
        var _a, _b;
        var d = e.data;
        switch (d.source) {
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation: {
                if (isSync) {
                    d.adds.forEach(function (m) { return _this.treeIndex.add(m); });
                    d.texts.forEach(function (m) { return _this.treeIndex.text(m); });
                    d.attributes.forEach(function (m) { return _this.treeIndex.attribute(m); });
                    d.removes.forEach(function (m) { return _this.treeIndex.remove(m, _this.mirror); });
                }
                this.applyMutation(d, isSync);
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Drag:
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].TouchMove:
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove:
                if (isSync) {
                    var lastPosition = d.positions[d.positions.length - 1];
                    this.moveAndHover(d, lastPosition.x, lastPosition.y, lastPosition.id);
                }
                else {
                    d.positions.forEach(function (p) {
                        var action = {
                            doAction: function () {
                                _this.moveAndHover(d, p.x, p.y, p.id);
                            },
                            delay: p.timeOffset +
                                e.timestamp -
                                _this.service.state.context.baselineTime,
                        };
                        _this.timer.addAction(action);
                    });
                    this.timer.addAction({
                        doAction: function () { },
                        delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset),
                    });
                }
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseInteraction: {
                if (d.id === -1) {
                    break;
                }
                var event = new Event(_types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"][d.type].toLowerCase());
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].MouseInteraction, {
                    type: d.type,
                    target: target,
                });
                var triggerFocus = this.config.triggerFocus;
                switch (d.type) {
                    case _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"].Blur:
                        if ('blur' in target) {
                            target.blur();
                        }
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"].Focus:
                        if (triggerFocus && target.focus) {
                            target.focus({
                                preventScroll: true,
                            });
                        }
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"].Click:
                    case _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"].TouchStart:
                    case _types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"].TouchEnd:
                        if (!isSync) {
                            this.moveAndHover(d, d.x, d.y, d.id);
                            this.mouse.classList.remove('active');
                            void this.mouse.offsetWidth;
                            this.mouse.classList.add('active');
                        }
                        break;
                    default:
                        target.dispatchEvent(event);
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Scroll: {
                if (d.id === -1) {
                    break;
                }
                if (isSync) {
                    this.treeIndex.scroll(d);
                    break;
                }
                this.applyScroll(d);
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].ViewportResize:
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Resize, {
                    width: d.width,
                    height: d.height,
                });
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Input: {
                if (d.id === -1) {
                    break;
                }
                if (isSync) {
                    this.treeIndex.input(d);
                    break;
                }
                this.applyInput(d);
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MediaInteraction: {
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var mediaEl = target;
                try {
                    if (d.currentTime) {
                        mediaEl.currentTime = d.currentTime;
                    }
                    if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["MediaInteractions"].Pause) {
                        mediaEl.pause();
                    }
                    if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["MediaInteractions"].Play) {
                        mediaEl.play();
                    }
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn("Failed to replay media interactions: " + (error.message || error));
                    }
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].StyleSheetRule: {
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var styleEl = target;
                var parent = target.parentNode;
                var usingVirtualParent = this.fragmentParentMap.has(parent);
                var placeholderNode = void 0;
                if (usingVirtualParent) {
                    var domParent = this.fragmentParentMap.get(target.parentNode);
                    placeholderNode = document.createTextNode('');
                    parent.replaceChild(placeholderNode, target);
                    domParent.appendChild(target);
                }
                var styleSheet_1 = styleEl.sheet;
                if (d.adds) {
                    d.adds.forEach(function (_a) {
                        var rule = _a.rule, index = _a.index;
                        try {
                            var _index = index === undefined
                                ? undefined
                                : Math.min(index, styleSheet_1.rules.length);
                            try {
                                styleSheet_1.insertRule(rule, _index);
                            }
                            catch (e) {
                            }
                        }
                        catch (e) {
                        }
                    });
                }
                if (d.removes) {
                    d.removes.forEach(function (_a) {
                        var index = _a.index;
                        try {
                            styleSheet_1.deleteRule(index);
                        }
                        catch (e) {
                        }
                    });
                }
                if (usingVirtualParent && placeholderNode) {
                    parent.replaceChild(target, placeholderNode);
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].CanvasMutation: {
                if (!this.config.UNSAFE_replayCanvas) {
                    return;
                }
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                try {
                    var ctx = target.getContext('2d');
                    if (d.setter) {
                        ctx[d.property] = d.args[0];
                        return;
                    }
                    var original = ctx[d.property];
                    if (d.property === 'drawImage' && typeof d.args[0] === 'string') {
                        var image = this.imageMap.get(e);
                        d.args[0] = image;
                        original.apply(ctx, d.args);
                    }
                    else {
                        original.apply(ctx, d.args);
                    }
                }
                catch (error) {
                    this.warnCanvasMutationFailed(d, d.id, error);
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Font: {
                try {
                    var fontFace = new FontFace(d.family, d.buffer ? new Uint8Array(JSON.parse(d.fontSource)) : d.fontSource, d.descriptors);
                    (_b = this.iframe.contentDocument) === null || _b === void 0 ? void 0 : _b.fonts.add(fontFace);
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn(error);
                    }
                }
                break;
            }
        }
    };
    Replayer.prototype.applyMutation = function (d, useVirtualParent) {
        var e_9, _a;
        var _this = this;
        d.removes.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                return _this.warnNodeNotFound(d, mutation.id);
            }
            var parent = _this.mirror.getNode(mutation.parentId);
            if (!parent) {
                return _this.warnNodeNotFound(d, mutation.parentId);
            }
            if (mutation.isShadow && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasShadowRoot"])(parent)) {
                parent = parent.shadowRoot;
            }
            _this.mirror.removeNodeFromMap(target);
            if (parent) {
                var realParent = '__sn' in parent ? _this.fragmentParentMap.get(parent) : undefined;
                if (realParent && realParent.contains(target)) {
                    realParent.removeChild(target);
                }
                else if (_this.fragmentParentMap.has(target)) {
                    var realTarget = _this.fragmentParentMap.get(target);
                    parent.removeChild(realTarget);
                    _this.fragmentParentMap.delete(target);
                }
                else {
                    parent.removeChild(target);
                }
            }
        });
        var legacy_missingNodeMap = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.legacy_missingNodeRetryMap);
        var queue = [];
        var nextNotInDOM = function (mutation) {
            var next = null;
            if (mutation.nextId) {
                next = _this.mirror.getNode(mutation.nextId);
            }
            if (mutation.nextId !== null &&
                mutation.nextId !== undefined &&
                mutation.nextId !== -1 &&
                !next) {
                return true;
            }
            return false;
        };
        var appendNode = function (mutation) {
            var _a, _b;
            if (!_this.iframe.contentDocument) {
                return console.warn('Looks like your replayer has been destroyed.');
            }
            var parent = _this.mirror.getNode(mutation.parentId);
            if (!parent) {
                if (mutation.node.type === _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
                    return _this.newDocumentQueue.push(mutation);
                }
                return queue.push(mutation);
            }
            var parentInDocument = null;
            if (_this.iframe.contentDocument.contains) {
                parentInDocument = _this.iframe.contentDocument.contains(parent);
            }
            else if (_this.iframe.contentDocument.body.contains) {
                parentInDocument = _this.iframe.contentDocument.body.contains(parent);
            }
            var hasIframeChild = ((_b = (_a = parent).getElementsByTagName) === null || _b === void 0 ? void 0 : _b.call(_a, 'iframe').length) > 0;
            if (useVirtualParent &&
                parentInDocument &&
                !Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(parent) &&
                !hasIframeChild) {
                var virtualParent = document.createDocumentFragment();
                _this.mirror.map[mutation.parentId] = virtualParent;
                _this.fragmentParentMap.set(virtualParent, parent);
                _this.storeState(parent);
                while (parent.firstChild) {
                    virtualParent.appendChild(parent.firstChild);
                }
                parent = virtualParent;
            }
            if (mutation.node.isShadow && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasShadowRoot"])(parent)) {
                parent = parent.shadowRoot;
            }
            var previous = null;
            var next = null;
            if (mutation.previousId) {
                previous = _this.mirror.getNode(mutation.previousId);
            }
            if (mutation.nextId) {
                next = _this.mirror.getNode(mutation.nextId);
            }
            if (nextNotInDOM(mutation)) {
                return queue.push(mutation);
            }
            if (mutation.node.rootId && !_this.mirror.getNode(mutation.node.rootId)) {
                return;
            }
            var targetDoc = mutation.node.rootId
                ? _this.mirror.getNode(mutation.node.rootId)
                : _this.iframe.contentDocument;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(parent)) {
                _this.attachDocumentToIframe(mutation, parent);
                return;
            }
            var target = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
                doc: targetDoc,
                map: _this.mirror.map,
                skipChild: true,
                hackCss: true,
            });
            if (mutation.previousId === -1 || mutation.nextId === -1) {
                legacy_missingNodeMap[mutation.node.id] = {
                    node: target,
                    mutation: mutation,
                };
                return;
            }
            if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
                parent.insertBefore(target, previous.nextSibling);
            }
            else if (next && next.parentNode) {
                parent.contains(next)
                    ? parent.insertBefore(target, next)
                    : parent.insertBefore(target, null);
            }
            else {
                if (parent === targetDoc) {
                    while (targetDoc.firstChild) {
                        targetDoc.removeChild(targetDoc.firstChild);
                    }
                }
                parent.appendChild(target);
            }
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(target)) {
                var mutationInQueue_1 = _this.newDocumentQueue.find(function (m) { return m.parentId === target.__sn.id; });
                if (mutationInQueue_1) {
                    _this.attachDocumentToIframe(mutationInQueue_1, target);
                    _this.newDocumentQueue = _this.newDocumentQueue.filter(function (m) { return m !== mutationInQueue_1; });
                }
                if (target.contentDocument) {
                    var _c = target.contentDocument, documentElement = _c.documentElement, head = _c.head;
                    _this.insertStyleRules(documentElement, head);
                }
            }
            if (mutation.previousId || mutation.nextId) {
                _this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
            }
        };
        d.adds.forEach(function (mutation) {
            appendNode(mutation);
        });
        var startTime = Date.now();
        while (queue.length) {
            var resolveTrees = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["queueToResolveTrees"])(queue);
            queue.length = 0;
            if (Date.now() - startTime > 500) {
                this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
                break;
            }
            try {
                for (var resolveTrees_1 = (e_9 = void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolveTrees)), resolveTrees_1_1 = resolveTrees_1.next(); !resolveTrees_1_1.done; resolveTrees_1_1 = resolveTrees_1.next()) {
                    var tree = resolveTrees_1_1.value;
                    var parent = this.mirror.getNode(tree.value.parentId);
                    if (!parent) {
                        this.debug('Drop resolve tree since there is no parent for the root node.', tree);
                    }
                    else {
                        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["iterateResolveTree"])(tree, function (mutation) {
                            appendNode(mutation);
                        });
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (resolveTrees_1_1 && !resolveTrees_1_1.done && (_a = resolveTrees_1.return)) _a.call(resolveTrees_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        if (Object.keys(legacy_missingNodeMap).length) {
            Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
        }
        d.texts.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                return _this.warnNodeNotFound(d, mutation.id);
            }
            if (_this.fragmentParentMap.has(target)) {
                target = _this.fragmentParentMap.get(target);
            }
            target.textContent = mutation.value;
        });
        d.attributes.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                return _this.warnNodeNotFound(d, mutation.id);
            }
            if (_this.fragmentParentMap.has(target)) {
                target = _this.fragmentParentMap.get(target);
            }
            for (var attributeName in mutation.attributes) {
                if (typeof attributeName === 'string') {
                    var value = mutation.attributes[attributeName];
                    try {
                        if (value !== null) {
                            target.setAttribute(attributeName, value);
                        }
                        else {
                            target.removeAttribute(attributeName);
                        }
                    }
                    catch (error) {
                        if (_this.config.showWarning) {
                            console.warn('An error occurred may due to the checkout feature.', error);
                        }
                    }
                }
            }
        });
    };
    Replayer.prototype.applyScroll = function (d) {
        var target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        if (target === this.iframe.contentDocument) {
            this.iframe.contentWindow.scrollTo({
                top: d.y,
                left: d.x,
                behavior: 'smooth',
            });
        }
        else {
            try {
                target.scrollTop = d.y;
                target.scrollLeft = d.x;
            }
            catch (error) {
            }
        }
    };
    Replayer.prototype.applyInput = function (d) {
        var target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        try {
            target.checked = d.isChecked;
            target.value = d.text;
        }
        catch (error) {
        }
    };
    Replayer.prototype.legacy_resolveMissingNode = function (map, parent, target, targetMutation) {
        var previousId = targetMutation.previousId, nextId = targetMutation.nextId;
        var previousInMap = previousId && map[previousId];
        var nextInMap = nextId && map[nextId];
        if (previousInMap) {
            var _a = previousInMap, node = _a.node, mutation = _a.mutation;
            parent.insertBefore(node, target);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
        if (nextInMap) {
            var _b = nextInMap, node = _b.node, mutation = _b.mutation;
            parent.insertBefore(node, target.nextSibling);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
    };
    Replayer.prototype.moveAndHover = function (d, x, y, id) {
        var target = this.mirror.getNode(id);
        if (!target) {
            return this.debugNodeNotFound(d, id);
        }
        var base = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getBaseDimension"])(target, this.iframe);
        var _x = x * base.absoluteScale + base.x;
        var _y = y * base.absoluteScale + base.y;
        this.mouse.style.left = _x + "px";
        this.mouse.style.top = _y + "px";
        this.drawMouseTail({ x: _x, y: _y });
        this.hoverElements(target);
    };
    Replayer.prototype.drawMouseTail = function (position) {
        var _this = this;
        if (!this.mouseTail) {
            return;
        }
        var _a = this.config.mouseTail === true
            ? defaultMouseTailConfig
            : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail), lineCap = _a.lineCap, lineWidth = _a.lineWidth, strokeStyle = _a.strokeStyle, duration = _a.duration;
        var draw = function () {
            if (!_this.mouseTail) {
                return;
            }
            var ctx = _this.mouseTail.getContext('2d');
            if (!ctx || !_this.tailPositions.length) {
                return;
            }
            ctx.clearRect(0, 0, _this.mouseTail.width, _this.mouseTail.height);
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = lineCap;
            ctx.strokeStyle = strokeStyle;
            ctx.moveTo(_this.tailPositions[0].x, _this.tailPositions[0].y);
            _this.tailPositions.forEach(function (p) { return ctx.lineTo(p.x, p.y); });
            ctx.stroke();
        };
        this.tailPositions.push(position);
        draw();
        setTimeout(function () {
            _this.tailPositions = _this.tailPositions.filter(function (p) { return p !== position; });
            draw();
        }, duration / this.speedService.state.context.timer.speed);
    };
    Replayer.prototype.hoverElements = function (el) {
        var _a;
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach(function (hoveredEl) {
            hoveredEl.classList.remove(':hover');
        });
        var currentEl = el;
        while (currentEl) {
            if (currentEl.classList) {
                currentEl.classList.add(':hover');
            }
            currentEl = currentEl.parentElement;
        }
    };
    Replayer.prototype.isUserInteraction = function (event) {
        if (event.type !== _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot) {
            return false;
        }
        return (event.data.source > _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation &&
            event.data.source <= _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Input);
    };
    Replayer.prototype.backToNormal = function () {
        this.nextUserInteractionEvent = null;
        if (this.speedService.state.matches('normal')) {
            return;
        }
        this.speedService.send({ type: 'BACK_TO_NORMAL' });
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].SkipEnd, {
            speed: this.speedService.state.context.normalSpeed,
        });
    };
    Replayer.prototype.restoreRealParent = function (frag, parent) {
        this.mirror.map[parent.__sn.id] = parent;
        if (parent.__sn.type === _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
            parent.__sn.tagName === 'textarea' &&
            frag.textContent) {
            parent.value = frag.textContent;
        }
        parent.appendChild(frag);
        this.restoreState(parent);
    };
    Replayer.prototype.storeState = function (parent) {
        var e_10, _a;
        if (parent) {
            if (parent.nodeType === parent.ELEMENT_NODE) {
                var parentElement = parent;
                if (parentElement.scrollLeft || parentElement.scrollTop) {
                    this.elementStateMap.set(parent, {
                        scroll: [parentElement.scrollLeft, parentElement.scrollTop],
                    });
                }
                var children = parentElement.children;
                try {
                    for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        this.storeState(child);
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
        }
    };
    Replayer.prototype.restoreState = function (parent) {
        var e_11, _a;
        if (parent.nodeType === parent.ELEMENT_NODE) {
            var parentElement = parent;
            if (this.elementStateMap.has(parent)) {
                var storedState = this.elementStateMap.get(parent);
                if (storedState.scroll) {
                    parentElement.scrollLeft = storedState.scroll[0];
                    parentElement.scrollTop = storedState.scroll[1];
                }
                this.elementStateMap.delete(parent);
            }
            var children = parentElement.children;
            try {
                for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.restoreState(child);
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
    };
    Replayer.prototype.warnNodeNotFound = function (d, id) {
        this.warn("Node with id '" + id + "' not found in", d);
    };
    Replayer.prototype.warnCanvasMutationFailed = function (d, id, error) {
        this.warn("Has error on update canvas '" + id + "'", d, error);
    };
    Replayer.prototype.debugNodeNotFound = function (d, id) {
        this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '" + id + "' not found in", d);
    };
    Replayer.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.showWarning) {
            return;
        }
        console.warn.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])([REPLAY_CONSOLE_PREFIX], args));
    };
    Replayer.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.showDebug) {
            return;
        }
        console.log.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])([REPLAY_CONSOLE_PREFIX], args));
    };
    return Replayer;
}());




/***/ }),

/***/ "Hk3/":
/*!*********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/record/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ext/rrweb-snapshot/es/rrweb-snapshot.js */ "7oHR");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "/CRp");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "oyId");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer.js */ "D1P6");
/* harmony import */ var _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframe-manager.js */ "KSph");
/* harmony import */ var _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadow-dom-manager.js */ "As3v");








function wrapEvent(e) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, e), { timestamp: Date.now() });
}
var wrappedEmit;
var takeFullSnapshot;
var mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["createMirror"])();
function record(options) {
    if (options === void 0) { options = {}; }
    var emit = options.emit, checkoutEveryNms = options.checkoutEveryNms, checkoutEveryNth = options.checkoutEveryNth, _a = options.blockClass, blockClass = _a === void 0 ? 'rr-block' : _a, _b = options.blockSelector, blockSelector = _b === void 0 ? null : _b, _c = options.ignoreClass, ignoreClass = _c === void 0 ? 'rr-ignore' : _c, _d = options.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = options.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = options.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, maskAllInputs = options.maskAllInputs, _maskInputOptions = options.maskInputOptions, _slimDOMOptions = options.slimDOMOptions, maskInputFn = options.maskInputFn, maskTextFn = options.maskTextFn, hooks = options.hooks, packFn = options.packFn, _g = options.sampling, sampling = _g === void 0 ? {} : _g, mousemoveWait = options.mousemoveWait, _h = options.recordCanvas, recordCanvas = _h === void 0 ? false : _h, _j = options.collectFonts, collectFonts = _j === void 0 ? false : _j, plugins = options.plugins, _k = options.keepIframeSrcFn, keepIframeSrcFn = _k === void 0 ? function () { return false; } : _k;
    if (!emit) {
        throw new Error('emit function is required');
    }
    if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
        sampling.mousemove = mousemoveWait;
    }
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : _maskInputOptions !== undefined
            ? _maskInputOptions
            : { password: true };
    var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
        ? {
            script: true,
            comment: true,
            headFavicon: true,
            headWhitespace: true,
            headMetaSocial: true,
            headMetaRobots: true,
            headMetaHttpEquiv: true,
            headMetaVerification: true,
            headMetaAuthorship: _slimDOMOptions === 'all',
            headMetaDescKeywords: _slimDOMOptions === 'all',
        }
        : _slimDOMOptions
            ? _slimDOMOptions
            : {};
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])();
    var lastFullSnapshotEvent;
    var incrementalSnapshotCount = 0;
    wrappedEmit = function (e, isCheckout) {
        var _a;
        if (((_a = _observer_js__WEBPACK_IMPORTED_MODULE_4__["mutationBuffers"][0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
            e.type !== _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot &&
            !(e.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot &&
                e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation)) {
            _observer_js__WEBPACK_IMPORTED_MODULE_4__["mutationBuffers"].forEach(function (buf) { return buf.unfreeze(); });
        }
        emit((packFn ? packFn(e) : e), isCheckout);
        if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot) {
            lastFullSnapshotEvent = e;
            incrementalSnapshotCount = 0;
        }
        else if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot) {
            if (e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation &&
                e.data.isAttachIframe) {
                return;
            }
            incrementalSnapshotCount++;
            var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
            var exceedTime = checkoutEveryNms &&
                e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
            if (exceedCount || exceedTime) {
                takeFullSnapshot(true);
            }
        }
    };
    var wrappedMutationEmit = function (m) {
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation }, m),
        }));
    };
    var wrappedScrollEmit = function (p) {
        return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Scroll }, p),
        }));
    };
    var iframeManager = new _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__["IframeManager"]({
        mutationCb: wrappedMutationEmit,
    });
    var shadowDomManager = new _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__["ShadowDomManager"]({
        mutationCb: wrappedMutationEmit,
        scrollCb: wrappedScrollEmit,
        bypassOptions: {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            recordCanvas: recordCanvas,
            sampling: sampling,
            slimDOMOptions: slimDOMOptions,
            iframeManager: iframeManager,
        },
        mirror: mirror,
    });
    takeFullSnapshot = function (isCheckout) {
        var _a, _b, _c, _d;
        if (isCheckout === void 0) { isCheckout = false; }
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta,
            data: {
                href: window.location.href,
                width: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowWidth"])(),
                height: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])(),
            },
        }), isCheckout);
        _observer_js__WEBPACK_IMPORTED_MODULE_4__["mutationBuffers"].forEach(function (buf) { return buf.lock(); });
        var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["snapshot"])(document, {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskAllInputs: maskInputOptions,
            maskTextFn: maskTextFn,
            slimDOM: slimDOMOptions,
            recordCanvas: recordCanvas,
            onSerialize: function (n) {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(n)) {
                    iframeManager.addIframe(n);
                }
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasShadowRoot"])(n)) {
                    shadowDomManager.addShadowRoot(n.shadowRoot, document);
                }
            },
            onIframeLoad: function (iframe, childSn) {
                iframeManager.attachIframe(iframe, childSn);
            },
            keepIframeSrcFn: keepIframeSrcFn,
        }), 2), node = _e[0], idNodeMap = _e[1];
        if (!node) {
            return console.warn('Failed to snapshot the document');
        }
        mirror.map = idNodeMap;
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot,
            data: {
                node: node,
                initialOffset: {
                    left: window.pageXOffset !== undefined
                        ? window.pageXOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) || ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) || (document === null || document === void 0 ? void 0 : document.body.scrollLeft) ||
                            0,
                    top: window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) || ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) || (document === null || document === void 0 ? void 0 : document.body.scrollTop) ||
                            0,
                },
            },
        }));
        _observer_js__WEBPACK_IMPORTED_MODULE_4__["mutationBuffers"].forEach(function (buf) { return buf.unlock(); });
    };
    try {
        var handlers_1 = [];
        handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('DOMContentLoaded', function () {
            wrappedEmit(wrapEvent({
                type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].DomContentLoaded,
                data: {},
            }));
        }));
        var observe_1 = function (doc) {
            return Object(_observer_js__WEBPACK_IMPORTED_MODULE_4__["initObservers"])({
                mutationCb: wrappedMutationEmit,
                mousemoveCb: function (positions, source) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: {
                            source: source,
                            positions: positions,
                        },
                    }));
                },
                mouseInteractionCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseInteraction }, d),
                    }));
                },
                scrollCb: wrappedScrollEmit,
                viewportResizeCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].ViewportResize }, d),
                    }));
                },
                inputCb: function (v) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Input }, v),
                    }));
                },
                mediaInteractionCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MediaInteraction }, p),
                    }));
                },
                styleSheetRuleCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].StyleSheetRule }, r),
                    }));
                },
                canvasMutationCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].CanvasMutation }, p),
                    }));
                },
                fontCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Font }, p),
                    }));
                },
                blockClass: blockClass,
                ignoreClass: ignoreClass,
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskInputOptions: maskInputOptions,
                inlineStylesheet: inlineStylesheet,
                sampling: sampling,
                recordCanvas: recordCanvas,
                collectFonts: collectFonts,
                doc: doc,
                maskInputFn: maskInputFn,
                maskTextFn: maskTextFn,
                blockSelector: blockSelector,
                slimDOMOptions: slimDOMOptions,
                mirror: mirror,
                iframeManager: iframeManager,
                shadowDomManager: shadowDomManager,
                plugins: (plugins === null || plugins === void 0 ? void 0 : plugins.map(function (p) { return ({
                    observer: p.observer,
                    options: p.options,
                    callback: function (payload) {
                        return wrappedEmit(wrapEvent({
                            type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Plugin,
                            data: {
                                plugin: p.name,
                                payload: payload,
                            },
                        }));
                    },
                }); })) || [],
            }, hooks);
        };
        iframeManager.addLoadListener(function (iframeEl) {
            handlers_1.push(observe_1(iframeEl.contentDocument));
        });
        var init_1 = function () {
            takeFullSnapshot();
            handlers_1.push(observe_1(document));
        };
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
            init_1();
        }
        else {
            handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('load', function () {
                wrappedEmit(wrapEvent({
                    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Load,
                    data: {},
                }));
                init_1();
            }, window));
        }
        return function () {
            handlers_1.forEach(function (h) { return h(); });
        };
    }
    catch (error) {
        console.warn(error);
    }
}
record.addCustomEvent = function (tag, payload) {
    if (!wrappedEmit) {
        throw new Error('please add custom event after start recording');
    }
    wrappedEmit(wrapEvent({
        type: _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Custom,
        data: {
            tag: tag,
            payload: payload,
        },
    }));
};
record.freezePage = function () {
    _observer_js__WEBPACK_IMPORTED_MODULE_4__["mutationBuffers"].forEach(function (buf) { return buf.freeze(); });
};
record.takeFullSnapshot = function (isCheckout) {
    if (!takeFullSnapshot) {
        throw new Error('please take full snapshot after start recording');
    }
    takeFullSnapshot(isCheckout);
};
record.mirror = mirror;

/* harmony default export */ __webpack_exports__["default"] = (record);


/***/ }),

/***/ "KG/8":
/*!************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/record/mutation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ext/rrweb-snapshot/es/rrweb-snapshot.js */ "7oHR");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "oyId");




function isNodeInLinkedList(n) {
    return '__ln' in n;
}
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this.length = 0;
        this.head = null;
    }
    DoubleLinkedList.prototype.get = function (position) {
        if (position >= this.length) {
            throw new Error('Position outside of list range');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        return current;
    };
    DoubleLinkedList.prototype.addNode = function (n) {
        var node = {
            value: n,
            previous: null,
            next: null,
        };
        n.__ln = node;
        if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
            var current = n.previousSibling.__ln.next;
            node.next = current;
            node.previous = n.previousSibling.__ln;
            n.previousSibling.__ln.next = node;
            if (current) {
                current.previous = node;
            }
        }
        else if (n.nextSibling &&
            isNodeInLinkedList(n.nextSibling) &&
            n.nextSibling.__ln.previous) {
            var current = n.nextSibling.__ln.previous;
            node.previous = current;
            node.next = n.nextSibling.__ln;
            n.nextSibling.__ln.previous = node;
            if (current) {
                current.next = node;
            }
        }
        else {
            if (this.head) {
                this.head.previous = node;
            }
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    };
    DoubleLinkedList.prototype.removeNode = function (n) {
        var current = n.__ln;
        if (!this.head) {
            return;
        }
        if (!current.previous) {
            this.head = current.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        else {
            current.previous.next = current.next;
            if (current.next) {
                current.next.previous = current.previous;
            }
        }
        if (n.__ln) {
            delete n.__ln;
        }
        this.length--;
    };
    return DoubleLinkedList;
}());
var moveKey = function (id, parentId) { return id + "@" + parentId; };
function isINode(n) {
    return '__sn' in n;
}
var MutationBuffer = (function () {
    function MutationBuffer() {
        var _this = this;
        this.frozen = false;
        this.locked = false;
        this.texts = [];
        this.attributes = [];
        this.removes = [];
        this.mapRemoves = [];
        this.movedMap = {};
        this.addedSet = new Set();
        this.movedSet = new Set();
        this.droppedSet = new Set();
        this.processMutations = function (mutations) {
            mutations.forEach(_this.processMutation);
            _this.emit();
        };
        this.emit = function () {
            var e_1, _a, e_2, _b;
            if (_this.frozen || _this.locked) {
                return;
            }
            var adds = [];
            var addList = new DoubleLinkedList();
            var getNextId = function (n) {
                var ns = n;
                var nextId = _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"];
                while (nextId === _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"]) {
                    ns = ns && ns.nextSibling;
                    nextId = ns && _this.mirror.getId(ns);
                }
                if (nextId === -1 && Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(n.nextSibling, _this.blockClass)) {
                    nextId = null;
                }
                return nextId;
            };
            var pushAdd = function (n) {
                var _a;
                var shadowHost = n.getRootNode
                    ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host : null;
                var notInDoc = !_this.doc.contains(n) && !_this.doc.contains(shadowHost);
                if (!n.parentNode || notInDoc) {
                    return;
                }
                var parentId = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(n.parentNode)
                    ? _this.mirror.getId(shadowHost)
                    : _this.mirror.getId(n.parentNode);
                var nextId = getNextId(n);
                if (parentId === -1 || nextId === -1) {
                    return addList.addNode(n);
                }
                var sn = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["serializeNodeWithId"])(n, {
                    doc: _this.doc,
                    map: _this.mirror.map,
                    blockClass: _this.blockClass,
                    blockSelector: _this.blockSelector,
                    maskTextClass: _this.maskTextClass,
                    maskTextSelector: _this.maskTextSelector,
                    skipChild: true,
                    inlineStylesheet: _this.inlineStylesheet,
                    maskInputOptions: _this.maskInputOptions,
                    maskTextFn: _this.maskTextFn,
                    maskInputFn: _this.maskInputFn,
                    slimDOMOptions: _this.slimDOMOptions,
                    recordCanvas: _this.recordCanvas,
                    onSerialize: function (currentN) {
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIframeINode"])(currentN)) {
                            _this.iframeManager.addIframe(currentN);
                        }
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hasShadowRoot"])(n)) {
                            _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
                        }
                    },
                    onIframeLoad: function (iframe, childSn) {
                        _this.iframeManager.attachIframe(iframe, childSn);
                    },
                });
                if (sn) {
                    adds.push({
                        parentId: parentId,
                        nextId: nextId,
                        node: sn,
                    });
                }
            };
            while (_this.mapRemoves.length) {
                _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
            }
            try {
                for (var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var n = _d.value;
                    if (isParentRemoved(_this.removes, n, _this.mirror) &&
                        !_this.movedSet.has(n.parentNode)) {
                        continue;
                    }
                    pushAdd(n);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var n = _f.value;
                    if (!isAncestorInSet(_this.droppedSet, n) &&
                        !isParentRemoved(_this.removes, n, _this.mirror)) {
                        pushAdd(n);
                    }
                    else if (isAncestorInSet(_this.movedSet, n)) {
                        pushAdd(n);
                    }
                    else {
                        _this.droppedSet.add(n);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var candidate = null;
            while (addList.length) {
                var node = null;
                if (candidate) {
                    var parentId = _this.mirror.getId(candidate.value.parentNode);
                    var nextId = getNextId(candidate.value);
                    if (parentId !== -1 && nextId !== -1) {
                        node = candidate;
                    }
                }
                if (!node) {
                    for (var index = addList.length - 1; index >= 0; index--) {
                        var _node = addList.get(index);
                        var parentId = _this.mirror.getId(_node.value.parentNode);
                        var nextId = getNextId(_node.value);
                        if (parentId !== -1 && nextId !== -1) {
                            node = _node;
                            break;
                        }
                    }
                }
                if (!node) {
                    while (addList.head) {
                        addList.removeNode(addList.head.value);
                    }
                    break;
                }
                candidate = node.previous;
                addList.removeNode(node.value);
                pushAdd(node.value);
            }
            var payload = {
                texts: _this.texts
                    .map(function (text) { return ({
                    id: _this.mirror.getId(text.node),
                    value: text.value,
                }); })
                    .filter(function (text) { return _this.mirror.has(text.id); }),
                attributes: _this.attributes
                    .map(function (attribute) { return ({
                    id: _this.mirror.getId(attribute.node),
                    attributes: attribute.attributes,
                }); })
                    .filter(function (attribute) { return _this.mirror.has(attribute.id); }),
                removes: _this.removes,
                adds: adds,
            };
            if (!payload.texts.length &&
                !payload.attributes.length &&
                !payload.removes.length &&
                !payload.adds.length) {
                return;
            }
            _this.texts = [];
            _this.attributes = [];
            _this.removes = [];
            _this.addedSet = new Set();
            _this.movedSet = new Set();
            _this.droppedSet = new Set();
            _this.movedMap = {};
            _this.emissionCallback(payload);
        };
        this.processMutation = function (m) {
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(m.target)) {
                return;
            }
            switch (m.type) {
                case 'characterData': {
                    var value = m.target.textContent;
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) && value !== m.oldValue) {
                        _this.texts.push({
                            value: Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["needMaskingText"])(m.target, _this.maskTextClass, _this.maskTextSelector) && value
                                ? _this.maskTextFn
                                    ? _this.maskTextFn(value)
                                    : value.replace(/[\S]/g, '*')
                                : value,
                            node: m.target,
                        });
                    }
                    break;
                }
                case 'attributes': {
                    var value = m.target.getAttribute(m.attributeName);
                    if (m.attributeName === 'value') {
                        value = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
                            maskInputOptions: _this.maskInputOptions,
                            tagName: m.target.tagName,
                            type: m.target.getAttribute('type'),
                            value: value,
                            maskInputFn: _this.maskInputFn,
                        });
                    }
                    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) || value === m.oldValue) {
                        return;
                    }
                    var item = _this.attributes.find(function (a) { return a.node === m.target; });
                    if (!item) {
                        item = {
                            node: m.target,
                            attributes: {},
                        };
                        _this.attributes.push(item);
                    }
                    item.attributes[m.attributeName] = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["transformAttribute"])(_this.doc, m.target.tagName, m.attributeName, value);
                    break;
                }
                case 'childList': {
                    m.addedNodes.forEach(function (n) { return _this.genAdds(n, m.target); });
                    m.removedNodes.forEach(function (n) {
                        var nodeId = _this.mirror.getId(n);
                        var parentId = Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target)
                            ? _this.mirror.getId(m.target.host)
                            : _this.mirror.getId(m.target);
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(n, _this.blockClass) ||
                            Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) ||
                            Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
                            return;
                        }
                        if (_this.addedSet.has(n)) {
                            deepDelete(_this.addedSet, n);
                            _this.droppedSet.add(n);
                        }
                        else if (_this.addedSet.has(m.target) && nodeId === -1) ;
                        else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isAncestorRemoved"])(m.target, _this.mirror)) ;
                        else if (_this.movedSet.has(n) &&
                            _this.movedMap[moveKey(nodeId, parentId)]) {
                            deepDelete(_this.movedSet, n);
                        }
                        else {
                            _this.removes.push({
                                parentId: parentId,
                                id: nodeId,
                                isShadow: Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target) ? true : undefined,
                            });
                        }
                        _this.mapRemoves.push(n);
                    });
                    break;
                }
            }
        };
        this.genAdds = function (n, target) {
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(n, _this.blockClass)) {
                return;
            }
            if (target && Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, _this.blockClass)) {
                return;
            }
            if (isINode(n)) {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
                    return;
                }
                _this.movedSet.add(n);
                var targetId = null;
                if (target && isINode(target)) {
                    targetId = target.__sn.id;
                }
                if (targetId) {
                    _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
                }
            }
            else {
                _this.addedSet.add(n);
                _this.droppedSet.delete(n);
            }
            n.childNodes.forEach(function (childN) { return _this.genAdds(childN); });
        };
    }
    MutationBuffer.prototype.init = function (cb, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, maskInputFn, recordCanvas, slimDOMOptions, doc, mirror, iframeManager, shadowDomManager) {
        this.blockClass = blockClass;
        this.blockSelector = blockSelector;
        this.maskTextClass = maskTextClass;
        this.maskTextSelector = maskTextSelector;
        this.inlineStylesheet = inlineStylesheet;
        this.maskInputOptions = maskInputOptions;
        this.maskTextFn = maskTextFn;
        this.maskInputFn = maskInputFn;
        this.recordCanvas = recordCanvas;
        this.slimDOMOptions = slimDOMOptions;
        this.emissionCallback = cb;
        this.doc = doc;
        this.mirror = mirror;
        this.iframeManager = iframeManager;
        this.shadowDomManager = shadowDomManager;
    };
    MutationBuffer.prototype.freeze = function () {
        this.frozen = true;
    };
    MutationBuffer.prototype.unfreeze = function () {
        this.frozen = false;
        this.emit();
    };
    MutationBuffer.prototype.isFrozen = function () {
        return this.frozen;
    };
    MutationBuffer.prototype.lock = function () {
        this.locked = true;
    };
    MutationBuffer.prototype.unlock = function () {
        this.locked = false;
        this.emit();
    };
    return MutationBuffer;
}());
function deepDelete(addsSet, n) {
    addsSet.delete(n);
    n.childNodes.forEach(function (childN) { return deepDelete(addsSet, childN); });
}
function isParentRemoved(removes, n, mirror) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    var parentId = mirror.getId(parentNode);
    if (removes.some(function (r) { return r.id === parentId; })) {
        return true;
    }
    return isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    if (set.has(parentNode)) {
        return true;
    }
    return isAncestorInSet(set, parentNode);
}

/* harmony default export */ __webpack_exports__["default"] = (MutationBuffer);


/***/ }),

/***/ "KSph":
/*!******************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/record/iframe-manager.js ***!
  \******************************************************************/
/*! exports provided: IframeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeManager", function() { return IframeManager; });
var IframeManager = (function () {
    function IframeManager(options) {
        this.iframes = new WeakMap();
        this.mutationCb = options.mutationCb;
    }
    IframeManager.prototype.addIframe = function (iframeEl) {
        this.iframes.set(iframeEl, true);
    };
    IframeManager.prototype.addLoadListener = function (cb) {
        this.loadListener = cb;
    };
    IframeManager.prototype.attachIframe = function (iframeEl, childSn) {
        var _a;
        this.mutationCb({
            adds: [
                {
                    parentId: iframeEl.__sn.id,
                    nextId: null,
                    node: childSn,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true,
        });
        (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
    };
    return IframeManager;
}());




/***/ }),

/***/ "LDqC":
/*!***************************************************!*\
  !*** ./src/app/rr-web/rr-web/rr-web.component.ts ***!
  \***************************************************/
/*! exports provided: RrWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrWebComponent", function() { return RrWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rrweb */ "TIPy");
/* harmony import */ var src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rrweb.service */ "Tza9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RrWebComponent {
    constructor(rrwebService, elementRef) {
        this.rrwebService = rrwebService;
        this.elementRef = elementRef;
        this.events = [];
    }
    ngOnInit() {
        // this.startRecord();
    }
    test1() {
        console.log('test1');
    }
    test2() {
        console.log('test2');
    }
    test3() {
        console.log('test3');
    }
    startRecord() {
        // this.recorder = rrweb.record({
        //   emit: function (event) {
        //     // 将事件发送到服务器或存储在本地
        //     this.events.push(event);
        //     console.log(event);
        //   }.bind(this), // 使用bind确保正确的this上下文
        //   checkoutEveryNms: 1000, // 每隔1秒生成一个新的事件
        // });
        this.recorder = rrweb__WEBPACK_IMPORTED_MODULE_1__["record"]({
            emit: (event) => {
                // 将事件发送到服务器或存储在本地
                // this.events.push(event);
                this.rrwebService.events.push(event);
                if (this.rrwebService.events.length > 30) {
                    // 当事件数量大于 100 时停止录制
                    this.recorder();
                }
                console.log(event);
            },
            checkoutEveryNms: 1000,
        });
    }
    palyr() {
        const targetElement = this.elementRef.nativeElement.querySelector('#rrwebContainer');
        // 启动重放器
        this.replayer = new rrweb__WEBPACK_IMPORTED_MODULE_1__["Replayer"](this.events, {
            root: targetElement,
            skipInactive: false,
        });
        // 重放保存的事件
        this.replayer.loadEvents( /* 获取保存的事件的方法 */);
        this.replayer.play();
        console.log('startRecord', 'rrweb');
    }
    stop() {
        console.log(this.recorder, '111');
        console.log(rrweb__WEBPACK_IMPORTED_MODULE_1__);
        // this.recorder.stop();
    }
    ngOnDestroy() {
        // 停止记录器
        // this.recorder.stop();
    }
}
RrWebComponent.ɵfac = function RrWebComponent_Factory(t) { return new (t || RrWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__["RrwebService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RrWebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RrWebComponent, selectors: [["app-rr-web"]], decls: 18, vars: 0, consts: [[1, "main"], ["routerLink", "/rrweb/play"], [2, "display", "flex"], [1, "title", 2, "width", "100px", 3, "click"], [1, "center", 2, "width", "100px", 3, "click"], [1, "footer", 2, "width", "100px", 3, "click"], [3, "click"]], template: function RrWebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rr-web works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_6_listener() { return ctx.test1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_8_listener() { return ctx.test2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_10_listener() { return ctx.test3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_12_listener() { return ctx.startRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5F55\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_14_listener() { return ctx.palyr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u56DE\u653E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RrWebComponent_Template_div_click_16_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u505C\u6B62");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JyLXdlYi9yci13ZWIvcnItd2ViLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RrWebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rr-web',
                templateUrl: './rr-web.component.html',
                styleUrls: ['./rr-web.component.scss']
            }]
    }], function () { return [{ type: src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__["RrwebService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "MZwm":
/*!*************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/plugins/console/replay/index.js ***!
  \*************************************************************************/
/*! exports provided: getReplayConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return getReplayConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "/CRp");
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../record/index.js */ "/EhK");




var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
var defaultLogConfig = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    replayLogger: undefined,
};
var LogReplayPlugin = (function () {
    function LogReplayPlugin(config) {
        this.config = Object.assign(defaultLogConfig, config);
    }
    LogReplayPlugin.prototype.getConsoleLogger = function () {
        var e_1, _a;
        var _this = this;
        var replayLogger = {};
        var _loop_1 = function (level) {
            if (level === 'trace') {
                replayLogger[level] = function (data) {
                    var logger = console.log[ORIGINAL_ATTRIBUTE_NAME]
                        ? console.log[ORIGINAL_ATTRIBUTE_NAME]
                        : console.log;
                    logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(data.payload.map(function (s) { return JSON.parse(s); }), [_this.formatMessage(data)]));
                };
            }
            else {
                replayLogger[level] = function (data) {
                    var logger = console[level][ORIGINAL_ATTRIBUTE_NAME]
                        ? console[level][ORIGINAL_ATTRIBUTE_NAME]
                        : console[level];
                    logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(data.payload.map(function (s) { return JSON.parse(s); }), [_this.formatMessage(data)]));
                };
            }
        };
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.config.level), _c = _b.next(); !_c.done; _c = _b.next()) {
                var level = _c.value;
                _loop_1(level);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return replayLogger;
    };
    LogReplayPlugin.prototype.formatMessage = function (data) {
        if (data.trace.length === 0) {
            return '';
        }
        var stackPrefix = '\n\tat ';
        var result = stackPrefix;
        result += data.trace.join(stackPrefix);
        return result;
    };
    return LogReplayPlugin;
}());
var getReplayConsolePlugin = function (options) {
    var replayLogger = (options === null || options === void 0 ? void 0 : options.replayLogger) || new LogReplayPlugin(options).getConsoleLogger();
    return {
        handler: function (event, _isSync, context) {
            var logData = null;
            if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].IncrementalSnapshot &&
                event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].Log) {
                logData = event.data;
            }
            else if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].Plugin &&
                event.data.plugin === _record_index_js__WEBPACK_IMPORTED_MODULE_2__["PLUGIN_NAME"]) {
                logData = event.data.payload;
            }
            if (logData) {
                try {
                    if (typeof replayLogger[logData.level] === 'function') {
                        replayLogger[logData.level](logData);
                    }
                }
                catch (error) {
                    if (context.replayer.config.showWarning) {
                        console.warn(error);
                    }
                }
            }
        },
    };
};




/***/ }),

/***/ "NMCL":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/replay/styles/inject-style.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rules = function (blockClass) { return [
    "." + blockClass + " { background: #ccc }",
    'noscript { display: none !important; }',
]; };

/* harmony default export */ __webpack_exports__["default"] = (rules);


/***/ }),

/***/ "R8qc":
/*!***************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js ***!
  \***************************************************************/
/*! exports provided: strFromU8, strToU8, unzlibSync, zlibSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strFromU8", function() { return strFromU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToU8", function() { return strToU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlibSync", function() { return unzlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlibSync", function() { return zlibSync; });
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
            r[j] = ((j - b[i]) << 5) | i;
        }
    }
    return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = (function (cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for (; i < s; ++i)
        ++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
        le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = (i << 4) | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    }
    else {
        co = new u16(s);
        for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
    }
    return co;
});
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
    flt[i] = 8;
for (var i = 144; i < 256; ++i)
    flt[i] = 9;
for (var i = 256; i < 280; ++i)
    flt[i] = 7;
for (var i = 280; i < 288; ++i)
    flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
// fixed length map
var flm = hMap(flt, 9, 0), flrm = hMap(flt, 9, 1);
// fixed distance map
var fdm = hMap(fdt, 5, 0), fdrm = hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
};
// get end of byte
var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
    if (s == null || s < 0)
        s = 0;
    if (e == null || e > v.length)
        e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st)
        st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf)
        buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function (l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    if (final && !lm)
        return buf;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                if (t > sl) {
                    if (noSt)
                        throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf)
                    cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            }
            else if (type == 1)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for (var i = 0; i < hcLen; ++i) {
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts)
                    break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for (var i = 0; i < tl;) {
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    }
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16)
                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17)
                            n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18)
                            n = 11 + bits(dat, pos, 127), pos += 7;
                        while (n--)
                            ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            }
            else
                throw 'invalid block type';
            if (pos > tbts)
                throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf)
            cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while (noSt || pos + mxa < tbts) {
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
                throw 'unexpected EOF';
            if (!c)
                throw 'invalid length/literal';
            if (sym < 256)
                buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            }
            else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d)
                    throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                }
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (noBuf)
                    cbuf(bt + 131072);
                var end = bt + add;
                for (; bt < end; bt += 4) {
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
    // Need extra info to make a tree
    var t = [];
    for (var i = 0; i < d.length; ++i) {
        if (d[i])
            t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
        return [new u8(0), 0];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [v, 1];
    }
    t.sort(function (a, b) { return a.f - b.f; });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
            maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
        for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << (mbt - tr[i2_1]));
                tr[i2_1] = mb;
            }
            else
                break;
        }
        dt >>>= lft;
        while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb)
                dt -= 1 << (mb - tr[i2_2]++ - 1);
            else
                ++i;
        }
        for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
    return n.s == -1
        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
        : (l[n.s] = d);
};
// length codes generation
var lc = function (c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while (s && !c[--s])
        ;
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function (v) { cl[cli++] = v; };
    for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
            ++cls;
        else {
            if (!cln && cls > 2) {
                for (; cls > 138; cls -= 138)
                    w(32754);
                if (cls > 2) {
                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                    cls = 0;
                }
            }
            else if (cls > 3) {
                w(cln), --cls;
                for (; cls > 6; cls -= 6)
                    w(8304);
                if (cls > 2)
                    w(((cls - 3) << 5) | 8208), cls = 0;
            }
            while (cls--)
                w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
        lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
        lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
    var flen = (bl + 5) << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
            wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15)
                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
            }
        }
    }
    else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
        if (syms[i] > 255) {
            var len = (syms[i] >>> 18) & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7)
                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3)
                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
        }
        else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for (var i = 0; i <= s; i += 65535) {
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            }
            else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for (; i < s; ++i) {
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for (var j = 0; j < 286; ++j)
                        lf[j] = 0;
                    for (var j = 0; j < 30; ++j)
                        df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while (dif <= maxd && --ch_1 && imod != pimod) {
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                ;
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn)
                                    break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for (var j = 0; j < mmd; ++j) {
                                    var ti = (i - dif + j + 32768) & 32767;
                                    var pti = prev[ti];
                                    var cd = (ti - pti + 32768) & 32767;
                                    if (cd > md)
                                        md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += (imod - pimod + 32768) & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                }
                else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst)
            pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = new u32(256);
for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
        c = ((c & 1) && 0xEDB88320) ^ (c >>> 1);
    crct[i] = c;
}
// Alder32
var adler = function () {
    var a = 1, b = 0;
    return {
        p: function (d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for (var i = 0; i != l;) {
                var e = Math.min(i + 5552, l);
                for (; i < e; ++i)
                    n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
    };
};
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
};
// write bytes
var wbytes = function (d, b, v) {
    for (; v; ++b)
        d[b] = v, v >>>= 8;
};
// zlib header
var zlh = function (c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
};
// zlib valid
var zlv = function (d) {
    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
        throw 'invalid zlib data';
    if (d[1] & 32)
        throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined')
        return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function (v) { ar[ai++] = v; };
    for (var i = 0; i < l; ++i) {
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + ((l - i) << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1)
            w(c);
        else if (c < 2048)
            w(192 | (c >>> 6)), w(128 | (c & 63));
        else if (c > 55295 && c < 57344)
            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        else
            w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
    }
    return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined')
        return new TextDecoder().decode(dat);
    for (var i = 0; i < dat.length;) {
        var c = dat[i++];
        if (c < 128 || latin1)
            r += String.fromCharCode(c);
        else if (c < 224)
            r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
        else if (c < 240)
            r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
        else
            c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
    }
    return r;
}




/***/ }),

/***/ "TIPy":
/*!********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/entries/all.js ***!
  \********************************************************/
/*! exports provided: EventType, IncrementalSource, MouseInteractions, ReplayerEvents, utils, mirror, record, Replayer, addCustomEvent, freezePage, pack, unpack, PLUGIN_NAME, getRecordConsolePlugin, getReplayConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "/CRp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["ReplayerEvents"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "oyId");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__["_mirror"]; });

/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../record/index.js */ "Hk3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../replay/index.js */ "DQJ2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_3__["Replayer"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "ft1B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return _index_js__WEBPACK_IMPORTED_MODULE_4__["addCustomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return _index_js__WEBPACK_IMPORTED_MODULE_4__["freezePage"]; });

/* harmony import */ var _packer_pack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../packer/pack.js */ "AwHt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _packer_pack_js__WEBPACK_IMPORTED_MODULE_5__["pack"]; });

/* harmony import */ var _packer_unpack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../packer/unpack.js */ "ATd1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return _packer_unpack_js__WEBPACK_IMPORTED_MODULE_6__["unpack"]; });

/* harmony import */ var _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugins/console/record/index.js */ "/EhK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_7__["PLUGIN_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_7__["getRecordConsolePlugin"]; });

/* harmony import */ var _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugins/console/replay/index.js */ "MZwm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_8__["getReplayConsolePlugin"]; });














/***/ }),

/***/ "Tza9":
/*!******************************************!*\
  !*** ./src/app/service/rrweb.service.ts ***!
  \******************************************/
/*! exports provided: RrwebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrwebService", function() { return RrwebService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RrwebService {
    constructor() {
        this.events = [];
    }
}
RrwebService.ɵfac = function RrwebService_Factory(t) { return new (t || RrwebService)(); };
RrwebService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RrwebService, factory: RrwebService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RrwebService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WX7R":
/*!***********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/replay/machine.js ***!
  \***********************************************************/
/*! exports provided: createPlayerService, createSpeedService, discardPriorSnapshots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerService", function() { return createPlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpeedService", function() { return createSpeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardPriorSnapshots", function() { return discardPriorSnapshots; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ "/CRp");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "oyId");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ "vJR0");
/* harmony import */ var _ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ext/@xstate/fsm/es/index.js */ "qpeq");






function discardPriorSnapshots(events, baselineTime) {
    for (var idx = events.length - 1; idx >= 0; idx--) {
        var event = events[idx];
        if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].Meta) {
            if (event.timestamp <= baselineTime) {
                return events.slice(idx);
            }
        }
    }
    return events;
}
function createPlayerService(context, _a) {
    var getCastFn = _a.getCastFn, emitter = _a.emitter;
    var playerMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["createMachine"])({
        id: 'player',
        context: context,
        initial: 'paused',
        states: {
            playing: {
                on: {
                    PAUSE: {
                        target: 'paused',
                        actions: ['pause'],
                    },
                    CAST_EVENT: {
                        target: 'playing',
                        actions: 'castEvent',
                    },
                    END: {
                        target: 'paused',
                        actions: ['resetLastPlayedEvent', 'pause'],
                    },
                    ADD_EVENT: {
                        target: 'playing',
                        actions: ['addEvent'],
                    },
                },
            },
            paused: {
                on: {
                    PLAY: {
                        target: 'playing',
                        actions: ['recordTimeOffset', 'play'],
                    },
                    CAST_EVENT: {
                        target: 'paused',
                        actions: 'castEvent',
                    },
                    TO_LIVE: {
                        target: 'live',
                        actions: ['startLive'],
                    },
                    ADD_EVENT: {
                        target: 'paused',
                        actions: ['addEvent'],
                    },
                },
            },
            live: {
                on: {
                    ADD_EVENT: {
                        target: 'live',
                        actions: ['addEvent'],
                    },
                    CAST_EVENT: {
                        target: 'live',
                        actions: ['castEvent'],
                    },
                },
            },
        },
    }, {
        actions: {
            castEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])({
                lastPlayedEvent: function (ctx, event) {
                    if (event.type === 'CAST_EVENT') {
                        return event.payload.event;
                    }
                    return ctx.lastPlayedEvent;
                },
            }),
            recordTimeOffset: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])(function (ctx, event) {
                var timeOffset = ctx.timeOffset;
                if ('payload' in event && 'timeOffset' in event.payload) {
                    timeOffset = event.payload.timeOffset;
                }
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { timeOffset: timeOffset, baselineTime: ctx.events[0].timestamp + timeOffset });
            }),
            play: function (ctx) {
                var e_1, _a, e_2, _b;
                var _c;
                var timer = ctx.timer, events = ctx.events, baselineTime = ctx.baselineTime, lastPlayedEvent = ctx.lastPlayedEvent;
                timer.clear();
                try {
                    for (var events_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                        var event = events_1_1.value;
                        Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event, baselineTime);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var neededEvents = discardPriorSnapshots(events, baselineTime);
                var lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;
                if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].IncrementalSnapshot &&
                    lastPlayedEvent.data.source === _types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].MouseMove) {
                    lastPlayedTimestamp =
                        lastPlayedEvent.timestamp + ((_c = lastPlayedEvent.data.positions[0]) === null || _c === void 0 ? void 0 : _c.timeOffset);
                }
                if (baselineTime < (lastPlayedTimestamp || 0)) {
                    emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].PlayBack);
                }
                var actions = new Array();
                var _loop_1 = function (event) {
                    if (lastPlayedTimestamp &&
                        lastPlayedTimestamp < baselineTime &&
                        (event.timestamp <= lastPlayedTimestamp ||
                            event === lastPlayedEvent)) {
                        return "continue";
                    }
                    var isSync = event.timestamp < baselineTime;
                    if (isSync && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["needCastInSyncMode"])(event)) {
                        return "continue";
                    }
                    var castFn = getCastFn(event, isSync);
                    if (isSync) {
                        castFn();
                    }
                    else {
                        actions.push({
                            doAction: function () {
                                castFn();
                                emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].EventCast, event);
                            },
                            delay: event.delay,
                        });
                    }
                };
                try {
                    for (var neededEvents_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(neededEvents), neededEvents_1_1 = neededEvents_1.next(); !neededEvents_1_1.done; neededEvents_1_1 = neededEvents_1.next()) {
                        var event = neededEvents_1_1.value;
                        _loop_1(event);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (neededEvents_1_1 && !neededEvents_1_1.done && (_b = neededEvents_1.return)) _b.call(neededEvents_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].Flush);
                timer.addActions(actions);
                timer.start();
            },
            pause: function (ctx) {
                ctx.timer.clear();
            },
            resetLastPlayedEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])(function (ctx) {
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { lastPlayedEvent: null });
            }),
            startLive: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])({
                baselineTime: function (ctx, event) {
                    ctx.timer.toggleLiveMode(true);
                    ctx.timer.start();
                    if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
                        return event.payload.baselineTime;
                    }
                    return Date.now();
                },
            }),
            addEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])(function (ctx, machineEvent) {
                var baselineTime = ctx.baselineTime, timer = ctx.timer, events = ctx.events;
                if (machineEvent.type === 'ADD_EVENT') {
                    var event_1 = machineEvent.payload.event;
                    Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event_1, baselineTime);
                    var end = events.length - 1;
                    if (!events[end] || events[end].timestamp <= event_1.timestamp) {
                        events.push(event_1);
                    }
                    else {
                        var insertionIndex = -1;
                        var start = 0;
                        while (start <= end) {
                            var mid = Math.floor((start + end) / 2);
                            if (events[mid].timestamp <= event_1.timestamp) {
                                start = mid + 1;
                            }
                            else {
                                end = mid - 1;
                            }
                        }
                        if (insertionIndex === -1) {
                            insertionIndex = start;
                        }
                        events.splice(insertionIndex, 0, event_1);
                    }
                    var isSync = event_1.timestamp < baselineTime;
                    var castFn_1 = getCastFn(event_1, isSync);
                    if (isSync) {
                        castFn_1();
                    }
                    else if (timer.isActive()) {
                        timer.addAction({
                            doAction: function () {
                                castFn_1();
                                emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].EventCast, event_1);
                            },
                            delay: event_1.delay,
                        });
                    }
                }
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { events: events });
            }),
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["interpret"])(playerMachine);
}
function createSpeedService(context) {
    var speedMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["createMachine"])({
        id: 'speed',
        context: context,
        initial: 'normal',
        states: {
            normal: {
                on: {
                    FAST_FORWARD: {
                        target: 'skipping',
                        actions: ['recordSpeed', 'setSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
            skipping: {
                on: {
                    BACK_TO_NORMAL: {
                        target: 'normal',
                        actions: ['restoreSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
        },
    }, {
        actions: {
            setSpeed: function (ctx, event) {
                if ('payload' in event) {
                    ctx.timer.setSpeed(event.payload.speed);
                }
            },
            recordSpeed: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["assign"])({
                normalSpeed: function (ctx) { return ctx.timer.speed; },
            }),
            restoreSpeed: function (ctx) {
                ctx.timer.setSpeed(ctx.normalSpeed);
            },
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_4__["interpret"])(speedMachine);
}




/***/ }),

/***/ "ft1B":
/*!**************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/index.js ***!
  \**************************************************/
/*! exports provided: EventType, IncrementalSource, MouseInteractions, ReplayerEvents, utils, mirror, record, Replayer, addCustomEvent, freezePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return addCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return freezePage; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "/CRp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["ReplayerEvents"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "oyId");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__["_mirror"]; });

/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record/index.js */ "Hk3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replay/index.js */ "DQJ2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_3__["Replayer"]; });









var addCustomEvent = _record_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].addCustomEvent;
var freezePage = _record_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].freezePage;




/***/ }),

/***/ "gPRL":
/*!*****************************************!*\
  !*** ./src/app/rr-web/rr-web.module.ts ***!
  \*****************************************/
/*! exports provided: RrWebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrWebModule", function() { return RrWebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rr_web_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rr-web-routing.module */ "hfXA");
/* harmony import */ var _rr_web_rr_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rr-web/rr-web.component */ "LDqC");
/* harmony import */ var _playrrweb_playrrweb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playrrweb/playrrweb.component */ "ibJr");






class RrWebModule {
}
RrWebModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RrWebModule });
RrWebModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RrWebModule_Factory(t) { return new (t || RrWebModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rr_web_routing_module__WEBPACK_IMPORTED_MODULE_2__["RrWebRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RrWebModule, { declarations: [_rr_web_rr_web_component__WEBPACK_IMPORTED_MODULE_3__["RrWebComponent"], _playrrweb_playrrweb_component__WEBPACK_IMPORTED_MODULE_4__["PlayrrwebComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rr_web_routing_module__WEBPACK_IMPORTED_MODULE_2__["RrWebRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RrWebModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rr_web_rr_web_component__WEBPACK_IMPORTED_MODULE_3__["RrWebComponent"], _playrrweb_playrrweb_component__WEBPACK_IMPORTED_MODULE_4__["PlayrrwebComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rr_web_routing_module__WEBPACK_IMPORTED_MODULE_2__["RrWebRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "gTw5":
/*!************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js ***!
  \************************************************************/
/*! exports provided: __assign, __read, __spread, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}




/***/ }),

/***/ "hfXA":
/*!*************************************************!*\
  !*** ./src/app/rr-web/rr-web-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RrWebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrWebRoutingModule", function() { return RrWebRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playrrweb_playrrweb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playrrweb/playrrweb.component */ "ibJr");
/* harmony import */ var _rr_web_rr_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rr-web/rr-web.component */ "LDqC");






const routes = [
    {
        path: '',
        component: _rr_web_rr_web_component__WEBPACK_IMPORTED_MODULE_3__["RrWebComponent"],
    },
    {
        path: 'play',
        component: _playrrweb_playrrweb_component__WEBPACK_IMPORTED_MODULE_2__["PlayrrwebComponent"],
    }
];
class RrWebRoutingModule {
}
RrWebRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RrWebRoutingModule });
RrWebRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RrWebRoutingModule_Factory(t) { return new (t || RrWebRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RrWebRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RrWebRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ibJr":
/*!*********************************************************!*\
  !*** ./src/app/rr-web/playrrweb/playrrweb.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayrrwebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayrrwebComponent", function() { return PlayrrwebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rrweb */ "TIPy");
/* harmony import */ var src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rrweb.service */ "Tza9");




class PlayrrwebComponent {
    constructor(rrwebService, elementRef) {
        this.rrwebService = rrwebService;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        console.log(this.rrwebService.events, 'init');
    }
    playrecord() {
        if (this.rrwebService.events.length < 2) {
            return;
        }
        // console.log(this.rrwebService.events, 'playrecord');
        // this.replayer.play();
        const targetElement = this.elementRef.nativeElement.querySelector('#rrwebContainer');
        // 启动重放器
        this.replayer = new rrweb__WEBPACK_IMPORTED_MODULE_1__["Replayer"](this.rrwebService.events, {
            root: targetElement,
            skipInactive: false,
        });
        // 重放保存的事件
        // this.replayer.loadEvents(/* 获取保存的事件的方法 */);
        this.replayer.play();
        console.log('startRecord', 'rrweb');
    }
}
PlayrrwebComponent.ɵfac = function PlayrrwebComponent_Factory(t) { return new (t || PlayrrwebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__["RrwebService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PlayrrwebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayrrwebComponent, selectors: [["app-playrrweb"]], decls: 4, vars: 0, consts: [[3, "click"], ["id", "rrwebContainer"]], template: function PlayrrwebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayrrwebComponent_Template_p_click_1_listener() { return ctx.playrecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "playrrweb works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JyLXdlYi9wbGF5cnJ3ZWIvcGxheXJyd2ViLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayrrwebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playrrweb',
                templateUrl: './playrrweb.component.html',
                styleUrls: ['./playrrweb.component.scss']
            }]
    }], function () { return [{ type: src_app_service_rrweb_service__WEBPACK_IMPORTED_MODULE_2__["RrwebService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "l3hQ":
/*!********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/packer/base.js ***!
  \********************************************************/
/*! exports provided: MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK", function() { return MARK; });
var MARK = 'v1';




/***/ }),

/***/ "nd5x":
/*!**************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/plugins/console/record/error-stack-parser.js ***!
  \**************************************************************************************/
/*! exports provided: ErrorStackParser, StackFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStackParser", function() { return ErrorStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackFrame", function() { return StackFrame; });
var StackFrame = (function () {
    function StackFrame(obj) {
        this.fileName = obj.fileName || '';
        this.functionName = obj.functionName || '';
        this.lineNumber = obj.lineNumber;
        this.columnNumber = obj.columnNumber;
    }
    StackFrame.prototype.toString = function () {
        var lineNumber = this.lineNumber || '';
        var columnNumber = this.columnNumber || '';
        if (this.functionName) {
            return (this.functionName +
                ' (' +
                this.fileName +
                ':' +
                lineNumber +
                ':' +
                columnNumber +
                ')');
        }
        return this.fileName + ':' + lineNumber + ':' + columnNumber;
    };
    return StackFrame;
}());
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var ErrorStackParser = {
    parse: function (error) {
        if (typeof error.stacktrace !== 'undefined' ||
            typeof error['opera#sourceloc'] !== 'undefined') {
            return this.parseOpera(error);
        }
        else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
        }
        else if (error.stack) {
            return this.parseFFOrSafari(error);
        }
        else {
            throw new Error('Cannot parse given Error object');
        }
    },
    extractLocation: function (urlLike) {
        if (urlLike.indexOf(':') === -1) {
            return [urlLike];
        }
        var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
        if (!parts)
            throw new Error("Cannot parse given url: " + urlLike);
        return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf('(eval ') > -1) {
                line = line
                    .replace(/eval code/g, 'eval')
                    .replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            }
            var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');
            var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
            sanitizedLine = location
                ? sanitizedLine.replace(location[0], '')
                : sanitizedLine;
            var tokens = sanitizedLine.split(/\s+/).slice(1);
            var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
            var functionName = tokens.join(' ') || undefined;
            var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1
                ? undefined
                : locationParts[0];
            return new StackFrame({
                functionName: functionName,
                fileName: fileName,
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
    parseFFOrSafari: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf(' > eval') > -1) {
                line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
            }
            if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                return new StackFrame({
                    functionName: line,
                });
            }
            else {
                var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                var matches = line.match(functionNameRegex);
                var functionName = matches && matches[1] ? matches[1] : undefined;
                var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
                return new StackFrame({
                    functionName: functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                });
            }
        }, this);
    },
    parseOpera: function (e) {
        if (!e.stacktrace ||
            (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
            return this.parseOpera9(e);
        }
        else if (!e.stack) {
            return this.parseOpera10(e);
        }
        else {
            return this.parseOpera11(e);
        }
    },
    parseOpera9: function (e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split('\n');
        var result = [];
        for (var i = 2, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera10: function (e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split('\n');
        var result = [];
        for (var i = 0, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    functionName: match[3] || undefined,
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera11: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return (!!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
                !line.match(/^Error created at/));
        }, this);
        return filtered.map(function (line) {
            var tokens = line.split('@');
            var locationParts = this.extractLocation(tokens.pop());
            var functionCall = tokens.shift() || '';
            var functionName = functionCall
                .replace(/<anonymous function(: (\w+))?>/, '$2')
                .replace(/\([^)]*\)/g, '') || undefined;
            return new StackFrame({
                functionName: functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
};




/***/ }),

/***/ "oyId":
/*!**************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/utils.js ***!
  \**************************************************/
/*! exports provided: TreeIndex, _mirror, createMirror, getBaseDimension, getWindowHeight, getWindowWidth, hasShadowRoot, hookSetter, isAncestorRemoved, isBlocked, isIframeINode, isIgnored, isTouchEvent, iterateResolveTree, needCastInSyncMode, on, patch, polyfill, queueToResolveTrees, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeIndex", function() { return TreeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mirror", function() { return _mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirror", function() { return createMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseDimension", function() { return getBaseDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShadowRoot", function() { return hasShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookSetter", function() { return hookSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAncestorRemoved", function() { return isAncestorRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlocked", function() { return isBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIframeINode", function() { return isIframeINode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIgnored", function() { return isIgnored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateResolveTree", function() { return iterateResolveTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needCastInSyncMode", function() { return needCastInSyncMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueToResolveTrees", function() { return queueToResolveTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ext/tslib/tslib.es6.js */ "gTw5");
/* harmony import */ var _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ext/rrweb-snapshot/es/rrweb-snapshot.js */ "7oHR");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "/CRp");




function on(type, fn, target) {
    if (target === void 0) { target = document; }
    var options = { capture: true, passive: true };
    target.addEventListener(type, fn, options);
    return function () { return target.removeEventListener(type, fn, options); };
}
function createMirror() {
    return {
        map: {},
        getId: function (n) {
            if (!n.__sn) {
                return -1;
            }
            return n.__sn.id;
        },
        getNode: function (id) {
            return this.map[id] || null;
        },
        removeNodeFromMap: function (n) {
            var _this = this;
            var id = n.__sn && n.__sn.id;
            delete this.map[id];
            if (n.childNodes) {
                n.childNodes.forEach(function (child) {
                    return _this.removeNodeFromMap(child);
                });
            }
        },
        has: function (id) {
            return this.map.hasOwnProperty(id);
        },
        reset: function () {
            this.map = {};
        },
    };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
    '\r\n' +
    'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
    '\r\n' +
    'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
    map: {},
    getId: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get: function (target, prop, receiver) {
            if (prop === 'map') {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}
function throttle(func, wait, options) {
    if (options === void 0) { options = {}; }
    var timeout = null;
    var previous = 0;
    return function (arg) {
        var now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        var context = this;
        var args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                window.clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = window.setTimeout(function () {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked, win) {
    if (win === void 0) { win = window; }
    var original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked
        ? d
        : {
            set: function (value) {
                var _this = this;
                setTimeout(function () {
                    d.set.call(_this, value);
                }, 0);
                if (original && original.set) {
                    original.set.call(this, value);
                }
            },
        });
    return function () { return hookSetter(target, key, original || {}, true); };
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return function () { };
        }
        var original_1 = source[name];
        var wrapped = replacement(original_1);
        if (typeof wrapped === 'function') {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original_1,
                },
            });
        }
        source[name] = wrapped;
        return function () {
            source[name] = original_1;
        };
    }
    catch (_a) {
        return function () { };
    }
}
function getWindowHeight() {
    return (window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight));
}
function getWindowWidth() {
    return (window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth));
}
function isBlocked(node, blockClass) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        var needBlock_1 = false;
        if (typeof blockClass === 'string') {
            needBlock_1 = node.classList.contains(blockClass);
        }
        else {
            node.classList.forEach(function (className) {
                if (blockClass.test(className)) {
                    needBlock_1 = true;
                }
            });
        }
        return needBlock_1 || isBlocked(node.parentNode, blockClass);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return isBlocked(node.parentNode, blockClass);
    }
    return isBlocked(node.parentNode, blockClass);
}
function isIgnored(n) {
    if ('__sn' in n) {
        return n.__sn.id === _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"];
    }
    return false;
}
function isAncestorRemoved(target, mirror) {
    if (Object(_ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(target)) {
        return false;
    }
    var id = mirror.getId(target);
    if (!mirror.has(id)) {
        return true;
    }
    if (target.parentNode &&
        target.parentNode.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!target.parentNode) {
        return true;
    }
    return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill(win) {
    if (win === void 0) { win = window; }
    if ('NodeList' in win && !win.NodeList.prototype.forEach) {
        win.NodeList.prototype.forEach = Array.prototype
            .forEach;
    }
    if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
        win.DOMTokenList.prototype.forEach = Array.prototype
            .forEach;
    }
    if (!Node.prototype.contains) {
        Node.prototype.contains = function contains(node) {
            if (!(0 in arguments)) {
                throw new TypeError('1 argument is required');
            }
            do {
                if (this === node) {
                    return true;
                }
            } while ((node = node && node.parentNode));
            return false;
        };
    }
}
function needCastInSyncMode(event) {
    switch (event.type) {
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].DomContentLoaded:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Load:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Custom:
            return false;
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Plugin:
            return true;
    }
    switch (event.data.source) {
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseInteraction:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].TouchMove:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MediaInteraction:
            return false;
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].ViewportResize:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].StyleSheetRule:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Scroll:
        case _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Input:
            return true;
    }
    return true;
}
var TreeIndex = (function () {
    function TreeIndex() {
        this.reset();
    }
    TreeIndex.prototype.add = function (mutation) {
        var parentTreeNode = this.indexes.get(mutation.parentId);
        var treeNode = {
            id: mutation.node.id,
            mutation: mutation,
            children: [],
            texts: [],
            attributes: [],
        };
        if (!parentTreeNode) {
            this.tree[treeNode.id] = treeNode;
        }
        else {
            treeNode.parent = parentTreeNode;
            parentTreeNode.children[treeNode.id] = treeNode;
        }
        this.indexes.set(treeNode.id, treeNode);
    };
    TreeIndex.prototype.remove = function (mutation, mirror) {
        var _this = this;
        var parentTreeNode = this.indexes.get(mutation.parentId);
        var treeNode = this.indexes.get(mutation.id);
        var deepRemoveFromMirror = function (id) {
            _this.removeIdSet.add(id);
            var node = mirror.getNode(id);
            node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
                if ('__sn' in childNode) {
                    deepRemoveFromMirror(childNode.__sn.id);
                }
            });
        };
        var deepRemoveFromTreeIndex = function (node) {
            _this.removeIdSet.add(node.id);
            Object.values(node.children).forEach(function (n) { return deepRemoveFromTreeIndex(n); });
            var _treeNode = _this.indexes.get(node.id);
            if (_treeNode) {
                var _parentTreeNode = _treeNode.parent;
                if (_parentTreeNode) {
                    delete _treeNode.parent;
                    delete _parentTreeNode.children[_treeNode.id];
                    _this.indexes.delete(mutation.id);
                }
            }
        };
        if (!treeNode) {
            this.removeNodeMutations.push(mutation);
            deepRemoveFromMirror(mutation.id);
        }
        else if (!parentTreeNode) {
            delete this.tree[treeNode.id];
            this.indexes.delete(treeNode.id);
            deepRemoveFromTreeIndex(treeNode);
        }
        else {
            delete treeNode.parent;
            delete parentTreeNode.children[treeNode.id];
            this.indexes.delete(mutation.id);
            deepRemoveFromTreeIndex(treeNode);
        }
    };
    TreeIndex.prototype.text = function (mutation) {
        var treeNode = this.indexes.get(mutation.id);
        if (treeNode) {
            treeNode.texts.push(mutation);
        }
        else {
            this.textMutations.push(mutation);
        }
    };
    TreeIndex.prototype.attribute = function (mutation) {
        var treeNode = this.indexes.get(mutation.id);
        if (treeNode) {
            treeNode.attributes.push(mutation);
        }
        else {
            this.attributeMutations.push(mutation);
        }
    };
    TreeIndex.prototype.scroll = function (d) {
        this.scrollMap.set(d.id, d);
    };
    TreeIndex.prototype.input = function (d) {
        this.inputMap.set(d.id, d);
    };
    TreeIndex.prototype.flush = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        var _c = this, tree = _c.tree, removeNodeMutations = _c.removeNodeMutations, textMutations = _c.textMutations, attributeMutations = _c.attributeMutations;
        var batchMutationData = {
            source: _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation,
            removes: removeNodeMutations,
            texts: textMutations,
            attributes: attributeMutations,
            adds: [],
        };
        var walk = function (treeNode, removed) {
            if (removed) {
                _this.removeIdSet.add(treeNode.id);
            }
            batchMutationData.texts = batchMutationData.texts
                .concat(removed ? [] : treeNode.texts)
                .filter(function (m) { return !_this.removeIdSet.has(m.id); });
            batchMutationData.attributes = batchMutationData.attributes
                .concat(removed ? [] : treeNode.attributes)
                .filter(function (m) { return !_this.removeIdSet.has(m.id); });
            if (!_this.removeIdSet.has(treeNode.id) &&
                !_this.removeIdSet.has(treeNode.mutation.parentId) &&
                !removed) {
                batchMutationData.adds.push(treeNode.mutation);
                if (treeNode.children) {
                    Object.values(treeNode.children).forEach(function (n) { return walk(n, false); });
                }
            }
            else {
                Object.values(treeNode.children).forEach(function (n) { return walk(n, true); });
            }
        };
        Object.values(tree).forEach(function (n) { return walk(n, false); });
        try {
            for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.scrollMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var id = _e.value;
                if (this.removeIdSet.has(id)) {
                    this.scrollMap.delete(id);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.inputMap.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
                var id = _g.value;
                if (this.removeIdSet.has(id)) {
                    this.inputMap.delete(id);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var scrollMap = new Map(this.scrollMap);
        var inputMap = new Map(this.inputMap);
        this.reset();
        return {
            mutationData: batchMutationData,
            scrollMap: scrollMap,
            inputMap: inputMap,
        };
    };
    TreeIndex.prototype.reset = function () {
        this.tree = [];
        this.indexes = new Map();
        this.removeNodeMutations = [];
        this.textMutations = [];
        this.attributeMutations = [];
        this.removeIdSet = new Set();
        this.scrollMap = new Map();
        this.inputMap = new Map();
    };
    return TreeIndex;
}());
function queueToResolveTrees(queue) {
    var e_3, _a;
    var queueNodeMap = {};
    var putIntoMap = function (m, parent) {
        var nodeInTree = {
            value: m,
            parent: parent,
            children: [],
        };
        queueNodeMap[m.node.id] = nodeInTree;
        return nodeInTree;
    };
    var queueNodeTrees = [];
    try {
        for (var queue_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
            var mutation = queue_1_1.value;
            var nextId = mutation.nextId, parentId = mutation.parentId;
            if (nextId && nextId in queueNodeMap) {
                var nextInTree = queueNodeMap[nextId];
                if (nextInTree.parent) {
                    var idx = nextInTree.parent.children.indexOf(nextInTree);
                    nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
                }
                else {
                    var idx = queueNodeTrees.indexOf(nextInTree);
                    queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
                }
                continue;
            }
            if (parentId in queueNodeMap) {
                var parentInTree = queueNodeMap[parentId];
                parentInTree.children.push(putIntoMap(mutation, parentInTree));
                continue;
            }
            queueNodeTrees.push(putIntoMap(mutation, null));
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
    cb(tree.value);
    for (var i = tree.children.length - 1; i >= 0; i--) {
        iterateResolveTree(tree.children[i], cb);
    }
}
function isIframeINode(node) {
    if ('__sn' in node) {
        return (node.__sn.type === _ext_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element && node.__sn.tagName === 'iframe');
    }
    return false;
}
function getBaseDimension(node, rootIframe) {
    var _a, _b;
    var frameElement = (_b = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.frameElement;
    if (!frameElement || frameElement === rootIframe) {
        return {
            x: 0,
            y: 0,
            relativeScale: 1,
            absoluteScale: 1,
        };
    }
    var frameDimension = frameElement.getBoundingClientRect();
    var frameBaseDimension = getBaseDimension(frameElement, rootIframe);
    var relativeScale = frameDimension.height / frameElement.clientHeight;
    return {
        x: frameDimension.x * frameBaseDimension.relativeScale +
            frameBaseDimension.x,
        y: frameDimension.y * frameBaseDimension.relativeScale +
            frameBaseDimension.y,
        relativeScale: relativeScale,
        absoluteScale: frameBaseDimension.absoluteScale * relativeScale,
    };
}
function hasShadowRoot(n) {
    var _a;
    return Boolean((_a = n) === null || _a === void 0 ? void 0 : _a.shadowRoot);
}




/***/ }),

/***/ "qpeq":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js ***!
  \*****************************************************************/
/*! exports provided: InterpreterStatus, assign, createMachine, interpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterStatus", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return f; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t;!function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped";}(t||(t={}));var n={type:"xstate.init"};function e(t){return void 0===t?[]:[].concat(t)}function r(t){return {type:"xstate.assign",assignment:t}}function i(t,n){return "string"==typeof(t="string"==typeof t&&n&&n[t]?n[t]:t)?{type:t}:"function"==typeof t?{type:t.name,exec:t}:t}function o(t){return function(n){return t===n}}function a(t){return "string"==typeof t?{type:t}:t}function u(t,n){return {value:t,context:n,actions:[],changed:!1,matches:o(t)}}function c(t,n){void 0===n&&(n={});var r={config:t,_options:n,initialState:{value:t.initial,actions:e(t.states[t.initial].entry).map((function(t){return i(t,n.actions)})),context:t.context,matches:o(t.initial)},transition:function(n,c){var s,f,v="string"==typeof n?{value:n,context:t.context}:n,l=v.value,p=v.context,g=a(c),y=t.states[l];if(y.on){var d=e(y.on[g.type]),x=function(n){if(void 0===n)return {value:u(l,p)};var e="string"==typeof n?{target:n}:n,a=e.target,c=void 0===a?l:a,s=e.actions,f=void 0===s?[]:s,v=e.cond,d=p;if((void 0===v?function(){return !0}:v)(p,g)){var x=t.states[c],m=!1,h=[].concat(y.exit,f,x.entry).filter((function(t){return t})).map((function(t){return i(t,r._options.actions)})).filter((function(t){if("xstate.assign"===t.type){m=!0;var n=Object.assign({},d);return "function"==typeof t.assignment?n=t.assignment(d,g):Object.keys(t.assignment).forEach((function(e){n[e]="function"==typeof t.assignment[e]?t.assignment[e](d,g):t.assignment[e];})),d=n,!1}return !0}));return {value:{value:c,context:d,actions:h,changed:c!==l||h.length>0||m,matches:o(c)}}}};try{for(var m=function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],e=0;return n?n.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}}(d),h=m.next();!h.done;h=m.next()){var S=x(h.value);if("object"==typeof S)return S.value}}catch(t){s={error:t};}finally{try{h&&!h.done&&(f=m.return)&&f.call(m);}finally{if(s)throw s.error}}}return u(l,p)}};return r}var s=function(t,n){return t.actions.forEach((function(e){var r=e.exec;return r&&r(t.context,n)}))};function f(e){var r=e.initialState,i=t.NotStarted,u=new Set,c={_machine:e,send:function(n){i===t.Running&&(r=e.transition(r,n),s(r,a(n)),u.forEach((function(t){return t(r)})));},subscribe:function(t){return u.add(t),t(r),{unsubscribe:function(){return u.delete(t)}}},start:function(a){if(a){var u="object"==typeof a?a:{context:e.config.context,value:a};r={value:u.value,actions:[],context:u.context,matches:o(u.value)};}return i=t.Running,s(r,n),c},stop:function(){return i=t.Stopped,u.clear(),c},get state(){return r},get status(){return i}};return c}




/***/ }),

/***/ "uWcg":
/*!*****************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/plugins/console/record/stringify.js ***!
  \*****************************************************************************/
/*! exports provided: stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
function pathToSelector(node) {
    if (!node || !node.outerHTML) {
        return '';
    }
    var path = '';
    while (node.parentElement) {
        var name = node.localName;
        if (!name) {
            break;
        }
        name = name.toLowerCase();
        var parent = node.parentElement;
        var domSiblings = [];
        if (parent.children && parent.children.length > 0) {
            for (var i = 0; i < parent.children.length; i++) {
                var sibling = parent.children[i];
                if (sibling.localName && sibling.localName.toLowerCase) {
                    if (sibling.localName.toLowerCase() === name) {
                        domSiblings.push(sibling);
                    }
                }
            }
        }
        if (domSiblings.length > 1) {
            name += ':eq(' + domSiblings.indexOf(node) + ')';
        }
        path = name + (path ? '>' + path : '');
        node = parent;
    }
    return path;
}
function stringify(obj, stringifyOptions) {
    var options = {
        numOfKeysLimit: 50,
    };
    Object.assign(options, stringifyOptions);
    var stack = [];
    var keys = [];
    return JSON.stringify(obj, function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) {
                if (stack[0] === value) {
                    value = '[Circular ~]';
                }
                else {
                    value =
                        '[Circular ~.' +
                            keys.slice(0, stack.indexOf(value)).join('.') +
                            ']';
                }
            }
        }
        else {
            stack.push(value);
        }
        if (value === null || value === undefined) {
            return value;
        }
        if (shouldToString(value)) {
            return toString(value);
        }
        if (value instanceof Event) {
            var eventResult = {};
            for (var eventKey in value) {
                var eventValue = value[eventKey];
                if (Array.isArray(eventValue)) {
                    eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
                }
                else {
                    eventResult[eventKey] = eventValue;
                }
            }
            return eventResult;
        }
        else if (value instanceof Node) {
            if (value instanceof HTMLElement) {
                return value ? value.outerHTML : '';
            }
            return value.nodeName;
        }
        return value;
    });
    function shouldToString(_obj) {
        if (typeof _obj === 'object' &&
            Object.keys(_obj).length > options.numOfKeysLimit) {
            return true;
        }
        if (typeof _obj === 'function') {
            return true;
        }
        return false;
    }
    function toString(_obj) {
        var str = _obj.toString();
        if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
            str = str.slice(0, options.stringLengthLimit) + "...";
        }
        return str;
    }
}




/***/ }),

/***/ "vJR0":
/*!*********************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/replay/timer.js ***!
  \*********************************************************/
/*! exports provided: Timer, addDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDelay", function() { return addDelay; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "/CRp");


var Timer = (function () {
    function Timer(actions, speed) {
        if (actions === void 0) { actions = []; }
        this.timeOffset = 0;
        this.raf = null;
        this.actions = actions;
        this.speed = speed;
    }
    Timer.prototype.addAction = function (action) {
        var index = this.findActionIndex(action);
        this.actions.splice(index, 0, action);
    };
    Timer.prototype.addActions = function (actions) {
        this.actions = this.actions.concat(actions);
    };
    Timer.prototype.start = function () {
        this.timeOffset = 0;
        var lastTimestamp = performance.now();
        var actions = this.actions;
        var self = this;
        function check() {
            var time = performance.now();
            self.timeOffset += (time - lastTimestamp) * self.speed;
            lastTimestamp = time;
            while (actions.length) {
                var action = actions[0];
                if (self.timeOffset >= action.delay) {
                    actions.shift();
                    action.doAction();
                }
                else {
                    break;
                }
            }
            if (actions.length > 0 || self.liveMode) {
                self.raf = requestAnimationFrame(check);
            }
        }
        this.raf = requestAnimationFrame(check);
    };
    Timer.prototype.clear = function () {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
        this.actions.length = 0;
    };
    Timer.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Timer.prototype.toggleLiveMode = function (mode) {
        this.liveMode = mode;
    };
    Timer.prototype.isActive = function () {
        return this.raf !== null;
    };
    Timer.prototype.findActionIndex = function (action) {
        var start = 0;
        var end = this.actions.length - 1;
        while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            if (this.actions[mid].delay < action.delay) {
                start = mid + 1;
            }
            else if (this.actions[mid].delay > action.delay) {
                end = mid - 1;
            }
            else {
                return mid;
            }
        }
        return start;
    };
    return Timer;
}());
function addDelay(event, baselineTime) {
    if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"].IncrementalSnapshot &&
        event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"].MouseMove) {
        var firstOffset = event.data.positions[0].timeOffset;
        var firstTimestamp = event.timestamp + firstOffset;
        event.delay = firstTimestamp - baselineTime;
        return firstTimestamp - baselineTime;
    }
    event.delay = event.timestamp - baselineTime;
    return event.delay;
}




/***/ }),

/***/ "wCtE":
/*!**************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);


/***/ }),

/***/ "wqC1":
/*!****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/src/replay/smoothscroll.js ***!
  \****************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
function polyfill(w, d) {
    if (w === void 0) { w = window; }
    if (d === void 0) { d = document; }
    if ('scrollBehavior' in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true) {
        return;
    }
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;
    var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView,
    };
    var now = w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;
    function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    function shouldBailOut(firstArg) {
        if (firstArg === null ||
            typeof firstArg !== 'object' ||
            firstArg.behavior === undefined ||
            firstArg.behavior === 'auto' ||
            firstArg.behavior === 'instant') {
            return true;
        }
        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            return false;
        }
        throw new TypeError('behavior member of ScrollOptions ' +
            firstArg.behavior +
            ' is not a valid value for enumeration ScrollBehavior.');
    }
    function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }
        if (axis === 'X') {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
    }
    function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
    }
    function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
    }
    function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
        }
        return el;
    }
    function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;
        elapsed = elapsed > 1 ? 1 : elapsed;
        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY);
        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }
    function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();
        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        }
        else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }
        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y,
        });
    }
    w.scroll = w.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : w.scrollY || w.pageYOffset);
            return;
        }
        smoothScroll.call(w, d.body, arguments[0].left !== undefined
            ? ~~arguments[0].left
            : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
            ? ~~arguments[0].top
            : w.scrollY || w.pageYOffset);
    };
    w.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : 0, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : 0);
            return;
        }
        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value could not be converted');
            }
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? ~~arguments[0]
                    : this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top
                : arguments[1] !== undefined
                    ? ~~arguments[1]
                    : this.scrollTop);
            return;
        }
        var left = arguments[0].left;
        var top = arguments[0].top;
        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };
    Element.prototype.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left + this.scrollLeft
                : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top + this.scrollTop
                : ~~arguments[1] + this.scrollTop);
            return;
        }
        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior,
        });
    };
    Element.prototype.scrollIntoView = function () {
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
        }
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();
        if (scrollableParent !== d.body) {
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth',
                });
            }
        }
        else {
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth',
            });
        }
    };
}




/***/ })

}]);
//# sourceMappingURL=rr-web-rr-web-module.js.map