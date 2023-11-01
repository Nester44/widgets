import { Checkbox } from '@/components/ui/checkbox'
import { WidgetStyles } from './widget.styles'

const Todo = () => {
  return (
    <WidgetStyles className='bg-sky-500'>
      <h1>Todo</h1>
      <div className='flex items-center space-x-2 mt-2'>
        <Checkbox id='task' />
        <label
          htmlFor='task'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Celebrate Halloween
        </label>
      </div>
    </WidgetStyles>
  )
}

export default Todo
