import { useState } from 'react'
import type { WidgetLayout, WidgetType } from './types'
import { useToast } from '@/components/ui/use-toast'

const defaultLayout = [{ i: 'news', x: 0, y: 0, w: 1, h: 1 }] as WidgetLayout[]

const useWidgetsLayout = (cols: number) => {
  const [layout, setLayout] = useState<WidgetLayout[]>(defaultLayout)
  const [selectedWidgets, setSelectedWidgets] = useState<WidgetType[]>(['news'])

  const { toast } = useToast()

  const addWidget = (widgetKey: WidgetType) => {
    if (layout.find((l) => l.i === widgetKey)) {
      return alert('Widget already added')
    }
    const newLayout = [...layout]
    newLayout.push({
      i: widgetKey,
      x: (layout.length * 2) % cols,
      y: Infinity, // puts it at the bottom
      w: 1,
      h: 1,
    })
    setLayout(newLayout)
    setSelectedWidgets((prev) => [...prev, widgetKey])
  }

  const removeWidget = (widgetKey: WidgetType) => {
    const newLayout = layout.filter((l) => l.i !== widgetKey)
    setLayout(newLayout)
    setSelectedWidgets((prev) => prev.filter((w) => w !== widgetKey))
    toast({
      title: `Widget ${widgetKey} remove`,
      description: `Widget ${widgetKey} removed from dashboard`,
      variant: 'destructive',
    })
  }

  return {
    layout,
    addWidget,
    removeWidget,
    selectedWidgets,
  }
}

export default useWidgetsLayout
