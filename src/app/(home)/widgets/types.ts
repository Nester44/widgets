import { Layout } from 'react-grid-layout'

export type WidgetType =
  | 'news'
  | 'todo'
  | 'downtime'
  | 'hotline'
  | 'recentActivity'

export type WidgetRecord = {
  component: React.FunctionComponent
  name: string
  sizes: { w: number; h: number }
}

export type WidgetCollection = {
  [key in WidgetType]: WidgetRecord
}

export interface WidgetLayout extends Layout {
  i: WidgetType
}
