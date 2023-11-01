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
  removeWidget: (widgetKey: WidgetType) => void
  selectedWidgets: WidgetType[]
}

const EditWidgetsDropdown = (props: Props) => {
  const { addWidget, selectedWidgets, removeWidget } = props

  const widgets = Object.keys(widgetsMap) as WidgetType[]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Edit widgets</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {widgets.map((widgetKey) => {
          const checked = selectedWidgets.includes(widgetKey)
          return (
            <DropdownMenuCheckboxItem
              key={widgetKey}
              checked={checked}
              onCheckedChange={() =>
                checked ? removeWidget(widgetKey) : addWidget(widgetKey)
              }
            >
              {widgetsMap[widgetKey].name}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EditWidgetsDropdown
