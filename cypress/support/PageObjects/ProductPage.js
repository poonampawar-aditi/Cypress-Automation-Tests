import CartPage from "../../support/PageObjects/CartPage"


class ProductPage {
  pageValidation() {
            cy.contains("Shop Name").should('be.visible')
  }
getCardCount() {
        return cy.get('app-card')

}
selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }
    goToCart() {
        cy.get('a.nav-link.btn.btn-primary').contains('Checkout').click()
        return new CartPage()
    }
selectProduct(productName) {
            cy.get('app-card').filter(`:contains("${productName}")`).then($el => {
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).find('button', 'Add').click()
        })
    }
}
export default ProductPage;
