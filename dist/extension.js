(() => {
    "use strict";
    var e = {
            288: (e, t, i) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ViewPanel = void 0;
                const n = i(496);
                class s {
                    static createOrShow(e) {
                        const t = n.window.activeTextEditor ? n.window.activeTextEditor.viewColumn : void 0;
                        if (s.currentPanel) return s.currentPanel._panel.reveal(t), void s.currentPanel._update();
                        const i = n.window.createWebviewPanel(s.viewType, "LaTeX viewer by Saptarshi Dey", t || n.ViewColumn.One, {
                            enableScripts: !0,
                            enableFindWidget: !0,
                            localResourceRoots: [n.Uri.joinPath(e, "media"), n.Uri.joinPath(e, "out/compiled")]
                        });
                        s.currentPanel = new s(i, e)
                    }
                    static kill() {
                        s.currentPanel?.dispose(), s.currentPanel = void 0
                    }
                    static revive(e, t) {
                        s.currentPanel = new s(e, t)
                    }
                    constructor(e, t) {
                        this._disposables = [], this._panel = e, this._extensionUri = t, this._update(), this._panel.onDidDispose((() => this.dispose()), null, this._disposables)
                    }
                    dispose() {
                        for (s.currentPanel = void 0, this._panel.dispose(); this._disposables.length;) {
                            const e = this._disposables.pop();
                            e && e.dispose()
                        }
                    }
                    async _update() {
                        const e = this._panel.webview;
                        this._panel.webview.html = this._getHtmlForWebview(e)
                    }
                    _getHtmlForWebview(e) {
                        const t = n.Uri.joinPath(this._extensionUri, "media", "reset.css"),
                            i = n.Uri.joinPath(this._extensionUri, "media", "vscode.css"),
                            s = e.asWebviewUri(t),
                            a = e.asWebviewUri(i),
                            r = e.asWebviewUri(n.Uri.joinPath(this._extensionUri, "media", "main.js"));
                        return `<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">    \n        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${e.cspSource};">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<link href="${s}" rel="stylesheet">\n\t\t\t\t<link href="${a}" rel="stylesheet">\n        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>\n\t\t\t</head>\n      <body>\n        <h1 style='width: 100%; text-align: center;'><u>LaTeX Viewer</u></h1>\n        <textarea id="mathInput" rows="5" style="width: 100%;"></textarea>\n    <h1 id="math" style='width: fit-content; margin: auto;'></h1>\n    <script type="text/javascript" src="${r}"><\/script>\n\t\t\t</body>\n\t\t\t</html>`
                    }
                }
                t.ViewPanel = s, s.viewType = "swiper"
            },
            496: e => {
                e.exports = require("vscode")
            }
        },
        t = {};

    function i(n) {
        var s = t[n];
        if (void 0 !== s) return s.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, i), a.exports
    }
    var n = {};
    (() => {
        var e = n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.deactivate = e.activate = void 0;
        const t = i(496),
            s = i(288);
        e.activate = function(e) {
            e.subscriptions.push(t.commands.registerCommand("latex-viewer.start", (async () => {
                "Yes" === await t.window.showInformationMessage("LaTeX Viewer extension is loaded\nWould you like to start the extension now?", "Yes", "No") && s.ViewPanel.createOrShow(e.extensionUri)
            })))
        }, e.deactivate = function() {}
    })(), module.exports = n
})();