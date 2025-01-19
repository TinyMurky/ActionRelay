import { g as getAugmentedNamespace, C as CDPSession, D as Deferred$1, U as UnsupportedOperation, T as TargetCloseError, E as EventEmitter$1, a as CallbackRegistry, b as assert$1, d as debugError, c as debug, e as DisposableStack, f as disposeSymbol, i as inertIfDisposed, t as throwIfDisposed, h as Dialog, J as JSHandle, j as environment, A as AsyncIterableUtil, k as ElementHandle, l as bindIsolatedHandle, s as stringifyFunction, m as interpolateFunction, S as SecurityDetails, H as HTTPResponse, n as invokeAtMostOnceForArguments, o as HTTPRequest, p as stringToBase64, q as handleError, r as STATUS_TEXTS, u as isPlainObject, v as isRegExp, w as isDate, P as PuppeteerURL, x as ProtocolError, y as TimeoutError, R as Realm$2, z as scriptInjector, B as getSourceUrlComment, F as getSourcePuppeteerURLIfAvailable, G as isString, L as LazyArg, I as ARIAQueryHandler, K as SOURCE_URL_REGEX, W as WebWorker, M as of, N as combineLatest, O as fromEmitterEvent, Q as map, V as first, X as raceWith, Y as timeout, Z as Accessibility, _ as ConsoleMessage, $ as defer, a0 as filter, a1 as isErrorLike, a2 as firstValueFrom, a3 as race, a4 as switchMap, a5 as delayWhen, a6 as fromAbortSignal, a7 as Frame, a8 as throwIfDetached, a9 as Keyboard, aa as Mouse, ab as MouseButton, ac as Touchscreen, ad as TouchError, ae as EmulationManager, af as Tracing, ag as Coverage, ah as parsePDFOptions, ai as from, aj as stringToTypedArray, ak as evaluationString, al as Page, am as bubble, an as Target, ao as TargetType, ap as WEB_PERMISSION_TO_PROTOCOL_PERMISSION, aq as BrowserContext, ar as Browser$1 } from './index.js';
import require$$2 from 'crypto';
import 'os';
import 'fs';
import 'path';
import 'http';
import 'https';
import 'net';
import 'tls';
import 'events';
import 'assert';
import 'util';
import 'stream';
import 'buffer';
import 'querystring';
import 'stream/web';
import 'node:stream';
import 'node:util';
import 'node:events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'diagnostics_channel';
import 'child_process';
import 'timers';
import 'node:child_process';
import 'node:path';
import 'node:fs';
import 'node:process';
import 'node:assert';
import 'node:url';
import 'node:module';
import 'node:v8';
import 'fs/promises';
import 'readline';
import 'tty';
import 'dns';
import 'process';
import 'module';
import 'inspector';

var BidiMapper = {};

var BidiServer = {};

var EventEmitter = {};

function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

var mitt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: mitt
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(mitt$1);

var hasRequiredEventEmitter;

function requireEventEmitter () {
	if (hasRequiredEventEmitter) return EventEmitter;
	hasRequiredEventEmitter = 1;
	var __importDefault = (EventEmitter.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(EventEmitter, "__esModule", { value: true });
	EventEmitter.EventEmitter = undefined;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const mitt_1 = __importDefault(require$$0);
	let EventEmitter$1 = class EventEmitter {
	    #emitter = (0, mitt_1.default)();
	    on(type, handler) {
	        this.#emitter.on(type, handler);
	        return this;
	    }
	    /**
	     * Like `on` but the listener will only be fired once and then it will be removed.
	     * @param event The event you'd like to listen to
	     * @param handler The handler function to run when the event occurs
	     * @return `this` to enable chaining method calls.
	     */
	    once(event, handler) {
	        const onceHandler = (eventData) => {
	            handler(eventData);
	            this.off(event, onceHandler);
	        };
	        return this.on(event, onceHandler);
	    }
	    off(type, handler) {
	        this.#emitter.off(type, handler);
	        return this;
	    }
	    /**
	     * Emits an event and call any associated listeners.
	     *
	     * @param event The event to emit.
	     * @param eventData Any data to emit with the event.
	     * @return `true` if there are any listeners, `false` otherwise.
	     */
	    emit(event, eventData) {
	        this.#emitter.emit(event, eventData);
	    }
	    /**
	     * Removes all listeners. If given an event argument, it will remove only
	     * listeners for that event.
	     * @param event - the event to remove listeners for.
	     * @returns `this` to enable you to chain method calls.
	     */
	    removeAllListeners(event) {
	        if (event) {
	            this.#emitter.all.delete(event);
	        }
	        else {
	            this.#emitter.all.clear();
	        }
	        return this;
	    }
	};
	EventEmitter.EventEmitter = EventEmitter$1;
	
	return EventEmitter;
}

var log = {};

var hasRequiredLog;

function requireLog () {
	if (hasRequiredLog) return log;
	hasRequiredLog = 1;
	/**
	 * Copyright 2021 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(log, "__esModule", { value: true });
	log.LogType = undefined;
	var LogType;
	(function (LogType) {
	    // keep-sorted start
	    LogType["bidi"] = "bidi";
	    LogType["cdp"] = "cdp";
	    LogType["debug"] = "debug";
	    LogType["debugError"] = "debug:error";
	    LogType["debugInfo"] = "debug:info";
	    // keep-sorted end
	})(LogType || (log.LogType = LogType = {}));
	
	return log;
}

var ProcessingQueue = {};

var hasRequiredProcessingQueue;

function requireProcessingQueue () {
	if (hasRequiredProcessingQueue) return ProcessingQueue;
	hasRequiredProcessingQueue = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var _a;
	Object.defineProperty(ProcessingQueue, "__esModule", { value: true });
	ProcessingQueue.ProcessingQueue = undefined;
	const log_js_1 = requireLog();
	let ProcessingQueue$1 = class ProcessingQueue {
	    static LOGGER_PREFIX = `${log_js_1.LogType.debug}:queue`;
	    #logger;
	    #processor;
	    #queue = [];
	    // Flag to keep only 1 active processor.
	    #isProcessing = false;
	    constructor(processor, logger) {
	        this.#processor = processor;
	        this.#logger = logger;
	    }
	    add(entry, name) {
	        this.#queue.push([entry, name]);
	        // No need in waiting. Just initialize processor if needed.
	        void this.#processIfNeeded();
	    }
	    async #processIfNeeded() {
	        if (this.#isProcessing) {
	            return;
	        }
	        this.#isProcessing = true;
	        while (this.#queue.length > 0) {
	            const arrayEntry = this.#queue.shift();
	            if (!arrayEntry) {
	                continue;
	            }
	            const [entryPromise, name] = arrayEntry;
	            this.#logger?.(_a.LOGGER_PREFIX, 'Processing event:', name);
	            await entryPromise
	                .then((entry) => {
	                if (entry.kind === 'error') {
	                    this.#logger?.(log_js_1.LogType.debugError, 'Event threw before sending:', entry.error.message, entry.error.stack);
	                    return;
	                }
	                return this.#processor(entry.value);
	            })
	                .catch((error) => {
	                this.#logger?.(log_js_1.LogType.debugError, 'Event was not processed:', error?.message);
	            });
	        }
	        this.#isProcessing = false;
	    }
	};
	ProcessingQueue.ProcessingQueue = ProcessingQueue$1;
	_a = ProcessingQueue$1;
	
	return ProcessingQueue;
}

var CommandProcessor = {};

var protocol = {};

var cdp = {};

var hasRequiredCdp;

function requireCdp () {
	if (hasRequiredCdp) return cdp;
	hasRequiredCdp = 1;
	Object.defineProperty(cdp, "__esModule", { value: true });
	
	return cdp;
}

var chromiumBidi = {};

var hasRequiredChromiumBidi;

function requireChromiumBidi () {
	if (hasRequiredChromiumBidi) return chromiumBidi;
	hasRequiredChromiumBidi = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(chromiumBidi, "__esModule", { value: true });
	chromiumBidi.EVENT_NAMES = chromiumBidi.Bluetooth = chromiumBidi.Network = chromiumBidi.BrowsingContext = chromiumBidi.Log = chromiumBidi.Script = chromiumBidi.BiDiModule = undefined;
	// keep-sorted end
	var BiDiModule;
	(function (BiDiModule) {
	    // keep-sorted start
	    BiDiModule["Bluetooth"] = "bluetooth";
	    BiDiModule["Browser"] = "browser";
	    BiDiModule["BrowsingContext"] = "browsingContext";
	    BiDiModule["Cdp"] = "goog:cdp";
	    BiDiModule["DeprecatedCdp"] = "cdp";
	    BiDiModule["Input"] = "input";
	    BiDiModule["Log"] = "log";
	    BiDiModule["Network"] = "network";
	    BiDiModule["Script"] = "script";
	    BiDiModule["Session"] = "session";
	    // keep-sorted end
	})(BiDiModule || (chromiumBidi.BiDiModule = BiDiModule = {}));
	var Script;
	(function (Script) {
	    (function (EventNames) {
	        // keep-sorted start
	        EventNames["Message"] = "script.message";
	        EventNames["RealmCreated"] = "script.realmCreated";
	        EventNames["RealmDestroyed"] = "script.realmDestroyed";
	        // keep-sorted end
	    })(Script.EventNames || (Script.EventNames = {}));
	})(Script || (chromiumBidi.Script = Script = {}));
	var Log;
	(function (Log) {
	    (function (EventNames) {
	        EventNames["LogEntryAdded"] = "log.entryAdded";
	    })(Log.EventNames || (Log.EventNames = {}));
	})(Log || (chromiumBidi.Log = Log = {}));
	var BrowsingContext;
	(function (BrowsingContext) {
	    (function (EventNames) {
	        // keep-sorted start
	        EventNames["ContextCreated"] = "browsingContext.contextCreated";
	        EventNames["ContextDestroyed"] = "browsingContext.contextDestroyed";
	        EventNames["DomContentLoaded"] = "browsingContext.domContentLoaded";
	        EventNames["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
	        EventNames["FragmentNavigated"] = "browsingContext.fragmentNavigated";
	        EventNames["HistoryUpdated"] = "browsingContext.historyUpdated";
	        EventNames["Load"] = "browsingContext.load";
	        EventNames["NavigationAborted"] = "browsingContext.navigationAborted";
	        EventNames["NavigationFailed"] = "browsingContext.navigationFailed";
	        EventNames["NavigationStarted"] = "browsingContext.navigationStarted";
	        EventNames["UserPromptClosed"] = "browsingContext.userPromptClosed";
	        EventNames["UserPromptOpened"] = "browsingContext.userPromptOpened";
	        // keep-sorted end
	    })(BrowsingContext.EventNames || (BrowsingContext.EventNames = {}));
	})(BrowsingContext || (chromiumBidi.BrowsingContext = BrowsingContext = {}));
	var Network;
	(function (Network) {
	    (function (EventNames) {
	        // keep-sorted start
	        EventNames["AuthRequired"] = "network.authRequired";
	        EventNames["BeforeRequestSent"] = "network.beforeRequestSent";
	        EventNames["FetchError"] = "network.fetchError";
	        EventNames["ResponseCompleted"] = "network.responseCompleted";
	        EventNames["ResponseStarted"] = "network.responseStarted";
	        // keep-sorted end
	    })(Network.EventNames || (Network.EventNames = {}));
	})(Network || (chromiumBidi.Network = Network = {}));
	var Bluetooth;
	(function (Bluetooth) {
	    (function (EventNames) {
	        EventNames["RequestDevicePromptUpdated"] = "bluetooth.requestDevicePromptUpdated";
	    })(Bluetooth.EventNames || (Bluetooth.EventNames = {}));
	})(Bluetooth || (chromiumBidi.Bluetooth = Bluetooth = {}));
	chromiumBidi.EVENT_NAMES = new Set([
	    // keep-sorted start
	    ...Object.values(BiDiModule),
	    ...Object.values(BrowsingContext.EventNames),
	    ...Object.values(Log.EventNames),
	    ...Object.values(Network.EventNames),
	    ...Object.values(Script.EventNames),
	    // keep-sorted end
	]);
	
	return chromiumBidi;
}

var webdriverBidi = {};

var hasRequiredWebdriverBidi;

function requireWebdriverBidi () {
	if (hasRequiredWebdriverBidi) return webdriverBidi;
	hasRequiredWebdriverBidi = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(webdriverBidi, "__esModule", { value: true });
	
	return webdriverBidi;
}

var ErrorResponse = {};

var hasRequiredErrorResponse;

function requireErrorResponse () {
	if (hasRequiredErrorResponse) return ErrorResponse;
	hasRequiredErrorResponse = 1;
	Object.defineProperty(ErrorResponse, "__esModule", { value: true });
	ErrorResponse.NoSuchWebExtensionException = ErrorResponse.InvalidWebExtensionException = ErrorResponse.UnderspecifiedStoragePartitionException = ErrorResponse.UnableToSetFileInputException = ErrorResponse.UnableToSetCookieException = ErrorResponse.NoSuchStoragePartitionException = ErrorResponse.UnsupportedOperationException = ErrorResponse.UnableToCloseBrowserException = ErrorResponse.UnableToCaptureScreenException = ErrorResponse.UnknownErrorException = ErrorResponse.UnknownCommandException = ErrorResponse.SessionNotCreatedException = ErrorResponse.NoSuchUserContextException = ErrorResponse.NoSuchScriptException = ErrorResponse.NoSuchRequestException = ErrorResponse.NoSuchNodeException = ErrorResponse.NoSuchInterceptException = ErrorResponse.NoSuchHistoryEntryException = ErrorResponse.NoSuchHandleException = ErrorResponse.NoSuchFrameException = ErrorResponse.NoSuchElementException = ErrorResponse.NoSuchAlertException = ErrorResponse.MoveTargetOutOfBoundsException = ErrorResponse.InvalidSessionIdException = ErrorResponse.InvalidSelectorException = ErrorResponse.InvalidArgumentException = ErrorResponse.Exception = undefined;
	class Exception extends Error {
	    error;
	    message;
	    stacktrace;
	    constructor(error, message, stacktrace) {
	        super();
	        this.error = error;
	        this.message = message;
	        this.stacktrace = stacktrace;
	    }
	    toErrorResponse(commandId) {
	        return {
	            type: 'error',
	            id: commandId,
	            error: this.error,
	            message: this.message,
	            stacktrace: this.stacktrace,
	        };
	    }
	}
	ErrorResponse.Exception = Exception;
	class InvalidArgumentException extends Exception {
	    constructor(message, stacktrace) {
	        super("invalid argument" /* ErrorCode.InvalidArgument */, message, stacktrace);
	    }
	}
	ErrorResponse.InvalidArgumentException = InvalidArgumentException;
	class InvalidSelectorException extends Exception {
	    constructor(message, stacktrace) {
	        super("invalid selector" /* ErrorCode.InvalidSelector */, message, stacktrace);
	    }
	}
	ErrorResponse.InvalidSelectorException = InvalidSelectorException;
	class InvalidSessionIdException extends Exception {
	    constructor(message, stacktrace) {
	        super("invalid session id" /* ErrorCode.InvalidSessionId */, message, stacktrace);
	    }
	}
	ErrorResponse.InvalidSessionIdException = InvalidSessionIdException;
	class MoveTargetOutOfBoundsException extends Exception {
	    constructor(message, stacktrace) {
	        super("move target out of bounds" /* ErrorCode.MoveTargetOutOfBounds */, message, stacktrace);
	    }
	}
	ErrorResponse.MoveTargetOutOfBoundsException = MoveTargetOutOfBoundsException;
	class NoSuchAlertException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such alert" /* ErrorCode.NoSuchAlert */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchAlertException = NoSuchAlertException;
	class NoSuchElementException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such element" /* ErrorCode.NoSuchElement */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchElementException = NoSuchElementException;
	class NoSuchFrameException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such frame" /* ErrorCode.NoSuchFrame */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchFrameException = NoSuchFrameException;
	class NoSuchHandleException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such handle" /* ErrorCode.NoSuchHandle */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchHandleException = NoSuchHandleException;
	class NoSuchHistoryEntryException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such history entry" /* ErrorCode.NoSuchHistoryEntry */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchHistoryEntryException = NoSuchHistoryEntryException;
	class NoSuchInterceptException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such intercept" /* ErrorCode.NoSuchIntercept */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchInterceptException = NoSuchInterceptException;
	class NoSuchNodeException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such node" /* ErrorCode.NoSuchNode */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchNodeException = NoSuchNodeException;
	class NoSuchRequestException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such request" /* ErrorCode.NoSuchRequest */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchRequestException = NoSuchRequestException;
	class NoSuchScriptException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such script" /* ErrorCode.NoSuchScript */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchScriptException = NoSuchScriptException;
	class NoSuchUserContextException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such user context" /* ErrorCode.NoSuchUserContext */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchUserContextException = NoSuchUserContextException;
	class SessionNotCreatedException extends Exception {
	    constructor(message, stacktrace) {
	        super("session not created" /* ErrorCode.SessionNotCreated */, message, stacktrace);
	    }
	}
	ErrorResponse.SessionNotCreatedException = SessionNotCreatedException;
	class UnknownCommandException extends Exception {
	    constructor(message, stacktrace) {
	        super("unknown command" /* ErrorCode.UnknownCommand */, message, stacktrace);
	    }
	}
	ErrorResponse.UnknownCommandException = UnknownCommandException;
	class UnknownErrorException extends Exception {
	    constructor(message, stacktrace = new Error().stack) {
	        super("unknown error" /* ErrorCode.UnknownError */, message, stacktrace);
	    }
	}
	ErrorResponse.UnknownErrorException = UnknownErrorException;
	class UnableToCaptureScreenException extends Exception {
	    constructor(message, stacktrace) {
	        super("unable to capture screen" /* ErrorCode.UnableToCaptureScreen */, message, stacktrace);
	    }
	}
	ErrorResponse.UnableToCaptureScreenException = UnableToCaptureScreenException;
	class UnableToCloseBrowserException extends Exception {
	    constructor(message, stacktrace) {
	        super("unable to close browser" /* ErrorCode.UnableToCloseBrowser */, message, stacktrace);
	    }
	}
	ErrorResponse.UnableToCloseBrowserException = UnableToCloseBrowserException;
	class UnsupportedOperationException extends Exception {
	    constructor(message, stacktrace) {
	        super("unsupported operation" /* ErrorCode.UnsupportedOperation */, message, stacktrace);
	    }
	}
	ErrorResponse.UnsupportedOperationException = UnsupportedOperationException;
	class NoSuchStoragePartitionException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such storage partition" /* ErrorCode.NoSuchStoragePartition */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchStoragePartitionException = NoSuchStoragePartitionException;
	class UnableToSetCookieException extends Exception {
	    constructor(message, stacktrace) {
	        super("unable to set cookie" /* ErrorCode.UnableToSetCookie */, message, stacktrace);
	    }
	}
	ErrorResponse.UnableToSetCookieException = UnableToSetCookieException;
	class UnableToSetFileInputException extends Exception {
	    constructor(message, stacktrace) {
	        super("unable to set file input" /* ErrorCode.UnableToSetFileInput */, message, stacktrace);
	    }
	}
	ErrorResponse.UnableToSetFileInputException = UnableToSetFileInputException;
	class UnderspecifiedStoragePartitionException extends Exception {
	    constructor(message, stacktrace) {
	        super("underspecified storage partition" /* ErrorCode.UnderspecifiedStoragePartition */, message, stacktrace);
	    }
	}
	ErrorResponse.UnderspecifiedStoragePartitionException = UnderspecifiedStoragePartitionException;
	class InvalidWebExtensionException extends Exception {
	    constructor(message, stacktrace) {
	        super("invalid web extension" /* ErrorCode.InvalidWebExtension */, message, stacktrace);
	    }
	}
	ErrorResponse.InvalidWebExtensionException = InvalidWebExtensionException;
	class NoSuchWebExtensionException extends Exception {
	    constructor(message, stacktrace) {
	        super("no such web extension" /* ErrorCode.NoSuchWebExtension */, message, stacktrace);
	    }
	}
	ErrorResponse.NoSuchWebExtensionException = NoSuchWebExtensionException;
	
	return ErrorResponse;
}

var webdriverBidiPermissions = {};

var hasRequiredWebdriverBidiPermissions;

function requireWebdriverBidiPermissions () {
	if (hasRequiredWebdriverBidiPermissions) return webdriverBidiPermissions;
	hasRequiredWebdriverBidiPermissions = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(webdriverBidiPermissions, "__esModule", { value: true });
	
	return webdriverBidiPermissions;
}

var webdriverBidiBluetooth = {};

var hasRequiredWebdriverBidiBluetooth;

function requireWebdriverBidiBluetooth () {
	if (hasRequiredWebdriverBidiBluetooth) return webdriverBidiBluetooth;
	hasRequiredWebdriverBidiBluetooth = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(webdriverBidiBluetooth, "__esModule", { value: true });
	
	return webdriverBidiBluetooth;
}

var hasRequiredProtocol;

function requireProtocol () {
	if (hasRequiredProtocol) return protocol;
	hasRequiredProtocol = 1;
	(function (exports) {
		var __createBinding = (protocol.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (protocol.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (protocol.__importStar) || (function () {
		    var ownKeys = function(o) {
		        ownKeys = Object.getOwnPropertyNames || function (o) {
		            var ar = [];
		            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
		            return ar;
		        };
		        return ownKeys(o);
		    };
		    return function (mod) {
		        if (mod && mod.__esModule) return mod;
		        var result = {};
		        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
		        __setModuleDefault(result, mod);
		        return result;
		    };
		})();
		var __exportStar = (protocol.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ChromiumBidi = exports.Cdp = undefined;
		/**
		 * Copyright 2023 Google LLC.
		 * Copyright (c) Microsoft Corporation.
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *     http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
		exports.Cdp = __importStar(requireCdp());
		exports.ChromiumBidi = __importStar(requireChromiumBidi());
		__exportStar(requireWebdriverBidi(), exports);
		__exportStar(requireErrorResponse(), exports);
		__exportStar(requireWebdriverBidiPermissions(), exports);
		__exportStar(requireWebdriverBidiBluetooth(), exports);
		
	} (protocol));
	return protocol;
}

var BidiNoOpParser = {};

var hasRequiredBidiNoOpParser;

function requireBidiNoOpParser () {
	if (hasRequiredBidiNoOpParser) return BidiNoOpParser;
	hasRequiredBidiNoOpParser = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(BidiNoOpParser, "__esModule", { value: true });
	BidiNoOpParser.BidiNoOpParser = undefined;
	let BidiNoOpParser$1 = class BidiNoOpParser {
	    // Bluetooth module
	    // keep-sorted start block=yes
	    parseHandleRequestDevicePromptParams(params) {
	        return params;
	    }
	    parseSimulateAdapterParameters(params) {
	        return params;
	    }
	    parseSimulateAdvertisementParameters(params) {
	        return params;
	    }
	    parseSimulatePreconnectedPeripheralParameters(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Browser module
	    // keep-sorted start block=yes
	    parseRemoveUserContextParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Browsing Context module
	    // keep-sorted start block=yes
	    parseActivateParams(params) {
	        return params;
	    }
	    parseCaptureScreenshotParams(params) {
	        return params;
	    }
	    parseCloseParams(params) {
	        return params;
	    }
	    parseCreateParams(params) {
	        return params;
	    }
	    parseGetTreeParams(params) {
	        return params;
	    }
	    parseHandleUserPromptParams(params) {
	        return params;
	    }
	    parseLocateNodesParams(params) {
	        return params;
	    }
	    parseNavigateParams(params) {
	        return params;
	    }
	    parsePrintParams(params) {
	        return params;
	    }
	    parseReloadParams(params) {
	        return params;
	    }
	    parseSetViewportParams(params) {
	        return params;
	    }
	    parseTraverseHistoryParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // CDP module
	    // keep-sorted start block=yes
	    parseGetSessionParams(params) {
	        return params;
	    }
	    parseResolveRealmParams(params) {
	        return params;
	    }
	    parseSendCommandParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Script module
	    // keep-sorted start block=yes
	    parseAddPreloadScriptParams(params) {
	        return params;
	    }
	    parseCallFunctionParams(params) {
	        return params;
	    }
	    parseDisownParams(params) {
	        return params;
	    }
	    parseEvaluateParams(params) {
	        return params;
	    }
	    parseGetRealmsParams(params) {
	        return params;
	    }
	    parseRemovePreloadScriptParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Input module
	    // keep-sorted start block=yes
	    parsePerformActionsParams(params) {
	        return params;
	    }
	    parseReleaseActionsParams(params) {
	        return params;
	    }
	    parseSetFilesParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Network module
	    // keep-sorted start block=yes
	    parseAddInterceptParams(params) {
	        return params;
	    }
	    parseContinueRequestParams(params) {
	        return params;
	    }
	    parseContinueResponseParams(params) {
	        return params;
	    }
	    parseContinueWithAuthParams(params) {
	        return params;
	    }
	    parseFailRequestParams(params) {
	        return params;
	    }
	    parseProvideResponseParams(params) {
	        return params;
	    }
	    parseRemoveInterceptParams(params) {
	        return params;
	    }
	    parseSetCacheBehavior(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Permissions module
	    // keep-sorted start block=yes
	    parseSetPermissionsParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Session module
	    // keep-sorted start block=yes
	    parseSubscribeParams(params) {
	        return params;
	    }
	    // keep-sorted end
	    // Storage module
	    // keep-sorted start block=yes
	    parseDeleteCookiesParams(params) {
	        return params;
	    }
	    parseGetCookiesParams(params) {
	        return params;
	    }
	    parseSetCookieParams(params) {
	        return params;
	    }
	};
	BidiNoOpParser.BidiNoOpParser = BidiNoOpParser$1;
	
	return BidiNoOpParser;
}

var BrowserProcessor = {};

var hasRequiredBrowserProcessor;

function requireBrowserProcessor () {
	if (hasRequiredBrowserProcessor) return BrowserProcessor;
	hasRequiredBrowserProcessor = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(BrowserProcessor, "__esModule", { value: true });
	BrowserProcessor.BrowserProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	let BrowserProcessor$1 = class BrowserProcessor {
	    #browserCdpClient;
	    #browsingContextStorage;
	    constructor(browserCdpClient, browsingContextStorage) {
	        this.#browserCdpClient = browserCdpClient;
	        this.#browsingContextStorage = browsingContextStorage;
	    }
	    close() {
	        // Ensure that it is put at the end of the event loop.
	        // This way we send back the response before closing the tab.
	        setTimeout(() => this.#browserCdpClient.sendCommand('Browser.close'), 0);
	        return {};
	    }
	    async createUserContext(params) {
	        const request = {
	            proxyServer: params['goog:proxyServer'] ?? undefined,
	        };
	        const proxyBypassList = params['goog:proxyBypassList'] ?? undefined;
	        if (proxyBypassList) {
	            request.proxyBypassList = proxyBypassList.join(',');
	        }
	        const context = await this.#browserCdpClient.sendCommand('Target.createBrowserContext', request);
	        return {
	            userContext: context.browserContextId,
	        };
	    }
	    async removeUserContext(params) {
	        const userContext = params.userContext;
	        if (userContext === 'default') {
	            throw new protocol_js_1.InvalidArgumentException('`default` user context cannot be removed');
	        }
	        try {
	            await this.#browserCdpClient.sendCommand('Target.disposeBrowserContext', {
	                browserContextId: userContext,
	            });
	        }
	        catch (err) {
	            // https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/protocol/target_handler.cc;l=1424;drc=c686e8f4fd379312469fe018f5c390e9c8f20d0d
	            if (err.message.startsWith('Failed to find context with id')) {
	                throw new protocol_js_1.NoSuchUserContextException(err.message);
	            }
	            throw err;
	        }
	        return {};
	    }
	    async getUserContexts() {
	        const result = await this.#browserCdpClient.sendCommand('Target.getBrowserContexts');
	        return {
	            userContexts: [
	                {
	                    userContext: 'default',
	                },
	                ...result.browserContextIds.map((id) => {
	                    return {
	                        userContext: id,
	                    };
	                }),
	            ],
	        };
	    }
	    async #getWindowInfo(targetId) {
	        const windowInfo = await this.#browserCdpClient.sendCommand('Browser.getWindowForTarget', { targetId });
	        return {
	            // `active` is not supported in CDP yet.
	            active: false,
	            clientWindow: `${windowInfo.windowId}`,
	            state: windowInfo.bounds.windowState ?? 'normal',
	            height: windowInfo.bounds.height ?? 0,
	            width: windowInfo.bounds.width ?? 0,
	            x: windowInfo.bounds.left ?? 0,
	            y: windowInfo.bounds.top ?? 0,
	        };
	    }
	    async getClientWindows() {
	        const topLevelTargetIds = this.#browsingContextStorage
	            .getTopLevelContexts()
	            .map((b) => b.cdpTarget.id);
	        const clientWindows = await Promise.all(topLevelTargetIds.map(async (targetId) => await this.#getWindowInfo(targetId)));
	        const uniqueClientWindowIds = new Set();
	        const uniqueClientWindows = new Array();
	        // Filter out duplicated client windows.
	        for (const window of clientWindows) {
	            if (!uniqueClientWindowIds.has(window.clientWindow)) {
	                uniqueClientWindowIds.add(window.clientWindow);
	                uniqueClientWindows.push(window);
	            }
	        }
	        return { clientWindows: uniqueClientWindows };
	    }
	};
	BrowserProcessor.BrowserProcessor = BrowserProcessor$1;
	
	return BrowserProcessor;
}

var CdpProcessor = {};

var hasRequiredCdpProcessor;

function requireCdpProcessor () {
	if (hasRequiredCdpProcessor) return CdpProcessor;
	hasRequiredCdpProcessor = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(CdpProcessor, "__esModule", { value: true });
	CdpProcessor.CdpProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	let CdpProcessor$1 = class CdpProcessor {
	    #browsingContextStorage;
	    #realmStorage;
	    #cdpConnection;
	    #browserCdpClient;
	    constructor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient) {
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#realmStorage = realmStorage;
	        this.#cdpConnection = cdpConnection;
	        this.#browserCdpClient = browserCdpClient;
	    }
	    getSession(params) {
	        const context = params.context;
	        const sessionId = this.#browsingContextStorage.getContext(context).cdpTarget.cdpSessionId;
	        if (sessionId === undefined) {
	            return {};
	        }
	        return { session: sessionId };
	    }
	    resolveRealm(params) {
	        const context = params.realm;
	        const realm = this.#realmStorage.getRealm({ realmId: context });
	        if (realm === undefined) {
	            throw new protocol_js_1.UnknownErrorException(`Could not find realm ${params.realm}`);
	        }
	        return { executionContextId: realm.executionContextId };
	    }
	    async sendCommand(params) {
	        const client = params.session
	            ? this.#cdpConnection.getCdpClient(params.session)
	            : this.#browserCdpClient;
	        const result = await client.sendCommand(params.method, params.params);
	        return {
	            result,
	            session: params.session,
	        };
	    }
	};
	CdpProcessor.CdpProcessor = CdpProcessor$1;
	
	return CdpProcessor;
}

var BrowsingContextProcessor = {};

var hasRequiredBrowsingContextProcessor;

function requireBrowsingContextProcessor () {
	if (hasRequiredBrowsingContextProcessor) return BrowsingContextProcessor;
	hasRequiredBrowsingContextProcessor = 1;
	Object.defineProperty(BrowsingContextProcessor, "__esModule", { value: true });
	BrowsingContextProcessor.BrowsingContextProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	let BrowsingContextProcessor$1 = class BrowsingContextProcessor {
	    #browserCdpClient;
	    #browsingContextStorage;
	    #eventManager;
	    constructor(browserCdpClient, browsingContextStorage, eventManager) {
	        this.#browserCdpClient = browserCdpClient;
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#eventManager = eventManager;
	        this.#eventManager.addSubscribeHook(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, this.#onContextCreatedSubscribeHook.bind(this));
	    }
	    getTree(params) {
	        const resultContexts = params.root === undefined
	            ? this.#browsingContextStorage.getTopLevelContexts()
	            : [this.#browsingContextStorage.getContext(params.root)];
	        return {
	            contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE)),
	        };
	    }
	    async create(params) {
	        let referenceContext;
	        let userContext = 'default';
	        if (params.referenceContext !== undefined) {
	            referenceContext = this.#browsingContextStorage.getContext(params.referenceContext);
	            if (!referenceContext.isTopLevelContext()) {
	                throw new protocol_js_1.InvalidArgumentException(`referenceContext should be a top-level context`);
	            }
	            userContext = referenceContext.userContext;
	        }
	        if (params.userContext !== undefined) {
	            userContext = params.userContext;
	        }
	        const existingContexts = this.#browsingContextStorage
	            .getAllContexts()
	            .filter((context) => context.userContext === userContext);
	        let newWindow = false;
	        switch (params.type) {
	            case "tab" /* BrowsingContext.CreateType.Tab */:
	                newWindow = false;
	                break;
	            case "window" /* BrowsingContext.CreateType.Window */:
	                newWindow = true;
	                break;
	        }
	        if (!existingContexts.length) {
	            // If there are no contexts in the given user context, we need to set
	            // newWindow to true as newWindow=false will be rejected.
	            newWindow = true;
	        }
	        let result;
	        try {
	            result = await this.#browserCdpClient.sendCommand('Target.createTarget', {
	                url: 'about:blank',
	                newWindow,
	                browserContextId: userContext === 'default' ? undefined : userContext,
	                background: params.background === true,
	            });
	        }
	        catch (err) {
	            if (
	            // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
	            err.message.startsWith('Failed to find browser context with id') ||
	                // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
	                err.message === 'browserContextId') {
	                throw new protocol_js_1.NoSuchUserContextException(`The context ${userContext} was not found`);
	            }
	            throw err;
	        }
	        // Wait for the new target to be attached and to be added to the browsing context
	        // storage.
	        const context = await this.#browsingContextStorage.waitForContext(result.targetId);
	        // Wait for the new tab to be loaded to avoid race conditions in the
	        // `browsingContext` events, when the `browsingContext.domContentLoaded` and
	        // `browsingContext.load` events from the initial `about:blank` navigation
	        // are emitted after the next navigation is started.
	        // Details: https://github.com/web-platform-tests/wpt/issues/35846
	        await context.lifecycleLoaded();
	        return { context: context.id };
	    }
	    navigate(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        return context.navigate(params.url, params.wait ?? "none" /* BrowsingContext.ReadinessState.None */);
	    }
	    reload(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        return context.reload(params.ignoreCache ?? false, params.wait ?? "none" /* BrowsingContext.ReadinessState.None */);
	    }
	    async activate(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        if (!context.isTopLevelContext()) {
	            throw new protocol_js_1.InvalidArgumentException('Activation is only supported on the top-level context');
	        }
	        await context.activate();
	        return {};
	    }
	    async captureScreenshot(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        return await context.captureScreenshot(params);
	    }
	    async print(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        return await context.print(params);
	    }
	    async setViewport(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        if (!context.isTopLevelContext()) {
	            throw new protocol_js_1.InvalidArgumentException('Emulating viewport is only supported on the top-level context');
	        }
	        await context.setViewport(params.viewport, params.devicePixelRatio);
	        return {};
	    }
	    async traverseHistory(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        if (!context) {
	            throw new protocol_js_1.InvalidArgumentException(`No browsing context with id ${params.context}`);
	        }
	        if (!context.isTopLevelContext()) {
	            throw new protocol_js_1.InvalidArgumentException('Traversing history is only supported on the top-level context');
	        }
	        await context.traverseHistory(params.delta);
	        return {};
	    }
	    async handleUserPrompt(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        try {
	            await context.handleUserPrompt(params.accept, params.userText);
	        }
	        catch (error) {
	            // Heuristically determine the error
	            // https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/protocol/page_handler.cc;l=1085?q=%22No%20dialog%20is%20showing%22&ss=chromium
	            if (error.message?.includes('No dialog is showing')) {
	                throw new protocol_js_1.NoSuchAlertException('No dialog is showing');
	            }
	            throw error;
	        }
	        return {};
	    }
	    async close(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        if (!context.isTopLevelContext()) {
	            throw new protocol_js_1.InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
	        }
	        // Parent session of a page target session can be a `browser` or a `tab` session.
	        const parentCdpClient = context.cdpTarget.parentCdpClient;
	        try {
	            const detachedFromTargetPromise = new Promise((resolve) => {
	                const onContextDestroyed = (event) => {
	                    if (event.targetId === params.context) {
	                        parentCdpClient.off('Target.detachedFromTarget', onContextDestroyed);
	                        resolve();
	                    }
	                };
	                parentCdpClient.on('Target.detachedFromTarget', onContextDestroyed);
	            });
	            try {
	                if (params.promptUnload) {
	                    await context.close();
	                }
	                else {
	                    await parentCdpClient.sendCommand('Target.closeTarget', {
	                        targetId: params.context,
	                    });
	                }
	            }
	            catch (error) {
	                // Swallow error that arise from the session being destroyed. Rely on the
	                // `detachedFromTargetPromise` event to be resolved.
	                if (!parentCdpClient.isCloseError(error)) {
	                    throw error;
	                }
	            }
	            // Sometimes CDP command finishes before `detachedFromTarget` event,
	            // sometimes after. Wait for the CDP command to be finished, and then wait
	            // for `detachedFromTarget` if it hasn't emitted.
	            await detachedFromTargetPromise;
	        }
	        catch (error) {
	            // Swallow error that arise from the page being destroyed
	            // Example is navigating to faulty SSL certificate
	            if (!(error.code === -32e3 /* CdpErrorConstants.GENERIC_ERROR */ &&
	                error.message === 'Not attached to an active page')) {
	                throw error;
	            }
	        }
	        return {};
	    }
	    async locateNodes(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        return await context.locateNodes(params);
	    }
	    #onContextCreatedSubscribeHook(contextId) {
	        const context = this.#browsingContextStorage.getContext(contextId);
	        const contextsToReport = [
	            context,
	            ...this.#browsingContextStorage.getContext(contextId).allChildren,
	        ];
	        contextsToReport.forEach((context) => {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
	                params: context.serializeToBidiValue(),
	            }, context.id);
	        });
	        return Promise.resolve();
	    }
	};
	BrowsingContextProcessor.BrowsingContextProcessor = BrowsingContextProcessor$1;
	
	return BrowsingContextProcessor;
}

var InputProcessor = {};

var assert = {};

var hasRequiredAssert;

function requireAssert () {
	if (hasRequiredAssert) return assert;
	hasRequiredAssert = 1;
	Object.defineProperty(assert, "__esModule", { value: true });
	assert.assert = assert$1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	function assert$1(predicate, message) {
	    if (!predicate) {
	        throw new Error(message ?? 'Internal assertion failed.');
	    }
	}
	
	return assert;
}

var ActionDispatcher = {};

var GraphemeTools = {};

var hasRequiredGraphemeTools;

function requireGraphemeTools () {
	if (hasRequiredGraphemeTools) return GraphemeTools;
	hasRequiredGraphemeTools = 1;
	/*
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(GraphemeTools, "__esModule", { value: true });
	GraphemeTools.isSingleComplexGrapheme = isSingleComplexGrapheme;
	GraphemeTools.isSingleGrapheme = isSingleGrapheme;
	/**
	 * Check if the given string is a single complex grapheme. A complex grapheme is one that
	 * is made up of multiple characters.
	 */
	function isSingleComplexGrapheme(value) {
	    return isSingleGrapheme(value) && value.length > 1;
	}
	/**
	 * Check if the given string is a single grapheme.
	 */
	function isSingleGrapheme(value) {
	    // Theoretically there can be some strings considered a grapheme in some locales, like
	    // slovak "ch" digraph. Use english locale for consistency.
	    // https://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries
	    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
	    return [...segmenter.segment(value)].length === 1;
	}
	
	return GraphemeTools;
}

var InputSource = {};

var hasRequiredInputSource;

function requireInputSource () {
	if (hasRequiredInputSource) return InputSource;
	hasRequiredInputSource = 1;
	Object.defineProperty(InputSource, "__esModule", { value: true });
	InputSource.WheelSource = InputSource.PointerSource = InputSource.KeySource = InputSource.NoneSource = undefined;
	class NoneSource {
	    type = "none" /* SourceType.None */;
	}
	InputSource.NoneSource = NoneSource;
	class KeySource {
	    type = "key" /* SourceType.Key */;
	    pressed = new Set();
	    // This is a bitfield that matches the modifiers parameter of
	    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
	    #modifiers = 0;
	    get modifiers() {
	        return this.#modifiers;
	    }
	    get alt() {
	        return (this.#modifiers & 1) === 1;
	    }
	    set alt(value) {
	        this.#setModifier(value, 1);
	    }
	    get ctrl() {
	        return (this.#modifiers & 2) === 2;
	    }
	    set ctrl(value) {
	        this.#setModifier(value, 2);
	    }
	    get meta() {
	        return (this.#modifiers & 4) === 4;
	    }
	    set meta(value) {
	        this.#setModifier(value, 4);
	    }
	    get shift() {
	        return (this.#modifiers & 8) === 8;
	    }
	    set shift(value) {
	        this.#setModifier(value, 8);
	    }
	    #setModifier(value, bit) {
	        if (value) {
	            this.#modifiers |= bit;
	        }
	        else {
	            this.#modifiers &= ~bit;
	        }
	    }
	}
	InputSource.KeySource = KeySource;
	class PointerSource {
	    type = "pointer" /* SourceType.Pointer */;
	    subtype;
	    pointerId;
	    pressed = new Set();
	    x = 0;
	    y = 0;
	    radiusX;
	    radiusY;
	    force;
	    constructor(id, subtype) {
	        this.pointerId = id;
	        this.subtype = subtype;
	    }
	    // This is a bitfield that matches the buttons parameter of
	    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
	    get buttons() {
	        let buttons = 0;
	        for (const button of this.pressed) {
	            switch (button) {
	                case 0:
	                    buttons |= 1;
	                    break;
	                case 1:
	                    buttons |= 4;
	                    break;
	                case 2:
	                    buttons |= 2;
	                    break;
	                case 3:
	                    buttons |= 8;
	                    break;
	                case 4:
	                    buttons |= 16;
	                    break;
	            }
	        }
	        return buttons;
	    }
	    // --- Platform-specific code starts here ---
	    // Input.dispatchMouseEvent doesn't know the concept of double click, so we
	    // need to create the logic, similar to how it's done for OSes:
	    // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
	    static ClickContext = class ClickContext {
	        static #DOUBLE_CLICK_TIME_MS = 500;
	        static #MAX_DOUBLE_CLICK_RADIUS = 2;
	        count = 0;
	        #x;
	        #y;
	        #time;
	        constructor(x, y, time) {
	            this.#x = x;
	            this.#y = y;
	            this.#time = time;
	        }
	        compare(context) {
	            return (
	            // The click needs to be within a certain amount of ms.
	            context.#time - this.#time > ClickContext.#DOUBLE_CLICK_TIME_MS ||
	                // The click needs to be within a certain square radius.
	                Math.abs(context.#x - this.#x) >
	                    ClickContext.#MAX_DOUBLE_CLICK_RADIUS ||
	                Math.abs(context.#y - this.#y) > ClickContext.#MAX_DOUBLE_CLICK_RADIUS);
	        }
	    };
	    #clickContexts = new Map();
	    setClickCount(button, context) {
	        let storedContext = this.#clickContexts.get(button);
	        if (!storedContext || storedContext.compare(context)) {
	            storedContext = context;
	        }
	        ++storedContext.count;
	        this.#clickContexts.set(button, storedContext);
	        return storedContext.count;
	    }
	    getClickCount(button) {
	        return this.#clickContexts.get(button)?.count ?? 0;
	    }
	}
	InputSource.PointerSource = PointerSource;
	class WheelSource {
	    type = "wheel" /* SourceType.Wheel */;
	}
	InputSource.WheelSource = WheelSource;
	
	return InputSource;
}

var keyUtils = {};

var hasRequiredKeyUtils;

function requireKeyUtils () {
	if (hasRequiredKeyUtils) return keyUtils;
	hasRequiredKeyUtils = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(keyUtils, "__esModule", { value: true });
	keyUtils.getNormalizedKey = getNormalizedKey;
	keyUtils.getKeyCode = getKeyCode;
	keyUtils.getKeyLocation = getKeyLocation;
	/**
	 * Returns the normalized key value for a given key according to the table:
	 * https://w3c.github.io/webdriver/#dfn-normalized-key-value
	 */
	function getNormalizedKey(value) {
	    switch (value) {
	        case '\uE000':
	            return 'Unidentified';
	        case '\uE001':
	            return 'Cancel';
	        case '\uE002':
	            return 'Help';
	        case '\uE003':
	            return 'Backspace';
	        case '\uE004':
	            return 'Tab';
	        case '\uE005':
	            return 'Clear';
	        // Specification declares the '\uE006' to be `Return`, but it is not supported by
	        // Chrome, so fall back to `Enter`, which aligns with WPT.
	        case '\uE006':
	        case '\uE007':
	            return 'Enter';
	        case '\uE008':
	            return 'Shift';
	        case '\uE009':
	            return 'Control';
	        case '\uE00A':
	            return 'Alt';
	        case '\uE00B':
	            return 'Pause';
	        case '\uE00C':
	            return 'Escape';
	        case '\uE00D':
	            return ' ';
	        case '\uE00E':
	            return 'PageUp';
	        case '\uE00F':
	            return 'PageDown';
	        case '\uE010':
	            return 'End';
	        case '\uE011':
	            return 'Home';
	        case '\uE012':
	            return 'ArrowLeft';
	        case '\uE013':
	            return 'ArrowUp';
	        case '\uE014':
	            return 'ArrowRight';
	        case '\uE015':
	            return 'ArrowDown';
	        case '\uE016':
	            return 'Insert';
	        case '\uE017':
	            return 'Delete';
	        case '\uE018':
	            return ';';
	        case '\uE019':
	            return '=';
	        case '\uE01A':
	            return '0';
	        case '\uE01B':
	            return '1';
	        case '\uE01C':
	            return '2';
	        case '\uE01D':
	            return '3';
	        case '\uE01E':
	            return '4';
	        case '\uE01F':
	            return '5';
	        case '\uE020':
	            return '6';
	        case '\uE021':
	            return '7';
	        case '\uE022':
	            return '8';
	        case '\uE023':
	            return '9';
	        case '\uE024':
	            return '*';
	        case '\uE025':
	            return '+';
	        case '\uE026':
	            return ',';
	        case '\uE027':
	            return '-';
	        case '\uE028':
	            return '.';
	        case '\uE029':
	            return '/';
	        case '\uE031':
	            return 'F1';
	        case '\uE032':
	            return 'F2';
	        case '\uE033':
	            return 'F3';
	        case '\uE034':
	            return 'F4';
	        case '\uE035':
	            return 'F5';
	        case '\uE036':
	            return 'F6';
	        case '\uE037':
	            return 'F7';
	        case '\uE038':
	            return 'F8';
	        case '\uE039':
	            return 'F9';
	        case '\uE03A':
	            return 'F10';
	        case '\uE03B':
	            return 'F11';
	        case '\uE03C':
	            return 'F12';
	        case '\uE03D':
	            return 'Meta';
	        case '\uE040':
	            return 'ZenkakuHankaku';
	        case '\uE050':
	            return 'Shift';
	        case '\uE051':
	            return 'Control';
	        case '\uE052':
	            return 'Alt';
	        case '\uE053':
	            return 'Meta';
	        case '\uE054':
	            return 'PageUp';
	        case '\uE055':
	            return 'PageDown';
	        case '\uE056':
	            return 'End';
	        case '\uE057':
	            return 'Home';
	        case '\uE058':
	            return 'ArrowLeft';
	        case '\uE059':
	            return 'ArrowUp';
	        case '\uE05A':
	            return 'ArrowRight';
	        case '\uE05B':
	            return 'ArrowDown';
	        case '\uE05C':
	            return 'Insert';
	        case '\uE05D':
	            return 'Delete';
	        default:
	            return value;
	    }
	}
	/**
	 * Returns the key code for a given key according to the table:
	 * https://w3c.github.io/webdriver/#dfn-shifted-character
	 */
	function getKeyCode(key) {
	    switch (key) {
	        case '`':
	        case '~':
	            return 'Backquote';
	        case '\\':
	        case '|':
	            return 'Backslash';
	        case '\uE003':
	            return 'Backspace';
	        case '[':
	        case '{':
	            return 'BracketLeft';
	        case ']':
	        case '}':
	            return 'BracketRight';
	        case ',':
	        case '<':
	            return 'Comma';
	        case '0':
	        case ')':
	            return 'Digit0';
	        case '1':
	        case '!':
	            return 'Digit1';
	        case '2':
	        case '@':
	            return 'Digit2';
	        case '3':
	        case '#':
	            return 'Digit3';
	        case '4':
	        case '$':
	            return 'Digit4';
	        case '5':
	        case '%':
	            return 'Digit5';
	        case '6':
	        case '^':
	            return 'Digit6';
	        case '7':
	        case '&':
	            return 'Digit7';
	        case '8':
	        case '*':
	            return 'Digit8';
	        case '9':
	        case '(':
	            return 'Digit9';
	        case '=':
	        case '+':
	            return 'Equal';
	        // The spec declares the '<' to be `IntlBackslash` as well, but it is already covered
	        // in the `Comma` above.
	        case '>':
	            return 'IntlBackslash';
	        case 'a':
	        case 'A':
	            return 'KeyA';
	        case 'b':
	        case 'B':
	            return 'KeyB';
	        case 'c':
	        case 'C':
	            return 'KeyC';
	        case 'd':
	        case 'D':
	            return 'KeyD';
	        case 'e':
	        case 'E':
	            return 'KeyE';
	        case 'f':
	        case 'F':
	            return 'KeyF';
	        case 'g':
	        case 'G':
	            return 'KeyG';
	        case 'h':
	        case 'H':
	            return 'KeyH';
	        case 'i':
	        case 'I':
	            return 'KeyI';
	        case 'j':
	        case 'J':
	            return 'KeyJ';
	        case 'k':
	        case 'K':
	            return 'KeyK';
	        case 'l':
	        case 'L':
	            return 'KeyL';
	        case 'm':
	        case 'M':
	            return 'KeyM';
	        case 'n':
	        case 'N':
	            return 'KeyN';
	        case 'o':
	        case 'O':
	            return 'KeyO';
	        case 'p':
	        case 'P':
	            return 'KeyP';
	        case 'q':
	        case 'Q':
	            return 'KeyQ';
	        case 'r':
	        case 'R':
	            return 'KeyR';
	        case 's':
	        case 'S':
	            return 'KeyS';
	        case 't':
	        case 'T':
	            return 'KeyT';
	        case 'u':
	        case 'U':
	            return 'KeyU';
	        case 'v':
	        case 'V':
	            return 'KeyV';
	        case 'w':
	        case 'W':
	            return 'KeyW';
	        case 'x':
	        case 'X':
	            return 'KeyX';
	        case 'y':
	        case 'Y':
	            return 'KeyY';
	        case 'z':
	        case 'Z':
	            return 'KeyZ';
	        case '-':
	        case '_':
	            return 'Minus';
	        case '.':
	            return 'Period';
	        case "'":
	        case '"':
	            return 'Quote';
	        case ';':
	        case ':':
	            return 'Semicolon';
	        case '/':
	        case '?':
	            return 'Slash';
	        case '\uE00A':
	            return 'AltLeft';
	        case '\uE052':
	            return 'AltRight';
	        case '\uE009':
	            return 'ControlLeft';
	        case '\uE051':
	            return 'ControlRight';
	        case '\uE006':
	            return 'Enter';
	        case '\uE00B':
	            return 'Pause';
	        case '\uE03D':
	            return 'MetaLeft';
	        case '\uE053':
	            return 'MetaRight';
	        case '\uE008':
	            return 'ShiftLeft';
	        case '\uE050':
	            return 'ShiftRight';
	        case ' ':
	        case '\uE00D':
	            return 'Space';
	        case '\uE004':
	            return 'Tab';
	        case '\uE017':
	            return 'Delete';
	        case '\uE010':
	            return 'End';
	        case '\uE002':
	            return 'Help';
	        case '\uE011':
	            return 'Home';
	        case '\uE016':
	            return 'Insert';
	        case '\uE00F':
	            return 'PageDown';
	        case '\uE00E':
	            return 'PageUp';
	        case '\uE015':
	            return 'ArrowDown';
	        case '\uE012':
	            return 'ArrowLeft';
	        case '\uE014':
	            return 'ArrowRight';
	        case '\uE013':
	            return 'ArrowUp';
	        case '\uE00C':
	            return 'Escape';
	        case '\uE031':
	            return 'F1';
	        case '\uE032':
	            return 'F2';
	        case '\uE033':
	            return 'F3';
	        case '\uE034':
	            return 'F4';
	        case '\uE035':
	            return 'F5';
	        case '\uE036':
	            return 'F6';
	        case '\uE037':
	            return 'F7';
	        case '\uE038':
	            return 'F8';
	        case '\uE039':
	            return 'F9';
	        case '\uE03A':
	            return 'F10';
	        case '\uE03B':
	            return 'F11';
	        case '\uE03C':
	            return 'F12';
	        case '\uE019':
	            return 'NumpadEqual';
	        case '\uE01A':
	        case '\uE05C':
	            return 'Numpad0';
	        case '\uE01B':
	        case '\uE056':
	            return 'Numpad1';
	        case '\uE01C':
	        case '\uE05B':
	            return 'Numpad2';
	        case '\uE01D':
	        case '\uE055':
	            return 'Numpad3';
	        case '\uE01E':
	        case '\uE058':
	            return 'Numpad4';
	        case '\uE01F':
	            return 'Numpad5';
	        case '\uE020':
	        case '\uE05A':
	            return 'Numpad6';
	        case '\uE021':
	        case '\uE057':
	            return 'Numpad7';
	        case '\uE022':
	        case '\uE059':
	            return 'Numpad8';
	        case '\uE023':
	        case '\uE054':
	            return 'Numpad9';
	        case '\uE025':
	            return 'NumpadAdd';
	        case '\uE026':
	            return 'NumpadComma';
	        case '\uE028':
	        case '\uE05D':
	            return 'NumpadDecimal';
	        case '\uE029':
	            return 'NumpadDivide';
	        case '\uE007':
	            return 'NumpadEnter';
	        case '\uE024':
	            return 'NumpadMultiply';
	        case '\uE027':
	            return 'NumpadSubtract';
	        default:
	            return;
	    }
	}
	/**
	 * Returns the location of the key according to the table:
	 * https://w3c.github.io/webdriver/#dfn-key-location
	 */
	function getKeyLocation(key) {
	    switch (key) {
	        case '\uE007':
	        case '\uE008':
	        case '\uE009':
	        case '\uE00A':
	        case '\uE03D':
	            return 1;
	        case '\uE019':
	        case '\uE01A':
	        case '\uE01B':
	        case '\uE01C':
	        case '\uE01D':
	        case '\uE01E':
	        case '\uE01F':
	        case '\uE020':
	        case '\uE021':
	        case '\uE022':
	        case '\uE023':
	        case '\uE024':
	        case '\uE025':
	        case '\uE026':
	        case '\uE027':
	        case '\uE028':
	        case '\uE029':
	        case '\uE054':
	        case '\uE055':
	        case '\uE056':
	        case '\uE057':
	        case '\uE058':
	        case '\uE059':
	        case '\uE05A':
	        case '\uE05B':
	        case '\uE05C':
	        case '\uE05D':
	            return 3;
	        case '\uE050':
	        case '\uE051':
	        case '\uE052':
	        case '\uE053':
	            return 2;
	        default:
	            return 0;
	    }
	}
	
	return keyUtils;
}

var USKeyboardLayout = {};

var hasRequiredUSKeyboardLayout;

function requireUSKeyboardLayout () {
	if (hasRequiredUSKeyboardLayout) return USKeyboardLayout;
	hasRequiredUSKeyboardLayout = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(USKeyboardLayout, "__esModule", { value: true });
	USKeyboardLayout.KeyToKeyCode = undefined;
	// TODO: Remove this once https://crrev.com/c/4548290 is stably in Chromium.
	// `Input.dispatchKeyboardEvent` will automatically handle these conversions.
	USKeyboardLayout.KeyToKeyCode = {
	    '0': 48,
	    '1': 49,
	    '2': 50,
	    '3': 51,
	    '4': 52,
	    '5': 53,
	    '6': 54,
	    '7': 55,
	    '8': 56,
	    '9': 57,
	    Abort: 3,
	    Help: 6,
	    Backspace: 8,
	    Tab: 9,
	    Numpad5: 12,
	    NumpadEnter: 13,
	    Enter: 13,
	    '\\r': 13,
	    '\\n': 13,
	    ShiftLeft: 16,
	    ShiftRight: 16,
	    ControlLeft: 17,
	    ControlRight: 17,
	    AltLeft: 18,
	    AltRight: 18,
	    Pause: 19,
	    CapsLock: 20,
	    Escape: 27,
	    Convert: 28,
	    NonConvert: 29,
	    Space: 32,
	    Numpad9: 33,
	    PageUp: 33,
	    Numpad3: 34,
	    PageDown: 34,
	    End: 35,
	    Numpad1: 35,
	    Home: 36,
	    Numpad7: 36,
	    ArrowLeft: 37,
	    Numpad4: 37,
	    Numpad8: 38,
	    ArrowUp: 38,
	    ArrowRight: 39,
	    Numpad6: 39,
	    Numpad2: 40,
	    ArrowDown: 40,
	    Select: 41,
	    Open: 43,
	    PrintScreen: 44,
	    Insert: 45,
	    Numpad0: 45,
	    Delete: 46,
	    NumpadDecimal: 46,
	    Digit0: 48,
	    Digit1: 49,
	    Digit2: 50,
	    Digit3: 51,
	    Digit4: 52,
	    Digit5: 53,
	    Digit6: 54,
	    Digit7: 55,
	    Digit8: 56,
	    Digit9: 57,
	    KeyA: 65,
	    KeyB: 66,
	    KeyC: 67,
	    KeyD: 68,
	    KeyE: 69,
	    KeyF: 70,
	    KeyG: 71,
	    KeyH: 72,
	    KeyI: 73,
	    KeyJ: 74,
	    KeyK: 75,
	    KeyL: 76,
	    KeyM: 77,
	    KeyN: 78,
	    KeyO: 79,
	    KeyP: 80,
	    KeyQ: 81,
	    KeyR: 82,
	    KeyS: 83,
	    KeyT: 84,
	    KeyU: 85,
	    KeyV: 86,
	    KeyW: 87,
	    KeyX: 88,
	    KeyY: 89,
	    KeyZ: 90,
	    MetaLeft: 91,
	    MetaRight: 92,
	    ContextMenu: 93,
	    NumpadMultiply: 106,
	    NumpadAdd: 107,
	    NumpadSubtract: 109,
	    NumpadDivide: 111,
	    F1: 112,
	    F2: 113,
	    F3: 114,
	    F4: 115,
	    F5: 116,
	    F6: 117,
	    F7: 118,
	    F8: 119,
	    F9: 120,
	    F10: 121,
	    F11: 122,
	    F12: 123,
	    F13: 124,
	    F14: 125,
	    F15: 126,
	    F16: 127,
	    F17: 128,
	    F18: 129,
	    F19: 130,
	    F20: 131,
	    F21: 132,
	    F22: 133,
	    F23: 134,
	    F24: 135,
	    NumLock: 144,
	    ScrollLock: 145,
	    AudioVolumeMute: 173,
	    AudioVolumeDown: 174,
	    AudioVolumeUp: 175,
	    MediaTrackNext: 176,
	    MediaTrackPrevious: 177,
	    MediaStop: 178,
	    MediaPlayPause: 179,
	    Semicolon: 186,
	    Equal: 187,
	    NumpadEqual: 187,
	    Comma: 188,
	    Minus: 189,
	    Period: 190,
	    Slash: 191,
	    Backquote: 192,
	    BracketLeft: 219,
	    Backslash: 220,
	    BracketRight: 221,
	    Quote: 222,
	    AltGraph: 225,
	    Props: 247,
	    Cancel: 3,
	    Clear: 12,
	    Shift: 16,
	    Control: 17,
	    Alt: 18,
	    Accept: 30,
	    ModeChange: 31,
	    ' ': 32,
	    Print: 42,
	    Execute: 43,
	    '\\u0000': 46,
	    a: 65,
	    b: 66,
	    c: 67,
	    d: 68,
	    e: 69,
	    f: 70,
	    g: 71,
	    h: 72,
	    i: 73,
	    j: 74,
	    k: 75,
	    l: 76,
	    m: 77,
	    n: 78,
	    o: 79,
	    p: 80,
	    q: 81,
	    r: 82,
	    s: 83,
	    t: 84,
	    u: 85,
	    v: 86,
	    w: 87,
	    x: 88,
	    y: 89,
	    z: 90,
	    Meta: 91,
	    '*': 106,
	    '+': 107,
	    '-': 109,
	    '/': 111,
	    ';': 186,
	    '=': 187,
	    ',': 188,
	    '.': 190,
	    '`': 192,
	    '[': 219,
	    '\\\\': 220,
	    ']': 221,
	    "'": 222,
	    Attn: 246,
	    CrSel: 247,
	    ExSel: 248,
	    EraseEof: 249,
	    Play: 250,
	    ZoomOut: 251,
	    ')': 48,
	    '!': 49,
	    '@': 50,
	    '#': 51,
	    $: 52,
	    '%': 53,
	    '^': 54,
	    '&': 55,
	    '(': 57,
	    A: 65,
	    B: 66,
	    C: 67,
	    D: 68,
	    E: 69,
	    F: 70,
	    G: 71,
	    H: 72,
	    I: 73,
	    J: 74,
	    K: 75,
	    L: 76,
	    M: 77,
	    N: 78,
	    O: 79,
	    P: 80,
	    Q: 81,
	    R: 82,
	    S: 83,
	    T: 84,
	    U: 85,
	    V: 86,
	    W: 87,
	    X: 88,
	    Y: 89,
	    Z: 90,
	    ':': 186,
	    '<': 188,
	    _: 189,
	    '>': 190,
	    '?': 191,
	    '~': 192,
	    '{': 219,
	    '|': 220,
	    '}': 221,
	    '"': 222,
	    Camera: 44,
	    EndCall: 95,
	    VolumeDown: 182,
	    VolumeUp: 183,
	};
	
	return USKeyboardLayout;
}

var hasRequiredActionDispatcher;

function requireActionDispatcher () {
	if (hasRequiredActionDispatcher) return ActionDispatcher;
	hasRequiredActionDispatcher = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(ActionDispatcher, "__esModule", { value: true });
	ActionDispatcher.ActionDispatcher = undefined;
	const protocol_js_1 = requireProtocol();
	const assert_js_1 = requireAssert();
	const GraphemeTools_js_1 = requireGraphemeTools();
	const InputSource_js_1 = requireInputSource();
	const keyUtils_js_1 = requireKeyUtils();
	const USKeyboardLayout_js_1 = requireUSKeyboardLayout();
	/** https://w3c.github.io/webdriver/#dfn-center-point */
	const CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
	    const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
	    return [e + ((n - e) >> 1), h + ((m - h) >> 1)];
	}).toString();
	const IS_MAC_DECL = (() => {
	    return navigator.platform.toLowerCase().includes('mac');
	}).toString();
	async function getElementCenter(context, element) {
	    const sandbox = await context.getOrCreateSandbox(undefined);
	    const result = await sandbox.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, false, { type: 'undefined' }, [element]);
	    if (result.type === 'exception') {
	        throw new protocol_js_1.NoSuchElementException(`Origin element ${element.sharedId} was not found`);
	    }
	    (0, assert_js_1.assert)(result.result.type === 'array');
	    (0, assert_js_1.assert)(result.result.value?.[0]?.type === 'number');
	    (0, assert_js_1.assert)(result.result.value?.[1]?.type === 'number');
	    const { result: { value: [{ value: x }, { value: y }], }, } = result;
	    return { x: x, y: y };
	}
	let ActionDispatcher$1 = class ActionDispatcher {
	    static isMacOS = async (context) => {
	        const result = await (await context.getOrCreateSandbox(undefined)).callFunction(IS_MAC_DECL, false);
	        (0, assert_js_1.assert)(result.type !== 'exception');
	        (0, assert_js_1.assert)(result.result.type === 'boolean');
	        return result.result.value;
	    };
	    #tickStart = 0;
	    #tickDuration = 0;
	    #inputState;
	    #context;
	    #isMacOS;
	    constructor(inputState, context, isMacOS) {
	        this.#inputState = inputState;
	        this.#context = context;
	        this.#isMacOS = isMacOS;
	    }
	    async dispatchActions(optionsByTick) {
	        await this.#inputState.queue.run(async () => {
	            for (const options of optionsByTick) {
	                await this.dispatchTickActions(options);
	            }
	        });
	    }
	    async dispatchTickActions(options) {
	        this.#tickStart = performance.now();
	        this.#tickDuration = 0;
	        for (const { action } of options) {
	            if ('duration' in action && action.duration !== undefined) {
	                this.#tickDuration = Math.max(this.#tickDuration, action.duration);
	            }
	        }
	        const promises = [
	            new Promise((resolve) => setTimeout(resolve, this.#tickDuration)),
	        ];
	        for (const option of options) {
	            // In theory we have to wait for each action to happen, but CDP is serial,
	            // so as an optimization, we queue all CDP commands at once and await all
	            // of them.
	            promises.push(this.#dispatchAction(option));
	        }
	        await Promise.all(promises);
	    }
	    async #dispatchAction({ id, action }) {
	        const source = this.#inputState.get(id);
	        const keyState = this.#inputState.getGlobalKeyState();
	        switch (action.type) {
	            case 'keyDown': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchKeyDownAction(source, action);
	                this.#inputState.cancelList.push({
	                    id,
	                    action: {
	                        ...action,
	                        type: 'keyUp',
	                    },
	                });
	                break;
	            }
	            case 'keyUp': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchKeyUpAction(source, action);
	                break;
	            }
	            case 'pause': {
	                // TODO: Implement waiting on the input source.
	                break;
	            }
	            case 'pointerDown': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchPointerDownAction(source, keyState, action);
	                this.#inputState.cancelList.push({
	                    id,
	                    action: {
	                        ...action,
	                        type: 'pointerUp',
	                    },
	                });
	                break;
	            }
	            case 'pointerMove': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchPointerMoveAction(source, keyState, action);
	                break;
	            }
	            case 'pointerUp': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchPointerUpAction(source, keyState, action);
	                break;
	            }
	            case 'scroll': {
	                // SAFETY: The source is validated before.
	                await this.#dispatchScrollAction(source, keyState, action);
	                break;
	            }
	        }
	    }
	    async #dispatchPointerDownAction(source, keyState, action) {
	        const { button } = action;
	        if (source.pressed.has(button)) {
	            return;
	        }
	        source.pressed.add(button);
	        const { x, y, subtype: pointerType } = source;
	        const { width, height, pressure, twist, tangentialPressure } = action;
	        const { tiltX, tiltY } = getTilt(action);
	        // --- Platform-specific code begins here ---
	        const { modifiers } = keyState;
	        const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
	        switch (pointerType) {
	            case "mouse" /* Input.PointerType.Mouse */:
	            case "pen" /* Input.PointerType.Pen */:
	                // TODO: Implement width and height when available.
	                await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
	                    type: 'mousePressed',
	                    x,
	                    y,
	                    modifiers,
	                    button: getCdpButton(button),
	                    buttons: source.buttons,
	                    clickCount: source.setClickCount(button, new InputSource_js_1.PointerSource.ClickContext(x, y, performance.now())),
	                    pointerType,
	                    tangentialPressure,
	                    tiltX,
	                    tiltY,
	                    twist,
	                    force: pressure,
	                });
	                break;
	            case "touch" /* Input.PointerType.Touch */:
	                await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
	                    type: 'touchStart',
	                    touchPoints: [
	                        {
	                            x,
	                            y,
	                            radiusX,
	                            radiusY,
	                            tangentialPressure,
	                            tiltX,
	                            tiltY,
	                            twist,
	                            force: pressure,
	                            id: source.pointerId,
	                        },
	                    ],
	                    modifiers,
	                });
	                break;
	        }
	        source.radiusX = radiusX;
	        source.radiusY = radiusY;
	        source.force = pressure;
	        // --- Platform-specific code ends here ---
	    }
	    #dispatchPointerUpAction(source, keyState, action) {
	        const { button } = action;
	        if (!source.pressed.has(button)) {
	            return;
	        }
	        source.pressed.delete(button);
	        const { x, y, force, radiusX, radiusY, subtype: pointerType } = source;
	        // --- Platform-specific code begins here ---
	        const { modifiers } = keyState;
	        switch (pointerType) {
	            case "mouse" /* Input.PointerType.Mouse */:
	            case "pen" /* Input.PointerType.Pen */:
	                // TODO: Implement width and height when available.
	                return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
	                    type: 'mouseReleased',
	                    x,
	                    y,
	                    modifiers,
	                    button: getCdpButton(button),
	                    buttons: source.buttons,
	                    clickCount: source.getClickCount(button),
	                    pointerType,
	                });
	            case "touch" /* Input.PointerType.Touch */:
	                return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
	                    type: 'touchEnd',
	                    touchPoints: [
	                        {
	                            x,
	                            y,
	                            id: source.pointerId,
	                            force,
	                            radiusX,
	                            radiusY,
	                        },
	                    ],
	                    modifiers,
	                });
	        }
	        // --- Platform-specific code ends here ---
	    }
	    async #dispatchPointerMoveAction(source, keyState, action) {
	        const { x: startX, y: startY, subtype: pointerType } = source;
	        const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = 'viewport', duration = this.#tickDuration, } = action;
	        const { tiltX, tiltY } = getTilt(action);
	        const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
	        const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY);
	        if (targetX < 0 || targetY < 0) {
	            throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
	        }
	        let last;
	        do {
	            const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
	            last = ratio >= 1;
	            let x;
	            let y;
	            if (last) {
	                x = targetX;
	                y = targetY;
	            }
	            else {
	                x = Math.round(ratio * (targetX - startX) + startX);
	                y = Math.round(ratio * (targetY - startY) + startY);
	            }
	            if (source.x !== x || source.y !== y) {
	                // --- Platform-specific code begins here ---
	                const { modifiers } = keyState;
	                switch (pointerType) {
	                    case "mouse" /* Input.PointerType.Mouse */:
	                        // TODO: Implement width and height when available.
	                        await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
	                            type: 'mouseMoved',
	                            x,
	                            y,
	                            modifiers,
	                            clickCount: 0,
	                            button: getCdpButton(source.pressed.values().next().value ?? 5),
	                            buttons: source.buttons,
	                            pointerType,
	                            tangentialPressure,
	                            tiltX,
	                            tiltY,
	                            twist,
	                            force: pressure,
	                        });
	                        break;
	                    case "pen" /* Input.PointerType.Pen */:
	                        if (source.pressed.size !== 0) {
	                            // Empty `source.pressed.size` means the pen is not detected by digitizer.
	                            // Dispatch a mouse event for the pen only if either:
	                            // 1. the pen is hovering over the digitizer (0);
	                            // 2. the pen is in contact with the digitizer (1);
	                            // 3. the pen has at least one button pressed (2, 4, etc).
	                            // https://www.w3.org/TR/pointerevents/#the-buttons-property
	                            // TODO: Implement width and height when available.
	                            await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
	                                type: 'mouseMoved',
	                                x,
	                                y,
	                                modifiers,
	                                clickCount: 0,
	                                button: getCdpButton(source.pressed.values().next().value ?? 5),
	                                buttons: source.buttons,
	                                pointerType,
	                                tangentialPressure,
	                                tiltX,
	                                tiltY,
	                                twist,
	                                force: pressure ?? 0.5,
	                            });
	                        }
	                        break;
	                    case "touch" /* Input.PointerType.Touch */:
	                        if (source.pressed.size !== 0) {
	                            await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
	                                type: 'touchMove',
	                                touchPoints: [
	                                    {
	                                        x,
	                                        y,
	                                        radiusX,
	                                        radiusY,
	                                        tangentialPressure,
	                                        tiltX,
	                                        tiltY,
	                                        twist,
	                                        force: pressure,
	                                        id: source.pointerId,
	                                    },
	                                ],
	                                modifiers,
	                            });
	                        }
	                        break;
	                }
	                // --- Platform-specific code ends here ---
	                source.x = x;
	                source.y = y;
	                source.radiusX = radiusX;
	                source.radiusY = radiusY;
	                source.force = pressure;
	            }
	        } while (!last);
	    }
	    async #getFrameOffset() {
	        if (this.#context.id === this.#context.cdpTarget.id) {
	            return { x: 0, y: 0 };
	        }
	        // https://github.com/w3c/webdriver/pull/1847 proposes dispatching events from
	        // the top-level browsing context. This implementation dispatches it on the top-most
	        // same-target frame, which is not top-level one in case of OOPiF.
	        // TODO: switch to the top-level browsing context.
	        const { backendNodeId } = await this.#context.cdpTarget.cdpClient.sendCommand('DOM.getFrameOwner', { frameId: this.#context.id });
	        const { model: frameBoxModel } = await this.#context.cdpTarget.cdpClient.sendCommand('DOM.getBoxModel', {
	            backendNodeId,
	        });
	        return { x: frameBoxModel.content[0], y: frameBoxModel.content[1] };
	    }
	    async #getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY) {
	        let targetX;
	        let targetY;
	        const frameOffset = await this.#getFrameOffset();
	        switch (origin) {
	            case 'viewport':
	                targetX = offsetX + frameOffset.x;
	                targetY = offsetY + frameOffset.y;
	                break;
	            case 'pointer':
	                targetX = startX + offsetX + frameOffset.x;
	                targetY = startY + offsetY + frameOffset.y;
	                break;
	            default: {
	                const { x: posX, y: posY } = await getElementCenter(this.#context, origin.element);
	                // SAFETY: These can never be special numbers.
	                targetX = posX + offsetX + frameOffset.x;
	                targetY = posY + offsetY + frameOffset.y;
	                break;
	            }
	        }
	        return { targetX, targetY };
	    }
	    async #dispatchScrollAction(_source, keyState, action) {
	        const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = 'viewport', duration = this.#tickDuration, } = action;
	        if (origin === 'pointer') {
	            throw new protocol_js_1.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
	        }
	        const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, 0, 0);
	        if (targetX < 0 || targetY < 0) {
	            throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
	        }
	        let currentDeltaX = 0;
	        let currentDeltaY = 0;
	        let last;
	        do {
	            const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
	            last = ratio >= 1;
	            let deltaX;
	            let deltaY;
	            if (last) {
	                deltaX = targetDeltaX - currentDeltaX;
	                deltaY = targetDeltaY - currentDeltaY;
	            }
	            else {
	                deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
	                deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
	            }
	            if (deltaX !== 0 || deltaY !== 0) {
	                // --- Platform-specific code begins here ---
	                const { modifiers } = keyState;
	                await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
	                    type: 'mouseWheel',
	                    deltaX,
	                    deltaY,
	                    x: targetX,
	                    y: targetY,
	                    modifiers,
	                });
	                // --- Platform-specific code ends here ---
	                currentDeltaX += deltaX;
	                currentDeltaY += deltaY;
	            }
	        } while (!last);
	    }
	    async #dispatchKeyDownAction(source, action) {
	        const rawKey = action.value;
	        if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
	            // https://w3c.github.io/webdriver/#dfn-process-a-key-action
	            // WebDriver spec allows a grapheme to be used.
	            throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
	        }
	        const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
	        const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
	        const repeat = source.pressed.has(key);
	        const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
	        const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
	        switch (key) {
	            case 'Alt':
	                source.alt = true;
	                break;
	            case 'Shift':
	                source.shift = true;
	                break;
	            case 'Control':
	                source.ctrl = true;
	                break;
	            case 'Meta':
	                source.meta = true;
	                break;
	        }
	        source.pressed.add(key);
	        const { modifiers } = source;
	        // --- Platform-specific code begins here ---
	        // The spread is a little hack so JS gives us an array of unicode characters
	        // to measure.
	        const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
	        const text = getKeyEventText(code ?? '', source) ?? unmodifiedText;
	        let command;
	        // The following commands need to be declared because Chromium doesn't
	        // handle them. See
	        // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:third_party/blink/renderer/core/editing/editing_behavior.cc;l=169;drc=b8143cf1dfd24842890fcd831c4f5d909bef4fc4;bpv=0;bpt=1.
	        if (this.#isMacOS && source.meta) {
	            switch (code) {
	                case 'KeyA':
	                    command = 'SelectAll';
	                    break;
	                case 'KeyC':
	                    command = 'Copy';
	                    break;
	                case 'KeyV':
	                    command = source.shift ? 'PasteAndMatchStyle' : 'Paste';
	                    break;
	                case 'KeyX':
	                    command = 'Cut';
	                    break;
	                case 'KeyZ':
	                    command = source.shift ? 'Redo' : 'Undo';
	                    break;
	                // Intentionally empty.
	            }
	        }
	        const promises = [
	            this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchKeyEvent', {
	                type: text ? 'keyDown' : 'rawKeyDown',
	                windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
	                key,
	                code,
	                text,
	                unmodifiedText,
	                autoRepeat: repeat,
	                isSystemKey: source.alt || undefined,
	                location: location < 3 ? location : undefined,
	                isKeypad: location === 3,
	                modifiers,
	                commands: command ? [command] : undefined,
	            }),
	        ];
	        // Drag cancelling happens on escape.
	        if (key === 'Escape') {
	            if (!source.alt &&
	                ((this.#isMacOS && !source.ctrl && !source.meta) || !this.#isMacOS)) {
	                promises.push(this.#context.cdpTarget.cdpClient.sendCommand('Input.cancelDragging'));
	            }
	        }
	        await Promise.all(promises);
	        // --- Platform-specific code ends here ---
	    }
	    #dispatchKeyUpAction(source, action) {
	        const rawKey = action.value;
	        if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
	            // https://w3c.github.io/webdriver/#dfn-process-a-key-action
	            // WebDriver spec allows a grapheme to be used.
	            throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
	        }
	        const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
	        const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
	        if (!source.pressed.has(key)) {
	            return;
	        }
	        const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
	        const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
	        switch (key) {
	            case 'Alt':
	                source.alt = false;
	                break;
	            case 'Shift':
	                source.shift = false;
	                break;
	            case 'Control':
	                source.ctrl = false;
	                break;
	            case 'Meta':
	                source.meta = false;
	                break;
	        }
	        source.pressed.delete(key);
	        const { modifiers } = source;
	        // --- Platform-specific code begins here ---
	        // The spread is a little hack so JS gives us an array of unicode characters
	        // to measure.
	        const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
	        const text = getKeyEventText(code ?? '', source) ?? unmodifiedText;
	        return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchKeyEvent', {
	            type: 'keyUp',
	            windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
	            key,
	            code,
	            text,
	            unmodifiedText,
	            location: location < 3 ? location : undefined,
	            isSystemKey: source.alt || undefined,
	            isKeypad: location === 3,
	            modifiers,
	        });
	        // --- Platform-specific code ends here ---
	    }
	};
	ActionDispatcher.ActionDispatcher = ActionDispatcher$1;
	/**
	 * Translates a non-grapheme key to either an `undefined` for a special keys, or a single
	 * character modified by shift if needed.
	 */
	const getKeyEventUnmodifiedText = (key, source, isGrapheme) => {
	    if (isGrapheme) {
	        // Graphemes should be presented as text in the CDP command.
	        return key;
	    }
	    if (key === 'Enter') {
	        return '\r';
	    }
	    // If key is not a single character, it is a normalized key value, and should be
	    // presented as key, not text in the CDP command.
	    return [...key].length === 1
	        ? source.shift
	            ? key.toLocaleUpperCase('en-US')
	            : key
	        : undefined;
	};
	const getKeyEventText = (code, source) => {
	    if (source.ctrl) {
	        switch (code) {
	            case 'Digit2':
	                if (source.shift) {
	                    return '\x00';
	                }
	                break;
	            case 'KeyA':
	                return '\x01';
	            case 'KeyB':
	                return '\x02';
	            case 'KeyC':
	                return '\x03';
	            case 'KeyD':
	                return '\x04';
	            case 'KeyE':
	                return '\x05';
	            case 'KeyF':
	                return '\x06';
	            case 'KeyG':
	                return '\x07';
	            case 'KeyH':
	                return '\x08';
	            case 'KeyI':
	                return '\x09';
	            case 'KeyJ':
	                return '\x0A';
	            case 'KeyK':
	                return '\x0B';
	            case 'KeyL':
	                return '\x0C';
	            case 'KeyM':
	                return '\x0D';
	            case 'KeyN':
	                return '\x0E';
	            case 'KeyO':
	                return '\x0F';
	            case 'KeyP':
	                return '\x10';
	            case 'KeyQ':
	                return '\x11';
	            case 'KeyR':
	                return '\x12';
	            case 'KeyS':
	                return '\x13';
	            case 'KeyT':
	                return '\x14';
	            case 'KeyU':
	                return '\x15';
	            case 'KeyV':
	                return '\x16';
	            case 'KeyW':
	                return '\x17';
	            case 'KeyX':
	                return '\x18';
	            case 'KeyY':
	                return '\x19';
	            case 'KeyZ':
	                return '\x1A';
	            case 'BracketLeft':
	                return '\x1B';
	            case 'Backslash':
	                return '\x1C';
	            case 'BracketRight':
	                return '\x1D';
	            case 'Digit6':
	                if (source.shift) {
	                    return '\x1E';
	                }
	                break;
	            case 'Minus':
	                return '\x1F';
	        }
	        return '';
	    }
	    if (source.alt) {
	        return '';
	    }
	    return;
	};
	function getCdpButton(button) {
	    // https://www.w3.org/TR/pointerevents/#the-button-property
	    switch (button) {
	        case 0:
	            return 'left';
	        case 1:
	            return 'middle';
	        case 2:
	            return 'right';
	        case 3:
	            return 'back';
	        case 4:
	            return 'forward';
	        default:
	            return 'none';
	    }
	}
	function getTilt(action) {
	    // https://w3c.github.io/pointerevents/#converting-between-tiltx-tilty-and-altitudeangle-azimuthangle
	    const altitudeAngle = action.altitudeAngle ?? Math.PI / 2;
	    const azimuthAngle = action.azimuthAngle ?? 0;
	    let tiltXRadians = 0;
	    let tiltYRadians = 0;
	    if (altitudeAngle === 0) {
	        // the pen is in the X-Y plane
	        if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
	            // pen is on positive X axis
	            tiltXRadians = Math.PI / 2;
	        }
	        if (azimuthAngle === Math.PI / 2) {
	            // pen is on positive Y axis
	            tiltYRadians = Math.PI / 2;
	        }
	        if (azimuthAngle === Math.PI) {
	            // pen is on negative X axis
	            tiltXRadians = -Math.PI / 2;
	        }
	        if (azimuthAngle === (3 * Math.PI) / 2) {
	            // pen is on negative Y axis
	            tiltYRadians = -Math.PI / 2;
	        }
	        if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
	            tiltXRadians = Math.PI / 2;
	            tiltYRadians = Math.PI / 2;
	        }
	        if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
	            tiltXRadians = -Math.PI / 2;
	            tiltYRadians = Math.PI / 2;
	        }
	        if (azimuthAngle > Math.PI && azimuthAngle < (3 * Math.PI) / 2) {
	            tiltXRadians = -Math.PI / 2;
	            tiltYRadians = -Math.PI / 2;
	        }
	        if (azimuthAngle > (3 * Math.PI) / 2 && azimuthAngle < 2 * Math.PI) {
	            tiltXRadians = Math.PI / 2;
	            tiltYRadians = -Math.PI / 2;
	        }
	    }
	    if (altitudeAngle !== 0) {
	        const tanAlt = Math.tan(altitudeAngle);
	        tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
	        tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
	    }
	    const factor = 180 / Math.PI;
	    return {
	        tiltX: Math.round(tiltXRadians * factor),
	        tiltY: Math.round(tiltYRadians * factor),
	    };
	}
	function getRadii(width, height) {
	    return {
	        radiusX: width ? width / 2 : 0.5,
	        radiusY: height ? height / 2 : 0.5,
	    };
	}
	
	return ActionDispatcher;
}

var InputStateManager = {};

var InputState = {};

var Mutex = {};

var hasRequiredMutex;

function requireMutex () {
	if (hasRequiredMutex) return Mutex;
	hasRequiredMutex = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 * Copyright 2022 The Chromium Authors.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(Mutex, "__esModule", { value: true });
	Mutex.Mutex = undefined;
	/**
	 * Use Mutex class to coordinate local concurrent operations.
	 * Once `acquire` promise resolves, you hold the lock and must
	 * call `release` function returned by `acquire` to release the
	 * lock. Failing to `release` the lock may lead to deadlocks.
	 */
	let Mutex$1 = class Mutex {
	    #locked = false;
	    #acquirers = [];
	    // This is FIFO.
	    acquire() {
	        const state = { resolved: false };
	        if (this.#locked) {
	            return new Promise((resolve) => {
	                this.#acquirers.push(() => resolve(this.#release.bind(this, state)));
	            });
	        }
	        this.#locked = true;
	        return Promise.resolve(this.#release.bind(this, state));
	    }
	    #release(state) {
	        if (state.resolved) {
	            throw new Error('Cannot release more than once.');
	        }
	        state.resolved = true;
	        const resolve = this.#acquirers.shift();
	        if (!resolve) {
	            this.#locked = false;
	            return;
	        }
	        resolve();
	    }
	    async run(action) {
	        const release = await this.acquire();
	        try {
	            // Note we need to await here because we want the await to release AFTER
	            // that await happens. Returning action() will trigger the release
	            // immediately which is counter to what we want.
	            const result = await action();
	            return result;
	        }
	        finally {
	            release();
	        }
	    }
	};
	Mutex.Mutex = Mutex$1;
	
	return Mutex;
}

var hasRequiredInputState;

function requireInputState () {
	if (hasRequiredInputState) return InputState;
	hasRequiredInputState = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(InputState, "__esModule", { value: true });
	InputState.InputState = undefined;
	const protocol_js_1 = requireProtocol();
	const Mutex_js_1 = requireMutex();
	const InputSource_js_1 = requireInputSource();
	let InputState$1 = class InputState {
	    cancelList = [];
	    #sources = new Map();
	    #mutex = new Mutex_js_1.Mutex();
	    getOrCreate(id, type, subtype) {
	        let source = this.#sources.get(id);
	        if (!source) {
	            switch (type) {
	                case "none" /* SourceType.None */:
	                    source = new InputSource_js_1.NoneSource();
	                    break;
	                case "key" /* SourceType.Key */:
	                    source = new InputSource_js_1.KeySource();
	                    break;
	                case "pointer" /* SourceType.Pointer */: {
	                    let pointerId = subtype === "mouse" /* Input.PointerType.Mouse */ ? 0 : 2;
	                    const pointerIds = new Set();
	                    for (const [, source] of this.#sources) {
	                        if (source.type === "pointer" /* SourceType.Pointer */) {
	                            pointerIds.add(source.pointerId);
	                        }
	                    }
	                    while (pointerIds.has(pointerId)) {
	                        ++pointerId;
	                    }
	                    source = new InputSource_js_1.PointerSource(pointerId, subtype);
	                    break;
	                }
	                case "wheel" /* SourceType.Wheel */:
	                    source = new InputSource_js_1.WheelSource();
	                    break;
	                default:
	                    throw new protocol_js_1.InvalidArgumentException(`Expected "${"none" /* SourceType.None */}", "${"key" /* SourceType.Key */}", "${"pointer" /* SourceType.Pointer */}", or "${"wheel" /* SourceType.Wheel */}". Found unknown source type ${type}.`);
	            }
	            this.#sources.set(id, source);
	            return source;
	        }
	        if (source.type !== type) {
	            throw new protocol_js_1.InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
	        }
	        return source;
	    }
	    get(id) {
	        const source = this.#sources.get(id);
	        if (!source) {
	            throw new protocol_js_1.UnknownErrorException(`Internal error.`);
	        }
	        return source;
	    }
	    getGlobalKeyState() {
	        const state = new InputSource_js_1.KeySource();
	        for (const [, source] of this.#sources) {
	            if (source.type !== "key" /* SourceType.Key */) {
	                continue;
	            }
	            for (const pressed of source.pressed) {
	                state.pressed.add(pressed);
	            }
	            state.alt ||= source.alt;
	            state.ctrl ||= source.ctrl;
	            state.meta ||= source.meta;
	            state.shift ||= source.shift;
	        }
	        return state;
	    }
	    get queue() {
	        return this.#mutex;
	    }
	};
	InputState.InputState = InputState$1;
	
	return InputState;
}

var hasRequiredInputStateManager;

function requireInputStateManager () {
	if (hasRequiredInputStateManager) return InputStateManager;
	hasRequiredInputStateManager = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(InputStateManager, "__esModule", { value: true });
	InputStateManager.InputStateManager = undefined;
	const assert_js_1 = requireAssert();
	const InputState_js_1 = requireInputState();
	// We use a weak map here as specified here:
	// https://www.w3.org/TR/webdriver/#dfn-browsing-context-input-state-map
	let InputStateManager$1 = class InputStateManager extends WeakMap {
	    get(context) {
	        (0, assert_js_1.assert)(context.isTopLevelContext());
	        if (!this.has(context)) {
	            this.set(context, new InputState_js_1.InputState());
	        }
	        return super.get(context);
	    }
	};
	InputStateManager.InputStateManager = InputStateManager$1;
	
	return InputStateManager;
}

var hasRequiredInputProcessor;

function requireInputProcessor () {
	if (hasRequiredInputProcessor) return InputProcessor;
	hasRequiredInputProcessor = 1;
	Object.defineProperty(InputProcessor, "__esModule", { value: true });
	InputProcessor.InputProcessor = undefined;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const protocol_js_1 = requireProtocol();
	const assert_js_1 = requireAssert();
	const ActionDispatcher_js_1 = requireActionDispatcher();
	const InputStateManager_js_1 = requireInputStateManager();
	let InputProcessor$1 = class InputProcessor {
	    #browsingContextStorage;
	    #inputStateManager = new InputStateManager_js_1.InputStateManager();
	    constructor(browsingContextStorage) {
	        this.#browsingContextStorage = browsingContextStorage;
	    }
	    async performActions(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        const inputState = this.#inputStateManager.get(context.top);
	        const actionsByTick = this.#getActionsByTick(params, inputState);
	        const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
	        await dispatcher.dispatchActions(actionsByTick);
	        return {};
	    }
	    async releaseActions(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        const topContext = context.top;
	        const inputState = this.#inputStateManager.get(topContext);
	        const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
	        await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
	        this.#inputStateManager.delete(topContext);
	        return {};
	    }
	    async setFiles(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        const realm = await context.getOrCreateSandbox(undefined);
	        let result;
	        try {
	            result = await realm.callFunction(String(function getFiles(fileListLength) {
	                if (!(this instanceof HTMLInputElement)) {
	                    if (this instanceof Element) {
	                        return 1 /* ErrorCode.Element */;
	                    }
	                    return 0 /* ErrorCode.Node */;
	                }
	                if (this.type !== 'file') {
	                    return 2 /* ErrorCode.Type */;
	                }
	                if (this.disabled) {
	                    return 3 /* ErrorCode.Disabled */;
	                }
	                if (fileListLength > 1 && !this.multiple) {
	                    return 4 /* ErrorCode.Multiple */;
	                }
	                return;
	            }), false, params.element, [{ type: 'number', value: params.files.length }]);
	        }
	        catch {
	            throw new protocol_js_1.NoSuchNodeException(`Could not find element ${params.element.sharedId}`);
	        }
	        (0, assert_js_1.assert)(result.type === 'success');
	        if (result.result.type === 'number') {
	            switch (result.result.value) {
	                case 0 /* ErrorCode.Node */: {
	                    throw new protocol_js_1.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
	                }
	                case 1 /* ErrorCode.Element */: {
	                    throw new protocol_js_1.UnableToSetFileInputException(`Element ${params.element.sharedId} is not a input`);
	                }
	                case 2 /* ErrorCode.Type */: {
	                    throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is not a file type`);
	                }
	                case 3 /* ErrorCode.Disabled */: {
	                    throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
	                }
	                case 4 /* ErrorCode.Multiple */: {
	                    throw new protocol_js_1.UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
	                }
	            }
	        }
	        /**
	         * The zero-length array is a special case, it seems that
	         * DOM.setFileInputFiles does not actually update the files in that case, so
	         * the solution is to eval the element value to a new FileList directly.
	         */
	        if (params.files.length === 0) {
	            // XXX: These events should converted to trusted events. Perhaps do this
	            // in `DOM.setFileInputFiles`?
	            await realm.callFunction(String(function dispatchEvent() {
	                if (this.files?.length === 0) {
	                    this.dispatchEvent(new Event('cancel', {
	                        bubbles: true,
	                    }));
	                    return;
	                }
	                this.files = new DataTransfer().files;
	                // Dispatch events for this case because it should behave akin to a user action.
	                this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
	                this.dispatchEvent(new Event('change', { bubbles: true }));
	            }), false, params.element);
	            return {};
	        }
	        // Our goal here is to iterate over the input element files and get their
	        // file paths.
	        const paths = [];
	        for (let i = 0; i < params.files.length; ++i) {
	            const result = await realm.callFunction(String(function getFiles(index) {
	                return this.files?.item(index);
	            }), false, params.element, [{ type: 'number', value: 0 }], "root" /* Script.ResultOwnership.Root */);
	            (0, assert_js_1.assert)(result.type === 'success');
	            if (result.result.type !== 'object') {
	                break;
	            }
	            const { handle } = result.result;
	            (0, assert_js_1.assert)(handle !== undefined);
	            const { path } = await realm.cdpClient.sendCommand('DOM.getFileInfo', {
	                objectId: handle,
	            });
	            paths.push(path);
	            // Cleanup the handle.
	            void realm.disown(handle).catch(undefined);
	        }
	        paths.sort();
	        // We create a new array so we preserve the order of the original files.
	        const sortedFiles = [...params.files].sort();
	        if (paths.length !== params.files.length ||
	            sortedFiles.some((path, index) => {
	                return paths[index] !== path;
	            })) {
	            const { objectId } = await realm.deserializeForCdp(params.element);
	            // This cannot throw since this was just used in `callFunction` above.
	            (0, assert_js_1.assert)(objectId !== undefined);
	            await realm.cdpClient.sendCommand('DOM.setFileInputFiles', {
	                files: params.files,
	                objectId,
	            });
	        }
	        else {
	            // XXX: We should dispatch a trusted event.
	            await realm.callFunction(String(function dispatchEvent() {
	                this.dispatchEvent(new Event('cancel', {
	                    bubbles: true,
	                }));
	            }), false, params.element);
	        }
	        return {};
	    }
	    #getActionsByTick(params, inputState) {
	        const actionsByTick = [];
	        for (const action of params.actions) {
	            switch (action.type) {
	                case "pointer" /* SourceType.Pointer */: {
	                    action.parameters ??= { pointerType: "mouse" /* Input.PointerType.Mouse */ };
	                    action.parameters.pointerType ??= "mouse" /* Input.PointerType.Mouse */;
	                    const source = inputState.getOrCreate(action.id, "pointer" /* SourceType.Pointer */, action.parameters.pointerType);
	                    if (source.subtype !== action.parameters.pointerType) {
	                        throw new protocol_js_1.InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
	                    }
	                    break;
	                }
	                default:
	                    inputState.getOrCreate(action.id, action.type);
	            }
	            const actions = action.actions.map((item) => ({
	                id: action.id,
	                action: item,
	            }));
	            for (let i = 0; i < actions.length; i++) {
	                if (actionsByTick.length === i) {
	                    actionsByTick.push([]);
	                }
	                actionsByTick[i].push(actions[i]);
	            }
	        }
	        return actionsByTick;
	    }
	};
	InputProcessor.InputProcessor = InputProcessor$1;
	
	return InputProcessor;
}

var NetworkProcessor = {};

var NetworkUtils = {};

var Base64 = {};

var hasRequiredBase64;

function requireBase64 () {
	if (hasRequiredBase64) return Base64;
	hasRequiredBase64 = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(Base64, "__esModule", { value: true });
	Base64.base64ToString = base64ToString;
	/**
	 * Encodes a string to base64.
	 *
	 * Uses the native Web API if available, otherwise falls back to a NodeJS Buffer.
	 * @param {string} base64Str
	 * @return {string}
	 */
	function base64ToString(base64Str) {
	    // Available only if run in a browser context.
	    if ('atob' in globalThis) {
	        return globalThis.atob(base64Str);
	    }
	    // Available only if run in a NodeJS context.
	    return Buffer.from(base64Str, 'base64').toString('ascii');
	}
	
	return Base64;
}

var hasRequiredNetworkUtils;

function requireNetworkUtils () {
	if (hasRequiredNetworkUtils) return NetworkUtils;
	hasRequiredNetworkUtils = 1;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	Object.defineProperty(NetworkUtils, "__esModule", { value: true });
	NetworkUtils.computeHeadersSize = computeHeadersSize;
	NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = bidiNetworkHeadersFromCdpNetworkHeaders;
	NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeadersEntries = bidiNetworkHeadersFromCdpNetworkHeadersEntries;
	NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = cdpNetworkHeadersFromBidiNetworkHeaders;
	NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = bidiNetworkHeadersFromCdpFetchHeaders;
	NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = cdpFetchHeadersFromBidiNetworkHeaders;
	NetworkUtils.networkHeaderFromCookieHeaders = networkHeaderFromCookieHeaders;
	NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction;
	NetworkUtils.cdpToBiDiCookie = cdpToBiDiCookie;
	NetworkUtils.deserializeByteValue = deserializeByteValue;
	NetworkUtils.bidiToCdpCookie = bidiToCdpCookie;
	NetworkUtils.sameSiteBiDiToCdp = sameSiteBiDiToCdp;
	NetworkUtils.isSpecialScheme = isSpecialScheme;
	NetworkUtils.matchUrlPattern = matchUrlPattern;
	NetworkUtils.bidiBodySizeFromCdpPostDataEntries = bidiBodySizeFromCdpPostDataEntries;
	NetworkUtils.getTiming = getTiming;
	const ErrorResponse_js_1 = requireErrorResponse();
	const Base64_js_1 = requireBase64();
	function computeHeadersSize(headers) {
	    const requestHeaders = headers.reduce((acc, header) => {
	        return `${acc}${header.name}: ${header.value.value}\r\n`;
	    }, '');
	    return new TextEncoder().encode(requestHeaders).length;
	}
	/** Converts from CDP Network domain headers to BiDi network headers. */
	function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
	    if (!headers) {
	        return [];
	    }
	    return Object.entries(headers).map(([name, value]) => ({
	        name,
	        value: {
	            type: 'string',
	            value,
	        },
	    }));
	}
	/** Converts from CDP Fetch domain headers to BiDi network headers. */
	function bidiNetworkHeadersFromCdpNetworkHeadersEntries(headers) {
	    if (!headers) {
	        return [];
	    }
	    return headers.map(({ name, value }) => ({
	        name,
	        value: {
	            type: 'string',
	            value,
	        },
	    }));
	}
	/** Converts from Bidi network headers to CDP Network domain headers. */
	function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
	    if (headers === undefined) {
	        return undefined;
	    }
	    return headers.reduce((result, header) => {
	        // TODO: Distinguish between string and bytes?
	        result[header.name] = header.value.value;
	        return result;
	    }, {});
	}
	/** Converts from CDP Fetch domain header entries to Bidi network headers. */
	function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
	    if (!headers) {
	        return [];
	    }
	    return headers.map(({ name, value }) => ({
	        name,
	        value: {
	            type: 'string',
	            value,
	        },
	    }));
	}
	/** Converts from Bidi network headers to CDP Fetch domain header entries. */
	function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
	    if (headers === undefined) {
	        return undefined;
	    }
	    return headers.map(({ name, value }) => ({
	        name,
	        value: value.value,
	    }));
	}
	function networkHeaderFromCookieHeaders(headers) {
	    if (headers === undefined) {
	        return undefined;
	    }
	    const value = headers.reduce((acc, value, index) => {
	        if (index > 0) {
	            acc += ';';
	        }
	        const cookieValue = value.value.type === 'base64'
	            ? btoa(value.value.value)
	            : value.value.value;
	        acc += `${value.name}=${cookieValue}`;
	        return acc;
	    }, '');
	    return {
	        name: 'Cookie',
	        value: {
	            type: 'string',
	            value,
	        },
	    };
	}
	/** Converts from Bidi auth action to CDP auth challenge response. */
	function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
	    switch (action) {
	        case 'default':
	            return 'Default';
	        case 'cancel':
	            return 'CancelAuth';
	        case 'provideCredentials':
	            return 'ProvideCredentials';
	    }
	}
	/**
	 * Converts from CDP Network domain cookie to BiDi network cookie.
	 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-Cookie
	 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
	 */
	function cdpToBiDiCookie(cookie) {
	    const result = {
	        name: cookie.name,
	        value: { type: 'string', value: cookie.value },
	        domain: cookie.domain,
	        path: cookie.path,
	        size: cookie.size,
	        httpOnly: cookie.httpOnly,
	        secure: cookie.secure,
	        sameSite: cookie.sameSite === undefined
	            ? "none" /* Network.SameSite.None */
	            : sameSiteCdpToBiDi(cookie.sameSite),
	        ...(cookie.expires >= 0 ? { expiry: cookie.expires } : undefined),
	    };
	    // Extending with CDP-specific properties with `goog:` prefix.
	    result[`goog:session`] = cookie.session;
	    result[`goog:priority`] = cookie.priority;
	    result[`goog:sameParty`] = cookie.sameParty;
	    result[`goog:sourceScheme`] = cookie.sourceScheme;
	    result[`goog:sourcePort`] = cookie.sourcePort;
	    if (cookie.partitionKey !== undefined) {
	        result[`goog:partitionKey`] = cookie.partitionKey;
	    }
	    if (cookie.partitionKeyOpaque !== undefined) {
	        result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
	    }
	    return result;
	}
	/**
	 * Decodes a byte value to a string.
	 * @param {Network.BytesValue} value
	 * @return {string}
	 */
	function deserializeByteValue(value) {
	    if (value.type === 'base64') {
	        return (0, Base64_js_1.base64ToString)(value.value);
	    }
	    return value.value;
	}
	/**
	 * Converts from BiDi set network cookie params to CDP Network domain cookie.
	 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
	 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-CookieParam
	 */
	function bidiToCdpCookie(params, partitionKey) {
	    const deserializedValue = deserializeByteValue(params.cookie.value);
	    const result = {
	        name: params.cookie.name,
	        value: deserializedValue,
	        domain: params.cookie.domain,
	        path: params.cookie.path ?? '/',
	        secure: params.cookie.secure ?? false,
	        httpOnly: params.cookie.httpOnly ?? false,
	        ...(partitionKey.sourceOrigin !== undefined && {
	            partitionKey: {
	                hasCrossSiteAncestor: false,
	                // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
	                topLevelSite: partitionKey.sourceOrigin,
	            },
	        }),
	        ...(params.cookie.expiry !== undefined && {
	            expires: params.cookie.expiry,
	        }),
	        ...(params.cookie.sameSite !== undefined && {
	            sameSite: sameSiteBiDiToCdp(params.cookie.sameSite),
	        }),
	    };
	    // Extending with CDP-specific properties with `goog:` prefix.
	    if (params.cookie[`goog:url`] !== undefined) {
	        result.url = params.cookie[`goog:url`];
	    }
	    if (params.cookie[`goog:priority`] !== undefined) {
	        result.priority = params.cookie[`goog:priority`];
	    }
	    if (params.cookie[`goog:sameParty`] !== undefined) {
	        result.sameParty = params.cookie[`goog:sameParty`];
	    }
	    if (params.cookie[`goog:sourceScheme`] !== undefined) {
	        result.sourceScheme = params.cookie[`goog:sourceScheme`];
	    }
	    if (params.cookie[`goog:sourcePort`] !== undefined) {
	        result.sourcePort = params.cookie[`goog:sourcePort`];
	    }
	    return result;
	}
	function sameSiteCdpToBiDi(sameSite) {
	    switch (sameSite) {
	        case 'Strict':
	            return "strict" /* Network.SameSite.Strict */;
	        case 'None':
	            return "none" /* Network.SameSite.None */;
	        case 'Lax':
	            return "lax" /* Network.SameSite.Lax */;
	        default:
	            // Defaults to `Lax`:
	            // https://web.dev/articles/samesite-cookies-explained#samesitelax_by_default
	            return "lax" /* Network.SameSite.Lax */;
	    }
	}
	function sameSiteBiDiToCdp(sameSite) {
	    switch (sameSite) {
	        case "strict" /* Network.SameSite.Strict */:
	            return 'Strict';
	        case "lax" /* Network.SameSite.Lax */:
	            return 'Lax';
	        case "none" /* Network.SameSite.None */:
	            return 'None';
	    }
	    throw new ErrorResponse_js_1.InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
	}
	/**
	 * Returns true if the given protocol is special.
	 * Special protocols are those that have a default port.
	 *
	 * Example inputs: 'http', 'http:'
	 *
	 * @see https://url.spec.whatwg.org/#special-scheme
	 */
	function isSpecialScheme(protocol) {
	    return ['ftp', 'file', 'http', 'https', 'ws', 'wss'].includes(protocol.replace(/:$/, ''));
	}
	function getScheme(url) {
	    return url.protocol.replace(/:$/, '');
	}
	/** Matches the given URLPattern against the given URL. */
	function matchUrlPattern(pattern, url) {
	    // Roughly https://w3c.github.io/webdriver-bidi/#match-url-pattern
	    // plus some differences based on the URL parsing methods.
	    const parsedUrl = new URL(url);
	    if (pattern.protocol !== undefined &&
	        pattern.protocol !== getScheme(parsedUrl)) {
	        return false;
	    }
	    if (pattern.hostname !== undefined &&
	        pattern.hostname !== parsedUrl.hostname) {
	        return false;
	    }
	    if (pattern.port !== undefined && pattern.port !== parsedUrl.port) {
	        return false;
	    }
	    if (pattern.pathname !== undefined &&
	        pattern.pathname !== parsedUrl.pathname) {
	        return false;
	    }
	    if (pattern.search !== undefined && pattern.search !== parsedUrl.search) {
	        return false;
	    }
	    return true;
	}
	function bidiBodySizeFromCdpPostDataEntries(entries) {
	    let size = 0;
	    for (const entry of entries) {
	        size += atob(entry.bytes ?? '').length;
	    }
	    return size;
	}
	function getTiming(timing) {
	    if (!timing) {
	        return 0;
	    }
	    if (timing < 0) {
	        return 0;
	    }
	    return timing;
	}
	
	return NetworkUtils;
}

var hasRequiredNetworkProcessor;

function requireNetworkProcessor () {
	if (hasRequiredNetworkProcessor) return NetworkProcessor;
	hasRequiredNetworkProcessor = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(NetworkProcessor, "__esModule", { value: true });
	NetworkProcessor.NetworkProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	const NetworkUtils_js_1 = requireNetworkUtils();
	/** Dispatches Network module commands. */
	let NetworkProcessor$1 = class NetworkProcessor {
	    #browsingContextStorage;
	    #networkStorage;
	    constructor(browsingContextStorage, networkStorage) {
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#networkStorage = networkStorage;
	    }
	    async addIntercept(params) {
	        this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
	        const urlPatterns = params.urlPatterns ?? [];
	        const parsedUrlPatterns = NetworkProcessor.parseUrlPatterns(urlPatterns);
	        const intercept = this.#networkStorage.addIntercept({
	            urlPatterns: parsedUrlPatterns,
	            phases: params.phases,
	            contexts: params.contexts,
	        });
	        await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
	            return context.cdpTarget.toggleNetwork();
	        }));
	        return {
	            intercept,
	        };
	    }
	    async continueRequest(params) {
	        if (params.url !== undefined) {
	            NetworkProcessor.parseUrlString(params.url);
	        }
	        if (params.method !== undefined) {
	            if (!NetworkProcessor.isMethodValid(params.method)) {
	                throw new protocol_js_1.InvalidArgumentException(`Method '${params.method}' is invalid.`);
	            }
	        }
	        if (params.headers) {
	            NetworkProcessor.validateHeaders(params.headers);
	        }
	        const request = this.#getBlockedRequestOrFail(params.request, [
	            "beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */,
	        ]);
	        try {
	            await request.continueRequest(params);
	        }
	        catch (error) {
	            throw NetworkProcessor.wrapInterceptionError(error);
	        }
	        return {};
	    }
	    async continueResponse(params) {
	        if (params.headers) {
	            NetworkProcessor.validateHeaders(params.headers);
	        }
	        const request = this.#getBlockedRequestOrFail(params.request, [
	            "authRequired" /* Network.InterceptPhase.AuthRequired */,
	            "responseStarted" /* Network.InterceptPhase.ResponseStarted */,
	        ]);
	        try {
	            await request.continueResponse(params);
	        }
	        catch (error) {
	            throw NetworkProcessor.wrapInterceptionError(error);
	        }
	        return {};
	    }
	    async continueWithAuth(params) {
	        const networkId = params.request;
	        const request = this.#getBlockedRequestOrFail(networkId, [
	            "authRequired" /* Network.InterceptPhase.AuthRequired */,
	        ]);
	        await request.continueWithAuth(params);
	        return {};
	    }
	    async failRequest({ request: networkId, }) {
	        const request = this.#getRequestOrFail(networkId);
	        if (request.interceptPhase === "authRequired" /* Network.InterceptPhase.AuthRequired */) {
	            throw new protocol_js_1.InvalidArgumentException(`Request '${networkId}' in 'authRequired' phase cannot be failed`);
	        }
	        if (!request.interceptPhase) {
	            throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
	        }
	        await request.failRequest('Failed');
	        return {};
	    }
	    async provideResponse(params) {
	        if (params.headers) {
	            NetworkProcessor.validateHeaders(params.headers);
	        }
	        const request = this.#getBlockedRequestOrFail(params.request, [
	            "beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */,
	            "responseStarted" /* Network.InterceptPhase.ResponseStarted */,
	            "authRequired" /* Network.InterceptPhase.AuthRequired */,
	        ]);
	        try {
	            await request.provideResponse(params);
	        }
	        catch (error) {
	            throw NetworkProcessor.wrapInterceptionError(error);
	        }
	        return {};
	    }
	    async removeIntercept(params) {
	        this.#networkStorage.removeIntercept(params.intercept);
	        await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
	            return context.cdpTarget.toggleNetwork();
	        }));
	        return {};
	    }
	    async setCacheBehavior(params) {
	        const contexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
	        // Change all targets
	        if (contexts.size === 0) {
	            this.#networkStorage.defaultCacheBehavior = params.cacheBehavior;
	            await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
	                return context.cdpTarget.toggleSetCacheDisabled();
	            }));
	            return {};
	        }
	        const cacheDisabled = params.cacheBehavior === 'bypass';
	        await Promise.all([...contexts.values()].map((context) => {
	            return context.cdpTarget.toggleSetCacheDisabled(cacheDisabled);
	        }));
	        return {};
	    }
	    #getRequestOrFail(id) {
	        const request = this.#networkStorage.getRequestById(id);
	        if (!request) {
	            throw new protocol_js_1.NoSuchRequestException(`Network request with ID '${id}' doesn't exist`);
	        }
	        return request;
	    }
	    #getBlockedRequestOrFail(id, phases) {
	        const request = this.#getRequestOrFail(id);
	        if (!request.interceptPhase) {
	            throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${id}'`);
	        }
	        if (request.interceptPhase && !phases.includes(request.interceptPhase)) {
	            throw new protocol_js_1.InvalidArgumentException(`Blocked request for network id '${id}' is in '${request.interceptPhase}' phase`);
	        }
	        return request;
	    }
	    /**
	     * Validate https://fetch.spec.whatwg.org/#header-value
	     */
	    static validateHeaders(headers) {
	        for (const header of headers) {
	            let headerValue;
	            if (header.value.type === 'string') {
	                headerValue = header.value.value;
	            }
	            else {
	                headerValue = atob(header.value.value);
	            }
	            if (headerValue !== headerValue.trim() ||
	                headerValue.includes('\n') ||
	                headerValue.includes('\0')) {
	                throw new protocol_js_1.InvalidArgumentException(`Header value '${headerValue}' is not acceptable value`);
	            }
	        }
	    }
	    static isMethodValid(method) {
	        // https://httpwg.org/specs/rfc9110.html#method.overview
	        return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(method);
	    }
	    /**
	     * Attempts to parse the given url.
	     * Throws an InvalidArgumentException if the url is invalid.
	     */
	    static parseUrlString(url) {
	        try {
	            return new URL(url);
	        }
	        catch (error) {
	            throw new protocol_js_1.InvalidArgumentException(`Invalid URL '${url}': ${error}`);
	        }
	    }
	    static parseUrlPatterns(urlPatterns) {
	        return urlPatterns.map((urlPattern) => {
	            let patternUrl = '';
	            let hasProtocol = true;
	            let hasHostname = true;
	            let hasPort = true;
	            let hasPathname = true;
	            let hasSearch = true;
	            switch (urlPattern.type) {
	                case 'string': {
	                    patternUrl = unescapeURLPattern(urlPattern.pattern);
	                    break;
	                }
	                case 'pattern': {
	                    if (urlPattern.protocol === undefined) {
	                        hasProtocol = false;
	                        patternUrl += 'http';
	                    }
	                    else {
	                        if (urlPattern.protocol === '') {
	                            throw new protocol_js_1.InvalidArgumentException('URL pattern must specify a protocol');
	                        }
	                        urlPattern.protocol = unescapeURLPattern(urlPattern.protocol);
	                        if (!urlPattern.protocol.match(/^[a-zA-Z+-.]+$/)) {
	                            throw new protocol_js_1.InvalidArgumentException('Forbidden characters');
	                        }
	                        patternUrl += urlPattern.protocol;
	                    }
	                    const scheme = patternUrl.toLocaleLowerCase();
	                    patternUrl += ':';
	                    if ((0, NetworkUtils_js_1.isSpecialScheme)(scheme)) {
	                        patternUrl += '//';
	                    }
	                    if (urlPattern.hostname === undefined) {
	                        if (scheme !== 'file') {
	                            patternUrl += 'placeholder';
	                        }
	                        hasHostname = false;
	                    }
	                    else {
	                        if (urlPattern.hostname === '') {
	                            throw new protocol_js_1.InvalidArgumentException('URL pattern must specify a hostname');
	                        }
	                        if (urlPattern.protocol === 'file') {
	                            throw new protocol_js_1.InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
	                        }
	                        urlPattern.hostname = unescapeURLPattern(urlPattern.hostname);
	                        let insideBrackets = false;
	                        for (const c of urlPattern.hostname) {
	                            if (c === '/' || c === '?' || c === '#') {
	                                throw new protocol_js_1.InvalidArgumentException(`'/', '?', '#' are forbidden in hostname`);
	                            }
	                            if (!insideBrackets && c === ':') {
	                                throw new protocol_js_1.InvalidArgumentException(`':' is only allowed inside brackets in hostname`);
	                            }
	                            if (c === '[') {
	                                insideBrackets = true;
	                            }
	                            if (c === ']') {
	                                insideBrackets = false;
	                            }
	                        }
	                        patternUrl += urlPattern.hostname;
	                    }
	                    if (urlPattern.port === undefined) {
	                        hasPort = false;
	                    }
	                    else {
	                        if (urlPattern.port === '') {
	                            throw new protocol_js_1.InvalidArgumentException(`URL pattern must specify a port`);
	                        }
	                        urlPattern.port = unescapeURLPattern(urlPattern.port);
	                        patternUrl += ':';
	                        if (!urlPattern.port.match(/^\d+$/)) {
	                            throw new protocol_js_1.InvalidArgumentException('Forbidden characters');
	                        }
	                        patternUrl += urlPattern.port;
	                    }
	                    if (urlPattern.pathname === undefined) {
	                        hasPathname = false;
	                    }
	                    else {
	                        urlPattern.pathname = unescapeURLPattern(urlPattern.pathname);
	                        if (urlPattern.pathname[0] !== '/') {
	                            patternUrl += '/';
	                        }
	                        if (urlPattern.pathname.includes('#') ||
	                            urlPattern.pathname.includes('?')) {
	                            throw new protocol_js_1.InvalidArgumentException('Forbidden characters');
	                        }
	                        patternUrl += urlPattern.pathname;
	                    }
	                    if (urlPattern.search === undefined) {
	                        hasSearch = false;
	                    }
	                    else {
	                        urlPattern.search = unescapeURLPattern(urlPattern.search);
	                        if (urlPattern.search[0] !== '?') {
	                            patternUrl += '?';
	                        }
	                        if (urlPattern.search.includes('#')) {
	                            throw new protocol_js_1.InvalidArgumentException('Forbidden characters');
	                        }
	                        patternUrl += urlPattern.search;
	                    }
	                    break;
	                }
	            }
	            const serializePort = (url) => {
	                const defaultPorts = {
	                    'ftp:': 21,
	                    'file:': null,
	                    'http:': 80,
	                    'https:': 443,
	                    'ws:': 80,
	                    'wss:': 443,
	                };
	                if ((0, NetworkUtils_js_1.isSpecialScheme)(url.protocol) &&
	                    defaultPorts[url.protocol] !== null &&
	                    (!url.port || String(defaultPorts[url.protocol]) === url.port)) {
	                    return '';
	                }
	                else if (url.port) {
	                    return url.port;
	                }
	                return undefined;
	            };
	            try {
	                const url = new URL(patternUrl);
	                return {
	                    protocol: hasProtocol ? url.protocol.replace(/:$/, '') : undefined,
	                    hostname: hasHostname ? url.hostname : undefined,
	                    port: hasPort ? serializePort(url) : undefined,
	                    pathname: hasPathname && url.pathname ? url.pathname : undefined,
	                    search: hasSearch ? url.search : undefined,
	                };
	            }
	            catch (err) {
	                throw new protocol_js_1.InvalidArgumentException(`${err.message} '${patternUrl}'`);
	            }
	        });
	    }
	    static wrapInterceptionError(error) {
	        // https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/protocol/fetch_handler.cc;l=169
	        if (error?.message.includes('Invalid header')) {
	            return new protocol_js_1.InvalidArgumentException('Invalid header');
	        }
	        return error;
	    }
	};
	NetworkProcessor.NetworkProcessor = NetworkProcessor$1;
	/**
	 * See https://w3c.github.io/webdriver-bidi/#unescape-url-pattern
	 */
	function unescapeURLPattern(pattern) {
	    const forbidden = new Set(['(', ')', '*', '{', '}']);
	    let result = '';
	    let isEscaped = false;
	    for (const c of pattern) {
	        if (!isEscaped) {
	            if (forbidden.has(c)) {
	                throw new protocol_js_1.InvalidArgumentException('Forbidden characters');
	            }
	            if (c === '\\') {
	                isEscaped = true;
	                continue;
	            }
	        }
	        result += c;
	        isEscaped = false;
	    }
	    return result;
	}
	
	return NetworkProcessor;
}

var PermissionsProcessor = {};

var hasRequiredPermissionsProcessor;

function requirePermissionsProcessor () {
	if (hasRequiredPermissionsProcessor) return PermissionsProcessor;
	hasRequiredPermissionsProcessor = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(PermissionsProcessor, "__esModule", { value: true });
	PermissionsProcessor.PermissionsProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	let PermissionsProcessor$1 = class PermissionsProcessor {
	    #browserCdpClient;
	    constructor(browserCdpClient) {
	        this.#browserCdpClient = browserCdpClient;
	    }
	    async setPermissions(params) {
	        try {
	            const userContextId = params['goog:userContext'] ||
	                params.userContext;
	            await this.#browserCdpClient.sendCommand('Browser.setPermission', {
	                origin: params.origin,
	                browserContextId: userContextId && userContextId !== 'default'
	                    ? userContextId
	                    : undefined,
	                permission: {
	                    name: params.descriptor.name,
	                },
	                setting: params.state,
	            });
	        }
	        catch (err) {
	            if (err.message ===
	                `Permission can't be granted to opaque origins.`) {
	                // Return success if the origin is not valid (does not match any
	                // existing origins).
	                return {};
	            }
	            throw new protocol_js_1.InvalidArgumentException(err.message);
	        }
	        return {};
	    }
	};
	PermissionsProcessor.PermissionsProcessor = PermissionsProcessor$1;
	
	return PermissionsProcessor;
}

var ScriptProcessor = {};

var PreloadScript = {};

var uuid = {};

var hasRequiredUuid;

function requireUuid () {
	if (hasRequiredUuid) return uuid;
	hasRequiredUuid = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(uuid, "__esModule", { value: true });
	uuid.uuidv4 = uuidv4;
	function bytesToHex(bytes) {
	    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
	}
	/**
	 * Generates a random v4 UUID, as specified in RFC4122.
	 *
	 * Uses the native Web Crypto API if available, otherwise falls back to a
	 * polyfill.
	 *
	 * Example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
	 */
	function uuidv4() {
	    // Available only in secure contexts
	    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
	    if ('crypto' in globalThis && 'randomUUID' in globalThis.crypto) {
	        // Node with
	        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1 or
	        // secure browser context.
	        return globalThis.crypto.randomUUID();
	    }
	    const randomValues = new Uint8Array(16);
	    if ('crypto' in globalThis && 'getRandomValues' in globalThis.crypto) {
	        // Node (>=18) with
	        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1 or
	        // browser.
	        globalThis.crypto.getRandomValues(randomValues);
	    }
	    else {
	        // Node (<=16) without
	        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1.
	        // eslint-disable-next-line @typescript-eslint/no-require-imports
	        require$$2.webcrypto.getRandomValues(randomValues);
	    }
	    // Set version (4) and variant (RFC4122) bits.
	    randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
	    randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
	    return [
	        bytesToHex(randomValues.subarray(0, 4)),
	        bytesToHex(randomValues.subarray(4, 6)),
	        bytesToHex(randomValues.subarray(6, 8)),
	        bytesToHex(randomValues.subarray(8, 10)),
	        bytesToHex(randomValues.subarray(10, 16)),
	    ].join('-');
	}
	
	return uuid;
}

var ChannelProxy = {};

var hasRequiredChannelProxy;

function requireChannelProxy () {
	if (hasRequiredChannelProxy) return ChannelProxy;
	hasRequiredChannelProxy = 1;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	Object.defineProperty(ChannelProxy, "__esModule", { value: true });
	ChannelProxy.ChannelProxy = undefined;
	const protocol_js_1 = requireProtocol();
	const log_js_1 = requireLog();
	const uuid_js_1 = requireUuid();
	/**
	 * Used to send messages from realm to BiDi user.
	 */
	let ChannelProxy$1 = class ChannelProxy {
	    #properties;
	    #id = (0, uuid_js_1.uuidv4)();
	    #logger;
	    constructor(channel, logger) {
	        this.#properties = channel;
	        this.#logger = logger;
	    }
	    /**
	     * Creates a channel proxy in the given realm, initialises listener and
	     * returns a handle to `sendMessage` delegate.
	     */
	    async init(realm, eventManager) {
	        const channelHandle = await ChannelProxy.#createAndGetHandleInRealm(realm);
	        const sendMessageHandle = await ChannelProxy.#createSendMessageHandle(realm, channelHandle);
	        void this.#startListener(realm, channelHandle, eventManager);
	        return sendMessageHandle;
	    }
	    /** Gets a ChannelProxy from window and returns its handle. */
	    async startListenerFromWindow(realm, eventManager) {
	        try {
	            const channelHandle = await this.#getHandleFromWindow(realm);
	            void this.#startListener(realm, channelHandle, eventManager);
	        }
	        catch (error) {
	            this.#logger?.(log_js_1.LogType.debugError, error);
	        }
	    }
	    /**
	     * Evaluation string which creates a ChannelProxy object on the client side.
	     */
	    static #createChannelProxyEvalStr() {
	        const functionStr = String(() => {
	            const queue = [];
	            let queueNonEmptyResolver = null;
	            return {
	                /**
	                 * Gets a promise, which is resolved as soon as a message occurs
	                 * in the queue.
	                 */
	                async getMessage() {
	                    const onMessage = queue.length > 0
	                        ? Promise.resolve()
	                        : new Promise((resolve) => {
	                            queueNonEmptyResolver = resolve;
	                        });
	                    await onMessage;
	                    return queue.shift();
	                },
	                /**
	                 * Adds a message to the queue.
	                 * Resolves the pending promise if needed.
	                 */
	                sendMessage(message) {
	                    queue.push(message);
	                    if (queueNonEmptyResolver !== null) {
	                        queueNonEmptyResolver();
	                        queueNonEmptyResolver = null;
	                    }
	                },
	            };
	        });
	        return `(${functionStr})()`;
	    }
	    /** Creates a ChannelProxy in the given realm. */
	    static async #createAndGetHandleInRealm(realm) {
	        const createChannelHandleResult = await realm.cdpClient.sendCommand('Runtime.evaluate', {
	            expression: this.#createChannelProxyEvalStr(),
	            contextId: realm.executionContextId,
	            serializationOptions: {
	                serialization: "idOnly" /* Protocol.Runtime.SerializationOptionsSerialization.IdOnly */,
	            },
	        });
	        if (createChannelHandleResult.exceptionDetails ||
	            createChannelHandleResult.result.objectId === undefined) {
	            throw new Error(`Cannot create channel`);
	        }
	        return createChannelHandleResult.result.objectId;
	    }
	    /** Gets a handle to `sendMessage` delegate from the ChannelProxy handle. */
	    static async #createSendMessageHandle(realm, channelHandle) {
	        const sendMessageArgResult = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
	            functionDeclaration: String((channelHandle) => {
	                return channelHandle.sendMessage;
	            }),
	            arguments: [{ objectId: channelHandle }],
	            executionContextId: realm.executionContextId,
	            serializationOptions: {
	                serialization: "idOnly" /* Protocol.Runtime.SerializationOptionsSerialization.IdOnly */,
	            },
	        });
	        // TODO: check for exceptionDetails.
	        return sendMessageArgResult.result.objectId;
	    }
	    /** Starts listening for the channel events of the provided ChannelProxy. */
	    async #startListener(realm, channelHandle, eventManager) {
	        // noinspection InfiniteLoopJS
	        for (;;) {
	            try {
	                const message = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                    functionDeclaration: String(async (channelHandle) => await channelHandle.getMessage()),
	                    arguments: [
	                        {
	                            objectId: channelHandle,
	                        },
	                    ],
	                    awaitPromise: true,
	                    executionContextId: realm.executionContextId,
	                    serializationOptions: {
	                        serialization: "deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */,
	                        maxDepth: this.#properties.serializationOptions?.maxObjectDepth ??
	                            undefined,
	                    },
	                });
	                if (message.exceptionDetails) {
	                    throw new Error('Runtime.callFunctionOn in ChannelProxy', {
	                        cause: message.exceptionDetails,
	                    });
	                }
	                for (const browsingContext of realm.associatedBrowsingContexts) {
	                    eventManager.registerEvent({
	                        type: 'event',
	                        method: protocol_js_1.ChromiumBidi.Script.EventNames.Message,
	                        params: {
	                            channel: this.#properties.channel,
	                            data: realm.cdpToBidiValue(message, this.#properties.ownership ?? "none" /* Script.ResultOwnership.None */),
	                            source: realm.source,
	                        },
	                    }, browsingContext.id);
	                }
	            }
	            catch (error) {
	                // If an error is thrown, then the channel is permanently broken, so we
	                // exit the loop.
	                this.#logger?.(log_js_1.LogType.debugError, error);
	                break;
	            }
	        }
	    }
	    /**
	     * Returns a handle of ChannelProxy from window's property which was set there
	     * by `getEvalInWindowStr`. If window property is not set yet, sets a promise
	     * resolver to the window property, so that `getEvalInWindowStr` can resolve
	     * the promise later on with the channel.
	     * This is needed because `getEvalInWindowStr` can be called before or
	     * after this method.
	     */
	    async #getHandleFromWindow(realm) {
	        const channelHandleResult = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
	            functionDeclaration: String((id) => {
	                const w = window;
	                if (w[id] === undefined) {
	                    // The channelProxy is not created yet. Create a promise, put the
	                    // resolver to window property and return the promise.
	                    // `getEvalInWindowStr` will resolve the promise later.
	                    return new Promise((resolve) => (w[id] = resolve));
	                }
	                // The channelProxy is already created by `getEvalInWindowStr` and
	                // is set into window property. Return it.
	                const channelProxy = w[id];
	                delete w[id];
	                return channelProxy;
	            }),
	            arguments: [{ value: this.#id }],
	            executionContextId: realm.executionContextId,
	            awaitPromise: true,
	            serializationOptions: {
	                serialization: "idOnly" /* Protocol.Runtime.SerializationOptionsSerialization.IdOnly */,
	            },
	        });
	        if (channelHandleResult.exceptionDetails !== undefined ||
	            channelHandleResult.result.objectId === undefined) {
	            throw new Error(`ChannelHandle not found in window["${this.#id}"]`);
	        }
	        return channelHandleResult.result.objectId;
	    }
	    /**
	     * String to be evaluated to create a ProxyChannel and put it to window.
	     * Returns the delegate `sendMessage`. Used to provide an argument for preload
	     * script. Does the following:
	     * 1. Creates a ChannelProxy.
	     * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
	     *    by calling delegate stored in window['${this.#id}'].
	     *    This is needed because `#getHandleFromWindow` can be called before or
	     *    after this method.
	     * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
	     */
	    getEvalInWindowStr() {
	        const delegate = String((id, channelProxy) => {
	            const w = window;
	            if (w[id] === undefined) {
	                // `#getHandleFromWindow` is not initialized yet, and will get the
	                // channelProxy later.
	                w[id] = channelProxy;
	            }
	            else {
	                // `#getHandleFromWindow` is already set a delegate to window property
	                // and is waiting for it to be called with the channelProxy.
	                w[id](channelProxy);
	                delete w[id];
	            }
	            return channelProxy.sendMessage;
	        });
	        const channelProxyEval = ChannelProxy.#createChannelProxyEvalStr();
	        return `(${delegate})('${this.#id}',${channelProxyEval})`;
	    }
	};
	ChannelProxy.ChannelProxy = ChannelProxy$1;
	
	return ChannelProxy;
}

var hasRequiredPreloadScript;

function requirePreloadScript () {
	if (hasRequiredPreloadScript) return PreloadScript;
	hasRequiredPreloadScript = 1;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	Object.defineProperty(PreloadScript, "__esModule", { value: true });
	PreloadScript.PreloadScript = undefined;
	const uuid_js_1 = requireUuid();
	const ChannelProxy_js_1 = requireChannelProxy();
	/**
	 * BiDi IDs are generated by the server and are unique within contexts.
	 *
	 * CDP preload script IDs are generated by the client and are unique
	 * within sessions.
	 *
	 * The mapping between BiDi and CDP preload script IDs is 1:many.
	 * BiDi IDs are needed by the mapper to keep track of potential multiple CDP IDs
	 * in the client.
	 */
	let PreloadScript$1 = class PreloadScript {
	    /** BiDi ID, an automatically generated UUID. */
	    #id = (0, uuid_js_1.uuidv4)();
	    /** CDP preload scripts. */
	    #cdpPreloadScripts = [];
	    /** The script itself, in a format expected by the spec i.e. a function. */
	    #functionDeclaration;
	    /** Targets, in which the preload script is initialized. */
	    #targetIds = new Set();
	    /** Channels to be added as arguments to functionDeclaration. */
	    #channels;
	    /** The script sandbox / world name. */
	    #sandbox;
	    /** The browsing contexts to execute the preload scripts in, if any. */
	    #contexts;
	    get id() {
	        return this.#id;
	    }
	    get targetIds() {
	        return this.#targetIds;
	    }
	    constructor(params, logger) {
	        this.#channels =
	            params.arguments?.map((a) => new ChannelProxy_js_1.ChannelProxy(a.value, logger)) ?? [];
	        this.#functionDeclaration = params.functionDeclaration;
	        this.#sandbox = params.sandbox;
	        this.#contexts = params.contexts;
	    }
	    /** Channels of the preload script. */
	    get channels() {
	        return this.#channels;
	    }
	    /** Contexts of the preload script, if any */
	    get contexts() {
	        return this.#contexts;
	    }
	    /**
	     * String to be evaluated. Wraps user-provided function so that the following
	     * steps are run:
	     * 1. Create channels.
	     * 2. Store the created channels in window.
	     * 3. Call the user-provided function with channels as arguments.
	     */
	    #getEvaluateString() {
	        const channelsArgStr = `[${this.channels
	            .map((c) => c.getEvalInWindowStr())
	            .join(', ')}]`;
	        return `(()=>{(${this.#functionDeclaration})(...${channelsArgStr})})()`;
	    }
	    /**
	     * Adds the script to the given CDP targets by calling the
	     * `Page.addScriptToEvaluateOnNewDocument` command.
	     */
	    async initInTargets(cdpTargets, runImmediately) {
	        await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
	    }
	    /**
	     * Adds the script to the given CDP target by calling the
	     * `Page.addScriptToEvaluateOnNewDocument` command.
	     */
	    async initInTarget(cdpTarget, runImmediately) {
	        const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand('Page.addScriptToEvaluateOnNewDocument', {
	            source: this.#getEvaluateString(),
	            worldName: this.#sandbox,
	            runImmediately,
	        });
	        this.#cdpPreloadScripts.push({
	            target: cdpTarget,
	            preloadScriptId: addCdpPreloadScriptResult.identifier,
	        });
	        this.#targetIds.add(cdpTarget.id);
	    }
	    /**
	     * Removes this script from all CDP targets.
	     */
	    async remove() {
	        await Promise.all([
	            this.#cdpPreloadScripts.map(async (cdpPreloadScript) => {
	                const cdpTarget = cdpPreloadScript.target;
	                const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
	                return await cdpTarget.cdpClient.sendCommand('Page.removeScriptToEvaluateOnNewDocument', {
	                    identifier: cdpPreloadScriptId,
	                });
	            }),
	        ]);
	    }
	    /** Removes the provided cdp target from the list of cdp preload scripts. */
	    dispose(cdpTargetId) {
	        this.#cdpPreloadScripts = this.#cdpPreloadScripts.filter((cdpPreloadScript) => cdpPreloadScript.target?.id !== cdpTargetId);
	        this.#targetIds.delete(cdpTargetId);
	    }
	};
	PreloadScript.PreloadScript = PreloadScript$1;
	
	return PreloadScript;
}

var hasRequiredScriptProcessor;

function requireScriptProcessor () {
	if (hasRequiredScriptProcessor) return ScriptProcessor;
	hasRequiredScriptProcessor = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(ScriptProcessor, "__esModule", { value: true });
	ScriptProcessor.ScriptProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	const PreloadScript_js_1 = requirePreloadScript();
	let ScriptProcessor$1 = class ScriptProcessor {
	    #eventManager;
	    #browsingContextStorage;
	    #realmStorage;
	    #preloadScriptStorage;
	    #logger;
	    constructor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger) {
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#realmStorage = realmStorage;
	        this.#preloadScriptStorage = preloadScriptStorage;
	        this.#logger = logger;
	        this.#eventManager = eventManager;
	        this.#eventManager.addSubscribeHook(protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated, this.#onRealmCreatedSubscribeHook.bind(this));
	    }
	    #onRealmCreatedSubscribeHook(contextId) {
	        const context = this.#browsingContextStorage.getContext(contextId);
	        const contextsToReport = [
	            context,
	            ...this.#browsingContextStorage.getContext(contextId).allChildren,
	        ];
	        const realms = new Set();
	        for (const reportContext of contextsToReport) {
	            const realmsForContext = this.#realmStorage.findRealms({
	                browsingContextId: reportContext.id,
	            });
	            for (const realm of realmsForContext) {
	                realms.add(realm);
	            }
	        }
	        for (const realm of realms) {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
	                params: realm.realmInfo,
	            }, context.id);
	        }
	        return Promise.resolve();
	    }
	    async addPreloadScript(params) {
	        const contexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
	        const preloadScript = new PreloadScript_js_1.PreloadScript(params, this.#logger);
	        this.#preloadScriptStorage.add(preloadScript);
	        const cdpTargets = contexts.size === 0
	            ? new Set(this.#browsingContextStorage
	                .getTopLevelContexts()
	                .map((context) => context.cdpTarget))
	            : new Set([...contexts.values()].map((context) => context.cdpTarget));
	        await preloadScript.initInTargets(cdpTargets, false);
	        return {
	            script: preloadScript.id,
	        };
	    }
	    async removePreloadScript(params) {
	        const { script: id } = params;
	        const scripts = this.#preloadScriptStorage.find({ id });
	        if (scripts.length === 0) {
	            throw new protocol_js_1.NoSuchScriptException(`No preload script with id '${id}'`);
	        }
	        await Promise.all(scripts.map((script) => script.remove()));
	        this.#preloadScriptStorage.remove({ id });
	        return {};
	    }
	    async callFunction(params) {
	        const realm = await this.#getRealm(params.target);
	        return await realm.callFunction(params.functionDeclaration, params.awaitPromise, params.this, params.arguments, params.resultOwnership, params.serializationOptions, params.userActivation);
	    }
	    async evaluate(params) {
	        const realm = await this.#getRealm(params.target);
	        return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership, params.serializationOptions, params.userActivation);
	    }
	    async disown(params) {
	        const realm = await this.#getRealm(params.target);
	        await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
	        return {};
	    }
	    getRealms(params) {
	        if (params.context !== undefined) {
	            // Make sure the context is known.
	            this.#browsingContextStorage.getContext(params.context);
	        }
	        const realms = this.#realmStorage
	            .findRealms({
	            browsingContextId: params.context,
	            type: params.type,
	        })
	            .map((realm) => realm.realmInfo);
	        return { realms };
	    }
	    async #getRealm(target) {
	        if ('context' in target) {
	            const context = this.#browsingContextStorage.getContext(target.context);
	            return await context.getOrCreateSandbox(target.sandbox);
	        }
	        return this.#realmStorage.getRealm({
	            realmId: target.realm,
	        });
	    }
	};
	ScriptProcessor.ScriptProcessor = ScriptProcessor$1;
	
	return ScriptProcessor;
}

var SessionProcessor = {};

var hasRequiredSessionProcessor;

function requireSessionProcessor () {
	if (hasRequiredSessionProcessor) return SessionProcessor;
	hasRequiredSessionProcessor = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(SessionProcessor, "__esModule", { value: true });
	SessionProcessor.SessionProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	let SessionProcessor$1 = class SessionProcessor {
	    #eventManager;
	    #browserCdpClient;
	    #initConnection;
	    #created = false;
	    constructor(eventManager, browserCdpClient, initConnection) {
	        this.#eventManager = eventManager;
	        this.#browserCdpClient = browserCdpClient;
	        this.#initConnection = initConnection;
	    }
	    status() {
	        return { ready: false, message: 'already connected' };
	    }
	    #mergeCapabilities(capabilitiesRequest) {
	        // Roughly following https://www.w3.org/TR/webdriver2/#dfn-capabilities-processing.
	        // Validations should already be done by the parser.
	        const mergedCapabilities = [];
	        for (const first of capabilitiesRequest.firstMatch ?? [{}]) {
	            const result = {
	                ...capabilitiesRequest.alwaysMatch,
	            };
	            for (const key of Object.keys(first)) {
	                if (result[key] !== undefined) {
	                    throw new protocol_js_1.InvalidArgumentException(`Capability ${key} in firstMatch is already defined in alwaysMatch`);
	                }
	                result[key] = first[key];
	            }
	            mergedCapabilities.push(result);
	        }
	        const match = mergedCapabilities.find((c) => c.browserName === 'chrome') ??
	            mergedCapabilities[0] ??
	            {};
	        match.unhandledPromptBehavior = this.#getUnhandledPromptBehavior(match.unhandledPromptBehavior);
	        return match;
	    }
	    #getUnhandledPromptBehavior(capabilityValue) {
	        if (capabilityValue === undefined) {
	            return undefined;
	        }
	        if (typeof capabilityValue === 'object') {
	            // Do not validate capabilities. Incorrect ones will be ignored by Mapper.
	            return capabilityValue;
	        }
	        if (typeof capabilityValue !== 'string') {
	            throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof capabilityValue}`);
	        }
	        switch (capabilityValue) {
	            case 'accept':
	            case 'accept and notify':
	                return { default: "accept" /* Session.UserPromptHandlerType.Accept */ };
	            case 'dismiss':
	            case 'dismiss and notify':
	                return { default: "dismiss" /* Session.UserPromptHandlerType.Dismiss */ };
	            case 'ignore':
	                return { default: "ignore" /* Session.UserPromptHandlerType.Ignore */ };
	            default:
	                throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${capabilityValue}`);
	        }
	    }
	    async new(params) {
	        if (this.#created) {
	            throw new Error('Session has been already created.');
	        }
	        this.#created = true;
	        const matchedCapabitlites = this.#mergeCapabilities(params.capabilities);
	        await this.#initConnection(matchedCapabitlites);
	        const version = await this.#browserCdpClient.sendCommand('Browser.getVersion');
	        return {
	            sessionId: 'unknown',
	            capabilities: {
	                ...matchedCapabitlites,
	                acceptInsecureCerts: matchedCapabitlites.acceptInsecureCerts ?? false,
	                browserName: version.product,
	                browserVersion: version.revision,
	                platformName: '',
	                setWindowRect: false,
	                webSocketUrl: '',
	                userAgent: version.userAgent,
	            },
	        };
	    }
	    async subscribe(params, channel = null) {
	        await this.#eventManager.subscribe(params.events, params.contexts ?? [null], channel);
	        return {};
	    }
	    async unsubscribe(params, channel = null) {
	        await this.#eventManager.unsubscribe(params.events, params.contexts ?? [null], channel);
	        return {};
	    }
	};
	SessionProcessor.SessionProcessor = SessionProcessor$1;
	
	return SessionProcessor;
}

var StorageProcessor = {};

var hasRequiredStorageProcessor;

function requireStorageProcessor () {
	if (hasRequiredStorageProcessor) return StorageProcessor;
	hasRequiredStorageProcessor = 1;
	Object.defineProperty(StorageProcessor, "__esModule", { value: true });
	StorageProcessor.StorageProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	const assert_js_1 = requireAssert();
	const log_js_1 = requireLog();
	const NetworkProcessor_js_1 = requireNetworkProcessor();
	const NetworkUtils_js_1 = requireNetworkUtils();
	/**
	 * Responsible for handling the `storage` module.
	 */
	let StorageProcessor$1 = class StorageProcessor {
	    #browserCdpClient;
	    #browsingContextStorage;
	    #logger;
	    constructor(browserCdpClient, browsingContextStorage, logger) {
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#browserCdpClient = browserCdpClient;
	        this.#logger = logger;
	    }
	    async deleteCookies(params) {
	        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
	        let cdpResponse;
	        try {
	            cdpResponse = await this.#browserCdpClient.sendCommand('Storage.getCookies', {
	                browserContextId: this.#getCdpBrowserContextId(partitionKey),
	            });
	        }
	        catch (err) {
	            if (this.#isNoSuchUserContextError(err)) {
	                // If the user context is not found, special error is thrown.
	                throw new protocol_js_1.NoSuchUserContextException(err.message);
	            }
	            throw err;
	        }
	        const cdpCookiesToDelete = cdpResponse.cookies
	            .filter(
	        // CDP's partition key is the source origin. If the request specifies the
	        // `sourceOrigin` partition key, only cookies with the requested source origin
	        // are returned.
	        (c) => partitionKey.sourceOrigin === undefined ||
	            c.partitionKey?.topLevelSite === partitionKey.sourceOrigin)
	            .filter((cdpCookie) => {
	            const bidiCookie = (0, NetworkUtils_js_1.cdpToBiDiCookie)(cdpCookie);
	            return this.#matchCookie(bidiCookie, params.filter);
	        })
	            .map((cookie) => ({
	            ...cookie,
	            // Set expiry to pass date to delete the cookie.
	            expires: 1,
	        }));
	        await this.#browserCdpClient.sendCommand('Storage.setCookies', {
	            cookies: cdpCookiesToDelete,
	            browserContextId: this.#getCdpBrowserContextId(partitionKey),
	        });
	        return {
	            partitionKey,
	        };
	    }
	    async getCookies(params) {
	        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
	        let cdpResponse;
	        try {
	            cdpResponse = await this.#browserCdpClient.sendCommand('Storage.getCookies', {
	                browserContextId: this.#getCdpBrowserContextId(partitionKey),
	            });
	        }
	        catch (err) {
	            if (this.#isNoSuchUserContextError(err)) {
	                // If the user context is not found, special error is thrown.
	                throw new protocol_js_1.NoSuchUserContextException(err.message);
	            }
	            throw err;
	        }
	        const filteredBiDiCookies = cdpResponse.cookies
	            .filter(
	        // CDP's partition key is the source origin. If the request specifies the
	        // `sourceOrigin` partition key, only cookies with the requested source origin
	        // are returned.
	        (c) => partitionKey.sourceOrigin === undefined ||
	            c.partitionKey?.topLevelSite === partitionKey.sourceOrigin)
	            .map((c) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(c))
	            .filter((c) => this.#matchCookie(c, params.filter));
	        return {
	            cookies: filteredBiDiCookies,
	            partitionKey,
	        };
	    }
	    async setCookie(params) {
	        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
	        const cdpCookie = (0, NetworkUtils_js_1.bidiToCdpCookie)(params, partitionKey);
	        try {
	            await this.#browserCdpClient.sendCommand('Storage.setCookies', {
	                cookies: [cdpCookie],
	                browserContextId: this.#getCdpBrowserContextId(partitionKey),
	            });
	        }
	        catch (err) {
	            if (this.#isNoSuchUserContextError(err)) {
	                // If the user context is not found, special error is thrown.
	                throw new protocol_js_1.NoSuchUserContextException(err.message);
	            }
	            this.#logger?.(log_js_1.LogType.debugError, err);
	            throw new protocol_js_1.UnableToSetCookieException(err.toString());
	        }
	        return {
	            partitionKey,
	        };
	    }
	    #isNoSuchUserContextError(err) {
	        // Heuristic to detect if the user context is not found.
	        // See https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/protocol/browser_handler.cc;drc=a56154dd81e4679712422ac6eed2c9581cb51ab0;l=314
	        return err.message?.startsWith('Failed to find browser context for id');
	    }
	    #getCdpBrowserContextId(partitionKey) {
	        return partitionKey.userContext === 'default'
	            ? undefined
	            : partitionKey.userContext;
	    }
	    #expandStoragePartitionSpecByBrowsingContext(descriptor) {
	        const browsingContextId = descriptor.context;
	        const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
	        // https://w3c.github.io/webdriver-bidi/#associated-storage-partition.
	        // Each browsing context also has an associated storage partition, which is the
	        // storage partition it uses to persist data. In Chromium it's a `BrowserContext`
	        // which maps to BiDi `UserContext`.
	        return {
	            userContext: browsingContext.userContext,
	        };
	    }
	    #expandStoragePartitionSpecByStorageKey(descriptor) {
	        const unsupportedPartitionKeys = new Map();
	        let sourceOrigin = descriptor.sourceOrigin;
	        if (sourceOrigin !== undefined) {
	            const url = NetworkProcessor_js_1.NetworkProcessor.parseUrlString(sourceOrigin);
	            if (url.origin === 'null') {
	                // Origin `null` is a special case for local pages.
	                sourceOrigin = url.origin;
	            }
	            else {
	                // Port is not supported in CDP Cookie's `partitionKey`, so it should be stripped
	                // from the requested source origin.
	                sourceOrigin = `${url.protocol}//${url.hostname}`;
	            }
	        }
	        for (const [key, value] of Object.entries(descriptor)) {
	            if (key !== undefined &&
	                value !== undefined &&
	                !['type', 'sourceOrigin', 'userContext'].includes(key)) {
	                unsupportedPartitionKeys.set(key, value);
	            }
	        }
	        if (unsupportedPartitionKeys.size > 0) {
	            this.#logger?.(log_js_1.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
	        }
	        // Set `userContext` to `default` if not provided, as it's required in Chromium.
	        const userContext = descriptor.userContext ?? 'default';
	        return {
	            userContext,
	            ...(sourceOrigin === undefined ? {} : { sourceOrigin }),
	        };
	    }
	    #expandStoragePartitionSpec(partitionSpec) {
	        if (partitionSpec === undefined) {
	            // `userContext` is required in Chromium.
	            return { userContext: 'default' };
	        }
	        if (partitionSpec.type === 'context') {
	            return this.#expandStoragePartitionSpecByBrowsingContext(partitionSpec);
	        }
	        (0, assert_js_1.assert)(partitionSpec.type === 'storageKey', 'Unknown partition type');
	        // Partition spec is a storage partition.
	        // Let partition key be partition spec.
	        return this.#expandStoragePartitionSpecByStorageKey(partitionSpec);
	    }
	    #matchCookie(cookie, filter) {
	        if (filter === undefined) {
	            return true;
	        }
	        return ((filter.domain === undefined || filter.domain === cookie.domain) &&
	            (filter.name === undefined || filter.name === cookie.name) &&
	            // `value` contains fields `type` and `value`.
	            (filter.value === undefined ||
	                (0, NetworkUtils_js_1.deserializeByteValue)(filter.value) ===
	                    (0, NetworkUtils_js_1.deserializeByteValue)(cookie.value)) &&
	            (filter.path === undefined || filter.path === cookie.path) &&
	            (filter.size === undefined || filter.size === cookie.size) &&
	            (filter.httpOnly === undefined || filter.httpOnly === cookie.httpOnly) &&
	            (filter.secure === undefined || filter.secure === cookie.secure) &&
	            (filter.sameSite === undefined || filter.sameSite === cookie.sameSite) &&
	            (filter.expiry === undefined || filter.expiry === cookie.expiry));
	    }
	};
	StorageProcessor.StorageProcessor = StorageProcessor$1;
	
	return StorageProcessor;
}

var OutgoingMessage = {};

var hasRequiredOutgoingMessage;

function requireOutgoingMessage () {
	if (hasRequiredOutgoingMessage) return OutgoingMessage;
	hasRequiredOutgoingMessage = 1;
	/**
	 * Copyright 2021 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(OutgoingMessage, "__esModule", { value: true });
	OutgoingMessage.OutgoingMessage = undefined;
	let OutgoingMessage$1 = class OutgoingMessage {
	    #message;
	    #channel;
	    constructor(message, channel = null) {
	        this.#message = message;
	        this.#channel = channel;
	    }
	    static createFromPromise(messagePromise, channel) {
	        return messagePromise.then((message) => {
	            if (message.kind === 'success') {
	                return {
	                    kind: 'success',
	                    value: new OutgoingMessage(message.value, channel),
	                };
	            }
	            return message;
	        });
	    }
	    static createResolved(message, channel) {
	        return Promise.resolve({
	            kind: 'success',
	            value: new OutgoingMessage(message, channel),
	        });
	    }
	    get message() {
	        return this.#message;
	    }
	    get channel() {
	        return this.#channel;
	    }
	};
	OutgoingMessage.OutgoingMessage = OutgoingMessage$1;
	
	return OutgoingMessage;
}

var hasRequiredCommandProcessor;

function requireCommandProcessor () {
	if (hasRequiredCommandProcessor) return CommandProcessor;
	hasRequiredCommandProcessor = 1;
	/**
	 * Copyright 2021 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(CommandProcessor, "__esModule", { value: true });
	CommandProcessor.CommandProcessor = undefined;
	const protocol_js_1 = requireProtocol();
	const EventEmitter_js_1 = requireEventEmitter();
	const log_js_1 = requireLog();
	const BidiNoOpParser_js_1 = requireBidiNoOpParser();
	const BrowserProcessor_js_1 = requireBrowserProcessor();
	const CdpProcessor_js_1 = requireCdpProcessor();
	const BrowsingContextProcessor_js_1 = requireBrowsingContextProcessor();
	const InputProcessor_js_1 = requireInputProcessor();
	const NetworkProcessor_js_1 = requireNetworkProcessor();
	const PermissionsProcessor_js_1 = requirePermissionsProcessor();
	const ScriptProcessor_js_1 = requireScriptProcessor();
	const SessionProcessor_js_1 = requireSessionProcessor();
	const StorageProcessor_js_1 = requireStorageProcessor();
	const OutgoingMessage_js_1 = requireOutgoingMessage();
	let CommandProcessor$1 = class CommandProcessor extends EventEmitter_js_1.EventEmitter {
	    // keep-sorted start
	    #bluetoothProcessor;
	    #browserProcessor;
	    #browsingContextProcessor;
	    #cdpProcessor;
	    #inputProcessor;
	    #networkProcessor;
	    #permissionsProcessor;
	    #scriptProcessor;
	    #sessionProcessor;
	    #storageProcessor;
	    // keep-sorted end
	    #parser;
	    #logger;
	    constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, bluetoothProcessor, parser = new BidiNoOpParser_js_1.BidiNoOpParser(), initConnection, logger) {
	        super();
	        this.#parser = parser;
	        this.#logger = logger;
	        this.#bluetoothProcessor = bluetoothProcessor;
	        // keep-sorted start block=yes
	        this.#browserProcessor = new BrowserProcessor_js_1.BrowserProcessor(browserCdpClient, browsingContextStorage);
	        this.#browsingContextProcessor = new BrowsingContextProcessor_js_1.BrowsingContextProcessor(browserCdpClient, browsingContextStorage, eventManager);
	        this.#cdpProcessor = new CdpProcessor_js_1.CdpProcessor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient);
	        this.#inputProcessor = new InputProcessor_js_1.InputProcessor(browsingContextStorage);
	        this.#networkProcessor = new NetworkProcessor_js_1.NetworkProcessor(browsingContextStorage, networkStorage);
	        this.#permissionsProcessor = new PermissionsProcessor_js_1.PermissionsProcessor(browserCdpClient);
	        this.#scriptProcessor = new ScriptProcessor_js_1.ScriptProcessor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger);
	        this.#sessionProcessor = new SessionProcessor_js_1.SessionProcessor(eventManager, browserCdpClient, initConnection);
	        this.#storageProcessor = new StorageProcessor_js_1.StorageProcessor(browserCdpClient, browsingContextStorage, logger);
	        // keep-sorted end
	    }
	    async #processCommand(command) {
	        switch (command.method) {
	            // Bluetooth module
	            // keep-sorted start block=yes
	            case 'bluetooth.handleRequestDevicePrompt':
	                return await this.#bluetoothProcessor.handleRequestDevicePrompt(this.#parser.parseHandleRequestDevicePromptParams(command.params));
	            case 'bluetooth.simulateAdapter':
	                return await this.#bluetoothProcessor.simulateAdapter(this.#parser.parseSimulateAdapterParameters(command.params));
	            case 'bluetooth.simulateAdvertisement':
	                return await this.#bluetoothProcessor.simulateAdvertisement(this.#parser.parseSimulateAdvertisementParameters(command.params));
	            case 'bluetooth.simulatePreconnectedPeripheral':
	                return await this.#bluetoothProcessor.simulatePreconnectedPeripheral(this.#parser.parseSimulatePreconnectedPeripheralParameters(command.params));
	            // keep-sorted end
	            // Browser module
	            // keep-sorted start block=yes
	            case 'browser.close':
	                return this.#browserProcessor.close();
	            case 'browser.createUserContext':
	                return await this.#browserProcessor.createUserContext(command.params);
	            case 'browser.getClientWindows':
	                return await this.#browserProcessor.getClientWindows();
	            case 'browser.getUserContexts':
	                return await this.#browserProcessor.getUserContexts();
	            case 'browser.removeUserContext':
	                return await this.#browserProcessor.removeUserContext(this.#parser.parseRemoveUserContextParams(command.params));
	            case 'browser.setClientWindowState':
	                throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
	            // keep-sorted end
	            // Browsing Context module
	            // keep-sorted start block=yes
	            case 'browsingContext.activate':
	                return await this.#browsingContextProcessor.activate(this.#parser.parseActivateParams(command.params));
	            case 'browsingContext.captureScreenshot':
	                return await this.#browsingContextProcessor.captureScreenshot(this.#parser.parseCaptureScreenshotParams(command.params));
	            case 'browsingContext.close':
	                return await this.#browsingContextProcessor.close(this.#parser.parseCloseParams(command.params));
	            case 'browsingContext.create':
	                return await this.#browsingContextProcessor.create(this.#parser.parseCreateParams(command.params));
	            case 'browsingContext.getTree':
	                return this.#browsingContextProcessor.getTree(this.#parser.parseGetTreeParams(command.params));
	            case 'browsingContext.handleUserPrompt':
	                return await this.#browsingContextProcessor.handleUserPrompt(this.#parser.parseHandleUserPromptParams(command.params));
	            case 'browsingContext.locateNodes':
	                return await this.#browsingContextProcessor.locateNodes(this.#parser.parseLocateNodesParams(command.params));
	            case 'browsingContext.navigate':
	                return await this.#browsingContextProcessor.navigate(this.#parser.parseNavigateParams(command.params));
	            case 'browsingContext.print':
	                return await this.#browsingContextProcessor.print(this.#parser.parsePrintParams(command.params));
	            case 'browsingContext.reload':
	                return await this.#browsingContextProcessor.reload(this.#parser.parseReloadParams(command.params));
	            case 'browsingContext.setViewport':
	                return await this.#browsingContextProcessor.setViewport(this.#parser.parseSetViewportParams(command.params));
	            case 'browsingContext.traverseHistory':
	                return await this.#browsingContextProcessor.traverseHistory(this.#parser.parseTraverseHistoryParams(command.params));
	            // keep-sorted end
	            // CDP module
	            // keep-sorted start block=yes
	            case 'goog:cdp.getSession':
	                return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
	            case 'goog:cdp.resolveRealm':
	                return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
	            case 'goog:cdp.sendCommand':
	                return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
	            // keep-sorted end
	            // CDP deprecated domain.
	            // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844
	            // keep-sorted start block=yes
	            case 'cdp.getSession':
	                return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
	            case 'cdp.resolveRealm':
	                return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
	            case 'cdp.sendCommand':
	                return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
	            // keep-sorted end
	            // Input module
	            // keep-sorted start block=yes
	            case 'input.performActions':
	                return await this.#inputProcessor.performActions(this.#parser.parsePerformActionsParams(command.params));
	            case 'input.releaseActions':
	                return await this.#inputProcessor.releaseActions(this.#parser.parseReleaseActionsParams(command.params));
	            case 'input.setFiles':
	                return await this.#inputProcessor.setFiles(this.#parser.parseSetFilesParams(command.params));
	            // keep-sorted end
	            // Network module
	            // keep-sorted start block=yes
	            case 'network.addIntercept':
	                return await this.#networkProcessor.addIntercept(this.#parser.parseAddInterceptParams(command.params));
	            case 'network.continueRequest':
	                return await this.#networkProcessor.continueRequest(this.#parser.parseContinueRequestParams(command.params));
	            case 'network.continueResponse':
	                return await this.#networkProcessor.continueResponse(this.#parser.parseContinueResponseParams(command.params));
	            case 'network.continueWithAuth':
	                return await this.#networkProcessor.continueWithAuth(this.#parser.parseContinueWithAuthParams(command.params));
	            case 'network.failRequest':
	                return await this.#networkProcessor.failRequest(this.#parser.parseFailRequestParams(command.params));
	            case 'network.provideResponse':
	                return await this.#networkProcessor.provideResponse(this.#parser.parseProvideResponseParams(command.params));
	            case 'network.removeIntercept':
	                return await this.#networkProcessor.removeIntercept(this.#parser.parseRemoveInterceptParams(command.params));
	            case 'network.setCacheBehavior':
	                return await this.#networkProcessor.setCacheBehavior(this.#parser.parseSetCacheBehavior(command.params));
	            // keep-sorted end
	            // Permissions module
	            // keep-sorted start block=yes
	            case 'permissions.setPermission':
	                return await this.#permissionsProcessor.setPermissions(this.#parser.parseSetPermissionsParams(command.params));
	            // keep-sorted end
	            // Script module
	            // keep-sorted start block=yes
	            case 'script.addPreloadScript':
	                return await this.#scriptProcessor.addPreloadScript(this.#parser.parseAddPreloadScriptParams(command.params));
	            case 'script.callFunction':
	                return await this.#scriptProcessor.callFunction(this.#parser.parseCallFunctionParams(this.#processTargetParams(command.params)));
	            case 'script.disown':
	                return await this.#scriptProcessor.disown(this.#parser.parseDisownParams(this.#processTargetParams(command.params)));
	            case 'script.evaluate':
	                return await this.#scriptProcessor.evaluate(this.#parser.parseEvaluateParams(this.#processTargetParams(command.params)));
	            case 'script.getRealms':
	                return this.#scriptProcessor.getRealms(this.#parser.parseGetRealmsParams(command.params));
	            case 'script.removePreloadScript':
	                return await this.#scriptProcessor.removePreloadScript(this.#parser.parseRemovePreloadScriptParams(command.params));
	            // keep-sorted end
	            // Session module
	            // keep-sorted start block=yes
	            case 'session.end':
	                throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
	            case 'session.new':
	                return await this.#sessionProcessor.new(command.params);
	            case 'session.status':
	                return this.#sessionProcessor.status();
	            case 'session.subscribe':
	                return await this.#sessionProcessor.subscribe(this.#parser.parseSubscribeParams(command.params), command.channel);
	            case 'session.unsubscribe':
	                return await this.#sessionProcessor.unsubscribe(this.#parser.parseSubscribeParams(command.params), command.channel);
	            // keep-sorted end
	            // Storage module
	            // keep-sorted start block=yes
	            case 'storage.deleteCookies':
	                return await this.#storageProcessor.deleteCookies(this.#parser.parseDeleteCookiesParams(command.params));
	            case 'storage.getCookies':
	                return await this.#storageProcessor.getCookies(this.#parser.parseGetCookiesParams(command.params));
	            case 'storage.setCookie':
	                return await this.#storageProcessor.setCookie(this.#parser.parseSetCookieParams(command.params));
	            // keep-sorted end
	            // WebExtension module
	            // keep-sorted start block=yes
	            case 'webExtension.install':
	                throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
	            case 'webExtension.uninstall':
	                throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
	            // keep-sorted end
	        }
	        // Intentionally kept outside the switch statement to ensure that
	        // ESLint @typescript-eslint/switch-exhaustiveness-check triggers if a new
	        // command is added.
	        throw new protocol_js_1.UnknownCommandException(`Unknown command '${command?.method}'.`);
	    }
	    // Workaround for as zod.union always take the first schema
	    // https://github.com/w3c/webdriver-bidi/issues/635
	    #processTargetParams(params) {
	        if (typeof params === 'object' &&
	            params &&
	            'target' in params &&
	            typeof params.target === 'object' &&
	            params.target &&
	            'context' in params.target) {
	            delete params.target['realm'];
	        }
	        return params;
	    }
	    async processCommand(command) {
	        try {
	            const result = await this.#processCommand(command);
	            const response = {
	                type: 'success',
	                id: command.id,
	                result,
	            };
	            this.emit("response" /* CommandProcessorEvents.Response */, {
	                message: OutgoingMessage_js_1.OutgoingMessage.createResolved(response, command.channel),
	                event: command.method,
	            });
	        }
	        catch (e) {
	            if (e instanceof protocol_js_1.Exception) {
	                this.emit("response" /* CommandProcessorEvents.Response */, {
	                    message: OutgoingMessage_js_1.OutgoingMessage.createResolved(e.toErrorResponse(command.id), command.channel),
	                    event: command.method,
	                });
	            }
	            else {
	                const error = e;
	                this.#logger?.(log_js_1.LogType.bidi, error);
	                this.emit("response" /* CommandProcessorEvents.Response */, {
	                    message: OutgoingMessage_js_1.OutgoingMessage.createResolved(new protocol_js_1.UnknownErrorException(error.message, error.stack).toErrorResponse(command.id), command.channel),
	                    event: command.method,
	                });
	            }
	        }
	    }
	};
	CommandProcessor.CommandProcessor = CommandProcessor$1;
	
	return CommandProcessor;
}

var BluetoothProcessor = {};

var hasRequiredBluetoothProcessor;

function requireBluetoothProcessor () {
	if (hasRequiredBluetoothProcessor) return BluetoothProcessor;
	hasRequiredBluetoothProcessor = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(BluetoothProcessor, "__esModule", { value: true });
	BluetoothProcessor.BluetoothProcessor = undefined;
	let BluetoothProcessor$1 = class BluetoothProcessor {
	    #eventManager;
	    #browsingContextStorage;
	    constructor(eventManager, browsingContextStorage) {
	        this.#eventManager = eventManager;
	        this.#browsingContextStorage = browsingContextStorage;
	    }
	    async simulateAdapter(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        // Bluetooth spec requires overriding the existing adapter (step 6). From the CDP
	        // perspective, we need to disable the emulation first.
	        // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
	        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.disable');
	        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.enable', {
	            state: params.state,
	        });
	        return {};
	    }
	    async simulatePreconnectedPeripheral(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulatePreconnectedPeripheral', {
	            address: params.address,
	            name: params.name,
	            knownServiceUuids: params.knownServiceUuids,
	            manufacturerData: params.manufacturerData,
	        });
	        return {};
	    }
	    async simulateAdvertisement(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateAdvertisement', {
	            entry: params.scanEntry,
	        });
	        return {};
	    }
	    onCdpTargetCreated(cdpTarget) {
	        cdpTarget.cdpClient.on('DeviceAccess.deviceRequestPrompted', (event) => {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: 'bluetooth.requestDevicePromptUpdated',
	                params: {
	                    context: cdpTarget.id,
	                    prompt: event.id,
	                    devices: event.devices,
	                },
	            }, cdpTarget.id);
	        });
	    }
	    async handleRequestDevicePrompt(params) {
	        const context = this.#browsingContextStorage.getContext(params.context);
	        if (params.accept) {
	            await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.selectPrompt', {
	                id: params.prompt,
	                deviceId: params.device,
	            });
	        }
	        else {
	            await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.cancelPrompt', {
	                id: params.prompt,
	            });
	        }
	        return {};
	    }
	};
	BluetoothProcessor.BluetoothProcessor = BluetoothProcessor$1;
	
	return BluetoothProcessor;
}

var CdpTargetManager = {};

var BrowsingContextImpl = {};

var Deferred = {};

var hasRequiredDeferred;

function requireDeferred () {
	if (hasRequiredDeferred) return Deferred;
	hasRequiredDeferred = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(Deferred, "__esModule", { value: true });
	Deferred.Deferred = undefined;
	let Deferred$1 = class Deferred {
	    #isFinished = false;
	    #promise;
	    #result;
	    #resolve;
	    #reject;
	    get isFinished() {
	        return this.#isFinished;
	    }
	    get result() {
	        if (!this.#isFinished) {
	            throw new Error('Deferred is not finished yet');
	        }
	        return this.#result;
	    }
	    constructor() {
	        this.#promise = new Promise((resolve, reject) => {
	            this.#resolve = resolve;
	            this.#reject = reject;
	        });
	        // Needed to avoid `Uncaught (in promise)`. The promises returned by `then`
	        // and `catch` will be rejected anyway.
	        this.#promise.catch((_error) => {
	            // Intentionally empty.
	        });
	    }
	    then(onFulfilled, onRejected) {
	        return this.#promise.then(onFulfilled, onRejected);
	    }
	    catch(onRejected) {
	        return this.#promise.catch(onRejected);
	    }
	    resolve(value) {
	        this.#result = value;
	        if (!this.#isFinished) {
	            this.#isFinished = true;
	            this.#resolve(value);
	        }
	    }
	    reject(reason) {
	        if (!this.#isFinished) {
	            this.#isFinished = true;
	            this.#reject(reason);
	        }
	    }
	    finally(onFinally) {
	        return this.#promise.finally(onFinally);
	    }
	    [Symbol.toStringTag] = 'Promise';
	};
	Deferred.Deferred = Deferred$1;
	
	return Deferred;
}

var time = {};

var hasRequiredTime;

function requireTime () {
	if (hasRequiredTime) return time;
	hasRequiredTime = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(time, "__esModule", { value: true });
	time.getTimestamp = getTimestamp;
	function getTimestamp() {
	    // `timestamp` from the event is MonotonicTime, not real time, so
	    // the best Mapper can do is to set the timestamp to the epoch time
	    // of the event arrived.
	    // https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-MonotonicTime
	    return new Date().getTime();
	}
	
	return time;
}

var unitConversions = {};

var hasRequiredUnitConversions;

function requireUnitConversions () {
	if (hasRequiredUnitConversions) return unitConversions;
	hasRequiredUnitConversions = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(unitConversions, "__esModule", { value: true });
	unitConversions.inchesFromCm = inchesFromCm;
	/** @return Given an input in cm, convert it to inches. */
	function inchesFromCm(cm) {
	    return cm / 2.54;
	}
	
	return unitConversions;
}

var WindowRealm$1 = {};

var Realm$1 = {};

var hasRequiredRealm;

function requireRealm () {
	if (hasRequiredRealm) return Realm$1;
	hasRequiredRealm = 1;
	Object.defineProperty(Realm$1, "__esModule", { value: true });
	Realm$1.Realm = undefined;
	const protocol_js_1 = requireProtocol();
	const log_js_1 = requireLog();
	const uuid_js_1 = requireUuid();
	const ChannelProxy_js_1 = requireChannelProxy();
	class Realm {
	    #cdpClient;
	    #eventManager;
	    #executionContextId;
	    #logger;
	    #origin;
	    #realmId;
	    #realmStorage;
	    constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
	        this.#cdpClient = cdpClient;
	        this.#eventManager = eventManager;
	        this.#executionContextId = executionContextId;
	        this.#logger = logger;
	        this.#origin = origin;
	        this.#realmId = realmId;
	        this.#realmStorage = realmStorage;
	        this.#realmStorage.addRealm(this);
	    }
	    cdpToBidiValue(cdpValue, resultOwnership) {
	        const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, new Map());
	        if (cdpValue.result.objectId) {
	            const objectId = cdpValue.result.objectId;
	            if (resultOwnership === "root" /* Script.ResultOwnership.Root */) {
	                // Extend BiDi value with `handle` based on required `resultOwnership`
	                // and  CDP response but not on the actual BiDi type.
	                bidiValue.handle = objectId;
	                // Remember all the handles sent to client.
	                this.#realmStorage.knownHandlesToRealmMap.set(objectId, this.realmId);
	            }
	            else {
	                // No need to await for the object to be released.
	                void this.#releaseObject(objectId).catch((error) => this.#logger?.(log_js_1.LogType.debugError, error));
	            }
	        }
	        return bidiValue;
	    }
	    /**
	     * Relies on the CDP to implement proper BiDi serialization, except:
	     * * CDP integer property `backendNodeId` is replaced with `sharedId` of
	     * `{documentId}_element_{backendNodeId}`;
	     * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
	     * using unique-per serialization `internalIdMap`.
	     * * CDP type `platformobject` is replaced with `object`.
	     * @param deepSerializedValue - CDP value to be converted to BiDi.
	     * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
	     * `internalId`.
	     */
	    serializeForBiDi(deepSerializedValue, internalIdMap) {
	        if (Object.hasOwn(deepSerializedValue, 'weakLocalObjectReference')) {
	            const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
	            if (!internalIdMap.has(weakLocalObjectReference)) {
	                internalIdMap.set(weakLocalObjectReference, (0, uuid_js_1.uuidv4)());
	            }
	            deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
	            delete deepSerializedValue['weakLocalObjectReference'];
	        }
	        if (deepSerializedValue.type === 'node' &&
	            Object.hasOwn(deepSerializedValue?.value, 'frameId')) {
	            // `frameId` is not needed in BiDi as it is not yet specified.
	            delete deepSerializedValue.value['frameId'];
	        }
	        // Platform object is a special case. It should have only `{type: object}`
	        // without `value` field.
	        if (deepSerializedValue.type === 'platformobject') {
	            return { type: 'object' };
	        }
	        const bidiValue = deepSerializedValue.value;
	        if (bidiValue === undefined) {
	            return deepSerializedValue;
	        }
	        // Recursively update the nested values.
	        if (['array', 'set', 'htmlcollection', 'nodelist'].includes(deepSerializedValue.type)) {
	            for (const i in bidiValue) {
	                bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
	            }
	        }
	        if (['object', 'map'].includes(deepSerializedValue.type)) {
	            for (const i in bidiValue) {
	                bidiValue[i] = [
	                    this.serializeForBiDi(bidiValue[i][0], internalIdMap),
	                    this.serializeForBiDi(bidiValue[i][1], internalIdMap),
	                ];
	            }
	        }
	        return deepSerializedValue;
	    }
	    get realmId() {
	        return this.#realmId;
	    }
	    get executionContextId() {
	        return this.#executionContextId;
	    }
	    get origin() {
	        return this.#origin;
	    }
	    get source() {
	        return {
	            realm: this.realmId,
	        };
	    }
	    get cdpClient() {
	        return this.#cdpClient;
	    }
	    get baseInfo() {
	        return {
	            realm: this.realmId,
	            origin: this.origin,
	        };
	    }
	    async evaluate(expression, awaitPromise, resultOwnership = "none" /* Script.ResultOwnership.None */, serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
	        const cdpEvaluateResult = await this.cdpClient.sendCommand('Runtime.evaluate', {
	            contextId: this.executionContextId,
	            expression,
	            awaitPromise,
	            serializationOptions: Realm.#getSerializationOptions("deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */, serializationOptions),
	            userGesture: userActivation,
	            includeCommandLineAPI: includeCommandLineApi,
	        });
	        if (cdpEvaluateResult.exceptionDetails) {
	            return await this.#getExceptionResult(cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
	        }
	        return {
	            realm: this.realmId,
	            result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
	            type: 'success',
	        };
	    }
	    #registerEvent(event) {
	        if (this.associatedBrowsingContexts.length === 0) {
	            this.#eventManager.registerEvent(event, null);
	        }
	        else {
	            for (const browsingContext of this.associatedBrowsingContexts) {
	                this.#eventManager.registerEvent(event, browsingContext.id);
	            }
	        }
	    }
	    initialize() {
	        this.#registerEvent({
	            type: 'event',
	            method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
	            params: this.realmInfo,
	        });
	    }
	    /**
	     * Serializes a given CDP object into BiDi, keeping references in the
	     * target's `globalThis`.
	     */
	    async serializeCdpObject(cdpRemoteObject, resultOwnership) {
	        // TODO: if the object is a primitive, return it directly without CDP roundtrip.
	        const argument = Realm.#cdpRemoteObjectToCallArgument(cdpRemoteObject);
	        const cdpValue = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	            functionDeclaration: String((remoteObject) => remoteObject),
	            awaitPromise: false,
	            arguments: [argument],
	            serializationOptions: {
	                serialization: "deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */,
	            },
	            executionContextId: this.executionContextId,
	        });
	        return this.cdpToBidiValue(cdpValue, resultOwnership);
	    }
	    static #cdpRemoteObjectToCallArgument(cdpRemoteObject) {
	        if (cdpRemoteObject.objectId !== undefined) {
	            return { objectId: cdpRemoteObject.objectId };
	        }
	        if (cdpRemoteObject.unserializableValue !== undefined) {
	            return { unserializableValue: cdpRemoteObject.unserializableValue };
	        }
	        return { value: cdpRemoteObject.value };
	    }
	    /**
	     * Gets the string representation of an object. This is equivalent to
	     * calling `toString()` on the object value.
	     */
	    async stringifyObject(cdpRemoteObject) {
	        const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	            functionDeclaration: String(
	            // eslint-disable-next-line @typescript-eslint/no-base-to-string
	            (remoteObject) => String(remoteObject)),
	            awaitPromise: false,
	            arguments: [cdpRemoteObject],
	            returnByValue: true,
	            executionContextId: this.executionContextId,
	        });
	        return result.value;
	    }
	    async #flattenKeyValuePairs(mappingLocalValue) {
	        const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
	            let keyArg;
	            if (typeof key === 'string') {
	                // Key is a string.
	                keyArg = { value: key };
	            }
	            else {
	                // Key is a serialized value.
	                keyArg = await this.deserializeForCdp(key);
	            }
	            const valueArg = await this.deserializeForCdp(value);
	            return [keyArg, valueArg];
	        }));
	        return keyValueArray.flat();
	    }
	    async #flattenValueList(listLocalValue) {
	        return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
	    }
	    async #serializeCdpExceptionDetails(cdpExceptionDetails, lineOffset, resultOwnership) {
	        const callFrames = cdpExceptionDetails.stackTrace?.callFrames.map((frame) => ({
	            url: frame.url,
	            functionName: frame.functionName,
	            lineNumber: frame.lineNumber - lineOffset,
	            columnNumber: frame.columnNumber,
	        })) ?? [];
	        // Exception should always be there.
	        const exception = cdpExceptionDetails.exception;
	        return {
	            exception: await this.serializeCdpObject(exception, resultOwnership),
	            columnNumber: cdpExceptionDetails.columnNumber,
	            lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
	            stackTrace: {
	                callFrames,
	            },
	            text: (await this.stringifyObject(exception)) || cdpExceptionDetails.text,
	        };
	    }
	    async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
	        type: 'undefined',
	    }, argumentsLocalValues = [], resultOwnership = "none" /* Script.ResultOwnership.None */, serializationOptions = {}, userActivation = false) {
	        const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
	        const thisAndArgumentsList = [
	            await this.deserializeForCdp(thisLocalValue),
	            ...(await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))),
	        ];
	        let cdpCallFunctionResult;
	        try {
	            cdpCallFunctionResult = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                functionDeclaration: callFunctionAndSerializeScript,
	                awaitPromise,
	                arguments: thisAndArgumentsList,
	                serializationOptions: Realm.#getSerializationOptions("deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */, serializationOptions),
	                executionContextId: this.executionContextId,
	                userGesture: userActivation,
	            });
	        }
	        catch (error) {
	            // Heuristic to determine if the problem is in the argument.
	            // The check can be done on the `deserialization` step, but this approach
	            // helps to save round-trips.
	            if (error.code === -32e3 /* CdpErrorConstants.GENERIC_ERROR */ &&
	                [
	                    'Could not find object with given id',
	                    'Argument should belong to the same JavaScript world as target object',
	                    'Invalid remote object id',
	                ].includes(error.message)) {
	                throw new protocol_js_1.NoSuchHandleException('Handle was not found.');
	            }
	            throw error;
	        }
	        if (cdpCallFunctionResult.exceptionDetails) {
	            return await this.#getExceptionResult(cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
	        }
	        return {
	            type: 'success',
	            result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
	            realm: this.realmId,
	        };
	    }
	    async deserializeForCdp(localValue) {
	        if ('handle' in localValue && localValue.handle) {
	            return { objectId: localValue.handle };
	            // We tried to find a handle value but failed
	            // This allows us to have exhaustive switch on `localValue.type`
	        }
	        else if ('handle' in localValue || 'sharedId' in localValue) {
	            throw new protocol_js_1.NoSuchHandleException('Handle was not found.');
	        }
	        switch (localValue.type) {
	            case 'undefined':
	                return { unserializableValue: 'undefined' };
	            case 'null':
	                return { unserializableValue: 'null' };
	            case 'string':
	                return { value: localValue.value };
	            case 'number':
	                if (localValue.value === 'NaN') {
	                    return { unserializableValue: 'NaN' };
	                }
	                else if (localValue.value === '-0') {
	                    return { unserializableValue: '-0' };
	                }
	                else if (localValue.value === 'Infinity') {
	                    return { unserializableValue: 'Infinity' };
	                }
	                else if (localValue.value === '-Infinity') {
	                    return { unserializableValue: '-Infinity' };
	                }
	                return {
	                    value: localValue.value,
	                };
	            case 'boolean':
	                return { value: Boolean(localValue.value) };
	            case 'bigint':
	                return {
	                    unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`,
	                };
	            case 'date':
	                return {
	                    unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`,
	                };
	            case 'regexp':
	                return {
	                    unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`,
	                };
	            case 'map': {
	                // TODO: If none of the nested keys and values has a remote
	                // reference, serialize to `unserializableValue` without CDP roundtrip.
	                const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
	                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                    functionDeclaration: String((...args) => {
	                        const result = new Map();
	                        for (let i = 0; i < args.length; i += 2) {
	                            result.set(args[i], args[i + 1]);
	                        }
	                        return result;
	                    }),
	                    awaitPromise: false,
	                    arguments: keyValueArray,
	                    returnByValue: false,
	                    executionContextId: this.executionContextId,
	                });
	                // TODO(#375): Release `result.objectId` after using.
	                return { objectId: result.objectId };
	            }
	            case 'object': {
	                // TODO: If none of the nested keys and values has a remote
	                // reference, serialize to `unserializableValue` without CDP roundtrip.
	                const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
	                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                    functionDeclaration: String((...args) => {
	                        const result = {};
	                        for (let i = 0; i < args.length; i += 2) {
	                            // Key should be either `string`, `number`, or `symbol`.
	                            const key = args[i];
	                            result[key] = args[i + 1];
	                        }
	                        return result;
	                    }),
	                    awaitPromise: false,
	                    arguments: keyValueArray,
	                    returnByValue: false,
	                    executionContextId: this.executionContextId,
	                });
	                // TODO(#375): Release `result.objectId` after using.
	                return { objectId: result.objectId };
	            }
	            case 'array': {
	                // TODO: If none of the nested items has a remote reference,
	                // serialize to `unserializableValue` without CDP roundtrip.
	                const args = await this.#flattenValueList(localValue.value);
	                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                    functionDeclaration: String((...args) => args),
	                    awaitPromise: false,
	                    arguments: args,
	                    returnByValue: false,
	                    executionContextId: this.executionContextId,
	                });
	                // TODO(#375): Release `result.objectId` after using.
	                return { objectId: result.objectId };
	            }
	            case 'set': {
	                // TODO: if none of the nested items has a remote reference,
	                // serialize to `unserializableValue` without CDP roundtrip.
	                const args = await this.#flattenValueList(localValue.value);
	                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
	                    functionDeclaration: String((...args) => new Set(args)),
	                    awaitPromise: false,
	                    arguments: args,
	                    returnByValue: false,
	                    executionContextId: this.executionContextId,
	                });
	                // TODO(#375): Release `result.objectId` after using.
	                return { objectId: result.objectId };
	            }
	            case 'channel': {
	                const channelProxy = new ChannelProxy_js_1.ChannelProxy(localValue.value, this.#logger);
	                const channelProxySendMessageHandle = await channelProxy.init(this, this.#eventManager);
	                return { objectId: channelProxySendMessageHandle };
	            }
	            // TODO(#375): Dispose of nested objects.
	        }
	        // Intentionally outside to handle unknown types
	        throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
	    }
	    async #getExceptionResult(exceptionDetails, lineOffset, resultOwnership) {
	        return {
	            exceptionDetails: await this.#serializeCdpExceptionDetails(exceptionDetails, lineOffset, resultOwnership),
	            realm: this.realmId,
	            type: 'exception',
	        };
	    }
	    static #getSerializationOptions(serialization, serializationOptions) {
	        return {
	            serialization,
	            additionalParameters: Realm.#getAdditionalSerializationParameters(serializationOptions),
	            ...Realm.#getMaxObjectDepth(serializationOptions),
	        };
	    }
	    static #getAdditionalSerializationParameters(serializationOptions) {
	        const additionalParameters = {};
	        if (serializationOptions.maxDomDepth !== undefined) {
	            additionalParameters['maxNodeDepth'] =
	                serializationOptions.maxDomDepth === null
	                    ? 1000
	                    : serializationOptions.maxDomDepth;
	        }
	        if (serializationOptions.includeShadowTree !== undefined) {
	            additionalParameters['includeShadowTree'] =
	                serializationOptions.includeShadowTree;
	        }
	        return additionalParameters;
	    }
	    static #getMaxObjectDepth(serializationOptions) {
	        return serializationOptions.maxObjectDepth === undefined ||
	            serializationOptions.maxObjectDepth === null
	            ? {}
	            : { maxDepth: serializationOptions.maxObjectDepth };
	    }
	    async #releaseObject(handle) {
	        try {
	            await this.cdpClient.sendCommand('Runtime.releaseObject', {
	                objectId: handle,
	            });
	        }
	        catch (error) {
	            // Heuristic to determine if the problem is in the unknown handler.
	            // Ignore the error if so.
	            if (!(error.code === -32e3 /* CdpErrorConstants.GENERIC_ERROR */ &&
	                error.message === 'Invalid remote object id')) {
	                throw error;
	            }
	        }
	    }
	    async disown(handle) {
	        // Disowning an object from different realm does nothing.
	        if (this.#realmStorage.knownHandlesToRealmMap.get(handle) !== this.realmId) {
	            return;
	        }
	        await this.#releaseObject(handle);
	        this.#realmStorage.knownHandlesToRealmMap.delete(handle);
	    }
	    dispose() {
	        this.#registerEvent({
	            type: 'event',
	            method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmDestroyed,
	            params: {
	                realm: this.realmId,
	            },
	        });
	    }
	}
	Realm$1.Realm = Realm;
	
	return Realm$1;
}

var SharedId = {};

var hasRequiredSharedId;

function requireSharedId () {
	if (hasRequiredSharedId) return SharedId;
	hasRequiredSharedId = 1;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(SharedId, "__esModule", { value: true });
	SharedId.getSharedId = getSharedId;
	SharedId.parseSharedId = parseSharedId;
	const SHARED_ID_DIVIDER = '_element_';
	function getSharedId(frameId, documentId, backendNodeId) {
	    return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
	}
	function parseLegacySharedId(sharedId) {
	    const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
	    if (!match) {
	        // SharedId is incorrectly formatted.
	        return null;
	    }
	    const documentId = match[1];
	    const elementId = match[2];
	    if (documentId === undefined || elementId === undefined) {
	        return null;
	    }
	    const backendNodeId = parseInt(elementId ?? '');
	    if (isNaN(backendNodeId)) {
	        return null;
	    }
	    return {
	        documentId,
	        backendNodeId,
	    };
	}
	function parseSharedId(sharedId) {
	    // TODO: remove legacy check once ChromeDriver provides sharedId in the new format.
	    const legacyFormattedSharedId = parseLegacySharedId(sharedId);
	    if (legacyFormattedSharedId !== null) {
	        return { ...legacyFormattedSharedId, frameId: undefined };
	    }
	    const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
	    if (!match) {
	        // SharedId is incorrectly formatted.
	        return null;
	    }
	    const frameId = match[1];
	    const documentId = match[2];
	    const elementId = match[3];
	    if (frameId === undefined ||
	        documentId === undefined ||
	        elementId === undefined) {
	        return null;
	    }
	    const backendNodeId = parseInt(elementId ?? '');
	    if (isNaN(backendNodeId)) {
	        return null;
	    }
	    return {
	        frameId,
	        documentId,
	        backendNodeId,
	    };
	}
	
	return SharedId;
}

var hasRequiredWindowRealm;

function requireWindowRealm () {
	if (hasRequiredWindowRealm) return WindowRealm$1;
	hasRequiredWindowRealm = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(WindowRealm$1, "__esModule", { value: true });
	WindowRealm$1.WindowRealm = undefined;
	const protocol_js_1 = requireProtocol();
	const Realm_js_1 = requireRealm();
	const SharedId_js_1 = requireSharedId();
	class WindowRealm extends Realm_js_1.Realm {
	    #browsingContextId;
	    #browsingContextStorage;
	    sandbox;
	    constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
	        super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
	        this.#browsingContextId = browsingContextId;
	        this.#browsingContextStorage = browsingContextStorage;
	        this.sandbox = sandbox;
	        this.initialize();
	    }
	    #getBrowsingContextId(navigableId) {
	        const maybeBrowsingContext = this.#browsingContextStorage
	            .getAllContexts()
	            .find((context) => context.navigableId === navigableId);
	        return maybeBrowsingContext?.id ?? 'UNKNOWN';
	    }
	    get browsingContext() {
	        return this.#browsingContextStorage.getContext(this.#browsingContextId);
	    }
	    get associatedBrowsingContexts() {
	        return [this.browsingContext];
	    }
	    get realmType() {
	        return 'window';
	    }
	    get realmInfo() {
	        return {
	            ...this.baseInfo,
	            type: this.realmType,
	            context: this.#browsingContextId,
	            sandbox: this.sandbox,
	        };
	    }
	    get source() {
	        return {
	            realm: this.realmId,
	            context: this.browsingContext.id,
	        };
	    }
	    serializeForBiDi(deepSerializedValue, internalIdMap) {
	        const bidiValue = deepSerializedValue.value;
	        if (deepSerializedValue.type === 'node' && bidiValue !== undefined) {
	            if (Object.hasOwn(bidiValue, 'backendNodeId')) {
	                let navigableId = this.browsingContext.navigableId ?? 'UNKNOWN';
	                if (Object.hasOwn(bidiValue, 'loaderId')) {
	                    // `loaderId` should be always there after ~2024-03-05, when
	                    // https://crrev.com/c/5116240 reaches stable.
	                    // TODO: remove the check after the date.
	                    navigableId = bidiValue.loaderId;
	                    delete bidiValue['loaderId'];
	                }
	                deepSerializedValue.sharedId =
	                    (0, SharedId_js_1.getSharedId)(this.#getBrowsingContextId(navigableId), navigableId, bidiValue.backendNodeId);
	                delete bidiValue['backendNodeId'];
	            }
	            if (Object.hasOwn(bidiValue, 'children')) {
	                for (const i in bidiValue.children) {
	                    bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
	                }
	            }
	            if (Object.hasOwn(bidiValue, 'shadowRoot') &&
	                bidiValue.shadowRoot !== null) {
	                bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
	            }
	            // `namespaceURI` can be is either `null` or non-empty string.
	            if (bidiValue.namespaceURI === '') {
	                bidiValue.namespaceURI = null;
	            }
	        }
	        return super.serializeForBiDi(deepSerializedValue, internalIdMap);
	    }
	    async deserializeForCdp(localValue) {
	        if ('sharedId' in localValue && localValue.sharedId) {
	            const parsedSharedId = (0, SharedId_js_1.parseSharedId)(localValue.sharedId);
	            if (parsedSharedId === null) {
	                throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
	            }
	            const { documentId, backendNodeId } = parsedSharedId;
	            // TODO: add proper validation if the element is accessible from the current realm.
	            if (this.browsingContext.navigableId !== documentId) {
	                throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
	            }
	            try {
	                const { object } = await this.cdpClient.sendCommand('DOM.resolveNode', {
	                    backendNodeId,
	                    executionContextId: this.executionContextId,
	                });
	                // TODO(#375): Release `obj.object.objectId` after using.
	                return { objectId: object.objectId };
	            }
	            catch (error) {
	                // Heuristic to detect "no such node" exception. Based on the  specific
	                // CDP implementation.
	                if (error.code === -32e3 /* CdpErrorConstants.GENERIC_ERROR */ &&
	                    error.message === 'No node with given id found') {
	                    throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
	                }
	                throw new protocol_js_1.UnknownErrorException(error.message, error.stack);
	            }
	        }
	        return await super.deserializeForCdp(localValue);
	    }
	    async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
	        await this.#browsingContextStorage
	            .getContext(this.#browsingContextId)
	            .targetUnblockedOrThrow();
	        return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
	    }
	    async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
	        await this.#browsingContextStorage
	            .getContext(this.#browsingContextId)
	            .targetUnblockedOrThrow();
	        return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
	    }
	}
	WindowRealm$1.WindowRealm = WindowRealm;
	
	return WindowRealm$1;
}

var NavigationTracker = {};

var UrlHelpers = {};

var hasRequiredUrlHelpers;

function requireUrlHelpers () {
	if (hasRequiredUrlHelpers) return UrlHelpers;
	hasRequiredUrlHelpers = 1;
	/*
	 *  Copyright 2024 Google LLC.
	 *  Copyright (c) Microsoft Corporation.
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 *
	 */
	Object.defineProperty(UrlHelpers, "__esModule", { value: true });
	UrlHelpers.urlMatchesAboutBlank = urlMatchesAboutBlank;
	/**
	 * A URL matches about:blank if its scheme is "about", its path contains a single string
	 * "blank", its username and password are the empty string, and its host is null.
	 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:blank
	 * @param {string} url
	 * @return {boolean}
	 */
	function urlMatchesAboutBlank(url) {
	    // An empty string is a special case, and considered to be about:blank.
	    // https://html.spec.whatwg.org/multipage/nav-history-apis.html#window-open-steps
	    if (url === '') {
	        return true;
	    }
	    try {
	        const parsedUrl = new URL(url);
	        const schema = parsedUrl.protocol.replace(/:$/, '');
	        return (schema.toLowerCase() === 'about' &&
	            parsedUrl.pathname.toLowerCase() === 'blank' &&
	            parsedUrl.username === '' &&
	            parsedUrl.password === '' &&
	            parsedUrl.host === '');
	    }
	    catch (err) {
	        // Wrong URL considered do not match about:blank.
	        if (err instanceof TypeError) {
	            return false;
	        }
	        // Re-throw other unexpected errors.
	        throw err;
	    }
	}
	
	return UrlHelpers;
}

var hasRequiredNavigationTracker;

function requireNavigationTracker () {
	if (hasRequiredNavigationTracker) return NavigationTracker;
	hasRequiredNavigationTracker = 1;
	/*
	 *  Copyright 2024 Google LLC.
	 *  Copyright (c) Microsoft Corporation.
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 *
	 */
	Object.defineProperty(NavigationTracker, "__esModule", { value: true });
	NavigationTracker.NavigationTracker = NavigationTracker.NavigationResult = undefined;
	const protocol_js_1 = requireProtocol();
	const Deferred_js_1 = requireDeferred();
	const log_js_1 = requireLog();
	const time_js_1 = requireTime();
	const UrlHelpers_js_1 = requireUrlHelpers();
	const uuid_js_1 = requireUuid();
	class NavigationResult {
	    eventName;
	    message;
	    constructor(eventName, message) {
	        this.eventName = eventName;
	        this.message = message;
	    }
	}
	NavigationTracker.NavigationResult = NavigationResult;
	class NavigationState {
	    navigationId = (0, uuid_js_1.uuidv4)();
	    #browsingContextId;
	    #started = false;
	    #finished = new Deferred_js_1.Deferred();
	    url;
	    loaderId;
	    #isInitial;
	    #eventManager;
	    #navigated = false;
	    get finished() {
	        return this.#finished;
	    }
	    constructor(url, browsingContextId, isInitial, eventManager) {
	        this.#browsingContextId = browsingContextId;
	        this.url = url;
	        this.#isInitial = isInitial;
	        this.#eventManager = eventManager;
	    }
	    navigationInfo() {
	        return {
	            context: this.#browsingContextId,
	            navigation: this.navigationId,
	            timestamp: (0, time_js_1.getTimestamp)(),
	            url: this.url,
	        };
	    }
	    start() {
	        if (!this.#isInitial && !this.#started) {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
	                params: this.navigationInfo(),
	            }, this.#browsingContextId);
	        }
	        this.#started = true;
	    }
	    #finish(navigationResult) {
	        this.#started = true;
	        if (!this.#isInitial &&
	            !this.#finished.isFinished &&
	            navigationResult.eventName !== "browsingContext.load" /* NavigationEventName.Load */) {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: navigationResult.eventName,
	                params: this.navigationInfo(),
	            }, this.#browsingContextId);
	        }
	        this.#finished.resolve(navigationResult);
	    }
	    frameNavigated() {
	        this.#navigated = true;
	    }
	    fragmentNavigated() {
	        this.#navigated = true;
	        this.#finish(new NavigationResult("browsingContext.fragmentNavigated" /* NavigationEventName.FragmentNavigated */));
	    }
	    load() {
	        this.#finish(new NavigationResult("browsingContext.load" /* NavigationEventName.Load */));
	    }
	    fail(message) {
	        this.#finish(new NavigationResult(this.#navigated
	            ? "browsingContext.navigationAborted" /* NavigationEventName.NavigationAborted */
	            : "browsingContext.navigationFailed" /* NavigationEventName.NavigationFailed */, message));
	    }
	}
	/**
	 * Keeps track of navigations. Details: http://go/webdriver:bidi-navigation
	 */
	let NavigationTracker$1 = class NavigationTracker {
	    #eventManager;
	    #logger;
	    #loaderIdToNavigationsMap = new Map();
	    #browsingContextId;
	    #currentNavigation;
	    // When a new navigation is started via `BrowsingContext.navigate` with `wait` set to
	    // `None`, the command result should have `navigation` value, but mapper does not have
	    // it yet. This value will be set to `navigationId` after next .
	    #pendingNavigation;
	    // Flags if the initial navigation to `about:blank` is in progress.
	    #isInitialNavigation = true;
	    navigation = {
	        withinDocument: new Deferred_js_1.Deferred(),
	    };
	    constructor(url, browsingContextId, eventManager, logger) {
	        this.#browsingContextId = browsingContextId;
	        this.#eventManager = eventManager;
	        this.#logger = logger;
	        this.#isInitialNavigation = true;
	        this.#currentNavigation = new NavigationState(url, browsingContextId, (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url), this.#eventManager);
	    }
	    /**
	     * Returns current started ongoing navigation. It can be either a started pending
	     * navigation, or one is already navigated.
	     */
	    get currentNavigationId() {
	        if (this.#pendingNavigation?.loaderId !== undefined) {
	            return this.#pendingNavigation.navigationId;
	        }
	        return this.#currentNavigation.navigationId;
	    }
	    /**
	     * Flags if the current navigation relates to the initial to `about:blank` navigation.
	     */
	    get isInitialNavigation() {
	        return this.#isInitialNavigation;
	    }
	    /**
	     * Url of the last navigated navigation.
	     */
	    get url() {
	        return this.#currentNavigation.url;
	    }
	    /**
	     * Creates a pending navigation e.g. when navigation command is called. Required to
	     * provide navigation id before the actual navigation is started. It will be used when
	     * navigation started. Can be aborted, failed, fragment navigated, or became a current
	     * navigation.
	     */
	    createPendingNavigation(url, canBeInitialNavigation = false) {
	        this.#logger?.(log_js_1.LogType.debug, 'createCommandNavigation');
	        this.#isInitialNavigation =
	            canBeInitialNavigation &&
	                this.#isInitialNavigation &&
	                (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url);
	        this.#pendingNavigation?.fail('navigation canceled by concurrent navigation');
	        const navigation = new NavigationState(url, this.#browsingContextId, this.#isInitialNavigation, this.#eventManager);
	        this.#pendingNavigation = navigation;
	        return navigation;
	    }
	    dispose() {
	        this.#pendingNavigation?.fail('navigation canceled by context disposal');
	        this.#currentNavigation.fail('navigation canceled by context disposal');
	    }
	    // Update the current url.
	    onTargetInfoChanged(url) {
	        this.#logger?.(log_js_1.LogType.debug, `onTargetInfoChanged ${url}`);
	        this.#currentNavigation.url = url;
	    }
	    #getNavigationForFrameNavigated(url, loaderId) {
	        if (this.#loaderIdToNavigationsMap.has(loaderId)) {
	            return this.#loaderIdToNavigationsMap.get(loaderId);
	        }
	        if (this.#pendingNavigation !== undefined &&
	            this.#pendingNavigation?.loaderId === undefined) {
	            // This can be a pending navigation to `about:blank` created by a command. Use the
	            // pending navigation in this case.
	            return this.#pendingNavigation;
	        }
	        // Create a new pending navigation.
	        return this.createPendingNavigation(url, true);
	    }
	    /**
	     * @param {string} unreachableUrl indicated the navigation is actually failed.
	     */
	    frameNavigated(url, loaderId, unreachableUrl) {
	        this.#logger?.(log_js_1.LogType.debug, `frameNavigated ${url}`);
	        if (unreachableUrl !== undefined &&
	            !this.#loaderIdToNavigationsMap.has(loaderId)) {
	            // The navigation failed before started. Get or create pending navigation and fail
	            // it.
	            const navigation = this.#pendingNavigation ??
	                this.createPendingNavigation(unreachableUrl, true);
	            navigation.url = unreachableUrl;
	            navigation.start();
	            navigation.fail('the requested url is unreachable');
	            return;
	        }
	        const navigation = this.#getNavigationForFrameNavigated(url, loaderId);
	        navigation.frameNavigated();
	        if (navigation !== this.#currentNavigation) {
	            this.#currentNavigation.fail('navigation canceled by concurrent navigation');
	        }
	        navigation.url = url;
	        navigation.loaderId = loaderId;
	        this.#loaderIdToNavigationsMap.set(loaderId, navigation);
	        navigation.start();
	        this.#currentNavigation = navigation;
	        if (this.#pendingNavigation === navigation) {
	            this.#pendingNavigation = undefined;
	        }
	    }
	    navigatedWithinDocument(url, navigationType) {
	        this.#logger?.(log_js_1.LogType.debug, `navigatedWithinDocument ${url}, ${navigationType}`);
	        // Current navigation URL should be updated.
	        this.#currentNavigation.url = url;
	        if (navigationType !== 'fragment') {
	            // TODO: check for other navigation types, like `javascript`.
	            return;
	        }
	        // There is no way to guaranteed match pending navigation with finished fragment
	        // navigations. So assume any pending navigation without loader id is the fragment
	        // one.
	        const fragmentNavigation = this.#pendingNavigation !== undefined &&
	            this.#pendingNavigation.loaderId === undefined
	            ? this.#pendingNavigation
	            : new NavigationState(url, this.#browsingContextId, false, this.#eventManager);
	        // Finish ongoing navigation.
	        fragmentNavigation.fragmentNavigated();
	        if (fragmentNavigation === this.#pendingNavigation) {
	            this.#pendingNavigation = undefined;
	        }
	    }
	    frameRequestedNavigation(url) {
	        this.#logger?.(log_js_1.LogType.debug, `Page.frameRequestedNavigation ${url}`);
	        // The page is about to navigate to the url.
	        this.createPendingNavigation(url, true);
	    }
	    /**
	     * Required to mark navigation as fully complete.
	     * TODO: navigation should be complete when it became the current one on
	     * `Page.frameNavigated` or on navigating command finished with a new loader Id.
	     */
	    loadPageEvent(loaderId) {
	        this.#logger?.(log_js_1.LogType.debug, 'loadPageEvent');
	        // Even if it was an initial navigation, it is finished.
	        this.#isInitialNavigation = false;
	        this.#loaderIdToNavigationsMap.get(loaderId)?.load();
	    }
	    /**
	     * Fail navigation due to navigation command failed.
	     */
	    failNavigation(navigation, errorText) {
	        this.#logger?.(log_js_1.LogType.debug, 'failCommandNavigation');
	        navigation.fail(errorText);
	    }
	    /**
	     * Updates the navigation's `loaderId` and sets it as current one, if it is a
	     * cross-document navigation.
	     */
	    navigationCommandFinished(navigation, loaderId) {
	        this.#logger?.(log_js_1.LogType.debug, `finishCommandNavigation ${navigation.navigationId}, ${loaderId}`);
	        if (loaderId !== undefined) {
	            navigation.loaderId = loaderId;
	            this.#loaderIdToNavigationsMap.set(loaderId, navigation);
	        }
	        if (loaderId === undefined || this.#currentNavigation === navigation) {
	            // If the command's navigation is same-document or is already the current one,
	            // nothing to do.
	            return;
	        }
	        this.#currentNavigation.fail('navigation canceled by concurrent navigation');
	        navigation.start();
	        this.#currentNavigation = navigation;
	        if (this.#pendingNavigation === navigation) {
	            this.#pendingNavigation = undefined;
	        }
	    }
	    /**
	     * Emulated event, tight to `Network.requestWillBeSent`.
	     */
	    frameStartedNavigating(url, loaderId) {
	        this.#logger?.(log_js_1.LogType.debug, `frameStartedNavigating ${url}, ${loaderId}`);
	        if (this.#loaderIdToNavigationsMap.has(loaderId)) {
	            // The `frameStartedNavigating` is tight to the `Network.requestWillBeSent` event
	            // which can be emitted several times, e.g. in case of redirection. Nothing to do in
	            // such a case.
	            return;
	        }
	        const pendingNavigation = this.#pendingNavigation ?? this.createPendingNavigation(url, true);
	        pendingNavigation.url = url;
	        pendingNavigation.start();
	        pendingNavigation.loaderId = loaderId;
	        this.#loaderIdToNavigationsMap.set(loaderId, pendingNavigation);
	    }
	    /**
	     * In case of `beforeunload` handler, the pending navigation should be marked as started
	     * for consistency, as the `browsingContext.navigationStarted` should be emitted before
	     * user prompt.
	     */
	    beforeunload() {
	        this.#logger?.(log_js_1.LogType.debug, `beforeunload`);
	        if (this.#pendingNavigation === undefined) {
	            this.#logger?.(log_js_1.LogType.debugError, `Unexpectedly no pending navigation on beforeunload`);
	            return;
	        }
	        this.#pendingNavigation.start();
	    }
	    /**
	     * If there is a navigation with the loaderId equals to the network request id, it means
	     * that the navigation failed.
	     */
	    networkLoadingFailed(loaderId, errorText) {
	        this.#loaderIdToNavigationsMap.get(loaderId)?.fail(errorText);
	    }
	};
	NavigationTracker.NavigationTracker = NavigationTracker$1;
	
	return NavigationTracker;
}

var hasRequiredBrowsingContextImpl;

function requireBrowsingContextImpl () {
	if (hasRequiredBrowsingContextImpl) return BrowsingContextImpl;
	hasRequiredBrowsingContextImpl = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var _a;
	Object.defineProperty(BrowsingContextImpl, "__esModule", { value: true });
	BrowsingContextImpl.BrowsingContextImpl = undefined;
	BrowsingContextImpl.serializeOrigin = serializeOrigin;
	const protocol_js_1 = requireProtocol();
	const assert_js_1 = requireAssert();
	const Deferred_js_1 = requireDeferred();
	const log_js_1 = requireLog();
	const time_js_1 = requireTime();
	const unitConversions_js_1 = requireUnitConversions();
	const WindowRealm_js_1 = requireWindowRealm();
	const NavigationTracker_js_1 = requireNavigationTracker();
	let BrowsingContextImpl$1 = class BrowsingContextImpl {
	    static LOGGER_PREFIX = `${log_js_1.LogType.debug}:browsingContext`;
	    /** Direct children browsing contexts. */
	    #children = new Set();
	    /** The ID of this browsing context. */
	    #id;
	    userContext;
	    /**
	     * The ID of the parent browsing context.
	     * If null, this is a top-level context.
	     */
	    #loaderId;
	    #parentId = null;
	    // Keeps track of the previously set viewport.
	    #previousViewport = { width: 0, height: 0 };
	    #originalOpener;
	    #lifecycle = {
	        DOMContentLoaded: new Deferred_js_1.Deferred(),
	        load: new Deferred_js_1.Deferred(),
	    };
	    #cdpTarget;
	    #defaultRealmDeferred = new Deferred_js_1.Deferred();
	    #browsingContextStorage;
	    #eventManager;
	    #logger;
	    #navigationTracker;
	    #realmStorage;
	    // The deferred will be resolved when the default realm is created.
	    #unhandledPromptBehavior;
	    // Set when the user prompt is opened. Required to provide the type in closing event.
	    #lastUserPromptType;
	    constructor(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
	        this.#cdpTarget = cdpTarget;
	        this.#id = id;
	        this.#parentId = parentId;
	        this.userContext = userContext;
	        this.#eventManager = eventManager;
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#realmStorage = realmStorage;
	        this.#unhandledPromptBehavior = unhandledPromptBehavior;
	        this.#logger = logger;
	        this.#originalOpener = originalOpener;
	        this.#navigationTracker = new NavigationTracker_js_1.NavigationTracker(url, id, eventManager, logger);
	    }
	    static create(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
	        const context = new _a(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger);
	        context.#initListeners();
	        browsingContextStorage.addContext(context);
	        if (!context.isTopLevelContext()) {
	            context.parent.addChild(context.id);
	        }
	        // Hold on the `contextCreated` event until the target is unblocked. This is required,
	        // as the parent of the context can be set later in case of reconnecting to an
	        // existing browser instance + OOPiF.
	        eventManager.registerPromiseEvent(context.targetUnblockedOrThrow().then(() => {
	            return {
	                kind: 'success',
	                value: {
	                    type: 'event',
	                    method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
	                    params: {
	                        ...context.serializeToBidiValue(),
	                        // Hack to provide the initial URL of the context, as it can be changed
	                        // between the page target is attached and unblocked, as the page is not
	                        // fully paused in MPArch session (https://crbug.com/372842894).
	                        // TODO: remove once https://crbug.com/372842894 is addressed.
	                        url,
	                    },
	                },
	            };
	        }, (error) => {
	            return {
	                kind: 'error',
	                error,
	            };
	        }), context.id, protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated);
	        return context;
	    }
	    /**
	     * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
	     */
	    get navigableId() {
	        return this.#loaderId;
	    }
	    get navigationId() {
	        return this.#navigationTracker.currentNavigationId;
	    }
	    dispose(emitContextDestroyed) {
	        this.#navigationTracker.dispose();
	        this.#deleteAllChildren();
	        this.#realmStorage.deleteRealms({
	            browsingContextId: this.id,
	        });
	        // Delete context from the parent.
	        if (!this.isTopLevelContext()) {
	            this.parent.#children.delete(this.id);
	        }
	        // Fail all ongoing navigations.
	        this.#failLifecycleIfNotFinished();
	        if (emitContextDestroyed) {
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
	                params: this.serializeToBidiValue(),
	            }, this.id);
	        }
	        this.#eventManager.clearBufferedEvents(this.id);
	        this.#browsingContextStorage.deleteContextById(this.id);
	    }
	    /** Returns the ID of this context. */
	    get id() {
	        return this.#id;
	    }
	    /** Returns the parent context ID. */
	    get parentId() {
	        return this.#parentId;
	    }
	    /** Sets the parent context ID and updates parent's children. */
	    set parentId(parentId) {
	        if (this.#parentId !== null) {
	            this.#logger?.(log_js_1.LogType.debugError, 'Parent context already set');
	            // Cannot do anything except logging, as throwing will stop event processing. So
	            // just return,
	            return;
	        }
	        this.#parentId = parentId;
	        if (!this.isTopLevelContext()) {
	            this.parent.addChild(this.id);
	        }
	    }
	    /** Returns the parent context. */
	    get parent() {
	        if (this.parentId === null) {
	            return null;
	        }
	        return this.#browsingContextStorage.getContext(this.parentId);
	    }
	    /** Returns all direct children contexts. */
	    get directChildren() {
	        return [...this.#children].map((id) => this.#browsingContextStorage.getContext(id));
	    }
	    /** Returns all children contexts, flattened. */
	    get allChildren() {
	        const children = this.directChildren;
	        return children.concat(...children.map((child) => child.allChildren));
	    }
	    /**
	     * Returns true if this is a top-level context.
	     * This is the case whenever the parent context ID is null.
	     */
	    isTopLevelContext() {
	        return this.#parentId === null;
	    }
	    get top() {
	        // eslint-disable-next-line @typescript-eslint/no-this-alias
	        let topContext = this;
	        let parent = topContext.parent;
	        while (parent) {
	            topContext = parent;
	            parent = topContext.parent;
	        }
	        return topContext;
	    }
	    addChild(childId) {
	        this.#children.add(childId);
	    }
	    #deleteAllChildren(emitContextDestroyed = false) {
	        this.directChildren.map((child) => child.dispose(emitContextDestroyed));
	    }
	    get cdpTarget() {
	        return this.#cdpTarget;
	    }
	    updateCdpTarget(cdpTarget) {
	        this.#cdpTarget = cdpTarget;
	        this.#initListeners();
	    }
	    get url() {
	        return this.#navigationTracker.url;
	    }
	    async lifecycleLoaded() {
	        await this.#lifecycle.load;
	    }
	    async targetUnblockedOrThrow() {
	        const result = await this.#cdpTarget.unblocked;
	        if (result.kind === 'error') {
	            throw result.error;
	        }
	    }
	    async getOrCreateSandbox(sandbox) {
	        if (sandbox === undefined || sandbox === '') {
	            // Default realm is not guaranteed to be created at this point, so return a deferred.
	            return await this.#defaultRealmDeferred;
	        }
	        let maybeSandboxes = this.#realmStorage.findRealms({
	            browsingContextId: this.id,
	            sandbox,
	        });
	        if (maybeSandboxes.length === 0) {
	            await this.#cdpTarget.cdpClient.sendCommand('Page.createIsolatedWorld', {
	                frameId: this.id,
	                worldName: sandbox,
	            });
	            // `Runtime.executionContextCreated` should be emitted by the time the
	            // previous command is done.
	            maybeSandboxes = this.#realmStorage.findRealms({
	                browsingContextId: this.id,
	                sandbox,
	            });
	            (0, assert_js_1.assert)(maybeSandboxes.length !== 0);
	        }
	        // It's possible for more than one sandbox to be created due to provisional
	        // frames. In this case, it's always the first one (i.e. the oldest one)
	        // that is more relevant since the user may have set that one up already
	        // through evaluation.
	        return maybeSandboxes[0];
	    }
	    serializeToBidiValue(maxDepth = 0, addParentField = true) {
	        return {
	            context: this.#id,
	            url: this.url,
	            userContext: this.userContext,
	            originalOpener: this.#originalOpener ?? null,
	            // TODO(#2646): Implement Client Window correctly
	            clientWindow: '',
	            children: maxDepth > 0
	                ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth - 1, false))
	                : null,
	            ...(addParentField ? { parent: this.#parentId } : {}),
	        };
	    }
	    onTargetInfoChanged(params) {
	        this.#navigationTracker.onTargetInfoChanged(params.targetInfo.url);
	    }
	    #initListeners() {
	        this.#cdpTarget.cdpClient.on('Network.loadingFailed', (params) => {
	            // Detect navigation errors like `net::ERR_BLOCKED_BY_RESPONSE`.
	            // Network related to navigation has request id equals to navigation's loader id.
	            this.#navigationTracker.networkLoadingFailed(params.requestId, params.errorText);
	        });
	        this.#cdpTarget.cdpClient.on('Page.frameNavigated', (params) => {
	            if (this.id !== params.frame.id) {
	                return;
	            }
	            this.#navigationTracker.frameNavigated(params.frame.url + (params.frame.urlFragment ?? ''), params.frame.loaderId, 
	            // `unreachableUrl` indicates if the navigation failed.
	            params.frame.unreachableUrl);
	            // At the point the page is initialized, all the nested iframes from the
	            // previous page are detached and realms are destroyed.
	            // Delete children from context.
	            this.#deleteAllChildren();
	            this.#documentChanged(params.frame.loaderId);
	        });
	        this.#cdpTarget.on("frameStartedNavigating" /* TargetEvents.FrameStartedNavigating */, (params) => {
	            this.#logger?.(log_js_1.LogType.debugInfo, `Received ${"frameStartedNavigating" /* TargetEvents.FrameStartedNavigating */} event`, params);
	            // The frame ID can be either a browsing context id, or not set in case of the frame
	            // is the top-level in the current CDP target.
	            const possibleFrameIds = [
	                this.id,
	                ...(this.cdpTarget.id === this.id ? [undefined] : []),
	            ];
	            if (!possibleFrameIds.includes(params.frameId)) {
	                return;
	            }
	            this.#navigationTracker.frameStartedNavigating(params.url, params.loaderId);
	        });
	        this.#cdpTarget.cdpClient.on('Page.navigatedWithinDocument', (params) => {
	            if (this.id !== params.frameId) {
	                return;
	            }
	            this.#navigationTracker.navigatedWithinDocument(params.url, params.navigationType);
	            if (params.navigationType === 'historyApi') {
	                this.#eventManager.registerEvent({
	                    type: 'event',
	                    method: 'browsingContext.historyUpdated',
	                    params: {
	                        context: this.id,
	                        url: this.#navigationTracker.url,
	                    },
	                }, this.id);
	                return;
	            }
	        });
	        this.#cdpTarget.cdpClient.on('Page.frameRequestedNavigation', (params) => {
	            if (this.id !== params.frameId) {
	                return;
	            }
	            this.#navigationTracker.frameRequestedNavigation(params.url);
	        });
	        this.#cdpTarget.cdpClient.on('Page.lifecycleEvent', (params) => {
	            if (this.id !== params.frameId) {
	                return;
	            }
	            if (params.name === 'init') {
	                this.#documentChanged(params.loaderId);
	                return;
	            }
	            if (params.name === 'commit') {
	                this.#loaderId = params.loaderId;
	                return;
	            }
	            // If mapper attached to the page late, it might miss init and
	            // commit events. In that case, save the first loaderId for this
	            // frameId.
	            if (!this.#loaderId) {
	                this.#loaderId = params.loaderId;
	            }
	            // Ignore event from not current navigation.
	            if (params.loaderId !== this.#loaderId) {
	                return;
	            }
	            switch (params.name) {
	                case 'DOMContentLoaded':
	                    if (!this.#navigationTracker.isInitialNavigation) {
	                        // Do not emit for the initial navigation.
	                        this.#eventManager.registerEvent({
	                            type: 'event',
	                            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
	                            params: {
	                                context: this.id,
	                                navigation: this.#navigationTracker.currentNavigationId,
	                                timestamp: (0, time_js_1.getTimestamp)(),
	                                url: this.#navigationTracker.url,
	                            },
	                        }, this.id);
	                    }
	                    this.#lifecycle.DOMContentLoaded.resolve();
	                    break;
	                case 'load':
	                    if (!this.#navigationTracker.isInitialNavigation) {
	                        // Do not emit for the initial navigation.
	                        this.#eventManager.registerEvent({
	                            type: 'event',
	                            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.Load,
	                            params: {
	                                context: this.id,
	                                navigation: this.#navigationTracker.currentNavigationId,
	                                timestamp: (0, time_js_1.getTimestamp)(),
	                                url: this.#navigationTracker.url,
	                            },
	                        }, this.id);
	                    }
	                    // The initial navigation is finished.
	                    this.#navigationTracker.loadPageEvent(params.loaderId);
	                    this.#lifecycle.load.resolve();
	                    break;
	            }
	        });
	        this.#cdpTarget.cdpClient.on('Runtime.executionContextCreated', (params) => {
	            const { auxData, name, uniqueId, id } = params.context;
	            if (!auxData || auxData.frameId !== this.id) {
	                return;
	            }
	            let origin;
	            let sandbox;
	            // Only these execution contexts are supported for now.
	            switch (auxData.type) {
	                case 'isolated':
	                    sandbox = name;
	                    // Sandbox should have the same origin as the context itself, but in CDP
	                    // it has an empty one.
	                    if (!this.#defaultRealmDeferred.isFinished) {
	                        this.#logger?.(log_js_1.LogType.debugError, 'Unexpectedly, isolated realm created before the default one');
	                    }
	                    origin = this.#defaultRealmDeferred.isFinished
	                        ? this.#defaultRealmDeferred.result.origin
	                        : // This fallback is not expected to be ever reached.
	                            '';
	                    break;
	                case 'default':
	                    origin = serializeOrigin(params.context.origin);
	                    break;
	                default:
	                    return;
	            }
	            const realm = new WindowRealm_js_1.WindowRealm(this.id, this.#browsingContextStorage, this.#cdpTarget.cdpClient, this.#eventManager, id, this.#logger, origin, uniqueId, this.#realmStorage, sandbox);
	            if (auxData.isDefault) {
	                this.#defaultRealmDeferred.resolve(realm);
	                // Initialize ChannelProxy listeners for all the channels of all the
	                // preload scripts related to this BrowsingContext.
	                // TODO: extend for not default realms by the sandbox name.
	                void Promise.all(this.#cdpTarget
	                    .getChannels()
	                    .map((channel) => channel.startListenerFromWindow(realm, this.#eventManager)));
	            }
	        });
	        this.#cdpTarget.cdpClient.on('Runtime.executionContextDestroyed', (params) => {
	            if (this.#defaultRealmDeferred.isFinished &&
	                this.#defaultRealmDeferred.result.executionContextId ===
	                    params.executionContextId) {
	                this.#defaultRealmDeferred = new Deferred_js_1.Deferred();
	            }
	            this.#realmStorage.deleteRealms({
	                cdpSessionId: this.#cdpTarget.cdpSessionId,
	                executionContextId: params.executionContextId,
	            });
	        });
	        this.#cdpTarget.cdpClient.on('Runtime.executionContextsCleared', () => {
	            if (!this.#defaultRealmDeferred.isFinished) {
	                this.#defaultRealmDeferred.reject(new protocol_js_1.UnknownErrorException('execution contexts cleared'));
	            }
	            this.#defaultRealmDeferred = new Deferred_js_1.Deferred();
	            this.#realmStorage.deleteRealms({
	                cdpSessionId: this.#cdpTarget.cdpSessionId,
	            });
	        });
	        this.#cdpTarget.cdpClient.on('Page.javascriptDialogClosed', (params) => {
	            const accepted = params.result;
	            if (this.#lastUserPromptType === undefined) {
	                this.#logger?.(log_js_1.LogType.debugError, 'Unexpectedly no opening prompt event before closing one');
	            }
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
	                params: {
	                    context: this.id,
	                    accepted,
	                    // `lastUserPromptType` should never be undefined here, so fallback to
	                    // `UNKNOWN`. The fallback is required to prevent tests from hanging while
	                    // waiting for the closing event. The cast is required, as the `UNKNOWN` value
	                    // is not standard.
	                    type: this.#lastUserPromptType ??
	                        'UNKNOWN',
	                    userText: accepted && params.userInput ? params.userInput : undefined,
	                },
	            }, this.id);
	            this.#lastUserPromptType = undefined;
	        });
	        this.#cdpTarget.cdpClient.on('Page.javascriptDialogOpening', (params) => {
	            const promptType = _a.#getPromptType(params.type);
	            if (params.type === 'beforeunload') {
	                this.#navigationTracker.beforeunload();
	            }
	            // Set the last prompt type to provide it in closing event.
	            this.#lastUserPromptType = promptType;
	            const promptHandler = this.#getPromptHandler(promptType);
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
	                params: {
	                    context: this.id,
	                    handler: promptHandler,
	                    type: promptType,
	                    message: params.message,
	                    ...(params.type === 'prompt'
	                        ? { defaultValue: params.defaultPrompt }
	                        : {}),
	                },
	            }, this.id);
	            switch (promptHandler) {
	                // Based on `unhandledPromptBehavior`, check if the prompt should be handled
	                // automatically (`accept`, `dismiss`) or wait for the user to do it.
	                case "accept" /* Session.UserPromptHandlerType.Accept */:
	                    void this.handleUserPrompt(true);
	                    break;
	                case "dismiss" /* Session.UserPromptHandlerType.Dismiss */:
	                    void this.handleUserPrompt(false);
	                    break;
	            }
	        });
	    }
	    static #getPromptType(cdpType) {
	        switch (cdpType) {
	            case 'alert':
	                return "alert" /* BrowsingContext.UserPromptType.Alert */;
	            case 'beforeunload':
	                return "beforeunload" /* BrowsingContext.UserPromptType.Beforeunload */;
	            case 'confirm':
	                return "confirm" /* BrowsingContext.UserPromptType.Confirm */;
	            case 'prompt':
	                return "prompt" /* BrowsingContext.UserPromptType.Prompt */;
	        }
	    }
	    #getPromptHandler(promptType) {
	        const defaultPromptHandler = "dismiss" /* Session.UserPromptHandlerType.Dismiss */;
	        switch (promptType) {
	            case "alert" /* BrowsingContext.UserPromptType.Alert */:
	                return (this.#unhandledPromptBehavior?.alert ??
	                    this.#unhandledPromptBehavior?.default ??
	                    defaultPromptHandler);
	            case "beforeunload" /* BrowsingContext.UserPromptType.Beforeunload */:
	                return (this.#unhandledPromptBehavior?.beforeUnload ??
	                    this.#unhandledPromptBehavior?.default ??
	                    "accept" /* Session.UserPromptHandlerType.Accept */);
	            case "confirm" /* BrowsingContext.UserPromptType.Confirm */:
	                return (this.#unhandledPromptBehavior?.confirm ??
	                    this.#unhandledPromptBehavior?.default ??
	                    defaultPromptHandler);
	            case "prompt" /* BrowsingContext.UserPromptType.Prompt */:
	                return (this.#unhandledPromptBehavior?.prompt ??
	                    this.#unhandledPromptBehavior?.default ??
	                    defaultPromptHandler);
	        }
	    }
	    #documentChanged(loaderId) {
	        if (loaderId === undefined || this.#loaderId === loaderId) {
	            return;
	        }
	        // Document changed.
	        this.#resetLifecycleIfFinished();
	        this.#loaderId = loaderId;
	        // Delete all child iframes and notify about top level destruction.
	        this.#deleteAllChildren(true);
	    }
	    #resetLifecycleIfFinished() {
	        if (this.#lifecycle.DOMContentLoaded.isFinished) {
	            this.#lifecycle.DOMContentLoaded = new Deferred_js_1.Deferred();
	        }
	        else {
	            this.#logger?.(_a.LOGGER_PREFIX, 'Document changed (DOMContentLoaded)');
	        }
	        if (this.#lifecycle.load.isFinished) {
	            this.#lifecycle.load = new Deferred_js_1.Deferred();
	        }
	        else {
	            this.#logger?.(_a.LOGGER_PREFIX, 'Document changed (load)');
	        }
	    }
	    #failLifecycleIfNotFinished() {
	        if (!this.#lifecycle.DOMContentLoaded.isFinished) {
	            this.#lifecycle.DOMContentLoaded.reject(new protocol_js_1.UnknownErrorException('navigation canceled'));
	        }
	        if (!this.#lifecycle.load.isFinished) {
	            this.#lifecycle.load.reject(new protocol_js_1.UnknownErrorException('navigation canceled'));
	        }
	    }
	    async navigate(url, wait) {
	        try {
	            new URL(url);
	        }
	        catch {
	            throw new protocol_js_1.InvalidArgumentException(`Invalid URL: ${url}`);
	        }
	        const commandNavigation = this.#navigationTracker.createPendingNavigation(url);
	        // Navigate and wait for the result. If the navigation fails, the error event is
	        // emitted and the promise is rejected.
	        const cdpNavigatePromise = (async () => {
	            const cdpNavigateResult = await this.#cdpTarget.cdpClient.sendCommand('Page.navigate', {
	                url,
	                frameId: this.id,
	            });
	            if (cdpNavigateResult.errorText) {
	                // If navigation failed, no pending navigation is left.
	                this.#navigationTracker.failNavigation(commandNavigation, cdpNavigateResult.errorText);
	                throw new protocol_js_1.UnknownErrorException(cdpNavigateResult.errorText);
	            }
	            this.#navigationTracker.navigationCommandFinished(commandNavigation, cdpNavigateResult.loaderId);
	            this.#documentChanged(cdpNavigateResult.loaderId);
	        })();
	        if (wait === "none" /* BrowsingContext.ReadinessState.None */) {
	            return {
	                navigation: commandNavigation.navigationId,
	                url,
	            };
	        }
	        // Wait for either the navigation is finished or canceled by another navigation.
	        const result = await Promise.race([
	            // No `loaderId` means same-document navigation.
	            this.#waitNavigation(wait, cdpNavigatePromise),
	            // Throw an error if the navigation is canceled.
	            commandNavigation.finished,
	        ]);
	        if (result instanceof NavigationTracker_js_1.NavigationResult) {
	            if (
	            // TODO: check after decision on the spec is done:
	            //  https://github.com/w3c/webdriver-bidi/issues/799.
	            result.eventName === "browsingContext.navigationAborted" /* NavigationEventName.NavigationAborted */ ||
	                result.eventName === "browsingContext.navigationFailed" /* NavigationEventName.NavigationFailed */) {
	                throw new protocol_js_1.UnknownErrorException(result.message ?? 'unknown exception');
	            }
	        }
	        return {
	            navigation: commandNavigation.navigationId,
	            // Url can change due to redirects. Get the one from commandNavigation.
	            url: commandNavigation.url,
	        };
	    }
	    async #waitNavigation(wait, cdpCommandPromise) {
	        switch (wait) {
	            case "none" /* BrowsingContext.ReadinessState.None */:
	                return;
	            case "interactive" /* BrowsingContext.ReadinessState.Interactive */:
	                await cdpCommandPromise;
	                await this.#lifecycle.DOMContentLoaded;
	                return;
	            case "complete" /* BrowsingContext.ReadinessState.Complete */:
	                await cdpCommandPromise;
	                await this.#lifecycle.load;
	                return;
	        }
	    }
	    // TODO: support concurrent navigations analogous to `navigate`.
	    async reload(ignoreCache, wait) {
	        await this.targetUnblockedOrThrow();
	        this.#resetLifecycleIfFinished();
	        const commandNavigation = this.#navigationTracker.createPendingNavigation(this.#navigationTracker.url);
	        const cdpReloadPromise = this.#cdpTarget.cdpClient.sendCommand('Page.reload', {
	            ignoreCache,
	        });
	        // Wait for either the navigation is finished or canceled by another navigation.
	        const result = await Promise.race([
	            // No `loaderId` means same-document navigation.
	            this.#waitNavigation(wait, cdpReloadPromise),
	            // Throw an error if the navigation is canceled.
	            commandNavigation.finished,
	        ]);
	        if (result instanceof NavigationTracker_js_1.NavigationResult) {
	            if (result.eventName === "browsingContext.navigationAborted" /* NavigationEventName.NavigationAborted */ ||
	                result.eventName === "browsingContext.navigationFailed" /* NavigationEventName.NavigationFailed */) {
	                throw new protocol_js_1.UnknownErrorException(result.message ?? 'unknown exception');
	            }
	        }
	        return {
	            navigation: commandNavigation.navigationId,
	            // Url can change due to redirects. Get the one from commandNavigation.
	            url: commandNavigation.url,
	        };
	    }
	    async setViewport(viewport, devicePixelRatio) {
	        if (viewport === null && devicePixelRatio === null) {
	            await this.#cdpTarget.cdpClient.sendCommand('Emulation.clearDeviceMetricsOverride');
	        }
	        else {
	            try {
	                let appliedViewport;
	                if (viewport === undefined) {
	                    appliedViewport = this.#previousViewport;
	                }
	                else if (viewport === null) {
	                    appliedViewport = {
	                        width: 0,
	                        height: 0,
	                    };
	                }
	                else {
	                    appliedViewport = viewport;
	                }
	                this.#previousViewport = appliedViewport;
	                await this.#cdpTarget.cdpClient.sendCommand('Emulation.setDeviceMetricsOverride', {
	                    width: this.#previousViewport.width,
	                    height: this.#previousViewport.height,
	                    deviceScaleFactor: devicePixelRatio ? devicePixelRatio : 0,
	                    mobile: false,
	                    dontSetVisibleSize: true,
	                });
	            }
	            catch (err) {
	                if (err.message.startsWith(
	                // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
	                'Width and height values must be positive')) {
	                    throw new protocol_js_1.UnsupportedOperationException('Provided viewport dimensions are not supported');
	                }
	                throw err;
	            }
	        }
	    }
	    async handleUserPrompt(accept, userText) {
	        await this.#cdpTarget.cdpClient.sendCommand('Page.handleJavaScriptDialog', {
	            accept: accept ?? true,
	            promptText: userText,
	        });
	    }
	    async activate() {
	        await this.#cdpTarget.cdpClient.sendCommand('Page.bringToFront');
	    }
	    async captureScreenshot(params) {
	        if (!this.isTopLevelContext()) {
	            throw new protocol_js_1.UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
	        }
	        const formatParameters = getImageFormatParameters(params);
	        let captureBeyondViewport = false;
	        let script;
	        params.origin ??= 'viewport';
	        switch (params.origin) {
	            case 'document': {
	                script = String(() => {
	                    const element = document.documentElement;
	                    return {
	                        x: 0,
	                        y: 0,
	                        width: element.scrollWidth,
	                        height: element.scrollHeight,
	                    };
	                });
	                captureBeyondViewport = true;
	                break;
	            }
	            case 'viewport': {
	                script = String(() => {
	                    const viewport = window.visualViewport;
	                    return {
	                        x: viewport.pageLeft,
	                        y: viewport.pageTop,
	                        width: viewport.width,
	                        height: viewport.height,
	                    };
	                });
	                break;
	            }
	        }
	        const realm = await this.getOrCreateSandbox(undefined);
	        const originResult = await realm.callFunction(script, false);
	        (0, assert_js_1.assert)(originResult.type === 'success');
	        const origin = deserializeDOMRect(originResult.result);
	        (0, assert_js_1.assert)(origin);
	        let rect = origin;
	        if (params.clip) {
	            const clip = params.clip;
	            if (params.origin === 'viewport' && clip.type === 'box') {
	                // For viewport origin, the clip is relative to the viewport, while the CDP
	                // screenshot is relative to the document. So correction for the viewport position
	                // is required.
	                clip.x += origin.x;
	                clip.y += origin.y;
	            }
	            rect = getIntersectionRect(await this.#parseRect(clip), origin);
	        }
	        if (rect.width === 0 || rect.height === 0) {
	            throw new protocol_js_1.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
	        }
	        return await this.#cdpTarget.cdpClient.sendCommand('Page.captureScreenshot', {
	            clip: { ...rect, scale: 1.0 },
	            ...formatParameters,
	            captureBeyondViewport,
	        });
	    }
	    async print(params) {
	        if (!this.isTopLevelContext()) {
	            throw new protocol_js_1.UnsupportedOperationException('Printing of non-top level contexts is not supported');
	        }
	        const cdpParams = {};
	        if (params.background !== undefined) {
	            cdpParams.printBackground = params.background;
	        }
	        if (params.margin?.bottom !== undefined) {
	            cdpParams.marginBottom = (0, unitConversions_js_1.inchesFromCm)(params.margin.bottom);
	        }
	        if (params.margin?.left !== undefined) {
	            cdpParams.marginLeft = (0, unitConversions_js_1.inchesFromCm)(params.margin.left);
	        }
	        if (params.margin?.right !== undefined) {
	            cdpParams.marginRight = (0, unitConversions_js_1.inchesFromCm)(params.margin.right);
	        }
	        if (params.margin?.top !== undefined) {
	            cdpParams.marginTop = (0, unitConversions_js_1.inchesFromCm)(params.margin.top);
	        }
	        if (params.orientation !== undefined) {
	            cdpParams.landscape = params.orientation === 'landscape';
	        }
	        if (params.page?.height !== undefined) {
	            cdpParams.paperHeight = (0, unitConversions_js_1.inchesFromCm)(params.page.height);
	        }
	        if (params.page?.width !== undefined) {
	            cdpParams.paperWidth = (0, unitConversions_js_1.inchesFromCm)(params.page.width);
	        }
	        if (params.pageRanges !== undefined) {
	            for (const range of params.pageRanges) {
	                if (typeof range === 'number') {
	                    continue;
	                }
	                const rangeParts = range.split('-');
	                if (rangeParts.length < 1 || rangeParts.length > 2) {
	                    throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
	                }
	                if (rangeParts.length === 1) {
	                    void parseInteger(rangeParts[0] ?? '');
	                    continue;
	                }
	                let lowerBound;
	                let upperBound;
	                const [rangeLowerPart = '', rangeUpperPart = ''] = rangeParts;
	                if (rangeLowerPart === '') {
	                    lowerBound = 1;
	                }
	                else {
	                    lowerBound = parseInteger(rangeLowerPart);
	                }
	                if (rangeUpperPart === '') {
	                    upperBound = Number.MAX_SAFE_INTEGER;
	                }
	                else {
	                    upperBound = parseInteger(rangeUpperPart);
	                }
	                if (lowerBound > upperBound) {
	                    throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
	                }
	            }
	            cdpParams.pageRanges = params.pageRanges.join(',');
	        }
	        if (params.scale !== undefined) {
	            cdpParams.scale = params.scale;
	        }
	        if (params.shrinkToFit !== undefined) {
	            cdpParams.preferCSSPageSize = !params.shrinkToFit;
	        }
	        try {
	            const result = await this.#cdpTarget.cdpClient.sendCommand('Page.printToPDF', cdpParams);
	            return {
	                data: result.data,
	            };
	        }
	        catch (error) {
	            // Effectively zero dimensions.
	            if (error.message ===
	                'invalid print parameters: content area is empty') {
	                throw new protocol_js_1.UnsupportedOperationException(error.message);
	            }
	            throw error;
	        }
	    }
	    /**
	     * See
	     * https://w3c.github.io/webdriver-bidi/#:~:text=If%20command%20parameters%20contains%20%22clip%22%3A
	     */
	    async #parseRect(clip) {
	        switch (clip.type) {
	            case 'box':
	                return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
	            case 'element': {
	                // TODO: #1213: Use custom sandbox specifically for Chromium BiDi
	                const sandbox = await this.getOrCreateSandbox(undefined);
	                const result = await sandbox.callFunction(String((element) => {
	                    return element instanceof Element;
	                }), false, { type: 'undefined' }, [clip.element]);
	                if (result.type === 'exception') {
	                    throw new protocol_js_1.NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
	                }
	                (0, assert_js_1.assert)(result.result.type === 'boolean');
	                if (!result.result.value) {
	                    throw new protocol_js_1.NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
	                }
	                {
	                    const result = await sandbox.callFunction(String((element) => {
	                        const rect = element.getBoundingClientRect();
	                        return {
	                            x: rect.x,
	                            y: rect.y,
	                            height: rect.height,
	                            width: rect.width,
	                        };
	                    }), false, { type: 'undefined' }, [clip.element]);
	                    (0, assert_js_1.assert)(result.type === 'success');
	                    const rect = deserializeDOMRect(result.result);
	                    if (!rect) {
	                        throw new protocol_js_1.UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
	                    }
	                    return rect;
	                }
	            }
	        }
	    }
	    async close() {
	        await this.#cdpTarget.cdpClient.sendCommand('Page.close');
	    }
	    async traverseHistory(delta) {
	        if (delta === 0) {
	            return;
	        }
	        const history = await this.#cdpTarget.cdpClient.sendCommand('Page.getNavigationHistory');
	        const entry = history.entries[history.currentIndex + delta];
	        if (!entry) {
	            throw new protocol_js_1.NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
	        }
	        await this.#cdpTarget.cdpClient.sendCommand('Page.navigateToHistoryEntry', {
	            entryId: entry.id,
	        });
	    }
	    async toggleModulesIfNeeded() {
	        await Promise.all([
	            this.#cdpTarget.toggleNetworkIfNeeded(),
	            this.#cdpTarget.toggleDeviceAccessIfNeeded(),
	        ]);
	    }
	    async locateNodes(params) {
	        // TODO: create a dedicated sandbox instead of `#defaultRealm`.
	        return await this.#locateNodesByLocator(await this.#defaultRealmDeferred, params.locator, params.startNodes ?? [], params.maxNodeCount, params.serializationOptions);
	    }
	    async #getLocatorDelegate(realm, locator, maxNodeCount, startNodes) {
	        switch (locator.type) {
	            case 'css':
	                return {
	                    functionDeclaration: String((cssSelector, maxNodeCount, ...startNodes) => {
	                        const locateNodesUsingCss = (element) => {
	                            if (!(element instanceof HTMLElement ||
	                                element instanceof Document ||
	                                element instanceof DocumentFragment)) {
	                                throw new Error('startNodes in css selector should be HTMLElement, Document or DocumentFragment');
	                            }
	                            return [...element.querySelectorAll(cssSelector)];
	                        };
	                        startNodes = startNodes.length > 0 ? startNodes : [document];
	                        const returnedNodes = startNodes
	                            .map((startNode) => 
	                        // TODO: stop search early if `maxNodeCount` is reached.
	                        locateNodesUsingCss(startNode))
	                            .flat(1);
	                        return maxNodeCount === 0
	                            ? returnedNodes
	                            : returnedNodes.slice(0, maxNodeCount);
	                    }),
	                    argumentsLocalValues: [
	                        // `cssSelector`
	                        { type: 'string', value: locator.value },
	                        // `maxNodeCount` with `0` means no limit.
	                        { type: 'number', value: maxNodeCount ?? 0 },
	                        // `startNodes`
	                        ...startNodes,
	                    ],
	                };
	            case 'xpath':
	                return {
	                    functionDeclaration: String((xPathSelector, maxNodeCount, ...startNodes) => {
	                        // https://w3c.github.io/webdriver-bidi/#locate-nodes-using-xpath
	                        const evaluator = new XPathEvaluator();
	                        const expression = evaluator.createExpression(xPathSelector);
	                        const locateNodesUsingXpath = (element) => {
	                            const xPathResult = expression.evaluate(element, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
	                            const returnedNodes = [];
	                            for (let i = 0; i < xPathResult.snapshotLength; i++) {
	                                returnedNodes.push(xPathResult.snapshotItem(i));
	                            }
	                            return returnedNodes;
	                        };
	                        startNodes = startNodes.length > 0 ? startNodes : [document];
	                        const returnedNodes = startNodes
	                            .map((startNode) => 
	                        // TODO: stop search early if `maxNodeCount` is reached.
	                        locateNodesUsingXpath(startNode))
	                            .flat(1);
	                        return maxNodeCount === 0
	                            ? returnedNodes
	                            : returnedNodes.slice(0, maxNodeCount);
	                    }),
	                    argumentsLocalValues: [
	                        // `xPathSelector`
	                        { type: 'string', value: locator.value },
	                        // `maxNodeCount` with `0` means no limit.
	                        { type: 'number', value: maxNodeCount ?? 0 },
	                        // `startNodes`
	                        ...startNodes,
	                    ],
	                };
	            case 'innerText':
	                // https://w3c.github.io/webdriver-bidi/#locate-nodes-using-inner-text
	                if (locator.value === '') {
	                    throw new protocol_js_1.InvalidSelectorException('innerText locator cannot be empty');
	                }
	                return {
	                    functionDeclaration: String((innerTextSelector, fullMatch, ignoreCase, maxNodeCount, maxDepth, ...startNodes) => {
	                        const searchText = ignoreCase
	                            ? innerTextSelector.toUpperCase()
	                            : innerTextSelector;
	                        const locateNodesUsingInnerText = (node, currentMaxDepth) => {
	                            const returnedNodes = [];
	                            if (node instanceof DocumentFragment ||
	                                node instanceof Document) {
	                                const children = [...node.children];
	                                children.forEach((child) => 
	                                // `currentMaxDepth` is not decremented intentionally according to
	                                // https://github.com/w3c/webdriver-bidi/pull/713.
	                                returnedNodes.push(...locateNodesUsingInnerText(child, currentMaxDepth)));
	                                return returnedNodes;
	                            }
	                            if (!(node instanceof HTMLElement)) {
	                                return [];
	                            }
	                            const element = node;
	                            const nodeInnerText = ignoreCase
	                                ? element.innerText?.toUpperCase()
	                                : element.innerText;
	                            if (!nodeInnerText.includes(searchText)) {
	                                return [];
	                            }
	                            const childNodes = [];
	                            for (const child of element.children) {
	                                if (child instanceof HTMLElement) {
	                                    childNodes.push(child);
	                                }
	                            }
	                            if (childNodes.length === 0) {
	                                if (fullMatch && nodeInnerText === searchText) {
	                                    returnedNodes.push(element);
	                                }
	                                else {
	                                    if (!fullMatch) {
	                                        // Note: `nodeInnerText.includes(searchText)` is already checked
	                                        returnedNodes.push(element);
	                                    }
	                                }
	                            }
	                            else {
	                                const childNodeMatches = 
	                                // Don't search deeper if `maxDepth` is reached.
	                                currentMaxDepth <= 0
	                                    ? []
	                                    : childNodes
	                                        .map((child) => locateNodesUsingInnerText(child, currentMaxDepth - 1))
	                                        .flat(1);
	                                if (childNodeMatches.length === 0) {
	                                    // Note: `nodeInnerText.includes(searchText)` is already checked
	                                    if (!fullMatch || nodeInnerText === searchText) {
	                                        returnedNodes.push(element);
	                                    }
	                                }
	                                else {
	                                    returnedNodes.push(...childNodeMatches);
	                                }
	                            }
	                            // TODO: stop search early if `maxNodeCount` is reached.
	                            return returnedNodes;
	                        };
	                        // TODO: stop search early if `maxNodeCount` is reached.
	                        startNodes = startNodes.length > 0 ? startNodes : [document];
	                        const returnedNodes = startNodes
	                            .map((startNode) => 
	                        // TODO: stop search early if `maxNodeCount` is reached.
	                        locateNodesUsingInnerText(startNode, maxDepth))
	                            .flat(1);
	                        return maxNodeCount === 0
	                            ? returnedNodes
	                            : returnedNodes.slice(0, maxNodeCount);
	                    }),
	                    argumentsLocalValues: [
	                        // `innerTextSelector`
	                        { type: 'string', value: locator.value },
	                        // `fullMatch` with default `true`.
	                        { type: 'boolean', value: locator.matchType !== 'partial' },
	                        // `ignoreCase` with default `false`.
	                        { type: 'boolean', value: locator.ignoreCase === true },
	                        // `maxNodeCount` with `0` means no limit.
	                        { type: 'number', value: maxNodeCount ?? 0 },
	                        // `maxDepth` with default `1000` (same as default full serialization depth).
	                        { type: 'number', value: locator.maxDepth ?? 1000 },
	                        // `startNodes`
	                        ...startNodes,
	                    ],
	                };
	            case 'accessibility': {
	                // https://w3c.github.io/webdriver-bidi/#locate-nodes-using-accessibility-attributes
	                if (!locator.value.name && !locator.value.role) {
	                    throw new protocol_js_1.InvalidSelectorException('Either name or role has to be specified');
	                }
	                // The next two commands cause a11y caches for the target to be
	                // preserved. We probably do not need to disable them if the
	                // client is using a11y features, but we could by calling
	                // Accessibility.disable.
	                await Promise.all([
	                    this.#cdpTarget.cdpClient.sendCommand('Accessibility.enable'),
	                    this.#cdpTarget.cdpClient.sendCommand('Accessibility.getRootAXNode'),
	                ]);
	                const bindings = await realm.evaluate(
	                /* expression=*/ '({getAccessibleName, getAccessibleRole})', 
	                /* awaitPromise=*/ false, "root" /* Script.ResultOwnership.Root */, 
	                /* serializationOptions= */ undefined, 
	                /* userActivation=*/ false, 
	                /* includeCommandLineApi=*/ true);
	                if (bindings.type !== 'success') {
	                    throw new Error('Could not get bindings');
	                }
	                if (bindings.result.type !== 'object') {
	                    throw new Error('Could not get bindings');
	                }
	                return {
	                    functionDeclaration: String((name, role, bindings, maxNodeCount, ...startNodes) => {
	                        const returnedNodes = [];
	                        let aborted = false;
	                        function collect(contextNodes, selector) {
	                            if (aborted) {
	                                return;
	                            }
	                            for (const contextNode of contextNodes) {
	                                let match = true;
	                                if (selector.role) {
	                                    const role = bindings.getAccessibleRole(contextNode);
	                                    if (selector.role !== role) {
	                                        match = false;
	                                    }
	                                }
	                                if (selector.name) {
	                                    const name = bindings.getAccessibleName(contextNode);
	                                    if (selector.name !== name) {
	                                        match = false;
	                                    }
	                                }
	                                if (match) {
	                                    if (maxNodeCount !== 0 &&
	                                        returnedNodes.length === maxNodeCount) {
	                                        aborted = true;
	                                        break;
	                                    }
	                                    returnedNodes.push(contextNode);
	                                }
	                                const childNodes = [];
	                                for (const child of contextNode.children) {
	                                    if (child instanceof HTMLElement) {
	                                        childNodes.push(child);
	                                    }
	                                }
	                                collect(childNodes, selector);
	                            }
	                        }
	                        startNodes =
	                            startNodes.length > 0
	                                ? startNodes
	                                : Array.from(document.documentElement.children).filter((c) => c instanceof HTMLElement);
	                        collect(startNodes, {
	                            role,
	                            name,
	                        });
	                        return returnedNodes;
	                    }),
	                    argumentsLocalValues: [
	                        // `name`
	                        { type: 'string', value: locator.value.name || '' },
	                        // `role`
	                        { type: 'string', value: locator.value.role || '' },
	                        // `bindings`.
	                        { handle: bindings.result.handle },
	                        // `maxNodeCount` with `0` means no limit.
	                        { type: 'number', value: maxNodeCount ?? 0 },
	                        // `startNodes`
	                        ...startNodes,
	                    ],
	                };
	            }
	        }
	    }
	    async #locateNodesByLocator(realm, locator, startNodes, maxNodeCount, serializationOptions) {
	        const locatorDelegate = await this.#getLocatorDelegate(realm, locator, maxNodeCount, startNodes);
	        serializationOptions = {
	            ...serializationOptions,
	            // The returned object is an array of nodes, so no need in deeper JS serialization.
	            maxObjectDepth: 1,
	        };
	        const locatorResult = await realm.callFunction(locatorDelegate.functionDeclaration, false, { type: 'undefined' }, locatorDelegate.argumentsLocalValues, "none" /* Script.ResultOwnership.None */, serializationOptions);
	        if (locatorResult.type !== 'success') {
	            this.#logger?.(_a.LOGGER_PREFIX, 'Failed locateNodesByLocator', locatorResult);
	            // Heuristic to detect invalid selector for different types of selectors.
	            if (
	            // CSS selector.
	            locatorResult.exceptionDetails.text?.endsWith('is not a valid selector.') ||
	                // XPath selector.
	                locatorResult.exceptionDetails.text?.endsWith('is not a valid XPath expression.')) {
	                throw new protocol_js_1.InvalidSelectorException(`Not valid selector ${typeof locator.value === 'string' ? locator.value : JSON.stringify(locator.value)}`);
	            }
	            // Heuristic to detect if the `startNode` is not an `HTMLElement` in css selector.
	            if (locatorResult.exceptionDetails.text ===
	                'Error: startNodes in css selector should be HTMLElement, Document or DocumentFragment') {
	                throw new protocol_js_1.InvalidArgumentException('startNodes in css selector should be HTMLElement, Document or DocumentFragment');
	            }
	            throw new protocol_js_1.UnknownErrorException(`Unexpected error in selector script: ${locatorResult.exceptionDetails.text}`);
	        }
	        if (locatorResult.result.type !== 'array') {
	            throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result type: ${locatorResult.result.type}`);
	        }
	        // Check there are no non-node elements in the result.
	        const nodes = locatorResult.result.value.map((value) => {
	            if (value.type !== 'node') {
	                throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result element: ${value.type}`);
	            }
	            return value;
	        });
	        return { nodes };
	    }
	};
	BrowsingContextImpl.BrowsingContextImpl = BrowsingContextImpl$1;
	_a = BrowsingContextImpl$1;
	function serializeOrigin(origin) {
	    // https://html.spec.whatwg.org/multipage/origin.html#ascii-serialisation-of-an-origin
	    if (['://', ''].includes(origin)) {
	        origin = 'null';
	    }
	    return origin;
	}
	function getImageFormatParameters(params) {
	    const { quality, type } = params.format ?? {
	        type: 'image/png',
	    };
	    switch (type) {
	        case 'image/png': {
	            return { format: 'png' };
	        }
	        case 'image/jpeg': {
	            return {
	                format: 'jpeg',
	                ...(quality === undefined ? {} : { quality: Math.round(quality * 100) }),
	            };
	        }
	        case 'image/webp': {
	            return {
	                format: 'webp',
	                ...(quality === undefined ? {} : { quality: Math.round(quality * 100) }),
	            };
	        }
	    }
	    throw new protocol_js_1.InvalidArgumentException(`Image format '${type}' is not a supported format`);
	}
	function deserializeDOMRect(result) {
	    if (result.type !== 'object' || result.value === undefined) {
	        return;
	    }
	    const x = result.value.find(([key]) => {
	        return key === 'x';
	    })?.[1];
	    const y = result.value.find(([key]) => {
	        return key === 'y';
	    })?.[1];
	    const height = result.value.find(([key]) => {
	        return key === 'height';
	    })?.[1];
	    const width = result.value.find(([key]) => {
	        return key === 'width';
	    })?.[1];
	    if (x?.type !== 'number' ||
	        y?.type !== 'number' ||
	        height?.type !== 'number' ||
	        width?.type !== 'number') {
	        return;
	    }
	    return {
	        x: x.value,
	        y: y.value,
	        width: width.value,
	        height: height.value,
	    };
	}
	/** @see https://w3c.github.io/webdriver-bidi/#normalize-rect */
	function normalizeRect(box) {
	    return {
	        ...(box.width < 0
	            ? {
	                x: box.x + box.width,
	                width: -box.width,
	            }
	            : {
	                x: box.x,
	                width: box.width,
	            }),
	        ...(box.height < 0
	            ? {
	                y: box.y + box.height,
	                height: -box.height,
	            }
	            : {
	                y: box.y,
	                height: box.height,
	            }),
	    };
	}
	/** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */
	function getIntersectionRect(first, second) {
	    first = normalizeRect(first);
	    second = normalizeRect(second);
	    const x = Math.max(first.x, second.x);
	    const y = Math.max(first.y, second.y);
	    return {
	        x,
	        y,
	        width: Math.max(Math.min(first.x + first.width, second.x + second.width) - x, 0),
	        height: Math.max(Math.min(first.y + first.height, second.y + second.height) - y, 0),
	    };
	}
	function parseInteger(value) {
	    value = value.trim();
	    if (!/^[0-9]+$/.test(value)) {
	        throw new protocol_js_1.InvalidArgumentException(`Invalid integer: ${value}`);
	    }
	    return parseInt(value);
	}
	
	return BrowsingContextImpl;
}

var WorkerRealm = {};

var hasRequiredWorkerRealm;

function requireWorkerRealm () {
	if (hasRequiredWorkerRealm) return WorkerRealm;
	hasRequiredWorkerRealm = 1;
	/**
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(WorkerRealm, "__esModule", { value: true });
	WorkerRealm.WorkerRealm = undefined;
	const Realm_js_1 = requireRealm();
	let WorkerRealm$1 = class WorkerRealm extends Realm_js_1.Realm {
	    #realmType;
	    #ownerRealms;
	    constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealms, realmId, realmStorage, realmType) {
	        super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
	        this.#ownerRealms = ownerRealms;
	        this.#realmType = realmType;
	        this.initialize();
	    }
	    get associatedBrowsingContexts() {
	        return this.#ownerRealms.flatMap((realm) => realm.associatedBrowsingContexts);
	    }
	    get realmType() {
	        return this.#realmType;
	    }
	    get source() {
	        return {
	            realm: this.realmId,
	            // This is a hack to make Puppeteer able to track workers.
	            // TODO: remove after Puppeteer tracks workers by owners and use the base version.
	            context: this.associatedBrowsingContexts[0]?.id,
	        };
	    }
	    get realmInfo() {
	        const owners = this.#ownerRealms.map((realm) => realm.realmId);
	        const { realmType } = this;
	        switch (realmType) {
	            case 'dedicated-worker': {
	                const owner = owners[0];
	                if (owner === undefined || owners.length !== 1) {
	                    throw new Error('Dedicated worker must have exactly one owner');
	                }
	                return {
	                    ...this.baseInfo,
	                    type: realmType,
	                    owners: [owner],
	                };
	            }
	            case 'service-worker':
	            case 'shared-worker': {
	                return {
	                    ...this.baseInfo,
	                    type: realmType,
	                };
	            }
	        }
	    }
	};
	WorkerRealm.WorkerRealm = WorkerRealm$1;
	
	return WorkerRealm;
}

var CdpTarget = {};

var LogManager = {};

var logHelper = {};

var hasRequiredLogHelper;

function requireLogHelper () {
	if (hasRequiredLogHelper) return logHelper;
	hasRequiredLogHelper = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(logHelper, "__esModule", { value: true });
	logHelper.logMessageFormatter = logMessageFormatter;
	logHelper.getRemoteValuesText = getRemoteValuesText;
	const assert_js_1 = requireAssert();
	const specifiers = ['%s', '%d', '%i', '%f', '%o', '%O', '%c'];
	function isFormatSpecifier(str) {
	    return specifiers.some((spec) => str.includes(spec));
	}
	/**
	 * @param args input remote values to be format printed
	 * @return parsed text of the remote values in specific format
	 */
	function logMessageFormatter(args) {
	    let output = '';
	    const argFormat = args[0].value.toString();
	    const argValues = args.slice(1, undefined);
	    const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join('|'), 'g'));
	    for (const token of tokens) {
	        if (token === undefined || token === '') {
	            continue;
	        }
	        if (isFormatSpecifier(token)) {
	            const arg = argValues.shift();
	            // raise an exception when less value is provided
	            (0, assert_js_1.assert)(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
	            if (token === '%s') {
	                output += stringFromArg(arg);
	            }
	            else if (token === '%d' || token === '%i') {
	                if (arg.type === 'bigint' ||
	                    arg.type === 'number' ||
	                    arg.type === 'string') {
	                    output += parseInt(arg.value.toString(), 10);
	                }
	                else {
	                    output += 'NaN';
	                }
	            }
	            else if (token === '%f') {
	                if (arg.type === 'bigint' ||
	                    arg.type === 'number' ||
	                    arg.type === 'string') {
	                    output += parseFloat(arg.value.toString());
	                }
	                else {
	                    output += 'NaN';
	                }
	            }
	            else {
	                // %o, %O, %c
	                output += toJson(arg);
	            }
	        }
	        else {
	            output += token;
	        }
	    }
	    // raise an exception when more value is provided
	    if (argValues.length > 0) {
	        throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
	    }
	    return output;
	}
	/**
	 * @param arg input remote value to be parsed
	 * @return parsed text of the remote value
	 *
	 * input: {"type": "number", "value": 1}
	 * output: 1
	 *
	 * input: {"type": "string", "value": "abc"}
	 * output: "abc"
	 *
	 * input: {"type": "object",  "value": [["id", {"type": "number", "value": 1}]]}
	 * output: '{"id": 1}'
	 *
	 * input: {"type": "object", "value": [["font-size", {"type": "string", "value": "20px"}]]}
	 * output: '{"font-size": "20px"}'
	 */
	function toJson(arg) {
	    // arg type validation
	    if (arg.type !== 'array' &&
	        arg.type !== 'bigint' &&
	        arg.type !== 'date' &&
	        arg.type !== 'number' &&
	        arg.type !== 'object' &&
	        arg.type !== 'string') {
	        return stringFromArg(arg);
	    }
	    if (arg.type === 'bigint') {
	        return `${arg.value.toString()}n`;
	    }
	    if (arg.type === 'number') {
	        return arg.value.toString();
	    }
	    if (['date', 'string'].includes(arg.type)) {
	        return JSON.stringify(arg.value);
	    }
	    if (arg.type === 'object') {
	        return `{${arg.value
	            .map((pair) => {
	            return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
	        })
	            .join(',')}}`;
	    }
	    if (arg.type === 'array') {
	        return `[${arg.value?.map((val) => toJson(val)).join(',') ?? ''}]`;
	    }
	    // eslint-disable-next-line @typescript-eslint/no-base-to-string
	    throw Error(`Invalid value type: ${arg}`);
	}
	function stringFromArg(arg) {
	    if (!Object.hasOwn(arg, 'value')) {
	        return arg.type;
	    }
	    switch (arg.type) {
	        case 'string':
	        case 'number':
	        case 'boolean':
	        case 'bigint':
	            return String(arg.value);
	        case 'regexp':
	            return `/${arg.value.pattern}/${arg.value.flags ?? ''}`;
	        case 'date':
	            return new Date(arg.value).toString();
	        case 'object':
	            return `Object(${arg.value?.length ?? ''})`;
	        case 'array':
	            return `Array(${arg.value?.length ?? ''})`;
	        case 'map':
	            return `Map(${arg.value?.length})`;
	        case 'set':
	            return `Set(${arg.value?.length})`;
	        default:
	            return arg.type;
	    }
	}
	function getRemoteValuesText(args, formatText) {
	    const arg = args[0];
	    if (!arg) {
	        return '';
	    }
	    // if args[0] is a format specifier, format the args as output
	    if (arg.type === 'string' &&
	        isFormatSpecifier(arg.value.toString()) &&
	        formatText) {
	        return logMessageFormatter(args);
	    }
	    // if args[0] is not a format specifier, just join the args with \u0020 (unicode 'SPACE')
	    return args
	        .map((arg) => {
	        return stringFromArg(arg);
	    })
	        .join('\u0020');
	}
	
	return logHelper;
}

var hasRequiredLogManager;

function requireLogManager () {
	if (hasRequiredLogManager) return LogManager;
	hasRequiredLogManager = 1;
	var _a;
	Object.defineProperty(LogManager, "__esModule", { value: true });
	LogManager.LogManager = undefined;
	const protocol_js_1 = requireProtocol();
	const log_js_1 = requireLog();
	const logHelper_js_1 = requireLogHelper();
	/** Converts CDP StackTrace object to BiDi StackTrace object. */
	function getBidiStackTrace(cdpStackTrace) {
	    const stackFrames = cdpStackTrace?.callFrames.map((callFrame) => {
	        return {
	            columnNumber: callFrame.columnNumber,
	            functionName: callFrame.functionName,
	            lineNumber: callFrame.lineNumber,
	            url: callFrame.url,
	        };
	    });
	    return stackFrames ? { callFrames: stackFrames } : undefined;
	}
	function getLogLevel(consoleApiType) {
	    if (["error" /* Log.Level.Error */, 'assert'].includes(consoleApiType)) {
	        return "error" /* Log.Level.Error */;
	    }
	    if (["debug" /* Log.Level.Debug */, 'trace'].includes(consoleApiType)) {
	        return "debug" /* Log.Level.Debug */;
	    }
	    if (["warn" /* Log.Level.Warn */, 'warning'].includes(consoleApiType)) {
	        return "warn" /* Log.Level.Warn */;
	    }
	    return "info" /* Log.Level.Info */;
	}
	function getLogMethod(consoleApiType) {
	    switch (consoleApiType) {
	        case 'warning':
	            return 'warn';
	        case 'startGroup':
	            return 'group';
	        case 'startGroupCollapsed':
	            return 'groupCollapsed';
	        case 'endGroup':
	            return 'groupEnd';
	    }
	    return consoleApiType;
	}
	let LogManager$1 = class LogManager {
	    #eventManager;
	    #realmStorage;
	    #cdpTarget;
	    #logger;
	    constructor(cdpTarget, realmStorage, eventManager, logger) {
	        this.#cdpTarget = cdpTarget;
	        this.#realmStorage = realmStorage;
	        this.#eventManager = eventManager;
	        this.#logger = logger;
	    }
	    static create(cdpTarget, realmStorage, eventManager, logger) {
	        const logManager = new _a(cdpTarget, realmStorage, eventManager, logger);
	        logManager.#initializeEntryAddedEventListener();
	        return logManager;
	    }
	    /**
	     * Heuristic serialization of CDP remote object. If possible, return the BiDi value
	     * without deep serialization.
	     */
	    async #heuristicSerializeArg(arg, realm) {
	        switch (arg.type) {
	            // TODO: Implement regexp, array, object, map and set heuristics base on
	            //  preview.
	            case 'undefined':
	                return { type: 'undefined' };
	            case 'boolean':
	                return { type: 'boolean', value: arg.value };
	            case 'string':
	                return { type: 'string', value: arg.value };
	            case 'number':
	                // The value can be either a number or a string like `Infinity` or `-0`.
	                return { type: 'number', value: arg.unserializableValue ?? arg.value };
	            case 'bigint':
	                if (arg.unserializableValue !== undefined &&
	                    arg.unserializableValue[arg.unserializableValue.length - 1] === 'n') {
	                    return {
	                        type: arg.type,
	                        value: arg.unserializableValue.slice(0, -1),
	                    };
	                }
	                // Unexpected bigint value, fall back to CDP deep serialization.
	                break;
	            case 'object':
	                if (arg.subtype === 'null') {
	                    return { type: 'null' };
	                }
	                // Fall back to CDP deep serialization.
	                break;
	        }
	        // Fall back to CDP deep serialization.
	        return await realm.serializeCdpObject(arg, "none" /* Script.ResultOwnership.None */);
	    }
	    #initializeEntryAddedEventListener() {
	        this.#cdpTarget.cdpClient.on('Runtime.consoleAPICalled', (params) => {
	            // Try to find realm by `cdpSessionId` and `executionContextId`,
	            // if provided.
	            const realm = this.#realmStorage.findRealm({
	                cdpSessionId: this.#cdpTarget.cdpSessionId,
	                executionContextId: params.executionContextId,
	            });
	            if (realm === undefined) {
	                // Ignore exceptions not attached to any realm.
	                this.#logger?.(log_js_1.LogType.cdp, params);
	                return;
	            }
	            const argsPromise = Promise.all(params.args.map((arg) => this.#heuristicSerializeArg(arg, realm)));
	            for (const browsingContext of realm.associatedBrowsingContexts) {
	                this.#eventManager.registerPromiseEvent(argsPromise.then((args) => ({
	                    kind: 'success',
	                    value: {
	                        type: 'event',
	                        method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
	                        params: {
	                            level: getLogLevel(params.type),
	                            source: realm.source,
	                            text: (0, logHelper_js_1.getRemoteValuesText)(args, true),
	                            timestamp: Math.round(params.timestamp),
	                            stackTrace: getBidiStackTrace(params.stackTrace),
	                            type: 'console',
	                            method: getLogMethod(params.type),
	                            args,
	                        },
	                    },
	                }), (error) => ({
	                    kind: 'error',
	                    error,
	                })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
	            }
	        });
	        this.#cdpTarget.cdpClient.on('Runtime.exceptionThrown', (params) => {
	            // Try to find realm by `cdpSessionId` and `executionContextId`,
	            // if provided.
	            const realm = this.#realmStorage.findRealm({
	                cdpSessionId: this.#cdpTarget.cdpSessionId,
	                executionContextId: params.exceptionDetails.executionContextId,
	            });
	            if (realm === undefined) {
	                // Ignore exceptions not attached to any realm.
	                this.#logger?.(log_js_1.LogType.cdp, params);
	                return;
	            }
	            for (const browsingContext of realm.associatedBrowsingContexts) {
	                this.#eventManager.registerPromiseEvent(_a.#getExceptionText(params, realm).then((text) => ({
	                    kind: 'success',
	                    value: {
	                        type: 'event',
	                        method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
	                        params: {
	                            level: "error" /* Log.Level.Error */,
	                            source: realm.source,
	                            text,
	                            timestamp: Math.round(params.timestamp),
	                            stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
	                            type: 'javascript',
	                        },
	                    },
	                }), (error) => ({
	                    kind: 'error',
	                    error,
	                })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
	            }
	        });
	    }
	    /**
	     * Try the best to get the exception text.
	     */
	    static async #getExceptionText(params, realm) {
	        if (!params.exceptionDetails.exception) {
	            return params.exceptionDetails.text;
	        }
	        if (realm === undefined) {
	            return JSON.stringify(params.exceptionDetails.exception);
	        }
	        return await realm.stringifyObject(params.exceptionDetails.exception);
	    }
	};
	LogManager.LogManager = LogManager$1;
	_a = LogManager$1;
	
	return LogManager;
}

var hasRequiredCdpTarget;

function requireCdpTarget () {
	if (hasRequiredCdpTarget) return CdpTarget;
	hasRequiredCdpTarget = 1;
	Object.defineProperty(CdpTarget, "__esModule", { value: true });
	CdpTarget.CdpTarget = undefined;
	const chromium_bidi_js_1 = requireChromiumBidi();
	const Deferred_js_1 = requireDeferred();
	const EventEmitter_js_1 = requireEventEmitter();
	const log_js_1 = requireLog();
	const BrowsingContextImpl_js_1 = requireBrowsingContextImpl();
	const LogManager_js_1 = requireLogManager();
	let CdpTarget$1 = class CdpTarget extends EventEmitter_js_1.EventEmitter {
	    #id;
	    #cdpClient;
	    #browserCdpClient;
	    #parentCdpClient;
	    #realmStorage;
	    #eventManager;
	    #preloadScriptStorage;
	    #browsingContextStorage;
	    #prerenderingDisabled;
	    #networkStorage;
	    #unblocked = new Deferred_js_1.Deferred();
	    #unhandledPromptBehavior;
	    #logger;
	    #deviceAccessEnabled = false;
	    #cacheDisableState = false;
	    #fetchDomainStages = {
	        request: false,
	        response: false,
	        auth: false,
	    };
	    static create(targetId, cdpClient, browserCdpClient, parentCdpClient, realmStorage, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
	        const cdpTarget = new CdpTarget(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger);
	        LogManager_js_1.LogManager.create(cdpTarget, realmStorage, eventManager, logger);
	        cdpTarget.#setEventListeners();
	        // No need to await.
	        // Deferred will be resolved when the target is unblocked.
	        void cdpTarget.#unblock();
	        return cdpTarget;
	    }
	    constructor(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
	        super();
	        this.#id = targetId;
	        this.#cdpClient = cdpClient;
	        this.#browserCdpClient = browserCdpClient;
	        this.#parentCdpClient = parentCdpClient;
	        this.#eventManager = eventManager;
	        this.#realmStorage = realmStorage;
	        this.#preloadScriptStorage = preloadScriptStorage;
	        this.#networkStorage = networkStorage;
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#prerenderingDisabled = prerenderingDisabled;
	        this.#unhandledPromptBehavior = unhandledPromptBehavior;
	        this.#logger = logger;
	    }
	    /** Returns a deferred that resolves when the target is unblocked. */
	    get unblocked() {
	        return this.#unblocked;
	    }
	    get id() {
	        return this.#id;
	    }
	    get cdpClient() {
	        return this.#cdpClient;
	    }
	    get parentCdpClient() {
	        return this.#parentCdpClient;
	    }
	    get browserCdpClient() {
	        return this.#browserCdpClient;
	    }
	    /** Needed for CDP escape path. */
	    get cdpSessionId() {
	        // SAFETY we got the client by it's id for creating
	        return this.#cdpClient.sessionId;
	    }
	    /**
	     * Enables all the required CDP domains and unblocks the target.
	     */
	    async #unblock() {
	        try {
	            await Promise.all([
	                this.#cdpClient.sendCommand('Page.enable'),
	                // There can be some existing frames in the target, if reconnecting to an
	                // existing browser instance, e.g. via Puppeteer. Need to restore the browsing
	                // contexts for the frames to correctly handle further events, like
	                // `Runtime.executionContextCreated`.
	                // It's important to schedule this task together with enabling domains commands to
	                // prepare the tree before the events (e.g. Runtime.executionContextCreated) start
	                // coming.
	                // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2282
	                this.#cdpClient
	                    .sendCommand('Page.getFrameTree')
	                    .then((frameTree) => this.#restoreFrameTreeState(frameTree.frameTree)),
	                this.#cdpClient.sendCommand('Runtime.enable'),
	                this.#cdpClient.sendCommand('Page.setLifecycleEventsEnabled', {
	                    enabled: true,
	                }),
	                this.#cdpClient
	                    .sendCommand('Page.setPrerenderingAllowed', {
	                    isAllowed: !this.#prerenderingDisabled,
	                })
	                    .catch(() => {
	                    // Ignore CDP errors, as the command is not supported by iframe targets or
	                    // prerendered pages. Generic catch, as the error can vary between CdpClient
	                    // implementations: Tab vs Puppeteer.
	                }),
	                // Enabling CDP Network domain is required for navigation detection:
	                // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2856.
	                this.#cdpClient
	                    .sendCommand('Network.enable')
	                    .then(() => this.toggleNetworkIfNeeded()),
	                this.#cdpClient.sendCommand('Target.setAutoAttach', {
	                    autoAttach: true,
	                    waitForDebuggerOnStart: true,
	                    flatten: true,
	                }),
	                this.#initAndEvaluatePreloadScripts(),
	                this.#cdpClient.sendCommand('Runtime.runIfWaitingForDebugger'),
	                // Resume tab execution as well if it was paused by the debugger.
	                this.#parentCdpClient.sendCommand('Runtime.runIfWaitingForDebugger'),
	                this.toggleDeviceAccessIfNeeded(),
	            ]);
	        }
	        catch (error) {
	            this.#logger?.(log_js_1.LogType.debugError, 'Failed to unblock target', error);
	            // The target might have been closed before the initialization finished.
	            if (!this.#cdpClient.isCloseError(error)) {
	                this.#unblocked.resolve({
	                    kind: 'error',
	                    error,
	                });
	                return;
	            }
	        }
	        this.#unblocked.resolve({
	            kind: 'success',
	            value: undefined,
	        });
	    }
	    #restoreFrameTreeState(frameTree) {
	        const frame = frameTree.frame;
	        const maybeContext = this.#browsingContextStorage.findContext(frame.id);
	        if (maybeContext !== undefined) {
	            // Restoring parent of already known browsing context. This means the target is
	            // OOPiF and the BiDi session was connected to already existing browser instance.
	            if (maybeContext.parentId === null &&
	                frame.parentId !== null &&
	                frame.parentId !== undefined) {
	                maybeContext.parentId = frame.parentId;
	            }
	        }
	        if (maybeContext === undefined && frame.parentId !== undefined) {
	            // Restore not yet known nested frames. The top-level frame is created when the
	            // target is attached.
	            const parentBrowsingContext = this.#browsingContextStorage.getContext(frame.parentId);
	            BrowsingContextImpl_js_1.BrowsingContextImpl.create(frame.id, frame.parentId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, frame.url, undefined, this.#unhandledPromptBehavior, this.#logger);
	        }
	        frameTree.childFrames?.map((frameTree) => this.#restoreFrameTreeState(frameTree));
	    }
	    async toggleFetchIfNeeded() {
	        const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
	        if (this.#fetchDomainStages.request === stages.request &&
	            this.#fetchDomainStages.response === stages.response &&
	            this.#fetchDomainStages.auth === stages.auth) {
	            return;
	        }
	        const patterns = [];
	        this.#fetchDomainStages = stages;
	        if (stages.request || stages.auth) {
	            // CDP quirk we need request interception when we intercept auth
	            patterns.push({
	                urlPattern: '*',
	                requestStage: 'Request',
	            });
	        }
	        if (stages.response) {
	            patterns.push({
	                urlPattern: '*',
	                requestStage: 'Response',
	            });
	        }
	        if (patterns.length) {
	            await this.#cdpClient.sendCommand('Fetch.enable', {
	                patterns,
	                handleAuthRequests: stages.auth,
	            });
	        }
	        else {
	            const blockedRequest = this.#networkStorage
	                .getRequestsByTarget(this)
	                .filter((request) => request.interceptPhase);
	            void Promise.allSettled(blockedRequest.map((request) => request.waitNextPhase))
	                .then(async () => {
	                const blockedRequest = this.#networkStorage
	                    .getRequestsByTarget(this)
	                    .filter((request) => request.interceptPhase);
	                if (blockedRequest.length) {
	                    return await this.toggleFetchIfNeeded();
	                }
	                return await this.#cdpClient.sendCommand('Fetch.disable');
	            })
	                .catch((error) => {
	                this.#logger?.(log_js_1.LogType.bidi, 'Disable failed', error);
	            });
	        }
	    }
	    /**
	     * Toggles CDP "Fetch" domain and enable/disable network cache.
	     */
	    async toggleNetworkIfNeeded() {
	        // Although the Network domain remains active, Fetch domain activation and caching
	        // settings should be managed dynamically.
	        try {
	            await Promise.all([
	                this.toggleSetCacheDisabled(),
	                this.toggleFetchIfNeeded(),
	            ]);
	        }
	        catch (err) {
	            this.#logger?.(log_js_1.LogType.debugError, err);
	            if (!this.#isExpectedError(err)) {
	                throw err;
	            }
	        }
	    }
	    async toggleSetCacheDisabled(disable) {
	        const defaultCacheDisabled = this.#networkStorage.defaultCacheBehavior === 'bypass';
	        const cacheDisabled = disable ?? defaultCacheDisabled;
	        if (this.#cacheDisableState === cacheDisabled) {
	            return;
	        }
	        this.#cacheDisableState = cacheDisabled;
	        try {
	            await this.#cdpClient.sendCommand('Network.setCacheDisabled', {
	                cacheDisabled,
	            });
	        }
	        catch (err) {
	            this.#logger?.(log_js_1.LogType.debugError, err);
	            this.#cacheDisableState = !cacheDisabled;
	            if (!this.#isExpectedError(err)) {
	                throw err;
	            }
	        }
	    }
	    async toggleDeviceAccessIfNeeded() {
	        const enabled = this.isSubscribedTo(chromium_bidi_js_1.BiDiModule.Bluetooth);
	        if (this.#deviceAccessEnabled === enabled) {
	            return;
	        }
	        this.#deviceAccessEnabled = enabled;
	        try {
	            await this.#cdpClient.sendCommand(enabled ? 'DeviceAccess.enable' : 'DeviceAccess.disable');
	        }
	        catch (err) {
	            this.#logger?.(log_js_1.LogType.debugError, err);
	            this.#deviceAccessEnabled = !enabled;
	            if (!this.#isExpectedError(err)) {
	                throw err;
	            }
	        }
	    }
	    /**
	     * Heuristic checking if the error is due to the session being closed. If so, ignore the
	     * error.
	     */
	    #isExpectedError(err) {
	        const error = err;
	        return ((error.code === -32001 &&
	            error.message === 'Session with given id not found.') ||
	            this.#cdpClient.isCloseError(err));
	    }
	    #setEventListeners() {
	        this.#cdpClient.on('Network.requestWillBeSent', (eventParams) => {
	            if (eventParams.loaderId === eventParams.requestId) {
	                this.emit("frameStartedNavigating" /* TargetEvents.FrameStartedNavigating */, {
	                    loaderId: eventParams.loaderId,
	                    url: eventParams.request.url,
	                    frameId: eventParams.frameId,
	                });
	            }
	        });
	        this.#cdpClient.on('*', (event, params) => {
	            // We may encounter uses for EventEmitter other than CDP events,
	            // which we want to skip.
	            if (typeof event !== 'string') {
	                return;
	            }
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: `goog:cdp.${event}`,
	                params: {
	                    event,
	                    params,
	                    session: this.cdpSessionId,
	                },
	            }, this.id);
	            // Duplicate the event to the deprecated event name.
	            // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844
	            this.#eventManager.registerEvent({
	                type: 'event',
	                method: `cdp.${event}`,
	                params: {
	                    event,
	                    params,
	                    session: this.cdpSessionId,
	                },
	            }, this.id);
	        });
	    }
	    async #enableFetch(stages) {
	        const patterns = [];
	        if (stages.request || stages.auth) {
	            // CDP quirk we need request interception when we intercept auth
	            patterns.push({
	                urlPattern: '*',
	                requestStage: 'Request',
	            });
	        }
	        if (stages.response) {
	            patterns.push({
	                urlPattern: '*',
	                requestStage: 'Response',
	            });
	        }
	        if (patterns.length) {
	            const oldStages = this.#fetchDomainStages;
	            this.#fetchDomainStages = stages;
	            try {
	                await this.#cdpClient.sendCommand('Fetch.enable', {
	                    patterns,
	                    handleAuthRequests: stages.auth,
	                });
	            }
	            catch {
	                this.#fetchDomainStages = oldStages;
	            }
	        }
	    }
	    async #disableFetch() {
	        const blockedRequest = this.#networkStorage
	            .getRequestsByTarget(this)
	            .filter((request) => request.interceptPhase);
	        if (blockedRequest.length === 0) {
	            this.#fetchDomainStages = {
	                request: false,
	                response: false,
	                auth: false,
	            };
	            await this.#cdpClient.sendCommand('Fetch.disable');
	        }
	    }
	    async toggleNetwork() {
	        const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
	        const fetchEnable = Object.values(stages).some((value) => value);
	        const fetchChanged = this.#fetchDomainStages.request !== stages.request ||
	            this.#fetchDomainStages.response !== stages.response ||
	            this.#fetchDomainStages.auth !== stages.auth;
	        this.#logger?.(log_js_1.LogType.debugInfo, 'Toggle Network', `Fetch (${fetchEnable}) ${fetchChanged}`);
	        if (fetchEnable && fetchChanged) {
	            await this.#enableFetch(stages);
	        }
	        if (!fetchEnable && fetchChanged) {
	            await this.#disableFetch();
	        }
	    }
	    /**
	     * All the ProxyChannels from all the preload scripts of the given
	     * BrowsingContext.
	     */
	    getChannels() {
	        return this.#preloadScriptStorage
	            .find()
	            .flatMap((script) => script.channels);
	    }
	    /** Loads all top-level preload scripts. */
	    async #initAndEvaluatePreloadScripts() {
	        await Promise.all(this.#preloadScriptStorage
	            .find({
	            // Needed for OOPIF
	            targetId: this.topLevelId,
	            global: true,
	        })
	            .map((script) => {
	            return script.initInTarget(this, true);
	        }));
	    }
	    get topLevelId() {
	        return (this.#browsingContextStorage.findTopLevelContextId(this.id) ?? this.id);
	    }
	    isSubscribedTo(moduleOrEvent) {
	        return this.#eventManager.subscriptionManager.isSubscribedTo(moduleOrEvent, this.topLevelId);
	    }
	};
	CdpTarget.CdpTarget = CdpTarget$1;
	
	return CdpTarget;
}

var hasRequiredCdpTargetManager;

function requireCdpTargetManager () {
	if (hasRequiredCdpTargetManager) return CdpTargetManager;
	hasRequiredCdpTargetManager = 1;
	Object.defineProperty(CdpTargetManager, "__esModule", { value: true });
	CdpTargetManager.CdpTargetManager = undefined;
	const log_js_1 = requireLog();
	const BrowsingContextImpl_js_1 = requireBrowsingContextImpl();
	const WorkerRealm_js_1 = requireWorkerRealm();
	const CdpTarget_js_1 = requireCdpTarget();
	const cdpToBidiTargetTypes = {
	    service_worker: 'service-worker',
	    shared_worker: 'shared-worker',
	    worker: 'dedicated-worker',
	};
	let CdpTargetManager$1 = class CdpTargetManager {
	    #browserCdpClient;
	    #cdpConnection;
	    #targetKeysToBeIgnoredByAutoAttach = new Set();
	    #selfTargetId;
	    #eventManager;
	    #browsingContextStorage;
	    #networkStorage;
	    #bluetoothProcessor;
	    #preloadScriptStorage;
	    #realmStorage;
	    #defaultUserContextId;
	    #logger;
	    #unhandledPromptBehavior;
	    #prerenderingDisabled;
	    constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, bluetoothProcessor, preloadScriptStorage, defaultUserContextId, prerenderingDisabled, unhandledPromptBehavior, logger) {
	        this.#cdpConnection = cdpConnection;
	        this.#browserCdpClient = browserCdpClient;
	        this.#targetKeysToBeIgnoredByAutoAttach.add(selfTargetId);
	        this.#selfTargetId = selfTargetId;
	        this.#eventManager = eventManager;
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#preloadScriptStorage = preloadScriptStorage;
	        this.#networkStorage = networkStorage;
	        this.#bluetoothProcessor = bluetoothProcessor;
	        this.#realmStorage = realmStorage;
	        this.#defaultUserContextId = defaultUserContextId;
	        this.#prerenderingDisabled = prerenderingDisabled;
	        this.#unhandledPromptBehavior = unhandledPromptBehavior;
	        this.#logger = logger;
	        this.#setEventListeners(browserCdpClient);
	    }
	    /**
	     * This method is called for each CDP session, since this class is responsible
	     * for creating and destroying all targets and browsing contexts.
	     */
	    #setEventListeners(cdpClient) {
	        cdpClient.on('Target.attachedToTarget', (params) => {
	            this.#handleAttachedToTargetEvent(params, cdpClient);
	        });
	        cdpClient.on('Target.detachedFromTarget', this.#handleDetachedFromTargetEvent.bind(this));
	        cdpClient.on('Target.targetInfoChanged', this.#handleTargetInfoChangedEvent.bind(this));
	        cdpClient.on('Inspector.targetCrashed', () => {
	            this.#handleTargetCrashedEvent(cdpClient);
	        });
	        cdpClient.on('Page.frameAttached', this.#handleFrameAttachedEvent.bind(this));
	        cdpClient.on('Page.frameDetached', this.#handleFrameDetachedEvent.bind(this));
	        cdpClient.on('Page.frameSubtreeWillBeDetached', this.#handleFrameSubtreeWillBeDetached.bind(this));
	    }
	    #handleFrameAttachedEvent(params) {
	        const parentBrowsingContext = this.#browsingContextStorage.findContext(params.parentFrameId);
	        if (parentBrowsingContext !== undefined) {
	            BrowsingContextImpl_js_1.BrowsingContextImpl.create(params.frameId, params.parentFrameId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, 
	            // At this point, we don't know the URL of the frame yet, so it will be updated
	            // later.
	            'about:blank', undefined, this.#unhandledPromptBehavior, this.#logger);
	        }
	    }
	    #handleFrameDetachedEvent(params) {
	        // In case of OOPiF no need in deleting BrowsingContext.
	        if (params.reason === 'swap') {
	            return;
	        }
	        this.#browsingContextStorage.findContext(params.frameId)?.dispose(true);
	    }
	    #handleFrameSubtreeWillBeDetached(params) {
	        this.#browsingContextStorage.findContext(params.frameId)?.dispose(true);
	    }
	    #handleAttachedToTargetEvent(params, parentSessionCdpClient) {
	        const { sessionId, targetInfo } = params;
	        const targetCdpClient = this.#cdpConnection.getCdpClient(sessionId);
	        const detach = async () => {
	            // Detaches and resumes the target suppressing errors.
	            await targetCdpClient
	                .sendCommand('Runtime.runIfWaitingForDebugger')
	                .then(() => parentSessionCdpClient.sendCommand('Target.detachFromTarget', params))
	                .catch((error) => this.#logger?.(log_js_1.LogType.debugError, error));
	        };
	        // Do not attach to the Mapper target.
	        if (this.#selfTargetId === targetInfo.targetId) {
	            void detach();
	            return;
	        }
	        // Service workers are special case because they attach to the
	        // browser target and the page target (so twice per worker) during
	        // the regular auto-attach and might hang if the CDP session on
	        // the browser level is not detached. The logic to detach the
	        // right session is handled in the switch below.
	        const targetKey = targetInfo.type === 'service_worker'
	            ? `${parentSessionCdpClient.sessionId}_${targetInfo.targetId}`
	            : targetInfo.targetId;
	        // Mapper generally only needs one session per target. If we
	        // receive additional auto-attached sessions, that is very likely
	        // coming from custom CDP sessions.
	        if (this.#targetKeysToBeIgnoredByAutoAttach.has(targetKey)) {
	            // Return to leave the session untouched.
	            return;
	        }
	        this.#targetKeysToBeIgnoredByAutoAttach.add(targetKey);
	        switch (targetInfo.type) {
	            case 'tab':
	                // Tab targets are required only to handle page targets beneath them.
	                this.#setEventListeners(targetCdpClient);
	                // Auto-attach to the page target. No need in resuming tab target debugger, as it
	                // should preserve the page target debugger state, and will be resumed by the page
	                // target.
	                void (async () => {
	                    await targetCdpClient.sendCommand('Target.setAutoAttach', {
	                        autoAttach: true,
	                        waitForDebuggerOnStart: true,
	                        flatten: true,
	                    });
	                })();
	                return;
	            case 'page':
	            case 'iframe': {
	                const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
	                const maybeContext = this.#browsingContextStorage.findContext(targetInfo.targetId);
	                if (maybeContext && targetInfo.type === 'iframe') {
	                    // OOPiF.
	                    maybeContext.updateCdpTarget(cdpTarget);
	                }
	                else {
	                    // If attaching to existing browser instance, there could be OOPiF targets. This
	                    // case is handled by the `findFrameParentId` method.
	                    const parentId = this.#findFrameParentId(targetInfo, parentSessionCdpClient.sessionId);
	                    const userContext = targetInfo.browserContextId &&
	                        targetInfo.browserContextId !== this.#defaultUserContextId
	                        ? targetInfo.browserContextId
	                        : 'default';
	                    // New context.
	                    BrowsingContextImpl_js_1.BrowsingContextImpl.create(targetInfo.targetId, parentId, userContext, cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, 
	                    // Hack: when a new target created, CDP emits targetInfoChanged with an empty
	                    // url, and navigates it to about:blank later. When the event is emitted for
	                    // an existing target (reconnect), the url is already known, and navigation
	                    // events will not be emitted anymore. Replacing empty url with `about:blank`
	                    // allows to handle both cases in the same way.
	                    // "7.3.2.1 Creating browsing contexts".
	                    // https://html.spec.whatwg.org/multipage/document-sequences.html#creating-browsing-contexts
	                    // TODO: check who to deal with non-null creator and its `creatorOrigin`.
	                    targetInfo.url === '' ? 'about:blank' : targetInfo.url, targetInfo.openerFrameId ?? targetInfo.openerId, this.#unhandledPromptBehavior, this.#logger);
	                }
	                return;
	            }
	            case 'service_worker':
	            case 'worker': {
	                const realm = this.#realmStorage.findRealm({
	                    cdpSessionId: parentSessionCdpClient.sessionId,
	                });
	                // If there is no browsing context, this worker is already terminated.
	                if (!realm) {
	                    void detach();
	                    return;
	                }
	                const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
	                this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget, realm);
	                return;
	            }
	            // In CDP, we only emit shared workers on the browser and not the set of
	            // frames that use the shared worker. If we change this in the future to
	            // behave like service workers (emits on both browser and frame targets),
	            // we can remove this block and merge service workers with the above one.
	            case 'shared_worker': {
	                const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
	                this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget);
	                return;
	            }
	        }
	        // DevTools or some other not supported by BiDi target. Just release
	        // debugger and ignore them.
	        void detach();
	    }
	    /** Try to find the parent browsing context ID for the given attached target. */
	    #findFrameParentId(targetInfo, parentSessionId) {
	        if (targetInfo.type !== 'iframe') {
	            return null;
	        }
	        const parentId = targetInfo.openerFrameId ?? targetInfo.openerId;
	        if (parentId !== undefined) {
	            return parentId;
	        }
	        if (parentSessionId !== undefined) {
	            return (this.#browsingContextStorage.findContextBySession(parentSessionId)
	                ?.id ?? null);
	        }
	        return null;
	    }
	    #createCdpTarget(targetCdpClient, parentCdpClient, targetInfo) {
	        this.#setEventListeners(targetCdpClient);
	        const target = CdpTarget_js_1.CdpTarget.create(targetInfo.targetId, targetCdpClient, this.#browserCdpClient, parentCdpClient, this.#realmStorage, this.#eventManager, this.#preloadScriptStorage, this.#browsingContextStorage, this.#networkStorage, this.#prerenderingDisabled, this.#unhandledPromptBehavior, this.#logger);
	        this.#networkStorage.onCdpTargetCreated(target);
	        this.#bluetoothProcessor.onCdpTargetCreated(target);
	        return target;
	    }
	    #workers = new Map();
	    #handleWorkerTarget(realmType, cdpTarget, ownerRealm) {
	        cdpTarget.cdpClient.on('Runtime.executionContextCreated', (params) => {
	            const { uniqueId, id, origin } = params.context;
	            const workerRealm = new WorkerRealm_js_1.WorkerRealm(cdpTarget.cdpClient, this.#eventManager, id, this.#logger, (0, BrowsingContextImpl_js_1.serializeOrigin)(origin), ownerRealm ? [ownerRealm] : [], uniqueId, this.#realmStorage, realmType);
	            this.#workers.set(cdpTarget.cdpSessionId, workerRealm);
	        });
	    }
	    #handleDetachedFromTargetEvent({ sessionId, targetId, }) {
	        if (targetId) {
	            this.#preloadScriptStorage.find({ targetId }).map((preloadScript) => {
	                preloadScript.dispose(targetId);
	            });
	        }
	        const context = this.#browsingContextStorage.findContextBySession(sessionId);
	        if (context) {
	            context.dispose(true);
	            return;
	        }
	        const worker = this.#workers.get(sessionId);
	        if (worker) {
	            this.#realmStorage.deleteRealms({
	                cdpSessionId: worker.cdpClient.sessionId,
	            });
	        }
	    }
	    #handleTargetInfoChangedEvent(params) {
	        const context = this.#browsingContextStorage.findContext(params.targetInfo.targetId);
	        if (context) {
	            context.onTargetInfoChanged(params);
	        }
	    }
	    #handleTargetCrashedEvent(cdpClient) {
	        // This is primarily used for service and shared workers. CDP tends to not
	        // signal they closed gracefully and instead says they crashed to signal
	        // they are closed.
	        const realms = this.#realmStorage.findRealms({
	            cdpSessionId: cdpClient.sessionId,
	        });
	        for (const realm of realms) {
	            realm.dispose();
	        }
	    }
	};
	CdpTargetManager.CdpTargetManager = CdpTargetManager$1;
	
	return CdpTargetManager;
}

var BrowsingContextStorage = {};

var hasRequiredBrowsingContextStorage;

function requireBrowsingContextStorage () {
	if (hasRequiredBrowsingContextStorage) return BrowsingContextStorage;
	hasRequiredBrowsingContextStorage = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(BrowsingContextStorage, "__esModule", { value: true });
	BrowsingContextStorage.BrowsingContextStorage = undefined;
	const protocol_js_1 = requireProtocol();
	const EventEmitter_js_1 = requireEventEmitter();
	/** Container class for browsing contexts. */
	let BrowsingContextStorage$1 = class BrowsingContextStorage {
	    /** Map from context ID to context implementation. */
	    #contexts = new Map();
	    /** Event emitter for browsing context storage eventsis not expected to be exposed to
	     * the outside world. */
	    #eventEmitter = new EventEmitter_js_1.EventEmitter();
	    /** Gets all top-level contexts, i.e. those with no parent. */
	    getTopLevelContexts() {
	        return this.getAllContexts().filter((context) => context.isTopLevelContext());
	    }
	    /** Gets all contexts. */
	    getAllContexts() {
	        return Array.from(this.#contexts.values());
	    }
	    /** Deletes the context with the given ID. */
	    deleteContextById(id) {
	        this.#contexts.delete(id);
	    }
	    /** Deletes the given context. */
	    deleteContext(context) {
	        this.#contexts.delete(context.id);
	    }
	    /** Tracks the given context. */
	    addContext(context) {
	        this.#contexts.set(context.id, context);
	        this.#eventEmitter.emit("added" /* BrowsingContextStorageEvents.Added */, {
	            browsingContext: context,
	        });
	    }
	    /**
	     * Waits for a context with the given ID to be added and returns it.
	     */
	    waitForContext(browsingContextId) {
	        return new Promise((resolve) => {
	            const listener = (event) => {
	                if (event.browsingContext.id === browsingContextId) {
	                    this.#eventEmitter.off("added" /* BrowsingContextStorageEvents.Added */, listener);
	                    resolve(event.browsingContext);
	                }
	            };
	            this.#eventEmitter.on("added" /* BrowsingContextStorageEvents.Added */, listener);
	        });
	    }
	    /** Returns true whether there is an existing context with the given ID. */
	    hasContext(id) {
	        return this.#contexts.has(id);
	    }
	    /** Gets the context with the given ID, if any. */
	    findContext(id) {
	        return this.#contexts.get(id);
	    }
	    /** Returns the top-level context ID of the given context, if any. */
	    findTopLevelContextId(id) {
	        if (id === null) {
	            return null;
	        }
	        const maybeContext = this.findContext(id);
	        const parentId = maybeContext?.parentId ?? null;
	        if (parentId === null) {
	            return id;
	        }
	        return this.findTopLevelContextId(parentId);
	    }
	    findContextBySession(sessionId) {
	        for (const context of this.#contexts.values()) {
	            if (context.cdpTarget.cdpSessionId === sessionId) {
	                return context;
	            }
	        }
	        return;
	    }
	    /** Gets the context with the given ID, if any, otherwise throws. */
	    getContext(id) {
	        const result = this.findContext(id);
	        if (result === undefined) {
	            throw new protocol_js_1.NoSuchFrameException(`Context ${id} not found`);
	        }
	        return result;
	    }
	    verifyTopLevelContextsList(contexts) {
	        const foundContexts = new Set();
	        if (!contexts) {
	            return foundContexts;
	        }
	        for (const contextId of contexts) {
	            const context = this.getContext(contextId);
	            if (context.isTopLevelContext()) {
	                foundContexts.add(context);
	            }
	            else {
	                throw new protocol_js_1.InvalidArgumentException(`Non top-level context '${contextId}' given.`);
	            }
	        }
	        return foundContexts;
	    }
	};
	BrowsingContextStorage.BrowsingContextStorage = BrowsingContextStorage$1;
	
	return BrowsingContextStorage;
}

var NetworkStorage = {};

var NetworkRequest = {};

var hasRequiredNetworkRequest;

function requireNetworkRequest () {
	if (hasRequiredNetworkRequest) return NetworkRequest;
	hasRequiredNetworkRequest = 1;
	/*
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	var _a;
	Object.defineProperty(NetworkRequest, "__esModule", { value: true });
	NetworkRequest.NetworkRequest = undefined;
	const protocol_js_1 = requireProtocol();
	const assert_js_1 = requireAssert();
	const Deferred_js_1 = requireDeferred();
	const log_js_1 = requireLog();
	const NetworkUtils_js_1 = requireNetworkUtils();
	const REALM_REGEX = /(?<=realm=").*(?=")/;
	/** Abstracts one individual network request. */
	let NetworkRequest$1 = class NetworkRequest {
	    static unknownParameter = 'UNKNOWN';
	    /**
	     * Each network request has an associated request id, which is a string
	     * uniquely identifying that request.
	     *
	     * The identifier for a request resulting from a redirect matches that of the
	     * request that initiated it.
	     */
	    #id;
	    #fetchId;
	    /**
	     * Indicates the network intercept phase, if the request is currently blocked.
	     * Undefined necessarily implies that the request is not blocked.
	     */
	    #interceptPhase;
	    #servedFromCache = false;
	    #redirectCount;
	    #request = {};
	    #requestOverrides;
	    #responseOverrides;
	    #response = {};
	    #eventManager;
	    #networkStorage;
	    #cdpTarget;
	    #logger;
	    #emittedEvents = {
	        [protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired]: false,
	        [protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent]: false,
	        [protocol_js_1.ChromiumBidi.Network.EventNames.FetchError]: false,
	        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted]: false,
	        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted]: false,
	    };
	    waitNextPhase = new Deferred_js_1.Deferred();
	    constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
	        this.#id = id;
	        this.#eventManager = eventManager;
	        this.#networkStorage = networkStorage;
	        this.#cdpTarget = cdpTarget;
	        this.#redirectCount = redirectCount;
	        this.#logger = logger;
	    }
	    get id() {
	        return this.#id;
	    }
	    get fetchId() {
	        return this.#fetchId;
	    }
	    /**
	     * When blocked returns the phase for it
	     */
	    get interceptPhase() {
	        return this.#interceptPhase;
	    }
	    get url() {
	        const fragment = this.#request.info?.request.urlFragment ??
	            this.#request.paused?.request.urlFragment ??
	            '';
	        const url = this.#response.info?.url ??
	            this.#response.paused?.request.url ??
	            this.#requestOverrides?.url ??
	            this.#request.auth?.request.url ??
	            this.#request.info?.request.url ??
	            this.#request.paused?.request.url ??
	            _a.unknownParameter;
	        return `${url}${fragment}`;
	    }
	    get redirectCount() {
	        return this.#redirectCount;
	    }
	    get cdpTarget() {
	        return this.#cdpTarget;
	    }
	    get cdpClient() {
	        return this.#cdpTarget.cdpClient;
	    }
	    isRedirecting() {
	        return Boolean(this.#request.info);
	    }
	    #isDataUrl() {
	        return this.url.startsWith('data:');
	    }
	    get #method() {
	        return (this.#requestOverrides?.method ??
	            this.#request.info?.request.method ??
	            this.#request.paused?.request.method ??
	            this.#request.auth?.request.method ??
	            this.#response.paused?.request.method);
	    }
	    get #navigationId() {
	        // Heuristic to determine if this is a navigation request, and if not return null.
	        if (!this.#request.info ||
	            !this.#request.info.loaderId ||
	            // When we navigate all CDP network events have `loaderId`
	            // CDP's `loaderId` and `requestId` match when
	            // that request triggered the loading
	            this.#request.info.loaderId !== this.#request.info.requestId) {
	            return null;
	        }
	        // Get virtual navigation ID from the browsing context.
	        return this.#networkStorage.getNavigationId(this.#context ?? undefined);
	    }
	    get #cookies() {
	        let cookies = [];
	        if (this.#request.extraInfo) {
	            cookies = this.#request.extraInfo.associatedCookies
	                .filter(({ blockedReasons }) => {
	                return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
	            })
	                .map(({ cookie }) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(cookie));
	        }
	        return cookies;
	    }
	    get #bodySize() {
	        let bodySize = 0;
	        if (typeof this.#requestOverrides?.bodySize === 'number') {
	            bodySize = this.#requestOverrides.bodySize;
	        }
	        else {
	            bodySize = (0, NetworkUtils_js_1.bidiBodySizeFromCdpPostDataEntries)(this.#request.info?.request.postDataEntries ?? []);
	        }
	        return bodySize;
	    }
	    get #context() {
	        return (this.#response.paused?.frameId ??
	            this.#request.info?.frameId ??
	            this.#request.paused?.frameId ??
	            this.#request.auth?.frameId ??
	            null);
	    }
	    /** Returns the HTTP status code associated with this request if any. */
	    get #statusCode() {
	        return (this.#responseOverrides?.statusCode ??
	            this.#response.paused?.responseStatusCode ??
	            this.#response.extraInfo?.statusCode ??
	            this.#response.info?.status);
	    }
	    get #requestHeaders() {
	        let headers = [];
	        if (this.#requestOverrides?.headers) {
	            headers = this.#requestOverrides.headers;
	        }
	        else {
	            headers = [
	                ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#request.info?.request.headers),
	                ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#request.extraInfo?.headers),
	            ];
	        }
	        return headers;
	    }
	    get #authChallenges() {
	        // TODO: get headers from Fetch.requestPaused
	        if (!this.#response.info) {
	            return;
	        }
	        if (!(this.#statusCode === 401 || this.#statusCode === 407)) {
	            return undefined;
	        }
	        const headerName = this.#statusCode === 401 ? 'WWW-Authenticate' : 'Proxy-Authenticate';
	        const authChallenges = [];
	        for (const [header, value] of Object.entries(this.#response.info.headers)) {
	            // TODO: Do a proper match based on https://httpwg.org/specs/rfc9110.html#credentials
	            // Or verify this works
	            if (header.localeCompare(headerName, undefined, { sensitivity: 'base' }) === 0) {
	                authChallenges.push({
	                    scheme: value.split(' ').at(0) ?? '',
	                    realm: value.match(REALM_REGEX)?.at(0) ?? '',
	                });
	            }
	        }
	        return authChallenges;
	    }
	    get #timings() {
	        return {
	            // TODO: Verify this is correct
	            timeOrigin: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
	            requestTime: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
	            redirectStart: 0,
	            redirectEnd: 0,
	            // TODO: Verify this is correct
	            // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
	            fetchStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
	            dnsStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.dnsStart),
	            dnsEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.dnsEnd),
	            connectStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.connectStart),
	            connectEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.connectEnd),
	            tlsStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.sslStart),
	            requestStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.sendStart),
	            // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
	            responseStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.receiveHeadersStart),
	            responseEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.receiveHeadersEnd),
	        };
	    }
	    #phaseChanged() {
	        this.waitNextPhase.resolve();
	        this.waitNextPhase = new Deferred_js_1.Deferred();
	    }
	    #interceptsInPhase(phase) {
	        if (!this.#cdpTarget.isSubscribedTo(`network.${phase}`)) {
	            return new Set();
	        }
	        return this.#networkStorage.getInterceptsForPhase(this, phase);
	    }
	    #isBlockedInPhase(phase) {
	        return this.#interceptsInPhase(phase).size > 0;
	    }
	    handleRedirect(event) {
	        // TODO: use event.redirectResponse;
	        // Temporary workaround to emit ResponseCompleted event for redirects
	        this.#response.hasExtraInfo = false;
	        this.#response.info = event.redirectResponse;
	        this.#emitEventsIfReady({
	            wasRedirected: true,
	        });
	    }
	    #emitEventsIfReady(options = {}) {
	        const requestExtraInfoCompleted = 
	        // Flush redirects
	        options.wasRedirected ||
	            options.hasFailed ||
	            this.#isDataUrl() ||
	            Boolean(this.#request.extraInfo) ||
	            // Requests from cache don't have extra info
	            this.#servedFromCache ||
	            // Sometimes there is no extra info and the response
	            // is the only place we can find out
	            Boolean(this.#response.info && !this.#response.hasExtraInfo);
	        const noInterceptionExpected = 
	        // We can't intercept data urls from CDP
	        this.#isDataUrl() ||
	            // Cached requests never hit the network
	            this.#servedFromCache;
	        const requestInterceptionExpected = !noInterceptionExpected &&
	            this.#isBlockedInPhase("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */);
	        const requestInterceptionCompleted = !requestInterceptionExpected ||
	            (requestInterceptionExpected && Boolean(this.#request.paused));
	        if (Boolean(this.#request.info) &&
	            (requestInterceptionExpected
	                ? requestInterceptionCompleted
	                : requestExtraInfoCompleted)) {
	            this.#emitEvent(this.#getBeforeRequestEvent.bind(this));
	        }
	        const responseExtraInfoCompleted = Boolean(this.#response.extraInfo) ||
	            // Response from cache don't have extra info
	            this.#servedFromCache ||
	            // Don't expect extra info if the flag is false
	            Boolean(this.#response.info && !this.#response.hasExtraInfo);
	        const responseInterceptionExpected = !noInterceptionExpected &&
	            this.#isBlockedInPhase("responseStarted" /* Network.InterceptPhase.ResponseStarted */);
	        if (this.#response.info ||
	            (responseInterceptionExpected && Boolean(this.#response.paused))) {
	            this.#emitEvent(this.#getResponseStartedEvent.bind(this));
	        }
	        const responseInterceptionCompleted = !responseInterceptionExpected ||
	            (responseInterceptionExpected && Boolean(this.#response.paused));
	        if (Boolean(this.#response.info) &&
	            responseExtraInfoCompleted &&
	            responseInterceptionCompleted) {
	            this.#emitEvent(this.#getResponseReceivedEvent.bind(this));
	            this.#networkStorage.deleteRequest(this.id);
	        }
	    }
	    onRequestWillBeSentEvent(event) {
	        this.#request.info = event;
	        this.#emitEventsIfReady();
	    }
	    onRequestWillBeSentExtraInfoEvent(event) {
	        this.#request.extraInfo = event;
	        this.#emitEventsIfReady();
	    }
	    onResponseReceivedExtraInfoEvent(event) {
	        if (event.statusCode >= 300 &&
	            event.statusCode <= 399 &&
	            this.#request.info &&
	            event.headers['location'] === this.#request.info.request.url) {
	            // We received the Response Extra info for the redirect
	            // Too late so we need to skip it as it will
	            // fire wrongly for the last one
	            return;
	        }
	        this.#response.extraInfo = event;
	        this.#emitEventsIfReady();
	    }
	    onResponseReceivedEvent(event) {
	        this.#response.hasExtraInfo = event.hasExtraInfo;
	        this.#response.info = event.response;
	        this.#emitEventsIfReady();
	    }
	    onServedFromCache() {
	        this.#servedFromCache = true;
	        this.#emitEventsIfReady();
	    }
	    onLoadingFailedEvent(event) {
	        this.#emitEventsIfReady({
	            hasFailed: true,
	        });
	        this.#emitEvent(() => {
	            return {
	                method: protocol_js_1.ChromiumBidi.Network.EventNames.FetchError,
	                params: {
	                    ...this.#getBaseEventParams(),
	                    errorText: event.errorText,
	                },
	            };
	        });
	    }
	    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
	    async failRequest(errorReason) {
	        (0, assert_js_1.assert)(this.#fetchId, 'Network Interception not set-up.');
	        await this.cdpClient.sendCommand('Fetch.failRequest', {
	            requestId: this.#fetchId,
	            errorReason,
	        });
	        this.#interceptPhase = undefined;
	    }
	    onRequestPaused(event) {
	        this.#fetchId = event.requestId;
	        // CDP https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#event-requestPaused
	        if (event.responseStatusCode || event.responseErrorReason) {
	            this.#response.paused = event;
	            if (this.#isBlockedInPhase("responseStarted" /* Network.InterceptPhase.ResponseStarted */) &&
	                // CDP may emit multiple events for a single request
	                !this.#emittedEvents[protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted] &&
	                // Continue all response that have not enabled Network domain
	                this.#fetchId !== this.id) {
	                this.#interceptPhase = "responseStarted" /* Network.InterceptPhase.ResponseStarted */;
	            }
	            else {
	                void this.#continueResponse();
	            }
	        }
	        else {
	            this.#request.paused = event;
	            if (this.#isBlockedInPhase("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */) &&
	                // CDP may emit multiple events for a single request
	                !this.#emittedEvents[protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent] &&
	                // Continue all requests that have not enabled Network domain
	                this.#fetchId !== this.id) {
	                this.#interceptPhase = "beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */;
	            }
	            else {
	                void this.#continueRequest();
	            }
	        }
	        this.#emitEventsIfReady();
	    }
	    onAuthRequired(event) {
	        this.#fetchId = event.requestId;
	        this.#request.auth = event;
	        if (this.#isBlockedInPhase("authRequired" /* Network.InterceptPhase.AuthRequired */) &&
	            // Continue all auth requests that have not enabled Network domain
	            this.#fetchId !== this.id) {
	            this.#interceptPhase = "authRequired" /* Network.InterceptPhase.AuthRequired */;
	        }
	        else {
	            void this.#continueWithAuth({
	                response: 'Default',
	            });
	        }
	        this.#emitEvent(() => {
	            return {
	                method: protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired,
	                params: {
	                    ...this.#getBaseEventParams("authRequired" /* Network.InterceptPhase.AuthRequired */),
	                    response: this.#getResponseEventParams(),
	                },
	            };
	        });
	    }
	    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
	    async continueRequest(overrides = {}) {
	        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
	        const headers = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
	        const postData = getCdpBodyFromBiDiBytesValue(overrides.body);
	        await this.#continueRequest({
	            url: overrides.url,
	            method: overrides.method,
	            headers,
	            postData,
	        });
	        this.#requestOverrides = {
	            url: overrides.url,
	            method: overrides.method,
	            headers: overrides.headers,
	            cookies: overrides.cookies,
	            bodySize: getSizeFromBiDiBytesValue(overrides.body),
	        };
	    }
	    async #continueRequest(overrides = {}) {
	        (0, assert_js_1.assert)(this.#fetchId, 'Network Interception not set-up.');
	        await this.cdpClient.sendCommand('Fetch.continueRequest', {
	            requestId: this.#fetchId,
	            url: overrides.url,
	            method: overrides.method,
	            headers: overrides.headers,
	            postData: overrides.postData,
	        });
	        this.#interceptPhase = undefined;
	    }
	    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
	    async continueResponse(overrides = {}) {
	        if (this.interceptPhase === "authRequired" /* Network.InterceptPhase.AuthRequired */) {
	            if (overrides.credentials) {
	                await Promise.all([
	                    this.waitNextPhase,
	                    await this.#continueWithAuth({
	                        response: 'ProvideCredentials',
	                        username: overrides.credentials.username,
	                        password: overrides.credentials.password,
	                    }),
	                ]);
	            }
	            else {
	                // We need to use `ProvideCredentials`
	                // As `Default` may cancel the request
	                return await this.#continueWithAuth({
	                    response: 'ProvideCredentials',
	                });
	            }
	        }
	        if (this.#interceptPhase === "responseStarted" /* Network.InterceptPhase.ResponseStarted */) {
	            const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
	            const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
	            await this.#continueResponse({
	                responseCode: overrides.statusCode ?? this.#response.paused?.responseStatusCode,
	                responsePhrase: overrides.reasonPhrase ?? this.#response.paused?.responseStatusText,
	                responseHeaders: responseHeaders ?? this.#response.paused?.responseHeaders,
	            });
	            this.#responseOverrides = {
	                statusCode: overrides.statusCode,
	                headers: overrideHeaders,
	            };
	        }
	    }
	    async #continueResponse({ responseCode, responsePhrase, responseHeaders, } = {}) {
	        (0, assert_js_1.assert)(this.#fetchId, 'Network Interception not set-up.');
	        await this.cdpClient.sendCommand('Fetch.continueResponse', {
	            requestId: this.#fetchId,
	            responseCode,
	            responsePhrase,
	            responseHeaders,
	        });
	        this.#interceptPhase = undefined;
	    }
	    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
	    async continueWithAuth(authChallenge) {
	        let username;
	        let password;
	        if (authChallenge.action === 'provideCredentials') {
	            const { credentials } = authChallenge;
	            username = credentials.username;
	            password = credentials.password;
	        }
	        const response = (0, NetworkUtils_js_1.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(authChallenge.action);
	        await this.#continueWithAuth({
	            response,
	            username,
	            password,
	        });
	    }
	    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
	    async provideResponse(overrides) {
	        (0, assert_js_1.assert)(this.#fetchId, 'Network Interception not set-up.');
	        // We need to pass through if the request is already in
	        // AuthRequired phase
	        if (this.interceptPhase === "authRequired" /* Network.InterceptPhase.AuthRequired */) {
	            // We need to use `ProvideCredentials`
	            // As `Default` may cancel the request
	            return await this.#continueWithAuth({
	                response: 'ProvideCredentials',
	            });
	        }
	        // If we don't modify the response
	        // just continue the request
	        if (!overrides.body && !overrides.headers) {
	            return await this.#continueRequest();
	        }
	        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
	        const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
	        const responseCode = overrides.statusCode ?? this.#statusCode ?? 200;
	        await this.cdpClient.sendCommand('Fetch.fulfillRequest', {
	            requestId: this.#fetchId,
	            responseCode,
	            responsePhrase: overrides.reasonPhrase,
	            responseHeaders,
	            body: getCdpBodyFromBiDiBytesValue(overrides.body),
	        });
	        this.#interceptPhase = undefined;
	    }
	    dispose() {
	        this.waitNextPhase.reject(new Error('waitNextPhase disposed'));
	    }
	    async #continueWithAuth(authChallengeResponse) {
	        (0, assert_js_1.assert)(this.#fetchId, 'Network Interception not set-up.');
	        await this.cdpClient.sendCommand('Fetch.continueWithAuth', {
	            requestId: this.#fetchId,
	            authChallengeResponse,
	        });
	        this.#interceptPhase = undefined;
	    }
	    #emitEvent(getEvent) {
	        let event;
	        try {
	            event = getEvent();
	        }
	        catch (error) {
	            this.#logger?.(log_js_1.LogType.debugError, error);
	            return;
	        }
	        if (this.#isIgnoredEvent() ||
	            (this.#emittedEvents[event.method] &&
	                // Special case this event can be emitted multiple times
	                event.method !== protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired)) {
	            return;
	        }
	        this.#phaseChanged();
	        this.#emittedEvents[event.method] = true;
	        this.#eventManager.registerEvent(Object.assign(event, {
	            type: 'event',
	        }), this.#context);
	    }
	    #getBaseEventParams(phase) {
	        const interceptProps = {
	            isBlocked: false,
	        };
	        if (phase) {
	            const blockedBy = this.#interceptsInPhase(phase);
	            interceptProps.isBlocked = blockedBy.size > 0;
	            if (interceptProps.isBlocked) {
	                interceptProps.intercepts = [...blockedBy];
	            }
	        }
	        return {
	            context: this.#context,
	            navigation: this.#navigationId,
	            redirectCount: this.#redirectCount,
	            request: this.#getRequestData(),
	            // Timestamp should be in milliseconds, while CDP provides it in seconds.
	            timestamp: Math.round((0, NetworkUtils_js_1.getTiming)(this.#request.info?.wallTime) * 1000),
	            // Contains isBlocked and intercepts
	            ...interceptProps,
	        };
	    }
	    #getResponseEventParams() {
	        // Chromium sends wrong extraInfo events for responses served from cache.
	        // See https://github.com/puppeteer/puppeteer/issues/9965 and
	        // https://crbug.com/1340398.
	        if (this.#response.info?.fromDiskCache) {
	            this.#response.extraInfo = undefined;
	        }
	        const headers = [
	            ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#response.info?.headers),
	            ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#response.extraInfo?.headers),
	            // TODO: Verify how to dedupe these
	            // ...bidiNetworkHeadersFromCdpNetworkHeadersEntries(
	            //   this.#response.paused?.responseHeaders
	            // ),
	        ];
	        const authChallenges = this.#authChallenges;
	        const response = {
	            url: this.url,
	            protocol: this.#response.info?.protocol ?? '',
	            status: this.#statusCode ?? -1, // TODO: Throw an exception or use some other status code?
	            statusText: this.#response.info?.statusText ||
	                this.#response.paused?.responseStatusText ||
	                '',
	            fromCache: this.#response.info?.fromDiskCache ||
	                this.#response.info?.fromPrefetchCache ||
	                this.#servedFromCache,
	            headers: this.#responseOverrides?.headers ?? headers,
	            mimeType: this.#response.info?.mimeType || '',
	            bytesReceived: this.#response.info?.encodedDataLength || 0,
	            headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
	            // TODO: consider removing from spec.
	            bodySize: 0,
	            content: {
	                // TODO: consider removing from spec.
	                size: 0,
	            },
	            ...(authChallenges ? { authChallenges } : {}),
	        };
	        return {
	            ...response,
	            'goog:securityDetails': this.#response.info?.securityDetails,
	        };
	    }
	    #getRequestData() {
	        const headers = this.#requestHeaders;
	        const request = {
	            request: this.#id,
	            url: this.url,
	            method: this.#method ?? _a.unknownParameter,
	            headers,
	            cookies: this.#cookies,
	            headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
	            bodySize: this.#bodySize,
	            // TODO: populate
	            destination: '',
	            // TODO: populate
	            initiatorType: null,
	            timings: this.#timings,
	        };
	        return {
	            ...request,
	            'goog:postData': this.#request.info?.request?.postData,
	            'goog:hasPostData': this.#request.info?.request?.hasPostData,
	            'goog:resourceType': this.#request.info?.type,
	        };
	    }
	    #getBeforeRequestEvent() {
	        (0, assert_js_1.assert)(this.#request.info, 'RequestWillBeSentEvent is not set');
	        return {
	            method: protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent,
	            params: {
	                ...this.#getBaseEventParams("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */),
	                initiator: {
	                    type: _a.#getInitiatorType(this.#request.info.initiator.type),
	                    columnNumber: this.#request.info.initiator.columnNumber,
	                    lineNumber: this.#request.info.initiator.lineNumber,
	                    stackTrace: this.#request.info.initiator.stack,
	                    request: this.#request.info.initiator.requestId,
	                },
	            },
	        };
	    }
	    #getResponseStartedEvent() {
	        return {
	            method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted,
	            params: {
	                ...this.#getBaseEventParams("responseStarted" /* Network.InterceptPhase.ResponseStarted */),
	                response: this.#getResponseEventParams(),
	            },
	        };
	    }
	    #getResponseReceivedEvent() {
	        return {
	            method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted,
	            params: {
	                ...this.#getBaseEventParams(),
	                response: this.#getResponseEventParams(),
	            },
	        };
	    }
	    #isIgnoredEvent() {
	        const faviconUrl = '/favicon.ico';
	        return (this.#request.paused?.request.url.endsWith(faviconUrl) ??
	            this.#request.info?.request.url.endsWith(faviconUrl) ??
	            false);
	    }
	    #getOverrideHeader(headers, cookies) {
	        if (!headers && !cookies) {
	            return undefined;
	        }
	        let overrideHeaders = headers;
	        const cookieHeader = (0, NetworkUtils_js_1.networkHeaderFromCookieHeaders)(cookies);
	        if (cookieHeader && !overrideHeaders) {
	            overrideHeaders = this.#requestHeaders;
	        }
	        if (cookieHeader && overrideHeaders) {
	            overrideHeaders.filter((header) => header.name.localeCompare('cookie', undefined, {
	                sensitivity: 'base',
	            }) !== 0);
	            overrideHeaders.push(cookieHeader);
	        }
	        return overrideHeaders;
	    }
	    static #getInitiatorType(initiatorType) {
	        switch (initiatorType) {
	            case 'parser':
	            case 'script':
	            case 'preflight':
	                return initiatorType;
	            default:
	                return 'other';
	        }
	    }
	};
	NetworkRequest.NetworkRequest = NetworkRequest$1;
	_a = NetworkRequest$1;
	function getCdpBodyFromBiDiBytesValue(body) {
	    let parsedBody;
	    if (body?.type === 'string') {
	        parsedBody = btoa(body.value);
	    }
	    else if (body?.type === 'base64') {
	        parsedBody = body.value;
	    }
	    return parsedBody;
	}
	function getSizeFromBiDiBytesValue(body) {
	    if (body?.type === 'string') {
	        return body.value.length;
	    }
	    else if (body?.type === 'base64') {
	        return atob(body.value).length;
	    }
	    return 0;
	}
	
	return NetworkRequest;
}

var hasRequiredNetworkStorage;

function requireNetworkStorage () {
	if (hasRequiredNetworkStorage) return NetworkStorage;
	hasRequiredNetworkStorage = 1;
	Object.defineProperty(NetworkStorage, "__esModule", { value: true });
	NetworkStorage.NetworkStorage = undefined;
	const protocol_js_1 = requireProtocol();
	const uuid_js_1 = requireUuid();
	const NetworkRequest_js_1 = requireNetworkRequest();
	const NetworkUtils_js_1 = requireNetworkUtils();
	/** Stores network and intercept maps. */
	let NetworkStorage$1 = class NetworkStorage {
	    #browsingContextStorage;
	    #eventManager;
	    #logger;
	    /**
	     * A map from network request ID to Network Request objects.
	     * Needed as long as information about requests comes from different events.
	     */
	    #requests = new Map();
	    /** A map from intercept ID to track active network intercepts. */
	    #intercepts = new Map();
	    #defaultCacheBehavior = 'default';
	    constructor(eventManager, browsingContextStorage, browserClient, logger) {
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#eventManager = eventManager;
	        browserClient.on('Target.detachedFromTarget', ({ sessionId }) => {
	            this.disposeRequestMap(sessionId);
	        });
	        this.#logger = logger;
	    }
	    /**
	     * Gets the network request with the given ID, if any.
	     * Otherwise, creates a new network request with the given ID and cdp target.
	     */
	    #getOrCreateNetworkRequest(id, cdpTarget, redirectCount) {
	        let request = this.getRequestById(id);
	        if (request) {
	            return request;
	        }
	        request = new NetworkRequest_js_1.NetworkRequest(id, this.#eventManager, this, cdpTarget, redirectCount, this.#logger);
	        this.addRequest(request);
	        return request;
	    }
	    onCdpTargetCreated(cdpTarget) {
	        const cdpClient = cdpTarget.cdpClient;
	        // TODO: Wrap into object
	        const listeners = [
	            [
	                'Network.requestWillBeSent',
	                (params) => {
	                    const request = this.getRequestById(params.requestId);
	                    if (request && request.isRedirecting()) {
	                        request.handleRedirect(params);
	                        this.deleteRequest(params.requestId);
	                        this.#getOrCreateNetworkRequest(params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
	                    }
	                    else {
	                        this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
	                    }
	                },
	            ],
	            [
	                'Network.requestWillBeSentExtraInfo',
	                (params) => {
	                    this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentExtraInfoEvent(params);
	                },
	            ],
	            [
	                'Network.responseReceived',
	                (params) => {
	                    this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onResponseReceivedEvent(params);
	                },
	            ],
	            [
	                'Network.responseReceivedExtraInfo',
	                (params) => {
	                    this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onResponseReceivedExtraInfoEvent(params);
	                },
	            ],
	            [
	                'Network.requestServedFromCache',
	                (params) => {
	                    this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onServedFromCache();
	                },
	            ],
	            [
	                'Network.loadingFailed',
	                (params) => {
	                    this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onLoadingFailedEvent(params);
	                },
	            ],
	            [
	                'Fetch.requestPaused',
	                (event) => {
	                    this.#getOrCreateNetworkRequest(
	                    // CDP quirk if the Network domain is not present this is undefined
	                    event.networkId ?? event.requestId, cdpTarget).onRequestPaused(event);
	                },
	            ],
	            [
	                'Fetch.authRequired',
	                (event) => {
	                    let request = this.getRequestByFetchId(event.requestId);
	                    if (!request) {
	                        request = this.#getOrCreateNetworkRequest(event.requestId, cdpTarget);
	                    }
	                    request.onAuthRequired(event);
	                },
	            ],
	        ];
	        for (const [event, listener] of listeners) {
	            cdpClient.on(event, listener);
	        }
	    }
	    getInterceptionStages(browsingContextId) {
	        const stages = {
	            request: false,
	            response: false,
	            auth: false,
	        };
	        for (const intercept of this.#intercepts.values()) {
	            if (intercept.contexts &&
	                !intercept.contexts.includes(browsingContextId)) {
	                continue;
	            }
	            stages.request ||= intercept.phases.includes("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */);
	            stages.response ||= intercept.phases.includes("responseStarted" /* Network.InterceptPhase.ResponseStarted */);
	            stages.auth ||= intercept.phases.includes("authRequired" /* Network.InterceptPhase.AuthRequired */);
	        }
	        return stages;
	    }
	    getInterceptsForPhase(request, phase) {
	        if (request.url === NetworkRequest_js_1.NetworkRequest.unknownParameter) {
	            return new Set();
	        }
	        const intercepts = new Set();
	        for (const [interceptId, intercept] of this.#intercepts.entries()) {
	            if (!intercept.phases.includes(phase) ||
	                (intercept.contexts &&
	                    !intercept.contexts.includes(request.cdpTarget.topLevelId))) {
	                continue;
	            }
	            if (intercept.urlPatterns.length === 0) {
	                intercepts.add(interceptId);
	                continue;
	            }
	            for (const pattern of intercept.urlPatterns) {
	                if ((0, NetworkUtils_js_1.matchUrlPattern)(pattern, request.url)) {
	                    intercepts.add(interceptId);
	                    break;
	                }
	            }
	        }
	        return intercepts;
	    }
	    disposeRequestMap(sessionId) {
	        for (const request of this.#requests.values()) {
	            if (request.cdpClient.sessionId === sessionId) {
	                this.#requests.delete(request.id);
	                request.dispose();
	            }
	        }
	    }
	    /**
	     * Adds the given entry to the intercept map.
	     * URL patterns are assumed to be parsed.
	     *
	     * @return The intercept ID.
	     */
	    addIntercept(value) {
	        const interceptId = (0, uuid_js_1.uuidv4)();
	        this.#intercepts.set(interceptId, value);
	        return interceptId;
	    }
	    /**
	     * Removes the given intercept from the intercept map.
	     * Throws NoSuchInterceptException if the intercept does not exist.
	     */
	    removeIntercept(intercept) {
	        if (!this.#intercepts.has(intercept)) {
	            throw new protocol_js_1.NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
	        }
	        this.#intercepts.delete(intercept);
	    }
	    getRequestsByTarget(target) {
	        const requests = [];
	        for (const request of this.#requests.values()) {
	            if (request.cdpTarget === target) {
	                requests.push(request);
	            }
	        }
	        return requests;
	    }
	    getRequestById(id) {
	        return this.#requests.get(id);
	    }
	    getRequestByFetchId(fetchId) {
	        for (const request of this.#requests.values()) {
	            if (request.fetchId === fetchId) {
	                return request;
	            }
	        }
	        return;
	    }
	    addRequest(request) {
	        this.#requests.set(request.id, request);
	    }
	    deleteRequest(id) {
	        this.#requests.delete(id);
	    }
	    /**
	     * Gets the virtual navigation ID for the given navigable ID.
	     */
	    getNavigationId(contextId) {
	        if (contextId === undefined) {
	            return null;
	        }
	        return (this.#browsingContextStorage.findContext(contextId)?.navigationId ?? null);
	    }
	    set defaultCacheBehavior(behavior) {
	        this.#defaultCacheBehavior = behavior;
	    }
	    get defaultCacheBehavior() {
	        return this.#defaultCacheBehavior;
	    }
	};
	NetworkStorage.NetworkStorage = NetworkStorage$1;
	
	return NetworkStorage;
}

var PreloadScriptStorage = {};

var hasRequiredPreloadScriptStorage;

function requirePreloadScriptStorage () {
	if (hasRequiredPreloadScriptStorage) return PreloadScriptStorage;
	hasRequiredPreloadScriptStorage = 1;
	Object.defineProperty(PreloadScriptStorage, "__esModule", { value: true });
	PreloadScriptStorage.PreloadScriptStorage = undefined;
	/**
	 * Container class for preload scripts.
	 */
	let PreloadScriptStorage$1 = class PreloadScriptStorage {
	    /** Tracks all BiDi preload scripts.  */
	    #scripts = new Set();
	    /**
	     * Finds all entries that match the given filter (OR logic).
	     */
	    find(filter) {
	        if (!filter) {
	            return [...this.#scripts];
	        }
	        return [...this.#scripts].filter((script) => {
	            if (filter.id !== undefined && filter.id === script.id) {
	                return true;
	            }
	            if (filter.targetId !== undefined &&
	                script.targetIds.has(filter.targetId)) {
	                return true;
	            }
	            if (filter.global !== undefined &&
	                // Global scripts have no contexts
	                ((filter.global && script.contexts === undefined) ||
	                    // Non global scripts always have contexts
	                    (!filter.global && script.contexts !== undefined))) {
	                return true;
	            }
	            return false;
	        });
	    }
	    add(preloadScript) {
	        this.#scripts.add(preloadScript);
	    }
	    /** Deletes all BiDi preload script entries that match the given filter. */
	    remove(filter) {
	        for (const preloadScript of this.find(filter)) {
	            this.#scripts.delete(preloadScript);
	        }
	    }
	};
	PreloadScriptStorage.PreloadScriptStorage = PreloadScriptStorage$1;
	
	return PreloadScriptStorage;
}

var RealmStorage = {};

var hasRequiredRealmStorage;

function requireRealmStorage () {
	if (hasRequiredRealmStorage) return RealmStorage;
	hasRequiredRealmStorage = 1;
	Object.defineProperty(RealmStorage, "__esModule", { value: true });
	RealmStorage.RealmStorage = undefined;
	const protocol_js_1 = requireProtocol();
	const WindowRealm_js_1 = requireWindowRealm();
	/** Container class for browsing realms. */
	let RealmStorage$1 = class RealmStorage {
	    /** Tracks handles and their realms sent to the client. */
	    #knownHandlesToRealmMap = new Map();
	    /** Map from realm ID to Realm. */
	    #realmMap = new Map();
	    get knownHandlesToRealmMap() {
	        return this.#knownHandlesToRealmMap;
	    }
	    addRealm(realm) {
	        this.#realmMap.set(realm.realmId, realm);
	    }
	    /** Finds all realms that match the given filter. */
	    findRealms(filter) {
	        return Array.from(this.#realmMap.values()).filter((realm) => {
	            if (filter.realmId !== undefined && filter.realmId !== realm.realmId) {
	                return false;
	            }
	            if (filter.browsingContextId !== undefined &&
	                !realm.associatedBrowsingContexts
	                    .map((browsingContext) => browsingContext.id)
	                    .includes(filter.browsingContextId)) {
	                return false;
	            }
	            if (filter.sandbox !== undefined &&
	                (!(realm instanceof WindowRealm_js_1.WindowRealm) || filter.sandbox !== realm.sandbox)) {
	                return false;
	            }
	            if (filter.executionContextId !== undefined &&
	                filter.executionContextId !== realm.executionContextId) {
	                return false;
	            }
	            if (filter.origin !== undefined && filter.origin !== realm.origin) {
	                return false;
	            }
	            if (filter.type !== undefined && filter.type !== realm.realmType) {
	                return false;
	            }
	            if (filter.cdpSessionId !== undefined &&
	                filter.cdpSessionId !== realm.cdpClient.sessionId) {
	                return false;
	            }
	            return true;
	        });
	    }
	    findRealm(filter) {
	        const maybeRealms = this.findRealms(filter);
	        if (maybeRealms.length !== 1) {
	            return undefined;
	        }
	        return maybeRealms[0];
	    }
	    /** Gets the only realm that matches the given filter, if any, otherwise throws. */
	    getRealm(filter) {
	        const maybeRealm = this.findRealm(filter);
	        if (maybeRealm === undefined) {
	            throw new protocol_js_1.NoSuchFrameException(`Realm ${JSON.stringify(filter)} not found`);
	        }
	        return maybeRealm;
	    }
	    /** Deletes all realms that match the given filter. */
	    deleteRealms(filter) {
	        this.findRealms(filter).map((realm) => {
	            realm.dispose();
	            this.#realmMap.delete(realm.realmId);
	            Array.from(this.knownHandlesToRealmMap.entries())
	                .filter(([, r]) => r === realm.realmId)
	                .map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
	        });
	    }
	};
	RealmStorage.RealmStorage = RealmStorage$1;
	
	return RealmStorage;
}

var EventManager = {};

var Buffer$1 = {};

var hasRequiredBuffer;

function requireBuffer () {
	if (hasRequiredBuffer) return Buffer$1;
	hasRequiredBuffer = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(Buffer$1, "__esModule", { value: true });
	Buffer$1.Buffer = undefined;
	/** Implements a FIFO buffer with a fixed size. */
	class Buffer {
	    #capacity;
	    #entries = [];
	    #onItemRemoved;
	    /**
	     * @param capacity The buffer capacity.
	     * @param onItemRemoved Delegate called for each removed element.
	     */
	    constructor(capacity, onItemRemoved) {
	        this.#capacity = capacity;
	        this.#onItemRemoved = onItemRemoved;
	    }
	    get() {
	        return this.#entries;
	    }
	    add(value) {
	        this.#entries.push(value);
	        while (this.#entries.length > this.#capacity) {
	            const item = this.#entries.shift();
	            if (item !== undefined) {
	                this.#onItemRemoved?.(item);
	            }
	        }
	    }
	}
	Buffer$1.Buffer = Buffer;
	
	return Buffer$1;
}

var DefaultMap = {};

var hasRequiredDefaultMap;

function requireDefaultMap () {
	if (hasRequiredDefaultMap) return DefaultMap;
	hasRequiredDefaultMap = 1;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(DefaultMap, "__esModule", { value: true });
	DefaultMap.DefaultMap = undefined;
	/**
	 * A subclass of Map whose functionality is almost the same as its parent
	 * except for the fact that DefaultMap never returns undefined. It provides a
	 * default value for keys that do not exist.
	 */
	let DefaultMap$1 = class DefaultMap extends Map {
	    /** The default value to return whenever a key is not present in the map. */
	    #getDefaultValue;
	    constructor(getDefaultValue, entries) {
	        super(entries);
	        this.#getDefaultValue = getDefaultValue;
	    }
	    get(key) {
	        if (!this.has(key)) {
	            this.set(key, this.#getDefaultValue(key));
	        }
	        return super.get(key);
	    }
	};
	DefaultMap.DefaultMap = DefaultMap$1;
	
	return DefaultMap;
}

var DistinctValues = {};

var hasRequiredDistinctValues;

function requireDistinctValues () {
	if (hasRequiredDistinctValues) return DistinctValues;
	hasRequiredDistinctValues = 1;
	/*
	 * Copyright 2024 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(DistinctValues, "__esModule", { value: true });
	DistinctValues.distinctValues = distinctValues;
	DistinctValues.deterministicJSONStringify = deterministicJSONStringify;
	/**
	 * Returns an array of distinct values. Order is not guaranteed.
	 * @param values - The values to filter. Should be JSON-serializable.
	 * @return - An array of distinct values.
	 */
	function distinctValues(values) {
	    const map = new Map();
	    for (const value of values) {
	        map.set(deterministicJSONStringify(value), value);
	    }
	    return Array.from(map.values());
	}
	/**
	 * Returns a stringified version of the object with keys sorted. This is required to
	 * ensure that the stringified version of an object is deterministic independent of the
	 * order of keys.
	 * @param obj
	 * @return {string}
	 */
	function deterministicJSONStringify(obj) {
	    return JSON.stringify(normalizeObject(obj));
	}
	function normalizeObject(obj) {
	    if (obj === undefined ||
	        obj === null ||
	        Array.isArray(obj) ||
	        typeof obj !== 'object') {
	        return obj;
	    }
	    // Copy the original object key and values to a new object in sorted order.
	    const newObj = {};
	    for (const key of Object.keys(obj).sort()) {
	        const value = obj[key];
	        newObj[key] = normalizeObject(value); // Recursively sort nested objects
	    }
	    return newObj;
	}
	
	return DistinctValues;
}

var IdWrapper = {};

var hasRequiredIdWrapper;

function requireIdWrapper () {
	if (hasRequiredIdWrapper) return IdWrapper;
	hasRequiredIdWrapper = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(IdWrapper, "__esModule", { value: true });
	IdWrapper.IdWrapper = undefined;
	/**
	 * Creates an object with a positive unique incrementing id.
	 */
	let IdWrapper$1 = class IdWrapper {
	    static #counter = 0;
	    #id;
	    constructor() {
	        this.#id = ++IdWrapper.#counter;
	    }
	    get id() {
	        return this.#id;
	    }
	};
	IdWrapper.IdWrapper = IdWrapper$1;
	
	return IdWrapper;
}

var events = {};

var hasRequiredEvents;

function requireEvents () {
	if (hasRequiredEvents) return events;
	hasRequiredEvents = 1;
	Object.defineProperty(events, "__esModule", { value: true });
	events.isCdpEvent = isCdpEvent;
	events.isDeprecatedCdpEvent = isDeprecatedCdpEvent;
	events.assertSupportedEvent = assertSupportedEvent;
	/**
	 * Copyright 2023 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const protocol_js_1 = requireProtocol();
	/**
	 * Returns true if the given event is a CDP event.
	 * @see https://chromedevtools.github.io/devtools-protocol/
	 */
	function isCdpEvent(name) {
	    return (name.split('.').at(0)?.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.Cdp) ?? false);
	}
	/**
	 * Returns true if the given event is a deprecated CDP event.
	 * @see https://chromedevtools.github.io/devtools-protocol/
	 */
	function isDeprecatedCdpEvent(name) {
	    return (name.split('.').at(0)?.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.DeprecatedCdp) ??
	        false);
	}
	/**
	 * Asserts that the given event is known to BiDi or BiDi+, or throws otherwise.
	 */
	function assertSupportedEvent(name) {
	    if (!protocol_js_1.ChromiumBidi.EVENT_NAMES.has(name) &&
	        !isCdpEvent(name) &&
	        !isDeprecatedCdpEvent(name)) {
	        throw new protocol_js_1.InvalidArgumentException(`Unknown event: ${name}`);
	    }
	}
	
	return events;
}

var SubscriptionManager = {};

var hasRequiredSubscriptionManager;

function requireSubscriptionManager () {
	if (hasRequiredSubscriptionManager) return SubscriptionManager;
	hasRequiredSubscriptionManager = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(SubscriptionManager, "__esModule", { value: true });
	SubscriptionManager.SubscriptionManager = undefined;
	SubscriptionManager.cartesianProduct = cartesianProduct;
	SubscriptionManager.unrollEvents = unrollEvents;
	const protocol_js_1 = requireProtocol();
	const events_js_1 = requireEvents();
	/**
	 * Returns the cartesian product of the given arrays.
	 *
	 * Example:
	 *   cartesian([1, 2], ['a', 'b']); => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	 */
	function cartesianProduct(...a) {
	    return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
	}
	/** Expands "AllEvents" events into atomic events. */
	function unrollEvents(events) {
	    const allEvents = new Set();
	    function addEvents(events) {
	        for (const event of events) {
	            allEvents.add(event);
	        }
	    }
	    for (const event of events) {
	        switch (event) {
	            case protocol_js_1.ChromiumBidi.BiDiModule.Bluetooth:
	                addEvents(Object.values(protocol_js_1.ChromiumBidi.Bluetooth.EventNames));
	                break;
	            case protocol_js_1.ChromiumBidi.BiDiModule.BrowsingContext:
	                addEvents(Object.values(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames));
	                break;
	            case protocol_js_1.ChromiumBidi.BiDiModule.Log:
	                addEvents(Object.values(protocol_js_1.ChromiumBidi.Log.EventNames));
	                break;
	            case protocol_js_1.ChromiumBidi.BiDiModule.Network:
	                addEvents(Object.values(protocol_js_1.ChromiumBidi.Network.EventNames));
	                break;
	            case protocol_js_1.ChromiumBidi.BiDiModule.Script:
	                addEvents(Object.values(protocol_js_1.ChromiumBidi.Script.EventNames));
	                break;
	            default:
	                allEvents.add(event);
	        }
	    }
	    return [...allEvents.values()];
	}
	let SubscriptionManager$1 = class SubscriptionManager {
	    #subscriptionPriority = 0;
	    // BrowsingContext `null` means the event has subscription across all the
	    // browsing contexts.
	    // Channel `null` means no `channel` should be added.
	    #channelToContextToEventMap = new Map();
	    #browsingContextStorage;
	    constructor(browsingContextStorage) {
	        this.#browsingContextStorage = browsingContextStorage;
	    }
	    getChannelsSubscribedToEvent(eventMethod, contextId) {
	        const prioritiesAndChannels = Array.from(this.#channelToContextToEventMap.keys())
	            .map((channel) => ({
	            priority: this.#getEventSubscriptionPriorityForChannel(eventMethod, contextId, channel),
	            channel,
	        }))
	            .filter(({ priority }) => priority !== null);
	        // Sort channels by priority.
	        return prioritiesAndChannels
	            .sort((a, b) => a.priority - b.priority)
	            .map(({ channel }) => channel);
	    }
	    #getEventSubscriptionPriorityForChannel(eventMethod, contextId, channel) {
	        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
	        if (contextToEventMap === undefined) {
	            return null;
	        }
	        const maybeTopLevelContextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
	        // `null` covers global subscription.
	        const relevantContexts = [...new Set([null, maybeTopLevelContextId])];
	        // Get all the subscription priorities.
	        const priorities = relevantContexts
	            .map((context) => {
	            // Get the priority for exact event name
	            const priority = contextToEventMap.get(context)?.get(eventMethod);
	            // For CDP we can't provide specific event name when subscribing
	            // to the module directly.
	            // Because of that we need to see event `cdp` exists in the map.
	            if ((0, events_js_1.isCdpEvent)(eventMethod)) {
	                const cdpPriority = contextToEventMap
	                    .get(context)
	                    ?.get(protocol_js_1.ChromiumBidi.BiDiModule.Cdp);
	                // If we subscribe to the event directly and `cdp` module as well
	                // priority will be different we take minimal priority
	                return priority && cdpPriority
	                    ? Math.min(priority, cdpPriority)
	                    : // At this point we know that we have subscribed
	                        // to only one of the two
	                        (priority ?? cdpPriority);
	            }
	            // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844.
	            if ((0, events_js_1.isDeprecatedCdpEvent)(eventMethod)) {
	                const cdpPriority = contextToEventMap
	                    .get(context)
	                    ?.get(protocol_js_1.ChromiumBidi.BiDiModule.DeprecatedCdp);
	                // If we subscribe to the event directly and `cdp` module as well
	                // priority will be different we take minimal priority
	                return priority && cdpPriority
	                    ? Math.min(priority, cdpPriority)
	                    : // At this point we know that we have subscribed
	                        // to only one of the two
	                        (priority ?? cdpPriority);
	            }
	            return priority;
	        })
	            .filter((p) => p !== undefined);
	        if (priorities.length === 0) {
	            // Not subscribed, return null.
	            return null;
	        }
	        // Return minimal priority.
	        return Math.min(...priorities);
	    }
	    /**
	     * @param module BiDi+ module
	     * @param contextId `null` == globally subscribed
	     *
	     * @returns
	     */
	    isSubscribedTo(moduleOrEvent, contextId = null) {
	        const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(contextId);
	        for (const browserContextToEventMap of this.#channelToContextToEventMap.values()) {
	            for (const [id, eventMap] of browserContextToEventMap.entries()) {
	                // Not subscribed to this context or globally
	                if (topLevelContext !== id && id !== null) {
	                    continue;
	                }
	                for (const event of eventMap.keys()) {
	                    // This also covers the `cdp` case where
	                    // we don't unroll the event names
	                    if (
	                    // Event explicitly subscribed
	                    event === moduleOrEvent ||
	                        // Event subscribed via module
	                        event === moduleOrEvent.split('.').at(0) ||
	                        // Event explicitly subscribed compared to module
	                        event.split('.').at(0) === moduleOrEvent) {
	                        return true;
	                    }
	                }
	            }
	        }
	        return false;
	    }
	    /**
	     * Subscribes to event in the given context and channel.
	     * @param {EventNames} event
	     * @param {BrowsingContext.BrowsingContext | null} contextId
	     * @param {BidiPlusChannel} channel
	     * @return {SubscriptionItem[]} List of
	     * subscriptions. If the event is a whole module, it will return all the specific
	     * events. If the contextId is null, it will return all the top-level contexts which were
	     * not subscribed before the command.
	     */
	    subscribe(event, contextId, channel) {
	        // All the subscriptions are handled on the top-level contexts.
	        contextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
	        // Check if subscribed event is a whole module
	        switch (event) {
	            case protocol_js_1.ChromiumBidi.BiDiModule.BrowsingContext:
	                return Object.values(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames)
	                    .map((specificEvent) => this.subscribe(specificEvent, contextId, channel))
	                    .flat();
	            case protocol_js_1.ChromiumBidi.BiDiModule.Log:
	                return Object.values(protocol_js_1.ChromiumBidi.Log.EventNames)
	                    .map((specificEvent) => this.subscribe(specificEvent, contextId, channel))
	                    .flat();
	            case protocol_js_1.ChromiumBidi.BiDiModule.Network:
	                return Object.values(protocol_js_1.ChromiumBidi.Network.EventNames)
	                    .map((specificEvent) => this.subscribe(specificEvent, contextId, channel))
	                    .flat();
	            case protocol_js_1.ChromiumBidi.BiDiModule.Script:
	                return Object.values(protocol_js_1.ChromiumBidi.Script.EventNames)
	                    .map((specificEvent) => this.subscribe(specificEvent, contextId, channel))
	                    .flat();
	            case protocol_js_1.ChromiumBidi.BiDiModule.Bluetooth:
	                return Object.values(protocol_js_1.ChromiumBidi.Bluetooth.EventNames)
	                    .map((specificEvent) => this.subscribe(specificEvent, contextId, channel))
	                    .flat();
	            // Intentionally left empty.
	        }
	        if (!this.#channelToContextToEventMap.has(channel)) {
	            this.#channelToContextToEventMap.set(channel, new Map());
	        }
	        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
	        if (!contextToEventMap.has(contextId)) {
	            contextToEventMap.set(contextId, new Map());
	        }
	        const eventMap = contextToEventMap.get(contextId);
	        const affectedContextIds = (contextId === null
	            ? this.#browsingContextStorage.getTopLevelContexts().map((c) => c.id)
	            : [contextId])
	            // There can be contexts that are already subscribed to the event. Do not include
	            // them to the output.
	            .filter((contextId) => !this.isSubscribedTo(event, contextId));
	        if (!eventMap.has(event)) {
	            // Add subscription only if it's not already subscribed.
	            eventMap.set(event, this.#subscriptionPriority++);
	        }
	        return affectedContextIds.map((contextId) => ({
	            event,
	            contextId,
	        }));
	    }
	    /**
	     * Unsubscribes atomically from all events in the given contexts and channel.
	     */
	    unsubscribeAll(events, contextIds, channel) {
	        // Assert all contexts are known.
	        for (const contextId of contextIds) {
	            if (contextId !== null) {
	                this.#browsingContextStorage.getContext(contextId);
	            }
	        }
	        const eventContextPairs = cartesianProduct(unrollEvents(events), contextIds);
	        // Assert all unsubscriptions are valid.
	        // If any of the unsubscriptions are invalid, do not unsubscribe from anything.
	        eventContextPairs
	            .map(([event, contextId]) => this.#checkUnsubscribe(event, contextId, channel))
	            .forEach((unsubscribe) => unsubscribe());
	    }
	    /**
	     * Unsubscribes from the event in the given context and channel.
	     * Syntactic sugar for "unsubscribeAll".
	     */
	    unsubscribe(eventName, contextId, channel) {
	        this.unsubscribeAll([eventName], [contextId], channel);
	    }
	    #checkUnsubscribe(event, contextId, channel) {
	        // All the subscriptions are handled on the top-level contexts.
	        contextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
	        if (!this.#channelToContextToEventMap.has(channel)) {
	            throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? 'null' : contextId}. No subscription found.`);
	        }
	        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
	        if (!contextToEventMap.has(contextId)) {
	            throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? 'null' : contextId}. No subscription found.`);
	        }
	        const eventMap = contextToEventMap.get(contextId);
	        if (!eventMap.has(event)) {
	            throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? 'null' : contextId}. No subscription found.`);
	        }
	        return () => {
	            eventMap.delete(event);
	            // Clean up maps if empty.
	            if (eventMap.size === 0) {
	                contextToEventMap.delete(event);
	            }
	            if (contextToEventMap.size === 0) {
	                this.#channelToContextToEventMap.delete(channel);
	            }
	        };
	    }
	};
	SubscriptionManager.SubscriptionManager = SubscriptionManager$1;
	
	return SubscriptionManager;
}

var hasRequiredEventManager;

function requireEventManager () {
	if (hasRequiredEventManager) return EventManager;
	hasRequiredEventManager = 1;
	/**
	 * Copyright 2022 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var _a;
	Object.defineProperty(EventManager, "__esModule", { value: true });
	EventManager.EventManager = undefined;
	const protocol_js_1 = requireProtocol();
	const Buffer_js_1 = requireBuffer();
	const DefaultMap_js_1 = requireDefaultMap();
	const DistinctValues_js_1 = requireDistinctValues();
	const EventEmitter_js_1 = requireEventEmitter();
	const IdWrapper_js_1 = requireIdWrapper();
	const OutgoingMessage_js_1 = requireOutgoingMessage();
	const events_js_1 = requireEvents();
	const SubscriptionManager_js_1 = requireSubscriptionManager();
	class EventWrapper {
	    #idWrapper = new IdWrapper_js_1.IdWrapper();
	    #contextId;
	    #event;
	    constructor(event, contextId) {
	        this.#event = event;
	        this.#contextId = contextId;
	    }
	    get id() {
	        return this.#idWrapper.id;
	    }
	    get contextId() {
	        return this.#contextId;
	    }
	    get event() {
	        return this.#event;
	    }
	}
	/**
	 * Maps event name to a desired buffer length.
	 */
	const eventBufferLength = new Map([[protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
	let EventManager$1 = class EventManager extends EventEmitter_js_1.EventEmitter {
	    /**
	     * Maps event name to a set of contexts where this event already happened.
	     * Needed for getting buffered events from all the contexts in case of
	     * subscripting to all contexts.
	     */
	    #eventToContextsMap = new DefaultMap_js_1.DefaultMap(() => new Set());
	    /**
	     * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
	     * during subscription. Channel-agnostic.
	     */
	    #eventBuffers = new Map();
	    /**
	     * Maps `eventName` + `browsingContext` to  Map of channel to last id
	     * Used to avoid sending duplicated events when user
	     * subscribes -> unsubscribes -> subscribes.
	     */
	    #lastMessageSent = new Map();
	    #subscriptionManager;
	    #browsingContextStorage;
	    /**
	     * Map of event name to hooks to be called when client is subscribed to the event.
	     */
	    #subscribeHooks;
	    constructor(browsingContextStorage) {
	        super();
	        this.#browsingContextStorage = browsingContextStorage;
	        this.#subscriptionManager = new SubscriptionManager_js_1.SubscriptionManager(browsingContextStorage);
	        this.#subscribeHooks = new DefaultMap_js_1.DefaultMap(() => []);
	    }
	    get subscriptionManager() {
	        return this.#subscriptionManager;
	    }
	    /**
	     * Returns consistent key to be used to access value maps.
	     */
	    static #getMapKey(eventName, browsingContext) {
	        return JSON.stringify({ eventName, browsingContext });
	    }
	    addSubscribeHook(event, hook) {
	        this.#subscribeHooks.get(event).push(hook);
	    }
	    registerEvent(event, contextId) {
	        this.registerPromiseEvent(Promise.resolve({
	            kind: 'success',
	            value: event,
	        }), contextId, event.method);
	    }
	    registerPromiseEvent(event, contextId, eventName) {
	        const eventWrapper = new EventWrapper(event, contextId);
	        const sortedChannels = this.#subscriptionManager.getChannelsSubscribedToEvent(eventName, contextId);
	        this.#bufferEvent(eventWrapper, eventName);
	        // Send events to channels in the subscription priority.
	        for (const channel of sortedChannels) {
	            this.emit("event" /* EventManagerEvents.Event */, {
	                message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
	                event: eventName,
	            });
	            this.#markEventSent(eventWrapper, channel, eventName);
	        }
	    }
	    async subscribe(eventNames, contextIds, channel) {
	        for (const name of eventNames) {
	            (0, events_js_1.assertSupportedEvent)(name);
	        }
	        // First check if all the contexts are known.
	        for (const contextId of contextIds) {
	            if (contextId !== null) {
	                // Assert the context is known. Throw exception otherwise.
	                this.#browsingContextStorage.getContext(contextId);
	            }
	        }
	        // List of the subscription items that were actually added. Each contains a specific
	        // event and context. No module event (like "network") or global context subscription
	        // (like null) are included.
	        const addedSubscriptionItems = [];
	        for (const eventName of eventNames) {
	            for (const contextId of contextIds) {
	                addedSubscriptionItems.push(...this.#subscriptionManager.subscribe(eventName, contextId, channel));
	                for (const eventWrapper of this.#getBufferedEvents(eventName, contextId, channel)) {
	                    // The order of the events is important.
	                    this.emit("event" /* EventManagerEvents.Event */, {
	                        message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(eventWrapper.event, channel),
	                        event: eventName,
	                    });
	                    this.#markEventSent(eventWrapper, channel, eventName);
	                }
	            }
	        }
	        // Iterate over all new subscription items and call hooks if any. There can be
	        // duplicates, e.g. when subscribing to the whole module and some specific event in
	        // the same time ("network", "network.responseCompleted"). `distinctValues` guarantees
	        // that hooks are called only once per pair event + context.
	        (0, DistinctValues_js_1.distinctValues)(addedSubscriptionItems).forEach(({ contextId, event }) => {
	            this.#subscribeHooks.get(event).forEach((hook) => hook(contextId));
	        });
	        await this.toggleModulesIfNeeded();
	    }
	    async unsubscribe(eventNames, contextIds, channel) {
	        for (const name of eventNames) {
	            (0, events_js_1.assertSupportedEvent)(name);
	        }
	        this.#subscriptionManager.unsubscribeAll(eventNames, contextIds, channel);
	        await this.toggleModulesIfNeeded();
	    }
	    async toggleModulesIfNeeded() {
	        // TODO(1): Only update changed subscribers
	        // TODO(2): Enable for Worker Targets
	        await Promise.all(this.#browsingContextStorage.getAllContexts().map(async (context) => {
	            return await context.toggleModulesIfNeeded();
	        }));
	    }
	    clearBufferedEvents(contextId) {
	        for (const eventName of eventBufferLength.keys()) {
	            const bufferMapKey = _a.#getMapKey(eventName, contextId);
	            this.#eventBuffers.delete(bufferMapKey);
	        }
	    }
	    /**
	     * If the event is buffer-able, put it in the buffer.
	     */
	    #bufferEvent(eventWrapper, eventName) {
	        if (!eventBufferLength.has(eventName)) {
	            // Do nothing if the event is no buffer-able.
	            return;
	        }
	        const bufferMapKey = _a.#getMapKey(eventName, eventWrapper.contextId);
	        if (!this.#eventBuffers.has(bufferMapKey)) {
	            this.#eventBuffers.set(bufferMapKey, new Buffer_js_1.Buffer(eventBufferLength.get(eventName)));
	        }
	        this.#eventBuffers.get(bufferMapKey).add(eventWrapper);
	        // Add the context to the list of contexts having `eventName` events.
	        this.#eventToContextsMap.get(eventName).add(eventWrapper.contextId);
	    }
	    /**
	     * If the event is buffer-able, mark it as sent to the given contextId and channel.
	     */
	    #markEventSent(eventWrapper, channel, eventName) {
	        if (!eventBufferLength.has(eventName)) {
	            // Do nothing if the event is no buffer-able.
	            return;
	        }
	        const lastSentMapKey = _a.#getMapKey(eventName, eventWrapper.contextId);
	        const lastId = Math.max(this.#lastMessageSent.get(lastSentMapKey)?.get(channel) ?? 0, eventWrapper.id);
	        const channelMap = this.#lastMessageSent.get(lastSentMapKey);
	        if (channelMap) {
	            channelMap.set(channel, lastId);
	        }
	        else {
	            this.#lastMessageSent.set(lastSentMapKey, new Map([[channel, lastId]]));
	        }
	    }
	    /**
	     * Returns events which are buffered and not yet sent to the given channel events.
	     */
	    #getBufferedEvents(eventName, contextId, channel) {
	        const bufferMapKey = _a.#getMapKey(eventName, contextId);
	        const lastSentMessageId = this.#lastMessageSent.get(bufferMapKey)?.get(channel) ?? -Infinity;
	        const result = this.#eventBuffers
	            .get(bufferMapKey)
	            ?.get()
	            .filter((wrapper) => wrapper.id > lastSentMessageId) ?? [];
	        if (contextId === null) {
	            // For global subscriptions, events buffered in each context should be sent back.
	            Array.from(this.#eventToContextsMap.get(eventName).keys())
	                .filter((_contextId) => 
	            // Events without context are already in the result.
	            _contextId !== null &&
	                // Events from deleted contexts should not be sent.
	                this.#browsingContextStorage.hasContext(_contextId))
	                .map((_contextId) => this.#getBufferedEvents(eventName, _contextId, channel))
	                .forEach((events) => result.push(...events));
	        }
	        return result.sort((e1, e2) => e1.id - e2.id);
	    }
	};
	EventManager.EventManager = EventManager$1;
	_a = EventManager$1;
	
	return EventManager;
}

var hasRequiredBidiServer;

function requireBidiServer () {
	if (hasRequiredBidiServer) return BidiServer;
	hasRequiredBidiServer = 1;
	/**
	 * Copyright 2021 Google LLC.
	 * Copyright (c) Microsoft Corporation.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(BidiServer, "__esModule", { value: true });
	BidiServer.BidiServer = undefined;
	const EventEmitter_js_1 = requireEventEmitter();
	const log_js_1 = requireLog();
	const ProcessingQueue_js_1 = requireProcessingQueue();
	const CommandProcessor_js_1 = requireCommandProcessor();
	const BluetoothProcessor_js_1 = requireBluetoothProcessor();
	const CdpTargetManager_js_1 = requireCdpTargetManager();
	const BrowsingContextStorage_js_1 = requireBrowsingContextStorage();
	const NetworkStorage_js_1 = requireNetworkStorage();
	const PreloadScriptStorage_js_1 = requirePreloadScriptStorage();
	const RealmStorage_js_1 = requireRealmStorage();
	const EventManager_js_1 = requireEventManager();
	let BidiServer$1 = class BidiServer extends EventEmitter_js_1.EventEmitter {
	    #messageQueue;
	    #transport;
	    #commandProcessor;
	    #eventManager;
	    #browsingContextStorage = new BrowsingContextStorage_js_1.BrowsingContextStorage();
	    #realmStorage = new RealmStorage_js_1.RealmStorage();
	    #preloadScriptStorage = new PreloadScriptStorage_js_1.PreloadScriptStorage();
	    #bluetoothProcessor;
	    #logger;
	    #handleIncomingMessage = (message) => {
	        void this.#commandProcessor.processCommand(message).catch((error) => {
	            this.#logger?.(log_js_1.LogType.debugError, error);
	        });
	    };
	    #processOutgoingMessage = async (messageEntry) => {
	        const message = messageEntry.message;
	        if (messageEntry.channel !== null) {
	            message['channel'] = messageEntry.channel;
	        }
	        await this.#transport.sendMessage(message);
	    };
	    constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger) {
	        super();
	        this.#logger = logger;
	        this.#messageQueue = new ProcessingQueue_js_1.ProcessingQueue(this.#processOutgoingMessage, this.#logger);
	        this.#transport = bidiTransport;
	        this.#transport.setOnMessage(this.#handleIncomingMessage);
	        this.#eventManager = new EventManager_js_1.EventManager(this.#browsingContextStorage);
	        const networkStorage = new NetworkStorage_js_1.NetworkStorage(this.#eventManager, this.#browsingContextStorage, browserCdpClient, logger);
	        this.#bluetoothProcessor = new BluetoothProcessor_js_1.BluetoothProcessor(this.#eventManager, this.#browsingContextStorage);
	        this.#commandProcessor = new CommandProcessor_js_1.CommandProcessor(cdpConnection, browserCdpClient, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.#preloadScriptStorage, networkStorage, this.#bluetoothProcessor, parser, async (options) => {
	            // This is required to ignore certificate errors when service worker is fetched.
	            await browserCdpClient.sendCommand('Security.setIgnoreCertificateErrors', {
	                ignore: options.acceptInsecureCerts ?? false,
	            });
	            new CdpTargetManager_js_1.CdpTargetManager(cdpConnection, browserCdpClient, selfTargetId, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, networkStorage, this.#bluetoothProcessor, this.#preloadScriptStorage, defaultUserContextId, options?.['goog:prerenderingDisabled'] ?? false, options?.unhandledPromptBehavior, logger);
	            // Needed to get events about new targets.
	            await browserCdpClient.sendCommand('Target.setDiscoverTargets', {
	                discover: true,
	            });
	            // Needed to automatically attach to new targets.
	            await browserCdpClient.sendCommand('Target.setAutoAttach', {
	                autoAttach: true,
	                waitForDebuggerOnStart: true,
	                flatten: true,
	                // Browser session should attach to tab instead of the page, so that
	                // prerendering is not blocked.
	                filter: [
	                    {
	                        type: 'page',
	                        exclude: true,
	                    },
	                    {},
	                ],
	            });
	            await this.#topLevelContextsLoaded();
	        }, this.#logger);
	        this.#eventManager.on("event" /* EventManagerEvents.Event */, ({ message, event }) => {
	            this.emitOutgoingMessage(message, event);
	        });
	        this.#commandProcessor.on("response" /* CommandProcessorEvents.Response */, ({ message, event }) => {
	            this.emitOutgoingMessage(message, event);
	        });
	    }
	    /**
	     * Creates and starts BiDi Mapper instance.
	     */
	    static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, parser, logger) {
	        // The default context is not exposed in Target.getBrowserContexts but can
	        // be observed via Target.getTargets. To determine the default browser
	        // context, we check which one is mentioned in Target.getTargets and not in
	        // Target.getBrowserContexts.
	        const [{ browserContextIds }, { targetInfos }] = await Promise.all([
	            browserCdpClient.sendCommand('Target.getBrowserContexts'),
	            browserCdpClient.sendCommand('Target.getTargets'),
	        ]);
	        let defaultUserContextId = 'default';
	        for (const info of targetInfos) {
	            if (info.browserContextId &&
	                !browserContextIds.includes(info.browserContextId)) {
	                defaultUserContextId = info.browserContextId;
	                break;
	            }
	        }
	        const server = new BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger);
	        return server;
	    }
	    /**
	     * Sends BiDi message.
	     */
	    emitOutgoingMessage(messageEntry, event) {
	        this.#messageQueue.add(messageEntry, event);
	    }
	    close() {
	        this.#transport.close();
	    }
	    async #topLevelContextsLoaded() {
	        await Promise.all(this.#browsingContextStorage
	            .getTopLevelContexts()
	            .map((c) => c.lifecycleLoaded()));
	    }
	};
	BidiServer.BidiServer = BidiServer$1;
	
	return BidiServer;
}

var hasRequiredBidiMapper;

function requireBidiMapper () {
	if (hasRequiredBidiMapper) return BidiMapper;
	hasRequiredBidiMapper = 1;
	(function (exports) {
		/**
		 * Copyright 2022 Google LLC.
		 * Copyright (c) Microsoft Corporation.
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *     http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.OutgoingMessage = exports.EventEmitter = exports.BidiServer = undefined;
		/**
		 * @fileoverview The entry point to the BiDi Mapper namespace.
		 * Other modules should only access exports defined in this file.
		 * XXX: Add ESlint rule for this (https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md)
		 */
		var BidiServer_js_1 = requireBidiServer();
		Object.defineProperty(exports, "BidiServer", { enumerable: true, get: function () { return BidiServer_js_1.BidiServer; } });
		var EventEmitter_js_1 = requireEventEmitter();
		Object.defineProperty(exports, "EventEmitter", { enumerable: true, get: function () { return EventEmitter_js_1.EventEmitter; } });
		var OutgoingMessage_js_1 = requireOutgoingMessage();
		Object.defineProperty(exports, "OutgoingMessage", { enumerable: true, get: function () { return OutgoingMessage_js_1.OutgoingMessage; } });
		
	} (BidiMapper));
	return BidiMapper;
}

var BidiMapperExports = requireBidiMapper();

/**
 * @internal
 */
class BidiCdpSession extends CDPSession {
    static sessions = new Map();
    #detached = false;
    #connection;
    #sessionId = Deferred$1.create();
    frame;
    constructor(frame, sessionId) {
        super();
        this.frame = frame;
        if (!this.frame.page().browser().cdpSupported) {
            return;
        }
        const connection = this.frame.page().browser().connection;
        this.#connection = connection;
        if (sessionId) {
            this.#sessionId.resolve(sessionId);
            BidiCdpSession.sessions.set(sessionId, this);
        }
        else {
            (async () => {
                try {
                    const { result } = await connection.send('cdp.getSession', {
                        context: frame._id,
                    });
                    this.#sessionId.resolve(result.session);
                    BidiCdpSession.sessions.set(result.session, this);
                }
                catch (error) {
                    this.#sessionId.reject(error);
                }
            })();
        }
        // SAFETY: We never throw #sessionId.
        BidiCdpSession.sessions.set(this.#sessionId.value(), this);
    }
    connection() {
        return undefined;
    }
    async send(method, params, options) {
        if (this.#connection === undefined) {
            throw new UnsupportedOperation('CDP support is required for this feature. The current browser does not support CDP.');
        }
        if (this.#detached) {
            throw new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
        }
        const session = await this.#sessionId.valueOrThrow();
        const { result } = await this.#connection.send('cdp.sendCommand', {
            method: method,
            params: params,
            session,
        }, options?.timeout);
        return result.result;
    }
    async detach() {
        if (this.#connection === undefined ||
            this.#connection.closed ||
            this.#detached) {
            return;
        }
        try {
            await this.frame.client.send('Target.detachFromTarget', {
                sessionId: this.id(),
            });
        }
        finally {
            this.onClose();
        }
    }
    /**
     * @internal
     */
    onClose = () => {
        BidiCdpSession.sessions.delete(this.id());
        this.#detached = true;
    };
    id() {
        const value = this.#sessionId.value();
        return typeof value === 'string' ? value : '';
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const debugProtocolSend = debug('puppeteer:webDriverBiDi:SEND ►');
const debugProtocolReceive = debug('puppeteer:webDriverBiDi:RECV ◀');
/**
 * @internal
 */
class BidiConnection extends EventEmitter$1 {
    #url;
    #transport;
    #delay;
    #timeout = 0;
    #closed = false;
    #callbacks = new CallbackRegistry();
    #emitters = [];
    constructor(url, transport, delay = 0, timeout) {
        super();
        this.#url = url;
        this.#delay = delay;
        this.#timeout = timeout ?? 180_000;
        this.#transport = transport;
        this.#transport.onmessage = this.onMessage.bind(this);
        this.#transport.onclose = this.unbind.bind(this);
    }
    get closed() {
        return this.#closed;
    }
    get url() {
        return this.#url;
    }
    pipeTo(emitter) {
        this.#emitters.push(emitter);
    }
    emit(type, event) {
        for (const emitter of this.#emitters) {
            emitter.emit(type, event);
        }
        return super.emit(type, event);
    }
    send(method, params, timeout) {
        assert$1(!this.#closed, 'Protocol error: Connection closed.');
        return this.#callbacks.create(method, timeout ?? this.#timeout, id => {
            const stringifiedMessage = JSON.stringify({
                id,
                method,
                params,
            });
            debugProtocolSend(stringifiedMessage);
            this.#transport.send(stringifiedMessage);
        });
    }
    /**
     * @internal
     */
    async onMessage(message) {
        if (this.#delay) {
            await new Promise(f => {
                return setTimeout(f, this.#delay);
            });
        }
        debugProtocolReceive(message);
        const object = JSON.parse(message);
        if ('type' in object) {
            switch (object.type) {
                case 'success':
                    this.#callbacks.resolve(object.id, object);
                    return;
                case 'error':
                    if (object.id === null) {
                        break;
                    }
                    this.#callbacks.reject(object.id, createProtocolError(object), `${object.error}: ${object.message}`);
                    return;
                case 'event':
                    if (isCdpEvent(object)) {
                        BidiCdpSession.sessions
                            .get(object.params.session)
                            ?.emit(object.params.event, object.params.params);
                        return;
                    }
                    // SAFETY: We know the method and parameter still match here.
                    this.emit(object.method, object.params);
                    return;
            }
        }
        // Even if the response in not in BiDi protocol format but `id` is provided, reject
        // the callback. This can happen if the endpoint supports CDP instead of BiDi.
        if ('id' in object) {
            this.#callbacks.reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
        }
        debugError(object);
    }
    /**
     * Unbinds the connection, but keeps the transport open. Useful when the transport will
     * be reused by other connection e.g. with different protocol.
     * @internal
     */
    unbind() {
        if (this.#closed) {
            return;
        }
        this.#closed = true;
        // Both may still be invoked and produce errors
        this.#transport.onmessage = () => { };
        this.#transport.onclose = () => { };
        this.#callbacks.clear();
    }
    /**
     * Unbinds the connection and closes the transport.
     */
    dispose() {
        this.unbind();
        this.#transport.close();
    }
    getPendingProtocolErrors() {
        return this.#callbacks.getPendingProtocolErrors();
    }
}
/**
 * @internal
 */
function createProtocolError(object) {
    let message = `${object.error} ${object.message}`;
    if (object.stacktrace) {
        message += ` ${object.stacktrace}`;
    }
    return message;
}
function isCdpEvent(event) {
    return event.method.startsWith('cdp.');
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const bidiServerLogger = (prefix, ...args) => {
    debug(`bidi:${prefix}`)(args);
};
/**
 * @internal
 */
async function connectBidiOverCdp(cdp) {
    const transportBiDi = new NoOpTransport();
    const cdpConnectionAdapter = new CdpConnectionAdapter(cdp);
    const pptrTransport = {
        send(message) {
            // Forwards a BiDi command sent by Puppeteer to the input of the BidiServer.
            transportBiDi.emitMessage(JSON.parse(message));
        },
        close() {
            bidiServer.close();
            cdpConnectionAdapter.close();
            cdp.dispose();
        },
        onmessage(_message) {
            // The method is overridden by the Connection.
        },
    };
    transportBiDi.on('bidiResponse', (message) => {
        // Forwards a BiDi event sent by BidiServer to Puppeteer.
        pptrTransport.onmessage(JSON.stringify(message));
    });
    const pptrBiDiConnection = new BidiConnection(cdp.url(), pptrTransport, cdp.delay, cdp.timeout);
    const bidiServer = await BidiMapperExports.BidiServer.createAndStart(transportBiDi, cdpConnectionAdapter, cdpConnectionAdapter.browserClient(), 
    /* selfTargetId= */ '', undefined, bidiServerLogger);
    return pptrBiDiConnection;
}
/**
 * Manages CDPSessions for BidiServer.
 * @internal
 */
class CdpConnectionAdapter {
    #cdp;
    #adapters = new Map();
    #browserCdpConnection;
    constructor(cdp) {
        this.#cdp = cdp;
        this.#browserCdpConnection = new CDPClientAdapter(cdp);
    }
    browserClient() {
        return this.#browserCdpConnection;
    }
    getCdpClient(id) {
        const session = this.#cdp.session(id);
        if (!session) {
            throw new Error(`Unknown CDP session with id ${id}`);
        }
        if (!this.#adapters.has(session)) {
            const adapter = new CDPClientAdapter(session, id, this.#browserCdpConnection);
            this.#adapters.set(session, adapter);
            return adapter;
        }
        return this.#adapters.get(session);
    }
    close() {
        this.#browserCdpConnection.close();
        for (const adapter of this.#adapters.values()) {
            adapter.close();
        }
    }
}
/**
 * Wrapper on top of CDPSession/CDPConnection to satisfy CDP interface that
 * BidiServer needs.
 *
 * @internal
 */
class CDPClientAdapter extends BidiMapperExports.EventEmitter {
    #closed = false;
    #client;
    sessionId = undefined;
    #browserClient;
    constructor(client, sessionId, browserClient) {
        super();
        this.#client = client;
        this.sessionId = sessionId;
        this.#browserClient = browserClient;
        this.#client.on('*', this.#forwardMessage);
    }
    browserClient() {
        return this.#browserClient;
    }
    #forwardMessage = (method, event) => {
        this.emit(method, event);
    };
    async sendCommand(method, ...params) {
        if (this.#closed) {
            return;
        }
        try {
            return await this.#client.send(method, ...params);
        }
        catch (err) {
            if (this.#closed) {
                return;
            }
            throw err;
        }
    }
    close() {
        this.#client.off('*', this.#forwardMessage);
        this.#closed = true;
    }
    isCloseError(error) {
        return error instanceof TargetCloseError;
    }
}
/**
 * This transport is given to the BiDi server instance and allows Puppeteer
 * to send and receive commands to the BiDiServer.
 * @internal
 */
class NoOpTransport extends BidiMapperExports.EventEmitter {
    #onMessage = async (_m) => {
        return;
    };
    emitMessage(message) {
        void this.#onMessage(message);
    }
    setOnMessage(onMessage) {
        this.#onMessage = onMessage;
    }
    async sendMessage(message) {
        this.emit('bidiResponse', message);
    }
    close() {
        this.#onMessage = async (_m) => {
            return;
        };
    }
}

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$d = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$d = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let Navigation = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    return class Navigation extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$d(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(context) {
            const navigation = new Navigation(context);
            navigation.#initialize();
            return navigation;
        }
        #request = __runInitializers$d(this, _instanceExtraInitializers);
        #navigation;
        #browsingContext;
        #disposables = new DisposableStack();
        #id;
        constructor(context) {
            super();
            this.#browsingContext = context;
        }
        #initialize() {
            const browsingContextEmitter = this.#disposables.use(new EventEmitter$1(this.#browsingContext));
            browsingContextEmitter.once('closed', () => {
                this.emit('failed', {
                    url: this.#browsingContext.url,
                    timestamp: new Date(),
                });
                this.dispose();
            });
            browsingContextEmitter.on('request', ({ request }) => {
                if (request.navigation === undefined ||
                    // If a request with a navigation ID comes in, then the navigation ID is
                    // for this navigation.
                    !this.#matches(request.navigation)) {
                    return;
                }
                this.#request = request;
                this.emit('request', request);
                const requestEmitter = this.#disposables.use(new EventEmitter$1(this.#request));
                requestEmitter.on('redirect', request => {
                    this.#request = request;
                });
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.#session));
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.#browsingContext.id ||
                    this.#navigation !== undefined) {
                    return;
                }
                this.#navigation = Navigation.from(this.#browsingContext);
            });
            for (const eventName of [
                'browsingContext.domContentLoaded',
                'browsingContext.load',
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        info.navigation === null ||
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.dispose();
                });
            }
            for (const [eventName, event] of [
                ['browsingContext.fragmentNavigated', 'fragment'],
                ['browsingContext.navigationFailed', 'failed'],
                ['browsingContext.navigationAborted', 'aborted'],
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        // Note we don't check if `navigation` is null since `null` means the
                        // fragment navigated.
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.emit(event, {
                        url: info.url,
                        timestamp: new Date(info.timestamp),
                    });
                    this.dispose();
                });
            }
        }
        #matches(navigation) {
            if (this.#navigation !== undefined && !this.#navigation.disposed) {
                return false;
            }
            if (this.#id === undefined) {
                this.#id = navigation;
                return true;
            }
            return this.#id === navigation;
        }
        get #session() {
            return this.#browsingContext.userContext.browser.session;
        }
        get disposed() {
            return this.#disposables.disposed;
        }
        get request() {
            return this.#request;
        }
        get navigation() {
            return this.#navigation;
        }
        dispose() {
            this[disposeSymbol]();
        }
        [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$c = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$c = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _a$1;
/**
 * @internal
 */
let Realm = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _disown_decorators;
    let _callFunction_decorators;
    let _evaluate_decorators;
    let _resolveExecutionContextId_decorators;
    return class Realm extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$c(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$c(this, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: obj => "disown" in obj, get: obj => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$c(this, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: obj => "callFunction" in obj, get: obj => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$c(this, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: obj => "evaluate" in obj, get: obj => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$c(this, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: obj => "resolveExecutionContextId" in obj, get: obj => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #reason = __runInitializers$c(this, _instanceExtraInitializers);
        disposables = new DisposableStack();
        id;
        origin;
        executionContextId;
        constructor(id, origin) {
            super();
            this.id = id;
            this.origin = origin;
        }
        get disposed() {
            return this.#reason !== undefined;
        }
        get target() {
            return { realm: this.id };
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async disown(handles) {
            await this.session.send('script.disown', {
                target: this.target,
                handles,
            });
        }
        async callFunction(functionDeclaration, awaitPromise, options = {}) {
            const { result } = await this.session.send('script.callFunction', {
                functionDeclaration,
                awaitPromise,
                target: this.target,
                ...options,
            });
            return result;
        }
        async evaluate(expression, awaitPromise, options = {}) {
            const { result } = await this.session.send('script.evaluate', {
                expression,
                awaitPromise,
                target: this.target,
                ...options,
            });
            return result;
        }
        async resolveExecutionContextId() {
            if (!this.executionContextId) {
                const { result } = await this.session.connection.send('cdp.resolveRealm', { realm: this.id });
                this.executionContextId = result.executionContextId;
            }
            return this.executionContextId;
        }
        [(_dispose_decorators = [inertIfDisposed], _disown_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _callFunction_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _evaluate_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _resolveExecutionContextId_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Realm already destroyed, probably because all associated browsing contexts closed.';
            this.emit('destroyed', { reason: this.#reason });
            this.disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();
/**
 * @internal
 */
class WindowRealm extends Realm {
    static from(context, sandbox) {
        const realm = new WindowRealm(context, sandbox);
        realm.#initialize();
        return realm;
    }
    browsingContext;
    sandbox;
    #workers = new Map();
    constructor(context, sandbox) {
        super('', '');
        this.browsingContext = context;
        this.sandbox = sandbox;
    }
    #initialize() {
        const browsingContextEmitter = this.disposables.use(new EventEmitter$1(this.browsingContext));
        browsingContextEmitter.on('closed', ({ reason }) => {
            this.dispose(reason);
        });
        const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'window' ||
                info.context !== this.browsingContext.id ||
                info.sandbox !== this.sandbox) {
                return;
            }
            this.id = info.realm;
            this.origin = info.origin;
            this.executionContextId = undefined;
            this.emit('updated', this);
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
            realmEmitter.once('destroyed', () => {
                realmEmitter.removeAllListeners();
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
    }
    get session() {
        return this.browsingContext.userContext.browser.session;
    }
    get target() {
        return { context: this.browsingContext.id, sandbox: this.sandbox };
    }
}
/**
 * @internal
 */
class DedicatedWorkerRealm extends Realm {
    static from(owner, id, origin) {
        const realm = new _a$1(owner, id, origin);
        realm.#initialize();
        return realm;
    }
    #workers = new Map();
    owners;
    constructor(owner, id, origin) {
        super(id, origin);
        this.owners = new Set([owner]);
    }
    #initialize() {
        const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
        sessionEmitter.on('script.realmDestroyed', info => {
            if (info.realm !== this.id) {
                return;
            }
            this.dispose('Realm already destroyed.');
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = _a$1.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
            realmEmitter.once('destroyed', () => {
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
    }
    get session() {
        // SAFETY: At least one owner will exist.
        return this.owners.values().next().value.session;
    }
}
_a$1 = DedicatedWorkerRealm;
/**
 * @internal
 */
class SharedWorkerRealm extends Realm {
    static from(browser, id, origin) {
        const realm = new SharedWorkerRealm(browser, id, origin);
        realm.#initialize();
        return realm;
    }
    #workers = new Map();
    browser;
    constructor(browser, id, origin) {
        super(id, origin);
        this.browser = browser;
    }
    #initialize() {
        const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
        sessionEmitter.on('script.realmDestroyed', info => {
            if (info.realm !== this.id) {
                return;
            }
            this.dispose('Realm already destroyed.');
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
            realmEmitter.once('destroyed', () => {
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
    }
    get session() {
        return this.browser.session;
    }
}

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$b = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$b = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let Request = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    return class Request extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$b(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browsingContext, event) {
            const request = new Request(browsingContext, event);
            request.#initialize();
            return request;
        }
        #error = __runInitializers$b(this, _instanceExtraInitializers);
        #redirect;
        #response;
        #browsingContext;
        #disposables = new DisposableStack();
        #event;
        constructor(browsingContext, event) {
            super();
            this.#browsingContext = browsingContext;
            this.#event = event;
        }
        #initialize() {
            const browsingContextEmitter = this.#disposables.use(new EventEmitter$1(this.#browsingContext));
            browsingContextEmitter.once('closed', ({ reason }) => {
                this.#error = reason;
                this.emit('error', this.#error);
                this.dispose();
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.#session));
            sessionEmitter.on('network.beforeRequestSent', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    event.redirectCount !== this.#event.redirectCount + 1) {
                    return;
                }
                this.#redirect = Request.from(this.#browsingContext, event);
                this.emit('redirect', this.#redirect);
                this.dispose();
            });
            sessionEmitter.on('network.authRequired', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    // Don't try to authenticate for events that are not blocked
                    !event.isBlocked) {
                    return;
                }
                this.emit('authenticate', undefined);
            });
            sessionEmitter.on('network.fetchError', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    this.#event.redirectCount !== event.redirectCount) {
                    return;
                }
                this.#error = event.errorText;
                this.emit('error', this.#error);
                this.dispose();
            });
            sessionEmitter.on('network.responseCompleted', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    this.#event.redirectCount !== event.redirectCount) {
                    return;
                }
                this.#response = event.response;
                this.#event.request.timings = event.request.timings;
                this.emit('success', this.#response);
                // In case this is a redirect.
                if (this.#response.status >= 300 && this.#response.status < 400) {
                    return;
                }
                this.dispose();
            });
        }
        get #session() {
            return this.#browsingContext.userContext.browser.session;
        }
        get disposed() {
            return this.#disposables.disposed;
        }
        get error() {
            return this.#error;
        }
        get headers() {
            return this.#event.request.headers;
        }
        get id() {
            return this.#event.request.request;
        }
        get initiator() {
            return this.#event.initiator;
        }
        get method() {
            return this.#event.request.method;
        }
        get navigation() {
            return this.#event.navigation ?? undefined;
        }
        get redirect() {
            return this.#redirect;
        }
        get lastRedirect() {
            let redirect = this.#redirect;
            while (redirect) {
                if (redirect && !redirect.#redirect) {
                    return redirect;
                }
                redirect = redirect.#redirect;
            }
            return redirect;
        }
        get response() {
            return this.#response;
        }
        get url() {
            return this.#event.request.url;
        }
        get isBlocked() {
            return this.#event.isBlocked;
        }
        get resourceType() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:resourceType'] ?? undefined;
        }
        get postData() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:postData'] ?? undefined;
        }
        get hasPostData() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:hasPostData'] ?? false;
        }
        async continueRequest({ url, method, headers, cookies, body, }) {
            await this.#session.send('network.continueRequest', {
                request: this.id,
                url,
                method,
                headers,
                body,
                cookies,
            });
        }
        async failRequest() {
            await this.#session.send('network.failRequest', {
                request: this.id,
            });
        }
        async provideResponse({ statusCode, reasonPhrase, headers, body, }) {
            await this.#session.send('network.provideResponse', {
                request: this.id,
                statusCode,
                reasonPhrase,
                headers,
                body,
            });
        }
        async continueWithAuth(parameters) {
            if (parameters.action === 'provideCredentials') {
                await this.#session.send('network.continueWithAuth', {
                    request: this.id,
                    action: parameters.action,
                    credentials: parameters.credentials,
                });
            }
            else {
                await this.#session.send('network.continueWithAuth', {
                    request: this.id,
                    action: parameters.action,
                });
            }
        }
        dispose() {
            this[disposeSymbol]();
        }
        [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
        timing() {
            return this.#event.request.timings;
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$a = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$a = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let UserPrompt = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _handle_decorators;
    return class UserPrompt extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$a(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$a(this, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: obj => "handle" in obj, get: obj => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browsingContext, info) {
            const userPrompt = new UserPrompt(browsingContext, info);
            userPrompt.#initialize();
            return userPrompt;
        }
        #reason = __runInitializers$a(this, _instanceExtraInitializers);
        #result;
        #disposables = new DisposableStack();
        browsingContext;
        info;
        constructor(context, info) {
            super();
            this.browsingContext = context;
            this.info = info;
        }
        #initialize() {
            const browserContextEmitter = this.#disposables.use(new EventEmitter$1(this.browsingContext));
            browserContextEmitter.once('closed', ({ reason }) => {
                this.dispose(`User prompt already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.#session));
            sessionEmitter.on('browsingContext.userPromptClosed', parameters => {
                if (parameters.context !== this.browsingContext.id) {
                    return;
                }
                this.#result = parameters;
                this.emit('handled', parameters);
                this.dispose('User prompt already handled.');
            });
        }
        get #session() {
            return this.browsingContext.userContext.browser.session;
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get handled() {
            if (this.info.handler === "accept" /* Bidi.Session.UserPromptHandlerType.Accept */ ||
                this.info.handler === "dismiss" /* Bidi.Session.UserPromptHandlerType.Dismiss */) {
                return true;
            }
            return this.#result !== undefined;
        }
        get result() {
            return this.#result;
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async handle(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                ...options,
                context: this.info.context,
            });
            // SAFETY: `handled` is triggered before the above promise resolved.
            return this.#result;
        }
        [(_dispose_decorators = [inertIfDisposed], _handle_decorators = [throwIfDisposed(prompt => {
                // SAFETY: Disposal implies this exists.
                return prompt.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'User prompt already closed, probably because the associated browsing context was destroyed.';
            this.emit('closed', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$9 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$9 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let BrowsingContext = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _activate_decorators;
    let _captureScreenshot_decorators;
    let _close_decorators;
    let _traverseHistory_decorators;
    let _navigate_decorators;
    let _reload_decorators;
    let _setCacheBehavior_decorators;
    let _print_decorators;
    let _handleUserPrompt_decorators;
    let _setViewport_decorators;
    let _performActions_decorators;
    let _releaseActions_decorators;
    let _createWindowRealm_decorators;
    let _addPreloadScript_decorators;
    let _addIntercept_decorators;
    let _removePreloadScript_decorators;
    let _getCookies_decorators;
    let _setCookie_decorators;
    let _setFiles_decorators;
    let _subscribe_decorators;
    let _addInterception_decorators;
    let _deleteCookie_decorators;
    let _locateNodes_decorators;
    return class BrowsingContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _deleteCookie_decorators = [throwIfDisposed(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            _locateNodes_decorators = [throwIfDisposed(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            __esDecorate$9(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: obj => "activate" in obj, get: obj => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: obj => "captureScreenshot" in obj, get: obj => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: obj => "traverseHistory" in obj, get: obj => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: obj => "navigate" in obj, get: obj => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: obj => "reload" in obj, get: obj => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _setCacheBehavior_decorators, { kind: "method", name: "setCacheBehavior", static: false, private: false, access: { has: obj => "setCacheBehavior" in obj, get: obj => obj.setCacheBehavior }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: obj => "print" in obj, get: obj => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: obj => "handleUserPrompt" in obj, get: obj => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: obj => "setViewport" in obj, get: obj => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: obj => "performActions" in obj, get: obj => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: obj => "releaseActions" in obj, get: obj => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: obj => "createWindowRealm" in obj, get: obj => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: obj => "addIntercept" in obj, get: obj => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: obj => "getCookies" in obj, get: obj => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: obj => "setCookie" in obj, get: obj => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: obj => "addInterception" in obj, get: obj => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: obj => "deleteCookie" in obj, get: obj => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$9(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(userContext, parent, id, url, originalOpener) {
            const browsingContext = new BrowsingContext(userContext, parent, id, url, originalOpener);
            browsingContext.#initialize();
            return browsingContext;
        }
        #navigation = __runInitializers$9(this, _instanceExtraInitializers);
        #reason;
        #url;
        #children = new Map();
        #disposables = new DisposableStack();
        #realms = new Map();
        #requests = new Map();
        defaultRealm;
        id;
        parent;
        userContext;
        originalOpener;
        constructor(context, parent, id, url, originalOpener) {
            super();
            this.#url = url;
            this.id = id;
            this.parent = parent;
            this.userContext = context;
            this.originalOpener = originalOpener;
            this.defaultRealm = this.#createWindowRealm();
        }
        #initialize() {
            const userContextEmitter = this.#disposables.use(new EventEmitter$1(this.userContext));
            userContextEmitter.once('closed', ({ reason }) => {
                this.dispose(`Browsing context already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.#session));
            sessionEmitter.on('browsingContext.contextCreated', info => {
                if (info.parent !== this.id) {
                    return;
                }
                const browsingContext = BrowsingContext.from(this.userContext, this, info.context, info.url, info.originalOpener);
                this.#children.set(info.context, browsingContext);
                const browsingContextEmitter = this.#disposables.use(new EventEmitter$1(browsingContext));
                browsingContextEmitter.once('closed', () => {
                    browsingContextEmitter.removeAllListeners();
                    this.#children.delete(browsingContext.id);
                });
                this.emit('browsingcontext', { browsingContext });
            });
            sessionEmitter.on('browsingContext.contextDestroyed', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.dispose('Browsing context already closed.');
            });
            sessionEmitter.on('browsingContext.historyUpdated', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('historyUpdated', undefined);
            });
            sessionEmitter.on('browsingContext.domContentLoaded', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('DOMContentLoaded', undefined);
            });
            sessionEmitter.on('browsingContext.load', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('load', undefined);
            });
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.id) {
                    return;
                }
                // Note: we should not update this.#url at this point since the context
                // has not finished navigating to the info.url yet.
                for (const [id, request] of this.#requests) {
                    if (request.disposed) {
                        this.#requests.delete(id);
                    }
                }
                // If the navigation hasn't finished, then this is nested navigation. The
                // current navigation will handle this.
                if (this.#navigation !== undefined && !this.#navigation.disposed) {
                    return;
                }
                // Note the navigation ID is null for this event.
                this.#navigation = Navigation.from(this);
                const navigationEmitter = this.#disposables.use(new EventEmitter$1(this.#navigation));
                for (const eventName of ['fragment', 'failed', 'aborted']) {
                    navigationEmitter.once(eventName, ({ url }) => {
                        navigationEmitter[disposeSymbol]();
                        this.#url = url;
                    });
                }
                this.emit('navigation', { navigation: this.#navigation });
            });
            sessionEmitter.on('network.beforeRequestSent', event => {
                if (event.context !== this.id) {
                    return;
                }
                if (this.#requests.has(event.request.request)) {
                    // Means the request is a redirect. This is handled in Request.
                    // Or an Auth event was issued
                    return;
                }
                const request = Request.from(this, event);
                this.#requests.set(request.id, request);
                this.emit('request', { request });
            });
            sessionEmitter.on('log.entryAdded', entry => {
                if (entry.source.context !== this.id) {
                    return;
                }
                this.emit('log', { entry });
            });
            sessionEmitter.on('browsingContext.userPromptOpened', info => {
                if (info.context !== this.id) {
                    return;
                }
                const userPrompt = UserPrompt.from(this, info);
                this.emit('userprompt', { userPrompt });
            });
        }
        get #session() {
            return this.userContext.browser.session;
        }
        get children() {
            return this.#children.values();
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get realms() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias -- Required
            const self = this;
            return (function* () {
                yield self.defaultRealm;
                yield* self.#realms.values();
            })();
        }
        get top() {
            let context = this;
            for (let { parent } = context; parent; { parent } = context) {
                context = parent;
            }
            return context;
        }
        get url() {
            return this.#url;
        }
        #createWindowRealm(sandbox) {
            const realm = WindowRealm.from(this, sandbox);
            realm.on('worker', realm => {
                this.emit('worker', { realm });
            });
            return realm;
        }
        dispose(reason) {
            this.#reason = reason;
            for (const context of this.#children.values()) {
                context.dispose('Parent browsing context was disposed');
            }
            this[disposeSymbol]();
        }
        async activate() {
            await this.#session.send('browsingContext.activate', {
                context: this.id,
            });
        }
        async captureScreenshot(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.captureScreenshot', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async close(promptUnload) {
            await Promise.all([...this.#children.values()].map(async (child) => {
                await child.close(promptUnload);
            }));
            await this.#session.send('browsingContext.close', {
                context: this.id,
                promptUnload,
            });
        }
        async traverseHistory(delta) {
            await this.#session.send('browsingContext.traverseHistory', {
                context: this.id,
                delta,
            });
        }
        async navigate(url, wait) {
            await this.#session.send('browsingContext.navigate', {
                context: this.id,
                url,
                wait,
            });
        }
        async reload(options = {}) {
            await this.#session.send('browsingContext.reload', {
                context: this.id,
                ...options,
            });
        }
        async setCacheBehavior(cacheBehavior) {
            // @ts-expect-error not in BiDi types yet.
            await this.#session.send('network.setCacheBehavior', {
                contexts: [this.id],
                cacheBehavior,
            });
        }
        async print(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.print', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async handleUserPrompt(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                context: this.id,
                ...options,
            });
        }
        async setViewport(options = {}) {
            await this.#session.send('browsingContext.setViewport', {
                context: this.id,
                ...options,
            });
        }
        async performActions(actions) {
            await this.#session.send('input.performActions', {
                context: this.id,
                actions,
            });
        }
        async releaseActions() {
            await this.#session.send('input.releaseActions', {
                context: this.id,
            });
        }
        createWindowRealm(sandbox) {
            return this.#createWindowRealm(sandbox);
        }
        async addPreloadScript(functionDeclaration, options = {}) {
            return await this.userContext.browser.addPreloadScript(functionDeclaration, {
                ...options,
                contexts: [this],
            });
        }
        async addIntercept(options) {
            const { result: { intercept }, } = await this.userContext.browser.session.send('network.addIntercept', {
                ...options,
                contexts: [this.id],
            });
            return intercept;
        }
        async removePreloadScript(script) {
            await this.userContext.browser.removePreloadScript(script);
        }
        async getCookies(options = {}) {
            const { result: { cookies }, } = await this.#session.send('storage.getCookies', {
                ...options,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
            return cookies;
        }
        async setCookie(cookie) {
            await this.#session.send('storage.setCookie', {
                cookie,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
        }
        async setFiles(element, files) {
            await this.#session.send('input.setFiles', {
                context: this.id,
                element,
                files,
            });
        }
        async subscribe(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        async addInterception(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        [(_dispose_decorators = [inertIfDisposed], _activate_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _captureScreenshot_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _close_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _traverseHistory_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _navigate_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _reload_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCacheBehavior_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _print_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _handleUserPrompt_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setViewport_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _performActions_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _releaseActions_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _createWindowRealm_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addPreloadScript_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addIntercept_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _removePreloadScript_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _getCookies_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCookie_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setFiles_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _subscribe_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addInterception_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Browsing context already closed, probably because the user context closed.';
            this.emit('closed', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
        async deleteCookie(...cookieFilters) {
            await Promise.all(cookieFilters.map(async (filter) => {
                await this.#session.send('storage.deleteCookies', {
                    filter: filter,
                    partition: {
                        type: 'context',
                        context: this.id,
                    },
                });
            }));
        }
        async locateNodes(locator, startNodes) {
            // TODO: add other locateNodes options if needed.
            const result = await this.#session.send('browsingContext.locateNodes', {
                context: this.id,
                locator,
                startNodes: startNodes.length ? startNodes : undefined,
            });
            return result.result.nodes;
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$8 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$8 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let UserContext = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _createBrowsingContext_decorators;
    let _remove_decorators;
    let _getCookies_decorators;
    let _setCookie_decorators;
    let _setPermissions_decorators;
    return class UserContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$8(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$8(this, null, _createBrowsingContext_decorators, { kind: "method", name: "createBrowsingContext", static: false, private: false, access: { has: obj => "createBrowsingContext" in obj, get: obj => obj.createBrowsingContext }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$8(this, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$8(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: obj => "getCookies" in obj, get: obj => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$8(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: obj => "setCookie" in obj, get: obj => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$8(this, null, _setPermissions_decorators, { kind: "method", name: "setPermissions", static: false, private: false, access: { has: obj => "setPermissions" in obj, get: obj => obj.setPermissions }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static DEFAULT = 'default';
        static create(browser, id) {
            const context = new UserContext(browser, id);
            context.#initialize();
            return context;
        }
        #reason = __runInitializers$8(this, _instanceExtraInitializers);
        // Note these are only top-level contexts.
        #browsingContexts = new Map();
        #disposables = new DisposableStack();
        #id;
        browser;
        constructor(browser, id) {
            super();
            this.#id = id;
            this.browser = browser;
        }
        #initialize() {
            const browserEmitter = this.#disposables.use(new EventEmitter$1(this.browser));
            browserEmitter.once('closed', ({ reason }) => {
                this.dispose(`User context was closed: ${reason}`);
            });
            browserEmitter.once('disconnected', ({ reason }) => {
                this.dispose(`User context was closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.#session));
            sessionEmitter.on('browsingContext.contextCreated', info => {
                if (info.parent) {
                    return;
                }
                if (info.userContext !== this.#id) {
                    return;
                }
                const browsingContext = BrowsingContext.from(this, undefined, info.context, info.url, info.originalOpener);
                this.#browsingContexts.set(browsingContext.id, browsingContext);
                const browsingContextEmitter = this.#disposables.use(new EventEmitter$1(browsingContext));
                browsingContextEmitter.on('closed', () => {
                    browsingContextEmitter.removeAllListeners();
                    this.#browsingContexts.delete(browsingContext.id);
                });
                this.emit('browsingcontext', { browsingContext });
            });
        }
        get #session() {
            return this.browser.session;
        }
        get browsingContexts() {
            return this.#browsingContexts.values();
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get id() {
            return this.#id;
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async createBrowsingContext(type, options = {}) {
            const { result: { context: contextId }, } = await this.#session.send('browsingContext.create', {
                type,
                ...options,
                referenceContext: options.referenceContext?.id,
                userContext: this.#id,
            });
            const browsingContext = this.#browsingContexts.get(contextId);
            assert$1(browsingContext, 'The WebDriver BiDi implementation is failing to create a browsing context correctly.');
            // We use an array to avoid the promise from being awaited.
            return browsingContext;
        }
        async remove() {
            try {
                await this.#session.send('browser.removeUserContext', {
                    userContext: this.#id,
                });
            }
            finally {
                this.dispose('User context already closed.');
            }
        }
        async getCookies(options = {}, sourceOrigin = undefined) {
            const { result: { cookies }, } = await this.#session.send('storage.getCookies', {
                ...options,
                partition: {
                    type: 'storageKey',
                    userContext: this.#id,
                    sourceOrigin,
                },
            });
            return cookies;
        }
        async setCookie(cookie, sourceOrigin) {
            await this.#session.send('storage.setCookie', {
                cookie,
                partition: {
                    type: 'storageKey',
                    sourceOrigin,
                    userContext: this.id,
                },
            });
        }
        async setPermissions(origin, descriptor, state) {
            await this.#session.send('permissions.setPermission', {
                origin,
                descriptor,
                state,
                userContext: this.#id,
            });
        }
        [(_dispose_decorators = [inertIfDisposed], _createBrowsingContext_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _remove_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _getCookies_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCookie_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setPermissions_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'User context already closed, probably because the browser disconnected/closed.';
            this.emit('closed', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class BidiDeserializer {
    static deserialize(result) {
        if (!result) {
            debugError('Service did not produce a result.');
            return undefined;
        }
        switch (result.type) {
            case 'array':
                return result.value?.map(value => {
                    return this.deserialize(value);
                });
            case 'set':
                return result.value?.reduce((acc, value) => {
                    return acc.add(this.deserialize(value));
                }, new Set());
            case 'object':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = this.#deserializeTuple(tuple);
                    acc[key] = value;
                    return acc;
                }, {});
            case 'map':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = this.#deserializeTuple(tuple);
                    return acc.set(key, value);
                }, new Map());
            case 'promise':
                return {};
            case 'regexp':
                return new RegExp(result.value.pattern, result.value.flags);
            case 'date':
                return new Date(result.value);
            case 'undefined':
                return undefined;
            case 'null':
                return null;
            case 'number':
                return this.#deserializeNumber(result.value);
            case 'bigint':
                return BigInt(result.value);
            case 'boolean':
                return Boolean(result.value);
            case 'string':
                return result.value;
        }
        debugError(`Deserialization of type ${result.type} not supported.`);
        return undefined;
    }
    static #deserializeNumber(value) {
        switch (value) {
            case '-0':
                return -0;
            case 'NaN':
                return NaN;
            case 'Infinity':
                return Infinity;
            case '-Infinity':
                return -Infinity;
            default:
                return value;
        }
    }
    static #deserializeTuple([serializedKey, serializedValue]) {
        const key = typeof serializedKey === 'string'
            ? serializedKey
            : this.deserialize(serializedKey);
        const value = this.deserialize(serializedValue);
        return { key, value };
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiDialog extends Dialog {
    static from(prompt) {
        return new BidiDialog(prompt);
    }
    #prompt;
    constructor(prompt) {
        super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
        this.#prompt = prompt;
        this.handled = prompt.handled;
    }
    async handle(options) {
        await this.#prompt.handle({
            accept: options.accept,
            userText: options.text,
        });
    }
}

var protocolExports = requireProtocol();

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class BidiJSHandle extends JSHandle {
    static from(value, realm) {
        return new BidiJSHandle(value, realm);
    }
    #remoteValue;
    realm;
    #disposed = false;
    constructor(value, realm) {
        super();
        this.#remoteValue = value;
        this.realm = realm;
    }
    get disposed() {
        return this.#disposed;
    }
    async jsonValue() {
        return await this.evaluate(value => {
            return value;
        });
    }
    asElement() {
        return null;
    }
    async dispose() {
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        await this.realm.destroyHandles([this]);
    }
    get isPrimitiveValue() {
        switch (this.#remoteValue.type) {
            case 'string':
            case 'number':
            case 'bigint':
            case 'boolean':
            case 'undefined':
            case 'null':
                return true;
            default:
                return false;
        }
    }
    toString() {
        if (this.isPrimitiveValue) {
            return 'JSHandle:' + BidiDeserializer.deserialize(this.#remoteValue);
        }
        return 'JSHandle@' + this.#remoteValue.type;
    }
    get id() {
        return 'handle' in this.#remoteValue ? this.#remoteValue.handle : undefined;
    }
    remoteValue() {
        return this.#remoteValue;
    }
    remoteObject() {
        throw new UnsupportedOperation('Not available in WebDriver BiDi');
    }
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$7 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$7 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __addDisposableResource$5 = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources$5 = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @internal
 */
let BidiElementHandle = (() => {
    let _classSuper = ElementHandle;
    let _instanceExtraInitializers = [];
    let _autofill_decorators;
    let _contentFrame_decorators;
    return class BidiElementHandle extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _autofill_decorators = [throwIfDisposed()];
            _contentFrame_decorators = [throwIfDisposed(), bindIsolatedHandle];
            __esDecorate$7(this, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: obj => "autofill" in obj, get: obj => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$7(this, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: obj => "contentFrame" in obj, get: obj => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #backendNodeId = __runInitializers$7(this, _instanceExtraInitializers);
        static from(value, realm) {
            return new BidiElementHandle(value, realm);
        }
        constructor(value, realm) {
            super(BidiJSHandle.from(value, realm));
        }
        get realm() {
            // SAFETY: See the super call in the constructor.
            return this.handle.realm;
        }
        get frame() {
            return this.realm.environment;
        }
        remoteValue() {
            return this.handle.remoteValue();
        }
        async autofill(data) {
            const client = this.frame.client;
            const nodeInfo = await client.send('DOM.describeNode', {
                objectId: this.handle.id,
            });
            const fieldId = nodeInfo.node.backendNodeId;
            const frameId = this.frame._id;
            await client.send('Autofill.trigger', {
                fieldId,
                frameId,
                card: data.creditCard,
            });
        }
        async contentFrame() {
            const env_1 = { stack: [], error: undefined, hasError: false };
            try {
                const handle = __addDisposableResource$5(env_1, (await this.evaluateHandle(element => {
                    if (element instanceof HTMLIFrameElement ||
                        element instanceof HTMLFrameElement) {
                        return element.contentWindow;
                    }
                    return;
                })), false);
                const value = handle.remoteValue();
                if (value.type === 'window') {
                    return (this.frame
                        .page()
                        .frames()
                        .find(frame => {
                        return frame._id === value.value.context;
                    }) ?? null);
                }
                return null;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources$5(env_1);
            }
        }
        async uploadFile(...files) {
            // Locate all files and confirm that they exist.
            const path = environment.value.path;
            if (path) {
                files = files.map(file => {
                    if (path.win32.isAbsolute(file) || path.posix.isAbsolute(file)) {
                        return file;
                    }
                    else {
                        return path.resolve(file);
                    }
                });
            }
            await this.frame.setFiles(this, files);
        }
        async *queryAXTree(name, role) {
            const results = await this.frame.locateNodes(this, {
                type: 'accessibility',
                value: {
                    role,
                    name,
                },
            });
            return yield* AsyncIterableUtil.map(results, node => {
                // TODO: maybe change ownership since the default ownership is probably none.
                return Promise.resolve(BidiElementHandle.from(node, this.realm));
            });
        }
        async backendNodeId() {
            if (!this.frame.page().browser().cdpSupported) {
                throw new UnsupportedOperation();
            }
            if (this.#backendNodeId) {
                return this.#backendNodeId;
            }
            const { node } = await this.frame.client.send('DOM.describeNode', {
                objectId: this.handle.id,
            });
            this.#backendNodeId = node.backendNodeId;
            return this.#backendNodeId;
        }
    };
})();

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource$4 = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources$4 = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @internal
 */
class ExposeableFunction {
    static async from(frame, name, apply, isolate = false) {
        const func = new ExposeableFunction(frame, name, apply, isolate);
        await func.#initialize();
        return func;
    }
    #frame;
    name;
    #apply;
    #isolate;
    #channel;
    #scripts = [];
    #disposables = new DisposableStack();
    constructor(frame, name, apply, isolate = false) {
        this.#frame = frame;
        this.name = name;
        this.#apply = apply;
        this.#isolate = isolate;
        this.#channel = `__puppeteer__${this.#frame._id}_page_exposeFunction_${this.name}`;
    }
    async #initialize() {
        const connection = this.#connection;
        const channel = {
            type: 'channel',
            value: {
                channel: this.#channel,
                ownership: "root" /* Bidi.Script.ResultOwnership.Root */,
            },
        };
        const connectionEmitter = this.#disposables.use(new EventEmitter$1(connection));
        connectionEmitter.on(protocolExports.ChromiumBidi.Script.EventNames.Message, this.#handleMessage);
        const functionDeclaration = stringifyFunction(interpolateFunction((callback) => {
            Object.assign(globalThis, {
                [PLACEHOLDER('name')]: function (...args) {
                    return new Promise((resolve, reject) => {
                        callback([resolve, reject, args]);
                    });
                },
            });
        }, { name: JSON.stringify(this.name) }));
        const frames = [this.#frame];
        for (const frame of frames) {
            frames.push(...frame.childFrames());
        }
        await Promise.all(frames.map(async (frame) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                const [script] = await Promise.all([
                    frame.browsingContext.addPreloadScript(functionDeclaration, {
                        arguments: [channel],
                        sandbox: realm.sandbox,
                    }),
                    realm.realm.callFunction(functionDeclaration, false, {
                        arguments: [channel],
                    }),
                ]);
                this.#scripts.push([frame, script]);
            }
            catch (error) {
                // If it errors, the frame probably doesn't support call function. We
                // fail gracefully.
                debugError(error);
            }
        }));
    }
    get #connection() {
        return this.#frame.page().browser().connection;
    }
    #handleMessage = async (params) => {
        const env_1 = { stack: [], error: undefined, hasError: false };
        try {
            if (params.channel !== this.#channel) {
                return;
            }
            const realm = this.#getRealm(params.source);
            if (!realm) {
                // Unrelated message.
                return;
            }
            const dataHandle = __addDisposableResource$4(env_1, BidiJSHandle.from(params.data, realm), false);
            const argsHandle = __addDisposableResource$4(env_1, await dataHandle.evaluateHandle(([, , args]) => {
                return args;
            }), false);
            const stack = __addDisposableResource$4(env_1, new DisposableStack(), false);
            const args = [];
            for (const [index, handle] of await argsHandle.getProperties()) {
                stack.use(handle);
                // Element handles are passed as is.
                if (handle instanceof BidiElementHandle) {
                    args[+index] = handle;
                    stack.use(handle);
                    continue;
                }
                // Everything else is passed as the JS value.
                args[+index] = handle.jsonValue();
            }
            let result;
            try {
                result = await this.#apply(...(await Promise.all(args)));
            }
            catch (error) {
                try {
                    if (error instanceof Error) {
                        await dataHandle.evaluate(([, reject], name, message, stack) => {
                            const error = new Error(message);
                            error.name = name;
                            if (stack) {
                                error.stack = stack;
                            }
                            reject(error);
                        }, error.name, error.message, error.stack);
                    }
                    else {
                        await dataHandle.evaluate(([, reject], error) => {
                            reject(error);
                        }, error);
                    }
                }
                catch (error) {
                    debugError(error);
                }
                return;
            }
            try {
                await dataHandle.evaluate(([resolve], result) => {
                    resolve(result);
                }, result);
            }
            catch (error) {
                debugError(error);
            }
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources$4(env_1);
        }
    };
    #getRealm(source) {
        const frame = this.#findFrame(source.context);
        if (!frame) {
            // Unrelated message.
            return;
        }
        return frame.realm(source.realm);
    }
    #findFrame(id) {
        const frames = [this.#frame];
        for (const frame of frames) {
            if (frame._id === id) {
                return frame;
            }
            frames.push(...frame.childFrames());
        }
        return;
    }
    [Symbol.dispose]() {
        void this[Symbol.asyncDispose]().catch(debugError);
    }
    async [Symbol.asyncDispose]() {
        this.#disposables.dispose();
        await Promise.all(this.#scripts.map(async ([frame, script]) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                await Promise.all([
                    realm.evaluate(name => {
                        delete globalThis[name];
                    }, this.name),
                    ...frame.childFrames().map(childFrame => {
                        return childFrame.evaluate(name => {
                            delete globalThis[name];
                        }, this.name);
                    }),
                    frame.browsingContext.removePreloadScript(script),
                ]);
            }
            catch (error) {
                debugError(error);
            }
        }));
    }
}

var __runInitializers$6 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$6 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let BidiHTTPResponse = (() => {
    let _classSuper = HTTPResponse;
    let _instanceExtraInitializers = [];
    let _remoteAddress_decorators;
    return class BidiHTTPResponse extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _remoteAddress_decorators = [invokeAtMostOnceForArguments];
            __esDecorate$6(this, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: obj => "remoteAddress" in obj, get: obj => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(data, request, cdpSupported) {
            const response = new BidiHTTPResponse(data, request, cdpSupported);
            response.#initialize();
            return response;
        }
        #data = __runInitializers$6(this, _instanceExtraInitializers);
        #request;
        #securityDetails;
        #cdpSupported = false;
        constructor(data, request, cdpSupported) {
            super();
            this.#data = data;
            this.#request = request;
            this.#cdpSupported = cdpSupported;
            // @ts-expect-error non-standard property.
            const securityDetails = data['goog:securityDetails'];
            if (cdpSupported && securityDetails) {
                this.#securityDetails = new SecurityDetails(securityDetails);
            }
        }
        #initialize() {
            if (this.#data.fromCache) {
                this.#request._fromMemoryCache = true;
                this.#request
                    .frame()
                    ?.page()
                    .trustedEmitter.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */, this.#request);
            }
            this.#request.frame()?.page().trustedEmitter.emit("response" /* PageEvent.Response */, this);
        }
        remoteAddress() {
            return {
                ip: '',
                port: -1,
            };
        }
        url() {
            return this.#data.url;
        }
        status() {
            return this.#data.status;
        }
        statusText() {
            return this.#data.statusText;
        }
        headers() {
            const headers = {};
            for (const header of this.#data.headers) {
                // TODO: How to handle Binary Headers
                // https://w3c.github.io/webdriver-bidi/#type-network-Header
                if (header.value.type === 'string') {
                    headers[header.name.toLowerCase()] = header.value.value;
                }
            }
            return headers;
        }
        request() {
            return this.#request;
        }
        fromCache() {
            return this.#data.fromCache;
        }
        timing() {
            const bidiTiming = this.#request.timing();
            return {
                requestTime: bidiTiming.requestTime,
                proxyStart: -1,
                proxyEnd: -1,
                dnsStart: bidiTiming.dnsStart,
                dnsEnd: bidiTiming.dnsEnd,
                connectStart: bidiTiming.connectStart,
                connectEnd: bidiTiming.connectEnd,
                sslStart: bidiTiming.tlsStart,
                sslEnd: -1,
                workerStart: -1,
                workerReady: -1,
                workerFetchStart: -1,
                workerRespondWithSettled: -1,
                workerRouterEvaluationStart: -1,
                workerCacheLookupStart: -1,
                sendStart: bidiTiming.requestStart,
                sendEnd: -1,
                pushStart: -1,
                pushEnd: -1,
                receiveHeadersStart: bidiTiming.responseStart,
                receiveHeadersEnd: bidiTiming.responseEnd,
            };
        }
        frame() {
            return this.#request.frame();
        }
        fromServiceWorker() {
            return false;
        }
        securityDetails() {
            if (!this.#cdpSupported) {
                throw new UnsupportedOperation();
            }
            return this.#securityDetails ?? null;
        }
        content() {
            throw new UnsupportedOperation();
        }
    };
})();

var _a;
const requests = new WeakMap();
/**
 * @internal
 */
class BidiHTTPRequest extends HTTPRequest {
    static from(bidiRequest, frame, redirect) {
        const request = new _a(bidiRequest, frame, redirect);
        request.#initialize();
        return request;
    }
    #redirectChain;
    #response = null;
    id;
    #frame;
    #request;
    constructor(request, frame, redirect) {
        super();
        requests.set(request, this);
        this.interception.enabled = request.isBlocked;
        this.#request = request;
        this.#frame = frame;
        this.#redirectChain = redirect ? redirect.#redirectChain : [];
        this.id = request.id;
    }
    get client() {
        return this.#frame.client;
    }
    #initialize() {
        this.#request.on('redirect', request => {
            const httpRequest = _a.from(request, this.#frame, this);
            this.#redirectChain.push(this);
            request.once('success', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
            });
            request.once('error', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
            });
            void httpRequest.finalizeInterceptions();
        });
        this.#request.once('success', data => {
            this.#response = BidiHTTPResponse.from(data, this, this.#frame.page().browser().cdpSupported);
        });
        this.#request.on('authenticate', this.#handleAuthentication);
        this.#frame.page().trustedEmitter.emit("request" /* PageEvent.Request */, this);
        if (this.#hasInternalHeaderOverwrite) {
            this.interception.handlers.push(async () => {
                await this.continue({
                    headers: this.headers(),
                }, 0);
            });
        }
    }
    url() {
        return this.#request.url;
    }
    resourceType() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new UnsupportedOperation();
        }
        return (this.#request.resourceType || 'other').toLowerCase();
    }
    method() {
        return this.#request.method;
    }
    postData() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new UnsupportedOperation();
        }
        return this.#request.postData;
    }
    hasPostData() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new UnsupportedOperation();
        }
        return this.#request.hasPostData;
    }
    async fetchPostData() {
        throw new UnsupportedOperation();
    }
    get #hasInternalHeaderOverwrite() {
        return Boolean(Object.keys(this.#extraHTTPHeaders).length ||
            Object.keys(this.#userAgentHeaders).length);
    }
    get #extraHTTPHeaders() {
        return this.#frame?.page()._extraHTTPHeaders ?? {};
    }
    get #userAgentHeaders() {
        return this.#frame?.page()._userAgentHeaders ?? {};
    }
    headers() {
        const headers = {};
        for (const header of this.#request.headers) {
            headers[header.name.toLowerCase()] = header.value.value;
        }
        return {
            ...headers,
            ...this.#extraHTTPHeaders,
            ...this.#userAgentHeaders,
        };
    }
    response() {
        return this.#response;
    }
    failure() {
        if (this.#request.error === undefined) {
            return null;
        }
        return { errorText: this.#request.error };
    }
    isNavigationRequest() {
        return this.#request.navigation !== undefined;
    }
    initiator() {
        return {
            ...this.#request.initiator,
            type: this.#request.initiator?.type ?? 'other',
        };
    }
    redirectChain() {
        return this.#redirectChain.slice();
    }
    frame() {
        return this.#frame;
    }
    async continue(overrides, priority) {
        return await super.continue({
            headers: this.#hasInternalHeaderOverwrite ? this.headers() : undefined,
            ...overrides,
        }, priority);
    }
    async _continue(overrides = {}) {
        const headers = getBidiHeaders(overrides.headers);
        this.interception.handled = true;
        return await this.#request
            .continueRequest({
            url: overrides.url,
            method: overrides.method,
            body: overrides.postData
                ? {
                    type: 'base64',
                    value: stringToBase64(overrides.postData),
                }
                : undefined,
            headers: headers.length > 0 ? headers : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            return handleError(error);
        });
    }
    async _abort() {
        this.interception.handled = true;
        return await this.#request.failRequest().catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    async _respond(response, _priority) {
        this.interception.handled = true;
        let parsedBody;
        if (response.body) {
            parsedBody = HTTPRequest.getResponse(response.body);
        }
        const headers = getBidiHeaders(response.headers);
        const hasContentLength = headers.some(header => {
            return header.name === 'content-length';
        });
        if (response.contentType) {
            headers.push({
                name: 'content-type',
                value: {
                    type: 'string',
                    value: response.contentType,
                },
            });
        }
        if (parsedBody?.contentLength && !hasContentLength) {
            headers.push({
                name: 'content-length',
                value: {
                    type: 'string',
                    value: String(parsedBody.contentLength),
                },
            });
        }
        const status = response.status || 200;
        return await this.#request
            .provideResponse({
            statusCode: status,
            headers: headers.length > 0 ? headers : undefined,
            reasonPhrase: STATUS_TEXTS[status],
            body: parsedBody?.base64
                ? {
                    type: 'base64',
                    value: parsedBody?.base64,
                }
                : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    #authenticationHandled = false;
    #handleAuthentication = async () => {
        if (!this.#frame) {
            return;
        }
        const credentials = this.#frame.page()._credentials;
        if (credentials && !this.#authenticationHandled) {
            this.#authenticationHandled = true;
            void this.#request.continueWithAuth({
                action: 'provideCredentials',
                credentials: {
                    type: 'password',
                    username: credentials.username,
                    password: credentials.password,
                },
            });
        }
        else {
            void this.#request.continueWithAuth({
                action: 'cancel',
            });
        }
    };
    timing() {
        return this.#request.timing();
    }
}
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
    const headers = [];
    for (const [name, value] of Object.entries(rawHeaders ?? [])) {
        if (!Object.is(value, undefined)) {
            const values = Array.isArray(value) ? value : [value];
            for (const value of values) {
                headers.push({
                    name: name.toLowerCase(),
                    value: {
                        type: 'string',
                        value: String(value),
                    },
                });
            }
        }
    }
    return headers;
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class UnserializableError extends Error {
}
/**
 * @internal
 */
class BidiSerializer {
    static serialize(arg) {
        switch (typeof arg) {
            case 'symbol':
            case 'function':
                throw new UnserializableError(`Unable to serializable ${typeof arg}`);
            case 'object':
                return this.#serializeObject(arg);
            case 'undefined':
                return {
                    type: 'undefined',
                };
            case 'number':
                return this.#serializeNumber(arg);
            case 'bigint':
                return {
                    type: 'bigint',
                    value: arg.toString(),
                };
            case 'string':
                return {
                    type: 'string',
                    value: arg,
                };
            case 'boolean':
                return {
                    type: 'boolean',
                    value: arg,
                };
        }
    }
    static #serializeNumber(arg) {
        let value;
        if (Object.is(arg, -0)) {
            value = '-0';
        }
        else if (Object.is(arg, Infinity)) {
            value = 'Infinity';
        }
        else if (Object.is(arg, -Infinity)) {
            value = '-Infinity';
        }
        else if (Object.is(arg, NaN)) {
            value = 'NaN';
        }
        else {
            value = arg;
        }
        return {
            type: 'number',
            value,
        };
    }
    static #serializeObject(arg) {
        if (arg === null) {
            return {
                type: 'null',
            };
        }
        else if (Array.isArray(arg)) {
            const parsedArray = arg.map(subArg => {
                return this.serialize(subArg);
            });
            return {
                type: 'array',
                value: parsedArray,
            };
        }
        else if (isPlainObject(arg)) {
            try {
                JSON.stringify(arg);
            }
            catch (error) {
                if (error instanceof TypeError &&
                    error.message.startsWith('Converting circular structure to JSON')) {
                    error.message += ' Recursive objects are not allowed.';
                }
                throw error;
            }
            const parsedObject = [];
            for (const key in arg) {
                parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
            }
            return {
                type: 'object',
                value: parsedObject,
            };
        }
        else if (isRegExp(arg)) {
            return {
                type: 'regexp',
                value: {
                    pattern: arg.source,
                    flags: arg.flags,
                },
            };
        }
        else if (isDate(arg)) {
            return {
                type: 'date',
                value: arg.toISOString(),
            };
        }
        throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
    }
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return BidiDeserializer.deserialize(details.exception);
    }
    const [name = '', ...parts] = details.text.split(': ');
    const message = parts.join(': ');
    const error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    const stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        for (const frame of details.stackTrace.callFrames.reverse()) {
            if (PuppeteerURL.isPuppeteerURL(frame.url) &&
                frame.url !== PuppeteerURL.INTERNAL_URL) {
                const url = PuppeteerURL.parse(frame.url);
                stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
            }
            else {
                stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
            }
            if (stackLines.length >= Error.stackTraceLimit) {
                break;
            }
        }
    }
    error.stack = [details.text, ...stackLines].join('\n');
    return error;
}
/**
 * @internal
 */
function rewriteNavigationError(message, ms) {
    return error => {
        if (error instanceof ProtocolError) {
            error.message += ` at ${message}`;
        }
        else if (error instanceof TimeoutError) {
            error.message = `Navigation timeout of ${ms} ms exceeded`;
        }
        throw error;
    };
}

var __addDisposableResource$3 = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources$3 = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @internal
 */
class BidiRealm extends Realm$2 {
    realm;
    constructor(realm, timeoutSettings) {
        super(timeoutSettings);
        this.realm = realm;
    }
    initialize() {
        this.realm.on('destroyed', ({ reason }) => {
            this.taskManager.terminateAll(new Error(reason));
            this.dispose();
        });
        this.realm.on('updated', () => {
            this.internalPuppeteerUtil = undefined;
            void this.taskManager.rerunAll();
        });
    }
    internalPuppeteerUtil;
    get puppeteerUtil() {
        const promise = Promise.resolve();
        scriptInjector.inject(script => {
            if (this.internalPuppeteerUtil) {
                void this.internalPuppeteerUtil.then(handle => {
                    void handle.dispose();
                });
            }
            this.internalPuppeteerUtil = promise.then(() => {
                return this.evaluateHandle(script);
            });
        }, !this.internalPuppeteerUtil);
        return this.internalPuppeteerUtil;
    }
    async evaluateHandle(pageFunction, ...args) {
        return await this.#evaluate(false, pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        return await this.#evaluate(true, pageFunction, ...args);
    }
    async #evaluate(returnByValue, pageFunction, ...args) {
        const sourceUrlComment = getSourceUrlComment(getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ??
            PuppeteerURL.INTERNAL_URL);
        let responsePromise;
        const resultOwnership = returnByValue
            ? "none" /* Bidi.Script.ResultOwnership.None */
            : "root" /* Bidi.Script.ResultOwnership.Root */;
        const serializationOptions = returnByValue
            ? {}
            : {
                maxObjectDepth: 0,
                maxDomDepth: 0,
            };
        if (isString(pageFunction)) {
            const expression = SOURCE_URL_REGEX.test(pageFunction)
                ? pageFunction
                : `${pageFunction}\n${sourceUrlComment}\n`;
            responsePromise = this.realm.evaluate(expression, true, {
                resultOwnership,
                userActivation: true,
                serializationOptions,
            });
        }
        else {
            let functionDeclaration = stringifyFunction(pageFunction);
            functionDeclaration = SOURCE_URL_REGEX.test(functionDeclaration)
                ? functionDeclaration
                : `${functionDeclaration}\n${sourceUrlComment}\n`;
            responsePromise = this.realm.callFunction(functionDeclaration, 
            /* awaitPromise= */ true, {
                // LazyArgs are used only internally and should not affect the order
                // evaluate calls for the public APIs.
                arguments: args.some(arg => {
                    return arg instanceof LazyArg;
                })
                    ? await Promise.all(args.map(arg => {
                        return this.serializeAsync(arg);
                    }))
                    : args.map(arg => {
                        return this.serialize(arg);
                    }),
                resultOwnership,
                userActivation: true,
                serializationOptions,
            });
        }
        const result = await responsePromise;
        if ('type' in result && result.type === 'exception') {
            throw createEvaluationError(result.exceptionDetails);
        }
        return returnByValue
            ? BidiDeserializer.deserialize(result.result)
            : this.createHandle(result.result);
    }
    createHandle(result) {
        if ((result.type === 'node' || result.type === 'window') &&
            this instanceof BidiFrameRealm) {
            return BidiElementHandle.from(result, this);
        }
        return BidiJSHandle.from(result, this);
    }
    async serializeAsync(arg) {
        if (arg instanceof LazyArg) {
            arg = await arg.get(this);
        }
        return this.serialize(arg);
    }
    serialize(arg) {
        if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
            if (arg.realm !== this) {
                if (!(arg.realm instanceof BidiFrameRealm) ||
                    !(this instanceof BidiFrameRealm)) {
                    throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
                }
                if (arg.realm.environment !== this.environment) {
                    throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
                }
            }
            if (arg.disposed) {
                throw new Error('JSHandle is disposed!');
            }
            return arg.remoteValue();
        }
        return BidiSerializer.serialize(arg);
    }
    async destroyHandles(handles) {
        if (this.disposed) {
            return;
        }
        const handleIds = handles
            .map(({ id }) => {
            return id;
        })
            .filter((id) => {
            return id !== undefined;
        });
        if (handleIds.length === 0) {
            return;
        }
        await this.realm.disown(handleIds).catch(error => {
            // Exceptions might happen in case of a page been navigated or closed.
            // Swallow these since they are harmless and we don't leak anything in this case.
            debugError(error);
        });
    }
    async adoptHandle(handle) {
        return (await this.evaluateHandle(node => {
            return node;
        }, handle));
    }
    async transferHandle(handle) {
        if (handle.realm === this) {
            return handle;
        }
        const transferredHandle = this.adoptHandle(handle);
        await handle.dispose();
        return await transferredHandle;
    }
}
/**
 * @internal
 */
class BidiFrameRealm extends BidiRealm {
    static from(realm, frame) {
        const frameRealm = new BidiFrameRealm(realm, frame);
        frameRealm.#initialize();
        return frameRealm;
    }
    #frame;
    constructor(realm, frame) {
        super(realm, frame.timeoutSettings);
        this.#frame = frame;
    }
    #initialize() {
        super.initialize();
        // This should run first.
        this.realm.on('updated', () => {
            this.environment.clearDocumentHandle();
            this.#bindingsInstalled = false;
        });
    }
    #bindingsInstalled = false;
    get puppeteerUtil() {
        let promise = Promise.resolve();
        if (!this.#bindingsInstalled) {
            promise = Promise.all([
                ExposeableFunction.from(this.environment, '__ariaQuerySelector', ARIAQueryHandler.queryOne, !!this.sandbox),
                ExposeableFunction.from(this.environment, '__ariaQuerySelectorAll', async (element, selector) => {
                    const results = ARIAQueryHandler.queryAll(element, selector);
                    return await element.realm.evaluateHandle((...elements) => {
                        return elements;
                    }, ...(await AsyncIterableUtil.collect(results)));
                }, !!this.sandbox),
            ]);
            this.#bindingsInstalled = true;
        }
        return promise.then(() => {
            return super.puppeteerUtil;
        });
    }
    get sandbox() {
        return this.realm.sandbox;
    }
    get environment() {
        return this.#frame;
    }
    async adoptBackendNode(backendNodeId) {
        const env_1 = { stack: [], error: undefined, hasError: false };
        try {
            const { object } = await this.#frame.client.send('DOM.resolveNode', {
                backendNodeId,
                executionContextId: await this.realm.resolveExecutionContextId(),
            });
            const handle = __addDisposableResource$3(env_1, BidiElementHandle.from({
                handle: object.objectId,
                type: 'node',
            }, this), false);
            // We need the sharedId, so we perform the following to obtain it.
            return await handle.evaluateHandle(element => {
                return element;
            });
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources$3(env_1);
        }
    }
}
/**
 * @internal
 */
class BidiWorkerRealm extends BidiRealm {
    static from(realm, worker) {
        const workerRealm = new BidiWorkerRealm(realm, worker);
        workerRealm.initialize();
        return workerRealm;
    }
    #worker;
    constructor(realm, frame) {
        super(realm, frame.timeoutSettings);
        this.#worker = frame;
    }
    get environment() {
        return this.#worker;
    }
    async adoptBackendNode() {
        throw new Error('Cannot adopt DOM nodes into a worker.');
    }
}

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class BidiWebWorker extends WebWorker {
    static from(frame, realm) {
        const worker = new BidiWebWorker(frame, realm);
        return worker;
    }
    #frame;
    #realm;
    constructor(frame, realm) {
        super(realm.origin);
        this.#frame = frame;
        this.#realm = BidiWorkerRealm.from(realm, this);
    }
    get frame() {
        return this.#frame;
    }
    mainRealm() {
        return this.#realm;
    }
    get client() {
        throw new UnsupportedOperation();
    }
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$5 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$5 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName$1 = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// TODO: Remove this and map CDP the correct method.
// Requires breaking change.
function convertConsoleMessageLevel(method) {
    switch (method) {
        case 'group':
            return 'startGroup';
        case 'groupCollapsed':
            return 'startGroupCollapsed';
        case 'groupEnd':
            return 'endGroup';
        default:
            return method;
    }
}
let BidiFrame = (() => {
    let _classSuper = Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _setContent_decorators;
    let _waitForNavigation_decorators;
    let _private_waitForLoad$_decorators;
    let _private_waitForLoad$_descriptor;
    let _private_waitForNetworkIdle$_decorators;
    let _private_waitForNetworkIdle$_descriptor;
    let _setFiles_decorators;
    let _locateNodes_decorators;
    return class BidiFrame extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _goto_decorators = [throwIfDetached];
            _setContent_decorators = [throwIfDetached];
            _waitForNavigation_decorators = [throwIfDetached];
            _private_waitForLoad$_decorators = [throwIfDetached];
            _private_waitForNetworkIdle$_decorators = [throwIfDetached];
            _setFiles_decorators = [throwIfDetached];
            _locateNodes_decorators = [throwIfDetached];
            __esDecorate$5(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, _private_waitForLoad$_descriptor = { value: __setFunctionName$1(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    const events = new Set();
                    for (const lifecycleEvent of waitUntil) {
                        switch (lifecycleEvent) {
                            case 'load': {
                                events.add('load');
                                break;
                            }
                            case 'domcontentloaded': {
                                events.add('DOMContentLoaded');
                                break;
                            }
                        }
                    }
                    if (events.size === 0) {
                        return of(undefined);
                    }
                    return combineLatest([...events].map(event => {
                        return fromEmitterEvent(this.browsingContext, event);
                    })).pipe(map(() => { }), first(), raceWith(timeout(ms), this.#detached$().pipe(map(() => {
                        throw new Error('Frame detached.');
                    }))));
                }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: obj => #waitForLoad$ in obj, get: obj => obj.#waitForLoad$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName$1(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    let concurrency = Infinity;
                    for (const event of waitUntil) {
                        switch (event) {
                            case 'networkidle0': {
                                concurrency = Math.min(0, concurrency);
                                break;
                            }
                            case 'networkidle2': {
                                concurrency = Math.min(2, concurrency);
                                break;
                            }
                        }
                    }
                    if (concurrency === Infinity) {
                        return of(undefined);
                    }
                    return this.page().waitForNetworkIdle$({
                        idleTime: 500,
                        timeout: options.timeout ?? this.timeoutSettings.timeout(),
                        concurrency,
                    });
                }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: obj => #waitForNetworkIdle$ in obj, get: obj => obj.#waitForNetworkIdle$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$5(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(parent, browsingContext) {
            const frame = new BidiFrame(parent, browsingContext);
            frame.#initialize();
            return frame;
        }
        #parent = __runInitializers$5(this, _instanceExtraInitializers);
        browsingContext;
        #frames = new WeakMap();
        realms;
        _id;
        client;
        accessibility;
        constructor(parent, browsingContext) {
            super();
            this.#parent = parent;
            this.browsingContext = browsingContext;
            this._id = browsingContext.id;
            this.client = new BidiCdpSession(this);
            this.realms = {
                default: BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
                internal: BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 10000)}`), this),
            };
            this.accessibility = new Accessibility(this.realms.default, this._id);
        }
        #initialize() {
            for (const browsingContext of this.browsingContext.children) {
                this.#createFrameTarget(browsingContext);
            }
            this.browsingContext.on('browsingcontext', ({ browsingContext }) => {
                this.#createFrameTarget(browsingContext);
            });
            this.browsingContext.on('closed', () => {
                for (const session of BidiCdpSession.sessions.values()) {
                    if (session.frame === this) {
                        session.onClose();
                    }
                }
                this.page().trustedEmitter.emit("framedetached" /* PageEvent.FrameDetached */, this);
            });
            this.browsingContext.on('request', ({ request }) => {
                const httpRequest = BidiHTTPRequest.from(request, this);
                request.once('success', () => {
                    this.page().trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
                });
                request.once('error', () => {
                    this.page().trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
                });
                void httpRequest.finalizeInterceptions();
            });
            this.browsingContext.on('navigation', ({ navigation }) => {
                navigation.once('fragment', () => {
                    this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
                });
            });
            this.browsingContext.on('load', () => {
                this.page().trustedEmitter.emit("load" /* PageEvent.Load */, undefined);
            });
            this.browsingContext.on('DOMContentLoaded', () => {
                this._hasStartedLoading = true;
                this.page().trustedEmitter.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
                this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
            });
            this.browsingContext.on('userprompt', ({ userPrompt }) => {
                this.page().trustedEmitter.emit("dialog" /* PageEvent.Dialog */, BidiDialog.from(userPrompt));
            });
            this.browsingContext.on('log', ({ entry }) => {
                if (this._id !== entry.source.context) {
                    return;
                }
                if (isConsoleLogEntry(entry)) {
                    const args = entry.args.map(arg => {
                        return this.mainRealm().createHandle(arg);
                    });
                    const text = args
                        .reduce((value, arg) => {
                        const parsedValue = arg instanceof BidiJSHandle && arg.isPrimitiveValue
                            ? BidiDeserializer.deserialize(arg.remoteValue())
                            : arg.toString();
                        return `${value} ${parsedValue}`;
                    }, '')
                        .slice(1);
                    this.page().trustedEmitter.emit("console" /* PageEvent.Console */, new ConsoleMessage(convertConsoleMessageLevel(entry.method), text, args, getStackTraceLocations(entry.stackTrace), this));
                }
                else if (isJavaScriptLogEntry(entry)) {
                    const error = new Error(entry.text ?? '');
                    const messageHeight = error.message.split('\n').length;
                    const messageLines = error.stack.split('\n').splice(0, messageHeight);
                    const stackLines = [];
                    if (entry.stackTrace) {
                        for (const frame of entry.stackTrace.callFrames) {
                            // Note we need to add `1` because the values are 0-indexed.
                            stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
                            if (stackLines.length >= Error.stackTraceLimit) {
                                break;
                            }
                        }
                    }
                    error.stack = [...messageLines, ...stackLines].join('\n');
                    this.page().trustedEmitter.emit("pageerror" /* PageEvent.PageError */, error);
                }
                else {
                    debugError(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
                }
            });
            this.browsingContext.on('worker', ({ realm }) => {
                const worker = BidiWebWorker.from(this, realm);
                realm.on('destroyed', () => {
                    this.page().trustedEmitter.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
                });
                this.page().trustedEmitter.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
            });
        }
        #createFrameTarget(browsingContext) {
            const frame = BidiFrame.from(this, browsingContext);
            this.#frames.set(browsingContext, frame);
            this.page().trustedEmitter.emit("frameattached" /* PageEvent.FrameAttached */, frame);
            browsingContext.on('closed', () => {
                this.#frames.delete(browsingContext);
            });
            return frame;
        }
        get timeoutSettings() {
            return this.page()._timeoutSettings;
        }
        mainRealm() {
            return this.realms.default;
        }
        isolatedRealm() {
            return this.realms.internal;
        }
        realm(id) {
            for (const realm of Object.values(this.realms)) {
                if (realm.realm.id === id) {
                    return realm;
                }
            }
            return;
        }
        page() {
            let parent = this.#parent;
            while (parent instanceof BidiFrame) {
                parent = parent.#parent;
            }
            return parent;
        }
        url() {
            return this.browsingContext.url;
        }
        parentFrame() {
            if (this.#parent instanceof BidiFrame) {
                return this.#parent;
            }
            return null;
        }
        childFrames() {
            return [...this.browsingContext.children].map(child => {
                return this.#frames.get(child);
            });
        }
        #detached$() {
            return defer(() => {
                if (this.detached) {
                    return of(this);
                }
                return fromEmitterEvent(this.page().trustedEmitter, "framedetached" /* PageEvent.FrameDetached */).pipe(filter(detachedFrame => {
                    return detachedFrame === this;
                }));
            });
        }
        async goto(url, options = {}) {
            const [response] = await Promise.all([
                this.waitForNavigation(options),
                // Some implementations currently only report errors when the
                // readiness=interactive.
                //
                // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
                this.browsingContext
                    .navigate(url, "interactive" /* Bidi.BrowsingContext.ReadinessState.Interactive */)
                    .catch(error => {
                    if (isErrorLike(error) &&
                        error.message.includes('net::ERR_HTTP_RESPONSE_CODE_FAILURE')) {
                        return;
                    }
                    if (error.message.includes('navigation canceled')) {
                        return;
                    }
                    throw error;
                }),
            ]).catch(rewriteNavigationError(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
            return response;
        }
        async setContent(html, options = {}) {
            await Promise.all([
                this.setFrameContent(html),
                firstValueFrom(combineLatest([
                    this.#waitForLoad$(options),
                    this.#waitForNetworkIdle$(options),
                ])),
            ]);
        }
        async waitForNavigation(options = {}) {
            const { timeout: ms = this.timeoutSettings.navigationTimeout(), signal } = options;
            const frames = this.childFrames().map(frame => {
                return frame.#detached$();
            });
            return await firstValueFrom(combineLatest([
                race(fromEmitterEvent(this.browsingContext, 'navigation'), fromEmitterEvent(this.browsingContext, 'historyUpdated').pipe(map(() => {
                    return { navigation: null };
                })))
                    .pipe(first())
                    .pipe(switchMap(({ navigation }) => {
                    if (navigation === null) {
                        return of(null);
                    }
                    return this.#waitForLoad$(options).pipe(delayWhen(() => {
                        if (frames.length === 0) {
                            return of(undefined);
                        }
                        return combineLatest(frames);
                    }), raceWith(fromEmitterEvent(navigation, 'fragment'), fromEmitterEvent(navigation, 'failed'), fromEmitterEvent(navigation, 'aborted').pipe(map(({ url }) => {
                        throw new Error(`Navigation aborted: ${url}`);
                    }))), switchMap(() => {
                        if (navigation.request) {
                            function requestFinished$(request) {
                                if (navigation === null) {
                                    return of(null);
                                }
                                // Reduces flakiness if the response events arrive after
                                // the load event.
                                // Usually, the response or error is already there at this point.
                                if (request.response || request.error) {
                                    return of(navigation);
                                }
                                if (request.redirect) {
                                    return requestFinished$(request.redirect);
                                }
                                return fromEmitterEvent(request, 'success')
                                    .pipe(raceWith(fromEmitterEvent(request, 'error')), raceWith(fromEmitterEvent(request, 'redirect')))
                                    .pipe(switchMap(() => {
                                    return requestFinished$(request);
                                }));
                            }
                            return requestFinished$(navigation.request);
                        }
                        return of(navigation);
                    }));
                })),
                this.#waitForNetworkIdle$(options),
            ]).pipe(map(([navigation]) => {
                if (!navigation) {
                    return null;
                }
                const request = navigation.request;
                if (!request) {
                    return null;
                }
                const lastRequest = request.lastRedirect ?? request;
                const httpRequest = requests.get(lastRequest);
                return httpRequest.response();
            }), raceWith(timeout(ms), fromAbortSignal(signal), this.#detached$().pipe(map(() => {
                throw new TargetCloseError('Frame detached.');
            })))));
        }
        waitForDevicePrompt() {
            throw new UnsupportedOperation();
        }
        get detached() {
            return this.browsingContext.closed;
        }
        #exposedFunctions = new Map();
        async exposeFunction(name, apply) {
            if (this.#exposedFunctions.has(name)) {
                throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
            }
            const exposeable = await ExposeableFunction.from(this, name, apply);
            this.#exposedFunctions.set(name, exposeable);
        }
        async removeExposedFunction(name) {
            const exposedFunction = this.#exposedFunctions.get(name);
            if (!exposedFunction) {
                throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
            }
            this.#exposedFunctions.delete(name);
            await exposedFunction[Symbol.asyncDispose]();
        }
        async createCDPSession() {
            if (!this.page().browser().cdpSupported) {
                throw new UnsupportedOperation();
            }
            const cdpConnection = this.page().browser().cdpConnection;
            return await cdpConnection._createSession({ targetId: this._id });
        }
        get #waitForLoad$() { return _private_waitForLoad$_descriptor.value; }
        get #waitForNetworkIdle$() { return _private_waitForNetworkIdle$_descriptor.value; }
        async setFiles(element, files) {
            await this.browsingContext.setFiles(
            // SAFETY: ElementHandles are always remote references.
            element.remoteValue(), files);
        }
        async locateNodes(element, locator) {
            return await this.browsingContext.locateNodes(locator, 
            // SAFETY: ElementHandles are always remote references.
            [element.remoteValue()]);
        }
    };
})();
function isConsoleLogEntry(event) {
    return event.type === 'console';
}
function isJavaScriptLogEntry(event) {
    return event.type === 'javascript';
}
function getStackTraceLocations(stackTrace) {
    const stackTraceLocations = [];
    if (stackTrace) {
        for (const callFrame of stackTrace.callFrames) {
            stackTraceLocations.push({
                url: callFrame.url,
                lineNumber: callFrame.lineNumber,
                columnNumber: callFrame.columnNumber,
            });
        }
    }
    return stackTraceLocations;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var SourceActionsType;
(function (SourceActionsType) {
    SourceActionsType["None"] = "none";
    SourceActionsType["Key"] = "key";
    SourceActionsType["Pointer"] = "pointer";
    SourceActionsType["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function (ActionType) {
    ActionType["Pause"] = "pause";
    ActionType["KeyDown"] = "keyDown";
    ActionType["KeyUp"] = "keyUp";
    ActionType["PointerUp"] = "pointerUp";
    ActionType["PointerDown"] = "pointerDown";
    ActionType["PointerMove"] = "pointerMove";
    ActionType["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
const getBidiKeyValue = (key) => {
    switch (key) {
        case '\r':
        case '\n':
            key = 'Enter';
            break;
    }
    // Measures the number of code points rather than UTF-16 code units.
    if ([...key].length === 1) {
        return key;
    }
    switch (key) {
        case 'Cancel':
            return '\uE001';
        case 'Help':
            return '\uE002';
        case 'Backspace':
            return '\uE003';
        case 'Tab':
            return '\uE004';
        case 'Clear':
            return '\uE005';
        case 'Enter':
            return '\uE007';
        case 'Shift':
        case 'ShiftLeft':
            return '\uE008';
        case 'Control':
        case 'ControlLeft':
            return '\uE009';
        case 'Alt':
        case 'AltLeft':
            return '\uE00A';
        case 'Pause':
            return '\uE00B';
        case 'Escape':
            return '\uE00C';
        case 'PageUp':
            return '\uE00E';
        case 'PageDown':
            return '\uE00F';
        case 'End':
            return '\uE010';
        case 'Home':
            return '\uE011';
        case 'ArrowLeft':
            return '\uE012';
        case 'ArrowUp':
            return '\uE013';
        case 'ArrowRight':
            return '\uE014';
        case 'ArrowDown':
            return '\uE015';
        case 'Insert':
            return '\uE016';
        case 'Delete':
            return '\uE017';
        case 'NumpadEqual':
            return '\uE019';
        case 'Numpad0':
            return '\uE01A';
        case 'Numpad1':
            return '\uE01B';
        case 'Numpad2':
            return '\uE01C';
        case 'Numpad3':
            return '\uE01D';
        case 'Numpad4':
            return '\uE01E';
        case 'Numpad5':
            return '\uE01F';
        case 'Numpad6':
            return '\uE020';
        case 'Numpad7':
            return '\uE021';
        case 'Numpad8':
            return '\uE022';
        case 'Numpad9':
            return '\uE023';
        case 'NumpadMultiply':
            return '\uE024';
        case 'NumpadAdd':
            return '\uE025';
        case 'NumpadSubtract':
            return '\uE027';
        case 'NumpadDecimal':
            return '\uE028';
        case 'NumpadDivide':
            return '\uE029';
        case 'F1':
            return '\uE031';
        case 'F2':
            return '\uE032';
        case 'F3':
            return '\uE033';
        case 'F4':
            return '\uE034';
        case 'F5':
            return '\uE035';
        case 'F6':
            return '\uE036';
        case 'F7':
            return '\uE037';
        case 'F8':
            return '\uE038';
        case 'F9':
            return '\uE039';
        case 'F10':
            return '\uE03A';
        case 'F11':
            return '\uE03B';
        case 'F12':
            return '\uE03C';
        case 'Meta':
        case 'MetaLeft':
            return '\uE03D';
        case 'ShiftRight':
            return '\uE050';
        case 'ControlRight':
            return '\uE051';
        case 'AltRight':
            return '\uE052';
        case 'MetaRight':
            return '\uE053';
        case 'Digit0':
            return '0';
        case 'Digit1':
            return '1';
        case 'Digit2':
            return '2';
        case 'Digit3':
            return '3';
        case 'Digit4':
            return '4';
        case 'Digit5':
            return '5';
        case 'Digit6':
            return '6';
        case 'Digit7':
            return '7';
        case 'Digit8':
            return '8';
        case 'Digit9':
            return '9';
        case 'KeyA':
            return 'a';
        case 'KeyB':
            return 'b';
        case 'KeyC':
            return 'c';
        case 'KeyD':
            return 'd';
        case 'KeyE':
            return 'e';
        case 'KeyF':
            return 'f';
        case 'KeyG':
            return 'g';
        case 'KeyH':
            return 'h';
        case 'KeyI':
            return 'i';
        case 'KeyJ':
            return 'j';
        case 'KeyK':
            return 'k';
        case 'KeyL':
            return 'l';
        case 'KeyM':
            return 'm';
        case 'KeyN':
            return 'n';
        case 'KeyO':
            return 'o';
        case 'KeyP':
            return 'p';
        case 'KeyQ':
            return 'q';
        case 'KeyR':
            return 'r';
        case 'KeyS':
            return 's';
        case 'KeyT':
            return 't';
        case 'KeyU':
            return 'u';
        case 'KeyV':
            return 'v';
        case 'KeyW':
            return 'w';
        case 'KeyX':
            return 'x';
        case 'KeyY':
            return 'y';
        case 'KeyZ':
            return 'z';
        case 'Semicolon':
            return ';';
        case 'Equal':
            return '=';
        case 'Comma':
            return ',';
        case 'Minus':
            return '-';
        case 'Period':
            return '.';
        case 'Slash':
            return '/';
        case 'Backquote':
            return '`';
        case 'BracketLeft':
            return '[';
        case 'Backslash':
            return '\\';
        case 'BracketRight':
            return ']';
        case 'Quote':
            return '"';
        default:
            throw new Error(`Unknown key: "${key}"`);
    }
};
/**
 * @internal
 */
class BidiKeyboard extends Keyboard {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async down(key, _options) {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Key,
                id: "__puppeteer_keyboard" /* InputId.Keyboard */,
                actions: [
                    {
                        type: ActionType.KeyDown,
                        value: getBidiKeyValue(key),
                    },
                ],
            },
        ]);
    }
    async up(key) {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Key,
                id: "__puppeteer_keyboard" /* InputId.Keyboard */,
                actions: [
                    {
                        type: ActionType.KeyUp,
                        value: getBidiKeyValue(key),
                    },
                ],
            },
        ]);
    }
    async press(key, options = {}) {
        const { delay = 0 } = options;
        const actions = [
            {
                type: ActionType.KeyDown,
                value: getBidiKeyValue(key),
            },
        ];
        if (delay > 0) {
            actions.push({
                type: ActionType.Pause,
                duration: delay,
            });
        }
        actions.push({
            type: ActionType.KeyUp,
            value: getBidiKeyValue(key),
        });
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Key,
                id: "__puppeteer_keyboard" /* InputId.Keyboard */,
                actions,
            },
        ]);
    }
    async type(text, options = {}) {
        const { delay = 0 } = options;
        // This spread separates the characters into code points rather than UTF-16
        // code units.
        const values = [...text].map(getBidiKeyValue);
        const actions = [];
        if (delay <= 0) {
            for (const value of values) {
                actions.push({
                    type: ActionType.KeyDown,
                    value,
                }, {
                    type: ActionType.KeyUp,
                    value,
                });
            }
        }
        else {
            for (const value of values) {
                actions.push({
                    type: ActionType.KeyDown,
                    value,
                }, {
                    type: ActionType.Pause,
                    duration: delay,
                }, {
                    type: ActionType.KeyUp,
                    value,
                });
            }
        }
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Key,
                id: "__puppeteer_keyboard" /* InputId.Keyboard */,
                actions,
            },
        ]);
    }
    async sendCharacter(char) {
        // Measures the number of code points rather than UTF-16 code units.
        if ([...char].length > 1) {
            throw new Error('Cannot send more than 1 character.');
        }
        const frame = await this.#page.focusedFrame();
        await frame.isolatedRealm().evaluate(async (char) => {
            document.execCommand('insertText', false, char);
        }, char);
    }
}
const getBidiButton = (button) => {
    switch (button) {
        case MouseButton.Left:
            return 0;
        case MouseButton.Middle:
            return 1;
        case MouseButton.Right:
            return 2;
        case MouseButton.Back:
            return 3;
        case MouseButton.Forward:
            return 4;
    }
};
/**
 * @internal
 */
class BidiMouse extends Mouse {
    #page;
    #lastMovePoint = { x: 0, y: 0 };
    constructor(page) {
        super();
        this.#page = page;
    }
    async reset() {
        this.#lastMovePoint = { x: 0, y: 0 };
        await this.#page.mainFrame().browsingContext.releaseActions();
    }
    async move(x, y, options = {}) {
        const from = this.#lastMovePoint;
        const to = {
            x: Math.round(x),
            y: Math.round(y),
        };
        const actions = [];
        const steps = options.steps ?? 0;
        for (let i = 0; i < steps; ++i) {
            actions.push({
                type: ActionType.PointerMove,
                x: from.x + (to.x - from.x) * (i / steps),
                y: from.y + (to.y - from.y) * (i / steps),
                origin: options.origin,
            });
        }
        actions.push({
            type: ActionType.PointerMove,
            ...to,
            origin: options.origin,
        });
        // https://w3c.github.io/webdriver-bidi/#command-input-performActions:~:text=input.PointerMoveAction%20%3D%20%7B%0A%20%20type%3A%20%22pointerMove%22%2C%0A%20%20x%3A%20js%2Dint%2C
        this.#lastMovePoint = to;
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: "__puppeteer_mouse" /* InputId.Mouse */,
                actions,
            },
        ]);
    }
    async down(options = {}) {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: "__puppeteer_mouse" /* InputId.Mouse */,
                actions: [
                    {
                        type: ActionType.PointerDown,
                        button: getBidiButton(options.button ?? MouseButton.Left),
                    },
                ],
            },
        ]);
    }
    async up(options = {}) {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: "__puppeteer_mouse" /* InputId.Mouse */,
                actions: [
                    {
                        type: ActionType.PointerUp,
                        button: getBidiButton(options.button ?? MouseButton.Left),
                    },
                ],
            },
        ]);
    }
    async click(x, y, options = {}) {
        const actions = [
            {
                type: ActionType.PointerMove,
                x: Math.round(x),
                y: Math.round(y),
                origin: options.origin,
            },
        ];
        const pointerDownAction = {
            type: ActionType.PointerDown,
            button: getBidiButton(options.button ?? MouseButton.Left),
        };
        const pointerUpAction = {
            type: ActionType.PointerUp,
            button: pointerDownAction.button,
        };
        for (let i = 1; i < (options.count ?? 1); ++i) {
            actions.push(pointerDownAction, pointerUpAction);
        }
        actions.push(pointerDownAction);
        if (options.delay) {
            actions.push({
                type: ActionType.Pause,
                duration: options.delay,
            });
        }
        actions.push(pointerUpAction);
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: "__puppeteer_mouse" /* InputId.Mouse */,
                actions,
            },
        ]);
    }
    async wheel(options = {}) {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Wheel,
                id: "__puppeteer_wheel" /* InputId.Wheel */,
                actions: [
                    {
                        type: ActionType.Scroll,
                        ...(this.#lastMovePoint ?? {
                            x: 0,
                            y: 0,
                        }),
                        deltaX: options.deltaX ?? 0,
                        deltaY: options.deltaY ?? 0,
                    },
                ],
            },
        ]);
    }
    drag() {
        throw new UnsupportedOperation();
    }
    dragOver() {
        throw new UnsupportedOperation();
    }
    dragEnter() {
        throw new UnsupportedOperation();
    }
    drop() {
        throw new UnsupportedOperation();
    }
    dragAndDrop() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiTouchHandle {
    #started = false;
    #x;
    #y;
    #bidiId;
    #page;
    #touchScreen;
    #properties;
    constructor(page, touchScreen, id, x, y, properties) {
        this.#page = page;
        this.#touchScreen = touchScreen;
        this.#x = Math.round(x);
        this.#y = Math.round(y);
        this.#properties = properties;
        this.#bidiId = `${"__puppeteer_finger" /* InputId.Finger */}_${id}`;
    }
    async start(options = {}) {
        if (this.#started) {
            throw new TouchError('Touch has already started');
        }
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: this.#bidiId,
                parameters: {
                    pointerType: "touch" /* Bidi.Input.PointerType.Touch */,
                },
                actions: [
                    {
                        type: ActionType.PointerMove,
                        x: this.#x,
                        y: this.#y,
                        origin: options.origin,
                    },
                    {
                        ...this.#properties,
                        type: ActionType.PointerDown,
                        button: 0,
                    },
                ],
            },
        ]);
        this.#started = true;
    }
    move(x, y) {
        const newX = Math.round(x);
        const newY = Math.round(y);
        return this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: this.#bidiId,
                parameters: {
                    pointerType: "touch" /* Bidi.Input.PointerType.Touch */,
                },
                actions: [
                    {
                        ...this.#properties,
                        type: ActionType.PointerMove,
                        x: newX,
                        y: newY,
                    },
                ],
            },
        ]);
    }
    async end() {
        await this.#page.mainFrame().browsingContext.performActions([
            {
                type: SourceActionsType.Pointer,
                id: this.#bidiId,
                parameters: {
                    pointerType: "touch" /* Bidi.Input.PointerType.Touch */,
                },
                actions: [
                    {
                        type: ActionType.PointerUp,
                        button: 0,
                    },
                ],
            },
        ]);
        this.#touchScreen.removeHandle(this);
    }
}
/**
 * @internal
 */
class BidiTouchscreen extends Touchscreen {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async touchStart(x, y, options = {}) {
        const id = this.idGenerator();
        const properties = {
            width: 0.5 * 2, // 2 times default touch radius.
            height: 0.5 * 2, // 2 times default touch radius.
            pressure: 0.5,
            altitudeAngle: Math.PI / 2,
        };
        const touch = new BidiTouchHandle(this.#page, this, id, x, y, properties);
        await touch.start(options);
        this.touches.push(touch);
        return touch;
    }
}

/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$4 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers$4 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __addDisposableResource$2 = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources$2 = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * Implements Page using WebDriver BiDi.
 *
 * @internal
 */
let BidiPage = (() => {
    let _classSuper = Page;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return class BidiPage extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _trustedEmitter_decorators = [bubble()];
            __esDecorate$4(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browserContext, browsingContext) {
            const page = new BidiPage(browserContext, browsingContext);
            page.#initialize();
            return page;
        }
        #trustedEmitter_accessor_storage = __runInitializers$4(this, _trustedEmitter_initializers, new EventEmitter$1());
        get trustedEmitter() { return this.#trustedEmitter_accessor_storage; }
        set trustedEmitter(value) { this.#trustedEmitter_accessor_storage = value; }
        #browserContext = __runInitializers$4(this, _trustedEmitter_extraInitializers);
        #frame;
        #viewport = null;
        #workers = new Set();
        keyboard;
        mouse;
        touchscreen;
        tracing;
        coverage;
        #cdpEmulationManager;
        #emulatedNetworkConditions;
        _client() {
            return this.#frame.client;
        }
        constructor(browserContext, browsingContext) {
            super();
            this.#browserContext = browserContext;
            this.#frame = BidiFrame.from(this, browsingContext);
            this.#cdpEmulationManager = new EmulationManager(this.#frame.client);
            this.tracing = new Tracing(this.#frame.client);
            this.coverage = new Coverage(this.#frame.client);
            this.keyboard = new BidiKeyboard(this);
            this.mouse = new BidiMouse(this);
            this.touchscreen = new BidiTouchscreen(this);
        }
        #initialize() {
            this.#frame.browsingContext.on('closed', () => {
                this.trustedEmitter.emit("close" /* PageEvent.Close */, undefined);
                this.trustedEmitter.removeAllListeners();
            });
            this.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */, worker => {
                this.#workers.add(worker);
            });
            this.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker => {
                this.#workers.delete(worker);
            });
        }
        /**
         * @internal
         */
        _userAgentHeaders = {};
        #userAgentInterception;
        #userAgentPreloadScript;
        async setUserAgent(userAgent, userAgentMetadata) {
            if (!this.#browserContext.browser().cdpSupported && userAgentMetadata) {
                throw new UnsupportedOperation('Current Browser does not support `userAgentMetadata`');
            }
            else if (this.#browserContext.browser().cdpSupported &&
                userAgentMetadata) {
                return await this._client().send('Network.setUserAgentOverride', {
                    userAgent: userAgent,
                    userAgentMetadata: userAgentMetadata,
                });
            }
            const enable = userAgent !== '';
            userAgent = userAgent ?? (await this.#browserContext.browser().userAgent());
            this._userAgentHeaders = enable
                ? {
                    'User-Agent': userAgent,
                }
                : {};
            this.#userAgentInterception = await this.#toggleInterception(["beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */], this.#userAgentInterception, enable);
            const changeUserAgent = (userAgent) => {
                Object.defineProperty(navigator, 'userAgent', {
                    value: userAgent,
                });
            };
            const frames = [this.#frame];
            for (const frame of frames) {
                frames.push(...frame.childFrames());
            }
            if (this.#userAgentPreloadScript) {
                await this.removeScriptToEvaluateOnNewDocument(this.#userAgentPreloadScript);
            }
            const [evaluateToken] = await Promise.all([
                enable
                    ? this.evaluateOnNewDocument(changeUserAgent, userAgent)
                    : undefined,
                // When we disable the UserAgent we want to
                // evaluate the original value in all Browsing Contexts
                frames.map(frame => {
                    return frame.evaluate(changeUserAgent, userAgent);
                }),
            ]);
            this.#userAgentPreloadScript = evaluateToken?.identifier;
        }
        async setBypassCSP(enabled) {
            // TODO: handle CDP-specific cases such as mprach.
            await this._client().send('Page.setBypassCSP', { enabled });
        }
        async queryObjects(prototypeHandle) {
            assert$1(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
            assert$1(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
            const response = await this.#frame.client.send('Runtime.queryObjects', {
                prototypeObjectId: prototypeHandle.id,
            });
            return this.#frame.mainRealm().createHandle({
                type: 'array',
                handle: response.objects.objectId,
            });
        }
        browser() {
            return this.browserContext().browser();
        }
        browserContext() {
            return this.#browserContext;
        }
        mainFrame() {
            return this.#frame;
        }
        async focusedFrame() {
            const env_1 = { stack: [], error: undefined, hasError: false };
            try {
                const handle = __addDisposableResource$2(env_1, (await this.mainFrame()
                    .isolatedRealm()
                    .evaluateHandle(() => {
                    let win = window;
                    while (win.document.activeElement instanceof win.HTMLIFrameElement ||
                        win.document.activeElement instanceof win.HTMLFrameElement) {
                        if (win.document.activeElement.contentWindow === null) {
                            break;
                        }
                        win = win.document.activeElement.contentWindow;
                    }
                    return win;
                })), false);
                const value = handle.remoteValue();
                assert$1(value.type === 'window');
                const frame = this.frames().find(frame => {
                    return frame._id === value.value.context;
                });
                assert$1(frame);
                return frame;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources$2(env_1);
            }
        }
        frames() {
            const frames = [this.#frame];
            for (const frame of frames) {
                frames.push(...frame.childFrames());
            }
            return frames;
        }
        isClosed() {
            return this.#frame.detached;
        }
        async close(options) {
            const env_2 = { stack: [], error: undefined, hasError: false };
            try {
                const _guard = __addDisposableResource$2(env_2, await this.#browserContext.waitForScreenshotOperations(), false);
                try {
                    await this.#frame.browsingContext.close(options?.runBeforeUnload);
                }
                catch {
                    return;
                }
            }
            catch (e_2) {
                env_2.error = e_2;
                env_2.hasError = true;
            }
            finally {
                __disposeResources$2(env_2);
            }
        }
        async reload(options = {}) {
            const [response] = await Promise.all([
                this.#frame.waitForNavigation(options),
                this.#frame.browsingContext.reload(),
            ]).catch(rewriteNavigationError(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
            return response;
        }
        setDefaultNavigationTimeout(timeout) {
            this._timeoutSettings.setDefaultNavigationTimeout(timeout);
        }
        setDefaultTimeout(timeout) {
            this._timeoutSettings.setDefaultTimeout(timeout);
        }
        getDefaultTimeout() {
            return this._timeoutSettings.timeout();
        }
        getDefaultNavigationTimeout() {
            return this._timeoutSettings.navigationTimeout();
        }
        isJavaScriptEnabled() {
            return this.#cdpEmulationManager.javascriptEnabled;
        }
        async setGeolocation(options) {
            return await this.#cdpEmulationManager.setGeolocation(options);
        }
        async setJavaScriptEnabled(enabled) {
            return await this.#cdpEmulationManager.setJavaScriptEnabled(enabled);
        }
        async emulateMediaType(type) {
            return await this.#cdpEmulationManager.emulateMediaType(type);
        }
        async emulateCPUThrottling(factor) {
            return await this.#cdpEmulationManager.emulateCPUThrottling(factor);
        }
        async emulateMediaFeatures(features) {
            return await this.#cdpEmulationManager.emulateMediaFeatures(features);
        }
        async emulateTimezone(timezoneId) {
            return await this.#cdpEmulationManager.emulateTimezone(timezoneId);
        }
        async emulateIdleState(overrides) {
            return await this.#cdpEmulationManager.emulateIdleState(overrides);
        }
        async emulateVisionDeficiency(type) {
            return await this.#cdpEmulationManager.emulateVisionDeficiency(type);
        }
        async setViewport(viewport) {
            if (!this.browser().cdpSupported) {
                await this.#frame.browsingContext.setViewport({
                    viewport: viewport?.width && viewport?.height
                        ? {
                            width: viewport.width,
                            height: viewport.height,
                        }
                        : null,
                    devicePixelRatio: viewport?.deviceScaleFactor
                        ? viewport.deviceScaleFactor
                        : null,
                });
                this.#viewport = viewport;
                return;
            }
            const needsReload = await this.#cdpEmulationManager.emulateViewport(viewport);
            this.#viewport = viewport;
            if (needsReload) {
                await this.reload();
            }
        }
        viewport() {
            return this.#viewport;
        }
        async pdf(options = {}) {
            const { timeout: ms = this._timeoutSettings.timeout(), path = undefined } = options;
            const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize, } = parsePDFOptions(options, 'cm');
            const pageRanges = ranges ? ranges.split(', ') : [];
            await firstValueFrom(from(this.mainFrame()
                .isolatedRealm()
                .evaluate(() => {
                return document.fonts.ready;
            })).pipe(raceWith(timeout(ms))));
            const data = await firstValueFrom(from(this.#frame.browsingContext.print({
                background,
                margin,
                orientation: landscape ? 'landscape' : 'portrait',
                page: {
                    width,
                    height,
                },
                pageRanges,
                scale,
                shrinkToFit: !preferCSSPageSize,
            })).pipe(raceWith(timeout(ms))));
            const typedArray = stringToTypedArray(data, true);
            await this._maybeWriteTypedArrayToFile(path, typedArray);
            return typedArray;
        }
        async createPDFStream(options) {
            const typedArray = await this.pdf(options);
            return new ReadableStream({
                start(controller) {
                    controller.enqueue(typedArray);
                    controller.close();
                },
            });
        }
        async _screenshot(options) {
            const { clip, type, captureBeyondViewport, quality } = options;
            if (options.omitBackground !== undefined && options.omitBackground) {
                throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
            }
            if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
                throw new UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
            }
            if (options.fromSurface !== undefined && !options.fromSurface) {
                throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
            }
            if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
                throw new UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
            }
            let box;
            if (clip) {
                if (captureBeyondViewport) {
                    box = clip;
                }
                else {
                    // The clip is always with respect to the document coordinates, so we
                    // need to convert this to viewport coordinates when we aren't capturing
                    // beyond the viewport.
                    const [pageLeft, pageTop] = await this.evaluate(() => {
                        if (!window.visualViewport) {
                            throw new Error('window.visualViewport is not supported.');
                        }
                        return [
                            window.visualViewport.pageLeft,
                            window.visualViewport.pageTop,
                        ];
                    });
                    box = {
                        ...clip,
                        x: clip.x - pageLeft,
                        y: clip.y - pageTop,
                    };
                }
            }
            const data = await this.#frame.browsingContext.captureScreenshot({
                origin: captureBeyondViewport ? 'document' : 'viewport',
                format: {
                    type: `image/${type}`,
                    ...(quality !== undefined ? { quality: quality / 100 } : {}),
                },
                ...(box ? { clip: { type: 'box', ...box } } : {}),
            });
            return data;
        }
        async createCDPSession() {
            return await this.#frame.createCDPSession();
        }
        async bringToFront() {
            await this.#frame.browsingContext.activate();
        }
        async evaluateOnNewDocument(pageFunction, ...args) {
            const expression = evaluationExpression(pageFunction, ...args);
            const script = await this.#frame.browsingContext.addPreloadScript(expression);
            return { identifier: script };
        }
        async removeScriptToEvaluateOnNewDocument(id) {
            await this.#frame.browsingContext.removePreloadScript(id);
        }
        async exposeFunction(name, pptrFunction) {
            return await this.mainFrame().exposeFunction(name, 'default' in pptrFunction ? pptrFunction.default : pptrFunction);
        }
        isDragInterceptionEnabled() {
            return false;
        }
        async setCacheEnabled(enabled) {
            if (!this.#browserContext.browser().cdpSupported) {
                await this.#frame.browsingContext.setCacheBehavior(enabled ? 'default' : 'bypass');
                return;
            }
            // TODO: handle CDP-specific cases such as mprach.
            await this._client().send('Network.setCacheDisabled', {
                cacheDisabled: !enabled,
            });
        }
        async cookies(...urls) {
            const normalizedUrls = (urls.length ? urls : [this.url()]).map(url => {
                return new URL(url);
            });
            const cookies = await this.#frame.browsingContext.getCookies();
            return cookies
                .map(cookie => {
                return bidiToPuppeteerCookie(cookie);
            })
                .filter(cookie => {
                return normalizedUrls.some(url => {
                    return testUrlMatchCookie(cookie, url);
                });
            });
        }
        isServiceWorkerBypassed() {
            throw new UnsupportedOperation();
        }
        target() {
            throw new UnsupportedOperation();
        }
        waitForFileChooser() {
            throw new UnsupportedOperation();
        }
        workers() {
            return [...this.#workers];
        }
        #userInterception;
        async setRequestInterception(enable) {
            this.#userInterception = await this.#toggleInterception(["beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */], this.#userInterception, enable);
        }
        /**
         * @internal
         */
        _extraHTTPHeaders = {};
        #extraHeadersInterception;
        async setExtraHTTPHeaders(headers) {
            const extraHTTPHeaders = {};
            for (const [key, value] of Object.entries(headers)) {
                assert$1(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
                extraHTTPHeaders[key.toLowerCase()] = value;
            }
            this._extraHTTPHeaders = extraHTTPHeaders;
            this.#extraHeadersInterception = await this.#toggleInterception(["beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */], this.#extraHeadersInterception, Boolean(Object.keys(this._extraHTTPHeaders).length));
        }
        /**
         * @internal
         */
        _credentials = null;
        #authInterception;
        async authenticate(credentials) {
            this.#authInterception = await this.#toggleInterception(["authRequired" /* Bidi.Network.InterceptPhase.AuthRequired */], this.#authInterception, Boolean(credentials));
            this._credentials = credentials;
        }
        async #toggleInterception(phases, interception, expected) {
            if (expected && !interception) {
                return await this.#frame.browsingContext.addIntercept({
                    phases,
                });
            }
            else if (!expected && interception) {
                await this.#frame.browsingContext.userContext.browser.removeIntercept(interception);
                return;
            }
            return interception;
        }
        setDragInterception() {
            throw new UnsupportedOperation();
        }
        setBypassServiceWorker() {
            throw new UnsupportedOperation();
        }
        async setOfflineMode(enabled) {
            if (!this.#browserContext.browser().cdpSupported) {
                throw new UnsupportedOperation();
            }
            if (!this.#emulatedNetworkConditions) {
                this.#emulatedNetworkConditions = {
                    offline: false,
                    upload: -1,
                    download: -1,
                    latency: 0,
                };
            }
            this.#emulatedNetworkConditions.offline = enabled;
            return await this.#applyNetworkConditions();
        }
        async emulateNetworkConditions(networkConditions) {
            if (!this.#browserContext.browser().cdpSupported) {
                throw new UnsupportedOperation();
            }
            if (!this.#emulatedNetworkConditions) {
                this.#emulatedNetworkConditions = {
                    offline: false,
                    upload: -1,
                    download: -1,
                    latency: 0,
                };
            }
            this.#emulatedNetworkConditions.upload = networkConditions
                ? networkConditions.upload
                : -1;
            this.#emulatedNetworkConditions.download = networkConditions
                ? networkConditions.download
                : -1;
            this.#emulatedNetworkConditions.latency = networkConditions
                ? networkConditions.latency
                : 0;
            return await this.#applyNetworkConditions();
        }
        async #applyNetworkConditions() {
            if (!this.#emulatedNetworkConditions) {
                return;
            }
            await this._client().send('Network.emulateNetworkConditions', {
                offline: this.#emulatedNetworkConditions.offline,
                latency: this.#emulatedNetworkConditions.latency,
                uploadThroughput: this.#emulatedNetworkConditions.upload,
                downloadThroughput: this.#emulatedNetworkConditions.download,
            });
        }
        async setCookie(...cookies) {
            const pageURL = this.url();
            const pageUrlStartsWithHTTP = pageURL.startsWith('http');
            for (const cookie of cookies) {
                let cookieUrl = cookie.url || '';
                if (!cookieUrl && pageUrlStartsWithHTTP) {
                    cookieUrl = pageURL;
                }
                assert$1(cookieUrl !== 'about:blank', `Blank page can not have cookie "${cookie.name}"`);
                assert$1(!String.prototype.startsWith.call(cookieUrl || '', 'data:'), `Data URL page can not have cookie "${cookie.name}"`);
                // TODO: Support Chrome cookie partition keys
                assert$1(cookie.partitionKey === undefined ||
                    typeof cookie.partitionKey === 'string', 'BiDi only allows domain partition keys');
                const normalizedUrl = URL.canParse(cookieUrl)
                    ? new URL(cookieUrl)
                    : undefined;
                const domain = cookie.domain ?? normalizedUrl?.hostname;
                assert$1(domain !== undefined, `At least one of the url and domain needs to be specified`);
                const bidiCookie = {
                    domain: domain,
                    name: cookie.name,
                    value: {
                        type: 'string',
                        value: cookie.value,
                    },
                    ...(cookie.path !== undefined ? { path: cookie.path } : {}),
                    ...(cookie.httpOnly !== undefined ? { httpOnly: cookie.httpOnly } : {}),
                    ...(cookie.secure !== undefined ? { secure: cookie.secure } : {}),
                    ...(cookie.sameSite !== undefined
                        ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) }
                        : {}),
                    ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
                    // Chrome-specific properties.
                    ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, 'sameParty', 'sourceScheme', 'priority', 'url'),
                };
                if (cookie.partitionKey !== undefined) {
                    await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
                }
                else {
                    await this.#frame.browsingContext.setCookie(bidiCookie);
                }
            }
        }
        async deleteCookie(...cookies) {
            await Promise.all(cookies.map(async (deleteCookieRequest) => {
                const cookieUrl = deleteCookieRequest.url ?? this.url();
                const normalizedUrl = URL.canParse(cookieUrl)
                    ? new URL(cookieUrl)
                    : undefined;
                const domain = deleteCookieRequest.domain ?? normalizedUrl?.hostname;
                assert$1(domain !== undefined, `At least one of the url and domain needs to be specified`);
                const filter = {
                    domain: domain,
                    name: deleteCookieRequest.name,
                    ...(deleteCookieRequest.path !== undefined
                        ? { path: deleteCookieRequest.path }
                        : {}),
                };
                await this.#frame.browsingContext.deleteCookie(filter);
            }));
        }
        async removeExposedFunction(name) {
            await this.#frame.removeExposedFunction(name);
        }
        metrics() {
            throw new UnsupportedOperation();
        }
        async goBack(options = {}) {
            return await this.#go(-1, options);
        }
        async goForward(options = {}) {
            return await this.#go(1, options);
        }
        async #go(delta, options) {
            const controller = new AbortController();
            try {
                const [response] = await Promise.all([
                    this.waitForNavigation({
                        ...options,
                        signal: controller.signal,
                    }),
                    this.#frame.browsingContext.traverseHistory(delta),
                ]);
                return response;
            }
            catch (error) {
                controller.abort();
                if (isErrorLike(error)) {
                    if (error.message.includes('no such history entry')) {
                        return null;
                    }
                }
                throw error;
            }
        }
        waitForDevicePrompt() {
            throw new UnsupportedOperation();
        }
    };
})();
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function evaluationExpression(fun, ...args) {
    return `() => {${evaluationString(fun, ...args)}}`;
}
/**
 * Check domains match.
 */
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
    const cookieDomain = cookie.domain.toLowerCase();
    const urlHostname = normalizedUrl.hostname.toLowerCase();
    if (cookieDomain === urlHostname) {
        return true;
    }
    // TODO: does not consider additional restrictions w.r.t to IP
    // addresses which is fine as it is for representation and does not
    // mean that cookies actually apply that way in the browser.
    // https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3
    return cookieDomain.startsWith('.') && urlHostname.endsWith(cookieDomain);
}
/**
 * Check paths match.
 * Spec: https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4
 */
function testUrlMatchCookiePath(cookie, normalizedUrl) {
    const uriPath = normalizedUrl.pathname;
    const cookiePath = cookie.path;
    if (uriPath === cookiePath) {
        // The cookie-path and the request-path are identical.
        return true;
    }
    if (uriPath.startsWith(cookiePath)) {
        // The cookie-path is a prefix of the request-path.
        if (cookiePath.endsWith('/')) {
            // The last character of the cookie-path is %x2F ("/").
            return true;
        }
        if (uriPath[cookiePath.length] === '/') {
            // The first character of the request-path that is not included in the cookie-path
            // is a %x2F ("/") character.
            return true;
        }
    }
    return false;
}
/**
 * Checks the cookie matches the URL according to the spec:
 */
function testUrlMatchCookie(cookie, url) {
    const normalizedUrl = new URL(url);
    assert$1(cookie !== undefined);
    if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
        return false;
    }
    return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie, returnCompositePartitionKey = false) {
    const partitionKey = bidiCookie[CDP_SPECIFIC_PREFIX + 'partitionKey'];
    function getParitionKey() {
        if (typeof partitionKey === 'string') {
            return { partitionKey };
        }
        if (typeof partitionKey === 'object' && partitionKey !== null) {
            if (returnCompositePartitionKey) {
                return {
                    partitionKey: {
                        sourceOrigin: partitionKey.topLevelSite,
                        hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false,
                    },
                };
            }
            return {
                // TODO: a breaking change in Puppeteer is required to change
                // partitionKey type and report the composite partition key.
                partitionKey: partitionKey.topLevelSite,
            };
        }
        return {};
    }
    return {
        name: bidiCookie.name,
        // Presents binary value as base64 string.
        value: bidiCookie.value.value,
        domain: bidiCookie.domain,
        path: bidiCookie.path,
        size: bidiCookie.size,
        httpOnly: bidiCookie.httpOnly,
        secure: bidiCookie.secure,
        sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
        expires: bidiCookie.expiry ?? -1,
        session: bidiCookie.expiry === undefined || bidiCookie.expiry <= 0,
        // Extending with CDP-specific properties with `goog:` prefix.
        ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, 'sameParty', 'sourceScheme', 'partitionKeyOpaque', 'priority'),
        ...getParitionKey(),
    };
}
const CDP_SPECIFIC_PREFIX = 'goog:';
/**
 * Gets CDP-specific properties from the BiDi cookie and returns them as a new object.
 */
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== undefined) {
            result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
        }
    }
    return result;
}
/**
 * Gets CDP-specific properties from the cookie, adds CDP-specific prefixes and returns
 * them as a new object which can be used in BiDi.
 */
function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (cookieParam[property] !== undefined) {
            result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
        }
    }
    return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
    return sameSite === 'strict' ? 'Strict' : sameSite === 'lax' ? 'Lax' : 'None';
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
    return sameSite === 'Strict'
        ? "strict" /* Bidi.Network.SameSite.Strict */
        : sameSite === 'Lax'
            ? "lax" /* Bidi.Network.SameSite.Lax */
            : "none" /* Bidi.Network.SameSite.None */;
}
function convertCookiesExpiryCdpToBiDi(expiry) {
    return [undefined, -1].includes(expiry) ? undefined : expiry;
}
function convertCookiesPartitionKeyFromPuppeteerToBiDi(partitionKey) {
    if (partitionKey === undefined || typeof partitionKey === 'string') {
        return partitionKey;
    }
    if (partitionKey.hasCrossSiteAncestor) {
        throw new UnsupportedOperation('WebDriver BiDi does not support `hasCrossSiteAncestor` yet.');
    }
    return partitionKey.sourceOrigin;
}

/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class BidiBrowserTarget extends Target {
    #browser;
    constructor(browser) {
        super();
        this.#browser = browser;
    }
    asPage() {
        throw new UnsupportedOperation();
    }
    url() {
        return '';
    }
    createCDPSession() {
        throw new UnsupportedOperation();
    }
    type() {
        return TargetType.BROWSER;
    }
    browser() {
        return this.#browser;
    }
    browserContext() {
        return this.#browser.defaultBrowserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiPageTarget extends Target {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async page() {
        return this.#page;
    }
    async asPage() {
        return BidiPage.from(this.browserContext(), this.#page.mainFrame().browsingContext);
    }
    url() {
        return this.#page.url();
    }
    createCDPSession() {
        return this.#page.createCDPSession();
    }
    type() {
        return TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#page.browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiFrameTarget extends Target {
    #frame;
    #page;
    constructor(frame) {
        super();
        this.#frame = frame;
    }
    async page() {
        if (this.#page === undefined) {
            this.#page = BidiPage.from(this.browserContext(), this.#frame.browsingContext);
        }
        return this.#page;
    }
    async asPage() {
        return BidiPage.from(this.browserContext(), this.#frame.browsingContext);
    }
    url() {
        return this.#frame.url();
    }
    createCDPSession() {
        return this.#frame.createCDPSession();
    }
    type() {
        return TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#frame.page().browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiWorkerTarget extends Target {
    #worker;
    constructor(worker) {
        super();
        this.#worker = worker;
    }
    async page() {
        throw new UnsupportedOperation();
    }
    async asPage() {
        throw new UnsupportedOperation();
    }
    url() {
        return this.#worker.url();
    }
    createCDPSession() {
        throw new UnsupportedOperation();
    }
    type() {
        return TargetType.OTHER;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#worker.frame.page().browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}

/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$3 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers$3 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __addDisposableResource$1 = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources$1 = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @internal
 */
let BidiBrowserContext = (() => {
    let _classSuper = BrowserContext;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return class BidiBrowserContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _trustedEmitter_decorators = [bubble()];
            __esDecorate$3(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browser, userContext, options) {
            const context = new BidiBrowserContext(browser, userContext, options);
            context.#initialize();
            return context;
        }
        #trustedEmitter_accessor_storage = __runInitializers$3(this, _trustedEmitter_initializers, new EventEmitter$1());
        get trustedEmitter() { return this.#trustedEmitter_accessor_storage; }
        set trustedEmitter(value) { this.#trustedEmitter_accessor_storage = value; }
        #browser = __runInitializers$3(this, _trustedEmitter_extraInitializers);
        #defaultViewport;
        // This is public because of cookies.
        userContext;
        #pages = new WeakMap();
        #targets = new Map();
        #overrides = [];
        constructor(browser, userContext, options) {
            super();
            this.#browser = browser;
            this.userContext = userContext;
            this.#defaultViewport = options.defaultViewport;
        }
        #initialize() {
            // Create targets for existing browsing contexts.
            for (const browsingContext of this.userContext.browsingContexts) {
                this.#createPage(browsingContext);
            }
            this.userContext.on('browsingcontext', ({ browsingContext }) => {
                const page = this.#createPage(browsingContext);
                // We need to wait for the DOMContentLoaded as the
                // browsingContext still may be navigating from the about:blank
                if (browsingContext.originalOpener) {
                    for (const context of this.userContext.browsingContexts) {
                        if (context.id === browsingContext.originalOpener) {
                            this.#pages
                                .get(context)
                                .trustedEmitter.emit("popup" /* PageEvent.Popup */, page);
                        }
                    }
                }
            });
            this.userContext.on('closed', () => {
                this.trustedEmitter.removeAllListeners();
            });
        }
        #createPage(browsingContext) {
            const page = BidiPage.from(this, browsingContext);
            this.#pages.set(browsingContext, page);
            page.trustedEmitter.on("close" /* PageEvent.Close */, () => {
                this.#pages.delete(browsingContext);
            });
            // -- Target stuff starts here --
            const pageTarget = new BidiPageTarget(page);
            const pageTargets = new Map();
            this.#targets.set(page, [pageTarget, pageTargets]);
            page.trustedEmitter.on("frameattached" /* PageEvent.FrameAttached */, frame => {
                const bidiFrame = frame;
                const target = new BidiFrameTarget(bidiFrame);
                pageTargets.set(bidiFrame, target);
                this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
            });
            page.trustedEmitter.on("framenavigated" /* PageEvent.FrameNavigated */, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                // If there is no target, then this is the page's frame.
                if (target === undefined) {
                    this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */, pageTarget);
                }
                else {
                    this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */, target);
                }
            });
            page.trustedEmitter.on("framedetached" /* PageEvent.FrameDetached */, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(bidiFrame);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
            });
            page.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */, worker => {
                const bidiWorker = worker;
                const target = new BidiWorkerTarget(bidiWorker);
                pageTargets.set(bidiWorker, target);
                this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
            });
            page.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker => {
                const bidiWorker = worker;
                const target = pageTargets.get(bidiWorker);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(worker);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
            });
            page.trustedEmitter.on("close" /* PageEvent.Close */, () => {
                this.#targets.delete(page);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, pageTarget);
            });
            this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, pageTarget);
            // -- Target stuff ends here --
            return page;
        }
        targets() {
            return [...this.#targets.values()].flatMap(([target, frames]) => {
                return [target, ...frames.values()];
            });
        }
        async newPage() {
            const env_1 = { stack: [], error: undefined, hasError: false };
            try {
                const _guard = __addDisposableResource$1(env_1, await this.waitForScreenshotOperations(), false);
                const context = await this.userContext.createBrowsingContext("tab" /* Bidi.BrowsingContext.CreateType.Tab */);
                const page = this.#pages.get(context);
                if (!page) {
                    throw new Error('Page is not found');
                }
                if (this.#defaultViewport) {
                    try {
                        await page.setViewport(this.#defaultViewport);
                    }
                    catch {
                        // No support for setViewport in Firefox.
                    }
                }
                return page;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources$1(env_1);
            }
        }
        async close() {
            assert$1(this.userContext.id !== UserContext.DEFAULT, 'Default BrowserContext cannot be closed!');
            try {
                await this.userContext.remove();
            }
            catch (error) {
                debugError(error);
            }
            this.#targets.clear();
        }
        browser() {
            return this.#browser;
        }
        async pages() {
            return [...this.userContext.browsingContexts].map(context => {
                return this.#pages.get(context);
            });
        }
        async overridePermissions(origin, permissions) {
            const permissionsSet = new Set(permissions.map(permission => {
                const protocolPermission = WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
                if (!protocolPermission) {
                    throw new Error('Unknown permission: ' + permission);
                }
                return permission;
            }));
            await Promise.all(Array.from(WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map(permission => {
                const result = this.userContext.setPermissions(origin, {
                    name: permission,
                }, permissionsSet.has(permission)
                    ? "granted" /* Bidi.Permissions.PermissionState.Granted */
                    : "denied" /* Bidi.Permissions.PermissionState.Denied */);
                this.#overrides.push({ origin, permission });
                // TODO: some permissions are outdated and setting them to denied does
                // not work.
                if (!permissionsSet.has(permission)) {
                    return result.catch(debugError);
                }
                return result;
            }));
        }
        async clearPermissionOverrides() {
            const promises = this.#overrides.map(({ permission, origin }) => {
                return this.userContext
                    .setPermissions(origin, {
                    name: permission,
                }, "prompt" /* Bidi.Permissions.PermissionState.Prompt */)
                    .catch(debugError);
            });
            this.#overrides = [];
            await Promise.all(promises);
        }
        get id() {
            if (this.userContext.id === UserContext.DEFAULT) {
                return undefined;
            }
            return this.userContext.id;
        }
        async cookies() {
            const cookies = await this.userContext.getCookies();
            return cookies.map(cookie => {
                return bidiToPuppeteerCookie(cookie, true);
            });
        }
        async setCookie(...cookies) {
            await Promise.all(cookies.map(async (cookie) => {
                const bidiCookie = {
                    domain: cookie.domain,
                    name: cookie.name,
                    value: {
                        type: 'string',
                        value: cookie.value,
                    },
                    ...(cookie.path !== undefined ? { path: cookie.path } : {}),
                    ...(cookie.httpOnly !== undefined ? { httpOnly: cookie.httpOnly } : {}),
                    ...(cookie.secure !== undefined ? { secure: cookie.secure } : {}),
                    ...(cookie.sameSite !== undefined
                        ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) }
                        : {}),
                    ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
                    // Chrome-specific properties.
                    ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, 'sameParty', 'sourceScheme', 'priority', 'url'),
                };
                return await this.userContext.setCookie(bidiCookie, convertCookiesPartitionKeyFromPuppeteerToBiDi(cookie.partitionKey));
            }));
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$2 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$2 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __addDisposableResource = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @internal
 */
let Browser = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _close_decorators;
    let _addPreloadScript_decorators;
    let _removeIntercept_decorators;
    let _removePreloadScript_decorators;
    let _createUserContext_decorators;
    return class Browser extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$2(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$2(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$2(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$2(this, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: obj => "removeIntercept" in obj, get: obj => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$2(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$2(this, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: obj => "createUserContext" in obj, get: obj => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static async from(session) {
            const browser = new Browser(session);
            await browser.#initialize();
            return browser;
        }
        #closed = (__runInitializers$2(this, _instanceExtraInitializers), false);
        #reason;
        #disposables = new DisposableStack();
        #userContexts = new Map();
        session;
        #sharedWorkers = new Map();
        constructor(session) {
            super();
            this.session = session;
        }
        async #initialize() {
            const sessionEmitter = this.#disposables.use(new EventEmitter$1(this.session));
            sessionEmitter.once('ended', ({ reason }) => {
                this.dispose(reason);
            });
            sessionEmitter.on('script.realmCreated', info => {
                if (info.type !== 'shared-worker') {
                    return;
                }
                this.#sharedWorkers.set(info.realm, SharedWorkerRealm.from(this, info.realm, info.origin));
            });
            await this.#syncUserContexts();
            await this.#syncBrowsingContexts();
        }
        async #syncUserContexts() {
            const { result: { userContexts }, } = await this.session.send('browser.getUserContexts', {});
            for (const context of userContexts) {
                this.#createUserContext(context.userContext);
            }
        }
        async #syncBrowsingContexts() {
            // In case contexts are created or destroyed during `getTree`, we use this
            // set to detect them.
            const contextIds = new Set();
            let contexts;
            {
                const env_1 = { stack: [], error: undefined, hasError: false };
                try {
                    const sessionEmitter = __addDisposableResource(env_1, new EventEmitter$1(this.session), false);
                    sessionEmitter.on('browsingContext.contextCreated', info => {
                        contextIds.add(info.context);
                    });
                    const { result } = await this.session.send('browsingContext.getTree', {});
                    contexts = result.contexts;
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            // Simulating events so contexts are created naturally.
            for (const info of contexts) {
                if (!contextIds.has(info.context)) {
                    this.session.emit('browsingContext.contextCreated', info);
                }
                if (info.children) {
                    contexts.push(...info.children);
                }
            }
        }
        #createUserContext(id) {
            const userContext = UserContext.create(this, id);
            this.#userContexts.set(userContext.id, userContext);
            const userContextEmitter = this.#disposables.use(new EventEmitter$1(userContext));
            userContextEmitter.once('closed', () => {
                userContextEmitter.removeAllListeners();
                this.#userContexts.delete(userContext.id);
            });
            return userContext;
        }
        get closed() {
            return this.#closed;
        }
        get defaultUserContext() {
            // SAFETY: A UserContext is always created for the default context.
            return this.#userContexts.get(UserContext.DEFAULT);
        }
        get disconnected() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.disconnected;
        }
        get userContexts() {
            return this.#userContexts.values();
        }
        dispose(reason, closed = false) {
            this.#closed = closed;
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async close() {
            try {
                await this.session.send('browser.close', {});
            }
            finally {
                this.dispose('Browser already closed.', true);
            }
        }
        async addPreloadScript(functionDeclaration, options = {}) {
            const { result: { script }, } = await this.session.send('script.addPreloadScript', {
                functionDeclaration,
                ...options,
                contexts: options.contexts?.map(context => {
                    return context.id;
                }),
            });
            return script;
        }
        async removeIntercept(intercept) {
            await this.session.send('network.removeIntercept', {
                intercept,
            });
        }
        async removePreloadScript(script) {
            await this.session.send('script.removePreloadScript', {
                script,
            });
        }
        async createUserContext() {
            const { result: { userContext: context }, } = await this.session.send('browser.createUserContext', {});
            return this.#createUserContext(context);
        }
        [(_dispose_decorators = [inertIfDisposed], _close_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _addPreloadScript_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _removeIntercept_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _removePreloadScript_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _createUserContext_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Browser was disconnected, probably because the session ended.';
            if (this.closed) {
                this.emit('closed', { reason: this.#reason });
            }
            this.emit('disconnected', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$1 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __esDecorate$1 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
/**
 * @internal
 */
let Session = (() => {
    let _classSuper = EventEmitter$1;
    let _instanceExtraInitializers = [];
    let _connection_decorators;
    let _connection_initializers = [];
    let _connection_extraInitializers = [];
    let _dispose_decorators;
    let _send_decorators;
    let _subscribe_decorators;
    let _addIntercepts_decorators;
    let _end_decorators;
    return class Session extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            __esDecorate$1(this, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: obj => "connection" in obj, get: obj => obj.connection, set: (obj, value) => { obj.connection = value; } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
            __esDecorate$1(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$1(this, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: obj => "send" in obj, get: obj => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$1(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$1(this, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: obj => "addIntercepts" in obj, get: obj => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate$1(this, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: obj => "end" in obj, get: obj => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static async from(connection, capabilities) {
            const { result } = await connection.send('session.new', {
                capabilities,
            });
            const session = new Session(connection, result);
            await session.#initialize();
            return session;
        }
        #reason = __runInitializers$1(this, _instanceExtraInitializers);
        #disposables = new DisposableStack();
        #info;
        browser;
        #connection_accessor_storage = __runInitializers$1(this, _connection_initializers, undefined);
        get connection() { return this.#connection_accessor_storage; }
        set connection(value) { this.#connection_accessor_storage = value; }
        constructor(connection, info) {
            super();
            __runInitializers$1(this, _connection_extraInitializers);
            this.#info = info;
            this.connection = connection;
        }
        async #initialize() {
            // SAFETY: We use `any` to allow assignment of the readonly property.
            this.browser = await Browser.from(this);
            const browserEmitter = this.#disposables.use(this.browser);
            browserEmitter.once('closed', ({ reason }) => {
                this.dispose(reason);
            });
            // TODO: Currently, some implementations do not emit navigationStarted event
            // for fragment navigations (as per spec) and some do. This could emits a
            // synthetic navigationStarted to work around this inconsistency.
            const seen = new WeakSet();
            this.on('browsingContext.fragmentNavigated', info => {
                if (seen.has(info)) {
                    return;
                }
                seen.add(info);
                this.emit('browsingContext.navigationStarted', info);
                this.emit('browsingContext.fragmentNavigated', info);
            });
        }
        get capabilities() {
            return this.#info.capabilities;
        }
        get disposed() {
            return this.ended;
        }
        get ended() {
            return this.#reason !== undefined;
        }
        get id() {
            return this.#info.sessionId;
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        /**
         * Currently, there is a 1:1 relationship between the session and the
         * session. In the future, we might support multiple sessions and in that
         * case we always needs to make sure that the session for the right session
         * object is used, so we implement this method here, although it's not defined
         * in the spec.
         */
        async send(method, params) {
            return await this.connection.send(method, params);
        }
        async subscribe(events, contexts) {
            await this.send('session.subscribe', {
                events,
                contexts,
            });
        }
        async addIntercepts(events, contexts) {
            await this.send('session.subscribe', {
                events,
                contexts,
            });
        }
        async end() {
            try {
                await this.send('session.end', {});
            }
            finally {
                this.dispose(`Session already ended.`);
            }
        }
        [(_connection_decorators = [bubble()], _dispose_decorators = [inertIfDisposed], _send_decorators = [throwIfDisposed(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _subscribe_decorators = [throwIfDisposed(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _addIntercepts_decorators = [throwIfDisposed(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _end_decorators = [throwIfDisposed(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Session already destroyed, probably because the connection broke.';
            this.emit('ended', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();

/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== undefined && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === undefined) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
/**
 * @internal
 */
let BidiBrowser = (() => {
    let _classSuper = Browser$1;
    let _private_trustedEmitter_decorators;
    let _private_trustedEmitter_initializers = [];
    let _private_trustedEmitter_extraInitializers = [];
    let _private_trustedEmitter_descriptor;
    return class BidiBrowser extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : undefined;
            _private_trustedEmitter_decorators = [bubble()];
            __esDecorate(this, _private_trustedEmitter_descriptor = { get: __setFunctionName(function () { return this.#trustedEmitter_accessor_storage; }, "#trustedEmitter", "get"), set: __setFunctionName(function (value) { this.#trustedEmitter_accessor_storage = value; }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: obj => #trustedEmitter in obj, get: obj => obj.#trustedEmitter, set: (obj, value) => { obj.#trustedEmitter = value; } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        protocol = 'webDriverBiDi';
        static subscribeModules = [
            'browsingContext',
            'network',
            'log',
            'script',
        ];
        static subscribeCdpEvents = [
            // Coverage
            'cdp.Debugger.scriptParsed',
            'cdp.CSS.styleSheetAdded',
            'cdp.Runtime.executionContextsCleared',
            // Tracing
            'cdp.Tracing.tracingComplete',
            // TODO: subscribe to all CDP events in the future.
            'cdp.Network.requestWillBeSent',
            'cdp.Debugger.scriptParsed',
            'cdp.Page.screencastFrame',
        ];
        static async create(opts) {
            const session = await Session.from(opts.connection, {
                firstMatch: opts.capabilities?.firstMatch,
                alwaysMatch: {
                    ...opts.capabilities?.alwaysMatch,
                    // Capabilities that come from Puppeteer's API take precedence.
                    acceptInsecureCerts: opts.acceptInsecureCerts,
                    unhandledPromptBehavior: {
                        default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */,
                    },
                    webSocketUrl: true,
                    // Puppeteer with WebDriver BiDi does not support prerendering
                    // yet because WebDriver BiDi behavior is not specified. See
                    // https://github.com/w3c/webdriver-bidi/issues/321.
                    'goog:prerenderingDisabled': true,
                },
            });
            await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes('firefox')
                ? BidiBrowser.subscribeModules
                : [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents]);
            const browser = new BidiBrowser(session.browser, opts);
            browser.#initialize();
            return browser;
        }
        #trustedEmitter_accessor_storage = __runInitializers(this, _private_trustedEmitter_initializers, new EventEmitter$1());
        get #trustedEmitter() { return _private_trustedEmitter_descriptor.get.call(this); }
        set #trustedEmitter(value) { return _private_trustedEmitter_descriptor.set.call(this, value); }
        #process = __runInitializers(this, _private_trustedEmitter_extraInitializers);
        #closeCallback;
        #browserCore;
        #defaultViewport;
        #browserContexts = new WeakMap();
        #target = new BidiBrowserTarget(this);
        #cdpConnection;
        constructor(browserCore, opts) {
            super();
            this.#process = opts.process;
            this.#closeCallback = opts.closeCallback;
            this.#browserCore = browserCore;
            this.#defaultViewport = opts.defaultViewport;
            this.#cdpConnection = opts.cdpConnection;
        }
        #initialize() {
            // Initializing existing contexts.
            for (const userContext of this.#browserCore.userContexts) {
                this.#createBrowserContext(userContext);
            }
            this.#browserCore.once('disconnected', () => {
                this.#trustedEmitter.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
                this.#trustedEmitter.removeAllListeners();
            });
            this.#process?.once('close', () => {
                this.#browserCore.dispose('Browser process exited.', true);
                this.connection.dispose();
            });
        }
        get #browserName() {
            return this.#browserCore.session.capabilities.browserName;
        }
        get #browserVersion() {
            return this.#browserCore.session.capabilities.browserVersion;
        }
        get cdpSupported() {
            return this.#cdpConnection !== undefined;
        }
        get cdpConnection() {
            return this.#cdpConnection;
        }
        async userAgent() {
            return this.#browserCore.session.capabilities.userAgent;
        }
        #createBrowserContext(userContext) {
            const browserContext = BidiBrowserContext.from(this, userContext, {
                defaultViewport: this.#defaultViewport,
            });
            this.#browserContexts.set(userContext, browserContext);
            browserContext.trustedEmitter.on("targetcreated" /* BrowserContextEvent.TargetCreated */, target => {
                this.#trustedEmitter.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
            });
            browserContext.trustedEmitter.on("targetchanged" /* BrowserContextEvent.TargetChanged */, target => {
                this.#trustedEmitter.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
            });
            browserContext.trustedEmitter.on("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target => {
                this.#trustedEmitter.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
            });
            return browserContext;
        }
        get connection() {
            // SAFETY: We only have one implementation.
            return this.#browserCore.session.connection;
        }
        wsEndpoint() {
            return this.connection.url;
        }
        async close() {
            if (this.connection.closed) {
                return;
            }
            try {
                await this.#browserCore.close();
                await this.#closeCallback?.call(null);
            }
            catch (error) {
                // Fail silently.
                debugError(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get connected() {
            return !this.#browserCore.disconnected;
        }
        process() {
            return this.#process ?? null;
        }
        async createBrowserContext(_options) {
            const userContext = await this.#browserCore.createUserContext();
            return this.#createBrowserContext(userContext);
        }
        async version() {
            return `${this.#browserName}/${this.#browserVersion}`;
        }
        browserContexts() {
            return [...this.#browserCore.userContexts].map(context => {
                return this.#browserContexts.get(context);
            });
        }
        defaultBrowserContext() {
            return this.#browserContexts.get(this.#browserCore.defaultUserContext);
        }
        newPage() {
            return this.defaultBrowserContext().newPage();
        }
        targets() {
            return [
                this.#target,
                ...this.browserContexts().flatMap(context => {
                    return context.targets();
                }),
            ];
        }
        target() {
            return this.#target;
        }
        async disconnect() {
            try {
                await this.#browserCore.session.end();
            }
            catch (error) {
                // Fail silently.
                debugError(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get debugInfo() {
            return {
                pendingProtocolErrors: this.connection.getPendingProtocolErrors(),
            };
        }
    };
})();

export { BidiBrowser, BidiBrowserContext, BidiConnection, BidiElementHandle, BidiFrame, BidiFrameRealm, BidiHTTPRequest, BidiHTTPResponse, BidiJSHandle, BidiKeyboard, BidiMouse, BidiPage, BidiRealm, BidiTouchscreen, BidiWorkerRealm, bidiToPuppeteerCookie, cdpSpecificCookiePropertiesFromPuppeteerToBidi, connectBidiOverCdp, convertCookiesExpiryCdpToBiDi, convertCookiesPartitionKeyFromPuppeteerToBiDi, convertCookiesSameSiteCdpToBiDi, requests };
//# sourceMappingURL=bidi-D-EVt4wG.js.map
