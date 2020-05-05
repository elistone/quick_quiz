// https://docs.cypress.io/api/introduction/api.html

describe('Test home page', () => {
  it('Visits the app home url', () => {
    cy.visit('/');
    cy.get('.btn-primary').contains('Join Quiz');
  });
});
