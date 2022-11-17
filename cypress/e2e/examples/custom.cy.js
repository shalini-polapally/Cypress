describe('Custom commands', () => {
    it('Should login to application using custom command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})