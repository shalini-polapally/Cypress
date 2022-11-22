describe('Purchase test', () => {
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

    it('Should add purchase', () => {
        //TODO
        cy.contains('Pay Bills').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('Australia (dollar)')
        cy.get('#pc_amount').type(1000)
        cy.get('#pc_inDollars_false').click()
        cy.get('#pc_calculate_costs').click()
        cy.get('#purchase_cash').click()
        cy.get('#alert_content').should('be.visible')
    })
})