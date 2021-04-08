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
   cy.get('#searchInput').click().type('Fresh Ice Box 8 liter {enter}')
   cy.get('div.h-full > .ProductCardGrid > :nth-child(1) > .ProductCard__link > picture.mx-auto > .object-contain').click()


   cy.contains('#product-image > div > span', /OFF/)

   cy.get('.ProductDetails > .mt-4.flex').find('span').its('length').then(res => {
      cy.contains('.ProductDetails > .mt-4.flex .font-bold', /[0-9]{1,} EGP/)
      //if there is a discount
      if (res > 1) {
         cy.contains('.ProductDetails > .mt-4.flex > .line-through', /[0-9]{1,} EGP/)
      }
   });
   cy.get('[data-cy=add-to-card]').click()
   cy.get('.btn-inverse').click()
   cy.get(':nth-child(3) > .my-8 > .swiper-container > .swiper-wrapper > .swiper-slide-next > .ProductCard > .ProductCard__link > picture.mx-auto > .object-contain').click()
   cy.get('[data-cy=add-to-card]').click()
   cy.get('.btn-inverse').click()
   cy.get(':nth-child(6) > .my-8 > .swiper-container > .swiper-wrapper > .swiper-slide-next > .ProductCard > .ProductCard__link > picture.mx-auto > .object-contain').click()
   cy.get('[data-cy=add-to-card]').click()
   cy.get('.btn-inverse').click()
   cy.get('a[aria-label="Show Cart"]').click()
   cy.get('main .container > div > div > div > div > div > div:nth-child(2) button.text-red-100').click({ multiple: true })


})