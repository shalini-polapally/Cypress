

describe('Should write or read data to JSON or text files', () => {
    it('Should write data into JSON', () => {
        cy.writeFile('log.json', { name: "shalini", age: 26 })
    })
    it('Should write data into Text', () => {
        cy.writeFile('log.txt', "Hi this is shalini")
    })
    it('Should write data from JSON', () => {
        cy.readFile('log.json').its('age').should('eq', 26)
    })
    it('Should write data from Text', () => {
        cy.readFile('log.txt').should('eq', "Hi this is shalini")
    })

    it('Should read &verify broowser document content', () => {
        cy.visit('https://example.com/')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})