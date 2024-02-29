import { ChampionSkills } from '@/components/ChampionSkills'
import { ChampionSkins } from '@/components/ChampionSkins'
import { DarkFrame } from '@/components/DarkFrame'
import { ImagePlaceholderBlur } from '@/components/ImagePlaceholderBlur'
import { Separator } from '@/components/Separator'
import Image from 'next/image'
import Link from 'next/link'
import { getPlaiceholder } from 'plaiceholder'

interface Champ {
  id: string
  key: number
  name: string
  title: string
  blurb: string
  skins: {
    id: string
    name: string
    num: number
  }[]
  tags: string
  lore: string
  spells: {
    name: string
    description: string
    image: {
      full: string
    }
  }[]
  passive: {
    name: string
    description: string
    image: {
      full: string
    }
  }
}

export default async function Champion({ params }: { params: { id: string } }) {
  function captalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${params.id}.json`
  )
  const json = await res.json()
  const dataList = await json.data
  const champData: Champ = await dataList[params.id]

  return (
    <main className="min-h-dvh flex flex-col items-center mx-auto w-full max-w-5xl px-2 gap-3">
      {/* IMAGE DIV */}
      <div className="relative w-full max-h-[300px]">
        {/* BOTÃO VOLTAR */}
        <Link
          href={'/'}
          className="text-sm sm:text-base p-2 z-[1] focus-visible:ring-2 focus-visible:ring-neutral-100 outline-none absolute top-4 left-4"
        >
          Voltar
        </Link>
        {/* BOTÃO SKINS */}
        <ChampionSkins>
          {champData.skins.map((skin, index) => (
            <div
              key={index}
              className={`keen-slider__slide number-slide${index} w-full h-full`}
            >
              <DarkFrame type="all-sides" />
              <DarkFrame type="to-top" />
              <ImagePlaceholderBlur
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champData.id}_${skin.num}.jpg`}
                alt={skin.name}
                width={834}
                height={469}
                className="w-full h-full object-cover"
              />
              <p className="absolute text-center top-2 left-1/2 -translate-x-1/2">
                {skin.name === 'default' ? 'Padrão' : skin.name}
              </p>
            </div>
          ))}
        </ChampionSkins>
        {/* SPLASH */}
        <ImagePlaceholderBlur
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champData.id}_0.jpg`}
          alt={`${champData.name} splash`}
          width={1280}
          height={720}
          className="w-full max-h-[300px] object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 z-[1] flex flex-col items-center">
          <h1 className="font-medium text-4xl">{champData.name}</h1>
          <p className="text-base">{champData.title}</p>
          <Separator className="mt-2" />
        </div>
        <DarkFrame type="to-top" />
        <DarkFrame type="x-sides" />
      </div>
      {/* INFOS */}
      <div className="flex flex-col gap-2 w-full p-4 relative">
        <p className="text-xs xsm:text-sm text-neutral-400 text-center leading-relaxed">
          {champData.lore}
        </p>
        <Separator className="mt-2" />
        <ChampionSkills spells={champData.spells} passive={champData.passive} />
      </div>
    </main>
  )
}
