// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 
import { closeAllTerminals, openTerminals, openTerminalsWithCommand, runCommand } from './lib/terminal'; 
import { ensureTerminalExists, selectTerminal } from './lib/terminal-helper';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.open', async () => {
		openTerminals(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.openWithCommand', async () => {
		await openTerminalsWithCommand();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.runCommand', async () => {
		await runCommand();
	}));	
 
	context.subscriptions.push(vscode.commands.registerCommand('workspaceTerminal.closeAllTerminals', () => {
		closeAllTerminals();
	}));
}  

// this method is called when your extension is deactivated
export function deactivate() {} 