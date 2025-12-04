/// <reference types="Cypress" />

describe('My Seventh Test Suite', function () {

    it('My Seventh Test case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //mouse hover
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')   



    })
})
