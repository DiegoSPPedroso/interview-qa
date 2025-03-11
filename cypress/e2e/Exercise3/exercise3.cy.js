describe('Exercise 3', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Checkbox Verification', () => {
    cy.contains('button', 'Exercise 3 - Checkbox Verification')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 3: Verify Checkbox State').should('be.visible')

    cy.get('[data-cy="test-grid-3"] div.item-content')
      .find('p')
      .each((textP) => {
        if (textP.text().includes('Test2')) {
          cy.wrap(textP)
            .parents('div.item-content')
            .find('input[type="checkbox"]')
            .should('be.checked')
        }
      })
  })
})