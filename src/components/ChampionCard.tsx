import Image from 'next/image'
import assassinIcon from '@/assets/assassin-icon.webp'
import fighterIcon from '@/assets/fighter-icon.webp'
import mageIcon from '@/assets/mage-icon.webp'
import marksmanIcon from '@/assets/marksman-icon.webp'
import supportIcon from '@/assets/support-icon.webp'
import tankIcon from '@/assets/tank-icon.webp'
import Link from 'next/link'
import { DarkFrame } from './DarkFrame'
import { ImagePlaceholderBlur } from './ImagePlaceholderBlur'

const roleIcons: { [index: string]: any } = {
  Assassin: { icon: assassinIcon, name: 'Assassino' },
  Fighter: { icon: fighterIcon, name: 'Lutador' },
  Mage: { icon: mageIcon, name: 'Mago' },
  Marksman: { icon: marksmanIcon, name: 'Atirador' },
  Support: { icon: supportIcon, name: 'Suporte' },
  Tank: { icon: tankIcon, name: 'Tanque' },
}

interface ChampionCardProps {
  name: string
  id: string
  tags: string[]
}

export function ChampionCard({ name, id, tags }: ChampionCardProps) {
  function handleIdCase(id: string) {
    if (id !== 'FiddleSticks') {
      return id
    }

    return 'Fiddlesticks'
  }

  return (
    <Link
      href={`/${handleIdCase(id)}`}
      className="group w-full max-w-[110px] xsm:max-w-[200px] animate-fade-in-left"
    >
      <div className="bg-neutral-900 px-4 py-2 mt-16 flex flex-col items-center max-w-[110px] xsm:max-w-[200px] h-[200px] xsm:h-[300px] w-full relative shadow-2xl">
        <div className="w-[87%] m-auto h-[200px] xsm:h-[300px] absolute left-0 right-0 -top-4 group-hover:xsm:-top-5 transition-all overflow-hidden">
          <ImagePlaceholderBlur
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
            alt={`${name} image`}
            width={165}
            height={300}
            className="w-full h-auto object-cover scale-105"
          />
          <DarkFrame type="all-sides" />
        </div>
        <DarkFrame type="to-top" />
        <div className="z-10 mt-auto flex flex-col gap-2 items-center w-full">
          <div className="flex justify-around gap-1">
            {tags.map((tag, index) => (
              <div key={index} className="flex flex-col gap-1 items-center">
                <Image
                  src={roleIcons[tag].icon}
                  alt="role icon"
                  className="w-5 xsm:w-6 h-auto"
                  placeholder="blur"
                />
                <span className="text-center text-[0.5rem] xsm:text-xs tracking-wide">
                  {roleIcons[tag].name}
                </span>
              </div>
            ))}
          </div>
          <p className="font-medium text-lg xsm:text-xl text-center tracking-tight">
            {name}
          </p>
        </div>
      </div>
    </Link>
  )
}
