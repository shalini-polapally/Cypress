


describe('Working with inputs', () => {
    it('should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity.com')
        cy.get('button').contains('Signin').click()
    })
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('invalidName', { delay: 100 })
    })
    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('invalidPassword', { delay: 100 })
    })
    it('should click keep me signed in button', () => {
        cy.get('#user_remember_me').click()
    })
    it('Should submit form', () => {
        cy.get('input').contains('Sign in').click()
    })
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})