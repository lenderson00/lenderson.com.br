import Image from 'next/image'
import React from 'react'
import { ThemeToggle } from '../../component/toggle-theme'
import { Title } from '../../component/Title'
import { useRouter } from 'next/router'

const Confirmar: React.FC = () => {
  const router = useRouter()

  const { email } = router.query
  return (
    <div className={'bg-white dark:bg-[#18181B] '}>
      <Title>Confirme sua Inscrição na Newsletter</Title>
      <div className={'grid place-content-center min-h-screen max-w-xl mx-auto px-4 relative'}>
        <div className={'absolute top-8 right-8'}>
          <ThemeToggle />
        </div>
        <div className={'flex justify-center items-center'}>
          <div className='relative w-[150px] h-[155px] select-none '>
            <Image src={'/profile.png'} layout={'fill'} alt={'Foto do Lenderson Macedo'}/>
          </div>
        </div>
        <div className={'text-center mt-8 select-none'}>
          <h2 className={'text-3xl font-bold dark:text-white'}>
            Confira seu email: <br /> <span className={'font-bold dark:text-[#59FFF5] text-[#59AFFF]'}>{email}</span>
          </h2>
          <p className={'mt-4 text-lg'}>
            Inclusive a  <span className={'font-bold dark:text-[#59FFF5] text-[#59AFFF]'}> Caixa de Spam </span>, para ativar e confirmar sua inscrição.          </p>
        </div>
      </div>
    </div>
  )
}

export default Confirmar
