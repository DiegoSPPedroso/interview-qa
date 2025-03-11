describe('Exercise 7', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('API Intercept', () => {
    cy.get('svg[data-testid="KeyboardArrowRightIcon"]')
      .should('be.visible')
      .click()
    cy.contains('button', 'Exercise 7 - API Intercept')
      .should('be.visible')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-selected', 'false')
      .click()
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
    cy.contains('h4', 'Exercise 7: API Interception').should('be.visible')

    // 1. Intercept POST request to jsonplaceholder.typicode.com/posts
    // 2. Verify request payload has title, body and userId
    // 3. Verify response contains id
    // 4. Handle the interception using callback functions

    const requestBody = {
      title: "Product Added",
      body: "Added product to cart",
      userId: 1
    }

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: requestBody
    }).then((response) => {
      //Verify payload
      expect(requestBody.title).to.equal("Product Added")
      expect(requestBody.body).to.equal("Added product to cart")
      expect(requestBody.userId).to.equal(1)

      //Log payload
      cy.log('Payload sent:', JSON.stringify(requestBody))

      //Verify response
      expect(response.status).to.equal(201)
      expect(response.body).to.have.property('id').and.to.be.a('number')

      //Log response
      cy.log(`Response ID: ${response.body.id}`)
      cy.log(`Response Title: ${response.body.title}`)
      cy.log(`Response Body: ${response.body.body}`)
      cy.log(`Response userId: ${response.body.userId}`)
    })
  })
})