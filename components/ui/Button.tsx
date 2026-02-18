import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-inter font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl'

  const variantClasses = {
    primary: 'bg-rose-fonce text-white hover:bg-or-rose focus:ring-rose-fonce shadow-soft hover:shadow-hover',
    secondary: 'bg-white text-charbon border-2 border-rose-poudre hover:bg-rose-pale focus:ring-rose-poudre',
    outline: 'bg-transparent text-rose-fonce border-2 border-rose-fonce hover:bg-rose-fonce hover:text-white focus:ring-rose-fonce',
    ghost: 'bg-transparent text-charbon hover:bg-rose-pale focus:ring-rose-poudre',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
