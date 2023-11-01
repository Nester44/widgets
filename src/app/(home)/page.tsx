'use client'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Toaster } from '@/components/ui/toaster'
import { useState } from 'react'
import CustomGridItem from '../../components/customGridItem'
import ControlPanel from './controlPanel'
import { WidgetLayout } from './widgets/types'
import useWidgetsLayout from './useWidgetsLayout'
import { widgetsMap } from './widgets/widgets'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

const columns = 6

const Home = () => {
  const {
    layout,
    addWidget,
    removeWidget,
    selectedWidgets,
    setLayout,
    resetLayout,
  } = useWidgetsLayout(columns)
  const [isCompact, setIsCompact] = useState(true)

  const toggleCompact = () => setIsCompact((prev) => !prev)

  return (
    <div className='p-16'>
      <ControlPanel
        addWidget={addWidget}
        removeWidget={removeWidget}
        resetLayout={resetLayout}
        selectedWidgets={selectedWidgets}
        toggleCompact={toggleCompact}
        isCompact={isCompact}
      />

      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 8, md: 8, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={150}
        compactType={isCompact ? 'vertical' : null}
        onLayoutChange={(l) => setLayout(l as WidgetLayout[])}
        isDraggable={true}
        maxRows={6}
      >
        {layout.map(({ i }) => (
          <CustomGridItem key={i}>{widgetsMap[i].component({})}</CustomGridItem>
        ))}
      </ResponsiveGridLayout>
      <Toaster />
    </div>
  )
}

export default Home
