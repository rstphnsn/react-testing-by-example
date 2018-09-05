import React from 'react'
import { shallow } from 'enzyme'

import Header from './HeaderWithProps'

describe('Header component: ', () => {
  let instance
  beforeEach(() => {
    instance = shallow(<Header showLogo />)
  })

  it('renders an h1', () => {
    expect(instance.find('h1')).toHaveLength(1)
  })

  describe('rendering the logo', () => {
    describe('when show logo settings is true', () => {
      it('renders the logo', () => {
        instance = shallow(<Header showLogo />)
        expect(instance.find('img')).toHaveLength(1)
      })
    })

    describe('when show logo settings is false', () => {
      it('does not render the logo', () => {
        instance = shallow(<Header />)
        expect(instance.find('img')).toHaveLength(0)
      })
    })
  })
})
