


describe('Password test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on signin button', () => {
        //TODO
        cy.get('button').contains('Signin').click()

    })

    it('Should click on Forgot your password', () => {
        cy.get('a').contains('Forgot your password ?').click()
    })

    it('Should fill mail form', () => {
        cy.get('#user_email').type('polapallyshalini12@gmail.com', { delay: 100 })
    })

    it('Should click on submit button', () => {
        cy.contains('Send Password').click()
    })
})