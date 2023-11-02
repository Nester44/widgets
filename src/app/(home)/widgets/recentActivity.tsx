import WidgetWrapper from './widgetWrapper'

type Props = {}

const RecentActivity = (props: Props) => {
  return (
    <WidgetWrapper widgetKey='recentActivity' className='bg-teal-500'>
      Recent activity
    </WidgetWrapper>
  )
}

export default RecentActivity
