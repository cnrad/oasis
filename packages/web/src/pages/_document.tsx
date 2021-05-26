/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#5C91FC" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/static/favicons/favicon.ico" />
          <meta
            name="Description"
            content="The social platform for developers"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
