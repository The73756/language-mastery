import { FormEvent, PropsWithChildren } from 'react'

interface FormWrapperProps {
  title: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export const FormWrapper = ({ title, onSubmit, children }: PropsWithChildren<FormWrapperProps>) => {
  return (
    <form
      className="bg-primary pt-12 pb-10 rounded-5 w-full max-w-[1000px] px-32"
      onSubmit={onSubmit}
    >
      <h1 className="mb-9 text-center text-42-700 text-white">{title}</h1>
      {children}
    </form>
  )
}
