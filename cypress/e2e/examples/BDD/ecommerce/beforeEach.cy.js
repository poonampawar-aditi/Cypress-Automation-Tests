
import HomePage from "../../../../support/PageObjects/HomePage";
beforeEach(function () {
    //runs once before all tests in the block
    this.homePage = new HomePage()
    cy.fixture('example').then(function (data) {
        this.data = data
        this.homepage = new HomePage()
    })

})