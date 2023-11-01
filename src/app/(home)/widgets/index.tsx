import React from 'react'
import Todo from './todo'
import { WidgetCollection, WidgetType } from '../types'
import { XSquare } from 'lucide-react'
import Downtime from './downtime'
import News from './news'
import Hotline from './hotline'

interface Props extends React.HTMLProps<HTMLDivElement> {
  widgetKey: WidgetType
  removeWidget: () => void
}

export const widgetsMap: WidgetCollection = {
  todo: Todo,
  downtime: Downtime,
  news: News,
  hotline: Hotline,
}

const Widget = React.forwardRef(function CustomGridItemComponent(
  {
    style,
    className,
    onMouseDown,
    onMouseUp,
    onTouchEnd,
    children,
    ...props
  }: Props,
  ref,
) {
  const { widgetKey, removeWidget } = props
  return (
    <div
      style={{ ...style }}
      className={className}
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
    >
      <div className='bg-slate-400 h-full rounded-md p-4'>
        <button onClick={removeWidget}>
          <XSquare className='text-red-500' />
        </button>
        <div className='mt-2'>
          {widgetsMap[widgetKey] ? widgetsMap[widgetKey]({}) : null}
        </div>
      </div>
    </div>
  )
})

export default Widget
