describe('NaBar test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking page', () => {
        //TODO
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

    })

    it('Should display feedback page', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    })

    it('Should display Home Page', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})