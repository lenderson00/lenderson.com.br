import Head from 'next/head'

type Props = {
  image?: string
}
export const SEO: React.FC<Props> = ({ image }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="title" content="Lenderson Macedo" />
      <meta name="description"
          content="Programador, Designer e Curioso Profissional" />
      <meta name="author" content="Lenderson Macedo" />
      <meta name="keywords"
          content="Lenderson Macedo, Lenderson, Designer, Programador, " />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="pt-br" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#59AFFF" />

      <meta itemProp="name" content="Lenderson Macedo" />
      <meta itemProp="description"
          content="Programador, Designer e Curioso Profissional" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Lenderson Macedo" />
      <meta name="twitter:description"
          content="Programador, Designer e Curioso Profissional" />
      <meta name="twitter:site" content="Lenderson Macedo" />
      <meta name="twitter:creator" content="Lenderson Macedo" />

      <meta name="og:title" content="Lenderson Macedo" />
      <meta name="og:description"
          content="Programador, Designer e Curioso Profissional" />

      <meta name="og:url" content="https://lenderson.com.br/" />
      <meta name="og:site_name" content="Lenderson Macedo" />
      <meta name="og:locale" content="pt_br" />
      <meta name="og:type" content="website" />

      <link rel="icon" href="profile.png" />
      <link rel="apple-touch-icon" href="profile.png" />

      <meta name="image" content={image} />
      <meta itemProp="image" content={image} />
      <meta name="twitter:image:src" content={image} />
      <meta name="og:image" content={image} />
      <title></title>
    </Head>
  )
}
