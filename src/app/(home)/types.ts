import { Layout } from 'react-grid-layout'

export type WidgetType = 'news' | 'todo' | 'downtime' | 'hotline'

export type WidgetCollection = {
  [key in WidgetType]: React.FunctionComponent
}

export interface WidgetLayout extends Layout {
  i: WidgetType
}
