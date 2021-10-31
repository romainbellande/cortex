describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=linkcomponent--primary&args=to;'));
  it('should render the component', () => {
    cy.get('cortex-link').should('exist');
  });
});