
class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }
    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(function () {
        //runs before all tests inside describe 
        //setup test data or test context
        //seed or restart the database
        HomePage.loadHomePage()
    })

    after(function () {
        //runs after all tests inside describe
        //Clean up 
        //Clean cookies or local storage
    })

    beforeEach(function () {
        //runs before each it block in the describe
    })

    afterEach(function () {
        //runs after each it block in the describe
    })
    it('Should scroll down and up the page', () => {
        HomePage.wait(5000)
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
    })
})