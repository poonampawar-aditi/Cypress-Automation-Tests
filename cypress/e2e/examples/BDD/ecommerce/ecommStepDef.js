import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/PageObjects/HomePage";
const homepage = new HomePage();


Given('I am on Ecommerce Page', function () {
    homepage.goTo(Cypress.env('url') + "/loginpagePractise/#/");
});

When('I login to the application', function () {
    this.productpage = homepage.login(this.data.username, this.data.password)
    cy.wait(2000)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length', 4);
})

When('I login to the application portal', function (dataTable) {
    this.productpage = homepage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
    cy.wait(2000)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length', 4);

})


When('I add items to Cart and checkout', function () {
    this.productpage.selectProduct(this.data.productName)
    this.productpage.selectFirstProduct()
    this.cartPage = this.productpage.goToCart()
})

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
        //    return "sum";
    })
})



Then('select the country submit and verify Thankyou', function () {
    // reuse the same flow you already had in the commented steps
    this.confirmationPage = this.cartPage.checkoutItems();
    this.confirmationPage.submitFormDetails();
    return this.confirmationPage
        .getAlertMessage()
        .should(
            'contain.text',
            'Success! Thank you! Your order will be delivered in next few weeks :-).'
        );
});
