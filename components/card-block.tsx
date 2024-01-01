import { Card } from '@/components/card'
import { BenefitsCard } from '@/types/benefits'

interface CardBlockProps {
  cards: BenefitsCard[]
  title: string
}

export const CardBlock = ({ cards, title }: CardBlockProps) => {
  return (
    <div>
      <h2 className="text-primary text-48-700 mb-5">{title}</h2>
      <div className="grid-cols-3 grid gap-5">
        {cards.map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key -- it's ok in current case
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
