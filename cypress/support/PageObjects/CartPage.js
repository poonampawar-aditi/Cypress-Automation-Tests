import ConfirmationPage from "../../support/PageObjects/ConfirmationPage"

class CartPage {
    checkoutItems() {

        cy.get('button').contains('Checkout').click()
        return new ConfirmationPage()
    }
    sumOfProducts() {
        let sum = 0;
        return cy.get('tr td:nth-child(4) strong').each($el => {
            //Rupees. 65000

            const Amount = Number($el.text().split(" ")[1].trim())
            sum = sum + Amount //65000+100000
        }).then(function () {
            return sum;
        }
        )
        // getCartItems()
        // {
        //     return cy.get('.cart_item');
        // }
    }
}
export default CartPage;

