import { ExtensionContext, services, LanguageClient } from 'coc.nvim'

export async function activate(context: ExtensionContext): Promise<void> {
  const serverOptions = {
    command: 'haskell-language-server-wrapper',
    args: ['--lsp'],
  };
  const clientOptions = {
    documentSelector: ['hs', 'lhs', 'haskell', 'haskell.spec'],
    rootPatterns: ['.stack.yaml', '.hie-bios', 'BUILD.bazel', 'cabal.config', 'package.yaml'],
  };
  const client = new LanguageClient(
    'coc-hls', // the id
    'coc-hls', // the name of the language server
    serverOptions,
    clientOptions
  );
  context.subscriptions.push(services.registLanguageClient(client))
}
