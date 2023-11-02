import React from 'react'
import AddWidgetsDropdown from './addWidgetDropdown'
import CompactSwitch from './compactSwitch'
import { WidgetType } from './widgets/types'
import RemoveWidgetDropdown from './removeWidgetDropdown'
import { Button } from '@/components/ui/button'
import MoveSwitch from './moveSwitch'

type Props = {
  addWidget: (widgetName: WidgetType) => void
  toggleCompact: () => void
  resetLayout: () => void
  selectedWidgets: WidgetType[]
  isCompact: boolean
  toggleDraggable: () => void
  isDraggable: boolean
}

interface IWidgetsContext {
  isEdit: boolean
  removeWidget: (widgetKey: WidgetType) => void
}

export const WidgetsContext = React.createContext<IWidgetsContext>({
  isEdit: false,
  removeWidget: () => {},
})

const ControlPanel = (props: Props) => {
  const {
    addWidget,
    toggleCompact,
    selectedWidgets,
    isCompact,
    resetLayout,
    toggleDraggable,
    isDraggable,
  } = props

  return (
    <div className='flex justify-content-between gap-8 mb-4'>
      <AddWidgetsDropdown
        addWidget={addWidget}
        selectedWidgets={selectedWidgets}
      />
      <Button variant='outline' onClick={resetLayout}>
        Reset layout
      </Button>
      <CompactSwitch toggleCompact={toggleCompact} isCompact={isCompact} />
      <MoveSwitch toggleDraggable={toggleDraggable} isDraggable={isDraggable} />
    </div>
  )
}

export default ControlPanel
