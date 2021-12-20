/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

 describe('Home', () => {  
    beforeEach(() => {
        cy.visit('/');
    });

    // it('displays pages in the list', () => {
    //     cy.get('[data-cy=voices-list] li').should('have.length', 89)
    // });
});