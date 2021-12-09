import * as vscode from 'vscode'; 
import { TerminalOptions, window, WorkspaceFolder } from 'vscode';

export async function c() {
    const result = await window.showInputBox({
        value: 'npm run start',
        valueSelection: [2, 4],
        placeHolder: 'For example: npm run start or npm i && npm run start',
    });
    openTerminals(result);
}

export function openTerminals(terminalText?: string): void {
    const wsFolders = vscode.workspace.workspaceFolders || [];
    wsFolders.forEach(folder => {
        const terminal = vscode.window.createTerminal(terminalOptions(folder));
        if (terminalText) {
            terminal.sendText(terminalText);
        }
        terminal.show();
    }); 
}

export function terminalOptions(folder: WorkspaceFolder): TerminalOptions {
    return {
        cwd: folder.uri.fsPath,
        name: folder.name
    };
}