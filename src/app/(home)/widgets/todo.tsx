import { Checkbox } from '@/components/ui/checkbox'
import WidgetWrapper from './widgetWrapper'

const Todo = () => {
  return (
    <WidgetWrapper widgetKey='todo' className={'bg-sky-500'}>
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
    </WidgetWrapper>
  )
}

export default Todo
