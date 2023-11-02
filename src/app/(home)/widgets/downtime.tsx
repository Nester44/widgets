import WidgetWrapper from './widgetWrapper'

type Props = {}

const Downtime = (props: Props) => {
  return (
    <WidgetWrapper widgetKey='downtime' className='bg-red-500'>
      Downtime
    </WidgetWrapper>
  )
}

export default Downtime
