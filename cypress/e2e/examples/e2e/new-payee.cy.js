describe('New-payee test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    it('Should add new payee to the list', () => {
        //TODO
        cy.contains('Pay Bills').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('sha')
        cy.get('#np_new_payee_address').type('secunderabad')
        cy.get('#np_new_payee_account').type('primary')
        cy.get('#np_new_payee_details').type('details')
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').should('be.visible')
    })
})