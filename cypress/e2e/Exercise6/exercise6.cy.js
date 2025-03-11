describe('Exercise 6', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Product Selection', () => {
    cy.get('svg[data-testid="KeyboardArrowRightIcon"]')
      .should('be.visible')
      .click()
    cy.contains('button', 'Exercise 6 - Product Selection')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 6: Product Selection').should('be.visible')

    // 1. Find the product card containing "Gaming Headset"
    // 2. Click its "Add to Cart" button
    // Note: All buttons have the same text and data-cy attribute

    cy.contains('.product-card h2', 'Gaming Headset')
      .closest('.product-card')
      .find('[data-cy="add-button"]')
      .click()
    cy.get('svg[data-testid="SuccessOutlinedIcon"]').should('be.visible')
    cy.get('.MuiAlert-message').should('have.text', 'Correct! You selected the Gaming Headset.')

  })
})