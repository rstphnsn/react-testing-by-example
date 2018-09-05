import React from 'react';
import { shallow } from 'enzyme'

// Thing we want to test
import Header from './Header';

// this we need to mock
jest.mock('../settings', () => ({
  showLogo: false
}))

describe('Header component: ', () => {
  let instance
  beforeEach(() => {
    jest.resetModules()
    instance = shallow(<Header />)
  })

  it('renders an h1', () => {
    expect(instance.find('h1')).toHaveLength(1)
  })

  describe('rendering the logo', () => {
    describe('when show logo settings is true', () => {
      it('renders the logo', () => {
        jest.doMock('../settings', () => ({
          showLogo: true
        }))
        const Header = require('./Header').default
        instance = shallow(<Header />)
        const image = instance.find('img')
        expect(image).toHaveLength(1)
      })
    })

    describe('when show logo settings is false', () => {
      it('does not render the logo', () => {
        jest.doMock('../settings', () => ({
          showLogo: false
        }))
        const Header = require('./Header').default
        instance = shallow(<Header />)
        const image = instance.find('img')
        expect(image).toHaveLength(0)
      })
    })
  })
})
