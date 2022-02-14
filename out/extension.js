"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const terminal_1 = require("./lib/terminal");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.open', async () => {
        (0, terminal_1.openTerminals)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.openWithCommand', async () => {
        await (0, terminal_1.openTerminalsWithCommand)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.runCommand', async () => {
        await (0, terminal_1.runCommand)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.closeAllTerminals', () => {
        (0, terminal_1.closeAllTerminals)();
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map