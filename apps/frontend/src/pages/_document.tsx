import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-gray-900 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
