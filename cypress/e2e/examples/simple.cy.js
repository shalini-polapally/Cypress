
// describe('My first simple test with cypress', () => {
//     it('true shoulbe be true', () => {
//         expect(true).to.equal(true)
//     })
//     it('5 should be 5', () => {
//         expect(5).to.equal(5)
//     })
// })


// describe('Another describe block', () => {
//     it('false should be false', () => {
//         expect(false).to.equal(false)
//     })
// })


// describe('Browser Actions', () => {
//     it('should load correct URL', () => {
//         cy.visit('https://example.cypress.io', { timeout: 4000 })
//     })
//     it('should chck if correct url is loading', () => {
//         cy.url().should('include', 'example')
//     })
//     it('should check for correct elements in the page', () => {
//         cy.get('h1').should('be.visible')
//     })
// })

describe('More Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')
        cy.log('Before loaded')
        cy.wait(5000)
        cy.reload()
        cy.wait(5000)
        cy.log('After loaded')

    })
    it('should click on the travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })
}
)