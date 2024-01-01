import { cva, VariantProps } from 'class-variance-authority'
import { AnchorHTMLAttributes } from 'react'

const buttonLinkVariants = cva(
  'py-[18px] px-16 block w-fit rounded-full text-white text-24-700 transition-colors',
  {
    variants: {
      preset: {
        accent: 'bg-accent hover:bg-accent-hover',
        primary: 'bg-primary hover:bg-primary-hover',
      },
      disabled: {
        true: 'bg-gray cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      preset: 'accent',
      disabled: false,
    },
  },
)

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'disabled'>,
    VariantProps<typeof buttonLinkVariants> {
  text: string
  href: string
}

export const ButtonLink = ({
  text,
  disabled,
  preset,
  className,
  href,
  ...props
}: ButtonLinkProps) => {
  return (
    <a href={href} className={buttonLinkVariants({ preset, disabled, className })} {...props}>
      {text}
    </a>
  )
}
