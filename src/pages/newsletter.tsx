import Image from 'next/image'
import React from 'react'

const Newsletter: React.FC = () => {
  const userCount = 1020

  return (
		<div className={'grid place-content-center min-h-screen max-w-xl mx-auto px-4 '}>
			<div className={'flex justify-center items-center'}>
				<div className='relative w-[150px] h-[155px] select-none '>
					<Image src={'/profile.png'} layout={'fill'} alt={'Foto do Lenderson Macedo'}/>
				</div>
			</div>

			<div className={'text-center mt-8'}>
				<h2 className={'text-3xl font-bold'}>
					Novidades e curiosidades para quem não quer <span>perder tempo</span> procurando!
				</h2>
				<p className={'mt-4 text-xl'}>
					Se una a mais de {userCount} pessoas:
				</p>
			</div>
			<NewsletterForm action={'https://dashboard.mailerlite.com/forms/167385/67769275868251363/share'} />
		</div>
  )
}

export default Newsletter

const NewsletterForm: React.FC<{ action: string }> = ({ action }) => {
  return (
		<form action={action} method="post" className="flex flex-col flex-wrap w-full mx-auto max-w-[400px]">
			<div className="px-2 grow-[9999] mt-8 ">
				<div className="group relative">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
						className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
					>
						<path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
						<path d="m6 7 6 5 6-5" />
					</svg>
					<input
						name="email_address"
						type="email"
						required
						aria-label="Email"
						className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
						placeholder="Digite seu email aqui!"
					/>
				</div>
			</div>
			<div className="px-2 grow flex mt-4">
				<button
					type="submit"
					className="bg-[#2083A7] flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700 animated"
				>
					Inscrever-se
				</button>
			</div>
		</form>
  )
}
