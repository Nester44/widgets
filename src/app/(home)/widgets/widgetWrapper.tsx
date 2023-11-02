import React, { useContext } from 'react'

import styles from './widgetWrapper.module.css'
import { WidgetsContext } from '../controlPanel'
import { twMerge } from 'tailwind-merge'
import { WidgetType } from './types'
import { XCircle } from 'lucide-react'

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  widgetKey: WidgetType
}

const WidgetWrapper = ({ children, className, widgetKey, ...props }: Props) => {
  const { isEdit, removeWidget } = useContext(WidgetsContext)

  const classes = twMerge(
    `bg-slate-500 h-full relative rounded-md p-4 ${className || ''} ${
      isEdit ? styles.jiggle : ''
    }`,
  )

  return (
    <div className={classes} {...props}>
      <div className='absolute -left-5 -top-5 z-50'>
        {isEdit && (
          <button
            className='text-red-500'
            onClick={() => removeWidget(widgetKey)}
          >
            <XCircle />
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

export default WidgetWrapper
