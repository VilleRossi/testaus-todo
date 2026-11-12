describe('Todo app', () => {
  it('creates a task', () => {
    cy.visit('/');

    cy.get('#topic').type('Run automated tests');
    cy.get('#priority').select('high');
    cy.get('#description').type('Verify the GitHub Actions setup');
    cy.get('#save-btn').click();

    cy.get('#task-list').should('contain.text', 'Run automated tests');
    cy.get('#task-list').should('contain.text', 'Verify the GitHub Actions setup');
  });
});