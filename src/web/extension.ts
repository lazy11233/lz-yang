import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	console.log('加载中');
	let disposable = vscode.commands.registerCommand('lz-yang.start', () => {
		vscode.window.showInformationMessage('开始链接yang');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
