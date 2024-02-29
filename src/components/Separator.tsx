import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function Separator(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props

  return (
    <div
      className={twMerge('w-full h-px bg-neutral-800 relative', className)}
      {...rest}
    >
      <div className="absolute bottom-0 top-0 left-0 w-1/2 bg-gradient-to-r from-neutral-950 to-black/0 pointer-events-none" />
      <div className="absolute bottom-0 top-0 right-0 w-1/2 bg-gradient-to-l from-neutral-950 to-black/0 pointer-events-none" />
    </div>
  )
}
