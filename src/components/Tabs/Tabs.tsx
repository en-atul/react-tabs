import classNames from 'classnames'
import React, {FC, useState} from 'react'

import {TabProps} from '../../interfaces'
import './tabs.css'

const Tabs: FC<TabProps> = ({
  tabs,
  onChange,
  tabsStyle,
  tabsClassName,
  tabStyle,
  tabClassName,
  borderStyle,
  borderClassName,
}) => {
  const [activeTab, setTab] = useState(1)

  return (
    <ul className={classNames('tabs', {tabsClassName})} style={tabsStyle}>
      {tabs?.map((tab, idx) => {
        const Component = tab.title as React.ElementType
        return (
          <li
            key={idx}
            className={classNames(
              'tab',
              {
                active: activeTab === idx + 1,
              },
              tabClassName,
            )}
            id={idx + ''}
            role="tab"
            onClick={() => {
              setTab(idx + 1)
              onChange && onChange(idx + 1)
            }}
            style={tabStyle}
          >
            {typeof tab.title === 'string' ? tab.title : <Component />}
          </li>
        )
      })}

      <li
        className={`slider ${borderClassName}`}
        role="presentation"
        style={{
          width: `${100 / tabs.length}%`,
          left: `${(100 / tabs.length) * (activeTab - 1)}%`,
          ...borderStyle,
        }}
      />
    </ul>
  )
}

export default Tabs
