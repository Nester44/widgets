import React from 'react'
import AddWidgetDropdown from './addWidgetDropdown'
import CompactSwitch from './boundSwitch'
import { WidgetType } from './types'

type Props = {
  addWidget: (widgetName: WidgetType) => void
  toggleCompact: () => void
  selectedWidgets: WidgetType[]
  isCompact: boolean
}

const ControlPanel = (props: Props) => {
  const { addWidget, toggleCompact, selectedWidgets, isCompact } = props
  return (
    <div className='flex justify-content-between  gap-8'>
      <AddWidgetDropdown
        addWidget={addWidget}
        selectedWidgets={selectedWidgets}
      />
      <CompactSwitch toggleCompact={toggleCompact} isCompact={isCompact} />
    </div>
  )
}

export default ControlPanel
