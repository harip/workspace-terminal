"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalOptions = exports.colorText = exports.ensureTerminalExists = exports.selectTerminal = void 0;
const vscode = require("vscode");
/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
function selectTerminal() {
    const terminals = vscode.window.terminals;
    const items = terminals.map(t => {
        return {
            label: `name: ${t.name}`,
            terminal: t
        };
    });
    return vscode.window.showQuickPick(items).then(item => {
        return item ? item.terminal : undefined;
    });
}
exports.selectTerminal = selectTerminal;
/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
function ensureTerminalExists() {
    if (vscode.window.terminals.length === 0) {
        vscode.window.showErrorMessage('No active terminals');
        return false;
    }
    return true;
}
exports.ensureTerminalExists = ensureTerminalExists;
/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
function colorText(text) {
    let output = '';
    let colorIndex = 1;
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char === ' ' || char === '\r' || char === '\n') {
            output += char;
        }
        else {
            output += `\x1b[3${colorIndex++}m${text.charAt(i)}\x1b[0m`;
            if (colorIndex > 6) {
                colorIndex = 1;
            }
        }
    }
    return output;
}
exports.colorText = colorText;
function terminalOptions(folder, terminalText) {
    const options = {
        cwd: folder.uri.fsPath,
        name: folder.name
    };
    return Object.assign(options, terminalText ? { message: terminalText } : null);
}
exports.terminalOptions = terminalOptions;
//# sourceMappingURL=terminal-helper.js.map