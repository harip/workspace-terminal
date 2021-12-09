
import * as vscode from 'vscode'; 
import { TerminalOptions } from 'vscode';

/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
 export function selectTerminal(): Thenable<vscode.Terminal | undefined> {
	interface TerminalQuickPickItem extends vscode.QuickPickItem {
		terminal: vscode.Terminal;
	}
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `name: ${t.name}`,
			terminal: t
		};
	});
	return vscode.window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}

/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
 export function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
	}
	return true;
}

/**
 * Source: https://github.com/microsoft/vscode-extension-samples/tree/ac9bbf2e743ff0a25ebc82095c77b7c0a0fb4914/terminal-sample
 */
 export function colorText(text: string): string {
	let output = '';
	let colorIndex = 1;
	for (let i = 0; i < text.length; i++) {
		const char = text.charAt(i);
		if (char === ' ' || char === '\r' || char === '\n') {
			output += char;
		} else {
			output += `\x1b[3${colorIndex++}m${text.charAt(i)}\x1b[0m`;
			if (colorIndex > 6) {
				colorIndex = 1;
			}
		}
	}
	return output;
}

export function terminalOptions(folder: vscode.WorkspaceFolder, terminalText? : string): TerminalOptions {
    const options: vscode.TerminalOptions = {
        cwd: folder.uri.fsPath,
        name: folder.name
    };    
    return Object.assign(options, terminalText ? { message: terminalText } : null);
}