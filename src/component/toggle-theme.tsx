import { useIsomorphicLayoutEffect } from 'hook/useIsomorphicLayoutEffect'
import { useEffect, useRef } from 'react'
import create from 'zustand'

const useSetting = create((set: any) => ({
  setting: 'none',
  setSetting: (setting: any) => set({ setting })
}))

function update (): void {
  if (
    localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark', 'changing-theme')
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme')
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

function useTheme (): [string, ((setting: any) => any)] {
  const { setting, setSetting } = useSetting()
  const initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme

    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [setting])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage (): void {
      update()
      const theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [setSetting])

  return [setting, setSetting]
}

export function ThemeToggle (): JSX.Element {
  const [setting, setSetting] = useTheme()

  return (
			<>
        <div className="select-none cursor-pointer p-2" onClick={() => setSetting('dark')}>
          {setting === 'light' &&
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_313_22)">
                <path d="M1.125 10.875H4.125C4.74609 10.875 5.25 11.3784 5.25 12C5.25 12.6211 4.74609 13.125 4.125 13.125H1.125C0.501562 13.125 0 12.6234 0 12C0 11.3766 0.501562 10.875 1.125 10.875ZM18.75 12C18.75 11.3784 19.2539 10.875 19.875 10.875H22.875C23.4961 10.875 24 11.3766 24 12C24 12.6211 23.4961 13.125 22.875 13.125H19.875C19.2516 13.125 18.75 12.6234 18.75 12ZM5.63438 16.7719C6.07364 16.3326 6.78609 16.3326 7.22531 16.772C7.66453 17.2114 7.66444 17.9237 7.22509 18.3629L5.104 20.4845C4.66473 20.9237 3.95228 20.9237 3.51259 20.4844C3.07323 20.045 3.07356 19.3327 3.51281 18.8935L5.63438 16.7719ZM18.3656 7.22812C17.9264 7.66748 17.2139 7.66739 16.7747 7.22805C16.3352 6.78869 16.3356 6.07633 16.7749 5.63711L18.8953 3.51469C19.3336 3.07547 20.0461 3.07547 20.4853 3.51469C20.925 3.95391 20.9245 4.66641 20.4853 5.10469L18.3656 7.22812ZM18.3656 16.7719L20.4872 18.8934C20.9265 19.3327 20.9267 20.0452 20.4874 20.4844C20.048 20.9237 19.3357 20.9237 18.896 20.4844L16.7749 18.3629C16.3355 17.9236 16.3352 17.2112 16.7747 16.772C17.2125 16.3359 17.925 16.3359 18.3656 16.7719ZM5.63438 7.22812L3.51281 5.10703C3.07355 4.66767 3.07322 3.95531 3.51259 3.51609C3.95197 3.07688 4.66478 3.07664 5.104 3.51602L7.22509 5.63711C7.66445 6.07647 7.66469 6.78883 7.22531 7.22805C6.7875 7.66406 6.075 7.66406 5.63438 7.22812ZM12 18.75C12.6211 18.75 13.125 19.2539 13.125 19.875V22.875C13.125 23.4984 12.6234 24 12 24C11.3784 24 10.875 23.4961 10.875 22.875V19.875C10.875 19.2516 11.3766 18.75 12 18.75ZM12 5.25C11.3784 5.25 10.875 4.74609 10.875 4.125V1.125C10.875 0.503906 11.3766 0 12 0C12.6234 0 13.125 0.503906 13.125 1.125V4.125C13.125 4.74844 12.6234 5.25 12 5.25ZM12 7.5C14.5266 7.5 16.5 9.47344 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51469 16.5 7.5 14.4853 7.5 12C7.5 9.47344 9.51562 7.5 12 7.5ZM12 14.25C13.2422 14.25 14.25 13.2422 14.25 12C14.25 10.7578 13.2422 9.75 12 9.75C10.7578 9.75 9.75 10.7592 9.75 12C9.75 13.2408 10.7578 14.25 12 14.25Z" fill="#3B4354"/>
              </g>
              <defs>
                <clipPath id="clip0_313_22">
                  <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
                </clipPath>
              </defs>
            </svg>
          }
        </div>
				<div className=" dark:inline select-none cursor-pointer p-2" onClick={() => setSetting('light')}>
          {setting === 'dark' &&
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 12C1.5 6.19687 6.20156 1.5 11.9906 1.5C12.5231 1.5 13.3828 1.57819 13.9078 1.67559C14.3586 1.75889 14.4586 2.36138 14.0615 2.58684C11.4844 4.05469 9.9 6.77813 9.9 9.74063C9.9 14.8828 14.5739 18.7875 19.6641 17.8172C20.1122 17.7326 20.4272 18.2542 20.138 18.6117C18.1828 21.0281 15.225 22.5 11.9906 22.5C6.19219 22.5 1.5 17.7937 1.5 12Z" fill="white"/>
            </svg>
          }
        </div>
			</>
  )
}
