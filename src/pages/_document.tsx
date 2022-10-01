import clsx from 'clsx'
import NextDocument, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext ) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en" className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
				<Head>
					<meta name="apple-mobile-web-app-title" content="Lenderson Macedo" />
					<meta name="application-name" content="Lenderson Macedo" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="theme-color" content="#2083A7" />
					<script
						dangerouslySetInnerHTML={{
							__html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#2083A7')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
						}}
					/>
				</Head>
				<body
					className={clsx('antialiased text-slate-500 dark:text-slate-400')}
				>
				<Main />
				<NextScript />
				<script> </script>
				</body>
			</Html>
		)
	}
}
