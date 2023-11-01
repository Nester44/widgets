import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { WidgetType } from './widgets/types'
import { widgetsMap } from './widgets/widgets'

type Props = {
  removeWidget: (widgetKey: WidgetType) => void
  selectedWidgets: WidgetType[]
}

const RemoveWidgetDropdown = (props: Props) => {
  const { removeWidget, selectedWidgets } = props

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button disabled={!selectedWidgets.length} variant='destructive'>
          Remove widget
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {selectedWidgets.map((widgetKey) => (
          <DropdownMenuItem
            key={widgetKey}
            onSelect={() => removeWidget(widgetKey)}
          >
            {widgetsMap[widgetKey].name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default RemoveWidgetDropdown
