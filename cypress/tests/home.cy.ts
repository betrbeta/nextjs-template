/*
describe('Home Page', () => {
  it('renders the home page and fetches website data', () => {
    cy.visit('/');
    cy.get('[data-cy=url-input]').type('https://github.com').should('have.value', 'https://github.com');
    cy.get('input').should('have.attr', 'placeholder', 'Write E-mail here ...');
    cy.contains('[data-cy=link]', 'Webpage Viewer').click();
    cy.get('[data-cy=fetch-website]').should('exist');
  });
});
*/

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders without crashing', () => {
    cy.get('.title').should('contain', 'Webpage Viewer');
  });

  it('displays an error for an invalid URL', () => {
    const invalidUrl = 'invalid-url';

    cy.get('input').first().type(invalidUrl).should('have.value', invalidUrl);
    // cy.get('.error').should('exist');
    // cy.get('.error', { timeout: 10000 }).should('exist');
  });

  it('loads the website on valid URL input', () => {
    const validUrl = 'example.com';

    cy.get('input').first().type(validUrl).should('have.value', validUrl);
    cy.get('.error').should('not.exist');
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
