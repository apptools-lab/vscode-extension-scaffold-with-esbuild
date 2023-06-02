import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "appworks-demo" is now active!');

	let disposable = vscode.commands.registerCommand('appworks-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from @appworks/demo!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
