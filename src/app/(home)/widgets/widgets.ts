import { WidgetCollection } from './types'
import Downtime from './downtime'
import Hotline from './hotline'
import News from './news'
import Todo from './todo'
import RecentActivity from './recentActivity'

export const widgetsMap: WidgetCollection = {
  todo: {
    component: Todo,
    name: 'Todo',
    sizes: { w: 2, h: 2 },
  },
  downtime: {
    component: Downtime,
    name: 'Downtime',
    sizes: { w: 2, h: 2 },
  },
  news: {
    component: News,
    name: 'News',
    sizes: { w: 2, h: 2 },
  },
  hotline: {
    component: Hotline,
    name: 'Hotline',
    sizes: { w: 2, h: 2 },
  },
  recentActivity: {
    component: RecentActivity,
    name: 'Recent activity',
    sizes: { w: 2, h: 2 },
  },
}
