describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavitemcomponent--primary&args=icon;to;'));
  it('should render the component', () => {
    cy.get('cortex-sidenav-item').should('exist');
  });
});