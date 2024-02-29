'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export function SearchBar() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const router = useRouter()
  const [inputValue, setInputValue] = useState(search || '')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const query = event.target.value
    query !== '' ? router.push(`/?search=${query}`) : router.push(`/`)
    setInputValue(query)
  }

  return (
    <form className="w-full space-y-3">
      <div className="flex items-center gap-3">
        <label htmlFor="search">
          <Search className="size-5 text-neutral-500" />
        </label>
        <input
          type="text"
          id="search"
          autoComplete="off"
          value={inputValue}
          placeholder="Busque um campeão..."
          className="w-full bg-transparent text-xl tracking-tight placeholder:text-neutral-500 placeholder:font-medium outline-none"
          onChange={handleInputChange}
        />
      </div>
      <div className="h-px bg-neutral-700" />
    </form>
  )
}
