
describe('My API Test Suite', function () {
    it("My first Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": "defg",
            "aisle": "228",
            "author": "John doe"
        }).then(function (response) {
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.equal(200)
        })
    })
})
