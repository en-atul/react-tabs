import {CSSProperties, ReactNode} from 'react'

export interface ItemProps {
  title: ReactNode
}

export interface TabProps {
  tabs: ItemProps[]
  onChange?: (tab: number) => any
  tabsStyle?: CSSProperties
  tabsClassName?: string
  tabStyle?: CSSProperties
  tabClassName?: string
  borderStyle?: CSSProperties
  borderClassName?:string
}
