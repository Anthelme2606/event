function Ko(n, e) {
    return function () {
        return n.apply(e, arguments);
    };
}
const { toString: fc } = Object.prototype,
    { getPrototypeOf: Yi } = Object,
    kr = ((n) => (e) => {
        const i = fc.call(e);
        return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    st = (n) => ((n = n.toLowerCase()), (e) => kr(e) === n),
    $r = (n) => (e) => typeof e === n,
    { isArray: Nn } = Array,
    Jn = $r("undefined");
function dc(n) {
    return (
        n !== null &&
        !Jn(n) &&
        n.constructor !== null &&
        !Jn(n.constructor) &&
        Ye(n.constructor.isBuffer) &&
        n.constructor.isBuffer(n)
    );
}
const Yo = st("ArrayBuffer");
function hc(n) {
    let e;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (e = ArrayBuffer.isView(n))
            : (e = n && n.buffer && Yo(n.buffer)),
        e
    );
}
const pc = $r("string"),
    Ye = $r("function"),
    Go = $r("number"),
    Mr = (n) => n !== null && typeof n == "object",
    gc = (n) => n === !0 || n === !1,
    Ar = (n) => {
        if (kr(n) !== "object") return !1;
        const e = Yi(n);
        return (
            (e === null ||
                e === Object.prototype ||
                Object.getPrototypeOf(e) === null) &&
            !(Symbol.toStringTag in n) &&
            !(Symbol.iterator in n)
        );
    },
    mc = st("Date"),
    _c = st("File"),
    vc = st("Blob"),
    yc = st("FileList"),
    Ec = (n) => Mr(n) && Ye(n.pipe),
    bc = (n) => {
        let e;
        return (
            n &&
            ((typeof FormData == "function" && n instanceof FormData) ||
                (Ye(n.append) &&
                    ((e = kr(n)) === "formdata" ||
                        (e === "object" &&
                            Ye(n.toString) &&
                            n.toString() === "[object FormData]"))))
        );
    },
    Tc = st("URLSearchParams"),
    [wc, Ac, Cc, Sc] = ["ReadableStream", "Request", "Response", "Headers"].map(
        st
    ),
    Oc = (n) =>
        n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zn(n, e, { allOwnKeys: i = !1 } = {}) {
    if (n === null || typeof n > "u") return;
    let o, c;
    if ((typeof n != "object" && (n = [n]), Nn(n)))
        for (o = 0, c = n.length; o < c; o++) e.call(null, n[o], o, n);
    else {
        const h = i ? Object.getOwnPropertyNames(n) : Object.keys(n),
            p = h.length;
        let _;
        for (o = 0; o < p; o++) (_ = h[o]), e.call(null, n[_], _, n);
    }
}
function Xo(n, e) {
    e = e.toLowerCase();
    const i = Object.keys(n);
    let o = i.length,
        c;
    for (; o-- > 0; ) if (((c = i[o]), e === c.toLowerCase())) return c;
    return null;
}
const Jo =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    Qo = (n) => !Jn(n) && n !== Jo;
function Ii() {
    const { caseless: n } = (Qo(this) && this) || {},
        e = {},
        i = (o, c) => {
            const h = (n && Xo(e, c)) || c;
            Ar(e[h]) && Ar(o)
                ? (e[h] = Ii(e[h], o))
                : Ar(o)
                ? (e[h] = Ii({}, o))
                : Nn(o)
                ? (e[h] = o.slice())
                : (e[h] = o);
        };
    for (let o = 0, c = arguments.length; o < c; o++)
        arguments[o] && Zn(arguments[o], i);
    return e;
}
const xc = (n, e, i, { allOwnKeys: o } = {}) => (
        Zn(
            e,
            (c, h) => {
                i && Ye(c) ? (n[h] = Ko(c, i)) : (n[h] = c);
            },
            { allOwnKeys: o }
        ),
        n
    ),
    Nc = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
    Dc = (n, e, i, o) => {
        (n.prototype = Object.create(e.prototype, o)),
            (n.prototype.constructor = n),
            Object.defineProperty(n, "super", { value: e.prototype }),
            i && Object.assign(n.prototype, i);
    },
    Lc = (n, e, i, o) => {
        let c, h, p;
        const _ = {};
        if (((e = e || {}), n == null)) return e;
        do {
            for (c = Object.getOwnPropertyNames(n), h = c.length; h-- > 0; )
                (p = c[h]),
                    (!o || o(p, n, e)) && !_[p] && ((e[p] = n[p]), (_[p] = !0));
            n = i !== !1 && Yi(n);
        } while (n && (!i || i(n, e)) && n !== Object.prototype);
        return e;
    },
    Rc = (n, e, i) => {
        (n = String(n)),
            (i === void 0 || i > n.length) && (i = n.length),
            (i -= e.length);
        const o = n.indexOf(e, i);
        return o !== -1 && o === i;
    },
    Pc = (n) => {
        if (!n) return null;
        if (Nn(n)) return n;
        let e = n.length;
        if (!Go(e)) return null;
        const i = new Array(e);
        for (; e-- > 0; ) i[e] = n[e];
        return i;
    },
    Ic = (
        (n) => (e) =>
            n && e instanceof n
    )(typeof Uint8Array < "u" && Yi(Uint8Array)),
    kc = (n, e) => {
        const o = (n && n[Symbol.iterator]).call(n);
        let c;
        for (; (c = o.next()) && !c.done; ) {
            const h = c.value;
            e.call(n, h[0], h[1]);
        }
    },
    $c = (n, e) => {
        let i;
        const o = [];
        for (; (i = n.exec(e)) !== null; ) o.push(i);
        return o;
    },
    Mc = st("HTMLFormElement"),
    Hc = (n) =>
        n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, c) {
            return o.toUpperCase() + c;
        }),
    Js = (
        ({ hasOwnProperty: n }) =>
        (e, i) =>
            n.call(e, i)
    )(Object.prototype),
    jc = st("RegExp"),
    Zo = (n, e) => {
        const i = Object.getOwnPropertyDescriptors(n),
            o = {};
        Zn(i, (c, h) => {
            let p;
            (p = e(c, h, n)) !== !1 && (o[h] = p || c);
        }),
            Object.defineProperties(n, o);
    },
    Fc = (n) => {
        Zo(n, (e, i) => {
            if (Ye(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
                return !1;
            const o = n[i];
            if (Ye(o)) {
                if (((e.enumerable = !1), "writable" in e)) {
                    e.writable = !1;
                    return;
                }
                e.set ||
                    (e.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + i + "'"
                        );
                    });
            }
        });
    },
    Bc = (n, e) => {
        const i = {},
            o = (c) => {
                c.forEach((h) => {
                    i[h] = !0;
                });
            };
        return Nn(n) ? o(n) : o(String(n).split(e)), i;
    },
    qc = () => {},
    Vc = (n, e) => (n != null && Number.isFinite((n = +n)) ? n : e),
    gi = "abcdefghijklmnopqrstuvwxyz",
    Qs = "0123456789",
    ea = { DIGIT: Qs, ALPHA: gi, ALPHA_DIGIT: gi + gi.toUpperCase() + Qs },
    Wc = (n = 16, e = ea.ALPHA_DIGIT) => {
        let i = "";
        const { length: o } = e;
        for (; n--; ) i += e[(Math.random() * o) | 0];
        return i;
    };
function Uc(n) {
    return !!(
        n &&
        Ye(n.append) &&
        n[Symbol.toStringTag] === "FormData" &&
        n[Symbol.iterator]
    );
}
const zc = (n) => {
        const e = new Array(10),
            i = (o, c) => {
                if (Mr(o)) {
                    if (e.indexOf(o) >= 0) return;
                    if (!("toJSON" in o)) {
                        e[c] = o;
                        const h = Nn(o) ? [] : {};
                        return (
                            Zn(o, (p, _) => {
                                const T = i(p, c + 1);
                                !Jn(T) && (h[_] = T);
                            }),
                            (e[c] = void 0),
                            h
                        );
                    }
                }
                return o;
            };
        return i(n, 0);
    },
    Kc = st("AsyncFunction"),
    Yc = (n) => n && (Mr(n) || Ye(n)) && Ye(n.then) && Ye(n.catch),
    x = {
        isArray: Nn,
        isArrayBuffer: Yo,
        isBuffer: dc,
        isFormData: bc,
        isArrayBufferView: hc,
        isString: pc,
        isNumber: Go,
        isBoolean: gc,
        isObject: Mr,
        isPlainObject: Ar,
        isReadableStream: wc,
        isRequest: Ac,
        isResponse: Cc,
        isHeaders: Sc,
        isUndefined: Jn,
        isDate: mc,
        isFile: _c,
        isBlob: vc,
        isRegExp: jc,
        isFunction: Ye,
        isStream: Ec,
        isURLSearchParams: Tc,
        isTypedArray: Ic,
        isFileList: yc,
        forEach: Zn,
        merge: Ii,
        extend: xc,
        trim: Oc,
        stripBOM: Nc,
        inherits: Dc,
        toFlatObject: Lc,
        kindOf: kr,
        kindOfTest: st,
        endsWith: Rc,
        toArray: Pc,
        forEachEntry: kc,
        matchAll: $c,
        isHTMLForm: Mc,
        hasOwnProperty: Js,
        hasOwnProp: Js,
        reduceDescriptors: Zo,
        freezeMethods: Fc,
        toObjectSet: Bc,
        toCamelCase: Hc,
        noop: qc,
        toFiniteNumber: Vc,
        findKey: Xo,
        global: Jo,
        isContextDefined: Qo,
        ALPHABET: ea,
        generateString: Wc,
        isSpecCompliantForm: Uc,
        toJSONObject: zc,
        isAsyncFn: Kc,
        isThenable: Yc,
    };
function re(n, e, i, o, c) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = n),
        (this.name = "AxiosError"),
        e && (this.code = e),
        i && (this.config = i),
        o && (this.request = o),
        c && (this.response = c);
}
x.inherits(re, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: x.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const ta = re.prototype,
    na = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((n) => {
    na[n] = { value: n };
});
Object.defineProperties(re, na);
Object.defineProperty(ta, "isAxiosError", { value: !0 });
re.from = (n, e, i, o, c, h) => {
    const p = Object.create(ta);
    return (
        x.toFlatObject(
            n,
            p,
            function (T) {
                return T !== Error.prototype;
            },
            (_) => _ !== "isAxiosError"
        ),
        re.call(p, n.message, e, i, o, c),
        (p.cause = n),
        (p.name = n.name),
        h && Object.assign(p, h),
        p
    );
};
const Gc = null;
function ki(n) {
    return x.isPlainObject(n) || x.isArray(n);
}
function ra(n) {
    return x.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Zs(n, e, i) {
    return n
        ? n
              .concat(e)
              .map(function (c, h) {
                  return (c = ra(c)), !i && h ? "[" + c + "]" : c;
              })
              .join(i ? "." : "")
        : e;
}
function Xc(n) {
    return x.isArray(n) && !n.some(ki);
}
const Jc = x.toFlatObject(x, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
});
function Hr(n, e, i) {
    if (!x.isObject(n)) throw new TypeError("target must be an object");
    (e = e || new FormData()),
        (i = x.toFlatObject(
            i,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (D, K) {
                return !x.isUndefined(K[D]);
            }
        ));
    const o = i.metaTokens,
        c = i.visitor || E,
        h = i.dots,
        p = i.indexes,
        T = (i.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(e);
    if (!x.isFunction(c)) throw new TypeError("visitor must be a function");
    function S(N) {
        if (N === null) return "";
        if (x.isDate(N)) return N.toISOString();
        if (!T && x.isBlob(N))
            throw new re("Blob is not supported. Use a Buffer instead.");
        return x.isArrayBuffer(N) || x.isTypedArray(N)
            ? T && typeof Blob == "function"
                ? new Blob([N])
                : Buffer.from(N)
            : N;
    }
    function E(N, D, K) {
        let H = N;
        if (N && !K && typeof N == "object") {
            if (x.endsWith(D, "{}"))
                (D = o ? D : D.slice(0, -2)), (N = JSON.stringify(N));
            else if (
                (x.isArray(N) && Xc(N)) ||
                ((x.isFileList(N) || x.endsWith(D, "[]")) && (H = x.toArray(N)))
            )
                return (
                    (D = ra(D)),
                    H.forEach(function (J, X) {
                        !(x.isUndefined(J) || J === null) &&
                            e.append(
                                p === !0
                                    ? Zs([D], X, h)
                                    : p === null
                                    ? D
                                    : D + "[]",
                                S(J)
                            );
                    }),
                    !1
                );
        }
        return ki(N) ? !0 : (e.append(Zs(K, D, h), S(N)), !1);
    }
    const I = [],
        V = Object.assign(Jc, {
            defaultVisitor: E,
            convertValue: S,
            isVisitable: ki,
        });
    function F(N, D) {
        if (!x.isUndefined(N)) {
            if (I.indexOf(N) !== -1)
                throw Error("Circular reference detected in " + D.join("."));
            I.push(N),
                x.forEach(N, function (H, ue) {
                    (!(x.isUndefined(H) || H === null) &&
                        c.call(e, H, x.isString(ue) ? ue.trim() : ue, D, V)) ===
                        !0 && F(H, D ? D.concat(ue) : [ue]);
                }),
                I.pop();
        }
    }
    if (!x.isObject(n)) throw new TypeError("data must be an object");
    return F(n), e;
}
function eo(n) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (o) {
        return e[o];
    });
}
function Gi(n, e) {
    (this._pairs = []), n && Hr(n, this, e);
}
const ia = Gi.prototype;
ia.append = function (e, i) {
    this._pairs.push([e, i]);
};
ia.toString = function (e) {
    const i = e
        ? function (o) {
              return e.call(this, o, eo);
          }
        : eo;
    return this._pairs
        .map(function (c) {
            return i(c[0]) + "=" + i(c[1]);
        }, "")
        .join("&");
};
function Qc(n) {
    return encodeURIComponent(n)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function sa(n, e, i) {
    if (!e) return n;
    const o = (i && i.encode) || Qc,
        c = i && i.serialize;
    let h;
    if (
        (c
            ? (h = c(e, i))
            : (h = x.isURLSearchParams(e)
                  ? e.toString()
                  : new Gi(e, i).toString(o)),
        h)
    ) {
        const p = n.indexOf("#");
        p !== -1 && (n = n.slice(0, p)),
            (n += (n.indexOf("?") === -1 ? "?" : "&") + h);
    }
    return n;
}
class to {
    constructor() {
        this.handlers = [];
    }
    use(e, i, o) {
        return (
            this.handlers.push({
                fulfilled: e,
                rejected: i,
                synchronous: o ? o.synchronous : !1,
                runWhen: o ? o.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(e) {
        x.forEach(this.handlers, function (o) {
            o !== null && e(o);
        });
    }
}
const oa = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Zc = typeof URLSearchParams < "u" ? URLSearchParams : Gi,
    el = typeof FormData < "u" ? FormData : null,
    tl = typeof Blob < "u" ? Blob : null,
    nl = {
        isBrowser: !0,
        classes: { URLSearchParams: Zc, FormData: el, Blob: tl },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Xi = typeof window < "u" && typeof document < "u",
    rl = ((n) => Xi && ["ReactNative", "NativeScript", "NS"].indexOf(n) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    il =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    sl = (Xi && window.location.href) || "http://localhost",
    ol = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Xi,
                hasStandardBrowserEnv: rl,
                hasStandardBrowserWebWorkerEnv: il,
                origin: sl,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    it = { ...ol, ...nl };
function al(n, e) {
    return Hr(
        n,
        new it.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (i, o, c, h) {
                    return it.isNode && x.isBuffer(i)
                        ? (this.append(o, i.toString("base64")), !1)
                        : h.defaultVisitor.apply(this, arguments);
                },
            },
            e
        )
    );
}
function ul(n) {
    return x
        .matchAll(/\w+|\[(\w*)]/g, n)
        .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function cl(n) {
    const e = {},
        i = Object.keys(n);
    let o;
    const c = i.length;
    let h;
    for (o = 0; o < c; o++) (h = i[o]), (e[h] = n[h]);
    return e;
}
function aa(n) {
    function e(i, o, c, h) {
        let p = i[h++];
        if (p === "__proto__") return !0;
        const _ = Number.isFinite(+p),
            T = h >= i.length;
        return (
            (p = !p && x.isArray(c) ? c.length : p),
            T
                ? (x.hasOwnProp(c, p) ? (c[p] = [c[p], o]) : (c[p] = o), !_)
                : ((!c[p] || !x.isObject(c[p])) && (c[p] = []),
                  e(i, o, c[p], h) && x.isArray(c[p]) && (c[p] = cl(c[p])),
                  !_)
        );
    }
    if (x.isFormData(n) && x.isFunction(n.entries)) {
        const i = {};
        return (
            x.forEachEntry(n, (o, c) => {
                e(ul(o), c, i, 0);
            }),
            i
        );
    }
    return null;
}
function ll(n, e, i) {
    if (x.isString(n))
        try {
            return (e || JSON.parse)(n), x.trim(n);
        } catch (o) {
            if (o.name !== "SyntaxError") throw o;
        }
    return (i || JSON.stringify)(n);
}
const er = {
    transitional: oa,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (e, i) {
            const o = i.getContentType() || "",
                c = o.indexOf("application/json") > -1,
                h = x.isObject(e);
            if (
                (h && x.isHTMLForm(e) && (e = new FormData(e)), x.isFormData(e))
            )
                return c ? JSON.stringify(aa(e)) : e;
            if (
                x.isArrayBuffer(e) ||
                x.isBuffer(e) ||
                x.isStream(e) ||
                x.isFile(e) ||
                x.isBlob(e) ||
                x.isReadableStream(e)
            )
                return e;
            if (x.isArrayBufferView(e)) return e.buffer;
            if (x.isURLSearchParams(e))
                return (
                    i.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    e.toString()
                );
            let _;
            if (h) {
                if (o.indexOf("application/x-www-form-urlencoded") > -1)
                    return al(e, this.formSerializer).toString();
                if (
                    (_ = x.isFileList(e)) ||
                    o.indexOf("multipart/form-data") > -1
                ) {
                    const T = this.env && this.env.FormData;
                    return Hr(
                        _ ? { "files[]": e } : e,
                        T && new T(),
                        this.formSerializer
                    );
                }
            }
            return h || c
                ? (i.setContentType("application/json", !1), ll(e))
                : e;
        },
    ],
    transformResponse: [
        function (e) {
            const i = this.transitional || er.transitional,
                o = i && i.forcedJSONParsing,
                c = this.responseType === "json";
            if (x.isResponse(e) || x.isReadableStream(e)) return e;
            if (e && x.isString(e) && ((o && !this.responseType) || c)) {
                const p = !(i && i.silentJSONParsing) && c;
                try {
                    return JSON.parse(e);
                } catch (_) {
                    if (p)
                        throw _.name === "SyntaxError"
                            ? re.from(
                                  _,
                                  re.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : _;
                }
            }
            return e;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
    validateStatus: function (e) {
        return e >= 200 && e < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
    er.headers[n] = {};
});
const fl = x.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    dl = (n) => {
        const e = {};
        let i, o, c;
        return (
            n &&
                n
                    .split(
                        `
`
                    )
                    .forEach(function (p) {
                        (c = p.indexOf(":")),
                            (i = p.substring(0, c).trim().toLowerCase()),
                            (o = p.substring(c + 1).trim()),
                            !(!i || (e[i] && fl[i])) &&
                                (i === "set-cookie"
                                    ? e[i]
                                        ? e[i].push(o)
                                        : (e[i] = [o])
                                    : (e[i] = e[i] ? e[i] + ", " + o : o));
                    }),
            e
        );
    },
    no = Symbol("internals");
function zn(n) {
    return n && String(n).trim().toLowerCase();
}
function Cr(n) {
    return n === !1 || n == null ? n : x.isArray(n) ? n.map(Cr) : String(n);
}
function hl(n) {
    const e = Object.create(null),
        i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; (o = i.exec(n)); ) e[o[1]] = o[2];
    return e;
}
const pl = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function mi(n, e, i, o, c) {
    if (x.isFunction(o)) return o.call(this, e, i);
    if ((c && (e = i), !!x.isString(e))) {
        if (x.isString(o)) return e.indexOf(o) !== -1;
        if (x.isRegExp(o)) return o.test(e);
    }
}
function gl(n) {
    return n
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (e, i, o) => i.toUpperCase() + o);
}
function ml(n, e) {
    const i = x.toCamelCase(" " + e);
    ["get", "set", "has"].forEach((o) => {
        Object.defineProperty(n, o + i, {
            value: function (c, h, p) {
                return this[o].call(this, e, c, h, p);
            },
            configurable: !0,
        });
    });
}
class Me {
    constructor(e) {
        e && this.set(e);
    }
    set(e, i, o) {
        const c = this;
        function h(_, T, S) {
            const E = zn(T);
            if (!E) throw new Error("header name must be a non-empty string");
            const I = x.findKey(c, E);
            (!I ||
                c[I] === void 0 ||
                S === !0 ||
                (S === void 0 && c[I] !== !1)) &&
                (c[I || T] = Cr(_));
        }
        const p = (_, T) => x.forEach(_, (S, E) => h(S, E, T));
        if (x.isPlainObject(e) || e instanceof this.constructor) p(e, i);
        else if (x.isString(e) && (e = e.trim()) && !pl(e)) p(dl(e), i);
        else if (x.isHeaders(e)) for (const [_, T] of e.entries()) h(T, _, o);
        else e != null && h(i, e, o);
        return this;
    }
    get(e, i) {
        if (((e = zn(e)), e)) {
            const o = x.findKey(this, e);
            if (o) {
                const c = this[o];
                if (!i) return c;
                if (i === !0) return hl(c);
                if (x.isFunction(i)) return i.call(this, c, o);
                if (x.isRegExp(i)) return i.exec(c);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(e, i) {
        if (((e = zn(e)), e)) {
            const o = x.findKey(this, e);
            return !!(
                o &&
                this[o] !== void 0 &&
                (!i || mi(this, this[o], o, i))
            );
        }
        return !1;
    }
    delete(e, i) {
        const o = this;
        let c = !1;
        function h(p) {
            if (((p = zn(p)), p)) {
                const _ = x.findKey(o, p);
                _ && (!i || mi(o, o[_], _, i)) && (delete o[_], (c = !0));
            }
        }
        return x.isArray(e) ? e.forEach(h) : h(e), c;
    }
    clear(e) {
        const i = Object.keys(this);
        let o = i.length,
            c = !1;
        for (; o--; ) {
            const h = i[o];
            (!e || mi(this, this[h], h, e, !0)) && (delete this[h], (c = !0));
        }
        return c;
    }
    normalize(e) {
        const i = this,
            o = {};
        return (
            x.forEach(this, (c, h) => {
                const p = x.findKey(o, h);
                if (p) {
                    (i[p] = Cr(c)), delete i[h];
                    return;
                }
                const _ = e ? gl(h) : String(h).trim();
                _ !== h && delete i[h], (i[_] = Cr(c)), (o[_] = !0);
            }),
            this
        );
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        const i = Object.create(null);
        return (
            x.forEach(this, (o, c) => {
                o != null &&
                    o !== !1 &&
                    (i[c] = e && x.isArray(o) ? o.join(", ") : o);
            }),
            i
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, i]) => e + ": " + i)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(e) {
        return e instanceof this ? e : new this(e);
    }
    static concat(e, ...i) {
        const o = new this(e);
        return i.forEach((c) => o.set(c)), o;
    }
    static accessor(e) {
        const o = (this[no] = this[no] = { accessors: {} }).accessors,
            c = this.prototype;
        function h(p) {
            const _ = zn(p);
            o[_] || (ml(c, p), (o[_] = !0));
        }
        return x.isArray(e) ? e.forEach(h) : h(e), this;
    }
}
Me.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
x.reduceDescriptors(Me.prototype, ({ value: n }, e) => {
    let i = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => n,
        set(o) {
            this[i] = o;
        },
    };
});
x.freezeMethods(Me);
function _i(n, e) {
    const i = this || er,
        o = e || i,
        c = Me.from(o.headers);
    let h = o.data;
    return (
        x.forEach(n, function (_) {
            h = _.call(i, h, c.normalize(), e ? e.status : void 0);
        }),
        c.normalize(),
        h
    );
}
function ua(n) {
    return !!(n && n.__CANCEL__);
}
function Dn(n, e, i) {
    re.call(this, n ?? "canceled", re.ERR_CANCELED, e, i),
        (this.name = "CanceledError");
}
x.inherits(Dn, re, { __CANCEL__: !0 });
function ca(n, e, i) {
    const o = i.config.validateStatus;
    !i.status || !o || o(i.status)
        ? n(i)
        : e(
              new re(
                  "Request failed with status code " + i.status,
                  [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][
                      Math.floor(i.status / 100) - 4
                  ],
                  i.config,
                  i.request,
                  i
              )
          );
}
function _l(n) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return (e && e[1]) || "";
}
function vl(n, e) {
    n = n || 10;
    const i = new Array(n),
        o = new Array(n);
    let c = 0,
        h = 0,
        p;
    return (
        (e = e !== void 0 ? e : 1e3),
        function (T) {
            const S = Date.now(),
                E = o[h];
            p || (p = S), (i[c] = T), (o[c] = S);
            let I = h,
                V = 0;
            for (; I !== c; ) (V += i[I++]), (I = I % n);
            if (((c = (c + 1) % n), c === h && (h = (h + 1) % n), S - p < e))
                return;
            const F = E && S - E;
            return F ? Math.round((V * 1e3) / F) : void 0;
        }
    );
}
function yl(n, e) {
    let i = 0;
    const o = 1e3 / e;
    let c = null;
    return function () {
        const p = this === !0,
            _ = Date.now();
        if (p || _ - i > o)
            return (
                c && (clearTimeout(c), (c = null)),
                (i = _),
                n.apply(null, arguments)
            );
        c ||
            (c = setTimeout(
                () => ((c = null), (i = Date.now()), n.apply(null, arguments)),
                o - (_ - i)
            ));
    };
}
const Nr = (n, e, i = 3) => {
        let o = 0;
        const c = vl(50, 250);
        return yl((h) => {
            const p = h.loaded,
                _ = h.lengthComputable ? h.total : void 0,
                T = p - o,
                S = c(T),
                E = p <= _;
            o = p;
            const I = {
                loaded: p,
                total: _,
                progress: _ ? p / _ : void 0,
                bytes: T,
                rate: S || void 0,
                estimated: S && _ && E ? (_ - p) / S : void 0,
                event: h,
                lengthComputable: _ != null,
            };
            (I[e ? "download" : "upload"] = !0), n(I);
        }, i);
    },
    El = it.hasStandardBrowserEnv
        ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                  i = document.createElement("a");
              let o;
              function c(h) {
                  let p = h;
                  return (
                      e && (i.setAttribute("href", p), (p = i.href)),
                      i.setAttribute("href", p),
                      {
                          href: i.href,
                          protocol: i.protocol
                              ? i.protocol.replace(/:$/, "")
                              : "",
                          host: i.host,
                          search: i.search ? i.search.replace(/^\?/, "") : "",
                          hash: i.hash ? i.hash.replace(/^#/, "") : "",
                          hostname: i.hostname,
                          port: i.port,
                          pathname:
                              i.pathname.charAt(0) === "/"
                                  ? i.pathname
                                  : "/" + i.pathname,
                      }
                  );
              }
              return (
                  (o = c(window.location.href)),
                  function (p) {
                      const _ = x.isString(p) ? c(p) : p;
                      return _.protocol === o.protocol && _.host === o.host;
                  }
              );
          })()
        : (function () {
              return function () {
                  return !0;
              };
          })(),
    bl = it.hasStandardBrowserEnv
        ? {
              write(n, e, i, o, c, h) {
                  const p = [n + "=" + encodeURIComponent(e)];
                  x.isNumber(i) &&
                      p.push("expires=" + new Date(i).toGMTString()),
                      x.isString(o) && p.push("path=" + o),
                      x.isString(c) && p.push("domain=" + c),
                      h === !0 && p.push("secure"),
                      (document.cookie = p.join("; "));
              },
              read(n) {
                  const e = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
                  );
                  return e ? decodeURIComponent(e[3]) : null;
              },
              remove(n) {
                  this.write(n, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function Tl(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function wl(n, e) {
    return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function la(n, e) {
    return n && !Tl(e) ? wl(n, e) : e;
}
const ro = (n) => (n instanceof Me ? { ...n } : n);
function en(n, e) {
    e = e || {};
    const i = {};
    function o(S, E, I) {
        return x.isPlainObject(S) && x.isPlainObject(E)
            ? x.merge.call({ caseless: I }, S, E)
            : x.isPlainObject(E)
            ? x.merge({}, E)
            : x.isArray(E)
            ? E.slice()
            : E;
    }
    function c(S, E, I) {
        if (x.isUndefined(E)) {
            if (!x.isUndefined(S)) return o(void 0, S, I);
        } else return o(S, E, I);
    }
    function h(S, E) {
        if (!x.isUndefined(E)) return o(void 0, E);
    }
    function p(S, E) {
        if (x.isUndefined(E)) {
            if (!x.isUndefined(S)) return o(void 0, S);
        } else return o(void 0, E);
    }
    function _(S, E, I) {
        if (I in e) return o(S, E);
        if (I in n) return o(void 0, S);
    }
    const T = {
        url: h,
        method: h,
        data: h,
        baseURL: p,
        transformRequest: p,
        transformResponse: p,
        paramsSerializer: p,
        timeout: p,
        timeoutMessage: p,
        withCredentials: p,
        withXSRFToken: p,
        adapter: p,
        responseType: p,
        xsrfCookieName: p,
        xsrfHeaderName: p,
        onUploadProgress: p,
        onDownloadProgress: p,
        decompress: p,
        maxContentLength: p,
        maxBodyLength: p,
        beforeRedirect: p,
        transport: p,
        httpAgent: p,
        httpsAgent: p,
        cancelToken: p,
        socketPath: p,
        responseEncoding: p,
        validateStatus: _,
        headers: (S, E) => c(ro(S), ro(E), !0),
    };
    return (
        x.forEach(Object.keys(Object.assign({}, n, e)), function (E) {
            const I = T[E] || c,
                V = I(n[E], e[E], E);
            (x.isUndefined(V) && I !== _) || (i[E] = V);
        }),
        i
    );
}
const fa = (n) => {
        const e = en({}, n);
        let {
            data: i,
            withXSRFToken: o,
            xsrfHeaderName: c,
            xsrfCookieName: h,
            headers: p,
            auth: _,
        } = e;
        (e.headers = p = Me.from(p)),
            (e.url = sa(la(e.baseURL, e.url), n.params, n.paramsSerializer)),
            _ &&
                p.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (_.username || "") +
                                ":" +
                                (_.password
                                    ? unescape(encodeURIComponent(_.password))
                                    : "")
                        )
                );
        let T;
        if (x.isFormData(i)) {
            if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
                p.setContentType(void 0);
            else if ((T = p.getContentType()) !== !1) {
                const [S, ...E] = T
                    ? T.split(";")
                          .map((I) => I.trim())
                          .filter(Boolean)
                    : [];
                p.setContentType([S || "multipart/form-data", ...E].join("; "));
            }
        }
        if (
            it.hasStandardBrowserEnv &&
            (o && x.isFunction(o) && (o = o(e)), o || (o !== !1 && El(e.url)))
        ) {
            const S = c && h && bl.read(h);
            S && p.set(c, S);
        }
        return e;
    },
    Al = typeof XMLHttpRequest < "u",
    Cl =
        Al &&
        function (n) {
            return new Promise(function (i, o) {
                const c = fa(n);
                let h = c.data;
                const p = Me.from(c.headers).normalize();
                let { responseType: _ } = c,
                    T;
                function S() {
                    c.cancelToken && c.cancelToken.unsubscribe(T),
                        c.signal && c.signal.removeEventListener("abort", T);
                }
                let E = new XMLHttpRequest();
                E.open(c.method.toUpperCase(), c.url, !0),
                    (E.timeout = c.timeout);
                function I() {
                    if (!E) return;
                    const F = Me.from(
                            "getAllResponseHeaders" in E &&
                                E.getAllResponseHeaders()
                        ),
                        D = {
                            data:
                                !_ || _ === "text" || _ === "json"
                                    ? E.responseText
                                    : E.response,
                            status: E.status,
                            statusText: E.statusText,
                            headers: F,
                            config: n,
                            request: E,
                        };
                    ca(
                        function (H) {
                            i(H), S();
                        },
                        function (H) {
                            o(H), S();
                        },
                        D
                    ),
                        (E = null);
                }
                "onloadend" in E
                    ? (E.onloadend = I)
                    : (E.onreadystatechange = function () {
                          !E ||
                              E.readyState !== 4 ||
                              (E.status === 0 &&
                                  !(
                                      E.responseURL &&
                                      E.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(I);
                      }),
                    (E.onabort = function () {
                        E &&
                            (o(
                                new re("Request aborted", re.ECONNABORTED, c, E)
                            ),
                            (E = null));
                    }),
                    (E.onerror = function () {
                        o(new re("Network Error", re.ERR_NETWORK, c, E)),
                            (E = null);
                    }),
                    (E.ontimeout = function () {
                        let N = c.timeout
                            ? "timeout of " + c.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const D = c.transitional || oa;
                        c.timeoutErrorMessage && (N = c.timeoutErrorMessage),
                            o(
                                new re(
                                    N,
                                    D.clarifyTimeoutError
                                        ? re.ETIMEDOUT
                                        : re.ECONNABORTED,
                                    c,
                                    E
                                )
                            ),
                            (E = null);
                    }),
                    h === void 0 && p.setContentType(null),
                    "setRequestHeader" in E &&
                        x.forEach(p.toJSON(), function (N, D) {
                            E.setRequestHeader(D, N);
                        }),
                    x.isUndefined(c.withCredentials) ||
                        (E.withCredentials = !!c.withCredentials),
                    _ && _ !== "json" && (E.responseType = c.responseType),
                    typeof c.onDownloadProgress == "function" &&
                        E.addEventListener(
                            "progress",
                            Nr(c.onDownloadProgress, !0)
                        ),
                    typeof c.onUploadProgress == "function" &&
                        E.upload &&
                        E.upload.addEventListener(
                            "progress",
                            Nr(c.onUploadProgress)
                        ),
                    (c.cancelToken || c.signal) &&
                        ((T = (F) => {
                            E &&
                                (o(!F || F.type ? new Dn(null, n, E) : F),
                                E.abort(),
                                (E = null));
                        }),
                        c.cancelToken && c.cancelToken.subscribe(T),
                        c.signal &&
                            (c.signal.aborted
                                ? T()
                                : c.signal.addEventListener("abort", T)));
                const V = _l(c.url);
                if (V && it.protocols.indexOf(V) === -1) {
                    o(
                        new re(
                            "Unsupported protocol " + V + ":",
                            re.ERR_BAD_REQUEST,
                            n
                        )
                    );
                    return;
                }
                E.send(h || null);
            });
        },
    Sl = (n, e) => {
        let i = new AbortController(),
            o;
        const c = function (T) {
            if (!o) {
                (o = !0), p();
                const S = T instanceof Error ? T : this.reason;
                i.abort(
                    S instanceof re
                        ? S
                        : new Dn(S instanceof Error ? S.message : S)
                );
            }
        };
        let h =
            e &&
            setTimeout(() => {
                c(new re(`timeout ${e} of ms exceeded`, re.ETIMEDOUT));
            }, e);
        const p = () => {
            n &&
                (h && clearTimeout(h),
                (h = null),
                n.forEach((T) => {
                    T &&
                        (T.removeEventListener
                            ? T.removeEventListener("abort", c)
                            : T.unsubscribe(c));
                }),
                (n = null));
        };
        n.forEach(
            (T) => T && T.addEventListener && T.addEventListener("abort", c)
        );
        const { signal: _ } = i;
        return (
            (_.unsubscribe = p),
            [
                _,
                () => {
                    h && clearTimeout(h), (h = null);
                },
            ]
        );
    },
    Ol = function* (n, e) {
        let i = n.byteLength;
        if (!e || i < e) {
            yield n;
            return;
        }
        let o = 0,
            c;
        for (; o < i; ) (c = o + e), yield n.slice(o, c), (o = c);
    },
    xl = async function* (n, e, i) {
        for await (const o of n)
            yield* Ol(ArrayBuffer.isView(o) ? o : await i(String(o)), e);
    },
    io = (n, e, i, o, c) => {
        const h = xl(n, e, c);
        let p = 0;
        return new ReadableStream(
            {
                type: "bytes",
                async pull(_) {
                    const { done: T, value: S } = await h.next();
                    if (T) {
                        _.close(), o();
                        return;
                    }
                    let E = S.byteLength;
                    i && i((p += E)), _.enqueue(new Uint8Array(S));
                },
                cancel(_) {
                    return o(_), h.return();
                },
            },
            { highWaterMark: 2 }
        );
    },
    so = (n, e) => {
        const i = n != null;
        return (o) =>
            setTimeout(() => e({ lengthComputable: i, total: n, loaded: o }));
    },
    jr =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    da = jr && typeof ReadableStream == "function",
    $i =
        jr &&
        (typeof TextEncoder == "function"
            ? (
                  (n) => (e) =>
                      n.encode(e)
              )(new TextEncoder())
            : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
    Nl =
        da &&
        (() => {
            let n = !1;
            const e = new Request(it.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (n = !0), "half";
                },
            }).headers.has("Content-Type");
            return n && !e;
        })(),
    oo = 64 * 1024,
    Mi =
        da &&
        !!(() => {
            try {
                return x.isReadableStream(new Response("").body);
            } catch {}
        })(),
    Dr = { stream: Mi && ((n) => n.body) };
jr &&
    ((n) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
            !Dr[e] &&
                (Dr[e] = x.isFunction(n[e])
                    ? (i) => i[e]()
                    : (i, o) => {
                          throw new re(
                              `Response type '${e}' is not supported`,
                              re.ERR_NOT_SUPPORT,
                              o
                          );
                      });
        });
    })(new Response());
const Dl = async (n) => {
        if (n == null) return 0;
        if (x.isBlob(n)) return n.size;
        if (x.isSpecCompliantForm(n))
            return (await new Request(n).arrayBuffer()).byteLength;
        if (x.isArrayBufferView(n)) return n.byteLength;
        if ((x.isURLSearchParams(n) && (n = n + ""), x.isString(n)))
            return (await $i(n)).byteLength;
    },
    Ll = async (n, e) => {
        const i = x.toFiniteNumber(n.getContentLength());
        return i ?? Dl(e);
    },
    Rl =
        jr &&
        (async (n) => {
            let {
                url: e,
                method: i,
                data: o,
                signal: c,
                cancelToken: h,
                timeout: p,
                onDownloadProgress: _,
                onUploadProgress: T,
                responseType: S,
                headers: E,
                withCredentials: I = "same-origin",
                fetchOptions: V,
            } = fa(n);
            S = S ? (S + "").toLowerCase() : "text";
            let [F, N] = c || h || p ? Sl([c, h], p) : [],
                D,
                K;
            const H = () => {
                !D &&
                    setTimeout(() => {
                        F && F.unsubscribe();
                    }),
                    (D = !0);
            };
            let ue;
            try {
                if (
                    T &&
                    Nl &&
                    i !== "get" &&
                    i !== "head" &&
                    (ue = await Ll(E, o)) !== 0
                ) {
                    let te = new Request(e, {
                            method: "POST",
                            body: o,
                            duplex: "half",
                        }),
                        u;
                    x.isFormData(o) &&
                        (u = te.headers.get("content-type")) &&
                        E.setContentType(u),
                        te.body &&
                            (o = io(te.body, oo, so(ue, Nr(T)), null, $i));
                }
                x.isString(I) || (I = I ? "cors" : "omit"),
                    (K = new Request(e, {
                        ...V,
                        signal: F,
                        method: i.toUpperCase(),
                        headers: E.normalize().toJSON(),
                        body: o,
                        duplex: "half",
                        withCredentials: I,
                    }));
                let J = await fetch(K);
                const X = Mi && (S === "stream" || S === "response");
                if (Mi && (_ || X)) {
                    const te = {};
                    ["status", "statusText", "headers"].forEach((pe) => {
                        te[pe] = J[pe];
                    });
                    const u = x.toFiniteNumber(J.headers.get("content-length"));
                    J = new Response(
                        io(J.body, oo, _ && so(u, Nr(_, !0)), X && H, $i),
                        te
                    );
                }
                S = S || "text";
                let ce = await Dr[x.findKey(Dr, S) || "text"](J, n);
                return (
                    !X && H(),
                    N && N(),
                    await new Promise((te, u) => {
                        ca(te, u, {
                            data: ce,
                            headers: Me.from(J.headers),
                            status: J.status,
                            statusText: J.statusText,
                            config: n,
                            request: K,
                        });
                    })
                );
            } catch (J) {
                throw (
                    (H(),
                    J && J.name === "TypeError" && /fetch/i.test(J.message)
                        ? Object.assign(
                              new re("Network Error", re.ERR_NETWORK, n, K),
                              { cause: J.cause || J }
                          )
                        : re.from(J, J && J.code, n, K))
                );
            }
        }),
    Hi = { http: Gc, xhr: Cl, fetch: Rl };
x.forEach(Hi, (n, e) => {
    if (n) {
        try {
            Object.defineProperty(n, "name", { value: e });
        } catch {}
        Object.defineProperty(n, "adapterName", { value: e });
    }
});
const ao = (n) => `- ${n}`,
    Pl = (n) => x.isFunction(n) || n === null || n === !1,
    ha = {
        getAdapter: (n) => {
            n = x.isArray(n) ? n : [n];
            const { length: e } = n;
            let i, o;
            const c = {};
            for (let h = 0; h < e; h++) {
                i = n[h];
                let p;
                if (
                    ((o = i),
                    !Pl(i) &&
                        ((o = Hi[(p = String(i)).toLowerCase()]), o === void 0))
                )
                    throw new re(`Unknown adapter '${p}'`);
                if (o) break;
                c[p || "#" + h] = o;
            }
            if (!o) {
                const h = Object.entries(c).map(
                    ([_, T]) =>
                        `adapter ${_} ` +
                        (T === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let p = e
                    ? h.length > 1
                        ? `since :
` +
                          h.map(ao).join(`
`)
                        : " " + ao(h[0])
                    : "as no adapter specified";
                throw new re(
                    "There is no suitable adapter to dispatch the request " + p,
                    "ERR_NOT_SUPPORT"
                );
            }
            return o;
        },
        adapters: Hi,
    };
function vi(n) {
    if (
        (n.cancelToken && n.cancelToken.throwIfRequested(),
        n.signal && n.signal.aborted)
    )
        throw new Dn(null, n);
}
function uo(n) {
    return (
        vi(n),
        (n.headers = Me.from(n.headers)),
        (n.data = _i.call(n, n.transformRequest)),
        ["post", "put", "patch"].indexOf(n.method) !== -1 &&
            n.headers.setContentType("application/x-www-form-urlencoded", !1),
        ha
            .getAdapter(n.adapter || er.adapter)(n)
            .then(
                function (o) {
                    return (
                        vi(n),
                        (o.data = _i.call(n, n.transformResponse, o)),
                        (o.headers = Me.from(o.headers)),
                        o
                    );
                },
                function (o) {
                    return (
                        ua(o) ||
                            (vi(n),
                            o &&
                                o.response &&
                                ((o.response.data = _i.call(
                                    n,
                                    n.transformResponse,
                                    o.response
                                )),
                                (o.response.headers = Me.from(
                                    o.response.headers
                                )))),
                        Promise.reject(o)
                    );
                }
            )
    );
}
const pa = "1.7.2",
    Ji = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (n, e) => {
        Ji[n] = function (o) {
            return typeof o === n || "a" + (e < 1 ? "n " : " ") + n;
        };
    }
);
const co = {};
Ji.transitional = function (e, i, o) {
    function c(h, p) {
        return (
            "[Axios v" +
            pa +
            "] Transitional option '" +
            h +
            "'" +
            p +
            (o ? ". " + o : "")
        );
    }
    return (h, p, _) => {
        if (e === !1)
            throw new re(
                c(p, " has been removed" + (i ? " in " + i : "")),
                re.ERR_DEPRECATED
            );
        return (
            i &&
                !co[p] &&
                ((co[p] = !0),
                console.warn(
                    c(
                        p,
                        " has been deprecated since v" +
                            i +
                            " and will be removed in the near future"
                    )
                )),
            e ? e(h, p, _) : !0
        );
    };
};
function Il(n, e, i) {
    if (typeof n != "object")
        throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(n);
    let c = o.length;
    for (; c-- > 0; ) {
        const h = o[c],
            p = e[h];
        if (p) {
            const _ = n[h],
                T = _ === void 0 || p(_, h, n);
            if (T !== !0)
                throw new re(
                    "option " + h + " must be " + T,
                    re.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (i !== !0) throw new re("Unknown option " + h, re.ERR_BAD_OPTION);
    }
}
const ji = { assertOptions: Il, validators: Ji },
    $t = ji.validators;
class Qt {
    constructor(e) {
        (this.defaults = e),
            (this.interceptors = { request: new to(), response: new to() });
    }
    async request(e, i) {
        try {
            return await this._request(e, i);
        } catch (o) {
            if (o instanceof Error) {
                let c;
                Error.captureStackTrace
                    ? Error.captureStackTrace((c = {}))
                    : (c = new Error());
                const h = c.stack ? c.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack
                        ? h &&
                          !String(o.stack).endsWith(
                              h.replace(/^.+\n.+\n/, "")
                          ) &&
                          (o.stack +=
                              `
` + h)
                        : (o.stack = h);
                } catch {}
            }
            throw o;
        }
    }
    _request(e, i) {
        typeof e == "string" ? ((i = i || {}), (i.url = e)) : (i = e || {}),
            (i = en(this.defaults, i));
        const { transitional: o, paramsSerializer: c, headers: h } = i;
        o !== void 0 &&
            ji.assertOptions(
                o,
                {
                    silentJSONParsing: $t.transitional($t.boolean),
                    forcedJSONParsing: $t.transitional($t.boolean),
                    clarifyTimeoutError: $t.transitional($t.boolean),
                },
                !1
            ),
            c != null &&
                (x.isFunction(c)
                    ? (i.paramsSerializer = { serialize: c })
                    : ji.assertOptions(
                          c,
                          { encode: $t.function, serialize: $t.function },
                          !0
                      )),
            (i.method = (
                i.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let p = h && x.merge(h.common, h[i.method]);
        h &&
            x.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (N) => {
                    delete h[N];
                }
            ),
            (i.headers = Me.concat(p, h));
        const _ = [];
        let T = !0;
        this.interceptors.request.forEach(function (D) {
            (typeof D.runWhen == "function" && D.runWhen(i) === !1) ||
                ((T = T && D.synchronous), _.unshift(D.fulfilled, D.rejected));
        });
        const S = [];
        this.interceptors.response.forEach(function (D) {
            S.push(D.fulfilled, D.rejected);
        });
        let E,
            I = 0,
            V;
        if (!T) {
            const N = [uo.bind(this), void 0];
            for (
                N.unshift.apply(N, _),
                    N.push.apply(N, S),
                    V = N.length,
                    E = Promise.resolve(i);
                I < V;

            )
                E = E.then(N[I++], N[I++]);
            return E;
        }
        V = _.length;
        let F = i;
        for (I = 0; I < V; ) {
            const N = _[I++],
                D = _[I++];
            try {
                F = N(F);
            } catch (K) {
                D.call(this, K);
                break;
            }
        }
        try {
            E = uo.call(this, F);
        } catch (N) {
            return Promise.reject(N);
        }
        for (I = 0, V = S.length; I < V; ) E = E.then(S[I++], S[I++]);
        return E;
    }
    getUri(e) {
        e = en(this.defaults, e);
        const i = la(e.baseURL, e.url);
        return sa(i, e.params, e.paramsSerializer);
    }
}
x.forEach(["delete", "get", "head", "options"], function (e) {
    Qt.prototype[e] = function (i, o) {
        return this.request(
            en(o || {}, { method: e, url: i, data: (o || {}).data })
        );
    };
});
x.forEach(["post", "put", "patch"], function (e) {
    function i(o) {
        return function (h, p, _) {
            return this.request(
                en(_ || {}, {
                    method: e,
                    headers: o ? { "Content-Type": "multipart/form-data" } : {},
                    url: h,
                    data: p,
                })
            );
        };
    }
    (Qt.prototype[e] = i()), (Qt.prototype[e + "Form"] = i(!0));
});
class Qi {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function (h) {
            i = h;
        });
        const o = this;
        this.promise.then((c) => {
            if (!o._listeners) return;
            let h = o._listeners.length;
            for (; h-- > 0; ) o._listeners[h](c);
            o._listeners = null;
        }),
            (this.promise.then = (c) => {
                let h;
                const p = new Promise((_) => {
                    o.subscribe(_), (h = _);
                }).then(c);
                return (
                    (p.cancel = function () {
                        o.unsubscribe(h);
                    }),
                    p
                );
            }),
            e(function (h, p, _) {
                o.reason || ((o.reason = new Dn(h, p, _)), i(o.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const i = this._listeners.indexOf(e);
        i !== -1 && this._listeners.splice(i, 1);
    }
    static source() {
        let e;
        return {
            token: new Qi(function (c) {
                e = c;
            }),
            cancel: e,
        };
    }
}
function kl(n) {
    return function (i) {
        return n.apply(null, i);
    };
}
function $l(n) {
    return x.isObject(n) && n.isAxiosError === !0;
}
const Fi = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Fi).forEach(([n, e]) => {
    Fi[e] = n;
});
function ga(n) {
    const e = new Qt(n),
        i = Ko(Qt.prototype.request, e);
    return (
        x.extend(i, Qt.prototype, e, { allOwnKeys: !0 }),
        x.extend(i, e, null, { allOwnKeys: !0 }),
        (i.create = function (c) {
            return ga(en(n, c));
        }),
        i
    );
}
const be = ga(er);
be.Axios = Qt;
be.CanceledError = Dn;
be.CancelToken = Qi;
be.isCancel = ua;
be.VERSION = pa;
be.toFormData = Hr;
be.AxiosError = re;
be.Cancel = be.CanceledError;
be.all = function (e) {
    return Promise.all(e);
};
be.spread = kl;
be.isAxiosError = $l;
be.mergeConfig = en;
be.AxiosHeaders = Me;
be.formToJSON = (n) => aa(x.isHTMLForm(n) ? new FormData(n) : n);
be.getAdapter = ha.getAdapter;
be.HttpStatusCode = Fi;
be.default = be;
window.axios = be;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var De = "top",
    Fe = "bottom",
    Be = "right",
    Le = "left",
    Fr = "auto",
    Ln = [De, Fe, Be, Le],
    tn = "start",
    Tn = "end",
    ma = "clippingParents",
    Zi = "viewport",
    vn = "popper",
    _a = "reference",
    Bi = Ln.reduce(function (n, e) {
        return n.concat([e + "-" + tn, e + "-" + Tn]);
    }, []),
    es = [].concat(Ln, [Fr]).reduce(function (n, e) {
        return n.concat([e, e + "-" + tn, e + "-" + Tn]);
    }, []),
    va = "beforeRead",
    ya = "read",
    Ea = "afterRead",
    ba = "beforeMain",
    Ta = "main",
    wa = "afterMain",
    Aa = "beforeWrite",
    Ca = "write",
    Sa = "afterWrite",
    Oa = [va, ya, Ea, ba, Ta, wa, Aa, Ca, Sa];
function vt(n) {
    return n ? (n.nodeName || "").toLowerCase() : null;
}
function qe(n) {
    if (n == null) return window;
    if (n.toString() !== "[object Window]") {
        var e = n.ownerDocument;
        return (e && e.defaultView) || window;
    }
    return n;
}
function nn(n) {
    var e = qe(n).Element;
    return n instanceof e || n instanceof Element;
}
function Ge(n) {
    var e = qe(n).HTMLElement;
    return n instanceof e || n instanceof HTMLElement;
}
function ts(n) {
    if (typeof ShadowRoot > "u") return !1;
    var e = qe(n).ShadowRoot;
    return n instanceof e || n instanceof ShadowRoot;
}
function Ml(n) {
    var e = n.state;
    Object.keys(e.elements).forEach(function (i) {
        var o = e.styles[i] || {},
            c = e.attributes[i] || {},
            h = e.elements[i];
        !Ge(h) ||
            !vt(h) ||
            (Object.assign(h.style, o),
            Object.keys(c).forEach(function (p) {
                var _ = c[p];
                _ === !1
                    ? h.removeAttribute(p)
                    : h.setAttribute(p, _ === !0 ? "" : _);
            }));
    });
}
function Hl(n) {
    var e = n.state,
        i = {
            popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
        };
    return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
            Object.keys(e.elements).forEach(function (o) {
                var c = e.elements[o],
                    h = e.attributes[o] || {},
                    p = Object.keys(
                        e.styles.hasOwnProperty(o) ? e.styles[o] : i[o]
                    ),
                    _ = p.reduce(function (T, S) {
                        return (T[S] = ""), T;
                    }, {});
                !Ge(c) ||
                    !vt(c) ||
                    (Object.assign(c.style, _),
                    Object.keys(h).forEach(function (T) {
                        c.removeAttribute(T);
                    }));
            });
        }
    );
}
const ns = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Ml,
    effect: Hl,
    requires: ["computeStyles"],
};
function mt(n) {
    return n.split("-")[0];
}
var Zt = Math.max,
    Lr = Math.min,
    wn = Math.round;
function qi() {
    var n = navigator.userAgentData;
    return n != null && n.brands && Array.isArray(n.brands)
        ? n.brands
              .map(function (e) {
                  return e.brand + "/" + e.version;
              })
              .join(" ")
        : navigator.userAgent;
}
function xa() {
    return !/^((?!chrome|android).)*safari/i.test(qi());
}
function An(n, e, i) {
    e === void 0 && (e = !1), i === void 0 && (i = !1);
    var o = n.getBoundingClientRect(),
        c = 1,
        h = 1;
    e &&
        Ge(n) &&
        ((c = (n.offsetWidth > 0 && wn(o.width) / n.offsetWidth) || 1),
        (h = (n.offsetHeight > 0 && wn(o.height) / n.offsetHeight) || 1));
    var p = nn(n) ? qe(n) : window,
        _ = p.visualViewport,
        T = !xa() && i,
        S = (o.left + (T && _ ? _.offsetLeft : 0)) / c,
        E = (o.top + (T && _ ? _.offsetTop : 0)) / h,
        I = o.width / c,
        V = o.height / h;
    return {
        width: I,
        height: V,
        top: E,
        right: S + I,
        bottom: E + V,
        left: S,
        x: S,
        y: E,
    };
}
function rs(n) {
    var e = An(n),
        i = n.offsetWidth,
        o = n.offsetHeight;
    return (
        Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - o) <= 1 && (o = e.height),
        { x: n.offsetLeft, y: n.offsetTop, width: i, height: o }
    );
}
function Na(n, e) {
    var i = e.getRootNode && e.getRootNode();
    if (n.contains(e)) return !0;
    if (i && ts(i)) {
        var o = e;
        do {
            if (o && n.isSameNode(o)) return !0;
            o = o.parentNode || o.host;
        } while (o);
    }
    return !1;
}
function St(n) {
    return qe(n).getComputedStyle(n);
}
function jl(n) {
    return ["table", "td", "th"].indexOf(vt(n)) >= 0;
}
function Bt(n) {
    return ((nn(n) ? n.ownerDocument : n.document) || window.document)
        .documentElement;
}
function Br(n) {
    return vt(n) === "html"
        ? n
        : n.assignedSlot || n.parentNode || (ts(n) ? n.host : null) || Bt(n);
}
function lo(n) {
    return !Ge(n) || St(n).position === "fixed" ? null : n.offsetParent;
}
function Fl(n) {
    var e = /firefox/i.test(qi()),
        i = /Trident/i.test(qi());
    if (i && Ge(n)) {
        var o = St(n);
        if (o.position === "fixed") return null;
    }
    var c = Br(n);
    for (
        ts(c) && (c = c.host);
        Ge(c) && ["html", "body"].indexOf(vt(c)) < 0;

    ) {
        var h = St(c);
        if (
            h.transform !== "none" ||
            h.perspective !== "none" ||
            h.contain === "paint" ||
            ["transform", "perspective"].indexOf(h.willChange) !== -1 ||
            (e && h.willChange === "filter") ||
            (e && h.filter && h.filter !== "none")
        )
            return c;
        c = c.parentNode;
    }
    return null;
}
function tr(n) {
    for (var e = qe(n), i = lo(n); i && jl(i) && St(i).position === "static"; )
        i = lo(i);
    return i &&
        (vt(i) === "html" || (vt(i) === "body" && St(i).position === "static"))
        ? e
        : i || Fl(n) || e;
}
function is(n) {
    return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Gn(n, e, i) {
    return Zt(n, Lr(e, i));
}
function Bl(n, e, i) {
    var o = Gn(n, e, i);
    return o > i ? i : o;
}
function Da() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function La(n) {
    return Object.assign({}, Da(), n);
}
function Ra(n, e) {
    return e.reduce(function (i, o) {
        return (i[o] = n), i;
    }, {});
}
var ql = function (e, i) {
    return (
        (e =
            typeof e == "function"
                ? e(Object.assign({}, i.rects, { placement: i.placement }))
                : e),
        La(typeof e != "number" ? e : Ra(e, Ln))
    );
};
function Vl(n) {
    var e,
        i = n.state,
        o = n.name,
        c = n.options,
        h = i.elements.arrow,
        p = i.modifiersData.popperOffsets,
        _ = mt(i.placement),
        T = is(_),
        S = [Le, Be].indexOf(_) >= 0,
        E = S ? "height" : "width";
    if (!(!h || !p)) {
        var I = ql(c.padding, i),
            V = rs(h),
            F = T === "y" ? De : Le,
            N = T === "y" ? Fe : Be,
            D =
                i.rects.reference[E] +
                i.rects.reference[T] -
                p[T] -
                i.rects.popper[E],
            K = p[T] - i.rects.reference[T],
            H = tr(h),
            ue = H ? (T === "y" ? H.clientHeight || 0 : H.clientWidth || 0) : 0,
            J = D / 2 - K / 2,
            X = I[F],
            ce = ue - V[E] - I[N],
            te = ue / 2 - V[E] / 2 + J,
            u = Gn(X, te, ce),
            pe = T;
        i.modifiersData[o] =
            ((e = {}), (e[pe] = u), (e.centerOffset = u - te), e);
    }
}
function Wl(n) {
    var e = n.state,
        i = n.options,
        o = i.element,
        c = o === void 0 ? "[data-popper-arrow]" : o;
    c != null &&
        ((typeof c == "string" &&
            ((c = e.elements.popper.querySelector(c)), !c)) ||
            (Na(e.elements.popper, c) && (e.elements.arrow = c)));
}
const Pa = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Vl,
    effect: Wl,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
function Cn(n) {
    return n.split("-")[1];
}
var Ul = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function zl(n, e) {
    var i = n.x,
        o = n.y,
        c = e.devicePixelRatio || 1;
    return { x: wn(i * c) / c || 0, y: wn(o * c) / c || 0 };
}
function fo(n) {
    var e,
        i = n.popper,
        o = n.popperRect,
        c = n.placement,
        h = n.variation,
        p = n.offsets,
        _ = n.position,
        T = n.gpuAcceleration,
        S = n.adaptive,
        E = n.roundOffsets,
        I = n.isFixed,
        V = p.x,
        F = V === void 0 ? 0 : V,
        N = p.y,
        D = N === void 0 ? 0 : N,
        K = typeof E == "function" ? E({ x: F, y: D }) : { x: F, y: D };
    (F = K.x), (D = K.y);
    var H = p.hasOwnProperty("x"),
        ue = p.hasOwnProperty("y"),
        J = Le,
        X = De,
        ce = window;
    if (S) {
        var te = tr(i),
            u = "clientHeight",
            pe = "clientWidth";
        if (
            (te === qe(i) &&
                ((te = Bt(i)),
                St(te).position !== "static" &&
                    _ === "absolute" &&
                    ((u = "scrollHeight"), (pe = "scrollWidth"))),
            (te = te),
            c === De || ((c === Le || c === Be) && h === Tn))
        ) {
            X = Fe;
            var k =
                I && te === ce && ce.visualViewport
                    ? ce.visualViewport.height
                    : te[u];
            (D -= k - o.height), (D *= T ? 1 : -1);
        }
        if (c === Le || ((c === De || c === Fe) && h === Tn)) {
            J = Be;
            var $ =
                I && te === ce && ce.visualViewport
                    ? ce.visualViewport.width
                    : te[pe];
            (F -= $ - o.width), (F *= T ? 1 : -1);
        }
    }
    var ne = Object.assign({ position: _ }, S && Ul),
        ye = E === !0 ? zl({ x: F, y: D }, qe(i)) : { x: F, y: D };
    if (((F = ye.x), (D = ye.y), T)) {
        var W;
        return Object.assign(
            {},
            ne,
            ((W = {}),
            (W[X] = ue ? "0" : ""),
            (W[J] = H ? "0" : ""),
            (W.transform =
                (ce.devicePixelRatio || 1) <= 1
                    ? "translate(" + F + "px, " + D + "px)"
                    : "translate3d(" + F + "px, " + D + "px, 0)"),
            W)
        );
    }
    return Object.assign(
        {},
        ne,
        ((e = {}),
        (e[X] = ue ? D + "px" : ""),
        (e[J] = H ? F + "px" : ""),
        (e.transform = ""),
        e)
    );
}
function Kl(n) {
    var e = n.state,
        i = n.options,
        o = i.gpuAcceleration,
        c = o === void 0 ? !0 : o,
        h = i.adaptive,
        p = h === void 0 ? !0 : h,
        _ = i.roundOffsets,
        T = _ === void 0 ? !0 : _,
        S = {
            placement: mt(e.placement),
            variation: Cn(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: c,
            isFixed: e.options.strategy === "fixed",
        };
    e.modifiersData.popperOffsets != null &&
        (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            fo(
                Object.assign({}, S, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: p,
                    roundOffsets: T,
                })
            )
        )),
        e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                fo(
                    Object.assign({}, S, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: T,
                    })
                )
            )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
        }));
}
const ss = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Kl,
    data: {},
};
var _r = { passive: !0 };
function Yl(n) {
    var e = n.state,
        i = n.instance,
        o = n.options,
        c = o.scroll,
        h = c === void 0 ? !0 : c,
        p = o.resize,
        _ = p === void 0 ? !0 : p,
        T = qe(e.elements.popper),
        S = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
        h &&
            S.forEach(function (E) {
                E.addEventListener("scroll", i.update, _r);
            }),
        _ && T.addEventListener("resize", i.update, _r),
        function () {
            h &&
                S.forEach(function (E) {
                    E.removeEventListener("scroll", i.update, _r);
                }),
                _ && T.removeEventListener("resize", i.update, _r);
        }
    );
}
const os = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Yl,
    data: {},
};
var Gl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Sr(n) {
    return n.replace(/left|right|bottom|top/g, function (e) {
        return Gl[e];
    });
}
var Xl = { start: "end", end: "start" };
function ho(n) {
    return n.replace(/start|end/g, function (e) {
        return Xl[e];
    });
}
function as(n) {
    var e = qe(n),
        i = e.pageXOffset,
        o = e.pageYOffset;
    return { scrollLeft: i, scrollTop: o };
}
function us(n) {
    return An(Bt(n)).left + as(n).scrollLeft;
}
function Jl(n, e) {
    var i = qe(n),
        o = Bt(n),
        c = i.visualViewport,
        h = o.clientWidth,
        p = o.clientHeight,
        _ = 0,
        T = 0;
    if (c) {
        (h = c.width), (p = c.height);
        var S = xa();
        (S || (!S && e === "fixed")) && ((_ = c.offsetLeft), (T = c.offsetTop));
    }
    return { width: h, height: p, x: _ + us(n), y: T };
}
function Ql(n) {
    var e,
        i = Bt(n),
        o = as(n),
        c = (e = n.ownerDocument) == null ? void 0 : e.body,
        h = Zt(
            i.scrollWidth,
            i.clientWidth,
            c ? c.scrollWidth : 0,
            c ? c.clientWidth : 0
        ),
        p = Zt(
            i.scrollHeight,
            i.clientHeight,
            c ? c.scrollHeight : 0,
            c ? c.clientHeight : 0
        ),
        _ = -o.scrollLeft + us(n),
        T = -o.scrollTop;
    return (
        St(c || i).direction === "rtl" &&
            (_ += Zt(i.clientWidth, c ? c.clientWidth : 0) - h),
        { width: h, height: p, x: _, y: T }
    );
}
function cs(n) {
    var e = St(n),
        i = e.overflow,
        o = e.overflowX,
        c = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + c + o);
}
function Ia(n) {
    return ["html", "body", "#document"].indexOf(vt(n)) >= 0
        ? n.ownerDocument.body
        : Ge(n) && cs(n)
        ? n
        : Ia(Br(n));
}
function Xn(n, e) {
    var i;
    e === void 0 && (e = []);
    var o = Ia(n),
        c = o === ((i = n.ownerDocument) == null ? void 0 : i.body),
        h = qe(o),
        p = c ? [h].concat(h.visualViewport || [], cs(o) ? o : []) : o,
        _ = e.concat(p);
    return c ? _ : _.concat(Xn(Br(p)));
}
function Vi(n) {
    return Object.assign({}, n, {
        left: n.x,
        top: n.y,
        right: n.x + n.width,
        bottom: n.y + n.height,
    });
}
function Zl(n, e) {
    var i = An(n, !1, e === "fixed");
    return (
        (i.top = i.top + n.clientTop),
        (i.left = i.left + n.clientLeft),
        (i.bottom = i.top + n.clientHeight),
        (i.right = i.left + n.clientWidth),
        (i.width = n.clientWidth),
        (i.height = n.clientHeight),
        (i.x = i.left),
        (i.y = i.top),
        i
    );
}
function po(n, e, i) {
    return e === Zi ? Vi(Jl(n, i)) : nn(e) ? Zl(e, i) : Vi(Ql(Bt(n)));
}
function ef(n) {
    var e = Xn(Br(n)),
        i = ["absolute", "fixed"].indexOf(St(n).position) >= 0,
        o = i && Ge(n) ? tr(n) : n;
    return nn(o)
        ? e.filter(function (c) {
              return nn(c) && Na(c, o) && vt(c) !== "body";
          })
        : [];
}
function tf(n, e, i, o) {
    var c = e === "clippingParents" ? ef(n) : [].concat(e),
        h = [].concat(c, [i]),
        p = h[0],
        _ = h.reduce(function (T, S) {
            var E = po(n, S, o);
            return (
                (T.top = Zt(E.top, T.top)),
                (T.right = Lr(E.right, T.right)),
                (T.bottom = Lr(E.bottom, T.bottom)),
                (T.left = Zt(E.left, T.left)),
                T
            );
        }, po(n, p, o));
    return (
        (_.width = _.right - _.left),
        (_.height = _.bottom - _.top),
        (_.x = _.left),
        (_.y = _.top),
        _
    );
}
function ka(n) {
    var e = n.reference,
        i = n.element,
        o = n.placement,
        c = o ? mt(o) : null,
        h = o ? Cn(o) : null,
        p = e.x + e.width / 2 - i.width / 2,
        _ = e.y + e.height / 2 - i.height / 2,
        T;
    switch (c) {
        case De:
            T = { x: p, y: e.y - i.height };
            break;
        case Fe:
            T = { x: p, y: e.y + e.height };
            break;
        case Be:
            T = { x: e.x + e.width, y: _ };
            break;
        case Le:
            T = { x: e.x - i.width, y: _ };
            break;
        default:
            T = { x: e.x, y: e.y };
    }
    var S = c ? is(c) : null;
    if (S != null) {
        var E = S === "y" ? "height" : "width";
        switch (h) {
            case tn:
                T[S] = T[S] - (e[E] / 2 - i[E] / 2);
                break;
            case Tn:
                T[S] = T[S] + (e[E] / 2 - i[E] / 2);
                break;
        }
    }
    return T;
}
function Sn(n, e) {
    e === void 0 && (e = {});
    var i = e,
        o = i.placement,
        c = o === void 0 ? n.placement : o,
        h = i.strategy,
        p = h === void 0 ? n.strategy : h,
        _ = i.boundary,
        T = _ === void 0 ? ma : _,
        S = i.rootBoundary,
        E = S === void 0 ? Zi : S,
        I = i.elementContext,
        V = I === void 0 ? vn : I,
        F = i.altBoundary,
        N = F === void 0 ? !1 : F,
        D = i.padding,
        K = D === void 0 ? 0 : D,
        H = La(typeof K != "number" ? K : Ra(K, Ln)),
        ue = V === vn ? _a : vn,
        J = n.rects.popper,
        X = n.elements[N ? ue : V],
        ce = tf(nn(X) ? X : X.contextElement || Bt(n.elements.popper), T, E, p),
        te = An(n.elements.reference),
        u = ka({
            reference: te,
            element: J,
            strategy: "absolute",
            placement: c,
        }),
        pe = Vi(Object.assign({}, J, u)),
        k = V === vn ? pe : te,
        $ = {
            top: ce.top - k.top + H.top,
            bottom: k.bottom - ce.bottom + H.bottom,
            left: ce.left - k.left + H.left,
            right: k.right - ce.right + H.right,
        },
        ne = n.modifiersData.offset;
    if (V === vn && ne) {
        var ye = ne[c];
        Object.keys($).forEach(function (W) {
            var Se = [Be, Fe].indexOf(W) >= 0 ? 1 : -1,
                Ve = [De, Fe].indexOf(W) >= 0 ? "y" : "x";
            $[W] += ye[Ve] * Se;
        });
    }
    return $;
}
function nf(n, e) {
    e === void 0 && (e = {});
    var i = e,
        o = i.placement,
        c = i.boundary,
        h = i.rootBoundary,
        p = i.padding,
        _ = i.flipVariations,
        T = i.allowedAutoPlacements,
        S = T === void 0 ? es : T,
        E = Cn(o),
        I = E
            ? _
                ? Bi
                : Bi.filter(function (N) {
                      return Cn(N) === E;
                  })
            : Ln,
        V = I.filter(function (N) {
            return S.indexOf(N) >= 0;
        });
    V.length === 0 && (V = I);
    var F = V.reduce(function (N, D) {
        return (
            (N[D] = Sn(n, {
                placement: D,
                boundary: c,
                rootBoundary: h,
                padding: p,
            })[mt(D)]),
            N
        );
    }, {});
    return Object.keys(F).sort(function (N, D) {
        return F[N] - F[D];
    });
}
function rf(n) {
    if (mt(n) === Fr) return [];
    var e = Sr(n);
    return [ho(n), e, ho(e)];
}
function sf(n) {
    var e = n.state,
        i = n.options,
        o = n.name;
    if (!e.modifiersData[o]._skip) {
        for (
            var c = i.mainAxis,
                h = c === void 0 ? !0 : c,
                p = i.altAxis,
                _ = p === void 0 ? !0 : p,
                T = i.fallbackPlacements,
                S = i.padding,
                E = i.boundary,
                I = i.rootBoundary,
                V = i.altBoundary,
                F = i.flipVariations,
                N = F === void 0 ? !0 : F,
                D = i.allowedAutoPlacements,
                K = e.options.placement,
                H = mt(K),
                ue = H === K,
                J = T || (ue || !N ? [Sr(K)] : rf(K)),
                X = [K].concat(J).reduce(function (Ze, We) {
                    return Ze.concat(
                        mt(We) === Fr
                            ? nf(e, {
                                  placement: We,
                                  boundary: E,
                                  rootBoundary: I,
                                  padding: S,
                                  flipVariations: N,
                                  allowedAutoPlacements: D,
                              })
                            : We
                    );
                }, []),
                ce = e.rects.reference,
                te = e.rects.popper,
                u = new Map(),
                pe = !0,
                k = X[0],
                $ = 0;
            $ < X.length;
            $++
        ) {
            var ne = X[$],
                ye = mt(ne),
                W = Cn(ne) === tn,
                Se = [De, Fe].indexOf(ye) >= 0,
                Ve = Se ? "width" : "height",
                Te = Sn(e, {
                    placement: ne,
                    boundary: E,
                    rootBoundary: I,
                    altBoundary: V,
                    padding: S,
                }),
                ge = Se ? (W ? Be : Le) : W ? Fe : De;
            ce[Ve] > te[Ve] && (ge = Sr(ge));
            var Ee = Sr(ge),
                ve = [];
            if (
                (h && ve.push(Te[ye] <= 0),
                _ && ve.push(Te[ge] <= 0, Te[Ee] <= 0),
                ve.every(function (Ze) {
                    return Ze;
                }))
            ) {
                (k = ne), (pe = !1);
                break;
            }
            u.set(ne, ve);
        }
        if (pe)
            for (
                var at = N ? 3 : 1,
                    xt = function (We) {
                        var yt = X.find(function (Nt) {
                            var et = u.get(Nt);
                            if (et)
                                return et.slice(0, We).every(function (Dt) {
                                    return Dt;
                                });
                        });
                        if (yt) return (k = yt), "break";
                    },
                    ut = at;
                ut > 0;
                ut--
            ) {
                var ct = xt(ut);
                if (ct === "break") break;
            }
        e.placement !== k &&
            ((e.modifiersData[o]._skip = !0),
            (e.placement = k),
            (e.reset = !0));
    }
}
const $a = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: sf,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
function go(n, e, i) {
    return (
        i === void 0 && (i = { x: 0, y: 0 }),
        {
            top: n.top - e.height - i.y,
            right: n.right - e.width + i.x,
            bottom: n.bottom - e.height + i.y,
            left: n.left - e.width - i.x,
        }
    );
}
function mo(n) {
    return [De, Be, Fe, Le].some(function (e) {
        return n[e] >= 0;
    });
}
function of(n) {
    var e = n.state,
        i = n.name,
        o = e.rects.reference,
        c = e.rects.popper,
        h = e.modifiersData.preventOverflow,
        p = Sn(e, { elementContext: "reference" }),
        _ = Sn(e, { altBoundary: !0 }),
        T = go(p, o),
        S = go(_, c, h),
        E = mo(T),
        I = mo(S);
    (e.modifiersData[i] = {
        referenceClippingOffsets: T,
        popperEscapeOffsets: S,
        isReferenceHidden: E,
        hasPopperEscaped: I,
    }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": E,
            "data-popper-escaped": I,
        }));
}
const Ma = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: of,
};
function af(n, e, i) {
    var o = mt(n),
        c = [Le, De].indexOf(o) >= 0 ? -1 : 1,
        h =
            typeof i == "function"
                ? i(Object.assign({}, e, { placement: n }))
                : i,
        p = h[0],
        _ = h[1];
    return (
        (p = p || 0),
        (_ = (_ || 0) * c),
        [Le, Be].indexOf(o) >= 0 ? { x: _, y: p } : { x: p, y: _ }
    );
}
function uf(n) {
    var e = n.state,
        i = n.options,
        o = n.name,
        c = i.offset,
        h = c === void 0 ? [0, 0] : c,
        p = es.reduce(function (E, I) {
            return (E[I] = af(I, e.rects, h)), E;
        }, {}),
        _ = p[e.placement],
        T = _.x,
        S = _.y;
    e.modifiersData.popperOffsets != null &&
        ((e.modifiersData.popperOffsets.x += T),
        (e.modifiersData.popperOffsets.y += S)),
        (e.modifiersData[o] = p);
}
const Ha = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: uf,
};
function cf(n) {
    var e = n.state,
        i = n.name;
    e.modifiersData[i] = ka({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
    });
}
const ls = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: cf,
    data: {},
};
function lf(n) {
    return n === "x" ? "y" : "x";
}
function ff(n) {
    var e = n.state,
        i = n.options,
        o = n.name,
        c = i.mainAxis,
        h = c === void 0 ? !0 : c,
        p = i.altAxis,
        _ = p === void 0 ? !1 : p,
        T = i.boundary,
        S = i.rootBoundary,
        E = i.altBoundary,
        I = i.padding,
        V = i.tether,
        F = V === void 0 ? !0 : V,
        N = i.tetherOffset,
        D = N === void 0 ? 0 : N,
        K = Sn(e, { boundary: T, rootBoundary: S, padding: I, altBoundary: E }),
        H = mt(e.placement),
        ue = Cn(e.placement),
        J = !ue,
        X = is(H),
        ce = lf(X),
        te = e.modifiersData.popperOffsets,
        u = e.rects.reference,
        pe = e.rects.popper,
        k =
            typeof D == "function"
                ? D(Object.assign({}, e.rects, { placement: e.placement }))
                : D,
        $ =
            typeof k == "number"
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
        ne = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
        ye = { x: 0, y: 0 };
    if (te) {
        if (h) {
            var W,
                Se = X === "y" ? De : Le,
                Ve = X === "y" ? Fe : Be,
                Te = X === "y" ? "height" : "width",
                ge = te[X],
                Ee = ge + K[Se],
                ve = ge - K[Ve],
                at = F ? -pe[Te] / 2 : 0,
                xt = ue === tn ? u[Te] : pe[Te],
                ut = ue === tn ? -pe[Te] : -u[Te],
                ct = e.elements.arrow,
                Ze = F && ct ? rs(ct) : { width: 0, height: 0 },
                We = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : Da(),
                yt = We[Se],
                Nt = We[Ve],
                et = Gn(0, u[Te], Ze[Te]),
                Dt = J
                    ? u[Te] / 2 - at - et - yt - $.mainAxis
                    : xt - et - yt - $.mainAxis,
                Re = J
                    ? -u[Te] / 2 + at + et + Nt + $.mainAxis
                    : ut + et + Nt + $.mainAxis,
                Wt = e.elements.arrow && tr(e.elements.arrow),
                lt = Wt
                    ? X === "y"
                        ? Wt.clientTop || 0
                        : Wt.clientLeft || 0
                    : 0,
                He = (W = ne == null ? void 0 : ne[X]) != null ? W : 0,
                on = ge + Dt - He - lt,
                kn = ge + Re - He,
                Lt = Gn(F ? Lr(Ee, on) : Ee, ge, F ? Zt(ve, kn) : ve);
            (te[X] = Lt), (ye[X] = Lt - ge);
        }
        if (_) {
            var se,
                Oe = X === "x" ? De : Le,
                $n = X === "x" ? Fe : Be,
                tt = te[ce],
                an = ce === "y" ? "height" : "width",
                je = tt + K[Oe],
                Rt = tt - K[$n],
                Et = [De, Le].indexOf(H) !== -1,
                U = (se = ne == null ? void 0 : ne[ce]) != null ? se : 0,
                Ae = Et ? je : tt - u[an] - pe[an] - U + $.altAxis,
                or = Et ? tt + u[an] + pe[an] - U - $.altAxis : Rt,
                ar =
                    F && Et ? Bl(Ae, tt, or) : Gn(F ? Ae : je, tt, F ? or : Rt);
            (te[ce] = ar), (ye[ce] = ar - tt);
        }
        e.modifiersData[o] = ye;
    }
}
const ja = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: ff,
    requiresIfExists: ["offset"],
};
function df(n) {
    return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
}
function hf(n) {
    return n === qe(n) || !Ge(n) ? as(n) : df(n);
}
function pf(n) {
    var e = n.getBoundingClientRect(),
        i = wn(e.width) / n.offsetWidth || 1,
        o = wn(e.height) / n.offsetHeight || 1;
    return i !== 1 || o !== 1;
}
function gf(n, e, i) {
    i === void 0 && (i = !1);
    var o = Ge(e),
        c = Ge(e) && pf(e),
        h = Bt(e),
        p = An(n, c, i),
        _ = { scrollLeft: 0, scrollTop: 0 },
        T = { x: 0, y: 0 };
    return (
        (o || (!o && !i)) &&
            ((vt(e) !== "body" || cs(h)) && (_ = hf(e)),
            Ge(e)
                ? ((T = An(e, !0)), (T.x += e.clientLeft), (T.y += e.clientTop))
                : h && (T.x = us(h))),
        {
            x: p.left + _.scrollLeft - T.x,
            y: p.top + _.scrollTop - T.y,
            width: p.width,
            height: p.height,
        }
    );
}
function mf(n) {
    var e = new Map(),
        i = new Set(),
        o = [];
    n.forEach(function (h) {
        e.set(h.name, h);
    });
    function c(h) {
        i.add(h.name);
        var p = [].concat(h.requires || [], h.requiresIfExists || []);
        p.forEach(function (_) {
            if (!i.has(_)) {
                var T = e.get(_);
                T && c(T);
            }
        }),
            o.push(h);
    }
    return (
        n.forEach(function (h) {
            i.has(h.name) || c(h);
        }),
        o
    );
}
function _f(n) {
    var e = mf(n);
    return Oa.reduce(function (i, o) {
        return i.concat(
            e.filter(function (c) {
                return c.phase === o;
            })
        );
    }, []);
}
function vf(n) {
    var e;
    return function () {
        return (
            e ||
                (e = new Promise(function (i) {
                    Promise.resolve().then(function () {
                        (e = void 0), i(n());
                    });
                })),
            e
        );
    };
}
function yf(n) {
    var e = n.reduce(function (i, o) {
        var c = i[o.name];
        return (
            (i[o.name] = c
                ? Object.assign({}, c, o, {
                      options: Object.assign({}, c.options, o.options),
                      data: Object.assign({}, c.data, o.data),
                  })
                : o),
            i
        );
    }, {});
    return Object.keys(e).map(function (i) {
        return e[i];
    });
}
var _o = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vo() {
    for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++)
        e[i] = arguments[i];
    return !e.some(function (o) {
        return !(o && typeof o.getBoundingClientRect == "function");
    });
}
function qr(n) {
    n === void 0 && (n = {});
    var e = n,
        i = e.defaultModifiers,
        o = i === void 0 ? [] : i,
        c = e.defaultOptions,
        h = c === void 0 ? _o : c;
    return function (_, T, S) {
        S === void 0 && (S = h);
        var E = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, _o, h),
                modifiersData: {},
                elements: { reference: _, popper: T },
                attributes: {},
                styles: {},
            },
            I = [],
            V = !1,
            F = {
                state: E,
                setOptions: function (H) {
                    var ue = typeof H == "function" ? H(E.options) : H;
                    D(),
                        (E.options = Object.assign({}, h, E.options, ue)),
                        (E.scrollParents = {
                            reference: nn(_)
                                ? Xn(_)
                                : _.contextElement
                                ? Xn(_.contextElement)
                                : [],
                            popper: Xn(T),
                        });
                    var J = _f(yf([].concat(o, E.options.modifiers)));
                    return (
                        (E.orderedModifiers = J.filter(function (X) {
                            return X.enabled;
                        })),
                        N(),
                        F.update()
                    );
                },
                forceUpdate: function () {
                    if (!V) {
                        var H = E.elements,
                            ue = H.reference,
                            J = H.popper;
                        if (vo(ue, J)) {
                            (E.rects = {
                                reference: gf(
                                    ue,
                                    tr(J),
                                    E.options.strategy === "fixed"
                                ),
                                popper: rs(J),
                            }),
                                (E.reset = !1),
                                (E.placement = E.options.placement),
                                E.orderedModifiers.forEach(function ($) {
                                    return (E.modifiersData[$.name] =
                                        Object.assign({}, $.data));
                                });
                            for (
                                var X = 0;
                                X < E.orderedModifiers.length;
                                X++
                            ) {
                                if (E.reset === !0) {
                                    (E.reset = !1), (X = -1);
                                    continue;
                                }
                                var ce = E.orderedModifiers[X],
                                    te = ce.fn,
                                    u = ce.options,
                                    pe = u === void 0 ? {} : u,
                                    k = ce.name;
                                typeof te == "function" &&
                                    (E =
                                        te({
                                            state: E,
                                            options: pe,
                                            name: k,
                                            instance: F,
                                        }) || E);
                            }
                        }
                    }
                },
                update: vf(function () {
                    return new Promise(function (K) {
                        F.forceUpdate(), K(E);
                    });
                }),
                destroy: function () {
                    D(), (V = !0);
                },
            };
        if (!vo(_, T)) return F;
        F.setOptions(S).then(function (K) {
            !V && S.onFirstUpdate && S.onFirstUpdate(K);
        });
        function N() {
            E.orderedModifiers.forEach(function (K) {
                var H = K.name,
                    ue = K.options,
                    J = ue === void 0 ? {} : ue,
                    X = K.effect;
                if (typeof X == "function") {
                    var ce = X({ state: E, name: H, instance: F, options: J }),
                        te = function () {};
                    I.push(ce || te);
                }
            });
        }
        function D() {
            I.forEach(function (K) {
                return K();
            }),
                (I = []);
        }
        return F;
    };
}
var Ef = qr(),
    bf = [os, ls, ss, ns],
    Tf = qr({ defaultModifiers: bf }),
    wf = [os, ls, ss, ns, Ha, $a, ja, Pa, Ma],
    fs = qr({ defaultModifiers: wf });
const Fa = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            afterMain: wa,
            afterRead: Ea,
            afterWrite: Sa,
            applyStyles: ns,
            arrow: Pa,
            auto: Fr,
            basePlacements: Ln,
            beforeMain: ba,
            beforeRead: va,
            beforeWrite: Aa,
            bottom: Fe,
            clippingParents: ma,
            computeStyles: ss,
            createPopper: fs,
            createPopperBase: Ef,
            createPopperLite: Tf,
            detectOverflow: Sn,
            end: Tn,
            eventListeners: os,
            flip: $a,
            hide: Ma,
            left: Le,
            main: Ta,
            modifierPhases: Oa,
            offset: Ha,
            placements: es,
            popper: vn,
            popperGenerator: qr,
            popperOffsets: ls,
            preventOverflow: ja,
            read: ya,
            reference: _a,
            right: Be,
            start: tn,
            top: De,
            variationPlacements: Bi,
            viewport: Zi,
            write: Ca,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Mt = new Map(),
    yi = {
        set(n, e, i) {
            Mt.has(n) || Mt.set(n, new Map());
            const o = Mt.get(n);
            if (!o.has(e) && o.size !== 0) {
                console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                        Array.from(o.keys())[0]
                    }.`
                );
                return;
            }
            o.set(e, i);
        },
        get(n, e) {
            return (Mt.has(n) && Mt.get(n).get(e)) || null;
        },
        remove(n, e) {
            if (!Mt.has(n)) return;
            const i = Mt.get(n);
            i.delete(e), i.size === 0 && Mt.delete(n);
        },
    },
    Af = 1e6,
    Cf = 1e3,
    Wi = "transitionend",
    Ba = (n) => (
        n &&
            window.CSS &&
            window.CSS.escape &&
            (n = n.replace(/#([^\s"#']+)/g, (e, i) => `#${CSS.escape(i)}`)),
        n
    ),
    Sf = (n) =>
        n == null
            ? `${n}`
            : Object.prototype.toString
                  .call(n)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase(),
    Of = (n) => {
        do n += Math.floor(Math.random() * Af);
        while (document.getElementById(n));
        return n;
    },
    xf = (n) => {
        if (!n) return 0;
        let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(n);
        const o = Number.parseFloat(e),
            c = Number.parseFloat(i);
        return !o && !c
            ? 0
            : ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              (Number.parseFloat(e) + Number.parseFloat(i)) * Cf);
    },
    qa = (n) => {
        n.dispatchEvent(new Event(Wi));
    },
    At = (n) =>
        !n || typeof n != "object"
            ? !1
            : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"),
    Ht = (n) =>
        At(n)
            ? n.jquery
                ? n[0]
                : n
            : typeof n == "string" && n.length > 0
            ? document.querySelector(Ba(n))
            : null,
    Rn = (n) => {
        if (!At(n) || n.getClientRects().length === 0) return !1;
        const e =
                getComputedStyle(n).getPropertyValue("visibility") ===
                "visible",
            i = n.closest("details:not([open])");
        if (!i) return e;
        if (i !== n) {
            const o = n.closest("summary");
            if ((o && o.parentNode !== i) || o === null) return !1;
        }
        return e;
    },
    jt = (n) =>
        !n ||
        n.nodeType !== Node.ELEMENT_NODE ||
        n.classList.contains("disabled")
            ? !0
            : typeof n.disabled < "u"
            ? n.disabled
            : n.hasAttribute("disabled") &&
              n.getAttribute("disabled") !== "false",
    Va = (n) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof n.getRootNode == "function") {
            const e = n.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return n instanceof ShadowRoot
            ? n
            : n.parentNode
            ? Va(n.parentNode)
            : null;
    },
    Rr = () => {},
    nr = (n) => {
        n.offsetHeight;
    },
    Wa = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
    Ei = [],
    Nf = (n) => {
        document.readyState === "loading"
            ? (Ei.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                      for (const e of Ei) e();
                  }),
              Ei.push(n))
            : n();
    },
    Xe = () => document.documentElement.dir === "rtl",
    Qe = (n) => {
        Nf(() => {
            const e = Wa();
            if (e) {
                const i = n.NAME,
                    o = e.fn[i];
                (e.fn[i] = n.jQueryInterface),
                    (e.fn[i].Constructor = n),
                    (e.fn[i].noConflict = () => (
                        (e.fn[i] = o), n.jQueryInterface
                    ));
            }
        });
    },
    $e = (n, e = [], i = n) => (typeof n == "function" ? n(...e) : i),
    Ua = (n, e, i = !0) => {
        if (!i) {
            $e(n);
            return;
        }
        const c = xf(e) + 5;
        let h = !1;
        const p = ({ target: _ }) => {
            _ === e && ((h = !0), e.removeEventListener(Wi, p), $e(n));
        };
        e.addEventListener(Wi, p),
            setTimeout(() => {
                h || qa(e);
            }, c);
    },
    ds = (n, e, i, o) => {
        const c = n.length;
        let h = n.indexOf(e);
        return h === -1
            ? !i && o
                ? n[c - 1]
                : n[0]
            : ((h += i ? 1 : -1),
              o && (h = (h + c) % c),
              n[Math.max(0, Math.min(h, c - 1))]);
    },
    Df = /[^.]*(?=\..*)\.|.*/,
    Lf = /\..*/,
    Rf = /::\d+$/,
    bi = {};
let yo = 1;
const za = { mouseenter: "mouseover", mouseleave: "mouseout" },
    Pf = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
    ]);
function Ka(n, e) {
    return (e && `${e}::${yo++}`) || n.uidEvent || yo++;
}
function Ya(n) {
    const e = Ka(n);
    return (n.uidEvent = e), (bi[e] = bi[e] || {}), bi[e];
}
function If(n, e) {
    return function i(o) {
        return (
            hs(o, { delegateTarget: n }),
            i.oneOff && P.off(n, o.type, e),
            e.apply(n, [o])
        );
    };
}
function kf(n, e, i) {
    return function o(c) {
        const h = n.querySelectorAll(e);
        for (let { target: p } = c; p && p !== this; p = p.parentNode)
            for (const _ of h)
                if (_ === p)
                    return (
                        hs(c, { delegateTarget: p }),
                        o.oneOff && P.off(n, c.type, e, i),
                        i.apply(p, [c])
                    );
    };
}
function Ga(n, e, i = null) {
    return Object.values(n).find(
        (o) => o.callable === e && o.delegationSelector === i
    );
}
function Xa(n, e, i) {
    const o = typeof e == "string",
        c = o ? i : e || i;
    let h = Ja(n);
    return Pf.has(h) || (h = n), [o, c, h];
}
function Eo(n, e, i, o, c) {
    if (typeof e != "string" || !n) return;
    let [h, p, _] = Xa(e, i, o);
    e in za &&
        (p = ((N) =>
            function (D) {
                if (
                    !D.relatedTarget ||
                    (D.relatedTarget !== D.delegateTarget &&
                        !D.delegateTarget.contains(D.relatedTarget))
                )
                    return N.call(this, D);
            })(p));
    const T = Ya(n),
        S = T[_] || (T[_] = {}),
        E = Ga(S, p, h ? i : null);
    if (E) {
        E.oneOff = E.oneOff && c;
        return;
    }
    const I = Ka(p, e.replace(Df, "")),
        V = h ? kf(n, i, p) : If(n, p);
    (V.delegationSelector = h ? i : null),
        (V.callable = p),
        (V.oneOff = c),
        (V.uidEvent = I),
        (S[I] = V),
        n.addEventListener(_, V, h);
}
function Ui(n, e, i, o, c) {
    const h = Ga(e[i], o, c);
    h && (n.removeEventListener(i, h, !!c), delete e[i][h.uidEvent]);
}
function $f(n, e, i, o) {
    const c = e[i] || {};
    for (const [h, p] of Object.entries(c))
        h.includes(o) && Ui(n, e, i, p.callable, p.delegationSelector);
}
function Ja(n) {
    return (n = n.replace(Lf, "")), za[n] || n;
}
const P = {
    on(n, e, i, o) {
        Eo(n, e, i, o, !1);
    },
    one(n, e, i, o) {
        Eo(n, e, i, o, !0);
    },
    off(n, e, i, o) {
        if (typeof e != "string" || !n) return;
        const [c, h, p] = Xa(e, i, o),
            _ = p !== e,
            T = Ya(n),
            S = T[p] || {},
            E = e.startsWith(".");
        if (typeof h < "u") {
            if (!Object.keys(S).length) return;
            Ui(n, T, p, h, c ? i : null);
            return;
        }
        if (E) for (const I of Object.keys(T)) $f(n, T, I, e.slice(1));
        for (const [I, V] of Object.entries(S)) {
            const F = I.replace(Rf, "");
            (!_ || e.includes(F)) &&
                Ui(n, T, p, V.callable, V.delegationSelector);
        }
    },
    trigger(n, e, i) {
        if (typeof e != "string" || !n) return null;
        const o = Wa(),
            c = Ja(e),
            h = e !== c;
        let p = null,
            _ = !0,
            T = !0,
            S = !1;
        h &&
            o &&
            ((p = o.Event(e, i)),
            o(n).trigger(p),
            (_ = !p.isPropagationStopped()),
            (T = !p.isImmediatePropagationStopped()),
            (S = p.isDefaultPrevented()));
        const E = hs(new Event(e, { bubbles: _, cancelable: !0 }), i);
        return (
            S && E.preventDefault(),
            T && n.dispatchEvent(E),
            E.defaultPrevented && p && p.preventDefault(),
            E
        );
    },
};
function hs(n, e = {}) {
    for (const [i, o] of Object.entries(e))
        try {
            n[i] = o;
        } catch {
            Object.defineProperty(n, i, {
                configurable: !0,
                get() {
                    return o;
                },
            });
        }
    return n;
}
function bo(n) {
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === Number(n).toString()) return Number(n);
    if (n === "" || n === "null") return null;
    if (typeof n != "string") return n;
    try {
        return JSON.parse(decodeURIComponent(n));
    } catch {
        return n;
    }
}
function Ti(n) {
    return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Ct = {
    setDataAttribute(n, e, i) {
        n.setAttribute(`data-bs-${Ti(e)}`, i);
    },
    removeDataAttribute(n, e) {
        n.removeAttribute(`data-bs-${Ti(e)}`);
    },
    getDataAttributes(n) {
        if (!n) return {};
        const e = {},
            i = Object.keys(n.dataset).filter(
                (o) => o.startsWith("bs") && !o.startsWith("bsConfig")
            );
        for (const o of i) {
            let c = o.replace(/^bs/, "");
            (c = c.charAt(0).toLowerCase() + c.slice(1, c.length)),
                (e[c] = bo(n.dataset[o]));
        }
        return e;
    },
    getDataAttribute(n, e) {
        return bo(n.getAttribute(`data-bs-${Ti(e)}`));
    },
};
class rr {
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error(
            'You have to implement the static method "NAME", for each component!'
        );
    }
    _getConfig(e) {
        return (
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
        );
    }
    _configAfterMerge(e) {
        return e;
    }
    _mergeConfigObj(e, i) {
        const o = At(i) ? Ct.getDataAttribute(i, "config") : {};
        return {
            ...this.constructor.Default,
            ...(typeof o == "object" ? o : {}),
            ...(At(i) ? Ct.getDataAttributes(i) : {}),
            ...(typeof e == "object" ? e : {}),
        };
    }
    _typeCheckConfig(e, i = this.constructor.DefaultType) {
        for (const [o, c] of Object.entries(i)) {
            const h = e[o],
                p = At(h) ? "element" : Sf(h);
            if (!new RegExp(c).test(p))
                throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${p}" but expected type "${c}".`
                );
        }
    }
}
const Mf = "5.3.3";
class ot extends rr {
    constructor(e, i) {
        super(),
            (e = Ht(e)),
            e &&
                ((this._element = e),
                (this._config = this._getConfig(i)),
                yi.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
        yi.remove(this._element, this.constructor.DATA_KEY),
            P.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
    }
    _queueCallback(e, i, o = !0) {
        Ua(e, i, o);
    }
    _getConfig(e) {
        return (
            (e = this._mergeConfigObj(e, this._element)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
        );
    }
    static getInstance(e) {
        return yi.get(Ht(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, i = {}) {
        return (
            this.getInstance(e) || new this(e, typeof i == "object" ? i : null)
        );
    }
    static get VERSION() {
        return Mf;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(e) {
        return `${e}${this.EVENT_KEY}`;
    }
}
const wi = (n) => {
        let e = n.getAttribute("data-bs-target");
        if (!e || e === "#") {
            let i = n.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            i.includes("#") &&
                !i.startsWith("#") &&
                (i = `#${i.split("#")[1]}`),
                (e = i && i !== "#" ? i.trim() : null);
        }
        return e
            ? e
                  .split(",")
                  .map((i) => Ba(i))
                  .join(",")
            : null;
    },
    Y = {
        find(n, e = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(e, n));
        },
        findOne(n, e = document.documentElement) {
            return Element.prototype.querySelector.call(e, n);
        },
        children(n, e) {
            return [].concat(...n.children).filter((i) => i.matches(e));
        },
        parents(n, e) {
            const i = [];
            let o = n.parentNode.closest(e);
            for (; o; ) i.push(o), (o = o.parentNode.closest(e));
            return i;
        },
        prev(n, e) {
            let i = n.previousElementSibling;
            for (; i; ) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling;
            }
            return [];
        },
        next(n, e) {
            let i = n.nextElementSibling;
            for (; i; ) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren(n) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
            ]
                .map((i) => `${i}:not([tabindex^="-"])`)
                .join(",");
            return this.find(e, n).filter((i) => !jt(i) && Rn(i));
        },
        getSelectorFromElement(n) {
            const e = wi(n);
            return e && Y.findOne(e) ? e : null;
        },
        getElementFromSelector(n) {
            const e = wi(n);
            return e ? Y.findOne(e) : null;
        },
        getMultipleElementsFromSelector(n) {
            const e = wi(n);
            return e ? Y.find(e) : [];
        },
    },
    Vr = (n, e = "hide") => {
        const i = `click.dismiss${n.EVENT_KEY}`,
            o = n.NAME;
        P.on(document, i, `[data-bs-dismiss="${o}"]`, function (c) {
            if (
                (["A", "AREA"].includes(this.tagName) && c.preventDefault(),
                jt(this))
            )
                return;
            const h = Y.getElementFromSelector(this) || this.closest(`.${o}`);
            n.getOrCreateInstance(h)[e]();
        });
    },
    Hf = "alert",
    jf = "bs.alert",
    Qa = `.${jf}`,
    Ff = `close${Qa}`,
    Bf = `closed${Qa}`,
    qf = "fade",
    Vf = "show";
class Wr extends ot {
    static get NAME() {
        return Hf;
    }
    close() {
        if (P.trigger(this._element, Ff).defaultPrevented) return;
        this._element.classList.remove(Vf);
        const i = this._element.classList.contains(qf);
        this._queueCallback(() => this._destroyElement(), this._element, i);
    }
    _destroyElement() {
        this._element.remove(), P.trigger(this._element, Bf), this.dispose();
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Wr.getOrCreateInstance(this);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor")
                    throw new TypeError(`No method named "${e}"`);
                i[e](this);
            }
        });
    }
}
Vr(Wr, "close");
Qe(Wr);
const Wf = "button",
    Uf = "bs.button",
    zf = `.${Uf}`,
    Kf = ".data-api",
    Yf = "active",
    To = '[data-bs-toggle="button"]',
    Gf = `click${zf}${Kf}`;
class Ur extends ot {
    static get NAME() {
        return Wf;
    }
    toggle() {
        this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle(Yf)
        );
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Ur.getOrCreateInstance(this);
            e === "toggle" && i[e]();
        });
    }
}
P.on(document, Gf, To, (n) => {
    n.preventDefault();
    const e = n.target.closest(To);
    Ur.getOrCreateInstance(e).toggle();
});
Qe(Ur);
const Xf = "swipe",
    Pn = ".bs.swipe",
    Jf = `touchstart${Pn}`,
    Qf = `touchmove${Pn}`,
    Zf = `touchend${Pn}`,
    ed = `pointerdown${Pn}`,
    td = `pointerup${Pn}`,
    nd = "touch",
    rd = "pen",
    id = "pointer-event",
    sd = 40,
    od = { endCallback: null, leftCallback: null, rightCallback: null },
    ad = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
    };
class Pr extends rr {
    constructor(e, i) {
        super(),
            (this._element = e),
            !(!e || !Pr.isSupported()) &&
                ((this._config = this._getConfig(i)),
                (this._deltaX = 0),
                (this._supportPointerEvents = !!window.PointerEvent),
                this._initEvents());
    }
    static get Default() {
        return od;
    }
    static get DefaultType() {
        return ad;
    }
    static get NAME() {
        return Xf;
    }
    dispose() {
        P.off(this._element, Pn);
    }
    _start(e) {
        if (!this._supportPointerEvents) {
            this._deltaX = e.touches[0].clientX;
            return;
        }
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
    }
    _end(e) {
        this._eventIsPointerPenTouch(e) &&
            (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            $e(this._config.endCallback);
    }
    _move(e) {
        this._deltaX =
            e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= sd) return;
        const i = e / this._deltaX;
        (this._deltaX = 0),
            i &&
                $e(
                    i > 0
                        ? this._config.rightCallback
                        : this._config.leftCallback
                );
    }
    _initEvents() {
        this._supportPointerEvents
            ? (P.on(this._element, ed, (e) => this._start(e)),
              P.on(this._element, td, (e) => this._end(e)),
              this._element.classList.add(id))
            : (P.on(this._element, Jf, (e) => this._start(e)),
              P.on(this._element, Qf, (e) => this._move(e)),
              P.on(this._element, Zf, (e) => this._end(e)));
    }
    _eventIsPointerPenTouch(e) {
        return (
            this._supportPointerEvents &&
            (e.pointerType === rd || e.pointerType === nd)
        );
    }
    static isSupported() {
        return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
        );
    }
}
const ud = "carousel",
    cd = "bs.carousel",
    qt = `.${cd}`,
    Za = ".data-api",
    ld = "ArrowLeft",
    fd = "ArrowRight",
    dd = 500,
    Kn = "next",
    mn = "prev",
    yn = "left",
    Or = "right",
    hd = `slide${qt}`,
    Ai = `slid${qt}`,
    pd = `keydown${qt}`,
    gd = `mouseenter${qt}`,
    md = `mouseleave${qt}`,
    _d = `dragstart${qt}`,
    vd = `load${qt}${Za}`,
    yd = `click${qt}${Za}`,
    eu = "carousel",
    vr = "active",
    Ed = "slide",
    bd = "carousel-item-end",
    Td = "carousel-item-start",
    wd = "carousel-item-next",
    Ad = "carousel-item-prev",
    tu = ".active",
    nu = ".carousel-item",
    Cd = tu + nu,
    Sd = ".carousel-item img",
    Od = ".carousel-indicators",
    xd = "[data-bs-slide], [data-bs-slide-to]",
    Nd = '[data-bs-ride="carousel"]',
    Dd = { [ld]: Or, [fd]: yn },
    Ld = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
    },
    Rd = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
    };
class ir extends ot {
    constructor(e, i) {
        super(e, i),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Y.findOne(Od, this._element)),
            this._addEventListeners(),
            this._config.ride === eu && this.cycle();
    }
    static get Default() {
        return Ld;
    }
    static get DefaultType() {
        return Rd;
    }
    static get NAME() {
        return ud;
    }
    next() {
        this._slide(Kn);
    }
    nextWhenVisible() {
        !document.hidden && Rn(this._element) && this.next();
    }
    prev() {
        this._slide(mn);
    }
    pause() {
        this._isSliding && qa(this._element), this._clearInterval();
    }
    cycle() {
        this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
                () => this.nextWhenVisible(),
                this._config.interval
            ));
    }
    _maybeEnableCycle() {
        if (this._config.ride) {
            if (this._isSliding) {
                P.one(this._element, Ai, () => this.cycle());
                return;
            }
            this.cycle();
        }
    }
    to(e) {
        const i = this._getItems();
        if (e > i.length - 1 || e < 0) return;
        if (this._isSliding) {
            P.one(this._element, Ai, () => this.to(e));
            return;
        }
        const o = this._getItemIndex(this._getActive());
        if (o === e) return;
        const c = e > o ? Kn : mn;
        this._slide(c, i[e]);
    }
    dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(e) {
        return (e.defaultInterval = e.interval), e;
    }
    _addEventListeners() {
        this._config.keyboard &&
            P.on(this._element, pd, (e) => this._keydown(e)),
            this._config.pause === "hover" &&
                (P.on(this._element, gd, () => this.pause()),
                P.on(this._element, md, () => this._maybeEnableCycle())),
            this._config.touch &&
                Pr.isSupported() &&
                this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const o of Y.find(Sd, this._element))
            P.on(o, _d, (c) => c.preventDefault());
        const i = {
            leftCallback: () => this._slide(this._directionToOrder(yn)),
            rightCallback: () => this._slide(this._directionToOrder(Or)),
            endCallback: () => {
                this._config.pause === "hover" &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                        () => this._maybeEnableCycle(),
                        dd + this._config.interval
                    )));
            },
        };
        this._swipeHelper = new Pr(this._element, i);
    }
    _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const i = Dd[e.key];
        i && (e.preventDefault(), this._slide(this._directionToOrder(i)));
    }
    _getItemIndex(e) {
        return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement) return;
        const i = Y.findOne(tu, this._indicatorsElement);
        i.classList.remove(vr), i.removeAttribute("aria-current");
        const o = Y.findOne(
            `[data-bs-slide-to="${e}"]`,
            this._indicatorsElement
        );
        o && (o.classList.add(vr), o.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e) return;
        const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = i || this._config.defaultInterval;
    }
    _slide(e, i = null) {
        if (this._isSliding) return;
        const o = this._getActive(),
            c = e === Kn,
            h = i || ds(this._getItems(), o, c, this._config.wrap);
        if (h === o) return;
        const p = this._getItemIndex(h),
            _ = (F) =>
                P.trigger(this._element, F, {
                    relatedTarget: h,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(o),
                    to: p,
                });
        if (_(hd).defaultPrevented || !o || !h) return;
        const S = !!this._interval;
        this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(p),
            (this._activeElement = h);
        const E = c ? Td : bd,
            I = c ? wd : Ad;
        h.classList.add(I), nr(h), o.classList.add(E), h.classList.add(E);
        const V = () => {
            h.classList.remove(E, I),
                h.classList.add(vr),
                o.classList.remove(vr, I, E),
                (this._isSliding = !1),
                _(Ai);
        };
        this._queueCallback(V, o, this._isAnimated()), S && this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains(Ed);
    }
    _getActive() {
        return Y.findOne(Cd, this._element);
    }
    _getItems() {
        return Y.find(nu, this._element);
    }
    _clearInterval() {
        this._interval &&
            (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(e) {
        return Xe() ? (e === yn ? mn : Kn) : e === yn ? Kn : mn;
    }
    _orderToDirection(e) {
        return Xe() ? (e === mn ? yn : Or) : e === mn ? Or : yn;
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = ir.getOrCreateInstance(this, e);
            if (typeof e == "number") {
                i.to(e);
                return;
            }
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
}
P.on(document, yd, xd, function (n) {
    const e = Y.getElementFromSelector(this);
    if (!e || !e.classList.contains(eu)) return;
    n.preventDefault();
    const i = ir.getOrCreateInstance(e),
        o = this.getAttribute("data-bs-slide-to");
    if (o) {
        i.to(o), i._maybeEnableCycle();
        return;
    }
    if (Ct.getDataAttribute(this, "slide") === "next") {
        i.next(), i._maybeEnableCycle();
        return;
    }
    i.prev(), i._maybeEnableCycle();
});
P.on(window, vd, () => {
    const n = Y.find(Nd);
    for (const e of n) ir.getOrCreateInstance(e);
});
Qe(ir);
const Pd = "collapse",
    Id = "bs.collapse",
    sr = `.${Id}`,
    kd = ".data-api",
    $d = `show${sr}`,
    Md = `shown${sr}`,
    Hd = `hide${sr}`,
    jd = `hidden${sr}`,
    Fd = `click${sr}${kd}`,
    Ci = "show",
    bn = "collapse",
    yr = "collapsing",
    Bd = "collapsed",
    qd = `:scope .${bn} .${bn}`,
    Vd = "collapse-horizontal",
    Wd = "width",
    Ud = "height",
    zd = ".collapse.show, .collapse.collapsing",
    zi = '[data-bs-toggle="collapse"]',
    Kd = { parent: null, toggle: !0 },
    Yd = { parent: "(null|element)", toggle: "boolean" };
class Qn extends ot {
    constructor(e, i) {
        super(e, i), (this._isTransitioning = !1), (this._triggerArray = []);
        const o = Y.find(zi);
        for (const c of o) {
            const h = Y.getSelectorFromElement(c),
                p = Y.find(h).filter((_) => _ === this._element);
            h !== null && p.length && this._triggerArray.push(c);
        }
        this._initializeChildren(),
            this._config.parent ||
                this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                ),
            this._config.toggle && this.toggle();
    }
    static get Default() {
        return Kd;
    }
    static get DefaultType() {
        return Yd;
    }
    static get NAME() {
        return Pd;
    }
    toggle() {
        this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (
            (this._config.parent &&
                (e = this._getFirstLevelChildren(zd)
                    .filter((_) => _ !== this._element)
                    .map((_) => Qn.getOrCreateInstance(_, { toggle: !1 }))),
            (e.length && e[0]._isTransitioning) ||
                P.trigger(this._element, $d).defaultPrevented)
        )
            return;
        for (const _ of e) _.hide();
        const o = this._getDimension();
        this._element.classList.remove(bn),
            this._element.classList.add(yr),
            (this._element.style[o] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
        const c = () => {
                (this._isTransitioning = !1),
                    this._element.classList.remove(yr),
                    this._element.classList.add(bn, Ci),
                    (this._element.style[o] = ""),
                    P.trigger(this._element, Md);
            },
            p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
        this._queueCallback(c, this._element, !0),
            (this._element.style[o] = `${this._element[p]}px`);
    }
    hide() {
        if (
            this._isTransitioning ||
            !this._isShown() ||
            P.trigger(this._element, Hd).defaultPrevented
        )
            return;
        const i = this._getDimension();
        (this._element.style[i] = `${
            this._element.getBoundingClientRect()[i]
        }px`),
            nr(this._element),
            this._element.classList.add(yr),
            this._element.classList.remove(bn, Ci);
        for (const c of this._triggerArray) {
            const h = Y.getElementFromSelector(c);
            h && !this._isShown(h) && this._addAriaAndCollapsedClass([c], !1);
        }
        this._isTransitioning = !0;
        const o = () => {
            (this._isTransitioning = !1),
                this._element.classList.remove(yr),
                this._element.classList.add(bn),
                P.trigger(this._element, jd);
        };
        (this._element.style[i] = ""),
            this._queueCallback(o, this._element, !0);
    }
    _isShown(e = this._element) {
        return e.classList.contains(Ci);
    }
    _configAfterMerge(e) {
        return (e.toggle = !!e.toggle), (e.parent = Ht(e.parent)), e;
    }
    _getDimension() {
        return this._element.classList.contains(Vd) ? Wd : Ud;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren(zi);
        for (const i of e) {
            const o = Y.getElementFromSelector(i);
            o && this._addAriaAndCollapsedClass([i], this._isShown(o));
        }
    }
    _getFirstLevelChildren(e) {
        const i = Y.find(qd, this._config.parent);
        return Y.find(e, this._config.parent).filter((o) => !i.includes(o));
    }
    _addAriaAndCollapsedClass(e, i) {
        if (e.length)
            for (const o of e)
                o.classList.toggle(Bd, !i), o.setAttribute("aria-expanded", i);
    }
    static jQueryInterface(e) {
        const i = {};
        return (
            typeof e == "string" && /show|hide/.test(e) && (i.toggle = !1),
            this.each(function () {
                const o = Qn.getOrCreateInstance(this, i);
                if (typeof e == "string") {
                    if (typeof o[e] > "u")
                        throw new TypeError(`No method named "${e}"`);
                    o[e]();
                }
            })
        );
    }
}
P.on(document, Fd, zi, function (n) {
    (n.target.tagName === "A" ||
        (n.delegateTarget && n.delegateTarget.tagName === "A")) &&
        n.preventDefault();
    for (const e of Y.getMultipleElementsFromSelector(this))
        Qn.getOrCreateInstance(e, { toggle: !1 }).toggle();
});
Qe(Qn);
const wo = "dropdown",
    Gd = "bs.dropdown",
    rn = `.${Gd}`,
    ps = ".data-api",
    Xd = "Escape",
    Ao = "Tab",
    Jd = "ArrowUp",
    Co = "ArrowDown",
    Qd = 2,
    Zd = `hide${rn}`,
    eh = `hidden${rn}`,
    th = `show${rn}`,
    nh = `shown${rn}`,
    ru = `click${rn}${ps}`,
    iu = `keydown${rn}${ps}`,
    rh = `keyup${rn}${ps}`,
    En = "show",
    ih = "dropup",
    sh = "dropend",
    oh = "dropstart",
    ah = "dropup-center",
    uh = "dropdown-center",
    Xt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ch = `${Xt}.${En}`,
    xr = ".dropdown-menu",
    lh = ".navbar",
    fh = ".navbar-nav",
    dh = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    hh = Xe() ? "top-end" : "top-start",
    ph = Xe() ? "top-start" : "top-end",
    gh = Xe() ? "bottom-end" : "bottom-start",
    mh = Xe() ? "bottom-start" : "bottom-end",
    _h = Xe() ? "left-start" : "right-start",
    vh = Xe() ? "right-start" : "left-start",
    yh = "top",
    Eh = "bottom",
    bh = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
    },
    Th = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
    };
class _t extends ot {
    constructor(e, i) {
        super(e, i),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
                Y.next(this._element, xr)[0] ||
                Y.prev(this._element, xr)[0] ||
                Y.findOne(xr, this._parent)),
            (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
        return bh;
    }
    static get DefaultType() {
        return Th;
    }
    static get NAME() {
        return wo;
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (jt(this._element) || this._isShown()) return;
        const e = { relatedTarget: this._element };
        if (!P.trigger(this._element, th, e).defaultPrevented) {
            if (
                (this._createPopper(),
                "ontouchstart" in document.documentElement &&
                    !this._parent.closest(fh))
            )
                for (const o of [].concat(...document.body.children))
                    P.on(o, "mouseover", Rr);
            this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(En),
                this._element.classList.add(En),
                P.trigger(this._element, nh, e);
        }
    }
    hide() {
        if (jt(this._element) || !this._isShown()) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
    }
    dispose() {
        this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
        (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
    }
    _completeHide(e) {
        if (!P.trigger(this._element, Zd, e).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
                for (const o of [].concat(...document.body.children))
                    P.off(o, "mouseover", Rr);
            this._popper && this._popper.destroy(),
                this._menu.classList.remove(En),
                this._element.classList.remove(En),
                this._element.setAttribute("aria-expanded", "false"),
                Ct.removeDataAttribute(this._menu, "popper"),
                P.trigger(this._element, eh, e);
        }
    }
    _getConfig(e) {
        if (
            ((e = super._getConfig(e)),
            typeof e.reference == "object" &&
                !At(e.reference) &&
                typeof e.reference.getBoundingClientRect != "function")
        )
            throw new TypeError(
                `${wo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
        return e;
    }
    _createPopper() {
        if (typeof Fa > "u")
            throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
        let e = this._element;
        this._config.reference === "parent"
            ? (e = this._parent)
            : At(this._config.reference)
            ? (e = Ht(this._config.reference))
            : typeof this._config.reference == "object" &&
              (e = this._config.reference);
        const i = this._getPopperConfig();
        this._popper = fs(e, this._menu, i);
    }
    _isShown() {
        return this._menu.classList.contains(En);
    }
    _getPlacement() {
        const e = this._parent;
        if (e.classList.contains(sh)) return _h;
        if (e.classList.contains(oh)) return vh;
        if (e.classList.contains(ah)) return yh;
        if (e.classList.contains(uh)) return Eh;
        const i =
            getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim() === "end";
        return e.classList.contains(ih) ? (i ? ph : hh) : i ? mh : gh;
    }
    _detectNavbar() {
        return this._element.closest(lh) !== null;
    }
    _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
            ? e.split(",").map((i) => Number.parseInt(i, 10))
            : typeof e == "function"
            ? (i) => e(i, this._element)
            : e;
    }
    _getPopperConfig() {
        const e = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                },
                { name: "offset", options: { offset: this._getOffset() } },
            ],
        };
        return (
            (this._inNavbar || this._config.display === "static") &&
                (Ct.setDataAttribute(this._menu, "popper", "static"),
                (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            { ...e, ...$e(this._config.popperConfig, [e]) }
        );
    }
    _selectMenuItem({ key: e, target: i }) {
        const o = Y.find(dh, this._menu).filter((c) => Rn(c));
        o.length && ds(o, i, e === Co, !o.includes(i)).focus();
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = _t.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
    static clearMenus(e) {
        if (e.button === Qd || (e.type === "keyup" && e.key !== Ao)) return;
        const i = Y.find(ch);
        for (const o of i) {
            const c = _t.getInstance(o);
            if (!c || c._config.autoClose === !1) continue;
            const h = e.composedPath(),
                p = h.includes(c._menu);
            if (
                h.includes(c._element) ||
                (c._config.autoClose === "inside" && !p) ||
                (c._config.autoClose === "outside" && p) ||
                (c._menu.contains(e.target) &&
                    ((e.type === "keyup" && e.key === Ao) ||
                        /input|select|option|textarea|form/i.test(
                            e.target.tagName
                        )))
            )
                continue;
            const _ = { relatedTarget: c._element };
            e.type === "click" && (_.clickEvent = e), c._completeHide(_);
        }
    }
    static dataApiKeydownHandler(e) {
        const i = /input|textarea/i.test(e.target.tagName),
            o = e.key === Xd,
            c = [Jd, Co].includes(e.key);
        if ((!c && !o) || (i && !o)) return;
        e.preventDefault();
        const h = this.matches(Xt)
                ? this
                : Y.prev(this, Xt)[0] ||
                  Y.next(this, Xt)[0] ||
                  Y.findOne(Xt, e.delegateTarget.parentNode),
            p = _t.getOrCreateInstance(h);
        if (c) {
            e.stopPropagation(), p.show(), p._selectMenuItem(e);
            return;
        }
        p._isShown() && (e.stopPropagation(), p.hide(), h.focus());
    }
}
P.on(document, iu, Xt, _t.dataApiKeydownHandler);
P.on(document, iu, xr, _t.dataApiKeydownHandler);
P.on(document, ru, _t.clearMenus);
P.on(document, rh, _t.clearMenus);
P.on(document, ru, Xt, function (n) {
    n.preventDefault(), _t.getOrCreateInstance(this).toggle();
});
Qe(_t);
const su = "backdrop",
    wh = "fade",
    So = "show",
    Oo = `mousedown.bs.${su}`,
    Ah = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
    },
    Ch = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
    };
class ou extends rr {
    constructor(e) {
        super(),
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
    }
    static get Default() {
        return Ah;
    }
    static get DefaultType() {
        return Ch;
    }
    static get NAME() {
        return su;
    }
    show(e) {
        if (!this._config.isVisible) {
            $e(e);
            return;
        }
        this._append();
        const i = this._getElement();
        this._config.isAnimated && nr(i),
            i.classList.add(So),
            this._emulateAnimation(() => {
                $e(e);
            });
    }
    hide(e) {
        if (!this._config.isVisible) {
            $e(e);
            return;
        }
        this._getElement().classList.remove(So),
            this._emulateAnimation(() => {
                this.dispose(), $e(e);
            });
    }
    dispose() {
        this._isAppended &&
            (P.off(this._element, Oo),
            this._element.remove(),
            (this._isAppended = !1));
    }
    _getElement() {
        if (!this._element) {
            const e = document.createElement("div");
            (e.className = this._config.className),
                this._config.isAnimated && e.classList.add(wh),
                (this._element = e);
        }
        return this._element;
    }
    _configAfterMerge(e) {
        return (e.rootElement = Ht(e.rootElement)), e;
    }
    _append() {
        if (this._isAppended) return;
        const e = this._getElement();
        this._config.rootElement.append(e),
            P.on(e, Oo, () => {
                $e(this._config.clickCallback);
            }),
            (this._isAppended = !0);
    }
    _emulateAnimation(e) {
        Ua(e, this._getElement(), this._config.isAnimated);
    }
}
const Sh = "focustrap",
    Oh = "bs.focustrap",
    Ir = `.${Oh}`,
    xh = `focusin${Ir}`,
    Nh = `keydown.tab${Ir}`,
    Dh = "Tab",
    Lh = "forward",
    xo = "backward",
    Rh = { autofocus: !0, trapElement: null },
    Ph = { autofocus: "boolean", trapElement: "element" };
class au extends rr {
    constructor(e) {
        super(),
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
    }
    static get Default() {
        return Rh;
    }
    static get DefaultType() {
        return Ph;
    }
    static get NAME() {
        return Sh;
    }
    activate() {
        this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            P.off(document, Ir),
            P.on(document, xh, (e) => this._handleFocusin(e)),
            P.on(document, Nh, (e) => this._handleKeydown(e)),
            (this._isActive = !0));
    }
    deactivate() {
        this._isActive && ((this._isActive = !1), P.off(document, Ir));
    }
    _handleFocusin(e) {
        const { trapElement: i } = this._config;
        if (e.target === document || e.target === i || i.contains(e.target))
            return;
        const o = Y.focusableChildren(i);
        o.length === 0
            ? i.focus()
            : this._lastTabNavDirection === xo
            ? o[o.length - 1].focus()
            : o[0].focus();
    }
    _handleKeydown(e) {
        e.key === Dh && (this._lastTabNavDirection = e.shiftKey ? xo : Lh);
    }
}
const No = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Do = ".sticky-top",
    Er = "padding-right",
    Lo = "margin-right";
class Ki {
    constructor() {
        this._element = document.body;
    }
    getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
    }
    hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
            this._setElementAttributes(this._element, Er, (i) => i + e),
            this._setElementAttributes(No, Er, (i) => i + e),
            this._setElementAttributes(Do, Lo, (i) => i - e);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Er),
            this._resetElementAttributes(No, Er),
            this._resetElementAttributes(Do, Lo);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, i, o) {
        const c = this.getWidth(),
            h = (p) => {
                if (
                    p !== this._element &&
                    window.innerWidth > p.clientWidth + c
                )
                    return;
                this._saveInitialAttribute(p, i);
                const _ = window.getComputedStyle(p).getPropertyValue(i);
                p.style.setProperty(i, `${o(Number.parseFloat(_))}px`);
            };
        this._applyManipulationCallback(e, h);
    }
    _saveInitialAttribute(e, i) {
        const o = e.style.getPropertyValue(i);
        o && Ct.setDataAttribute(e, i, o);
    }
    _resetElementAttributes(e, i) {
        const o = (c) => {
            const h = Ct.getDataAttribute(c, i);
            if (h === null) {
                c.style.removeProperty(i);
                return;
            }
            Ct.removeDataAttribute(c, i), c.style.setProperty(i, h);
        };
        this._applyManipulationCallback(e, o);
    }
    _applyManipulationCallback(e, i) {
        if (At(e)) {
            i(e);
            return;
        }
        for (const o of Y.find(e, this._element)) i(o);
    }
}
const Ih = "modal",
    kh = "bs.modal",
    Je = `.${kh}`,
    $h = ".data-api",
    Mh = "Escape",
    Hh = `hide${Je}`,
    jh = `hidePrevented${Je}`,
    uu = `hidden${Je}`,
    cu = `show${Je}`,
    Fh = `shown${Je}`,
    Bh = `resize${Je}`,
    qh = `click.dismiss${Je}`,
    Vh = `mousedown.dismiss${Je}`,
    Wh = `keydown.dismiss${Je}`,
    Uh = `click${Je}${$h}`,
    Ro = "modal-open",
    zh = "fade",
    Po = "show",
    Si = "modal-static",
    Kh = ".modal.show",
    Yh = ".modal-dialog",
    Gh = ".modal-body",
    Xh = '[data-bs-toggle="modal"]',
    Jh = { backdrop: !0, focus: !0, keyboard: !0 },
    Qh = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
    };
class On extends ot {
    constructor(e, i) {
        super(e, i),
            (this._dialog = Y.findOne(Yh, this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new Ki()),
            this._addEventListeners();
    }
    static get Default() {
        return Jh;
    }
    static get DefaultType() {
        return Qh;
    }
    static get NAME() {
        return Ih;
    }
    toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
        this._isShown ||
            this._isTransitioning ||
            P.trigger(this._element, cu, { relatedTarget: e })
                .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Ro),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
    }
    hide() {
        !this._isShown ||
            this._isTransitioning ||
            P.trigger(this._element, Hh).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Po),
            this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
            ));
    }
    dispose() {
        P.off(window, Je),
            P.off(this._dialog, Je),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    _initializeBackDrop() {
        return new ou({
            isVisible: !!this._config.backdrop,
            isAnimated: this._isAnimated(),
        });
    }
    _initializeFocusTrap() {
        return new au({ trapElement: this._element });
    }
    _showElement(e) {
        document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0);
        const i = Y.findOne(Gh, this._dialog);
        i && (i.scrollTop = 0),
            nr(this._element),
            this._element.classList.add(Po);
        const o = () => {
            this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                P.trigger(this._element, Fh, { relatedTarget: e });
        };
        this._queueCallback(o, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        P.on(this._element, Wh, (e) => {
            if (e.key === Mh) {
                if (this._config.keyboard) {
                    this.hide();
                    return;
                }
                this._triggerBackdropTransition();
            }
        }),
            P.on(window, Bh, () => {
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            P.on(this._element, Vh, (e) => {
                P.one(this._element, qh, (i) => {
                    if (
                        !(
                            this._element !== e.target ||
                            this._element !== i.target
                        )
                    ) {
                        if (this._config.backdrop === "static") {
                            this._triggerBackdropTransition();
                            return;
                        }
                        this._config.backdrop && this.hide();
                    }
                });
            });
    }
    _hideModal() {
        (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
                document.body.classList.remove(Ro),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    P.trigger(this._element, uu);
            });
    }
    _isAnimated() {
        return this._element.classList.contains(zh);
    }
    _triggerBackdropTransition() {
        if (P.trigger(this._element, jh).defaultPrevented) return;
        const i =
                this._element.scrollHeight >
                document.documentElement.clientHeight,
            o = this._element.style.overflowY;
        o === "hidden" ||
            this._element.classList.contains(Si) ||
            (i || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Si),
            this._queueCallback(() => {
                this._element.classList.remove(Si),
                    this._queueCallback(() => {
                        this._element.style.overflowY = o;
                    }, this._dialog);
            }, this._dialog),
            this._element.focus());
    }
    _adjustDialog() {
        const e =
                this._element.scrollHeight >
                document.documentElement.clientHeight,
            i = this._scrollBar.getWidth(),
            o = i > 0;
        if (o && !e) {
            const c = Xe() ? "paddingLeft" : "paddingRight";
            this._element.style[c] = `${i}px`;
        }
        if (!o && e) {
            const c = Xe() ? "paddingRight" : "paddingLeft";
            this._element.style[c] = `${i}px`;
        }
    }
    _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, i) {
        return this.each(function () {
            const o = On.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof o[e] > "u")
                    throw new TypeError(`No method named "${e}"`);
                o[e](i);
            }
        });
    }
}
P.on(document, Uh, Xh, function (n) {
    const e = Y.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        P.one(e, cu, (c) => {
            c.defaultPrevented ||
                P.one(e, uu, () => {
                    Rn(this) && this.focus();
                });
        });
    const i = Y.findOne(Kh);
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
});
Vr(On);
Qe(On);
const Zh = "offcanvas",
    ep = "bs.offcanvas",
    Ot = `.${ep}`,
    lu = ".data-api",
    tp = `load${Ot}${lu}`,
    np = "Escape",
    Io = "show",
    ko = "showing",
    $o = "hiding",
    rp = "offcanvas-backdrop",
    fu = ".offcanvas.show",
    ip = `show${Ot}`,
    sp = `shown${Ot}`,
    op = `hide${Ot}`,
    Mo = `hidePrevented${Ot}`,
    du = `hidden${Ot}`,
    ap = `resize${Ot}`,
    up = `click${Ot}${lu}`,
    cp = `keydown.dismiss${Ot}`,
    lp = '[data-bs-toggle="offcanvas"]',
    fp = { backdrop: !0, keyboard: !0, scroll: !1 },
    dp = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
    };
class Ft extends ot {
    constructor(e, i) {
        super(e, i),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
    }
    static get Default() {
        return fp;
    }
    static get DefaultType() {
        return dp;
    }
    static get NAME() {
        return Zh;
    }
    toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
        if (
            this._isShown ||
            P.trigger(this._element, ip, { relatedTarget: e }).defaultPrevented
        )
            return;
        (this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new Ki().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(ko);
        const o = () => {
            (!this._config.scroll || this._config.backdrop) &&
                this._focustrap.activate(),
                this._element.classList.add(Io),
                this._element.classList.remove(ko),
                P.trigger(this._element, sp, { relatedTarget: e });
        };
        this._queueCallback(o, this._element, !0);
    }
    hide() {
        if (!this._isShown || P.trigger(this._element, op).defaultPrevented)
            return;
        this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add($o),
            this._backdrop.hide();
        const i = () => {
            this._element.classList.remove(Io, $o),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new Ki().reset(),
                P.trigger(this._element, du);
        };
        this._queueCallback(i, this._element, !0);
    }
    dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
        const e = () => {
                if (this._config.backdrop === "static") {
                    P.trigger(this._element, Mo);
                    return;
                }
                this.hide();
            },
            i = !!this._config.backdrop;
        return new ou({
            className: rp,
            isVisible: i,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: i ? e : null,
        });
    }
    _initializeFocusTrap() {
        return new au({ trapElement: this._element });
    }
    _addEventListeners() {
        P.on(this._element, cp, (e) => {
            if (e.key === np) {
                if (this._config.keyboard) {
                    this.hide();
                    return;
                }
                P.trigger(this._element, Mo);
            }
        });
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Ft.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor")
                    throw new TypeError(`No method named "${e}"`);
                i[e](this);
            }
        });
    }
}
P.on(document, up, lp, function (n) {
    const e = Y.getElementFromSelector(this);
    if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), jt(this)))
        return;
    P.one(e, du, () => {
        Rn(this) && this.focus();
    });
    const i = Y.findOne(fu);
    i && i !== e && Ft.getInstance(i).hide(),
        Ft.getOrCreateInstance(e).toggle(this);
});
P.on(window, tp, () => {
    for (const n of Y.find(fu)) Ft.getOrCreateInstance(n).show();
});
P.on(window, ap, () => {
    for (const n of Y.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(n).position !== "fixed" &&
            Ft.getOrCreateInstance(n).hide();
});
Vr(Ft);
Qe(Ft);
const hp = /^aria-[\w-]*$/i,
    hu = {
        "*": ["class", "dir", "id", "lang", "role", hp],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
    },
    pp = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
    ]),
    gp = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    mp = (n, e) => {
        const i = n.nodeName.toLowerCase();
        return e.includes(i)
            ? pp.has(i)
                ? !!gp.test(n.nodeValue)
                : !0
            : e.filter((o) => o instanceof RegExp).some((o) => o.test(i));
    };
function _p(n, e, i) {
    if (!n.length) return n;
    if (i && typeof i == "function") return i(n);
    const c = new window.DOMParser().parseFromString(n, "text/html"),
        h = [].concat(...c.body.querySelectorAll("*"));
    for (const p of h) {
        const _ = p.nodeName.toLowerCase();
        if (!Object.keys(e).includes(_)) {
            p.remove();
            continue;
        }
        const T = [].concat(...p.attributes),
            S = [].concat(e["*"] || [], e[_] || []);
        for (const E of T) mp(E, S) || p.removeAttribute(E.nodeName);
    }
    return c.body.innerHTML;
}
const vp = "TemplateFactory",
    yp = {
        allowList: hu,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
    },
    Ep = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
    },
    bp = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
    };
class Tp extends rr {
    constructor(e) {
        super(), (this._config = this._getConfig(e));
    }
    static get Default() {
        return yp;
    }
    static get DefaultType() {
        return Ep;
    }
    static get NAME() {
        return vp;
    }
    getContent() {
        return Object.values(this._config.content)
            .map((e) => this._resolvePossibleFunction(e))
            .filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(e) {
        return (
            this._checkContent(e),
            (this._config.content = { ...this._config.content, ...e }),
            this
        );
    }
    toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [c, h] of Object.entries(this._config.content))
            this._setContent(e, h, c);
        const i = e.children[0],
            o = this._resolvePossibleFunction(this._config.extraClass);
        return o && i.classList.add(...o.split(" ")), i;
    }
    _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content);
    }
    _checkContent(e) {
        for (const [i, o] of Object.entries(e))
            super._typeCheckConfig({ selector: i, entry: o }, bp);
    }
    _setContent(e, i, o) {
        const c = Y.findOne(o, e);
        if (c) {
            if (((i = this._resolvePossibleFunction(i)), !i)) {
                c.remove();
                return;
            }
            if (At(i)) {
                this._putElementInTemplate(Ht(i), c);
                return;
            }
            if (this._config.html) {
                c.innerHTML = this._maybeSanitize(i);
                return;
            }
            c.textContent = i;
        }
    }
    _maybeSanitize(e) {
        return this._config.sanitize
            ? _p(e, this._config.allowList, this._config.sanitizeFn)
            : e;
    }
    _resolvePossibleFunction(e) {
        return $e(e, [this]);
    }
    _putElementInTemplate(e, i) {
        if (this._config.html) {
            (i.innerHTML = ""), i.append(e);
            return;
        }
        i.textContent = e.textContent;
    }
}
const wp = "tooltip",
    Ap = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Oi = "fade",
    Cp = "modal",
    br = "show",
    Sp = ".tooltip-inner",
    Ho = `.${Cp}`,
    jo = "hide.bs.modal",
    Yn = "hover",
    xi = "focus",
    Op = "click",
    xp = "manual",
    Np = "hide",
    Dp = "hidden",
    Lp = "show",
    Rp = "shown",
    Pp = "inserted",
    Ip = "click",
    kp = "focusin",
    $p = "focusout",
    Mp = "mouseenter",
    Hp = "mouseleave",
    jp = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: Xe() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: Xe() ? "right" : "left",
    },
    Fp = {
        allowList: hu,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
    },
    Bp = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
    };
class In extends ot {
    constructor(e, i) {
        if (typeof Fa > "u")
            throw new TypeError(
                "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
        super(e, i),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
    }
    static get Default() {
        return Fp;
    }
    static get DefaultType() {
        return Bp;
    }
    static get NAME() {
        return wp;
    }
    enable() {
        this._isEnabled = !0;
    }
    disable() {
        this._isEnabled = !1;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (this._isEnabled) {
            if (
                ((this._activeTrigger.click = !this._activeTrigger.click),
                this._isShown())
            ) {
                this._leave();
                return;
            }
            this._enter();
        }
    }
    dispose() {
        clearTimeout(this._timeout),
            P.off(this._element.closest(Ho), jo, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
                this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                ),
            this._disposePopper(),
            super.dispose();
    }
    show() {
        if (this._element.style.display === "none")
            throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const e = P.trigger(this._element, this.constructor.eventName(Lp)),
            o = (
                Va(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
        if (e.defaultPrevented || !o) return;
        this._disposePopper();
        const c = this._getTipElement();
        this._element.setAttribute("aria-describedby", c.getAttribute("id"));
        const { container: h } = this._config;
        if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
                (h.append(c),
                P.trigger(this._element, this.constructor.eventName(Pp))),
            (this._popper = this._createPopper(c)),
            c.classList.add(br),
            "ontouchstart" in document.documentElement)
        )
            for (const _ of [].concat(...document.body.children))
                P.on(_, "mouseover", Rr);
        const p = () => {
            P.trigger(this._element, this.constructor.eventName(Rp)),
                this._isHovered === !1 && this._leave(),
                (this._isHovered = !1);
        };
        this._queueCallback(p, this.tip, this._isAnimated());
    }
    hide() {
        if (
            !this._isShown() ||
            P.trigger(this._element, this.constructor.eventName(Np))
                .defaultPrevented
        )
            return;
        if (
            (this._getTipElement().classList.remove(br),
            "ontouchstart" in document.documentElement)
        )
            for (const c of [].concat(...document.body.children))
                P.off(c, "mouseover", Rr);
        (this._activeTrigger[Op] = !1),
            (this._activeTrigger[xi] = !1),
            (this._activeTrigger[Yn] = !1),
            (this._isHovered = null);
        const o = () => {
            this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                P.trigger(this._element, this.constructor.eventName(Dp)));
        };
        this._queueCallback(o, this.tip, this._isAnimated());
    }
    update() {
        this._popper && this._popper.update();
    }
    _isWithContent() {
        return !!this._getTitle();
    }
    _getTipElement() {
        return (
            this.tip ||
                (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                )),
            this.tip
        );
    }
    _createTipElement(e) {
        const i = this._getTemplateFactory(e).toHtml();
        if (!i) return null;
        i.classList.remove(Oi, br),
            i.classList.add(`bs-${this.constructor.NAME}-auto`);
        const o = Of(this.constructor.NAME).toString();
        return (
            i.setAttribute("id", o),
            this._isAnimated() && i.classList.add(Oi),
            i
        );
    }
    setContent(e) {
        (this._newContent = e),
            this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(e) {
        return (
            this._templateFactory
                ? this._templateFactory.changeContent(e)
                : (this._templateFactory = new Tp({
                      ...this._config,
                      content: e,
                      extraClass: this._resolvePossibleFunction(
                          this._config.customClass
                      ),
                  })),
            this._templateFactory
        );
    }
    _getContentForTemplate() {
        return { [Sp]: this._getTitle() };
    }
    _getTitle() {
        return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
        );
    }
    _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig()
        );
    }
    _isAnimated() {
        return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(Oi))
        );
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(br);
    }
    _createPopper(e) {
        const i = $e(this._config.placement, [this, e, this._element]),
            o = jp[i.toUpperCase()];
        return fs(this._element, e, this._getPopperConfig(o));
    }
    _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
            ? e.split(",").map((i) => Number.parseInt(i, 10))
            : typeof e == "function"
            ? (i) => e(i, this._element)
            : e;
    }
    _resolvePossibleFunction(e) {
        return $e(e, [this._element]);
    }
    _getPopperConfig(e) {
        const i = {
            placement: e,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements,
                    },
                },
                { name: "offset", options: { offset: this._getOffset() } },
                {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                },
                {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                },
                {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (o) => {
                        this._getTipElement().setAttribute(
                            "data-popper-placement",
                            o.state.placement
                        );
                    },
                },
            ],
        };
        return { ...i, ...$e(this._config.popperConfig, [i]) };
    }
    _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const i of e)
            if (i === "click")
                P.on(
                    this._element,
                    this.constructor.eventName(Ip),
                    this._config.selector,
                    (o) => {
                        this._initializeOnDelegatedTarget(o).toggle();
                    }
                );
            else if (i !== xp) {
                const o =
                        i === Yn
                            ? this.constructor.eventName(Mp)
                            : this.constructor.eventName(kp),
                    c =
                        i === Yn
                            ? this.constructor.eventName(Hp)
                            : this.constructor.eventName($p);
                P.on(this._element, o, this._config.selector, (h) => {
                    const p = this._initializeOnDelegatedTarget(h);
                    (p._activeTrigger[h.type === "focusin" ? xi : Yn] = !0),
                        p._enter();
                }),
                    P.on(this._element, c, this._config.selector, (h) => {
                        const p = this._initializeOnDelegatedTarget(h);
                        (p._activeTrigger[h.type === "focusout" ? xi : Yn] =
                            p._element.contains(h.relatedTarget)),
                            p._leave();
                    });
            }
        (this._hideModalHandler = () => {
            this._element && this.hide();
        }),
            P.on(this._element.closest(Ho), jo, this._hideModalHandler);
    }
    _fixTitle() {
        const e = this._element.getAttribute("title");
        e &&
            (!this._element.getAttribute("aria-label") &&
                !this._element.textContent.trim() &&
                this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"));
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return;
        }
        (this._isHovered = !0),
            this._setTimeout(() => {
                this._isHovered && this.show();
            }, this._config.delay.show);
    }
    _leave() {
        this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
                this._isHovered || this.hide();
            }, this._config.delay.hide));
    }
    _setTimeout(e, i) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(e, i));
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(e) {
        const i = Ct.getDataAttributes(this._element);
        for (const o of Object.keys(i)) Ap.has(o) && delete i[o];
        return (
            (e = { ...i, ...(typeof e == "object" && e ? e : {}) }),
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
        );
    }
    _configAfterMerge(e) {
        return (
            (e.container =
                e.container === !1 ? document.body : Ht(e.container)),
            typeof e.delay == "number" &&
                (e.delay = { show: e.delay, hide: e.delay }),
            typeof e.title == "number" && (e.title = e.title.toString()),
            typeof e.content == "number" && (e.content = e.content.toString()),
            e
        );
    }
    _getDelegateConfig() {
        const e = {};
        for (const [i, o] of Object.entries(this._config))
            this.constructor.Default[i] !== o && (e[i] = o);
        return (e.selector = !1), (e.trigger = "manual"), e;
    }
    _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = In.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
}
Qe(In);
const qp = "popover",
    Vp = ".popover-header",
    Wp = ".popover-body",
    Up = {
        ...In.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
    },
    zp = { ...In.DefaultType, content: "(null|string|element|function)" };
class gs extends In {
    static get Default() {
        return Up;
    }
    static get DefaultType() {
        return zp;
    }
    static get NAME() {
        return qp;
    }
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
        return { [Vp]: this._getTitle(), [Wp]: this._getContent() };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = gs.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
}
Qe(gs);
const Kp = "scrollspy",
    Yp = "bs.scrollspy",
    ms = `.${Yp}`,
    Gp = ".data-api",
    Xp = `activate${ms}`,
    Fo = `click${ms}`,
    Jp = `load${ms}${Gp}`,
    Qp = "dropdown-item",
    _n = "active",
    Zp = '[data-bs-spy="scroll"]',
    Ni = "[href]",
    eg = ".nav, .list-group",
    Bo = ".nav-link",
    tg = ".nav-item",
    ng = ".list-group-item",
    rg = `${Bo}, ${tg} > ${Bo}, ${ng}`,
    ig = ".dropdown",
    sg = ".dropdown-toggle",
    og = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
    },
    ag = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
    };
class zr extends ot {
    constructor(e, i) {
        super(e, i),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
                getComputedStyle(this._element).overflowY === "visible"
                    ? null
                    : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0,
            }),
            this.refresh();
    }
    static get Default() {
        return og;
    }
    static get DefaultType() {
        return ag;
    }
    static get NAME() {
        return Kp;
    }
    refresh() {
        this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
                ? this._observer.disconnect()
                : (this._observer = this._getNewObserver());
        for (const e of this._observableSections.values())
            this._observer.observe(e);
    }
    dispose() {
        this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(e) {
        return (
            (e.target = Ht(e.target) || document.body),
            (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
            typeof e.threshold == "string" &&
                (e.threshold = e.threshold
                    .split(",")
                    .map((i) => Number.parseFloat(i))),
            e
        );
    }
    _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
            (P.off(this._config.target, Fo),
            P.on(this._config.target, Fo, Ni, (e) => {
                const i = this._observableSections.get(e.target.hash);
                if (i) {
                    e.preventDefault();
                    const o = this._rootElement || window,
                        c = i.offsetTop - this._element.offsetTop;
                    if (o.scrollTo) {
                        o.scrollTo({ top: c, behavior: "smooth" });
                        return;
                    }
                    o.scrollTop = c;
                }
            }));
    }
    _getNewObserver() {
        const e = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((i) => this._observerCallback(i), e);
    }
    _observerCallback(e) {
        const i = (p) => this._targetLinks.get(`#${p.target.id}`),
            o = (p) => {
                (this._previousScrollData.visibleEntryTop = p.target.offsetTop),
                    this._process(i(p));
            },
            c = (this._rootElement || document.documentElement).scrollTop,
            h = c >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = c;
        for (const p of e) {
            if (!p.isIntersecting) {
                (this._activeTarget = null), this._clearActiveClass(i(p));
                continue;
            }
            const _ =
                p.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (h && _) {
                if ((o(p), !c)) return;
                continue;
            }
            !h && !_ && o(p);
        }
    }
    _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const e = Y.find(Ni, this._config.target);
        for (const i of e) {
            if (!i.hash || jt(i)) continue;
            const o = Y.findOne(decodeURI(i.hash), this._element);
            Rn(o) &&
                (this._targetLinks.set(decodeURI(i.hash), i),
                this._observableSections.set(i.hash, o));
        }
    }
    _process(e) {
        this._activeTarget !== e &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = e),
            e.classList.add(_n),
            this._activateParents(e),
            P.trigger(this._element, Xp, { relatedTarget: e }));
    }
    _activateParents(e) {
        if (e.classList.contains(Qp)) {
            Y.findOne(sg, e.closest(ig)).classList.add(_n);
            return;
        }
        for (const i of Y.parents(e, eg))
            for (const o of Y.prev(i, rg)) o.classList.add(_n);
    }
    _clearActiveClass(e) {
        e.classList.remove(_n);
        const i = Y.find(`${Ni}.${_n}`, e);
        for (const o of i) o.classList.remove(_n);
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = zr.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
}
P.on(window, Jp, () => {
    for (const n of Y.find(Zp)) zr.getOrCreateInstance(n);
});
Qe(zr);
const ug = "tab",
    cg = "bs.tab",
    sn = `.${cg}`,
    lg = `hide${sn}`,
    fg = `hidden${sn}`,
    dg = `show${sn}`,
    hg = `shown${sn}`,
    pg = `click${sn}`,
    gg = `keydown${sn}`,
    mg = `load${sn}`,
    _g = "ArrowLeft",
    qo = "ArrowRight",
    vg = "ArrowUp",
    Vo = "ArrowDown",
    Di = "Home",
    Wo = "End",
    Jt = "active",
    Uo = "fade",
    Li = "show",
    yg = "dropdown",
    pu = ".dropdown-toggle",
    Eg = ".dropdown-menu",
    Ri = `:not(${pu})`,
    bg = '.list-group, .nav, [role="tablist"]',
    Tg = ".nav-item, .list-group-item",
    wg = `.nav-link${Ri}, .list-group-item${Ri}, [role="tab"]${Ri}`,
    gu =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    Pi = `${wg}, ${gu}`,
    Ag = `.${Jt}[data-bs-toggle="tab"], .${Jt}[data-bs-toggle="pill"], .${Jt}[data-bs-toggle="list"]`;
class xn extends ot {
    constructor(e) {
        super(e),
            (this._parent = this._element.closest(bg)),
            this._parent &&
                (this._setInitialAttributes(this._parent, this._getChildren()),
                P.on(this._element, gg, (i) => this._keydown(i)));
    }
    static get NAME() {
        return ug;
    }
    show() {
        const e = this._element;
        if (this._elemIsActive(e)) return;
        const i = this._getActiveElem(),
            o = i ? P.trigger(i, lg, { relatedTarget: e }) : null;
        P.trigger(e, dg, { relatedTarget: i }).defaultPrevented ||
            (o && o.defaultPrevented) ||
            (this._deactivate(i, e), this._activate(e, i));
    }
    _activate(e, i) {
        if (!e) return;
        e.classList.add(Jt), this._activate(Y.getElementFromSelector(e));
        const o = () => {
            if (e.getAttribute("role") !== "tab") {
                e.classList.add(Li);
                return;
            }
            e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", !0),
                this._toggleDropDown(e, !0),
                P.trigger(e, hg, { relatedTarget: i });
        };
        this._queueCallback(o, e, e.classList.contains(Uo));
    }
    _deactivate(e, i) {
        if (!e) return;
        e.classList.remove(Jt),
            e.blur(),
            this._deactivate(Y.getElementFromSelector(e));
        const o = () => {
            if (e.getAttribute("role") !== "tab") {
                e.classList.remove(Li);
                return;
            }
            e.setAttribute("aria-selected", !1),
                e.setAttribute("tabindex", "-1"),
                this._toggleDropDown(e, !1),
                P.trigger(e, fg, { relatedTarget: i });
        };
        this._queueCallback(o, e, e.classList.contains(Uo));
    }
    _keydown(e) {
        if (![_g, qo, vg, Vo, Di, Wo].includes(e.key)) return;
        e.stopPropagation(), e.preventDefault();
        const i = this._getChildren().filter((c) => !jt(c));
        let o;
        if ([Di, Wo].includes(e.key)) o = i[e.key === Di ? 0 : i.length - 1];
        else {
            const c = [qo, Vo].includes(e.key);
            o = ds(i, e.target, c, !0);
        }
        o && (o.focus({ preventScroll: !0 }), xn.getOrCreateInstance(o).show());
    }
    _getChildren() {
        return Y.find(Pi, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
    }
    _setInitialAttributes(e, i) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const o of i) this._setInitialAttributesOnChild(o);
    }
    _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const i = this._elemIsActive(e),
            o = this._getOuterElement(e);
        e.setAttribute("aria-selected", i),
            o !== e && this._setAttributeIfNotExists(o, "role", "presentation"),
            i || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
        const i = Y.getElementFromSelector(e);
        i &&
            (this._setAttributeIfNotExists(i, "role", "tabpanel"),
            e.id &&
                this._setAttributeIfNotExists(i, "aria-labelledby", `${e.id}`));
    }
    _toggleDropDown(e, i) {
        const o = this._getOuterElement(e);
        if (!o.classList.contains(yg)) return;
        const c = (h, p) => {
            const _ = Y.findOne(h, o);
            _ && _.classList.toggle(p, i);
        };
        c(pu, Jt), c(Eg, Li), o.setAttribute("aria-expanded", i);
    }
    _setAttributeIfNotExists(e, i, o) {
        e.hasAttribute(i) || e.setAttribute(i, o);
    }
    _elemIsActive(e) {
        return e.classList.contains(Jt);
    }
    _getInnerElement(e) {
        return e.matches(Pi) ? e : Y.findOne(Pi, e);
    }
    _getOuterElement(e) {
        return e.closest(Tg) || e;
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = xn.getOrCreateInstance(this);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor")
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        });
    }
}
P.on(document, pg, gu, function (n) {
    ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        !jt(this) && xn.getOrCreateInstance(this).show();
});
P.on(window, mg, () => {
    for (const n of Y.find(Ag)) xn.getOrCreateInstance(n);
});
Qe(xn);
const Cg = "toast",
    Sg = "bs.toast",
    Vt = `.${Sg}`,
    Og = `mouseover${Vt}`,
    xg = `mouseout${Vt}`,
    Ng = `focusin${Vt}`,
    Dg = `focusout${Vt}`,
    Lg = `hide${Vt}`,
    Rg = `hidden${Vt}`,
    Pg = `show${Vt}`,
    Ig = `shown${Vt}`,
    kg = "fade",
    zo = "hide",
    Tr = "show",
    wr = "showing",
    $g = { animation: "boolean", autohide: "boolean", delay: "number" },
    Mg = { animation: !0, autohide: !0, delay: 5e3 };
class Kr extends ot {
    constructor(e, i) {
        super(e, i),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
    }
    static get Default() {
        return Mg;
    }
    static get DefaultType() {
        return $g;
    }
    static get NAME() {
        return Cg;
    }
    show() {
        if (P.trigger(this._element, Pg).defaultPrevented) return;
        this._clearTimeout(),
            this._config.animation && this._element.classList.add(kg);
        const i = () => {
            this._element.classList.remove(wr),
                P.trigger(this._element, Ig),
                this._maybeScheduleHide();
        };
        this._element.classList.remove(zo),
            nr(this._element),
            this._element.classList.add(Tr, wr),
            this._queueCallback(i, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown() || P.trigger(this._element, Lg).defaultPrevented)
            return;
        const i = () => {
            this._element.classList.add(zo),
                this._element.classList.remove(wr, Tr),
                P.trigger(this._element, Rg);
        };
        this._element.classList.add(wr),
            this._queueCallback(i, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Tr),
            super.dispose();
    }
    isShown() {
        return this._element.classList.contains(Tr);
    }
    _maybeScheduleHide() {
        this._config.autohide &&
            (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                    this.hide();
                }, this._config.delay)));
    }
    _onInteraction(e, i) {
        switch (e.type) {
            case "mouseover":
            case "mouseout": {
                this._hasMouseInteraction = i;
                break;
            }
            case "focusin":
            case "focusout": {
                this._hasKeyboardInteraction = i;
                break;
            }
        }
        if (i) {
            this._clearTimeout();
            return;
        }
        const o = e.relatedTarget;
        this._element === o ||
            this._element.contains(o) ||
            this._maybeScheduleHide();
    }
    _setListeners() {
        P.on(this._element, Og, (e) => this._onInteraction(e, !0)),
            P.on(this._element, xg, (e) => this._onInteraction(e, !1)),
            P.on(this._element, Ng, (e) => this._onInteraction(e, !0)),
            P.on(this._element, Dg, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Kr.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u")
                    throw new TypeError(`No method named "${e}"`);
                i[e](this);
            }
        });
    }
}
Vr(Kr);
Qe(Kr);
var Hg =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
function mu(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
}
var _u = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (n) {
    (function (e, i) {
        n.exports = e.document
            ? i(e, !0)
            : function (o) {
                  if (!o.document)
                      throw new Error(
                          "jQuery requires a window with a document"
                      );
                  return i(o);
              };
    })(typeof window < "u" ? window : Hg, function (e, i) {
        var o = [],
            c = Object.getPrototypeOf,
            h = o.slice,
            p = o.flat
                ? function (t) {
                      return o.flat.call(t);
                  }
                : function (t) {
                      return o.concat.apply([], t);
                  },
            _ = o.push,
            T = o.indexOf,
            S = {},
            E = S.toString,
            I = S.hasOwnProperty,
            V = I.toString,
            F = V.call(Object),
            N = {},
            D = function (r) {
                return (
                    typeof r == "function" &&
                    typeof r.nodeType != "number" &&
                    typeof r.item != "function"
                );
            },
            K = function (r) {
                return r != null && r === r.window;
            },
            H = e.document,
            ue = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function J(t, r, s) {
            s = s || H;
            var a,
                l,
                f = s.createElement("script");
            if (((f.text = t), r))
                for (a in ue)
                    (l = r[a] || (r.getAttribute && r.getAttribute(a))),
                        l && f.setAttribute(a, l);
            s.head.appendChild(f).parentNode.removeChild(f);
        }
        function X(t) {
            return t == null
                ? t + ""
                : typeof t == "object" || typeof t == "function"
                ? S[E.call(t)] || "object"
                : typeof t;
        }
        var ce = "3.7.1",
            te = /HTML$/i,
            u = function (t, r) {
                return new u.fn.init(t, r);
            };
        (u.fn = u.prototype =
            {
                jquery: ce,
                constructor: u,
                length: 0,
                toArray: function () {
                    return h.call(this);
                },
                get: function (t) {
                    return t == null
                        ? h.call(this)
                        : t < 0
                        ? this[t + this.length]
                        : this[t];
                },
                pushStack: function (t) {
                    var r = u.merge(this.constructor(), t);
                    return (r.prevObject = this), r;
                },
                each: function (t) {
                    return u.each(this, t);
                },
                map: function (t) {
                    return this.pushStack(
                        u.map(this, function (r, s) {
                            return t.call(r, s, r);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(h.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        u.grep(this, function (t, r) {
                            return (r + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        u.grep(this, function (t, r) {
                            return r % 2;
                        })
                    );
                },
                eq: function (t) {
                    var r = this.length,
                        s = +t + (t < 0 ? r : 0);
                    return this.pushStack(s >= 0 && s < r ? [this[s]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: _,
                sort: o.sort,
                splice: o.splice,
            }),
            (u.extend = u.fn.extend =
                function () {
                    var t,
                        r,
                        s,
                        a,
                        l,
                        f,
                        d = arguments[0] || {},
                        v = 1,
                        m = arguments.length,
                        b = !1;
                    for (
                        typeof d == "boolean" &&
                            ((b = d), (d = arguments[v] || {}), v++),
                            typeof d != "object" && !D(d) && (d = {}),
                            v === m && ((d = this), v--);
                        v < m;
                        v++
                    )
                        if ((t = arguments[v]) != null)
                            for (r in t)
                                (a = t[r]),
                                    !(r === "__proto__" || d === a) &&
                                        (b &&
                                        a &&
                                        (u.isPlainObject(a) ||
                                            (l = Array.isArray(a)))
                                            ? ((s = d[r]),
                                              l && !Array.isArray(s)
                                                  ? (f = [])
                                                  : !l && !u.isPlainObject(s)
                                                  ? (f = {})
                                                  : (f = s),
                                              (l = !1),
                                              (d[r] = u.extend(b, f, a)))
                                            : a !== void 0 && (d[r] = a));
                    return d;
                }),
            u.extend({
                expando: "jQuery" + (ce + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t);
                },
                noop: function () {},
                isPlainObject: function (t) {
                    var r, s;
                    return !t || E.call(t) !== "[object Object]"
                        ? !1
                        : ((r = c(t)),
                          r
                              ? ((s =
                                    I.call(r, "constructor") && r.constructor),
                                typeof s == "function" && V.call(s) === F)
                              : !0);
                },
                isEmptyObject: function (t) {
                    var r;
                    for (r in t) return !1;
                    return !0;
                },
                globalEval: function (t, r, s) {
                    J(t, { nonce: r && r.nonce }, s);
                },
                each: function (t, r) {
                    var s,
                        a = 0;
                    if (pe(t))
                        for (
                            s = t.length;
                            a < s && r.call(t[a], a, t[a]) !== !1;
                            a++
                        );
                    else for (a in t) if (r.call(t[a], a, t[a]) === !1) break;
                    return t;
                },
                text: function (t) {
                    var r,
                        s = "",
                        a = 0,
                        l = t.nodeType;
                    if (!l) for (; (r = t[a++]); ) s += u.text(r);
                    return l === 1 || l === 11
                        ? t.textContent
                        : l === 9
                        ? t.documentElement.textContent
                        : l === 3 || l === 4
                        ? t.nodeValue
                        : s;
                },
                makeArray: function (t, r) {
                    var s = r || [];
                    return (
                        t != null &&
                            (pe(Object(t))
                                ? u.merge(s, typeof t == "string" ? [t] : t)
                                : _.call(s, t)),
                        s
                    );
                },
                inArray: function (t, r, s) {
                    return r == null ? -1 : T.call(r, t, s);
                },
                isXMLDoc: function (t) {
                    var r = t && t.namespaceURI,
                        s = t && (t.ownerDocument || t).documentElement;
                    return !te.test(r || (s && s.nodeName) || "HTML");
                },
                merge: function (t, r) {
                    for (var s = +r.length, a = 0, l = t.length; a < s; a++)
                        t[l++] = r[a];
                    return (t.length = l), t;
                },
                grep: function (t, r, s) {
                    for (var a, l = [], f = 0, d = t.length, v = !s; f < d; f++)
                        (a = !r(t[f], f)), a !== v && l.push(t[f]);
                    return l;
                },
                map: function (t, r, s) {
                    var a,
                        l,
                        f = 0,
                        d = [];
                    if (pe(t))
                        for (a = t.length; f < a; f++)
                            (l = r(t[f], f, s)), l != null && d.push(l);
                    else
                        for (f in t)
                            (l = r(t[f], f, s)), l != null && d.push(l);
                    return p(d);
                },
                guid: 1,
                support: N,
            }),
            typeof Symbol == "function" &&
                (u.fn[Symbol.iterator] = o[Symbol.iterator]),
            u.each(
                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                ),
                function (t, r) {
                    S["[object " + r + "]"] = r.toLowerCase();
                }
            );
        function pe(t) {
            var r = !!t && "length" in t && t.length,
                s = X(t);
            return D(t) || K(t)
                ? !1
                : s === "array" ||
                      r === 0 ||
                      (typeof r == "number" && r > 0 && r - 1 in t);
        }
        function k(t, r) {
            return t.nodeName && t.nodeName.toLowerCase() === r.toLowerCase();
        }
        var $ = o.pop,
            ne = o.sort,
            ye = o.splice,
            W = "[\\x20\\t\\r\\n\\f]",
            Se = new RegExp(
                "^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$",
                "g"
            );
        u.contains = function (t, r) {
            var s = r && r.parentNode;
            return (
                t === s ||
                !!(
                    s &&
                    s.nodeType === 1 &&
                    (t.contains
                        ? t.contains(s)
                        : t.compareDocumentPosition &&
                          t.compareDocumentPosition(s) & 16)
                )
            );
        };
        var Ve = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function Te(t, r) {
            return r
                ? t === "\0"
                    ? "�"
                    : t.slice(0, -1) +
                      "\\" +
                      t.charCodeAt(t.length - 1).toString(16) +
                      " "
                : "\\" + t;
        }
        u.escapeSelector = function (t) {
            return (t + "").replace(Ve, Te);
        };
        var ge = H,
            Ee = _;
        (function () {
            var t,
                r,
                s,
                a,
                l,
                f = Ee,
                d,
                v,
                m,
                b,
                O,
                R = u.expando,
                A = 0,
                M = 0,
                Z = hr(),
                fe = hr(),
                ie = hr(),
                Ce = hr(),
                we = function (g, y) {
                    return g === y && (l = !0), 0;
                },
                ft =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                dt =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    W +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                le =
                    "\\[" +
                    W +
                    "*(" +
                    dt +
                    ")(?:" +
                    W +
                    "*([*^$|!~]?=)" +
                    W +
                    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                    dt +
                    "))|)" +
                    W +
                    "*\\]",
                Yt =
                    ":(" +
                    dt +
                    `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                    le +
                    ")*)|.*)\\)|)",
                de = new RegExp(W + "+", "g"),
                _e = new RegExp("^" + W + "*," + W + "*"),
                Vn = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                ui = new RegExp(W + "|>"),
                ht = new RegExp(Yt),
                Wn = new RegExp("^" + dt + "$"),
                pt = {
                    ID: new RegExp("^#(" + dt + ")"),
                    CLASS: new RegExp("^\\.(" + dt + ")"),
                    TAG: new RegExp("^(" + dt + "|[*])"),
                    ATTR: new RegExp("^" + le),
                    PSEUDO: new RegExp("^" + Yt),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            W +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            W +
                            "*(?:([+-]|)" +
                            W +
                            "*(\\d+)|))" +
                            W +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + ft + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            W +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            W +
                            "*((?:-\\d)?\\d*)" +
                            W +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                Pt = /^(?:input|select|textarea|button)$/i,
                It = /^h\d$/i,
                ze = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ci = /[+~]/,
                Tt = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                wt = function (g, y) {
                    var w = "0x" + g.slice(1) - 65536;
                    return (
                        y ||
                        (w < 0
                            ? String.fromCharCode(w + 65536)
                            : String.fromCharCode(
                                  (w >> 10) | 55296,
                                  (w & 1023) | 56320
                              ))
                    );
                },
                ic = function () {
                    kt();
                },
                sc = gr(
                    function (g) {
                        return g.disabled === !0 && k(g, "fieldset");
                    },
                    { dir: "parentNode", next: "legend" }
                );
            function oc() {
                try {
                    return d.activeElement;
                } catch {}
            }
            try {
                f.apply((o = h.call(ge.childNodes)), ge.childNodes),
                    o[ge.childNodes.length].nodeType;
            } catch {
                f = {
                    apply: function (y, w) {
                        Ee.apply(y, h.call(w));
                    },
                    call: function (y) {
                        Ee.apply(y, h.call(arguments, 1));
                    },
                };
            }
            function he(g, y, w, C) {
                var L,
                    j,
                    B,
                    z,
                    q,
                    oe,
                    Q,
                    ee = y && y.ownerDocument,
                    ae = y ? y.nodeType : 9;
                if (
                    ((w = w || []),
                    typeof g != "string" ||
                        !g ||
                        (ae !== 1 && ae !== 9 && ae !== 11))
                )
                    return w;
                if (!C && (kt(y), (y = y || d), m)) {
                    if (ae !== 11 && (q = ze.exec(g)))
                        if ((L = q[1])) {
                            if (ae === 9)
                                if ((B = y.getElementById(L))) {
                                    if (B.id === L) return f.call(w, B), w;
                                } else return w;
                            else if (
                                ee &&
                                (B = ee.getElementById(L)) &&
                                he.contains(y, B) &&
                                B.id === L
                            )
                                return f.call(w, B), w;
                        } else {
                            if (q[2])
                                return f.apply(w, y.getElementsByTagName(g)), w;
                            if ((L = q[3]) && y.getElementsByClassName)
                                return (
                                    f.apply(w, y.getElementsByClassName(L)), w
                                );
                        }
                    if (!Ce[g + " "] && (!b || !b.test(g))) {
                        if (
                            ((Q = g),
                            (ee = y),
                            ae === 1 && (ui.test(g) || Vn.test(g)))
                        ) {
                            for (
                                ee = (ci.test(g) && li(y.parentNode)) || y,
                                    (ee != y || !N.scope) &&
                                        ((z = y.getAttribute("id"))
                                            ? (z = u.escapeSelector(z))
                                            : y.setAttribute("id", (z = R))),
                                    oe = Un(g),
                                    j = oe.length;
                                j--;

                            )
                                oe[j] =
                                    (z ? "#" + z : ":scope") + " " + pr(oe[j]);
                            Q = oe.join(",");
                        }
                        try {
                            return f.apply(w, ee.querySelectorAll(Q)), w;
                        } catch {
                            Ce(g, !0);
                        } finally {
                            z === R && y.removeAttribute("id");
                        }
                    }
                }
                return Xs(g.replace(Se, "$1"), y, w, C);
            }
            function hr() {
                var g = [];
                function y(w, C) {
                    return (
                        g.push(w + " ") > r.cacheLength && delete y[g.shift()],
                        (y[w + " "] = C)
                    );
                }
                return y;
            }
            function rt(g) {
                return (g[R] = !0), g;
            }
            function pn(g) {
                var y = d.createElement("fieldset");
                try {
                    return !!g(y);
                } catch {
                    return !1;
                } finally {
                    y.parentNode && y.parentNode.removeChild(y), (y = null);
                }
            }
            function ac(g) {
                return function (y) {
                    return k(y, "input") && y.type === g;
                };
            }
            function uc(g) {
                return function (y) {
                    return (k(y, "input") || k(y, "button")) && y.type === g;
                };
            }
            function Ys(g) {
                return function (y) {
                    return "form" in y
                        ? y.parentNode && y.disabled === !1
                            ? "label" in y
                                ? "label" in y.parentNode
                                    ? y.parentNode.disabled === g
                                    : y.disabled === g
                                : y.isDisabled === g ||
                                  (y.isDisabled !== !g && sc(y) === g)
                            : y.disabled === g
                        : "label" in y
                        ? y.disabled === g
                        : !1;
                };
            }
            function Gt(g) {
                return rt(function (y) {
                    return (
                        (y = +y),
                        rt(function (w, C) {
                            for (
                                var L, j = g([], w.length, y), B = j.length;
                                B--;

                            )
                                w[(L = j[B])] && (w[L] = !(C[L] = w[L]));
                        })
                    );
                });
            }
            function li(g) {
                return g && typeof g.getElementsByTagName < "u" && g;
            }
            function kt(g) {
                var y,
                    w = g ? g.ownerDocument || g : ge;
                return (
                    w == d ||
                        w.nodeType !== 9 ||
                        !w.documentElement ||
                        ((d = w),
                        (v = d.documentElement),
                        (m = !u.isXMLDoc(d)),
                        (O =
                            v.matches ||
                            v.webkitMatchesSelector ||
                            v.msMatchesSelector),
                        v.msMatchesSelector &&
                            ge != d &&
                            (y = d.defaultView) &&
                            y.top !== y &&
                            y.addEventListener("unload", ic),
                        (N.getById = pn(function (C) {
                            return (
                                (v.appendChild(C).id = u.expando),
                                !d.getElementsByName ||
                                    !d.getElementsByName(u.expando).length
                            );
                        })),
                        (N.disconnectedMatch = pn(function (C) {
                            return O.call(C, "*");
                        })),
                        (N.scope = pn(function () {
                            return d.querySelectorAll(":scope");
                        })),
                        (N.cssHas = pn(function () {
                            try {
                                return d.querySelector(":has(*,:jqfake)"), !1;
                            } catch {
                                return !0;
                            }
                        })),
                        N.getById
                            ? ((r.filter.ID = function (C) {
                                  var L = C.replace(Tt, wt);
                                  return function (j) {
                                      return j.getAttribute("id") === L;
                                  };
                              }),
                              (r.find.ID = function (C, L) {
                                  if (typeof L.getElementById < "u" && m) {
                                      var j = L.getElementById(C);
                                      return j ? [j] : [];
                                  }
                              }))
                            : ((r.filter.ID = function (C) {
                                  var L = C.replace(Tt, wt);
                                  return function (j) {
                                      var B =
                                          typeof j.getAttributeNode < "u" &&
                                          j.getAttributeNode("id");
                                      return B && B.value === L;
                                  };
                              }),
                              (r.find.ID = function (C, L) {
                                  if (typeof L.getElementById < "u" && m) {
                                      var j,
                                          B,
                                          z,
                                          q = L.getElementById(C);
                                      if (q) {
                                          if (
                                              ((j = q.getAttributeNode("id")),
                                              j && j.value === C)
                                          )
                                              return [q];
                                          for (
                                              z = L.getElementsByName(C), B = 0;
                                              (q = z[B++]);

                                          )
                                              if (
                                                  ((j =
                                                      q.getAttributeNode("id")),
                                                  j && j.value === C)
                                              )
                                                  return [q];
                                      }
                                      return [];
                                  }
                              })),
                        (r.find.TAG = function (C, L) {
                            return typeof L.getElementsByTagName < "u"
                                ? L.getElementsByTagName(C)
                                : L.querySelectorAll(C);
                        }),
                        (r.find.CLASS = function (C, L) {
                            if (typeof L.getElementsByClassName < "u" && m)
                                return L.getElementsByClassName(C);
                        }),
                        (b = []),
                        pn(function (C) {
                            var L;
                            (v.appendChild(C).innerHTML =
                                "<a id='" +
                                R +
                                "' href='' disabled='disabled'></a><select id='" +
                                R +
                                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                                C.querySelectorAll("[selected]").length ||
                                    b.push("\\[" + W + "*(?:value|" + ft + ")"),
                                C.querySelectorAll("[id~=" + R + "-]").length ||
                                    b.push("~="),
                                C.querySelectorAll("a#" + R + "+*").length ||
                                    b.push(".#.+[+~]"),
                                C.querySelectorAll(":checked").length ||
                                    b.push(":checked"),
                                (L = d.createElement("input")),
                                L.setAttribute("type", "hidden"),
                                C.appendChild(L).setAttribute("name", "D"),
                                (v.appendChild(C).disabled = !0),
                                C.querySelectorAll(":disabled").length !== 2 &&
                                    b.push(":enabled", ":disabled"),
                                (L = d.createElement("input")),
                                L.setAttribute("name", ""),
                                C.appendChild(L),
                                C.querySelectorAll("[name='']").length ||
                                    b.push(
                                        "\\[" +
                                            W +
                                            "*name" +
                                            W +
                                            "*=" +
                                            W +
                                            `*(?:''|"")`
                                    );
                        }),
                        N.cssHas || b.push(":has"),
                        (b = b.length && new RegExp(b.join("|"))),
                        (we = function (C, L) {
                            if (C === L) return (l = !0), 0;
                            var j =
                                !C.compareDocumentPosition -
                                !L.compareDocumentPosition;
                            return (
                                j ||
                                ((j =
                                    (C.ownerDocument || C) ==
                                    (L.ownerDocument || L)
                                        ? C.compareDocumentPosition(L)
                                        : 1),
                                j & 1 ||
                                (!N.sortDetached &&
                                    L.compareDocumentPosition(C) === j)
                                    ? C === d ||
                                      (C.ownerDocument == ge &&
                                          he.contains(ge, C))
                                        ? -1
                                        : L === d ||
                                          (L.ownerDocument == ge &&
                                              he.contains(ge, L))
                                        ? 1
                                        : a
                                        ? T.call(a, C) - T.call(a, L)
                                        : 0
                                    : j & 4
                                    ? -1
                                    : 1)
                            );
                        })),
                    d
                );
            }
            (he.matches = function (g, y) {
                return he(g, null, null, y);
            }),
                (he.matchesSelector = function (g, y) {
                    if ((kt(g), m && !Ce[y + " "] && (!b || !b.test(y))))
                        try {
                            var w = O.call(g, y);
                            if (
                                w ||
                                N.disconnectedMatch ||
                                (g.document && g.document.nodeType !== 11)
                            )
                                return w;
                        } catch {
                            Ce(y, !0);
                        }
                    return he(y, d, null, [g]).length > 0;
                }),
                (he.contains = function (g, y) {
                    return (
                        (g.ownerDocument || g) != d && kt(g), u.contains(g, y)
                    );
                }),
                (he.attr = function (g, y) {
                    (g.ownerDocument || g) != d && kt(g);
                    var w = r.attrHandle[y.toLowerCase()],
                        C =
                            w && I.call(r.attrHandle, y.toLowerCase())
                                ? w(g, y, !m)
                                : void 0;
                    return C !== void 0 ? C : g.getAttribute(y);
                }),
                (he.error = function (g) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + g
                    );
                }),
                (u.uniqueSort = function (g) {
                    var y,
                        w = [],
                        C = 0,
                        L = 0;
                    if (
                        ((l = !N.sortStable),
                        (a = !N.sortStable && h.call(g, 0)),
                        ne.call(g, we),
                        l)
                    ) {
                        for (; (y = g[L++]); ) y === g[L] && (C = w.push(L));
                        for (; C--; ) ye.call(g, w[C], 1);
                    }
                    return (a = null), g;
                }),
                (u.fn.uniqueSort = function () {
                    return this.pushStack(u.uniqueSort(h.apply(this)));
                }),
                (r = u.expr =
                    {
                        cacheLength: 50,
                        createPseudo: rt,
                        match: pt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (g) {
                                return (
                                    (g[1] = g[1].replace(Tt, wt)),
                                    (g[3] = (
                                        g[3] ||
                                        g[4] ||
                                        g[5] ||
                                        ""
                                    ).replace(Tt, wt)),
                                    g[2] === "~=" && (g[3] = " " + g[3] + " "),
                                    g.slice(0, 4)
                                );
                            },
                            CHILD: function (g) {
                                return (
                                    (g[1] = g[1].toLowerCase()),
                                    g[1].slice(0, 3) === "nth"
                                        ? (g[3] || he.error(g[0]),
                                          (g[4] = +(g[4]
                                              ? g[5] + (g[6] || 1)
                                              : 2 *
                                                (g[3] === "even" ||
                                                    g[3] === "odd"))),
                                          (g[5] = +(
                                              g[7] + g[8] || g[3] === "odd"
                                          )))
                                        : g[3] && he.error(g[0]),
                                    g
                                );
                            },
                            PSEUDO: function (g) {
                                var y,
                                    w = !g[6] && g[2];
                                return pt.CHILD.test(g[0])
                                    ? null
                                    : (g[3]
                                          ? (g[2] = g[4] || g[5] || "")
                                          : w &&
                                            ht.test(w) &&
                                            (y = Un(w, !0)) &&
                                            (y =
                                                w.indexOf(")", w.length - y) -
                                                w.length) &&
                                            ((g[0] = g[0].slice(0, y)),
                                            (g[2] = w.slice(0, y))),
                                      g.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (g) {
                                var y = g.replace(Tt, wt).toLowerCase();
                                return g === "*"
                                    ? function () {
                                          return !0;
                                      }
                                    : function (w) {
                                          return k(w, y);
                                      };
                            },
                            CLASS: function (g) {
                                var y = Z[g + " "];
                                return (
                                    y ||
                                    ((y = new RegExp(
                                        "(^|" + W + ")" + g + "(" + W + "|$)"
                                    )) &&
                                        Z(g, function (w) {
                                            return y.test(
                                                (typeof w.className ==
                                                    "string" &&
                                                    w.className) ||
                                                    (typeof w.getAttribute <
                                                        "u" &&
                                                        w.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (g, y, w) {
                                return function (C) {
                                    var L = he.attr(C, g);
                                    return L == null
                                        ? y === "!="
                                        : y
                                        ? ((L += ""),
                                          y === "="
                                              ? L === w
                                              : y === "!="
                                              ? L !== w
                                              : y === "^="
                                              ? w && L.indexOf(w) === 0
                                              : y === "*="
                                              ? w && L.indexOf(w) > -1
                                              : y === "$="
                                              ? w && L.slice(-w.length) === w
                                              : y === "~="
                                              ? (
                                                    " " +
                                                    L.replace(de, " ") +
                                                    " "
                                                ).indexOf(w) > -1
                                              : y === "|="
                                              ? L === w ||
                                                L.slice(0, w.length + 1) ===
                                                    w + "-"
                                              : !1)
                                        : !0;
                                };
                            },
                            CHILD: function (g, y, w, C, L) {
                                var j = g.slice(0, 3) !== "nth",
                                    B = g.slice(-4) !== "last",
                                    z = y === "of-type";
                                return C === 1 && L === 0
                                    ? function (q) {
                                          return !!q.parentNode;
                                      }
                                    : function (q, oe, Q) {
                                          var ee,
                                              ae,
                                              G,
                                              me,
                                              ke,
                                              xe =
                                                  j !== B
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              Ke = q.parentNode,
                                              gt =
                                                  z && q.nodeName.toLowerCase(),
                                              gn = !Q && !z,
                                              Ne = !1;
                                          if (Ke) {
                                              if (j) {
                                                  for (; xe; ) {
                                                      for (G = q; (G = G[xe]); )
                                                          if (
                                                              z
                                                                  ? k(G, gt)
                                                                  : G.nodeType ===
                                                                    1
                                                          )
                                                              return !1;
                                                      ke = xe =
                                                          g === "only" &&
                                                          !ke &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((ke = [
                                                      B
                                                          ? Ke.firstChild
                                                          : Ke.lastChild,
                                                  ]),
                                                  B && gn)
                                              ) {
                                                  for (
                                                      ae =
                                                          Ke[R] || (Ke[R] = {}),
                                                          ee = ae[g] || [],
                                                          me =
                                                              ee[0] === A &&
                                                              ee[1],
                                                          Ne = me && ee[2],
                                                          G =
                                                              me &&
                                                              Ke.childNodes[me];
                                                      (G =
                                                          (++me &&
                                                              G &&
                                                              G[xe]) ||
                                                          (Ne = me = 0) ||
                                                          ke.pop());

                                                  )
                                                      if (
                                                          G.nodeType === 1 &&
                                                          ++Ne &&
                                                          G === q
                                                      ) {
                                                          ae[g] = [A, me, Ne];
                                                          break;
                                                      }
                                              } else if (
                                                  (gn &&
                                                      ((ae =
                                                          q[R] || (q[R] = {})),
                                                      (ee = ae[g] || []),
                                                      (me =
                                                          ee[0] === A && ee[1]),
                                                      (Ne = me)),
                                                  Ne === !1)
                                              )
                                                  for (
                                                      ;
                                                      (G =
                                                          (++me &&
                                                              G &&
                                                              G[xe]) ||
                                                          (Ne = me = 0) ||
                                                          ke.pop()) &&
                                                      !(
                                                          (z
                                                              ? k(G, gt)
                                                              : G.nodeType ===
                                                                1) &&
                                                          ++Ne &&
                                                          (gn &&
                                                              ((ae =
                                                                  G[R] ||
                                                                  (G[R] = {})),
                                                              (ae[g] = [
                                                                  A,
                                                                  Ne,
                                                              ])),
                                                          G === q)
                                                      );

                                                  );
                                              return (
                                                  (Ne -= L),
                                                  Ne === C ||
                                                      (Ne % C === 0 &&
                                                          Ne / C >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (g, y) {
                                var w,
                                    C =
                                        r.pseudos[g] ||
                                        r.setFilters[g.toLowerCase()] ||
                                        he.error("unsupported pseudo: " + g);
                                return C[R]
                                    ? C(y)
                                    : C.length > 1
                                    ? ((w = [g, g, "", y]),
                                      r.setFilters.hasOwnProperty(
                                          g.toLowerCase()
                                      )
                                          ? rt(function (L, j) {
                                                for (
                                                    var B,
                                                        z = C(L, y),
                                                        q = z.length;
                                                    q--;

                                                )
                                                    (B = T.call(L, z[q])),
                                                        (L[B] = !(j[B] = z[q]));
                                            })
                                          : function (L) {
                                                return C(L, 0, w);
                                            })
                                    : C;
                            },
                        },
                        pseudos: {
                            not: rt(function (g) {
                                var y = [],
                                    w = [],
                                    C = pi(g.replace(Se, "$1"));
                                return C[R]
                                    ? rt(function (L, j, B, z) {
                                          for (
                                              var q,
                                                  oe = C(L, null, z, []),
                                                  Q = L.length;
                                              Q--;

                                          )
                                              (q = oe[Q]) &&
                                                  (L[Q] = !(j[Q] = q));
                                      })
                                    : function (L, j, B) {
                                          return (
                                              (y[0] = L),
                                              C(y, null, B, w),
                                              (y[0] = null),
                                              !w.pop()
                                          );
                                      };
                            }),
                            has: rt(function (g) {
                                return function (y) {
                                    return he(g, y).length > 0;
                                };
                            }),
                            contains: rt(function (g) {
                                return (
                                    (g = g.replace(Tt, wt)),
                                    function (y) {
                                        return (
                                            (
                                                y.textContent || u.text(y)
                                            ).indexOf(g) > -1
                                        );
                                    }
                                );
                            }),
                            lang: rt(function (g) {
                                return (
                                    Wn.test(g || "") ||
                                        he.error("unsupported lang: " + g),
                                    (g = g.replace(Tt, wt).toLowerCase()),
                                    function (y) {
                                        var w;
                                        do
                                            if (
                                                (w = m
                                                    ? y.lang
                                                    : y.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      y.getAttribute("lang"))
                                            )
                                                return (
                                                    (w = w.toLowerCase()),
                                                    w === g ||
                                                        w.indexOf(g + "-") === 0
                                                );
                                        while (
                                            (y = y.parentNode) &&
                                            y.nodeType === 1
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (g) {
                                var y = e.location && e.location.hash;
                                return y && y.slice(1) === g.id;
                            },
                            root: function (g) {
                                return g === v;
                            },
                            focus: function (g) {
                                return (
                                    g === oc() &&
                                    d.hasFocus() &&
                                    !!(g.type || g.href || ~g.tabIndex)
                                );
                            },
                            enabled: Ys(!1),
                            disabled: Ys(!0),
                            checked: function (g) {
                                return (
                                    (k(g, "input") && !!g.checked) ||
                                    (k(g, "option") && !!g.selected)
                                );
                            },
                            selected: function (g) {
                                return (
                                    g.parentNode && g.parentNode.selectedIndex,
                                    g.selected === !0
                                );
                            },
                            empty: function (g) {
                                for (g = g.firstChild; g; g = g.nextSibling)
                                    if (g.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (g) {
                                return !r.pseudos.empty(g);
                            },
                            header: function (g) {
                                return It.test(g.nodeName);
                            },
                            input: function (g) {
                                return Pt.test(g.nodeName);
                            },
                            button: function (g) {
                                return (
                                    (k(g, "input") && g.type === "button") ||
                                    k(g, "button")
                                );
                            },
                            text: function (g) {
                                var y;
                                return (
                                    k(g, "input") &&
                                    g.type === "text" &&
                                    ((y = g.getAttribute("type")) == null ||
                                        y.toLowerCase() === "text")
                                );
                            },
                            first: Gt(function () {
                                return [0];
                            }),
                            last: Gt(function (g, y) {
                                return [y - 1];
                            }),
                            eq: Gt(function (g, y, w) {
                                return [w < 0 ? w + y : w];
                            }),
                            even: Gt(function (g, y) {
                                for (var w = 0; w < y; w += 2) g.push(w);
                                return g;
                            }),
                            odd: Gt(function (g, y) {
                                for (var w = 1; w < y; w += 2) g.push(w);
                                return g;
                            }),
                            lt: Gt(function (g, y, w) {
                                var C;
                                for (
                                    w < 0
                                        ? (C = w + y)
                                        : w > y
                                        ? (C = y)
                                        : (C = w);
                                    --C >= 0;

                                )
                                    g.push(C);
                                return g;
                            }),
                            gt: Gt(function (g, y, w) {
                                for (var C = w < 0 ? w + y : w; ++C < y; )
                                    g.push(C);
                                return g;
                            }),
                        },
                    }),
                (r.pseudos.nth = r.pseudos.eq);
            for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            })
                r.pseudos[t] = ac(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = uc(t);
            function Gs() {}
            (Gs.prototype = r.filters = r.pseudos), (r.setFilters = new Gs());
            function Un(g, y) {
                var w,
                    C,
                    L,
                    j,
                    B,
                    z,
                    q,
                    oe = fe[g + " "];
                if (oe) return y ? 0 : oe.slice(0);
                for (B = g, z = [], q = r.preFilter; B; ) {
                    (!w || (C = _e.exec(B))) &&
                        (C && (B = B.slice(C[0].length) || B),
                        z.push((L = []))),
                        (w = !1),
                        (C = Vn.exec(B)) &&
                            ((w = C.shift()),
                            L.push({ value: w, type: C[0].replace(Se, " ") }),
                            (B = B.slice(w.length)));
                    for (j in r.filter)
                        (C = pt[j].exec(B)) &&
                            (!q[j] || (C = q[j](C))) &&
                            ((w = C.shift()),
                            L.push({ value: w, type: j, matches: C }),
                            (B = B.slice(w.length)));
                    if (!w) break;
                }
                return y ? B.length : B ? he.error(g) : fe(g, z).slice(0);
            }
            function pr(g) {
                for (var y = 0, w = g.length, C = ""; y < w; y++)
                    C += g[y].value;
                return C;
            }
            function gr(g, y, w) {
                var C = y.dir,
                    L = y.next,
                    j = L || C,
                    B = w && j === "parentNode",
                    z = M++;
                return y.first
                    ? function (q, oe, Q) {
                          for (; (q = q[C]); )
                              if (q.nodeType === 1 || B) return g(q, oe, Q);
                          return !1;
                      }
                    : function (q, oe, Q) {
                          var ee,
                              ae,
                              G = [A, z];
                          if (Q) {
                              for (; (q = q[C]); )
                                  if ((q.nodeType === 1 || B) && g(q, oe, Q))
                                      return !0;
                          } else
                              for (; (q = q[C]); )
                                  if (q.nodeType === 1 || B)
                                      if (
                                          ((ae = q[R] || (q[R] = {})),
                                          L && k(q, L))
                                      )
                                          q = q[C] || q;
                                      else {
                                          if (
                                              (ee = ae[j]) &&
                                              ee[0] === A &&
                                              ee[1] === z
                                          )
                                              return (G[2] = ee[2]);
                                          if (
                                              ((ae[j] = G),
                                              (G[2] = g(q, oe, Q)))
                                          )
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function fi(g) {
                return g.length > 1
                    ? function (y, w, C) {
                          for (var L = g.length; L--; )
                              if (!g[L](y, w, C)) return !1;
                          return !0;
                      }
                    : g[0];
            }
            function cc(g, y, w) {
                for (var C = 0, L = y.length; C < L; C++) he(g, y[C], w);
                return w;
            }
            function mr(g, y, w, C, L) {
                for (
                    var j, B = [], z = 0, q = g.length, oe = y != null;
                    z < q;
                    z++
                )
                    (j = g[z]) &&
                        (!w || w(j, C, L)) &&
                        (B.push(j), oe && y.push(z));
                return B;
            }
            function di(g, y, w, C, L, j) {
                return (
                    C && !C[R] && (C = di(C)),
                    L && !L[R] && (L = di(L, j)),
                    rt(function (B, z, q, oe) {
                        var Q,
                            ee,
                            ae,
                            G,
                            me = [],
                            ke = [],
                            xe = z.length,
                            Ke = B || cc(y || "*", q.nodeType ? [q] : q, []),
                            gt = g && (B || !y) ? mr(Ke, me, g, q, oe) : Ke;
                        if (
                            (w
                                ? ((G = L || (B ? g : xe || C) ? [] : z),
                                  w(gt, G, q, oe))
                                : (G = gt),
                            C)
                        )
                            for (
                                Q = mr(G, ke), C(Q, [], q, oe), ee = Q.length;
                                ee--;

                            )
                                (ae = Q[ee]) &&
                                    (G[ke[ee]] = !(gt[ke[ee]] = ae));
                        if (B) {
                            if (L || g) {
                                if (L) {
                                    for (Q = [], ee = G.length; ee--; )
                                        (ae = G[ee]) && Q.push((gt[ee] = ae));
                                    L(null, (G = []), Q, oe);
                                }
                                for (ee = G.length; ee--; )
                                    (ae = G[ee]) &&
                                        (Q = L ? T.call(B, ae) : me[ee]) > -1 &&
                                        (B[Q] = !(z[Q] = ae));
                            }
                        } else (G = mr(G === z ? G.splice(xe, G.length) : G)), L ? L(null, z, G, oe) : f.apply(z, G);
                    })
                );
            }
            function hi(g) {
                for (
                    var y,
                        w,
                        C,
                        L = g.length,
                        j = r.relative[g[0].type],
                        B = j || r.relative[" "],
                        z = j ? 1 : 0,
                        q = gr(
                            function (ee) {
                                return ee === y;
                            },
                            B,
                            !0
                        ),
                        oe = gr(
                            function (ee) {
                                return T.call(y, ee) > -1;
                            },
                            B,
                            !0
                        ),
                        Q = [
                            function (ee, ae, G) {
                                var me =
                                    (!j && (G || ae != s)) ||
                                    ((y = ae).nodeType
                                        ? q(ee, ae, G)
                                        : oe(ee, ae, G));
                                return (y = null), me;
                            },
                        ];
                    z < L;
                    z++
                )
                    if ((w = r.relative[g[z].type])) Q = [gr(fi(Q), w)];
                    else {
                        if (
                            ((w = r.filter[g[z].type].apply(
                                null,
                                g[z].matches
                            )),
                            w[R])
                        ) {
                            for (C = ++z; C < L && !r.relative[g[C].type]; C++);
                            return di(
                                z > 1 && fi(Q),
                                z > 1 &&
                                    pr(
                                        g
                                            .slice(0, z - 1)
                                            .concat({
                                                value:
                                                    g[z - 2].type === " "
                                                        ? "*"
                                                        : "",
                                            })
                                    ).replace(Se, "$1"),
                                w,
                                z < C && hi(g.slice(z, C)),
                                C < L && hi((g = g.slice(C))),
                                C < L && pr(g)
                            );
                        }
                        Q.push(w);
                    }
                return fi(Q);
            }
            function lc(g, y) {
                var w = y.length > 0,
                    C = g.length > 0,
                    L = function (j, B, z, q, oe) {
                        var Q,
                            ee,
                            ae,
                            G = 0,
                            me = "0",
                            ke = j && [],
                            xe = [],
                            Ke = s,
                            gt = j || (C && r.find.TAG("*", oe)),
                            gn = (A += Ke == null ? 1 : Math.random() || 0.1),
                            Ne = gt.length;
                        for (
                            oe && (s = B == d || B || oe);
                            me !== Ne && (Q = gt[me]) != null;
                            me++
                        ) {
                            if (C && Q) {
                                for (
                                    ee = 0,
                                        !B &&
                                            Q.ownerDocument != d &&
                                            (kt(Q), (z = !m));
                                    (ae = g[ee++]);

                                )
                                    if (ae(Q, B || d, z)) {
                                        f.call(q, Q);
                                        break;
                                    }
                                oe && (A = gn);
                            }
                            w && ((Q = !ae && Q) && G--, j && ke.push(Q));
                        }
                        if (((G += me), w && me !== G)) {
                            for (ee = 0; (ae = y[ee++]); ) ae(ke, xe, B, z);
                            if (j) {
                                if (G > 0)
                                    for (; me--; )
                                        ke[me] ||
                                            xe[me] ||
                                            (xe[me] = $.call(q));
                                xe = mr(xe);
                            }
                            f.apply(q, xe),
                                oe &&
                                    !j &&
                                    xe.length > 0 &&
                                    G + y.length > 1 &&
                                    u.uniqueSort(q);
                        }
                        return oe && ((A = gn), (s = Ke)), ke;
                    };
                return w ? rt(L) : L;
            }
            function pi(g, y) {
                var w,
                    C = [],
                    L = [],
                    j = ie[g + " "];
                if (!j) {
                    for (y || (y = Un(g)), w = y.length; w--; )
                        (j = hi(y[w])), j[R] ? C.push(j) : L.push(j);
                    (j = ie(g, lc(L, C))), (j.selector = g);
                }
                return j;
            }
            function Xs(g, y, w, C) {
                var L,
                    j,
                    B,
                    z,
                    q,
                    oe = typeof g == "function" && g,
                    Q = !C && Un((g = oe.selector || g));
                if (((w = w || []), Q.length === 1)) {
                    if (
                        ((j = Q[0] = Q[0].slice(0)),
                        j.length > 2 &&
                            (B = j[0]).type === "ID" &&
                            y.nodeType === 9 &&
                            m &&
                            r.relative[j[1].type])
                    ) {
                        if (
                            ((y = (r.find.ID(B.matches[0].replace(Tt, wt), y) ||
                                [])[0]),
                            y)
                        )
                            oe && (y = y.parentNode);
                        else return w;
                        g = g.slice(j.shift().value.length);
                    }
                    for (
                        L = pt.needsContext.test(g) ? 0 : j.length;
                        L-- && ((B = j[L]), !r.relative[(z = B.type)]);

                    )
                        if (
                            (q = r.find[z]) &&
                            (C = q(
                                B.matches[0].replace(Tt, wt),
                                (ci.test(j[0].type) && li(y.parentNode)) || y
                            ))
                        ) {
                            if ((j.splice(L, 1), (g = C.length && pr(j)), !g))
                                return f.apply(w, C), w;
                            break;
                        }
                }
                return (
                    (oe || pi(g, Q))(
                        C,
                        y,
                        !m,
                        w,
                        !y || (ci.test(g) && li(y.parentNode)) || y
                    ),
                    w
                );
            }
            (N.sortStable = R.split("").sort(we).join("") === R),
                kt(),
                (N.sortDetached = pn(function (g) {
                    return (
                        g.compareDocumentPosition(d.createElement("fieldset")) &
                        1
                    );
                })),
                (u.find = he),
                (u.expr[":"] = u.expr.pseudos),
                (u.unique = u.uniqueSort),
                (he.compile = pi),
                (he.select = Xs),
                (he.setDocument = kt),
                (he.tokenize = Un),
                (he.escape = u.escapeSelector),
                (he.getText = u.text),
                (he.isXML = u.isXMLDoc),
                (he.selectors = u.expr),
                (he.support = u.support),
                (he.uniqueSort = u.uniqueSort);
        })();
        var ve = function (t, r, s) {
                for (
                    var a = [], l = s !== void 0;
                    (t = t[r]) && t.nodeType !== 9;

                )
                    if (t.nodeType === 1) {
                        if (l && u(t).is(s)) break;
                        a.push(t);
                    }
                return a;
            },
            at = function (t, r) {
                for (var s = []; t; t = t.nextSibling)
                    t.nodeType === 1 && t !== r && s.push(t);
                return s;
            },
            xt = u.expr.match.needsContext,
            ut =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function ct(t, r, s) {
            return D(r)
                ? u.grep(t, function (a, l) {
                      return !!r.call(a, l, a) !== s;
                  })
                : r.nodeType
                ? u.grep(t, function (a) {
                      return (a === r) !== s;
                  })
                : typeof r != "string"
                ? u.grep(t, function (a) {
                      return T.call(r, a) > -1 !== s;
                  })
                : u.filter(r, t, s);
        }
        (u.filter = function (t, r, s) {
            var a = r[0];
            return (
                s && (t = ":not(" + t + ")"),
                r.length === 1 && a.nodeType === 1
                    ? u.find.matchesSelector(a, t)
                        ? [a]
                        : []
                    : u.find.matches(
                          t,
                          u.grep(r, function (l) {
                              return l.nodeType === 1;
                          })
                      )
            );
        }),
            u.fn.extend({
                find: function (t) {
                    var r,
                        s,
                        a = this.length,
                        l = this;
                    if (typeof t != "string")
                        return this.pushStack(
                            u(t).filter(function () {
                                for (r = 0; r < a; r++)
                                    if (u.contains(l[r], this)) return !0;
                            })
                        );
                    for (s = this.pushStack([]), r = 0; r < a; r++)
                        u.find(t, l[r], s);
                    return a > 1 ? u.uniqueSort(s) : s;
                },
                filter: function (t) {
                    return this.pushStack(ct(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(ct(this, t || [], !0));
                },
                is: function (t) {
                    return !!ct(
                        this,
                        typeof t == "string" && xt.test(t) ? u(t) : t || [],
                        !1
                    ).length;
                },
            });
        var Ze,
            We = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            yt = (u.fn.init = function (t, r, s) {
                var a, l;
                if (!t) return this;
                if (((s = s || Ze), typeof t == "string"))
                    if (
                        (t[0] === "<" &&
                        t[t.length - 1] === ">" &&
                        t.length >= 3
                            ? (a = [null, t, null])
                            : (a = We.exec(t)),
                        a && (a[1] || !r))
                    )
                        if (a[1]) {
                            if (
                                ((r = r instanceof u ? r[0] : r),
                                u.merge(
                                    this,
                                    u.parseHTML(
                                        a[1],
                                        r && r.nodeType
                                            ? r.ownerDocument || r
                                            : H,
                                        !0
                                    )
                                ),
                                ut.test(a[1]) && u.isPlainObject(r))
                            )
                                for (a in r)
                                    D(this[a])
                                        ? this[a](r[a])
                                        : this.attr(a, r[a]);
                            return this;
                        } else
                            return (
                                (l = H.getElementById(a[2])),
                                l && ((this[0] = l), (this.length = 1)),
                                this
                            );
                    else
                        return !r || r.jquery
                            ? (r || s).find(t)
                            : this.constructor(r).find(t);
                else {
                    if (t.nodeType)
                        return (this[0] = t), (this.length = 1), this;
                    if (D(t)) return s.ready !== void 0 ? s.ready(t) : t(u);
                }
                return u.makeArray(t, this);
            });
        (yt.prototype = u.fn), (Ze = u(H));
        var Nt = /^(?:parents|prev(?:Until|All))/,
            et = { children: !0, contents: !0, next: !0, prev: !0 };
        u.fn.extend({
            has: function (t) {
                var r = u(t, this),
                    s = r.length;
                return this.filter(function () {
                    for (var a = 0; a < s; a++)
                        if (u.contains(this, r[a])) return !0;
                });
            },
            closest: function (t, r) {
                var s,
                    a = 0,
                    l = this.length,
                    f = [],
                    d = typeof t != "string" && u(t);
                if (!xt.test(t)) {
                    for (; a < l; a++)
                        for (s = this[a]; s && s !== r; s = s.parentNode)
                            if (
                                s.nodeType < 11 &&
                                (d
                                    ? d.index(s) > -1
                                    : s.nodeType === 1 &&
                                      u.find.matchesSelector(s, t))
                            ) {
                                f.push(s);
                                break;
                            }
                }
                return this.pushStack(f.length > 1 ? u.uniqueSort(f) : f);
            },
            index: function (t) {
                return t
                    ? typeof t == "string"
                        ? T.call(u(t), this[0])
                        : T.call(this, t.jquery ? t[0] : t)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
            },
            add: function (t, r) {
                return this.pushStack(
                    u.uniqueSort(u.merge(this.get(), u(t, r)))
                );
            },
            addBack: function (t) {
                return this.add(
                    t == null ? this.prevObject : this.prevObject.filter(t)
                );
            },
        });
        function Dt(t, r) {
            for (; (t = t[r]) && t.nodeType !== 1; );
            return t;
        }
        u.each(
            {
                parent: function (t) {
                    var r = t.parentNode;
                    return r && r.nodeType !== 11 ? r : null;
                },
                parents: function (t) {
                    return ve(t, "parentNode");
                },
                parentsUntil: function (t, r, s) {
                    return ve(t, "parentNode", s);
                },
                next: function (t) {
                    return Dt(t, "nextSibling");
                },
                prev: function (t) {
                    return Dt(t, "previousSibling");
                },
                nextAll: function (t) {
                    return ve(t, "nextSibling");
                },
                prevAll: function (t) {
                    return ve(t, "previousSibling");
                },
                nextUntil: function (t, r, s) {
                    return ve(t, "nextSibling", s);
                },
                prevUntil: function (t, r, s) {
                    return ve(t, "previousSibling", s);
                },
                siblings: function (t) {
                    return at((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return at(t.firstChild);
                },
                contents: function (t) {
                    return t.contentDocument != null && c(t.contentDocument)
                        ? t.contentDocument
                        : (k(t, "template") && (t = t.content || t),
                          u.merge([], t.childNodes));
                },
            },
            function (t, r) {
                u.fn[t] = function (s, a) {
                    var l = u.map(this, r, s);
                    return (
                        t.slice(-5) !== "Until" && (a = s),
                        a && typeof a == "string" && (l = u.filter(a, l)),
                        this.length > 1 &&
                            (et[t] || u.uniqueSort(l),
                            Nt.test(t) && l.reverse()),
                        this.pushStack(l)
                    );
                };
            }
        );
        var Re = /[^\x20\t\r\n\f]+/g;
        function Wt(t) {
            var r = {};
            return (
                u.each(t.match(Re) || [], function (s, a) {
                    r[a] = !0;
                }),
                r
            );
        }
        u.Callbacks = function (t) {
            t = typeof t == "string" ? Wt(t) : u.extend({}, t);
            var r,
                s,
                a,
                l,
                f = [],
                d = [],
                v = -1,
                m = function () {
                    for (l = l || t.once, a = r = !0; d.length; v = -1)
                        for (s = d.shift(); ++v < f.length; )
                            f[v].apply(s[0], s[1]) === !1 &&
                                t.stopOnFalse &&
                                ((v = f.length), (s = !1));
                    t.memory || (s = !1),
                        (r = !1),
                        l && (s ? (f = []) : (f = ""));
                },
                b = {
                    add: function () {
                        return (
                            f &&
                                (s && !r && ((v = f.length - 1), d.push(s)),
                                (function O(R) {
                                    u.each(R, function (A, M) {
                                        D(M)
                                            ? (!t.unique || !b.has(M)) &&
                                              f.push(M)
                                            : M &&
                                              M.length &&
                                              X(M) !== "string" &&
                                              O(M);
                                    });
                                })(arguments),
                                s && !r && m()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            u.each(arguments, function (O, R) {
                                for (var A; (A = u.inArray(R, f, A)) > -1; )
                                    f.splice(A, 1), A <= v && v--;
                            }),
                            this
                        );
                    },
                    has: function (O) {
                        return O ? u.inArray(O, f) > -1 : f.length > 0;
                    },
                    empty: function () {
                        return f && (f = []), this;
                    },
                    disable: function () {
                        return (l = d = []), (f = s = ""), this;
                    },
                    disabled: function () {
                        return !f;
                    },
                    lock: function () {
                        return (l = d = []), !s && !r && (f = s = ""), this;
                    },
                    locked: function () {
                        return !!l;
                    },
                    fireWith: function (O, R) {
                        return (
                            l ||
                                ((R = R || []),
                                (R = [O, R.slice ? R.slice() : R]),
                                d.push(R),
                                r || m()),
                            this
                        );
                    },
                    fire: function () {
                        return b.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!a;
                    },
                };
            return b;
        };
        function lt(t) {
            return t;
        }
        function He(t) {
            throw t;
        }
        function on(t, r, s, a) {
            var l;
            try {
                t && D((l = t.promise))
                    ? l.call(t).done(r).fail(s)
                    : t && D((l = t.then))
                    ? l.call(t, r, s)
                    : r.apply(void 0, [t].slice(a));
            } catch (f) {
                s.apply(void 0, [f]);
            }
        }
        u.extend({
            Deferred: function (t) {
                var r = [
                        [
                            "notify",
                            "progress",
                            u.Callbacks("memory"),
                            u.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            u.Callbacks("once memory"),
                            u.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            u.Callbacks("once memory"),
                            u.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    s = "pending",
                    a = {
                        state: function () {
                            return s;
                        },
                        always: function () {
                            return l.done(arguments).fail(arguments), this;
                        },
                        catch: function (f) {
                            return a.then(null, f);
                        },
                        pipe: function () {
                            var f = arguments;
                            return u
                                .Deferred(function (d) {
                                    u.each(r, function (v, m) {
                                        var b = D(f[m[4]]) && f[m[4]];
                                        l[m[1]](function () {
                                            var O =
                                                b && b.apply(this, arguments);
                                            O && D(O.promise)
                                                ? O.promise()
                                                      .progress(d.notify)
                                                      .done(d.resolve)
                                                      .fail(d.reject)
                                                : d[m[0] + "With"](
                                                      this,
                                                      b ? [O] : arguments
                                                  );
                                        });
                                    }),
                                        (f = null);
                                })
                                .promise();
                        },
                        then: function (f, d, v) {
                            var m = 0;
                            function b(O, R, A, M) {
                                return function () {
                                    var Z = this,
                                        fe = arguments,
                                        ie = function () {
                                            var we, ft;
                                            if (!(O < m)) {
                                                if (
                                                    ((we = A.apply(Z, fe)),
                                                    we === R.promise())
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (ft =
                                                    we &&
                                                    (typeof we == "object" ||
                                                        typeof we ==
                                                            "function") &&
                                                    we.then),
                                                    D(ft)
                                                        ? M
                                                            ? ft.call(
                                                                  we,
                                                                  b(
                                                                      m,
                                                                      R,
                                                                      lt,
                                                                      M
                                                                  ),
                                                                  b(m, R, He, M)
                                                              )
                                                            : (m++,
                                                              ft.call(
                                                                  we,
                                                                  b(
                                                                      m,
                                                                      R,
                                                                      lt,
                                                                      M
                                                                  ),
                                                                  b(
                                                                      m,
                                                                      R,
                                                                      He,
                                                                      M
                                                                  ),
                                                                  b(
                                                                      m,
                                                                      R,
                                                                      lt,
                                                                      R.notifyWith
                                                                  )
                                                              ))
                                                        : (A !== lt &&
                                                              ((Z = void 0),
                                                              (fe = [we])),
                                                          (M || R.resolveWith)(
                                                              Z,
                                                              fe
                                                          ));
                                            }
                                        },
                                        Ce = M
                                            ? ie
                                            : function () {
                                                  try {
                                                      ie();
                                                  } catch (we) {
                                                      u.Deferred
                                                          .exceptionHook &&
                                                          u.Deferred.exceptionHook(
                                                              we,
                                                              Ce.error
                                                          ),
                                                          O + 1 >= m &&
                                                              (A !== He &&
                                                                  ((Z = void 0),
                                                                  (fe = [we])),
                                                              R.rejectWith(
                                                                  Z,
                                                                  fe
                                                              ));
                                                  }
                                              };
                                    O
                                        ? Ce()
                                        : (u.Deferred.getErrorHook
                                              ? (Ce.error =
                                                    u.Deferred.getErrorHook())
                                              : u.Deferred.getStackHook &&
                                                (Ce.error =
                                                    u.Deferred.getStackHook()),
                                          e.setTimeout(Ce));
                                };
                            }
                            return u
                                .Deferred(function (O) {
                                    r[0][3].add(
                                        b(0, O, D(v) ? v : lt, O.notifyWith)
                                    ),
                                        r[1][3].add(b(0, O, D(f) ? f : lt)),
                                        r[2][3].add(b(0, O, D(d) ? d : He));
                                })
                                .promise();
                        },
                        promise: function (f) {
                            return f != null ? u.extend(f, a) : a;
                        },
                    },
                    l = {};
                return (
                    u.each(r, function (f, d) {
                        var v = d[2],
                            m = d[5];
                        (a[d[1]] = v.add),
                            m &&
                                v.add(
                                    function () {
                                        s = m;
                                    },
                                    r[3 - f][2].disable,
                                    r[3 - f][3].disable,
                                    r[0][2].lock,
                                    r[0][3].lock
                                ),
                            v.add(d[3].fire),
                            (l[d[0]] = function () {
                                return (
                                    l[d[0] + "With"](
                                        this === l ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (l[d[0] + "With"] = v.fireWith);
                    }),
                    a.promise(l),
                    t && t.call(l, l),
                    l
                );
            },
            when: function (t) {
                var r = arguments.length,
                    s = r,
                    a = Array(s),
                    l = h.call(arguments),
                    f = u.Deferred(),
                    d = function (v) {
                        return function (m) {
                            (a[v] = this),
                                (l[v] =
                                    arguments.length > 1
                                        ? h.call(arguments)
                                        : m),
                                --r || f.resolveWith(a, l);
                        };
                    };
                if (
                    r <= 1 &&
                    (on(t, f.done(d(s)).resolve, f.reject, !r),
                    f.state() === "pending" || D(l[s] && l[s].then))
                )
                    return f.then();
                for (; s--; ) on(l[s], d(s), f.reject);
                return f.promise();
            },
        });
        var kn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (u.Deferred.exceptionHook = function (t, r) {
            e.console &&
                e.console.warn &&
                t &&
                kn.test(t.name) &&
                e.console.warn(
                    "jQuery.Deferred exception: " + t.message,
                    t.stack,
                    r
                );
        }),
            (u.readyException = function (t) {
                e.setTimeout(function () {
                    throw t;
                });
            });
        var Lt = u.Deferred();
        (u.fn.ready = function (t) {
            return (
                Lt.then(t).catch(function (r) {
                    u.readyException(r);
                }),
                this
            );
        }),
            u.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (t === !0 ? --u.readyWait : u.isReady) ||
                        ((u.isReady = !0),
                        !(t !== !0 && --u.readyWait > 0) &&
                            Lt.resolveWith(H, [u]));
                },
            }),
            (u.ready.then = Lt.then);
        function se() {
            H.removeEventListener("DOMContentLoaded", se),
                e.removeEventListener("load", se),
                u.ready();
        }
        H.readyState === "complete" ||
        (H.readyState !== "loading" && !H.documentElement.doScroll)
            ? e.setTimeout(u.ready)
            : (H.addEventListener("DOMContentLoaded", se),
              e.addEventListener("load", se));
        var Oe = function (t, r, s, a, l, f, d) {
                var v = 0,
                    m = t.length,
                    b = s == null;
                if (X(s) === "object") {
                    l = !0;
                    for (v in s) Oe(t, r, v, s[v], !0, f, d);
                } else if (
                    a !== void 0 &&
                    ((l = !0),
                    D(a) || (d = !0),
                    b &&
                        (d
                            ? (r.call(t, a), (r = null))
                            : ((b = r),
                              (r = function (O, R, A) {
                                  return b.call(u(O), A);
                              }))),
                    r)
                )
                    for (; v < m; v++)
                        r(t[v], s, d ? a : a.call(t[v], v, r(t[v], s)));
                return l ? t : b ? r.call(t) : m ? r(t[0], s) : f;
            },
            $n = /^-ms-/,
            tt = /-([a-z])/g;
        function an(t, r) {
            return r.toUpperCase();
        }
        function je(t) {
            return t.replace($n, "ms-").replace(tt, an);
        }
        var Rt = function (t) {
            return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType;
        };
        function Et() {
            this.expando = u.expando + Et.uid++;
        }
        (Et.uid = 1),
            (Et.prototype = {
                cache: function (t) {
                    var r = t[this.expando];
                    return (
                        r ||
                            ((r = {}),
                            Rt(t) &&
                                (t.nodeType
                                    ? (t[this.expando] = r)
                                    : Object.defineProperty(t, this.expando, {
                                          value: r,
                                          configurable: !0,
                                      }))),
                        r
                    );
                },
                set: function (t, r, s) {
                    var a,
                        l = this.cache(t);
                    if (typeof r == "string") l[je(r)] = s;
                    else for (a in r) l[je(a)] = r[a];
                    return l;
                },
                get: function (t, r) {
                    return r === void 0
                        ? this.cache(t)
                        : t[this.expando] && t[this.expando][je(r)];
                },
                access: function (t, r, s) {
                    return r === void 0 ||
                        (r && typeof r == "string" && s === void 0)
                        ? this.get(t, r)
                        : (this.set(t, r, s), s !== void 0 ? s : r);
                },
                remove: function (t, r) {
                    var s,
                        a = t[this.expando];
                    if (a !== void 0) {
                        if (r !== void 0)
                            for (
                                Array.isArray(r)
                                    ? (r = r.map(je))
                                    : ((r = je(r)),
                                      (r = (r in a) ? [r] : r.match(Re) || [])),
                                    s = r.length;
                                s--;

                            )
                                delete a[r[s]];
                        (r === void 0 || u.isEmptyObject(a)) &&
                            (t.nodeType
                                ? (t[this.expando] = void 0)
                                : delete t[this.expando]);
                    }
                },
                hasData: function (t) {
                    var r = t[this.expando];
                    return r !== void 0 && !u.isEmptyObject(r);
                },
            });
        var U = new Et(),
            Ae = new Et(),
            or = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ar = /[A-Z]/g;
        function bu(t) {
            return t === "true"
                ? !0
                : t === "false"
                ? !1
                : t === "null"
                ? null
                : t === +t + ""
                ? +t
                : or.test(t)
                ? JSON.parse(t)
                : t;
        }
        function _s(t, r, s) {
            var a;
            if (s === void 0 && t.nodeType === 1)
                if (
                    ((a = "data-" + r.replace(ar, "-$&").toLowerCase()),
                    (s = t.getAttribute(a)),
                    typeof s == "string")
                ) {
                    try {
                        s = bu(s);
                    } catch {}
                    Ae.set(t, r, s);
                } else s = void 0;
            return s;
        }
        u.extend({
            hasData: function (t) {
                return Ae.hasData(t) || U.hasData(t);
            },
            data: function (t, r, s) {
                return Ae.access(t, r, s);
            },
            removeData: function (t, r) {
                Ae.remove(t, r);
            },
            _data: function (t, r, s) {
                return U.access(t, r, s);
            },
            _removeData: function (t, r) {
                U.remove(t, r);
            },
        }),
            u.fn.extend({
                data: function (t, r) {
                    var s,
                        a,
                        l,
                        f = this[0],
                        d = f && f.attributes;
                    if (t === void 0) {
                        if (
                            this.length &&
                            ((l = Ae.get(f)),
                            f.nodeType === 1 && !U.get(f, "hasDataAttrs"))
                        ) {
                            for (s = d.length; s--; )
                                d[s] &&
                                    ((a = d[s].name),
                                    a.indexOf("data-") === 0 &&
                                        ((a = je(a.slice(5))), _s(f, a, l[a])));
                            U.set(f, "hasDataAttrs", !0);
                        }
                        return l;
                    }
                    return typeof t == "object"
                        ? this.each(function () {
                              Ae.set(this, t);
                          })
                        : Oe(
                              this,
                              function (v) {
                                  var m;
                                  if (f && v === void 0)
                                      return (
                                          (m = Ae.get(f, t)),
                                          m !== void 0 ||
                                          ((m = _s(f, t)), m !== void 0)
                                              ? m
                                              : void 0
                                      );
                                  this.each(function () {
                                      Ae.set(this, t, v);
                                  });
                              },
                              null,
                              r,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (t) {
                    return this.each(function () {
                        Ae.remove(this, t);
                    });
                },
            }),
            u.extend({
                queue: function (t, r, s) {
                    var a;
                    if (t)
                        return (
                            (r = (r || "fx") + "queue"),
                            (a = U.get(t, r)),
                            s &&
                                (!a || Array.isArray(s)
                                    ? (a = U.access(t, r, u.makeArray(s)))
                                    : a.push(s)),
                            a || []
                        );
                },
                dequeue: function (t, r) {
                    r = r || "fx";
                    var s = u.queue(t, r),
                        a = s.length,
                        l = s.shift(),
                        f = u._queueHooks(t, r),
                        d = function () {
                            u.dequeue(t, r);
                        };
                    l === "inprogress" && ((l = s.shift()), a--),
                        l &&
                            (r === "fx" && s.unshift("inprogress"),
                            delete f.stop,
                            l.call(t, d, f)),
                        !a && f && f.empty.fire();
                },
                _queueHooks: function (t, r) {
                    var s = r + "queueHooks";
                    return (
                        U.get(t, s) ||
                        U.access(t, s, {
                            empty: u.Callbacks("once memory").add(function () {
                                U.remove(t, [r + "queue", s]);
                            }),
                        })
                    );
                },
            }),
            u.fn.extend({
                queue: function (t, r) {
                    var s = 2;
                    return (
                        typeof t != "string" && ((r = t), (t = "fx"), s--),
                        arguments.length < s
                            ? u.queue(this[0], t)
                            : r === void 0
                            ? this
                            : this.each(function () {
                                  var a = u.queue(this, t, r);
                                  u._queueHooks(this, t),
                                      t === "fx" &&
                                          a[0] !== "inprogress" &&
                                          u.dequeue(this, t);
                              })
                    );
                },
                dequeue: function (t) {
                    return this.each(function () {
                        u.dequeue(this, t);
                    });
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", []);
                },
                promise: function (t, r) {
                    var s,
                        a = 1,
                        l = u.Deferred(),
                        f = this,
                        d = this.length,
                        v = function () {
                            --a || l.resolveWith(f, [f]);
                        };
                    for (
                        typeof t != "string" && ((r = t), (t = void 0)),
                            t = t || "fx";
                        d--;

                    )
                        (s = U.get(f[d], t + "queueHooks")),
                            s && s.empty && (a++, s.empty.add(v));
                    return v(), l.promise(r);
                },
            });
        var vs = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Mn = new RegExp("^(?:([+-])=|)(" + vs + ")([a-z%]*)$", "i"),
            bt = ["Top", "Right", "Bottom", "Left"],
            Ut = H.documentElement,
            un = function (t) {
                return u.contains(t.ownerDocument, t);
            },
            Tu = { composed: !0 };
        Ut.getRootNode &&
            (un = function (t) {
                return (
                    u.contains(t.ownerDocument, t) ||
                    t.getRootNode(Tu) === t.ownerDocument
                );
            });
        var ur = function (t, r) {
            return (
                (t = r || t),
                t.style.display === "none" ||
                    (t.style.display === "" &&
                        un(t) &&
                        u.css(t, "display") === "none")
            );
        };
        function ys(t, r, s, a) {
            var l,
                f,
                d = 20,
                v = a
                    ? function () {
                          return a.cur();
                      }
                    : function () {
                          return u.css(t, r, "");
                      },
                m = v(),
                b = (s && s[3]) || (u.cssNumber[r] ? "" : "px"),
                O =
                    t.nodeType &&
                    (u.cssNumber[r] || (b !== "px" && +m)) &&
                    Mn.exec(u.css(t, r));
            if (O && O[3] !== b) {
                for (m = m / 2, b = b || O[3], O = +m || 1; d--; )
                    u.style(t, r, O + b),
                        (1 - f) * (1 - (f = v() / m || 0.5)) <= 0 && (d = 0),
                        (O = O / f);
                (O = O * 2), u.style(t, r, O + b), (s = s || []);
            }
            return (
                s &&
                    ((O = +O || +m || 0),
                    (l = s[1] ? O + (s[1] + 1) * s[2] : +s[2]),
                    a && ((a.unit = b), (a.start = O), (a.end = l))),
                l
            );
        }
        var Es = {};
        function wu(t) {
            var r,
                s = t.ownerDocument,
                a = t.nodeName,
                l = Es[a];
            return (
                l ||
                ((r = s.body.appendChild(s.createElement(a))),
                (l = u.css(r, "display")),
                r.parentNode.removeChild(r),
                l === "none" && (l = "block"),
                (Es[a] = l),
                l)
            );
        }
        function cn(t, r) {
            for (var s, a, l = [], f = 0, d = t.length; f < d; f++)
                (a = t[f]),
                    a.style &&
                        ((s = a.style.display),
                        r
                            ? (s === "none" &&
                                  ((l[f] = U.get(a, "display") || null),
                                  l[f] || (a.style.display = "")),
                              a.style.display === "" && ur(a) && (l[f] = wu(a)))
                            : s !== "none" &&
                              ((l[f] = "none"), U.set(a, "display", s)));
            for (f = 0; f < d; f++) l[f] != null && (t[f].style.display = l[f]);
            return t;
        }
        u.fn.extend({
            show: function () {
                return cn(this, !0);
            },
            hide: function () {
                return cn(this);
            },
            toggle: function (t) {
                return typeof t == "boolean"
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          ur(this) ? u(this).show() : u(this).hide();
                      });
            },
        });
        var Hn = /^(?:checkbox|radio)$/i,
            bs = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ts = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var t = H.createDocumentFragment(),
                r = t.appendChild(H.createElement("div")),
                s = H.createElement("input");
            s.setAttribute("type", "radio"),
                s.setAttribute("checked", "checked"),
                s.setAttribute("name", "t"),
                r.appendChild(s),
                (N.checkClone = r
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (r.innerHTML = "<textarea>x</textarea>"),
                (N.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue),
                (r.innerHTML = "<option></option>"),
                (N.option = !!r.lastChild);
        })();
        var Ue = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
        (Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead),
            (Ue.th = Ue.td),
            N.option ||
                (Ue.optgroup = Ue.option =
                    [1, "<select multiple='multiple'>", "</select>"]);
        function Pe(t, r) {
            var s;
            return (
                typeof t.getElementsByTagName < "u"
                    ? (s = t.getElementsByTagName(r || "*"))
                    : typeof t.querySelectorAll < "u"
                    ? (s = t.querySelectorAll(r || "*"))
                    : (s = []),
                r === void 0 || (r && k(t, r)) ? u.merge([t], s) : s
            );
        }
        function Yr(t, r) {
            for (var s = 0, a = t.length; s < a; s++)
                U.set(t[s], "globalEval", !r || U.get(r[s], "globalEval"));
        }
        var Au = /<|&#?\w+;/;
        function ws(t, r, s, a, l) {
            for (
                var f,
                    d,
                    v,
                    m,
                    b,
                    O,
                    R = r.createDocumentFragment(),
                    A = [],
                    M = 0,
                    Z = t.length;
                M < Z;
                M++
            )
                if (((f = t[M]), f || f === 0))
                    if (X(f) === "object") u.merge(A, f.nodeType ? [f] : f);
                    else if (!Au.test(f)) A.push(r.createTextNode(f));
                    else {
                        for (
                            d = d || R.appendChild(r.createElement("div")),
                                v = (bs.exec(f) || ["", ""])[1].toLowerCase(),
                                m = Ue[v] || Ue._default,
                                d.innerHTML = m[1] + u.htmlPrefilter(f) + m[2],
                                O = m[0];
                            O--;

                        )
                            d = d.lastChild;
                        u.merge(A, d.childNodes),
                            (d = R.firstChild),
                            (d.textContent = "");
                    }
            for (R.textContent = "", M = 0; (f = A[M++]); ) {
                if (a && u.inArray(f, a) > -1) {
                    l && l.push(f);
                    continue;
                }
                if (
                    ((b = un(f)),
                    (d = Pe(R.appendChild(f), "script")),
                    b && Yr(d),
                    s)
                )
                    for (O = 0; (f = d[O++]); )
                        Ts.test(f.type || "") && s.push(f);
            }
            return R;
        }
        var As = /^([^.]*)(?:\.(.+)|)/;
        function ln() {
            return !0;
        }
        function fn() {
            return !1;
        }
        function Gr(t, r, s, a, l, f) {
            var d, v;
            if (typeof r == "object") {
                typeof s != "string" && ((a = a || s), (s = void 0));
                for (v in r) Gr(t, v, s, a, r[v], f);
                return t;
            }
            if (
                (a == null && l == null
                    ? ((l = s), (a = s = void 0))
                    : l == null &&
                      (typeof s == "string"
                          ? ((l = a), (a = void 0))
                          : ((l = a), (a = s), (s = void 0))),
                l === !1)
            )
                l = fn;
            else if (!l) return t;
            return (
                f === 1 &&
                    ((d = l),
                    (l = function (m) {
                        return u().off(m), d.apply(this, arguments);
                    }),
                    (l.guid = d.guid || (d.guid = u.guid++))),
                t.each(function () {
                    u.event.add(this, r, l, a, s);
                })
            );
        }
        u.event = {
            global: {},
            add: function (t, r, s, a, l) {
                var f,
                    d,
                    v,
                    m,
                    b,
                    O,
                    R,
                    A,
                    M,
                    Z,
                    fe,
                    ie = U.get(t);
                if (Rt(t))
                    for (
                        s.handler &&
                            ((f = s), (s = f.handler), (l = f.selector)),
                            l && u.find.matchesSelector(Ut, l),
                            s.guid || (s.guid = u.guid++),
                            (m = ie.events) ||
                                (m = ie.events = Object.create(null)),
                            (d = ie.handle) ||
                                (d = ie.handle =
                                    function (Ce) {
                                        return typeof u < "u" &&
                                            u.event.triggered !== Ce.type
                                            ? u.event.dispatch.apply(
                                                  t,
                                                  arguments
                                              )
                                            : void 0;
                                    }),
                            r = (r || "").match(Re) || [""],
                            b = r.length;
                        b--;

                    )
                        (v = As.exec(r[b]) || []),
                            (M = fe = v[1]),
                            (Z = (v[2] || "").split(".").sort()),
                            M &&
                                ((R = u.event.special[M] || {}),
                                (M = (l ? R.delegateType : R.bindType) || M),
                                (R = u.event.special[M] || {}),
                                (O = u.extend(
                                    {
                                        type: M,
                                        origType: fe,
                                        data: a,
                                        handler: s,
                                        guid: s.guid,
                                        selector: l,
                                        needsContext:
                                            l &&
                                            u.expr.match.needsContext.test(l),
                                        namespace: Z.join("."),
                                    },
                                    f
                                )),
                                (A = m[M]) ||
                                    ((A = m[M] = []),
                                    (A.delegateCount = 0),
                                    (!R.setup ||
                                        R.setup.call(t, a, Z, d) === !1) &&
                                        t.addEventListener &&
                                        t.addEventListener(M, d)),
                                R.add &&
                                    (R.add.call(t, O),
                                    O.handler.guid ||
                                        (O.handler.guid = s.guid)),
                                l
                                    ? A.splice(A.delegateCount++, 0, O)
                                    : A.push(O),
                                (u.event.global[M] = !0));
            },
            remove: function (t, r, s, a, l) {
                var f,
                    d,
                    v,
                    m,
                    b,
                    O,
                    R,
                    A,
                    M,
                    Z,
                    fe,
                    ie = U.hasData(t) && U.get(t);
                if (!(!ie || !(m = ie.events))) {
                    for (r = (r || "").match(Re) || [""], b = r.length; b--; ) {
                        if (
                            ((v = As.exec(r[b]) || []),
                            (M = fe = v[1]),
                            (Z = (v[2] || "").split(".").sort()),
                            !M)
                        ) {
                            for (M in m) u.event.remove(t, M + r[b], s, a, !0);
                            continue;
                        }
                        for (
                            R = u.event.special[M] || {},
                                M = (a ? R.delegateType : R.bindType) || M,
                                A = m[M] || [],
                                v =
                                    v[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            Z.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                d = f = A.length;
                            f--;

                        )
                            (O = A[f]),
                                (l || fe === O.origType) &&
                                    (!s || s.guid === O.guid) &&
                                    (!v || v.test(O.namespace)) &&
                                    (!a ||
                                        a === O.selector ||
                                        (a === "**" && O.selector)) &&
                                    (A.splice(f, 1),
                                    O.selector && A.delegateCount--,
                                    R.remove && R.remove.call(t, O));
                        d &&
                            !A.length &&
                            ((!R.teardown ||
                                R.teardown.call(t, Z, ie.handle) === !1) &&
                                u.removeEvent(t, M, ie.handle),
                            delete m[M]);
                    }
                    u.isEmptyObject(m) && U.remove(t, "handle events");
                }
            },
            dispatch: function (t) {
                var r,
                    s,
                    a,
                    l,
                    f,
                    d,
                    v = new Array(arguments.length),
                    m = u.event.fix(t),
                    b =
                        (U.get(this, "events") || Object.create(null))[
                            m.type
                        ] || [],
                    O = u.event.special[m.type] || {};
                for (v[0] = m, r = 1; r < arguments.length; r++)
                    v[r] = arguments[r];
                if (
                    ((m.delegateTarget = this),
                    !(O.preDispatch && O.preDispatch.call(this, m) === !1))
                ) {
                    for (
                        d = u.event.handlers.call(this, m, b), r = 0;
                        (l = d[r++]) && !m.isPropagationStopped();

                    )
                        for (
                            m.currentTarget = l.elem, s = 0;
                            (f = l.handlers[s++]) &&
                            !m.isImmediatePropagationStopped();

                        )
                            (!m.rnamespace ||
                                f.namespace === !1 ||
                                m.rnamespace.test(f.namespace)) &&
                                ((m.handleObj = f),
                                (m.data = f.data),
                                (a = (
                                    (u.event.special[f.origType] || {})
                                        .handle || f.handler
                                ).apply(l.elem, v)),
                                a !== void 0 &&
                                    (m.result = a) === !1 &&
                                    (m.preventDefault(), m.stopPropagation()));
                    return (
                        O.postDispatch && O.postDispatch.call(this, m), m.result
                    );
                }
            },
            handlers: function (t, r) {
                var s,
                    a,
                    l,
                    f,
                    d,
                    v = [],
                    m = r.delegateCount,
                    b = t.target;
                if (m && b.nodeType && !(t.type === "click" && t.button >= 1)) {
                    for (; b !== this; b = b.parentNode || this)
                        if (
                            b.nodeType === 1 &&
                            !(t.type === "click" && b.disabled === !0)
                        ) {
                            for (f = [], d = {}, s = 0; s < m; s++)
                                (a = r[s]),
                                    (l = a.selector + " "),
                                    d[l] === void 0 &&
                                        (d[l] = a.needsContext
                                            ? u(l, this).index(b) > -1
                                            : u.find(l, this, null, [b])
                                                  .length),
                                    d[l] && f.push(a);
                            f.length && v.push({ elem: b, handlers: f });
                        }
                }
                return (
                    (b = this),
                    m < r.length && v.push({ elem: b, handlers: r.slice(m) }),
                    v
                );
            },
            addProp: function (t, r) {
                Object.defineProperty(u.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: D(r)
                        ? function () {
                              if (this.originalEvent)
                                  return r(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent)
                                  return this.originalEvent[t];
                          },
                    set: function (s) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: s,
                        });
                    },
                });
            },
            fix: function (t) {
                return t[u.expando] ? t : new u.Event(t);
            },
            special: {
                load: { noBubble: !0 },
                click: {
                    setup: function (t) {
                        var r = this || t;
                        return (
                            Hn.test(r.type) &&
                                r.click &&
                                k(r, "input") &&
                                cr(r, "click", !0),
                            !1
                        );
                    },
                    trigger: function (t) {
                        var r = this || t;
                        return (
                            Hn.test(r.type) &&
                                r.click &&
                                k(r, "input") &&
                                cr(r, "click"),
                            !0
                        );
                    },
                    _default: function (t) {
                        var r = t.target;
                        return (
                            (Hn.test(r.type) &&
                                r.click &&
                                k(r, "input") &&
                                U.get(r, "click")) ||
                            k(r, "a")
                        );
                    },
                },
                beforeunload: {
                    postDispatch: function (t) {
                        t.result !== void 0 &&
                            t.originalEvent &&
                            (t.originalEvent.returnValue = t.result);
                    },
                },
            },
        };
        function cr(t, r, s) {
            if (!s) {
                U.get(t, r) === void 0 && u.event.add(t, r, ln);
                return;
            }
            U.set(t, r, !1),
                u.event.add(t, r, {
                    namespace: !1,
                    handler: function (a) {
                        var l,
                            f = U.get(this, r);
                        if (a.isTrigger & 1 && this[r]) {
                            if (f)
                                (u.event.special[r] || {}).delegateType &&
                                    a.stopPropagation();
                            else if (
                                ((f = h.call(arguments)),
                                U.set(this, r, f),
                                this[r](),
                                (l = U.get(this, r)),
                                U.set(this, r, !1),
                                f !== l)
                            )
                                return (
                                    a.stopImmediatePropagation(),
                                    a.preventDefault(),
                                    l
                                );
                        } else
                            f &&
                                (U.set(
                                    this,
                                    r,
                                    u.event.trigger(f[0], f.slice(1), this)
                                ),
                                a.stopPropagation(),
                                (a.isImmediatePropagationStopped = ln));
                    },
                });
        }
        (u.removeEvent = function (t, r, s) {
            t.removeEventListener && t.removeEventListener(r, s);
        }),
            (u.Event = function (t, r) {
                if (!(this instanceof u.Event)) return new u.Event(t, r);
                t && t.type
                    ? ((this.originalEvent = t),
                      (this.type = t.type),
                      (this.isDefaultPrevented =
                          t.defaultPrevented ||
                          (t.defaultPrevented === void 0 &&
                              t.returnValue === !1)
                              ? ln
                              : fn),
                      (this.target =
                          t.target && t.target.nodeType === 3
                              ? t.target.parentNode
                              : t.target),
                      (this.currentTarget = t.currentTarget),
                      (this.relatedTarget = t.relatedTarget))
                    : (this.type = t),
                    r && u.extend(this, r),
                    (this.timeStamp = (t && t.timeStamp) || Date.now()),
                    (this[u.expando] = !0);
            }),
            (u.Event.prototype = {
                constructor: u.Event,
                isDefaultPrevented: fn,
                isPropagationStopped: fn,
                isImmediatePropagationStopped: fn,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    (this.isDefaultPrevented = ln),
                        t && !this.isSimulated && t.preventDefault();
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    (this.isPropagationStopped = ln),
                        t && !this.isSimulated && t.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    (this.isImmediatePropagationStopped = ln),
                        t && !this.isSimulated && t.stopImmediatePropagation(),
                        this.stopPropagation();
                },
            }),
            u.each(
                {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0,
                },
                u.event.addProp
            ),
            u.each({ focus: "focusin", blur: "focusout" }, function (t, r) {
                function s(a) {
                    if (H.documentMode) {
                        var l = U.get(this, "handle"),
                            f = u.event.fix(a);
                        (f.type = a.type === "focusin" ? "focus" : "blur"),
                            (f.isSimulated = !0),
                            l(a),
                            f.target === f.currentTarget && l(f);
                    } else u.event.simulate(r, a.target, u.event.fix(a));
                }
                (u.event.special[t] = {
                    setup: function () {
                        var a;
                        if ((cr(this, t, !0), H.documentMode))
                            (a = U.get(this, r)),
                                a || this.addEventListener(r, s),
                                U.set(this, r, (a || 0) + 1);
                        else return !1;
                    },
                    trigger: function () {
                        return cr(this, t), !0;
                    },
                    teardown: function () {
                        var a;
                        if (H.documentMode)
                            (a = U.get(this, r) - 1),
                                a
                                    ? U.set(this, r, a)
                                    : (this.removeEventListener(r, s),
                                      U.remove(this, r));
                        else return !1;
                    },
                    _default: function (a) {
                        return U.get(a.target, t);
                    },
                    delegateType: r,
                }),
                    (u.event.special[r] = {
                        setup: function () {
                            var a = this.ownerDocument || this.document || this,
                                l = H.documentMode ? this : a,
                                f = U.get(l, r);
                            f ||
                                (H.documentMode
                                    ? this.addEventListener(r, s)
                                    : a.addEventListener(t, s, !0)),
                                U.set(l, r, (f || 0) + 1);
                        },
                        teardown: function () {
                            var a = this.ownerDocument || this.document || this,
                                l = H.documentMode ? this : a,
                                f = U.get(l, r) - 1;
                            f
                                ? U.set(l, r, f)
                                : (H.documentMode
                                      ? this.removeEventListener(r, s)
                                      : a.removeEventListener(t, s, !0),
                                  U.remove(l, r));
                        },
                    });
            }),
            u.each(
                {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                },
                function (t, r) {
                    u.event.special[t] = {
                        delegateType: r,
                        bindType: r,
                        handle: function (s) {
                            var a,
                                l = this,
                                f = s.relatedTarget,
                                d = s.handleObj;
                            return (
                                (!f || (f !== l && !u.contains(l, f))) &&
                                    ((s.type = d.origType),
                                    (a = d.handler.apply(this, arguments)),
                                    (s.type = r)),
                                a
                            );
                        },
                    };
                }
            ),
            u.fn.extend({
                on: function (t, r, s, a) {
                    return Gr(this, t, r, s, a);
                },
                one: function (t, r, s, a) {
                    return Gr(this, t, r, s, a, 1);
                },
                off: function (t, r, s) {
                    var a, l;
                    if (t && t.preventDefault && t.handleObj)
                        return (
                            (a = t.handleObj),
                            u(t.delegateTarget).off(
                                a.namespace
                                    ? a.origType + "." + a.namespace
                                    : a.origType,
                                a.selector,
                                a.handler
                            ),
                            this
                        );
                    if (typeof t == "object") {
                        for (l in t) this.off(l, r, t[l]);
                        return this;
                    }
                    return (
                        (r === !1 || typeof r == "function") &&
                            ((s = r), (r = void 0)),
                        s === !1 && (s = fn),
                        this.each(function () {
                            u.event.remove(this, t, s, r);
                        })
                    );
                },
            });
        var Cu = /<script|<style|<link/i,
            Su = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ou = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Cs(t, r) {
            return (
                (k(t, "table") &&
                    k(r.nodeType !== 11 ? r : r.firstChild, "tr") &&
                    u(t).children("tbody")[0]) ||
                t
            );
        }
        function xu(t) {
            return (
                (t.type = (t.getAttribute("type") !== null) + "/" + t.type), t
            );
        }
        function Nu(t) {
            return (
                (t.type || "").slice(0, 5) === "true/"
                    ? (t.type = t.type.slice(5))
                    : t.removeAttribute("type"),
                t
            );
        }
        function Ss(t, r) {
            var s, a, l, f, d, v, m;
            if (r.nodeType === 1) {
                if (U.hasData(t) && ((f = U.get(t)), (m = f.events), m)) {
                    U.remove(r, "handle events");
                    for (l in m)
                        for (s = 0, a = m[l].length; s < a; s++)
                            u.event.add(r, l, m[l][s]);
                }
                Ae.hasData(t) &&
                    ((d = Ae.access(t)), (v = u.extend({}, d)), Ae.set(r, v));
            }
        }
        function Du(t, r) {
            var s = r.nodeName.toLowerCase();
            s === "input" && Hn.test(t.type)
                ? (r.checked = t.checked)
                : (s === "input" || s === "textarea") &&
                  (r.defaultValue = t.defaultValue);
        }
        function dn(t, r, s, a) {
            r = p(r);
            var l,
                f,
                d,
                v,
                m,
                b,
                O = 0,
                R = t.length,
                A = R - 1,
                M = r[0],
                Z = D(M);
            if (
                Z ||
                (R > 1 && typeof M == "string" && !N.checkClone && Su.test(M))
            )
                return t.each(function (fe) {
                    var ie = t.eq(fe);
                    Z && (r[0] = M.call(this, fe, ie.html())), dn(ie, r, s, a);
                });
            if (
                R &&
                ((l = ws(r, t[0].ownerDocument, !1, t, a)),
                (f = l.firstChild),
                l.childNodes.length === 1 && (l = f),
                f || a)
            ) {
                for (d = u.map(Pe(l, "script"), xu), v = d.length; O < R; O++)
                    (m = l),
                        O !== A &&
                            ((m = u.clone(m, !0, !0)),
                            v && u.merge(d, Pe(m, "script"))),
                        s.call(t[O], m, O);
                if (v)
                    for (
                        b = d[d.length - 1].ownerDocument, u.map(d, Nu), O = 0;
                        O < v;
                        O++
                    )
                        (m = d[O]),
                            Ts.test(m.type || "") &&
                                !U.access(m, "globalEval") &&
                                u.contains(b, m) &&
                                (m.src &&
                                (m.type || "").toLowerCase() !== "module"
                                    ? u._evalUrl &&
                                      !m.noModule &&
                                      u._evalUrl(
                                          m.src,
                                          {
                                              nonce:
                                                  m.nonce ||
                                                  m.getAttribute("nonce"),
                                          },
                                          b
                                      )
                                    : J(m.textContent.replace(Ou, ""), m, b));
            }
            return t;
        }
        function Os(t, r, s) {
            for (
                var a, l = r ? u.filter(r, t) : t, f = 0;
                (a = l[f]) != null;
                f++
            )
                !s && a.nodeType === 1 && u.cleanData(Pe(a)),
                    a.parentNode &&
                        (s && un(a) && Yr(Pe(a, "script")),
                        a.parentNode.removeChild(a));
            return t;
        }
        u.extend({
            htmlPrefilter: function (t) {
                return t;
            },
            clone: function (t, r, s) {
                var a,
                    l,
                    f,
                    d,
                    v = t.cloneNode(!0),
                    m = un(t);
                if (
                    !N.noCloneChecked &&
                    (t.nodeType === 1 || t.nodeType === 11) &&
                    !u.isXMLDoc(t)
                )
                    for (d = Pe(v), f = Pe(t), a = 0, l = f.length; a < l; a++)
                        Du(f[a], d[a]);
                if (r)
                    if (s)
                        for (
                            f = f || Pe(t), d = d || Pe(v), a = 0, l = f.length;
                            a < l;
                            a++
                        )
                            Ss(f[a], d[a]);
                    else Ss(t, v);
                return (
                    (d = Pe(v, "script")),
                    d.length > 0 && Yr(d, !m && Pe(t, "script")),
                    v
                );
            },
            cleanData: function (t) {
                for (
                    var r, s, a, l = u.event.special, f = 0;
                    (s = t[f]) !== void 0;
                    f++
                )
                    if (Rt(s)) {
                        if ((r = s[U.expando])) {
                            if (r.events)
                                for (a in r.events)
                                    l[a]
                                        ? u.event.remove(s, a)
                                        : u.removeEvent(s, a, r.handle);
                            s[U.expando] = void 0;
                        }
                        s[Ae.expando] && (s[Ae.expando] = void 0);
                    }
            },
        }),
            u.fn.extend({
                detach: function (t) {
                    return Os(this, t, !0);
                },
                remove: function (t) {
                    return Os(this, t);
                },
                text: function (t) {
                    return Oe(
                        this,
                        function (r) {
                            return r === void 0
                                ? u.text(this)
                                : this.empty().each(function () {
                                      (this.nodeType === 1 ||
                                          this.nodeType === 11 ||
                                          this.nodeType === 9) &&
                                          (this.textContent = r);
                                  });
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                append: function () {
                    return dn(this, arguments, function (t) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var r = Cs(this, t);
                            r.appendChild(t);
                        }
                    });
                },
                prepend: function () {
                    return dn(this, arguments, function (t) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var r = Cs(this, t);
                            r.insertBefore(t, r.firstChild);
                        }
                    });
                },
                before: function () {
                    return dn(this, arguments, function (t) {
                        this.parentNode &&
                            this.parentNode.insertBefore(t, this);
                    });
                },
                after: function () {
                    return dn(this, arguments, function (t) {
                        this.parentNode &&
                            this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var t, r = 0; (t = this[r]) != null; r++)
                        t.nodeType === 1 &&
                            (u.cleanData(Pe(t, !1)), (t.textContent = ""));
                    return this;
                },
                clone: function (t, r) {
                    return (
                        (t = t ?? !1),
                        (r = r ?? t),
                        this.map(function () {
                            return u.clone(this, t, r);
                        })
                    );
                },
                html: function (t) {
                    return Oe(
                        this,
                        function (r) {
                            var s = this[0] || {},
                                a = 0,
                                l = this.length;
                            if (r === void 0 && s.nodeType === 1)
                                return s.innerHTML;
                            if (
                                typeof r == "string" &&
                                !Cu.test(r) &&
                                !Ue[(bs.exec(r) || ["", ""])[1].toLowerCase()]
                            ) {
                                r = u.htmlPrefilter(r);
                                try {
                                    for (; a < l; a++)
                                        (s = this[a] || {}),
                                            s.nodeType === 1 &&
                                                (u.cleanData(Pe(s, !1)),
                                                (s.innerHTML = r));
                                    s = 0;
                                } catch {}
                            }
                            s && this.empty().append(r);
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var t = [];
                    return dn(
                        this,
                        arguments,
                        function (r) {
                            var s = this.parentNode;
                            u.inArray(this, t) < 0 &&
                                (u.cleanData(Pe(this)),
                                s && s.replaceChild(r, this));
                        },
                        t
                    );
                },
            }),
            u.each(
                {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function (t, r) {
                    u.fn[t] = function (s) {
                        for (
                            var a, l = [], f = u(s), d = f.length - 1, v = 0;
                            v <= d;
                            v++
                        )
                            (a = v === d ? this : this.clone(!0)),
                                u(f[v])[r](a),
                                _.apply(l, a.get());
                        return this.pushStack(l);
                    };
                }
            );
        var Xr = new RegExp("^(" + vs + ")(?!px)[a-z%]+$", "i"),
            Jr = /^--/,
            lr = function (t) {
                var r = t.ownerDocument.defaultView;
                return (!r || !r.opener) && (r = e), r.getComputedStyle(t);
            },
            xs = function (t, r, s) {
                var a,
                    l,
                    f = {};
                for (l in r) (f[l] = t.style[l]), (t.style[l] = r[l]);
                a = s.call(t);
                for (l in r) t.style[l] = f[l];
                return a;
            },
            Lu = new RegExp(bt.join("|"), "i");
        (function () {
            function t() {
                if (b) {
                    (m.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (b.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        Ut.appendChild(m).appendChild(b);
                    var O = e.getComputedStyle(b);
                    (s = O.top !== "1%"),
                        (v = r(O.marginLeft) === 12),
                        (b.style.right = "60%"),
                        (f = r(O.right) === 36),
                        (a = r(O.width) === 36),
                        (b.style.position = "absolute"),
                        (l = r(b.offsetWidth / 3) === 12),
                        Ut.removeChild(m),
                        (b = null);
                }
            }
            function r(O) {
                return Math.round(parseFloat(O));
            }
            var s,
                a,
                l,
                f,
                d,
                v,
                m = H.createElement("div"),
                b = H.createElement("div");
            b.style &&
                ((b.style.backgroundClip = "content-box"),
                (b.cloneNode(!0).style.backgroundClip = ""),
                (N.clearCloneStyle = b.style.backgroundClip === "content-box"),
                u.extend(N, {
                    boxSizingReliable: function () {
                        return t(), a;
                    },
                    pixelBoxStyles: function () {
                        return t(), f;
                    },
                    pixelPosition: function () {
                        return t(), s;
                    },
                    reliableMarginLeft: function () {
                        return t(), v;
                    },
                    scrollboxSize: function () {
                        return t(), l;
                    },
                    reliableTrDimensions: function () {
                        var O, R, A, M;
                        return (
                            d == null &&
                                ((O = H.createElement("table")),
                                (R = H.createElement("tr")),
                                (A = H.createElement("div")),
                                (O.style.cssText =
                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                (R.style.cssText =
                                    "box-sizing:content-box;border:1px solid"),
                                (R.style.height = "1px"),
                                (A.style.height = "9px"),
                                (A.style.display = "block"),
                                Ut.appendChild(O).appendChild(R).appendChild(A),
                                (M = e.getComputedStyle(R)),
                                (d =
                                    parseInt(M.height, 10) +
                                        parseInt(M.borderTopWidth, 10) +
                                        parseInt(M.borderBottomWidth, 10) ===
                                    R.offsetHeight),
                                Ut.removeChild(O)),
                            d
                        );
                    },
                }));
        })();
        function jn(t, r, s) {
            var a,
                l,
                f,
                d,
                v = Jr.test(r),
                m = t.style;
            return (
                (s = s || lr(t)),
                s &&
                    ((d = s.getPropertyValue(r) || s[r]),
                    v && d && (d = d.replace(Se, "$1") || void 0),
                    d === "" && !un(t) && (d = u.style(t, r)),
                    !N.pixelBoxStyles() &&
                        Xr.test(d) &&
                        Lu.test(r) &&
                        ((a = m.width),
                        (l = m.minWidth),
                        (f = m.maxWidth),
                        (m.minWidth = m.maxWidth = m.width = d),
                        (d = s.width),
                        (m.width = a),
                        (m.minWidth = l),
                        (m.maxWidth = f))),
                d !== void 0 ? d + "" : d
            );
        }
        function Ns(t, r) {
            return {
                get: function () {
                    if (t()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = r).apply(this, arguments);
                },
            };
        }
        var Ds = ["Webkit", "Moz", "ms"],
            Ls = H.createElement("div").style,
            Rs = {};
        function Ru(t) {
            for (var r = t[0].toUpperCase() + t.slice(1), s = Ds.length; s--; )
                if (((t = Ds[s] + r), t in Ls)) return t;
        }
        function Qr(t) {
            var r = u.cssProps[t] || Rs[t];
            return r || (t in Ls ? t : (Rs[t] = Ru(t) || t));
        }
        var Pu = /^(none|table(?!-c[ea]).+)/,
            Iu = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
            },
            Ps = { letterSpacing: "0", fontWeight: "400" };
        function Is(t, r, s) {
            var a = Mn.exec(r);
            return a ? Math.max(0, a[2] - (s || 0)) + (a[3] || "px") : r;
        }
        function Zr(t, r, s, a, l, f) {
            var d = r === "width" ? 1 : 0,
                v = 0,
                m = 0,
                b = 0;
            if (s === (a ? "border" : "content")) return 0;
            for (; d < 4; d += 2)
                s === "margin" && (b += u.css(t, s + bt[d], !0, l)),
                    a
                        ? (s === "content" &&
                              (m -= u.css(t, "padding" + bt[d], !0, l)),
                          s !== "margin" &&
                              (m -= u.css(
                                  t,
                                  "border" + bt[d] + "Width",
                                  !0,
                                  l
                              )))
                        : ((m += u.css(t, "padding" + bt[d], !0, l)),
                          s !== "padding"
                              ? (m += u.css(
                                    t,
                                    "border" + bt[d] + "Width",
                                    !0,
                                    l
                                ))
                              : (v += u.css(
                                    t,
                                    "border" + bt[d] + "Width",
                                    !0,
                                    l
                                )));
            return (
                !a &&
                    f >= 0 &&
                    (m +=
                        Math.max(
                            0,
                            Math.ceil(
                                t["offset" + r[0].toUpperCase() + r.slice(1)] -
                                    f -
                                    m -
                                    v -
                                    0.5
                            )
                        ) || 0),
                m + b
            );
        }
        function ks(t, r, s) {
            var a = lr(t),
                l = !N.boxSizingReliable() || s,
                f = l && u.css(t, "boxSizing", !1, a) === "border-box",
                d = f,
                v = jn(t, r, a),
                m = "offset" + r[0].toUpperCase() + r.slice(1);
            if (Xr.test(v)) {
                if (!s) return v;
                v = "auto";
            }
            return (
                ((!N.boxSizingReliable() && f) ||
                    (!N.reliableTrDimensions() && k(t, "tr")) ||
                    v === "auto" ||
                    (!parseFloat(v) &&
                        u.css(t, "display", !1, a) === "inline")) &&
                    t.getClientRects().length &&
                    ((f = u.css(t, "boxSizing", !1, a) === "border-box"),
                    (d = m in t),
                    d && (v = t[m])),
                (v = parseFloat(v) || 0),
                v + Zr(t, r, s || (f ? "border" : "content"), d, a, v) + "px"
            );
        }
        u.extend({
            cssHooks: {
                opacity: {
                    get: function (t, r) {
                        if (r) {
                            var s = jn(t, "opacity");
                            return s === "" ? "1" : s;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
            },
            cssProps: {},
            style: function (t, r, s, a) {
                if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
                    var l,
                        f,
                        d,
                        v = je(r),
                        m = Jr.test(r),
                        b = t.style;
                    if (
                        (m || (r = Qr(v)),
                        (d = u.cssHooks[r] || u.cssHooks[v]),
                        s !== void 0)
                    ) {
                        if (
                            ((f = typeof s),
                            f === "string" &&
                                (l = Mn.exec(s)) &&
                                l[1] &&
                                ((s = ys(t, r, l)), (f = "number")),
                            s == null || s !== s)
                        )
                            return;
                        f === "number" &&
                            !m &&
                            (s += (l && l[3]) || (u.cssNumber[v] ? "" : "px")),
                            !N.clearCloneStyle &&
                                s === "" &&
                                r.indexOf("background") === 0 &&
                                (b[r] = "inherit"),
                            (!d ||
                                !("set" in d) ||
                                (s = d.set(t, s, a)) !== void 0) &&
                                (m ? b.setProperty(r, s) : (b[r] = s));
                    } else
                        return d &&
                            "get" in d &&
                            (l = d.get(t, !1, a)) !== void 0
                            ? l
                            : b[r];
                }
            },
            css: function (t, r, s, a) {
                var l,
                    f,
                    d,
                    v = je(r),
                    m = Jr.test(r);
                return (
                    m || (r = Qr(v)),
                    (d = u.cssHooks[r] || u.cssHooks[v]),
                    d && "get" in d && (l = d.get(t, !0, s)),
                    l === void 0 && (l = jn(t, r, a)),
                    l === "normal" && r in Ps && (l = Ps[r]),
                    s === "" || s
                        ? ((f = parseFloat(l)),
                          s === !0 || isFinite(f) ? f || 0 : l)
                        : l
                );
            },
        }),
            u.each(["height", "width"], function (t, r) {
                u.cssHooks[r] = {
                    get: function (s, a, l) {
                        if (a)
                            return Pu.test(u.css(s, "display")) &&
                                (!s.getClientRects().length ||
                                    !s.getBoundingClientRect().width)
                                ? xs(s, Iu, function () {
                                      return ks(s, r, l);
                                  })
                                : ks(s, r, l);
                    },
                    set: function (s, a, l) {
                        var f,
                            d = lr(s),
                            v = !N.scrollboxSize() && d.position === "absolute",
                            m = v || l,
                            b =
                                m &&
                                u.css(s, "boxSizing", !1, d) === "border-box",
                            O = l ? Zr(s, r, l, b, d) : 0;
                        return (
                            b &&
                                v &&
                                (O -= Math.ceil(
                                    s[
                                        "offset" +
                                            r[0].toUpperCase() +
                                            r.slice(1)
                                    ] -
                                        parseFloat(d[r]) -
                                        Zr(s, r, "border", !1, d) -
                                        0.5
                                )),
                            O &&
                                (f = Mn.exec(a)) &&
                                (f[3] || "px") !== "px" &&
                                ((s.style[r] = a), (a = u.css(s, r))),
                            Is(s, a, O)
                        );
                    },
                };
            }),
            (u.cssHooks.marginLeft = Ns(N.reliableMarginLeft, function (t, r) {
                if (r)
                    return (
                        (parseFloat(jn(t, "marginLeft")) ||
                            t.getBoundingClientRect().left -
                                xs(t, { marginLeft: 0 }, function () {
                                    return t.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            u.each(
                { margin: "", padding: "", border: "Width" },
                function (t, r) {
                    (u.cssHooks[t + r] = {
                        expand: function (s) {
                            for (
                                var a = 0,
                                    l = {},
                                    f =
                                        typeof s == "string"
                                            ? s.split(" ")
                                            : [s];
                                a < 4;
                                a++
                            )
                                l[t + bt[a] + r] = f[a] || f[a - 2] || f[0];
                            return l;
                        },
                    }),
                        t !== "margin" && (u.cssHooks[t + r].set = Is);
                }
            ),
            u.fn.extend({
                css: function (t, r) {
                    return Oe(
                        this,
                        function (s, a, l) {
                            var f,
                                d,
                                v = {},
                                m = 0;
                            if (Array.isArray(a)) {
                                for (f = lr(s), d = a.length; m < d; m++)
                                    v[a[m]] = u.css(s, a[m], !1, f);
                                return v;
                            }
                            return l !== void 0
                                ? u.style(s, a, l)
                                : u.css(s, a);
                        },
                        t,
                        r,
                        arguments.length > 1
                    );
                },
            });
        function Ie(t, r, s, a, l) {
            return new Ie.prototype.init(t, r, s, a, l);
        }
        (u.Tween = Ie),
            (Ie.prototype = {
                constructor: Ie,
                init: function (t, r, s, a, l, f) {
                    (this.elem = t),
                        (this.prop = s),
                        (this.easing = l || u.easing._default),
                        (this.options = r),
                        (this.start = this.now = this.cur()),
                        (this.end = a),
                        (this.unit = f || (u.cssNumber[s] ? "" : "px"));
                },
                cur: function () {
                    var t = Ie.propHooks[this.prop];
                    return t && t.get
                        ? t.get(this)
                        : Ie.propHooks._default.get(this);
                },
                run: function (t) {
                    var r,
                        s = Ie.propHooks[this.prop];
                    return (
                        this.options.duration
                            ? (this.pos = r =
                                  u.easing[this.easing](
                                      t,
                                      this.options.duration * t,
                                      0,
                                      1,
                                      this.options.duration
                                  ))
                            : (this.pos = r = t),
                        (this.now = (this.end - this.start) * r + this.start),
                        this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                        s && s.set
                            ? s.set(this)
                            : Ie.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (Ie.prototype.init.prototype = Ie.prototype),
            (Ie.propHooks = {
                _default: {
                    get: function (t) {
                        var r;
                        return t.elem.nodeType !== 1 ||
                            (t.elem[t.prop] != null &&
                                t.elem.style[t.prop] == null)
                            ? t.elem[t.prop]
                            : ((r = u.css(t.elem, t.prop, "")),
                              !r || r === "auto" ? 0 : r);
                    },
                    set: function (t) {
                        u.fx.step[t.prop]
                            ? u.fx.step[t.prop](t)
                            : t.elem.nodeType === 1 &&
                              (u.cssHooks[t.prop] ||
                                  t.elem.style[Qr(t.prop)] != null)
                            ? u.style(t.elem, t.prop, t.now + t.unit)
                            : (t.elem[t.prop] = t.now);
                    },
                },
            }),
            (Ie.propHooks.scrollTop = Ie.propHooks.scrollLeft =
                {
                    set: function (t) {
                        t.elem.nodeType &&
                            t.elem.parentNode &&
                            (t.elem[t.prop] = t.now);
                    },
                }),
            (u.easing = {
                linear: function (t) {
                    return t;
                },
                swing: function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (u.fx = Ie.prototype.init),
            (u.fx.step = {});
        var hn,
            fr,
            ku = /^(?:toggle|show|hide)$/,
            $u = /queueHooks$/;
        function ei() {
            fr &&
                (H.hidden === !1 && e.requestAnimationFrame
                    ? e.requestAnimationFrame(ei)
                    : e.setTimeout(ei, u.fx.interval),
                u.fx.tick());
        }
        function $s() {
            return (
                e.setTimeout(function () {
                    hn = void 0;
                }),
                (hn = Date.now())
            );
        }
        function dr(t, r) {
            var s,
                a = 0,
                l = { height: t };
            for (r = r ? 1 : 0; a < 4; a += 2 - r)
                (s = bt[a]), (l["margin" + s] = l["padding" + s] = t);
            return r && (l.opacity = l.width = t), l;
        }
        function Ms(t, r, s) {
            for (
                var a,
                    l = (nt.tweeners[r] || []).concat(nt.tweeners["*"]),
                    f = 0,
                    d = l.length;
                f < d;
                f++
            )
                if ((a = l[f].call(s, r, t))) return a;
        }
        function Mu(t, r, s) {
            var a,
                l,
                f,
                d,
                v,
                m,
                b,
                O,
                R = "width" in r || "height" in r,
                A = this,
                M = {},
                Z = t.style,
                fe = t.nodeType && ur(t),
                ie = U.get(t, "fxshow");
            s.queue ||
                ((d = u._queueHooks(t, "fx")),
                d.unqueued == null &&
                    ((d.unqueued = 0),
                    (v = d.empty.fire),
                    (d.empty.fire = function () {
                        d.unqueued || v();
                    })),
                d.unqueued++,
                A.always(function () {
                    A.always(function () {
                        d.unqueued--, u.queue(t, "fx").length || d.empty.fire();
                    });
                }));
            for (a in r)
                if (((l = r[a]), ku.test(l))) {
                    if (
                        (delete r[a],
                        (f = f || l === "toggle"),
                        l === (fe ? "hide" : "show"))
                    )
                        if (l === "show" && ie && ie[a] !== void 0) fe = !0;
                        else continue;
                    M[a] = (ie && ie[a]) || u.style(t, a);
                }
            if (((m = !u.isEmptyObject(r)), !(!m && u.isEmptyObject(M)))) {
                R &&
                    t.nodeType === 1 &&
                    ((s.overflow = [Z.overflow, Z.overflowX, Z.overflowY]),
                    (b = ie && ie.display),
                    b == null && (b = U.get(t, "display")),
                    (O = u.css(t, "display")),
                    O === "none" &&
                        (b
                            ? (O = b)
                            : (cn([t], !0),
                              (b = t.style.display || b),
                              (O = u.css(t, "display")),
                              cn([t]))),
                    (O === "inline" || (O === "inline-block" && b != null)) &&
                        u.css(t, "float") === "none" &&
                        (m ||
                            (A.done(function () {
                                Z.display = b;
                            }),
                            b == null &&
                                ((O = Z.display), (b = O === "none" ? "" : O))),
                        (Z.display = "inline-block"))),
                    s.overflow &&
                        ((Z.overflow = "hidden"),
                        A.always(function () {
                            (Z.overflow = s.overflow[0]),
                                (Z.overflowX = s.overflow[1]),
                                (Z.overflowY = s.overflow[2]);
                        })),
                    (m = !1);
                for (a in M)
                    m ||
                        (ie
                            ? "hidden" in ie && (fe = ie.hidden)
                            : (ie = U.access(t, "fxshow", { display: b })),
                        f && (ie.hidden = !fe),
                        fe && cn([t], !0),
                        A.done(function () {
                            fe || cn([t]), U.remove(t, "fxshow");
                            for (a in M) u.style(t, a, M[a]);
                        })),
                        (m = Ms(fe ? ie[a] : 0, a, A)),
                        a in ie ||
                            ((ie[a] = m.start),
                            fe && ((m.end = m.start), (m.start = 0)));
            }
        }
        function Hu(t, r) {
            var s, a, l, f, d;
            for (s in t)
                if (
                    ((a = je(s)),
                    (l = r[a]),
                    (f = t[s]),
                    Array.isArray(f) && ((l = f[1]), (f = t[s] = f[0])),
                    s !== a && ((t[a] = f), delete t[s]),
                    (d = u.cssHooks[a]),
                    d && "expand" in d)
                ) {
                    (f = d.expand(f)), delete t[a];
                    for (s in f) s in t || ((t[s] = f[s]), (r[s] = l));
                } else r[a] = l;
        }
        function nt(t, r, s) {
            var a,
                l,
                f = 0,
                d = nt.prefilters.length,
                v = u.Deferred().always(function () {
                    delete m.elem;
                }),
                m = function () {
                    if (l) return !1;
                    for (
                        var R = hn || $s(),
                            A = Math.max(0, b.startTime + b.duration - R),
                            M = A / b.duration || 0,
                            Z = 1 - M,
                            fe = 0,
                            ie = b.tweens.length;
                        fe < ie;
                        fe++
                    )
                        b.tweens[fe].run(Z);
                    return (
                        v.notifyWith(t, [b, Z, A]),
                        Z < 1 && ie
                            ? A
                            : (ie || v.notifyWith(t, [b, 1, 0]),
                              v.resolveWith(t, [b]),
                              !1)
                    );
                },
                b = v.promise({
                    elem: t,
                    props: u.extend({}, r),
                    opts: u.extend(
                        !0,
                        { specialEasing: {}, easing: u.easing._default },
                        s
                    ),
                    originalProperties: r,
                    originalOptions: s,
                    startTime: hn || $s(),
                    duration: s.duration,
                    tweens: [],
                    createTween: function (R, A) {
                        var M = u.Tween(
                            t,
                            b.opts,
                            R,
                            A,
                            b.opts.specialEasing[R] || b.opts.easing
                        );
                        return b.tweens.push(M), M;
                    },
                    stop: function (R) {
                        var A = 0,
                            M = R ? b.tweens.length : 0;
                        if (l) return this;
                        for (l = !0; A < M; A++) b.tweens[A].run(1);
                        return (
                            R
                                ? (v.notifyWith(t, [b, 1, 0]),
                                  v.resolveWith(t, [b, R]))
                                : v.rejectWith(t, [b, R]),
                            this
                        );
                    },
                }),
                O = b.props;
            for (Hu(O, b.opts.specialEasing); f < d; f++)
                if (((a = nt.prefilters[f].call(b, t, O, b.opts)), a))
                    return (
                        D(a.stop) &&
                            (u._queueHooks(b.elem, b.opts.queue).stop =
                                a.stop.bind(a)),
                        a
                    );
            return (
                u.map(O, Ms, b),
                D(b.opts.start) && b.opts.start.call(t, b),
                b
                    .progress(b.opts.progress)
                    .done(b.opts.done, b.opts.complete)
                    .fail(b.opts.fail)
                    .always(b.opts.always),
                u.fx.timer(
                    u.extend(m, { elem: t, anim: b, queue: b.opts.queue })
                ),
                b
            );
        }
        (u.Animation = u.extend(nt, {
            tweeners: {
                "*": [
                    function (t, r) {
                        var s = this.createTween(t, r);
                        return ys(s.elem, t, Mn.exec(r), s), s;
                    },
                ],
            },
            tweener: function (t, r) {
                D(t) ? ((r = t), (t = ["*"])) : (t = t.match(Re));
                for (var s, a = 0, l = t.length; a < l; a++)
                    (s = t[a]),
                        (nt.tweeners[s] = nt.tweeners[s] || []),
                        nt.tweeners[s].unshift(r);
            },
            prefilters: [Mu],
            prefilter: function (t, r) {
                r ? nt.prefilters.unshift(t) : nt.prefilters.push(t);
            },
        })),
            (u.speed = function (t, r, s) {
                var a =
                    t && typeof t == "object"
                        ? u.extend({}, t)
                        : {
                              complete: s || (!s && r) || (D(t) && t),
                              duration: t,
                              easing: (s && r) || (r && !D(r) && r),
                          };
                return (
                    u.fx.off
                        ? (a.duration = 0)
                        : typeof a.duration != "number" &&
                          (a.duration in u.fx.speeds
                              ? (a.duration = u.fx.speeds[a.duration])
                              : (a.duration = u.fx.speeds._default)),
                    (a.queue == null || a.queue === !0) && (a.queue = "fx"),
                    (a.old = a.complete),
                    (a.complete = function () {
                        D(a.old) && a.old.call(this),
                            a.queue && u.dequeue(this, a.queue);
                    }),
                    a
                );
            }),
            u.fn.extend({
                fadeTo: function (t, r, s, a) {
                    return this.filter(ur)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({ opacity: r }, t, s, a);
                },
                animate: function (t, r, s, a) {
                    var l = u.isEmptyObject(t),
                        f = u.speed(r, s, a),
                        d = function () {
                            var v = nt(this, u.extend({}, t), f);
                            (l || U.get(this, "finish")) && v.stop(!0);
                        };
                    return (
                        (d.finish = d),
                        l || f.queue === !1
                            ? this.each(d)
                            : this.queue(f.queue, d)
                    );
                },
                stop: function (t, r, s) {
                    var a = function (l) {
                        var f = l.stop;
                        delete l.stop, f(s);
                    };
                    return (
                        typeof t != "string" &&
                            ((s = r), (r = t), (t = void 0)),
                        r && this.queue(t || "fx", []),
                        this.each(function () {
                            var l = !0,
                                f = t != null && t + "queueHooks",
                                d = u.timers,
                                v = U.get(this);
                            if (f) v[f] && v[f].stop && a(v[f]);
                            else
                                for (f in v)
                                    v[f] && v[f].stop && $u.test(f) && a(v[f]);
                            for (f = d.length; f--; )
                                d[f].elem === this &&
                                    (t == null || d[f].queue === t) &&
                                    (d[f].anim.stop(s),
                                    (l = !1),
                                    d.splice(f, 1));
                            (l || !s) && u.dequeue(this, t);
                        })
                    );
                },
                finish: function (t) {
                    return (
                        t !== !1 && (t = t || "fx"),
                        this.each(function () {
                            var r,
                                s = U.get(this),
                                a = s[t + "queue"],
                                l = s[t + "queueHooks"],
                                f = u.timers,
                                d = a ? a.length : 0;
                            for (
                                s.finish = !0,
                                    u.queue(this, t, []),
                                    l && l.stop && l.stop.call(this, !0),
                                    r = f.length;
                                r--;

                            )
                                f[r].elem === this &&
                                    f[r].queue === t &&
                                    (f[r].anim.stop(!0), f.splice(r, 1));
                            for (r = 0; r < d; r++)
                                a[r] && a[r].finish && a[r].finish.call(this);
                            delete s.finish;
                        })
                    );
                },
            }),
            u.each(["toggle", "show", "hide"], function (t, r) {
                var s = u.fn[r];
                u.fn[r] = function (a, l, f) {
                    return a == null || typeof a == "boolean"
                        ? s.apply(this, arguments)
                        : this.animate(dr(r, !0), a, l, f);
                };
            }),
            u.each(
                {
                    slideDown: dr("show"),
                    slideUp: dr("hide"),
                    slideToggle: dr("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                },
                function (t, r) {
                    u.fn[t] = function (s, a, l) {
                        return this.animate(r, s, a, l);
                    };
                }
            ),
            (u.timers = []),
            (u.fx.tick = function () {
                var t,
                    r = 0,
                    s = u.timers;
                for (hn = Date.now(); r < s.length; r++)
                    (t = s[r]), !t() && s[r] === t && s.splice(r--, 1);
                s.length || u.fx.stop(), (hn = void 0);
            }),
            (u.fx.timer = function (t) {
                u.timers.push(t), u.fx.start();
            }),
            (u.fx.interval = 13),
            (u.fx.start = function () {
                fr || ((fr = !0), ei());
            }),
            (u.fx.stop = function () {
                fr = null;
            }),
            (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (u.fn.delay = function (t, r) {
                return (
                    (t = (u.fx && u.fx.speeds[t]) || t),
                    (r = r || "fx"),
                    this.queue(r, function (s, a) {
                        var l = e.setTimeout(s, t);
                        a.stop = function () {
                            e.clearTimeout(l);
                        };
                    })
                );
            }),
            (function () {
                var t = H.createElement("input"),
                    r = H.createElement("select"),
                    s = r.appendChild(H.createElement("option"));
                (t.type = "checkbox"),
                    (N.checkOn = t.value !== ""),
                    (N.optSelected = s.selected),
                    (t = H.createElement("input")),
                    (t.value = "t"),
                    (t.type = "radio"),
                    (N.radioValue = t.value === "t");
            })();
        var Hs,
            Fn = u.expr.attrHandle;
        u.fn.extend({
            attr: function (t, r) {
                return Oe(this, u.attr, t, r, arguments.length > 1);
            },
            removeAttr: function (t) {
                return this.each(function () {
                    u.removeAttr(this, t);
                });
            },
        }),
            u.extend({
                attr: function (t, r, s) {
                    var a,
                        l,
                        f = t.nodeType;
                    if (!(f === 3 || f === 8 || f === 2)) {
                        if (typeof t.getAttribute > "u") return u.prop(t, r, s);
                        if (
                            ((f !== 1 || !u.isXMLDoc(t)) &&
                                (l =
                                    u.attrHooks[r.toLowerCase()] ||
                                    (u.expr.match.bool.test(r) ? Hs : void 0)),
                            s !== void 0)
                        ) {
                            if (s === null) {
                                u.removeAttr(t, r);
                                return;
                            }
                            return l &&
                                "set" in l &&
                                (a = l.set(t, s, r)) !== void 0
                                ? a
                                : (t.setAttribute(r, s + ""), s);
                        }
                        return l && "get" in l && (a = l.get(t, r)) !== null
                            ? a
                            : ((a = u.find.attr(t, r)), a ?? void 0);
                    }
                },
                attrHooks: {
                    type: {
                        set: function (t, r) {
                            if (
                                !N.radioValue &&
                                r === "radio" &&
                                k(t, "input")
                            ) {
                                var s = t.value;
                                return (
                                    t.setAttribute("type", r),
                                    s && (t.value = s),
                                    r
                                );
                            }
                        },
                    },
                },
                removeAttr: function (t, r) {
                    var s,
                        a = 0,
                        l = r && r.match(Re);
                    if (l && t.nodeType === 1)
                        for (; (s = l[a++]); ) t.removeAttribute(s);
                },
            }),
            (Hs = {
                set: function (t, r, s) {
                    return (
                        r === !1 ? u.removeAttr(t, s) : t.setAttribute(s, s), s
                    );
                },
            }),
            u.each(u.expr.match.bool.source.match(/\w+/g), function (t, r) {
                var s = Fn[r] || u.find.attr;
                Fn[r] = function (a, l, f) {
                    var d,
                        v,
                        m = l.toLowerCase();
                    return (
                        f ||
                            ((v = Fn[m]),
                            (Fn[m] = d),
                            (d = s(a, l, f) != null ? m : null),
                            (Fn[m] = v)),
                        d
                    );
                };
            });
        var ju = /^(?:input|select|textarea|button)$/i,
            Fu = /^(?:a|area)$/i;
        u.fn.extend({
            prop: function (t, r) {
                return Oe(this, u.prop, t, r, arguments.length > 1);
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[u.propFix[t] || t];
                });
            },
        }),
            u.extend({
                prop: function (t, r, s) {
                    var a,
                        l,
                        f = t.nodeType;
                    if (!(f === 3 || f === 8 || f === 2))
                        return (
                            (f !== 1 || !u.isXMLDoc(t)) &&
                                ((r = u.propFix[r] || r), (l = u.propHooks[r])),
                            s !== void 0
                                ? l &&
                                  "set" in l &&
                                  (a = l.set(t, s, r)) !== void 0
                                    ? a
                                    : (t[r] = s)
                                : l && "get" in l && (a = l.get(t, r)) !== null
                                ? a
                                : t[r]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var r = u.find.attr(t, "tabindex");
                            return r
                                ? parseInt(r, 10)
                                : ju.test(t.nodeName) ||
                                  (Fu.test(t.nodeName) && t.href)
                                ? 0
                                : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            N.optSelected ||
                (u.propHooks.selected = {
                    get: function (t) {
                        var r = t.parentNode;
                        return (
                            r && r.parentNode && r.parentNode.selectedIndex,
                            null
                        );
                    },
                    set: function (t) {
                        var r = t.parentNode;
                        r &&
                            (r.selectedIndex,
                            r.parentNode && r.parentNode.selectedIndex);
                    },
                }),
            u.each(
                [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                ],
                function () {
                    u.propFix[this.toLowerCase()] = this;
                }
            );
        function zt(t) {
            var r = t.match(Re) || [];
            return r.join(" ");
        }
        function Kt(t) {
            return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function ti(t) {
            return Array.isArray(t)
                ? t
                : typeof t == "string"
                ? t.match(Re) || []
                : [];
        }
        u.fn.extend({
            addClass: function (t) {
                var r, s, a, l, f, d;
                return D(t)
                    ? this.each(function (v) {
                          u(this).addClass(t.call(this, v, Kt(this)));
                      })
                    : ((r = ti(t)),
                      r.length
                          ? this.each(function () {
                                if (
                                    ((a = Kt(this)),
                                    (s =
                                        this.nodeType === 1 &&
                                        " " + zt(a) + " "),
                                    s)
                                ) {
                                    for (f = 0; f < r.length; f++)
                                        (l = r[f]),
                                            s.indexOf(" " + l + " ") < 0 &&
                                                (s += l + " ");
                                    (d = zt(s)),
                                        a !== d &&
                                            this.setAttribute("class", d);
                                }
                            })
                          : this);
            },
            removeClass: function (t) {
                var r, s, a, l, f, d;
                return D(t)
                    ? this.each(function (v) {
                          u(this).removeClass(t.call(this, v, Kt(this)));
                      })
                    : arguments.length
                    ? ((r = ti(t)),
                      r.length
                          ? this.each(function () {
                                if (
                                    ((a = Kt(this)),
                                    (s =
                                        this.nodeType === 1 &&
                                        " " + zt(a) + " "),
                                    s)
                                ) {
                                    for (f = 0; f < r.length; f++)
                                        for (
                                            l = r[f];
                                            s.indexOf(" " + l + " ") > -1;

                                        )
                                            s = s.replace(" " + l + " ", " ");
                                    (d = zt(s)),
                                        a !== d &&
                                            this.setAttribute("class", d);
                                }
                            })
                          : this)
                    : this.attr("class", "");
            },
            toggleClass: function (t, r) {
                var s,
                    a,
                    l,
                    f,
                    d = typeof t,
                    v = d === "string" || Array.isArray(t);
                return D(t)
                    ? this.each(function (m) {
                          u(this).toggleClass(t.call(this, m, Kt(this), r), r);
                      })
                    : typeof r == "boolean" && v
                    ? r
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((s = ti(t)),
                      this.each(function () {
                          if (v)
                              for (f = u(this), l = 0; l < s.length; l++)
                                  (a = s[l]),
                                      f.hasClass(a)
                                          ? f.removeClass(a)
                                          : f.addClass(a);
                          else
                              (t === void 0 || d === "boolean") &&
                                  ((a = Kt(this)),
                                  a && U.set(this, "__className__", a),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          a || t === !1
                                              ? ""
                                              : U.get(this, "__className__") ||
                                                    ""
                                      ));
                      }));
            },
            hasClass: function (t) {
                var r,
                    s,
                    a = 0;
                for (r = " " + t + " "; (s = this[a++]); )
                    if (
                        s.nodeType === 1 &&
                        (" " + zt(Kt(s)) + " ").indexOf(r) > -1
                    )
                        return !0;
                return !1;
            },
        });
        var Bu = /\r/g;
        u.fn.extend({
            val: function (t) {
                var r,
                    s,
                    a,
                    l = this[0];
                return arguments.length
                    ? ((a = D(t)),
                      this.each(function (f) {
                          var d;
                          this.nodeType === 1 &&
                              (a
                                  ? (d = t.call(this, f, u(this).val()))
                                  : (d = t),
                              d == null
                                  ? (d = "")
                                  : typeof d == "number"
                                  ? (d += "")
                                  : Array.isArray(d) &&
                                    (d = u.map(d, function (v) {
                                        return v == null ? "" : v + "";
                                    })),
                              (r =
                                  u.valHooks[this.type] ||
                                  u.valHooks[this.nodeName.toLowerCase()]),
                              (!r ||
                                  !("set" in r) ||
                                  r.set(this, d, "value") === void 0) &&
                                  (this.value = d));
                      }))
                    : l
                    ? ((r =
                          u.valHooks[l.type] ||
                          u.valHooks[l.nodeName.toLowerCase()]),
                      r && "get" in r && (s = r.get(l, "value")) !== void 0
                          ? s
                          : ((s = l.value),
                            typeof s == "string" ? s.replace(Bu, "") : s ?? ""))
                    : void 0;
            },
        }),
            u.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var r = u.find.attr(t, "value");
                            return r ?? zt(u.text(t));
                        },
                    },
                    select: {
                        get: function (t) {
                            var r,
                                s,
                                a,
                                l = t.options,
                                f = t.selectedIndex,
                                d = t.type === "select-one",
                                v = d ? null : [],
                                m = d ? f + 1 : l.length;
                            for (f < 0 ? (a = m) : (a = d ? f : 0); a < m; a++)
                                if (
                                    ((s = l[a]),
                                    (s.selected || a === f) &&
                                        !s.disabled &&
                                        (!s.parentNode.disabled ||
                                            !k(s.parentNode, "optgroup")))
                                ) {
                                    if (((r = u(s).val()), d)) return r;
                                    v.push(r);
                                }
                            return v;
                        },
                        set: function (t, r) {
                            for (
                                var s,
                                    a,
                                    l = t.options,
                                    f = u.makeArray(r),
                                    d = l.length;
                                d--;

                            )
                                (a = l[d]),
                                    (a.selected =
                                        u.inArray(u.valHooks.option.get(a), f) >
                                        -1) && (s = !0);
                            return s || (t.selectedIndex = -1), f;
                        },
                    },
                },
            }),
            u.each(["radio", "checkbox"], function () {
                (u.valHooks[this] = {
                    set: function (t, r) {
                        if (Array.isArray(r))
                            return (t.checked = u.inArray(u(t).val(), r) > -1);
                    },
                }),
                    N.checkOn ||
                        (u.valHooks[this].get = function (t) {
                            return t.getAttribute("value") === null
                                ? "on"
                                : t.value;
                        });
            });
        var Bn = e.location,
            js = { guid: Date.now() },
            ni = /\?/;
        u.parseXML = function (t) {
            var r, s;
            if (!t || typeof t != "string") return null;
            try {
                r = new e.DOMParser().parseFromString(t, "text/xml");
            } catch {}
            return (
                (s = r && r.getElementsByTagName("parsererror")[0]),
                (!r || s) &&
                    u.error(
                        "Invalid XML: " +
                            (s
                                ? u.map(s.childNodes, function (a) {
                                      return a.textContent;
                                  }).join(`
`)
                                : t)
                    ),
                r
            );
        };
        var Fs = /^(?:focusinfocus|focusoutblur)$/,
            Bs = function (t) {
                t.stopPropagation();
            };
        u.extend(u.event, {
            trigger: function (t, r, s, a) {
                var l,
                    f,
                    d,
                    v,
                    m,
                    b,
                    O,
                    R,
                    A = [s || H],
                    M = I.call(t, "type") ? t.type : t,
                    Z = I.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((f = R = d = s = s || H),
                    !(s.nodeType === 3 || s.nodeType === 8) &&
                        !Fs.test(M + u.event.triggered) &&
                        (M.indexOf(".") > -1 &&
                            ((Z = M.split(".")), (M = Z.shift()), Z.sort()),
                        (m = M.indexOf(":") < 0 && "on" + M),
                        (t = t[u.expando]
                            ? t
                            : new u.Event(M, typeof t == "object" && t)),
                        (t.isTrigger = a ? 2 : 3),
                        (t.namespace = Z.join(".")),
                        (t.rnamespace = t.namespace
                            ? new RegExp(
                                  "(^|\\.)" +
                                      Z.join("\\.(?:.*\\.|)") +
                                      "(\\.|$)"
                              )
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = s),
                        (r = r == null ? [t] : u.makeArray(r, [t])),
                        (O = u.event.special[M] || {}),
                        !(!a && O.trigger && O.trigger.apply(s, r) === !1)))
                ) {
                    if (!a && !O.noBubble && !K(s)) {
                        for (
                            v = O.delegateType || M,
                                Fs.test(v + M) || (f = f.parentNode);
                            f;
                            f = f.parentNode
                        )
                            A.push(f), (d = f);
                        d === (s.ownerDocument || H) &&
                            A.push(d.defaultView || d.parentWindow || e);
                    }
                    for (l = 0; (f = A[l++]) && !t.isPropagationStopped(); )
                        (R = f),
                            (t.type = l > 1 ? v : O.bindType || M),
                            (b =
                                (U.get(f, "events") || Object.create(null))[
                                    t.type
                                ] && U.get(f, "handle")),
                            b && b.apply(f, r),
                            (b = m && f[m]),
                            b &&
                                b.apply &&
                                Rt(f) &&
                                ((t.result = b.apply(f, r)),
                                t.result === !1 && t.preventDefault());
                    return (
                        (t.type = M),
                        !a &&
                            !t.isDefaultPrevented() &&
                            (!O._default ||
                                O._default.apply(A.pop(), r) === !1) &&
                            Rt(s) &&
                            m &&
                            D(s[M]) &&
                            !K(s) &&
                            ((d = s[m]),
                            d && (s[m] = null),
                            (u.event.triggered = M),
                            t.isPropagationStopped() &&
                                R.addEventListener(M, Bs),
                            s[M](),
                            t.isPropagationStopped() &&
                                R.removeEventListener(M, Bs),
                            (u.event.triggered = void 0),
                            d && (s[m] = d)),
                        t.result
                    );
                }
            },
            simulate: function (t, r, s) {
                var a = u.extend(new u.Event(), s, {
                    type: t,
                    isSimulated: !0,
                });
                u.event.trigger(a, null, r);
            },
        }),
            u.fn.extend({
                trigger: function (t, r) {
                    return this.each(function () {
                        u.event.trigger(t, r, this);
                    });
                },
                triggerHandler: function (t, r) {
                    var s = this[0];
                    if (s) return u.event.trigger(t, r, s, !0);
                },
            });
        var qu = /\[\]$/,
            qs = /\r?\n/g,
            Vu = /^(?:submit|button|image|reset|file)$/i,
            Wu = /^(?:input|select|textarea|keygen)/i;
        function ri(t, r, s, a) {
            var l;
            if (Array.isArray(r))
                u.each(r, function (f, d) {
                    s || qu.test(t)
                        ? a(t, d)
                        : ri(
                              t +
                                  "[" +
                                  (typeof d == "object" && d != null ? f : "") +
                                  "]",
                              d,
                              s,
                              a
                          );
                });
            else if (!s && X(r) === "object")
                for (l in r) ri(t + "[" + l + "]", r[l], s, a);
            else a(t, r);
        }
        (u.param = function (t, r) {
            var s,
                a = [],
                l = function (f, d) {
                    var v = D(d) ? d() : d;
                    a[a.length] =
                        encodeURIComponent(f) +
                        "=" +
                        encodeURIComponent(v ?? "");
                };
            if (t == null) return "";
            if (Array.isArray(t) || (t.jquery && !u.isPlainObject(t)))
                u.each(t, function () {
                    l(this.name, this.value);
                });
            else for (s in t) ri(s, t[s], r, l);
            return a.join("&");
        }),
            u.fn.extend({
                serialize: function () {
                    return u.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = u.prop(this, "elements");
                        return t ? u.makeArray(t) : this;
                    })
                        .filter(function () {
                            var t = this.type;
                            return (
                                this.name &&
                                !u(this).is(":disabled") &&
                                Wu.test(this.nodeName) &&
                                !Vu.test(t) &&
                                (this.checked || !Hn.test(t))
                            );
                        })
                        .map(function (t, r) {
                            var s = u(this).val();
                            return s == null
                                ? null
                                : Array.isArray(s)
                                ? u.map(s, function (a) {
                                      return {
                                          name: r.name,
                                          value: a.replace(
                                              qs,
                                              `\r
`
                                          ),
                                      };
                                  })
                                : {
                                      name: r.name,
                                      value: s.replace(
                                          qs,
                                          `\r
`
                                      ),
                                  };
                        })
                        .get();
                },
            });
        var Uu = /%20/g,
            zu = /#.*$/,
            Ku = /([?&])_=[^&]*/,
            Yu = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Gu = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Xu = /^(?:GET|HEAD)$/,
            Ju = /^\/\//,
            Vs = {},
            ii = {},
            Ws = "*/".concat("*"),
            si = H.createElement("a");
        si.href = Bn.href;
        function Us(t) {
            return function (r, s) {
                typeof r != "string" && ((s = r), (r = "*"));
                var a,
                    l = 0,
                    f = r.toLowerCase().match(Re) || [];
                if (D(s))
                    for (; (a = f[l++]); )
                        a[0] === "+"
                            ? ((a = a.slice(1) || "*"),
                              (t[a] = t[a] || []).unshift(s))
                            : (t[a] = t[a] || []).push(s);
            };
        }
        function zs(t, r, s, a) {
            var l = {},
                f = t === ii;
            function d(v) {
                var m;
                return (
                    (l[v] = !0),
                    u.each(t[v] || [], function (b, O) {
                        var R = O(r, s, a);
                        if (typeof R == "string" && !f && !l[R])
                            return r.dataTypes.unshift(R), d(R), !1;
                        if (f) return !(m = R);
                    }),
                    m
                );
            }
            return d(r.dataTypes[0]) || (!l["*"] && d("*"));
        }
        function oi(t, r) {
            var s,
                a,
                l = u.ajaxSettings.flatOptions || {};
            for (s in r)
                r[s] !== void 0 && ((l[s] ? t : a || (a = {}))[s] = r[s]);
            return a && u.extend(!0, t, a), t;
        }
        function Qu(t, r, s) {
            for (
                var a, l, f, d, v = t.contents, m = t.dataTypes;
                m[0] === "*";

            )
                m.shift(),
                    a === void 0 &&
                        (a = t.mimeType || r.getResponseHeader("Content-Type"));
            if (a) {
                for (l in v)
                    if (v[l] && v[l].test(a)) {
                        m.unshift(l);
                        break;
                    }
            }
            if (m[0] in s) f = m[0];
            else {
                for (l in s) {
                    if (!m[0] || t.converters[l + " " + m[0]]) {
                        f = l;
                        break;
                    }
                    d || (d = l);
                }
                f = f || d;
            }
            if (f) return f !== m[0] && m.unshift(f), s[f];
        }
        function Zu(t, r, s, a) {
            var l,
                f,
                d,
                v,
                m,
                b = {},
                O = t.dataTypes.slice();
            if (O[1])
                for (d in t.converters) b[d.toLowerCase()] = t.converters[d];
            for (f = O.shift(); f; )
                if (
                    (t.responseFields[f] && (s[t.responseFields[f]] = r),
                    !m &&
                        a &&
                        t.dataFilter &&
                        (r = t.dataFilter(r, t.dataType)),
                    (m = f),
                    (f = O.shift()),
                    f)
                ) {
                    if (f === "*") f = m;
                    else if (m !== "*" && m !== f) {
                        if (((d = b[m + " " + f] || b["* " + f]), !d)) {
                            for (l in b)
                                if (
                                    ((v = l.split(" ")),
                                    v[1] === f &&
                                        ((d =
                                            b[m + " " + v[0]] ||
                                            b["* " + v[0]]),
                                        d))
                                ) {
                                    d === !0
                                        ? (d = b[l])
                                        : b[l] !== !0 &&
                                          ((f = v[0]), O.unshift(v[1]));
                                    break;
                                }
                        }
                        if (d !== !0)
                            if (d && t.throws) r = d(r);
                            else
                                try {
                                    r = d(r);
                                } catch (R) {
                                    return {
                                        state: "parsererror",
                                        error: d
                                            ? R
                                            : "No conversion from " +
                                              m +
                                              " to " +
                                              f,
                                    };
                                }
                    }
                }
            return { state: "success", data: r };
        }
        u.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Bn.href,
                type: "GET",
                isLocal: Gu.test(Bn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ws,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": u.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, r) {
                return r ? oi(oi(t, u.ajaxSettings), r) : oi(u.ajaxSettings, t);
            },
            ajaxPrefilter: Us(Vs),
            ajaxTransport: Us(ii),
            ajax: function (t, r) {
                typeof t == "object" && ((r = t), (t = void 0)), (r = r || {});
                var s,
                    a,
                    l,
                    f,
                    d,
                    v,
                    m,
                    b,
                    O,
                    R,
                    A = u.ajaxSetup({}, r),
                    M = A.context || A,
                    Z = A.context && (M.nodeType || M.jquery) ? u(M) : u.event,
                    fe = u.Deferred(),
                    ie = u.Callbacks("once memory"),
                    Ce = A.statusCode || {},
                    we = {},
                    ft = {},
                    dt = "canceled",
                    le = {
                        readyState: 0,
                        getResponseHeader: function (de) {
                            var _e;
                            if (m) {
                                if (!f)
                                    for (f = {}; (_e = Yu.exec(l)); )
                                        f[_e[1].toLowerCase() + " "] = (
                                            f[_e[1].toLowerCase() + " "] || []
                                        ).concat(_e[2]);
                                _e = f[de.toLowerCase() + " "];
                            }
                            return _e == null ? null : _e.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return m ? l : null;
                        },
                        setRequestHeader: function (de, _e) {
                            return (
                                m == null &&
                                    ((de = ft[de.toLowerCase()] =
                                        ft[de.toLowerCase()] || de),
                                    (we[de] = _e)),
                                this
                            );
                        },
                        overrideMimeType: function (de) {
                            return m == null && (A.mimeType = de), this;
                        },
                        statusCode: function (de) {
                            var _e;
                            if (de)
                                if (m) le.always(de[le.status]);
                                else for (_e in de) Ce[_e] = [Ce[_e], de[_e]];
                            return this;
                        },
                        abort: function (de) {
                            var _e = de || dt;
                            return s && s.abort(_e), Yt(0, _e), this;
                        },
                    };
                if (
                    (fe.promise(le),
                    (A.url = ((t || A.url || Bn.href) + "").replace(
                        Ju,
                        Bn.protocol + "//"
                    )),
                    (A.type = r.method || r.type || A.method || A.type),
                    (A.dataTypes = (A.dataType || "*")
                        .toLowerCase()
                        .match(Re) || [""]),
                    A.crossDomain == null)
                ) {
                    v = H.createElement("a");
                    try {
                        (v.href = A.url),
                            (v.href = v.href),
                            (A.crossDomain =
                                si.protocol + "//" + si.host !=
                                v.protocol + "//" + v.host);
                    } catch {
                        A.crossDomain = !0;
                    }
                }
                if (
                    (A.data &&
                        A.processData &&
                        typeof A.data != "string" &&
                        (A.data = u.param(A.data, A.traditional)),
                    zs(Vs, A, r, le),
                    m)
                )
                    return le;
                (b = u.event && A.global),
                    b && u.active++ === 0 && u.event.trigger("ajaxStart"),
                    (A.type = A.type.toUpperCase()),
                    (A.hasContent = !Xu.test(A.type)),
                    (a = A.url.replace(zu, "")),
                    A.hasContent
                        ? A.data &&
                          A.processData &&
                          (A.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) === 0 &&
                          (A.data = A.data.replace(Uu, "+"))
                        : ((R = A.url.slice(a.length)),
                          A.data &&
                              (A.processData || typeof A.data == "string") &&
                              ((a += (ni.test(a) ? "&" : "?") + A.data),
                              delete A.data),
                          A.cache === !1 &&
                              ((a = a.replace(Ku, "$1")),
                              (R =
                                  (ni.test(a) ? "&" : "?") +
                                  "_=" +
                                  js.guid++ +
                                  R)),
                          (A.url = a + R)),
                    A.ifModified &&
                        (u.lastModified[a] &&
                            le.setRequestHeader(
                                "If-Modified-Since",
                                u.lastModified[a]
                            ),
                        u.etag[a] &&
                            le.setRequestHeader("If-None-Match", u.etag[a])),
                    ((A.data && A.hasContent && A.contentType !== !1) ||
                        r.contentType) &&
                        le.setRequestHeader("Content-Type", A.contentType),
                    le.setRequestHeader(
                        "Accept",
                        A.dataTypes[0] && A.accepts[A.dataTypes[0]]
                            ? A.accepts[A.dataTypes[0]] +
                                  (A.dataTypes[0] !== "*"
                                      ? ", " + Ws + "; q=0.01"
                                      : "")
                            : A.accepts["*"]
                    );
                for (O in A.headers) le.setRequestHeader(O, A.headers[O]);
                if (A.beforeSend && (A.beforeSend.call(M, le, A) === !1 || m))
                    return le.abort();
                if (
                    ((dt = "abort"),
                    ie.add(A.complete),
                    le.done(A.success),
                    le.fail(A.error),
                    (s = zs(ii, A, r, le)),
                    !s)
                )
                    Yt(-1, "No Transport");
                else {
                    if (
                        ((le.readyState = 1),
                        b && Z.trigger("ajaxSend", [le, A]),
                        m)
                    )
                        return le;
                    A.async &&
                        A.timeout > 0 &&
                        (d = e.setTimeout(function () {
                            le.abort("timeout");
                        }, A.timeout));
                    try {
                        (m = !1), s.send(we, Yt);
                    } catch (de) {
                        if (m) throw de;
                        Yt(-1, de);
                    }
                }
                function Yt(de, _e, Vn, ui) {
                    var ht,
                        Wn,
                        pt,
                        Pt,
                        It,
                        ze = _e;
                    m ||
                        ((m = !0),
                        d && e.clearTimeout(d),
                        (s = void 0),
                        (l = ui || ""),
                        (le.readyState = de > 0 ? 4 : 0),
                        (ht = (de >= 200 && de < 300) || de === 304),
                        Vn && (Pt = Qu(A, le, Vn)),
                        !ht &&
                            u.inArray("script", A.dataTypes) > -1 &&
                            u.inArray("json", A.dataTypes) < 0 &&
                            (A.converters["text script"] = function () {}),
                        (Pt = Zu(A, Pt, le, ht)),
                        ht
                            ? (A.ifModified &&
                                  ((It = le.getResponseHeader("Last-Modified")),
                                  It && (u.lastModified[a] = It),
                                  (It = le.getResponseHeader("etag")),
                                  It && (u.etag[a] = It)),
                              de === 204 || A.type === "HEAD"
                                  ? (ze = "nocontent")
                                  : de === 304
                                  ? (ze = "notmodified")
                                  : ((ze = Pt.state),
                                    (Wn = Pt.data),
                                    (pt = Pt.error),
                                    (ht = !pt)))
                            : ((pt = ze),
                              (de || !ze) &&
                                  ((ze = "error"), de < 0 && (de = 0))),
                        (le.status = de),
                        (le.statusText = (_e || ze) + ""),
                        ht
                            ? fe.resolveWith(M, [Wn, ze, le])
                            : fe.rejectWith(M, [le, ze, pt]),
                        le.statusCode(Ce),
                        (Ce = void 0),
                        b &&
                            Z.trigger(ht ? "ajaxSuccess" : "ajaxError", [
                                le,
                                A,
                                ht ? Wn : pt,
                            ]),
                        ie.fireWith(M, [le, ze]),
                        b &&
                            (Z.trigger("ajaxComplete", [le, A]),
                            --u.active || u.event.trigger("ajaxStop")));
                }
                return le;
            },
            getJSON: function (t, r, s) {
                return u.get(t, r, s, "json");
            },
            getScript: function (t, r) {
                return u.get(t, void 0, r, "script");
            },
        }),
            u.each(["get", "post"], function (t, r) {
                u[r] = function (s, a, l, f) {
                    return (
                        D(a) && ((f = f || l), (l = a), (a = void 0)),
                        u.ajax(
                            u.extend(
                                {
                                    url: s,
                                    type: r,
                                    dataType: f,
                                    data: a,
                                    success: l,
                                },
                                u.isPlainObject(s) && s
                            )
                        )
                    );
                };
            }),
            u.ajaxPrefilter(function (t) {
                var r;
                for (r in t.headers)
                    r.toLowerCase() === "content-type" &&
                        (t.contentType = t.headers[r] || "");
            }),
            (u._evalUrl = function (t, r, s) {
                return u.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (a) {
                        u.globalEval(a, r, s);
                    },
                });
            }),
            u.fn.extend({
                wrapAll: function (t) {
                    var r;
                    return (
                        this[0] &&
                            (D(t) && (t = t.call(this[0])),
                            (r = u(t, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && r.insertBefore(this[0]),
                            r
                                .map(function () {
                                    for (var s = this; s.firstElementChild; )
                                        s = s.firstElementChild;
                                    return s;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (t) {
                    return D(t)
                        ? this.each(function (r) {
                              u(this).wrapInner(t.call(this, r));
                          })
                        : this.each(function () {
                              var r = u(this),
                                  s = r.contents();
                              s.length ? s.wrapAll(t) : r.append(t);
                          });
                },
                wrap: function (t) {
                    var r = D(t);
                    return this.each(function (s) {
                        u(this).wrapAll(r ? t.call(this, s) : t);
                    });
                },
                unwrap: function (t) {
                    return (
                        this.parent(t)
                            .not("body")
                            .each(function () {
                                u(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (u.expr.pseudos.hidden = function (t) {
                return !u.expr.pseudos.visible(t);
            }),
            (u.expr.pseudos.visible = function (t) {
                return !!(
                    t.offsetWidth ||
                    t.offsetHeight ||
                    t.getClientRects().length
                );
            }),
            (u.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest();
                } catch {}
            });
        var ec = { 0: 200, 1223: 204 },
            qn = u.ajaxSettings.xhr();
        (N.cors = !!qn && "withCredentials" in qn),
            (N.ajax = qn = !!qn),
            u.ajaxTransport(function (t) {
                var r, s;
                if (N.cors || (qn && !t.crossDomain))
                    return {
                        send: function (a, l) {
                            var f,
                                d = t.xhr();
                            if (
                                (d.open(
                                    t.type,
                                    t.url,
                                    t.async,
                                    t.username,
                                    t.password
                                ),
                                t.xhrFields)
                            )
                                for (f in t.xhrFields) d[f] = t.xhrFields[f];
                            t.mimeType &&
                                d.overrideMimeType &&
                                d.overrideMimeType(t.mimeType),
                                !t.crossDomain &&
                                    !a["X-Requested-With"] &&
                                    (a["X-Requested-With"] = "XMLHttpRequest");
                            for (f in a) d.setRequestHeader(f, a[f]);
                            (r = function (v) {
                                return function () {
                                    r &&
                                        ((r =
                                            s =
                                            d.onload =
                                            d.onerror =
                                            d.onabort =
                                            d.ontimeout =
                                            d.onreadystatechange =
                                                null),
                                        v === "abort"
                                            ? d.abort()
                                            : v === "error"
                                            ? typeof d.status != "number"
                                                ? l(0, "error")
                                                : l(d.status, d.statusText)
                                            : l(
                                                  ec[d.status] || d.status,
                                                  d.statusText,
                                                  (d.responseType || "text") !==
                                                      "text" ||
                                                      typeof d.responseText !=
                                                          "string"
                                                      ? { binary: d.response }
                                                      : {
                                                            text: d.responseText,
                                                        },
                                                  d.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (d.onload = r()),
                                (s = d.onerror = d.ontimeout = r("error")),
                                d.onabort !== void 0
                                    ? (d.onabort = s)
                                    : (d.onreadystatechange = function () {
                                          d.readyState === 4 &&
                                              e.setTimeout(function () {
                                                  r && s();
                                              });
                                      }),
                                (r = r("abort"));
                            try {
                                d.send((t.hasContent && t.data) || null);
                            } catch (v) {
                                if (r) throw v;
                            }
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            }),
            u.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1);
            }),
            u.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (t) {
                        return u.globalEval(t), t;
                    },
                },
            }),
            u.ajaxPrefilter("script", function (t) {
                t.cache === void 0 && (t.cache = !1),
                    t.crossDomain && (t.type = "GET");
            }),
            u.ajaxTransport("script", function (t) {
                if (t.crossDomain || t.scriptAttrs) {
                    var r, s;
                    return {
                        send: function (a, l) {
                            (r = u("<script>")
                                .attr(t.scriptAttrs || {})
                                .prop({ charset: t.scriptCharset, src: t.url })
                                .on(
                                    "load error",
                                    (s = function (f) {
                                        r.remove(),
                                            (s = null),
                                            f &&
                                                l(
                                                    f.type === "error"
                                                        ? 404
                                                        : 200,
                                                    f.type
                                                );
                                    })
                                )),
                                H.head.appendChild(r[0]);
                        },
                        abort: function () {
                            s && s();
                        },
                    };
                }
            });
        var Ks = [],
            ai = /(=)\?(?=&|$)|\?\?/;
        u.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ks.pop() || u.expando + "_" + js.guid++;
                return (this[t] = !0), t;
            },
        }),
            u.ajaxPrefilter("json jsonp", function (t, r, s) {
                var a,
                    l,
                    f,
                    d =
                        t.jsonp !== !1 &&
                        (ai.test(t.url)
                            ? "url"
                            : typeof t.data == "string" &&
                              (t.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) === 0 &&
                              ai.test(t.data) &&
                              "data");
                if (d || t.dataTypes[0] === "jsonp")
                    return (
                        (a = t.jsonpCallback =
                            D(t.jsonpCallback)
                                ? t.jsonpCallback()
                                : t.jsonpCallback),
                        d
                            ? (t[d] = t[d].replace(ai, "$1" + a))
                            : t.jsonp !== !1 &&
                              (t.url +=
                                  (ni.test(t.url) ? "&" : "?") +
                                  t.jsonp +
                                  "=" +
                                  a),
                        (t.converters["script json"] = function () {
                            return f || u.error(a + " was not called"), f[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (l = e[a]),
                        (e[a] = function () {
                            f = arguments;
                        }),
                        s.always(function () {
                            l === void 0 ? u(e).removeProp(a) : (e[a] = l),
                                t[a] &&
                                    ((t.jsonpCallback = r.jsonpCallback),
                                    Ks.push(a)),
                                f && D(l) && l(f[0]),
                                (f = l = void 0);
                        }),
                        "script"
                    );
            }),
            (N.createHTMLDocument = (function () {
                var t = H.implementation.createHTMLDocument("").body;
                return (
                    (t.innerHTML = "<form></form><form></form>"),
                    t.childNodes.length === 2
                );
            })()),
            (u.parseHTML = function (t, r, s) {
                if (typeof t != "string") return [];
                typeof r == "boolean" && ((s = r), (r = !1));
                var a, l, f;
                return (
                    r ||
                        (N.createHTMLDocument
                            ? ((r = H.implementation.createHTMLDocument("")),
                              (a = r.createElement("base")),
                              (a.href = H.location.href),
                              r.head.appendChild(a))
                            : (r = H)),
                    (l = ut.exec(t)),
                    (f = !s && []),
                    l
                        ? [r.createElement(l[1])]
                        : ((l = ws([t], r, f)),
                          f && f.length && u(f).remove(),
                          u.merge([], l.childNodes))
                );
            }),
            (u.fn.load = function (t, r, s) {
                var a,
                    l,
                    f,
                    d = this,
                    v = t.indexOf(" ");
                return (
                    v > -1 && ((a = zt(t.slice(v))), (t = t.slice(0, v))),
                    D(r)
                        ? ((s = r), (r = void 0))
                        : r && typeof r == "object" && (l = "POST"),
                    d.length > 0 &&
                        u
                            .ajax({
                                url: t,
                                type: l || "GET",
                                dataType: "html",
                                data: r,
                            })
                            .done(function (m) {
                                (f = arguments),
                                    d.html(
                                        a
                                            ? u("<div>")
                                                  .append(u.parseHTML(m))
                                                  .find(a)
                                            : m
                                    );
                            })
                            .always(
                                s &&
                                    function (m, b) {
                                        d.each(function () {
                                            s.apply(
                                                this,
                                                f || [m.responseText, b, m]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (u.expr.pseudos.animated = function (t) {
                return u.grep(u.timers, function (r) {
                    return t === r.elem;
                }).length;
            }),
            (u.offset = {
                setOffset: function (t, r, s) {
                    var a,
                        l,
                        f,
                        d,
                        v,
                        m,
                        b,
                        O = u.css(t, "position"),
                        R = u(t),
                        A = {};
                    O === "static" && (t.style.position = "relative"),
                        (v = R.offset()),
                        (f = u.css(t, "top")),
                        (m = u.css(t, "left")),
                        (b =
                            (O === "absolute" || O === "fixed") &&
                            (f + m).indexOf("auto") > -1),
                        b
                            ? ((a = R.position()), (d = a.top), (l = a.left))
                            : ((d = parseFloat(f) || 0),
                              (l = parseFloat(m) || 0)),
                        D(r) && (r = r.call(t, s, u.extend({}, v))),
                        r.top != null && (A.top = r.top - v.top + d),
                        r.left != null && (A.left = r.left - v.left + l),
                        "using" in r ? r.using.call(t, A) : R.css(A);
                },
            }),
            u.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return t === void 0
                            ? this
                            : this.each(function (l) {
                                  u.offset.setOffset(this, t, l);
                              });
                    var r,
                        s,
                        a = this[0];
                    if (a)
                        return a.getClientRects().length
                            ? ((r = a.getBoundingClientRect()),
                              (s = a.ownerDocument.defaultView),
                              {
                                  top: r.top + s.pageYOffset,
                                  left: r.left + s.pageXOffset,
                              })
                            : { top: 0, left: 0 };
                },
                position: function () {
                    if (this[0]) {
                        var t,
                            r,
                            s,
                            a = this[0],
                            l = { top: 0, left: 0 };
                        if (u.css(a, "position") === "fixed")
                            r = a.getBoundingClientRect();
                        else {
                            for (
                                r = this.offset(),
                                    s = a.ownerDocument,
                                    t = a.offsetParent || s.documentElement;
                                t &&
                                (t === s.body || t === s.documentElement) &&
                                u.css(t, "position") === "static";

                            )
                                t = t.parentNode;
                            t &&
                                t !== a &&
                                t.nodeType === 1 &&
                                ((l = u(t).offset()),
                                (l.top += u.css(t, "borderTopWidth", !0)),
                                (l.left += u.css(t, "borderLeftWidth", !0)));
                        }
                        return {
                            top: r.top - l.top - u.css(a, "marginTop", !0),
                            left: r.left - l.left - u.css(a, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var t = this.offsetParent;
                            t && u.css(t, "position") === "static";

                        )
                            t = t.offsetParent;
                        return t || Ut;
                    });
                },
            }),
            u.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (t, r) {
                    var s = r === "pageYOffset";
                    u.fn[t] = function (a) {
                        return Oe(
                            this,
                            function (l, f, d) {
                                var v;
                                if (
                                    (K(l)
                                        ? (v = l)
                                        : l.nodeType === 9 &&
                                          (v = l.defaultView),
                                    d === void 0)
                                )
                                    return v ? v[r] : l[f];
                                v
                                    ? v.scrollTo(
                                          s ? v.pageXOffset : d,
                                          s ? d : v.pageYOffset
                                      )
                                    : (l[f] = d);
                            },
                            t,
                            a,
                            arguments.length
                        );
                    };
                }
            ),
            u.each(["top", "left"], function (t, r) {
                u.cssHooks[r] = Ns(N.pixelPosition, function (s, a) {
                    if (a)
                        return (
                            (a = jn(s, r)),
                            Xr.test(a) ? u(s).position()[r] + "px" : a
                        );
                });
            }),
            u.each({ Height: "height", Width: "width" }, function (t, r) {
                u.each(
                    { padding: "inner" + t, content: r, "": "outer" + t },
                    function (s, a) {
                        u.fn[a] = function (l, f) {
                            var d =
                                    arguments.length &&
                                    (s || typeof l != "boolean"),
                                v =
                                    s ||
                                    (l === !0 || f === !0
                                        ? "margin"
                                        : "border");
                            return Oe(
                                this,
                                function (m, b, O) {
                                    var R;
                                    return K(m)
                                        ? a.indexOf("outer") === 0
                                            ? m["inner" + t]
                                            : m.document.documentElement[
                                                  "client" + t
                                              ]
                                        : m.nodeType === 9
                                        ? ((R = m.documentElement),
                                          Math.max(
                                              m.body["scroll" + t],
                                              R["scroll" + t],
                                              m.body["offset" + t],
                                              R["offset" + t],
                                              R["client" + t]
                                          ))
                                        : O === void 0
                                        ? u.css(m, b, v)
                                        : u.style(m, b, O, v);
                                },
                                r,
                                d ? l : void 0,
                                d
                            );
                        };
                    }
                );
            }),
            u.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function (t, r) {
                    u.fn[r] = function (s) {
                        return this.on(r, s);
                    };
                }
            ),
            u.fn.extend({
                bind: function (t, r, s) {
                    return this.on(t, null, r, s);
                },
                unbind: function (t, r) {
                    return this.off(t, null, r);
                },
                delegate: function (t, r, s, a) {
                    return this.on(r, t, s, a);
                },
                undelegate: function (t, r, s) {
                    return arguments.length === 1
                        ? this.off(t, "**")
                        : this.off(r, t || "**", s);
                },
                hover: function (t, r) {
                    return this.on("mouseenter", t).on("mouseleave", r || t);
                },
            }),
            u.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (t, r) {
                    u.fn[r] = function (s, a) {
                        return arguments.length > 0
                            ? this.on(r, null, s, a)
                            : this.trigger(r);
                    };
                }
            );
        var tc = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (u.proxy = function (t, r) {
            var s, a, l;
            if (
                (typeof r == "string" && ((s = t[r]), (r = t), (t = s)), !!D(t))
            )
                return (
                    (a = h.call(arguments, 2)),
                    (l = function () {
                        return t.apply(r || this, a.concat(h.call(arguments)));
                    }),
                    (l.guid = t.guid = t.guid || u.guid++),
                    l
                );
        }),
            (u.holdReady = function (t) {
                t ? u.readyWait++ : u.ready(!0);
            }),
            (u.isArray = Array.isArray),
            (u.parseJSON = JSON.parse),
            (u.nodeName = k),
            (u.isFunction = D),
            (u.isWindow = K),
            (u.camelCase = je),
            (u.type = X),
            (u.now = Date.now),
            (u.isNumeric = function (t) {
                var r = u.type(t);
                return (
                    (r === "number" || r === "string") &&
                    !isNaN(t - parseFloat(t))
                );
            }),
            (u.trim = function (t) {
                return t == null ? "" : (t + "").replace(tc, "$1");
            });
        var nc = e.jQuery,
            rc = e.$;
        return (
            (u.noConflict = function (t) {
                return (
                    e.$ === u && (e.$ = rc),
                    t && e.jQuery === u && (e.jQuery = nc),
                    u
                );
            }),
            typeof i > "u" && (e.jQuery = e.$ = u),
            u
        );
    });
})(_u);
var vu = _u.exports;
const jg = mu(vu);
var yu = { exports: {} };
(function (n) {
    (function (e) {
        e(["jquery"], function (i) {
            return (function () {
                var o,
                    c,
                    h = 0,
                    p = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning",
                    },
                    _ = {
                        clear: D,
                        remove: K,
                        error: S,
                        getContainer: E,
                        info: I,
                        options: {},
                        subscribe: V,
                        success: F,
                        version: "2.1.4",
                        warning: N,
                    },
                    T;
                return _;
                function S(k, $, ne) {
                    return te({
                        type: p.error,
                        iconClass: u().iconClasses.error,
                        message: k,
                        optionsOverride: ne,
                        title: $,
                    });
                }
                function E(k, $) {
                    return (
                        k || (k = u()),
                        (o = i("#" + k.containerId)),
                        o.length || ($ && (o = J(k))),
                        o
                    );
                }
                function I(k, $, ne) {
                    return te({
                        type: p.info,
                        iconClass: u().iconClasses.info,
                        message: k,
                        optionsOverride: ne,
                        title: $,
                    });
                }
                function V(k) {
                    c = k;
                }
                function F(k, $, ne) {
                    return te({
                        type: p.success,
                        iconClass: u().iconClasses.success,
                        message: k,
                        optionsOverride: ne,
                        title: $,
                    });
                }
                function N(k, $, ne) {
                    return te({
                        type: p.warning,
                        iconClass: u().iconClasses.warning,
                        message: k,
                        optionsOverride: ne,
                        title: $,
                    });
                }
                function D(k, $) {
                    var ne = u();
                    o || E(ne), ue(k, ne, $) || H(ne);
                }
                function K(k) {
                    var $ = u();
                    if ((o || E($), k && i(":focus", k).length === 0)) {
                        pe(k);
                        return;
                    }
                    o.children().length && o.remove();
                }
                function H(k) {
                    for (var $ = o.children(), ne = $.length - 1; ne >= 0; ne--)
                        ue(i($[ne]), k);
                }
                function ue(k, $, ne) {
                    var ye = ne && ne.force ? ne.force : !1;
                    return k && (ye || i(":focus", k).length === 0)
                        ? (k[$.hideMethod]({
                              duration: $.hideDuration,
                              easing: $.hideEasing,
                              complete: function () {
                                  pe(k);
                              },
                          }),
                          !0)
                        : !1;
                }
                function J(k) {
                    return (
                        (o = i("<div/>")
                            .attr("id", k.containerId)
                            .addClass(k.positionClass)),
                        o.appendTo(i(k.target)),
                        o
                    );
                }
                function X() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        closeMethod: !1,
                        closeDuration: !1,
                        closeEasing: !1,
                        closeOnHover: !0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning",
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        escapeHtml: !1,
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        closeClass: "toast-close-button",
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1,
                        progressClass: "toast-progress",
                        rtl: !1,
                    };
                }
                function ce(k) {
                    c && c(k);
                }
                function te(k) {
                    var $ = u(),
                        ne = k.iconClass || $.iconClass;
                    if (
                        (typeof k.optionsOverride < "u" &&
                            (($ = i.extend($, k.optionsOverride)),
                            (ne = k.optionsOverride.iconClass || ne)),
                        lt($, k))
                    )
                        return;
                    h++, (o = E($, !0));
                    var ye = null,
                        W = i("<div/>"),
                        Se = i("<div/>"),
                        Ve = i("<div/>"),
                        Te = i("<div/>"),
                        ge = i($.closeHtml),
                        Ee = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null,
                        },
                        ve = {
                            toastId: h,
                            state: "visible",
                            startTime: new Date(),
                            options: $,
                            map: k,
                        };
                    return (
                        xt(),
                        Ze(),
                        ct(),
                        ce(ve),
                        $.debug && console && console.log(ve),
                        W
                    );
                    function at(se) {
                        return (
                            se == null && (se = ""),
                            se
                                .replace(/&/g, "&amp;")
                                .replace(/"/g, "&quot;")
                                .replace(/'/g, "&#39;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;")
                        );
                    }
                    function xt() {
                        We(), Nt(), et(), Dt(), Re(), Wt(), yt(), ut();
                    }
                    function ut() {
                        var se = "";
                        switch (k.iconClass) {
                            case "toast-success":
                            case "toast-info":
                                se = "polite";
                                break;
                            default:
                                se = "assertive";
                        }
                        W.attr("aria-live", se);
                    }
                    function ct() {
                        $.closeOnHover && W.hover(kn, on),
                            !$.onclick && $.tapToDismiss && W.click(He),
                            $.closeButton &&
                                ge &&
                                ge.click(function (se) {
                                    se.stopPropagation
                                        ? se.stopPropagation()
                                        : se.cancelBubble !== void 0 &&
                                          se.cancelBubble !== !0 &&
                                          (se.cancelBubble = !0),
                                        $.onCloseClick && $.onCloseClick(se),
                                        He(!0);
                                }),
                            $.onclick &&
                                W.click(function (se) {
                                    $.onclick(se), He();
                                });
                    }
                    function Ze() {
                        W.hide(),
                            W[$.showMethod]({
                                duration: $.showDuration,
                                easing: $.showEasing,
                                complete: $.onShown,
                            }),
                            $.timeOut > 0 &&
                                ((ye = setTimeout(He, $.timeOut)),
                                (Ee.maxHideTime = parseFloat($.timeOut)),
                                (Ee.hideEta =
                                    new Date().getTime() + Ee.maxHideTime),
                                $.progressBar &&
                                    (Ee.intervalId = setInterval(Lt, 10)));
                    }
                    function We() {
                        k.iconClass && W.addClass($.toastClass).addClass(ne);
                    }
                    function yt() {
                        $.newestOnTop ? o.prepend(W) : o.append(W);
                    }
                    function Nt() {
                        if (k.title) {
                            var se = k.title;
                            $.escapeHtml && (se = at(k.title)),
                                Se.append(se).addClass($.titleClass),
                                W.append(Se);
                        }
                    }
                    function et() {
                        if (k.message) {
                            var se = k.message;
                            $.escapeHtml && (se = at(k.message)),
                                Ve.append(se).addClass($.messageClass),
                                W.append(Ve);
                        }
                    }
                    function Dt() {
                        $.closeButton &&
                            (ge.addClass($.closeClass).attr("role", "button"),
                            W.prepend(ge));
                    }
                    function Re() {
                        $.progressBar &&
                            (Te.addClass($.progressClass), W.prepend(Te));
                    }
                    function Wt() {
                        $.rtl && W.addClass("rtl");
                    }
                    function lt(se, Oe) {
                        if (se.preventDuplicates) {
                            if (Oe.message === T) return !0;
                            T = Oe.message;
                        }
                        return !1;
                    }
                    function He(se) {
                        var Oe =
                                se && $.closeMethod !== !1
                                    ? $.closeMethod
                                    : $.hideMethod,
                            $n =
                                se && $.closeDuration !== !1
                                    ? $.closeDuration
                                    : $.hideDuration,
                            tt =
                                se && $.closeEasing !== !1
                                    ? $.closeEasing
                                    : $.hideEasing;
                        if (!(i(":focus", W).length && !se))
                            return (
                                clearTimeout(Ee.intervalId),
                                W[Oe]({
                                    duration: $n,
                                    easing: tt,
                                    complete: function () {
                                        pe(W),
                                            clearTimeout(ye),
                                            $.onHidden &&
                                                ve.state !== "hidden" &&
                                                $.onHidden(),
                                            (ve.state = "hidden"),
                                            (ve.endTime = new Date()),
                                            ce(ve);
                                    },
                                })
                            );
                    }
                    function on() {
                        ($.timeOut > 0 || $.extendedTimeOut > 0) &&
                            ((ye = setTimeout(He, $.extendedTimeOut)),
                            (Ee.maxHideTime = parseFloat($.extendedTimeOut)),
                            (Ee.hideEta =
                                new Date().getTime() + Ee.maxHideTime));
                    }
                    function kn() {
                        clearTimeout(ye),
                            (Ee.hideEta = 0),
                            W.stop(!0, !0)[$.showMethod]({
                                duration: $.showDuration,
                                easing: $.showEasing,
                            });
                    }
                    function Lt() {
                        var se =
                            ((Ee.hideEta - new Date().getTime()) /
                                Ee.maxHideTime) *
                            100;
                        Te.width(se + "%");
                    }
                }
                function u() {
                    return i.extend({}, X(), _.options);
                }
                function pe(k) {
                    o || (o = E()),
                        !k.is(":visible") &&
                            (k.remove(),
                            (k = null),
                            o.children().length === 0 &&
                                (o.remove(), (T = void 0)));
                }
            })();
        });
    })(function (e, i) {
        n.exports ? (n.exports = i(vu)) : (window.toastr = i(window.jQuery));
    });
})(yu);
var Fg = yu.exports;
const Eu = mu(Fg);
window.$ = window.jQuery = jg;
window.toastr = Eu;
Eu.options = { newestOnTop: !0, closeButton: !0, closeDuration: 3e3 };
