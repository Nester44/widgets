'use client'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Toaster } from '@/components/ui/toaster'
import React, { useState } from 'react'
import CustomGridItem from '../../components/customGridItem'
import ControlPanel, { WidgetsContext } from './controlPanel'
import { WidgetLayout } from './widgets/types'
import useWidgetsLayout from './useWidgetsLayout'
import { widgetsMap } from './widgets/widgets'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
const ResponsiveGridLayout = WidthProvider(Responsive)

const Home = () => {
  const {
    layout,
    addWidget,
    removeWidget,
    selectedWidgets,
    setLayout,
    resetLayout,
  } = useWidgetsLayout(6)
  const [isCompact, setIsCompact] = useState(true)
  const [isEdit, setIsEdit] = useState(false)

  const toggleCompact = () => setIsCompact((prev) => !prev)
  const toggleDraggable = () => setIsEdit((prev) => !prev)

  return (
    <WidgetsContext.Provider value={{ isEdit, removeWidget }}>
      <div className='p-16'>
        <ControlPanel
          addWidget={addWidget}
          resetLayout={resetLayout}
          selectedWidgets={selectedWidgets}
          toggleCompact={toggleCompact}
          isCompact={isCompact}
          toggleDraggable={toggleDraggable}
          isDraggable={isEdit}
        />

        <ResponsiveGridLayout
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 8, md: 8, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={150}
          compactType={isCompact ? 'vertical' : null}
          onLayoutChange={(l) => setLayout(l as WidgetLayout[])}
          isDraggable={isEdit}
          isResizable={isEdit}
          maxRows={6}
          margin={[16, 16]}
          resizeHandles={['se', 'sw']}
        >
          {layout.map(({ i }) => (
            <CustomGridItem key={i}>
              {widgetsMap[i].component({})}
            </CustomGridItem>
          ))}
        </ResponsiveGridLayout>
        <Toaster />
      </div>
    </WidgetsContext.Provider>
  )
}

export default Home
