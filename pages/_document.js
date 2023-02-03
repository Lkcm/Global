import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html>
      <Head>
        <title>Lucas Kroger - Homepage</title>
      </Head>
      <body className="bg-cream dark:bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}