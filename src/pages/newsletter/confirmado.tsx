import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ThemeToggle } from '../../component/toggle-theme'
import { Title } from '../../component/Title'
import Confetti from 'react-confetti'

const Confirmado: React.FC = () => {
  const [confettiWidth, setConfettiWidth] = useState(0)
  const [confettiHeight, setConfettiHeight] = useState(0)

  useEffect(() => {
    function handleResize (): void {
      setConfettiWidth(window.screen.width)
      setConfettiHeight(window.screen.height)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <style>{`
        body {
          overflow-x: hidden;
          overflow-y: hidden;
        }
      `}</style>

    <div className={'bg-white dark:bg-[#18181B] '}>
      <Title> Confirmado na Newsletter</Title>
      <div className="pl-3 pr-3">
        <Confetti
          width={confettiWidth}
          height={confettiHeight}
          recycle={false}
          numberOfPieces={800}
          tweenDuration={15000}
          gravity={0.15}
        />
      </div>
      <div className={'grid place-content-center min-h-screen max-w-xl mx-auto px-4 relative'}>
        <div className={'absolute top-8 right-8 z-50'}>
          <ThemeToggle />
        </div>
        <div className={'flex justify-center items-center'}>
          <div className='relative w-[150px] h-[155px] select-none '>
            <Image src={'/profile.png'} layout={'fill'} alt={'Foto do Lenderson Macedo'}/>
          </div>

        </div>

        <div className={'text-center mt-8 select-none'}>
          <h2 className={'text-3xl font-bold dark:text-[#59FFF5] text-[#59AFFF]'}>
            Agora sim! 👏👏👏👏👏
          </h2>
          <p className={'mt-4 text-xl'}>
            Vou ter enviar um email sempre que sair uma novidade! Tenho certeza que você vai gostar 🤩, até logo!
          </p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Confirmado
