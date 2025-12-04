


describe ('End to End ecommerce test', () => {
    it ('Submit order', () =>{
        const productName = 'Nokia Edge'    

        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/")
        cy.get("#username").type("rahulshettyacademy")
        cy.get("#password").type("learning")
        cy.contains("Sign In").click()
        cy.wait(2000)
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(`:contains("${productName}")`).then($el => {
            cy.wrap($el).should('have.length',1)
            cy.wrap($el).find('button','Add').click()
        })
    })
})
