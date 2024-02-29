import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ChampionSkillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string
  selected: boolean
  passive?: string
}

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUPwMAAQAA5U2HxkMAAAAASUVORK5CYII='

export function ChampionSkill(props: ChampionSkillProps) {
  return (
    <button
      className={twMerge(
        'size-10 xsm:size-12 outline-none hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-neutral-950 transition-shadow focus-visible:ring-2 focus-visible:ring-neutral-200',
        props.selected &&
          'ring-2 ring-neutral-200 hover:ring-neutral-200 ring-offset-4 ring-offset-neutral-950'
      )}
      {...props}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/${
          props.passive === 'true' ? 'passive' : 'spell'
        }/${props.url}`}
        alt=""
        width={48}
        height={48}
        className="w-full"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </button>
  )
}
