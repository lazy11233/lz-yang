import * as vscode from 'vscode';

const cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('lz-yang.start', () => {
		const panel = vscode.window.createWebviewPanel('lzYangPanel', 'Lazy Yang', vscode.ViewColumn.One, {});

		let iteration = 0;
		const updateWebview = () => {
			const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
			panel.title = cat;
			panel.webview.html = getWebviewContent(cat);
		};
		updateWebview();
		const interval = setInterval(updateWebview, 2000);

		panel.onDidDispose(() => {
			// 当面板关闭时，取消webview内容之后的更新
			clearInterval(interval);
		}, null, context.subscriptions);
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(catImg: keyof typeof cats): string {
	return `
			<!DOCTYPE html>
			<html lang="en">
			<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Cat Coding</title>
			</head>
			<body>
					<img src="${cats[catImg]}" width="300" />
			</body>
			</html>
	`;
}

export function deactivate() {}
