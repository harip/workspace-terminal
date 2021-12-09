"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalOptions = exports.openTerminals = exports.c = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
async function c() {
    const result = await vscode_1.window.showInputBox({
        value: 'npm run start',
        valueSelection: [2, 4],
        placeHolder: 'For example: npm run start or npm i && npm run start',
    });
    openTerminals(result);
}
exports.c = c;
function openTerminals(terminalText) {
    const wsFolders = vscode.workspace.workspaceFolders || [];
    wsFolders.forEach(folder => {
        const terminal = vscode.window.createTerminal(terminalOptions(folder));
        if (terminalText) {
            terminal.sendText(terminalText);
        }
        terminal.show();
    });
}
exports.openTerminals = openTerminals;
function terminalOptions(folder) {
    return {
        cwd: folder.uri.fsPath,
        name: folder.name
    };
}
exports.terminalOptions = terminalOptions;
//# sourceMappingURL=terminalWithCommand.js.map