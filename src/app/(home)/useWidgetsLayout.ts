import { useEffect, useState } from 'react'
import type { WidgetLayout, WidgetRecord, WidgetType } from './widgets/types'
import { useToast } from '@/components/ui/use-toast'
import { widgetsMap } from './widgets/widgets'

// iterates through all widgets and adds them to the layout, each next widget has x + width of previous
const widgets = Object.entries(widgetsMap) as [WidgetType, WidgetRecord][]

const defaultLayout: WidgetLayout[] = []

for (let i = 0; i < widgets.length; i++) {
  const [key, widget] = widgets[i]
  const { w, h } = widget.sizes
  defaultLayout.push({
    i: key,
    x: i * w,
    y: 0,
    w,
    h,
  })
}

function getLayoutFromLS() {
  let layout: WidgetLayout[] = []
  if (global.localStorage) {
    try {
      layout = JSON.parse(localStorage.getItem('widgetsLayout') || '') || []
    } catch (e) {
      /*Ignore*/
    }
  }

  return layout.length === 0 ? defaultLayout : layout
}

const useWidgetsLayout = (cols: number) => {
  const [layouts, setLayouts] = useState<WidgetLayout[]>([])

  const { toast } = useToast()

  const selectedWidgets = layouts.map((l) => l.i)

  useEffect(() => {
    setLayouts(getLayoutFromLS())
  }, [])

  const setLayoutAndSave = (newLayout: WidgetLayout[]) => {
    setLayouts(newLayout)
    localStorage.setItem('widgetsLayout', JSON.stringify(newLayout))
  }

  const resetLayout = () => {
    setLayoutAndSave(defaultLayout)
  }

  const addWidget = (widgetKey: WidgetType) => {
    if (layouts.find((l) => l.i === widgetKey)) {
      return alert('Widget already added')
    }
    const newLayout = [...layouts]

    const { w, h } = widgetsMap[widgetKey].sizes
    newLayout.push({
      i: widgetKey,
      x: (layouts.length * 2) % cols,
      y: Infinity, // puts it at the bottom
      w,
      h,
    })
    setLayoutAndSave(newLayout)
  }

  const removeWidget = (widgetKey: WidgetType) => {
    const newLayout = layouts.filter((l) => l.i !== widgetKey)
    setLayoutAndSave(newLayout)

    const widgetName = widgetsMap[widgetKey].name.toLowerCase()
    toast({
      title: `Widget ${widgetName} removed`,
      description: `Widget ${widgetName} removed from dashboard`,
    })
  }

  return {
    layout: layouts,
    addWidget,
    removeWidget,
    selectedWidgets,
    setLayout: setLayoutAndSave,
    resetLayout,
  }
}

export default useWidgetsLayout
