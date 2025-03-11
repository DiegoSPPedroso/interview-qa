describe('Exercise 2', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Find Table Elements', () => {
    cy.contains('button', 'Exercise 2 - Table Elements')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 2: Find Table Elements').should('be.visible')

    cy.get('table[name="Test1"]')
      .contains('td', '05/15/2024')
      .parent("tr")
      .as("test-table")

    // 1. Find a paragraph (<p>) element containing exactly "First"
    cy.get('@test-table')
      .find('p')
      .should('have.text', 'First')

    // 2. Find a span (<span>) element containing "Accepted"
    cy.get('@test-table')
      .find('span')
      .should('have.text', 'Accepted')

    // 3. Find a button (<button>) element containing "View"
    cy.get('@test-table')
      .find('button')
      .eq(0)
      .should('have.text', 'View')

    // 4. Find and click a button with the class "button-order-more"
    cy.get('@test-table')
      .find('.button-order-more')
      .should('have.text', 'Order More')
      .click()
  })
})