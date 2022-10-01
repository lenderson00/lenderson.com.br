import clsx from 'clsx'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/dist/pages/_document'
import Script from 'next/script'

export default class Document extends NextDocument {
  static async getInitialProps (ctx: DocumentContext): Promise<any> {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  TAG_MANAGER_CODE = 'GTM-NJG5F9G'

  render (): JSX.Element {
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
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('theme', 'dark')
                  } else {
                    localStorage.setItem('theme', 'light')
                  }
                } catch (_) {}
                `
						}}
					/>
          <Script id={'google-tag-manager'} strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${this.TAG_MANAGER_CODE}');`
          }} />
				</Head>
				<body
					className={clsx('antialiased text-slate-500 dark:text-slate-400')}
				>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${this.TAG_MANAGER_CODE}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
				<Main />
				<NextScript />
				<script> </script>
				</body>
			</Html>
    )
  }
}
