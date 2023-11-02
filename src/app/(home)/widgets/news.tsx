import WidgetWrapper from './widgetWrapper'

type Props = {}

const News = (props: Props) => {
  return (
    <WidgetWrapper widgetKey='news' className='bg-amber-500'>
      <h2>News</h2>
      Here will be news
    </WidgetWrapper>
  )
}

export default News
