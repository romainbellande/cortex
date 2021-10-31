describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('cortex-searchbar').should('exist');
  });
});