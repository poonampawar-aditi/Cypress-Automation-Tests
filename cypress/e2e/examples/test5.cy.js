describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click(); //remove target attribute to open link in the same tab 
    
 
       cy.origin("https://www.qaclickacademy.com",()=>  //cy.origin to switch to the new domain
       {
            cy.get('#navbarSupportedContent  a[href="about.html"]').click();
    //     cy.get("#navbarSupportedContent a[href*='about']").click();

        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })
 
    
    });
 
});


// describe('Handling Child Windows - Alternative Method', () => {
//     it('Should handle child window using href', () => {
      
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); 
//         cy.get("#opentab").then((element) => {
//             const url = element.prop('href');
//             cy.visit(url);
//         });
//         cy.origin("https://www.qaclickacademy.com",()=>
//        {
//         cy.get("#navbarSupportedContent a[href*='about']").click();
//         cy.get(".mt-50 h2").should('contain','QAClick Academy');
//          })
//     });

// })
