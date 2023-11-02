import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

type Props = {
  toggleDraggable: () => void
  isDraggable: boolean
}

const MoveSwitch = (props: Props) => {
  const { isDraggable, toggleDraggable } = props
  return (
    <div className='flex items-center space-x-2'>
      <Switch onClick={toggleDraggable} checked={isDraggable} id='compact' />
      <Label htmlFor='compact'>Edit widgets</Label>
    </div>
  )
}

export default MoveSwitch
