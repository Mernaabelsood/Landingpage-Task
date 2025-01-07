import React from 'react'
import RatesCalculator from './RatesCalculator'

describe('<RatesCalculator />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RatesCalculator />)
  })
})