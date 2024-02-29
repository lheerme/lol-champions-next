'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'

interface ChampionSkinsProps {
  children: ReactNode
}

export function ChampionSkins({ children }: ChampionSkinsProps) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    },
  })

  return (
    <Dialog.Root>
      <Dialog.Trigger className="absolute z-[1] w-12 sm:w-16 text-sm sm:text-base right-4 top-4 flex flex-col items-center p-2 transition-colors focus-visible:ring-2 focus-visible:ring-neutral-100 outline-none">
        Skins
      </Dialog.Trigger>

      <Dialog.Overlay className="inset-0 fixed bg-neutral-950/70 z-[2]" />

      <Dialog.Content className="fixed z-[3] overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[768px] w-full md:h-[60vh] bg-neutral-950 md:rounded-md flex flex-col outline-none">
        <Dialog.Close className="absolute z-[3] right-0 top-0 p-1.5 text-neutral-200 hover:text-neutral-500 transition-colors">
          <X className="size-5 text-neutral-200" />
        </Dialog.Close>
        <div className="navigation-wrapper w-full h-full">
          <div ref={sliderRef} className="keen-slider w-full h-full">
            {children}
          </div>
          {loaded && instanceRef.current && (
            <div className="w-full flex justify-between items-center absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <ChevronLeft
                onClick={(e: unknown) =>
                  // @ts-expect-errorts-ignore
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="size-12 cursor-pointer text-neutral-400"
              />
              <ChevronRight
                onClick={(e: unknown) =>
                  // @ts-expect-errorts-ignore
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="size-12 cursor-pointer text-neutral-400"
              />
            </div>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
