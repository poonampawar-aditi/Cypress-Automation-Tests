// const { sum } = require("lodash")



describe('End to End ecommerce test', () => {
    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })
    it('Submit order', function()  {

        const productName = this.data.productName
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/")
        cy.get("#username").type(this.data.username)
        cy.get("#password").type(this.data.password)
        cy.contains("Sign In").click()
        cy.wait(2000)
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(`:contains("${productName}")`).then($el => {
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).find('button', 'Add').click()
        })
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.get('a.nav-link.btn.btn-primary').contains('Checkout').click()
        let sum = 0

        cy.get('tr td:nth-child(4) strong').each($el => {
            //Rupees. 65000

            const Amount = Number($el.text().split(" ")[1].trim())
            sum = sum + Amount //65000+100000
        }).then(function () {
            expect(sum).to.be.lessThan(200000)
        })
        cy.get('button').contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait(1000)
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success.btn-lg').click()
        cy.get('.alert-success').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')






    }
    )


})
