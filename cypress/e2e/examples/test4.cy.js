/// <reference types="Cypress" />

describe('My Fourth Test Suite', function() {

  it('My Fourth Test case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // cy.get('#name').type("Aditi")
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    cy.on('window:alert', (str) => {
      //Mocha assertion
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    }
    )
    cy.on('window:confirm', (str) => {
      //Mocha assertion
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    } 
    )


       



  })
})




