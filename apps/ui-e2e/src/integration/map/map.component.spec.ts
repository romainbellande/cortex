describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mapcomponent--primary&args=ref;'));
  it('should render the component', () => {
    cy.get('cortex-map').should('exist');
  });
});