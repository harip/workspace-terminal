"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAllTerminals = exports.runCommand = exports.openTerminalsWithCommand = exports.openTerminals = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
const terminal_helper_1 = require("./terminal-helper");
function openTerminals(terminalText) {
    try {
        const wsFolders = vscode.workspace.workspaceFolders || [];
        wsFolders.forEach(folder => {
            const terminal = vscode.window.createTerminal((0, terminal_helper_1.terminalOptions)(folder, terminalText));
            if (terminalText) {
                terminal.sendText(terminalText);
            }
            terminal.show();
        });
    }
    catch (e) {
        console.warn(`failed to open terminals`, e);
    }
}
exports.openTerminals = openTerminals;
async function openTerminalsWithCommand() {
    try {
        const result = await vscode_1.window.showInputBox({
            value: 'npm run start',
            placeHolder: 'For example: npm run start or npm i && npm run start',
        });
        openTerminals(result);
    }
    catch (e) {
        console.warn(`failed to open terminals`, e);
    }
}
exports.openTerminalsWithCommand = openTerminalsWithCommand;
async function runCommand() {
    try {
        if (!(0, terminal_helper_1.ensureTerminalExists)('No open terminals found')) {
            return;
        }
        const result = await vscode_1.window.showInputBox({
            value: 'npm run test',
            placeHolder: 'For example: npm run rebuild && npm run test',
        });
        const terminals = vscode.window.terminals;
        terminals.forEach(terminal => {
            if (terminal && result) {
                terminal.sendText(result);
            }
        });
    }
    catch (e) {
        console.warn(`failed to run command on open terminals`, e);
    }
}
exports.runCommand = runCommand;
function closeAllTerminals() {
    try {
        if ((0, terminal_helper_1.ensureTerminalExists)()) {
            const terminals = vscode.window.terminals;
            terminals.forEach(terminal => {
                if (terminal) {
                    terminal.dispose();
                }
            });
        }
    }
    catch (e) {
        console.warn(`failed to close terminals`, e);
    }
}
exports.closeAllTerminals = closeAllTerminals;
//# sourceMappingURL=terminal.js.map