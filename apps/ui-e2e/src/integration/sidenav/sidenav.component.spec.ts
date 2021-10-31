describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavcomponent--primary'));
  it('should render the component', () => {
    cy.get('cortex-sidenav').should('exist');
  });
});