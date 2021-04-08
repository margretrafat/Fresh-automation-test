/// <reference types="cypress" />
beforeEach("LOad", function () {
   cy.fixture("fresh").then((data) => {
      this.key = data
   })
})

it('google test', function () {

   cy.visit('https://www.google.com/')
   cy.get('.gLFyf').type(this.key.google_search + ' {enter}')
   cy.get('[href="https://fresh.com.eg/"] > .LC20lb > span').click()

})