import clsx from 'clsx'
import Image from 'next/image'
import { ButtonLink } from '@/components/shared/button-link'

interface TextBlockProps {
  imageUrl: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  text: string
  direction: 'left' | 'right'
}

export const TextBlock = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
  text,
  direction,
}: TextBlockProps) => {
  const textArray = text.split('/n')

  return (
    <div>
      <h2 className="text-48-700 text-primary mb-5">{title}</h2>
      <div className={clsx(['flex gap-8', direction === 'right' && 'flex-row-reverse'])}>
        <Image
          className="rounded-5"
          src={imageUrl}
          alt={'изображение для ' + title}
          width={512}
          height={512}
        />

        <div className="flex flex-col">
          <h3 className="text-26-700 mb-6 text-primary">{subtitle}</h3>
          <div className="flex flex-col gap-4 text-24-400 text-primary">
            {textArray.map((text, index) => (
              // eslint-disable-next-line react/no-array-index-key -- it's ok in current case
              <p key={index}>{text}</p>
            ))}
          </div>
          <ButtonLink className="mt-auto" text={buttonText} href={buttonLink} />
        </div>
      </div>
    </div>
  )
}
