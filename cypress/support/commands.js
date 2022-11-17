

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username, { delay: 100 })
    cy.get('#user_password').type(password, { delay: 100 })
    cy.get('#user_remember_me').click()
    cy.get('.btn-primary').contains('Sign in').click()
})