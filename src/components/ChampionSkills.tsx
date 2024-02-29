'use client'

import { useState } from 'react'
import { ChampionSkill } from './ChampionSkill'

interface ChampionSkillsProps {
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

export function ChampionSkills({ spells, passive }: ChampionSkillsProps) {
  const [currentSkill, setCurrentSkill] = useState({
    name: passive.name,
    desc: passive.description,
  })

  function handleSkill(name: string, desc: string) {
    setCurrentSkill({ name, desc })
  }

  return (
    <div className="space-y-5 mt-6">
      <div className="w-full flex items-center justify-evenly">
        <ChampionSkill
          onClick={() => handleSkill(passive.name, passive.description)}
          type="button"
          url={passive.image.full}
          passive={'true'}
          selected={currentSkill.name === passive.name}
        />
        {spells.map((spell, index) => (
          <ChampionSkill
            key={index}
            onClick={() => handleSkill(spell.name, spell.description)}
            type="button"
            url={spell.image.full}
            selected={currentSkill.name === spell.name}
          />
        ))}
      </div>
      {/* eslint-disable-next-line react/no-danger-with-children */}
      <p className="text-lg">{currentSkill.name}</p>
      <p
        dangerouslySetInnerHTML={{ __html: `${currentSkill.desc}` }}
        className="text-xs xsm:text-sm text-neutral-400 leading-relaxed"
      />
    </div>
  )
}
