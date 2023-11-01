import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

type Props = {
  toggleCompact: () => void
  isCompact: boolean
}

const CompactSwitch = (props: Props) => {
  const { toggleCompact, isCompact } = props
  return (
    <div className='flex items-center space-x-2'>
      <Switch onClick={toggleCompact} checked={isCompact} id='compact' />
      <Label htmlFor='compact'>Vertical compact</Label>
    </div>
  )
}

export default CompactSwitch
