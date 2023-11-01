import { Checkbox } from '@/components/ui/checkbox'

const Todo = () => {
  return (
    <div>
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
    </div>
  )
}

export default Todo
