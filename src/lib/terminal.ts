import * as vscode from 'vscode';
import { window } from 'vscode';
import { ensureTerminalExists, selectTerminal, terminalOptions } from './terminal-helper';

export function openTerminals(terminalText?: string): void {
    try {
        const wsFolders = vscode.workspace.workspaceFolders || [];
        wsFolders.forEach(folder => {
            const terminal = vscode.window.createTerminal(terminalOptions(folder, terminalText));
            if (terminalText) {
                terminal.sendText(terminalText);
            }
            terminal.show();
        });
    } catch (e) {
        console.warn(`failed to open terminals`, e);
    }
}

export async function openTerminalsWithCommand() {
    try {
        const result = await window.showInputBox({
            value: 'npm run start',
            placeHolder: 'For example: npm run start or npm i && npm run start',
        });
        openTerminals(result);
    } catch (e) {
        console.warn(`failed to open terminals`, e);
    }
}

export async function runCommand() {
    try {
        if (!ensureTerminalExists('No open terminals found')) {
            return;
        }
        const result = await window.showInputBox({
            value: 'npm run test',
            placeHolder: 'For example: npm run rebuild && npm run test',
        });

        const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
        terminals.forEach(terminal => {
            if (terminal && result) {
                terminal.sendText(result);
            }
        }); 
    } catch (e) {
        console.warn(`failed to run command on open terminals`, e);
    }
}

export function closeAllTerminals() {
    try {
        if (ensureTerminalExists()) {
            const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
            terminals.forEach(terminal => {
                if (terminal) {
                    terminal.dispose();
                }
            });
        }
    } catch (e) {
        console.warn(`failed to close terminals`, e);
    }
}

export async function runFile() {
    try { 
    } catch (e) {
        console.warn(`failed to run command on open terminals`, e);
    }
}