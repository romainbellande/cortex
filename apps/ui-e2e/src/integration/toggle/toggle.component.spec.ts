describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=togglecomponent--primary&args=key;label;'));
  it('should render the component', () => {
    cy.get('cortex-toggle').should('exist');
  });
});