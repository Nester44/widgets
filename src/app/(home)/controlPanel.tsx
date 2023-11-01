import React from 'react'
import EditWidgetsDropdown from './editWidgetDropdown'
import CompactSwitch from './boundSwitch'
import { WidgetType } from './widgets/types'
import RemoveWidgetDropdown from './removeWidgetDropdown'
import { Button } from '@/components/ui/button'

type Props = {
  addWidget: (widgetName: WidgetType) => void
  removeWidget: (widgetName: WidgetType) => void
  toggleCompact: () => void
  resetLayout: () => void
  selectedWidgets: WidgetType[]
  isCompact: boolean
}

const ControlPanel = (props: Props) => {
  const {
    addWidget,
    removeWidget,
    toggleCompact,
    selectedWidgets,
    isCompact,
    resetLayout,
  } = props

  return (
    <div className='flex justify-content-between  gap-8'>
      <EditWidgetsDropdown
        addWidget={addWidget}
        removeWidget={removeWidget}
        selectedWidgets={selectedWidgets}
      />
      <Button variant='outline' onClick={resetLayout}>
        Reset layout
      </Button>
      <CompactSwitch toggleCompact={toggleCompact} isCompact={isCompact} />
    </div>
  )
}

export default ControlPanel
