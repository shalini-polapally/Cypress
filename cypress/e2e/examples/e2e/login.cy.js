describe('Login test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        //TODO
        cy.login('username1', 'password1')
    })

    it('Should display error message', () => {
        //TODO
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong')
    })

    it('Should login to application', () => {
        //TODO
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    it('Should logout from the application', () => {
        //TODO
        cy.contains('username').click()
        cy.get('#logout_link').click()
    })
})