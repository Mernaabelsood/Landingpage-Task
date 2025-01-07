import { mount } from 'cypress/react18';
import RatesCalculator from '../../src/RatesCalculator';

describe('Rates Calculator Component', () => {
  beforeEach(() => {
    mount(<RatesCalculator />);
  });

  it('renders the Rates Calculator header and description', () => {
    cy.contains('h4', 'Rates Calculator').should('be.visible');
    cy.contains(
      'Calculate shipping rates easily and compare prices between shipping companies'
    ).should('be.visible');
  });
});
