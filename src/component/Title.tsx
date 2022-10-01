import Head from 'next/head'
import React from 'react'

type TitleProps = {
  children?: React.ReactNode
  suffix?: string
}

export const Title: React.FC<TitleProps> = ({ suffix, children }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const title = `${typeof children === 'string' && children} ${(typeof suffix === 'string') ? ` | ${suffix}` : ''}`

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:name" content={title}/>
      <meta key="og:title" name="og:name" content={title}/>
    </Head>
  )
}
