import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface AdminBlockWrapperProps {
  className?: string
  title: string
}

export const AdminBlockWrapper = ({
  className,
  title,
  children,
}: PropsWithChildren<AdminBlockWrapperProps>) => {
  return (
    <div className={clsx(['px-10 w-full py-5 bg-light-blue rounded-5', className])}>
      <h3 className="text-32-700 mb-3 text-primary">{title}</h3>

      {children}
    </div>
  )
}
