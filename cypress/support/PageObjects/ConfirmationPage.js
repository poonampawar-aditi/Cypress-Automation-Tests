class ConfirmationPage {
    submitFormDetails() {
        cy.submitFormDetails();
        // cy.get('#country').type('India')
        // cy.wait(1000)
        // cy.get('.suggestions ul li a').click()
        // cy.get('.btn-success.btn-lg').click()
    }

    getAlertMessage() {
        return cy.get('.alert-success')
    }
}
export default ConfirmationPage;
