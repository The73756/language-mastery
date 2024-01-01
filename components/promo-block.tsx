import Image from 'next/image'
import { Button } from '@/components/shared/button'

interface PromoBlockProps {
  title: string
  subtitle: string
  buttonText: string
  imageUrl: string
}

export const PromoBlock = ({ subtitle, buttonText, title, imageUrl }: PromoBlockProps) => {
  return (
    <div className="relative text-white rounded-3xl overflow-hidden flex px-32 h-[400px] items-center">
      <Image
        className="z-[-1] object-cover absolute inset-0 h-full"
        src={imageUrl}
        alt="Промо изображение"
        width={1592}
        height={400}
      />

      <div className="max-w-screen-sm">
        <h2 className="text-48-700 line-clamp-3 text-ellipsis">{title}</h2>
        <p className="text-32-700 mb-16 line-clamp-2 text-ellipsis">{subtitle}</p>
        <Button text={buttonText} />
      </div>
    </div>
  )
}
