describe('Payment test', () => {
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

    it('Should add payment', () => {
        //TODO
        cy.contains('Pay Bills').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Sprint')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_amount').type(1000)
        cy.get('#sp_date').type('2022-11-02 {enter}')
        cy.get('#sp_description').type('savings')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content').should('be.visible')
    })
})