import { cva, VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes } from 'react'

const inputVariants = cva('h-[58px] px-4 text-16-700 rounded-2xl outline-accent', {
  variants: {
    preset: {
      white: 'text-primary placeholder:text-primary bg-white',
      primary: 'bg-primary text-white placeholder:text-white',
    },
  },
  defaultVariants: {
    preset: 'primary',
  },
})

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = ({ disabled, preset, className, ...props }: InputProps) => {
  return <input className={inputVariants({ preset, className })} {...props} />
}
