import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const onClickSpy = jest.fn()

describe('Button component: ', () => {
  let instance

  beforeEach(() => {
    instance = shallow(<Button onClick={onClickSpy} />)
  })

  it('renders an button', () => {
    expect(instance.find('button')).toHaveLength(1)
  })

  describe('when the button is clicked', () => {
    it('renders calls the click handler', () => {
      instance.find('button').simulate('click')
      expect(onClickSpy).toHaveBeenCalled()
    })
  })

})
