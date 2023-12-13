describe('Home Page', () => {
  it('renders the home page and fetches website data', () => {
    cy.visit('/');

    cy.get('[data-cy=url-input]').type('https://github.com').should('have.value', 'https://github.com');
    cy.get('input').should('have.attr', 'placeholder', 'Write E-mail here ...');
    cy.contains('[data-cy=link]', 'Webpage Viewer').click();

    cy.get('[data-cy=fetch-website]').should('exist');
  });

  it('navigates to Subscription page', () => {
    cy.visit('/');

    cy.contains('Subscription').click();

    cy.url().should('include', '/mySubscription');
  });

  it('navigates to Feedback Form page', () => {
    cy.visit('/');

    cy.contains('Feedback Form').click();

    cy.url().should('include', '/feedback');
  });
});
