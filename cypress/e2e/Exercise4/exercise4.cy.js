describe('Exercise 4', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Element Relations', () => {
    cy.contains('button', 'Exercise 4 - Element Relations')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 4: Element Relations').should('be.visible')

    // 1. Verify "old-car" is within an element with class "my-class"
    // 2. Verify that the number "1" is a sibling of "old-car"
    cy.get('.my-class')
      .contains('old-car')
      .siblings('span')
      .should('have.text', '1')
  })
})