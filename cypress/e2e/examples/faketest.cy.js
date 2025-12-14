/// <reference types="Cypress" />

describe('My Sixth Test Suite', function () {
    it("My first Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body:
                    [{
                        "book_name": "RestAssured with Java",
                        "isbn": "LSA",
                        "aisle": "2301"
                    }]






            }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').then(({ request, response }) => {
            // cy.log(response.body)
            cy.get('tr').should('have.length', response.body.length + 1) //+1 for header row
           

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        //length of response array should be equal to rows of the table

    })
})


