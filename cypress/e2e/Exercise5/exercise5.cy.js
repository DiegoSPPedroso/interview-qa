import { faker } from '@faker-js/faker'


describe('Exercise 5', () => {
  const email = faker.internet.email().toLocaleLowerCase()
  const password = faker.internet.password()

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login Command', () => {
    cy.get('svg[data-testid="KeyboardArrowRightIcon"]')
      .should('be.visible')
      .click()
    cy.contains('button', 'Exercise 5 - Login Command')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 5: Login Command').should('be.visible')

    // 1. Create a custom command that logs in a user
    // 2. Accept email and password as parameters
    // 3. Use data-cy attributes for selectors
    // 4. Include assertion to verify login success
    
    cy.login(email, password)

  })
})