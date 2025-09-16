

import type { MouseEvent, PropsWithChildren, JSX } from 'react'


export type ButtonProps = PropsWithChildren & {
  disabled?: boolean
  text: string
  className?: string
  index?: number
  key?: number
  type: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void }

export const AppButton: React.FC<ButtonProps> = ({text,...props}: ButtonProps): JSX.Element => {

    return (

        <button
          {...props}
        >
          <span>{text}</span>
        </button>
      
    )
}