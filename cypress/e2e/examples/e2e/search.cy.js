


describe('Search Box test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit with pressing enter', () => {
        //TODO
        cy.get('#searchTerm').type('Some Text {enter}')

    })

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    })
})