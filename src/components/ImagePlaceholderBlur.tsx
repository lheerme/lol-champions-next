import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

interface ImagePlaceholderBlurProps {
  src: string
  alt?: string
  className?: string
  width: number
  height: number
}

export async function ImagePlaceholderBlur({
  src,
  alt,
  className,
  width,
  height,
}: ImagePlaceholderBlurProps) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)

  if (className)
    return (
      <Image
        src={src}
        alt={alt ?? ''}
        width={width}
        height={height}
        className={className}
        placeholder="blur"
        blurDataURL={base64}
      />
    )

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={base64}
    />
  )
}
