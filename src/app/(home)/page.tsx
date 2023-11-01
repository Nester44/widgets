'use client'

import GridLayout from 'react-grid-layout'

import { Toaster } from '@/components/ui/toaster'
import { useState } from 'react'
import ControlPanel from './controlPanel'
import useWidgetsLayout from './useWidgetsLayout'
import Widget from './widgets'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const columns = 3

const Home = () => {
  const { layout, addWidget, removeWidget, selectedWidgets } =
    useWidgetsLayout(columns)
  const [isCompact, setIsCompact] = useState(true)

  const toggleCompact = () => setIsCompact((prev) => !prev)

  return (
    <div className='p-16'>
      <ControlPanel
        addWidget={addWidget}
        selectedWidgets={selectedWidgets}
        toggleCompact={toggleCompact}
        isCompact={isCompact}
      />

      <GridLayout
        layout={layout}
        cols={columns}
        rowHeight={300}
        width={1000}
        compactType={isCompact ? 'vertical' : null}
      >
        {layout.map(({ i }) => (
          <Widget key={i} widgetKey={i} removeWidget={() => removeWidget(i)} />
        ))}
      </GridLayout>
      <Toaster />
    </div>
  )
}

export default Home
