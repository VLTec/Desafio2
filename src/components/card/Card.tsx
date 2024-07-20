import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type CardGenericProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T

export function CardContainer({ className, children }: CardGenericProps) {
  return (
    <div className={cn('mx-auto max-w-md space-y-10 p-6', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children }: CardGenericProps) {
  return <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
}

export function CardDescription({ className, children }: CardGenericProps) {
  return (
    <p className={cn('text-gray-500 dark:text-gray-400', className)}>
      {children}
    </p>
  )
}