import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import { WidgetType } from './types'
import { Button } from '@/components/ui/button'
import { widgetsMap } from './widgets'

type Props = {
  addWidget: (widgetKey: WidgetType) => void
  selectedWidgets: WidgetType[]
}

const AddWidgetDropdown = (props: Props) => {
  const { addWidget, selectedWidgets } = props

  const widgets = Object.keys(widgetsMap) as WidgetType[]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Add widget</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {widgets.map((widgetKey) => (
          <DropdownMenuItem
            key={widgetKey}
            onSelect={() => addWidget(widgetKey)}
            disabled={selectedWidgets.includes(widgetKey)}
          >
            {widgetKey[0].toUpperCase() + widgetKey.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AddWidgetDropdown
