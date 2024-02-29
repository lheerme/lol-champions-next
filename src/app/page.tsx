import Image from 'next/image'
import logo from '@/assets/lol-logo.png'
import { SearchBar } from '@/components/SearchBar'
import emote from '@/assets/blitz-emote.webp'
import { ChampionCard } from '@/components/ChampionCard'

interface Champs {
  id: string
  key: number
  name: string
  tags: string[]
}

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string | undefined }
}) {
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion.json'
  )
  const json = await res.json()
  const data = await json
  const dataList = await data.data
  const champList: Champs[] = Object.values(dataList)

  const query = searchParams.search

  const filteredChamps =
    query !== undefined
      ? champList.filter((champ) =>
          champ.name.toLowerCase().includes(query.toLowerCase())
        )
      : champList

  return (
    <main className="mx-auto my-12 max-w-7xl space-y-6 px-5">
      <h1 className="font-medium xsm:text-2xl text-center">
        League of Legends Champions
      </h1>
      {/* <SearchBar /> */}

      {!filteredChamps.length && (
        <div className="w-full flex flex-col items-center space-y-2">
          <Image
            src={emote}
            alt="blitz emote"
            className="animate-shake-rotate"
          />
          <p className="text-lg font-medium">Campeão não encontrado :/</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-y-7 gap-x-6 justify-items-center px-4 pb-14">
        {filteredChamps.map((champ) => {
          if (champ.id === 'Fiddlesticks') {
            return (
              <ChampionCard
                key={champ.key}
                id={'FiddleSticks'}
                name={champ.name}
                tags={champ.tags}
              />
            )
          }

          return (
            <ChampionCard
              key={champ.key}
              id={champ.id}
              name={champ.name}
              tags={champ.tags}
            />
          )
        })}
      </div>
    </main>
  )
}
