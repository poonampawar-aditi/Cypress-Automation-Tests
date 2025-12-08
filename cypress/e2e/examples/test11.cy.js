// const { sum } = require("lodash")
import HomePage from "../../support/PageObjects/HomePage"



describe('End to End ecommerce test', function() {
    before(function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()
        })

    })
    it('Submit order', function () {

        const productName = this.data.productName
        // const homepage = new HomePage()
        this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#/")
        const productpage = this.homepage.login(this.data.username,this.data.password)
        cy.wait(2000)
        productpage.pageValidation()
        productpage.getCardCount().should('have.length', 4)
        productpage.selectProduct(productName)
        productpage.selectFirstProduct()
        const cartPage = productpage.goToCart()
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.lessThan(200000)
        })

        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
// confirmationPage.getAlertmessage


    }
    )

})


// // const { sum } = require("lodash")
// import HomePage from "../../support/PageObjects/HomePage"  // check casing!

// describe('End to End ecommerce test', function () {

//     before(function () {
//         // runs once before all tests in the block
//         cy.fixture('example').then((data) => {
//             this.data = data
//             this.homepage = new HomePage()
//         })
//     })

//     it('Submit order', function () {

//         const productName = this.data.productName

//         this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#/")
//         const productpage = this.homepage.login(this.data.username, this.data.password)

//         cy.wait(2000)  // still ugly, but I’ll leave your sins as-is for now

//         productpage.pageValidation()
//         productpage.getCardCount().should('have.length', 4)
//         productpage.selectProduct(productName)
//         productpage.selectFirstProduct()

//         const cartPage = productpage.goToCart()

//         cartPage.sumOfProducts().then(function (sum) {
//             expect(sum).to.lessThan(200000)
//         })

//         const confirmationPage = cartPage.checkoutItems()
//         confirmationPage.submitFormDetails()
//         // confirmationPage.getAlertmessage().should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks')
    

// })
// })
