import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import { WidgetType } from './widgets/types'
import { Button } from '@/components/ui/button'
import { widgetsMap } from './widgets/widgets'

type Props = {
  addWidget: (widgetKey: WidgetType) => void
  selectedWidgets: WidgetType[]
}

const AddWidgetsDropdown = (props: Props) => {
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
            {widgetsMap[widgetKey].name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AddWidgetsDropdown
