interface DarkFrameProps {
  type: 'to-top' | 'x-sides' | 'all-sides'
}

export function DarkFrame({ type }: DarkFrameProps) {
  if (type === 'to-top') {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-neutral-950 to-black/0 pointer-events-none" />
    )
  }

  if (type === 'x-sides') {
    return (
      <>
        <div className="absolute bottom-0 top-0 left-0 w-1/5 bg-gradient-to-r from-neutral-950 to-black/0 pointer-events-none" />
        <div className="absolute bottom-0 top-0 right-0 w-1/5 bg-gradient-to-l from-neutral-950 to-black/0 pointer-events-none" />
      </>
    )
  }

  if (type === 'all-sides') {
    return (
      <>
        <div className="absolute bottom-0 top-0 left-0 w-1/12 bg-gradient-to-r from-neutral-950 to-black/0 pointer-events-none" />
        <div className="absolute bottom-0 top-0 right-0 w-1/12 bg-gradient-to-l from-neutral-950 to-black/0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-neutral-950 to-black/0 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-neutral-950 to-black/0 pointer-events-none" />
      </>
    )
  }
}
