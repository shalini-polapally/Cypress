

describe('login with fixtures data', () => {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username, { delay: 100 })
            cy.get('#user_password').type(password, { delay: 100 })
            cy.get('.btn-primary').contains('Sign in').click()
        })
    })
})