

describe('keyboard press simulation', () => {
    it('should submit searchbox with enter key press', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Just some text {enter}', { delay: 100 })
    })
}
)