describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=apptilecomponent--primary&args=title;description;icon;to;'));
  it('should render the component', () => {
    cy.get('cortex-app-tile').should('exist');
  });
});