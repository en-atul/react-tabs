import {render} from '@testing-library/react'
import React from 'react'

import Tabs from './Tabs'

describe('Tabs', () => {
  test('renders the Tabs component', () => {
    render(<Tabs tabs={[{title: 'Typography'}]} />)
  })
})
