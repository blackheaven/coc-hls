import { ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const serverOptions = {
    command: 'haskell-language-server-wrapper',
    args: ['--lsp'],
  };
  const clientOptions = {
    documentSelector: ['hs', 'lhs', 'haskell', 'haskell.spec'],
    initializationOptions: workspace.getConfiguration().get('hls'),
  };
  const client = new LanguageClient(
    'coc-hls', // the id
    'coc-hls', // the name of the language server
    serverOptions,
    clientOptions
  );
  context.subscriptions.push(services.registLanguageClient(client));
}
