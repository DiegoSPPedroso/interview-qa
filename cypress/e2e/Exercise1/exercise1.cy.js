describe('Exercise 1', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Find Product with Specific Price', () => {
    let productFound = 0
    let productNames = []
    cy.contains('button', 'Exercise 1 - Find Product')
      .should('be.visible')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 1: Find Product with Specific Price').should('be.visible')

    cy.get('.product-list')
      .find('[data-cy="product-item"]')
      .each((product) => {
        const productPrice = product.find('[data-cy="product-price"]').text().trim()
        if (productPrice === "$59") {
          const productName = product.find('[data-cy="product-name"]').text()
          productFound++
          productNames.push(productName)
        }
      })
      .then(() => {
        if (productFound > 0) {
          cy.log(`${productFound} product(s) found with the price of $59: `)
          cy.log(`${productNames.join(', ').toUpperCase()}`)
        } else {
          cy.log('No product found with the price of $59')
        }
      })
  })
})