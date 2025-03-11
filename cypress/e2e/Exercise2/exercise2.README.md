# Documentation - Exercise 2 (QA Challenge - Cypress)

## Requirements

Complete the code to find specific elements within the row that matches the 05/15/2024 date (in Los Angeles timezone).

- All elements must be found within the aliased row ("@test-table").
- Be specific with element types as similar text appears in different elements.
- Order of elements matters.
- Multiple similar classes exist.

- Initial Cypress Code:
  cy.get('table[name="Test1"]')
    .contains(moment.tz("America/Los_Angeles").format("MM/DD/YYYY"))
    .parentsUntil("tbody")
    .as("test-table")

---

## Your code here to

1. Find a paragraph (<p>) element containing exactly "First"
2. Find a span (<span>) element containing "Accepted"
3. Find a button (<button>) element containing "View"
4. Find and click a button with the class "button-order-more"

---

## Code Explanation

This test navigates to a table and finds a specific row that contains the date 05/15/2024, then performs a series of element assertions inside that row.

1. First, it locates the exercise button and ensures it is visible and becomes active after clicking.
2. Then it confirms the correct exercise header is displayed.
3. It searches for a `table[name="Test1"]` and locates the row (`<tr>`) that contains the date 05/15/2024.
4. That row is aliased as `@test-table` for easier reference.
5. Inside this row, the test performs four checks:
   - It finds a `<p>` element and asserts its text is exactly "First".
   - It finds a `<span>` element and asserts its text is "Accepted".
   - It finds the first `<button>` and asserts it has the text "View".
   - It finds a button with the class `.button-order-more`, asserts it contains the text "Order More", and clicks it.

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 2 - Table Elements".
3. Confirm the button becomes active and the correct exercise title "Exercise 2: Find Table Elements" is visible.
4. Locate the row (`<tr>`) in the table named "Test1" that contains the text "05/15/2024" and alias it as `@test-table`.
5. Inside `@test-table`, perform the following:
   - Find a `<p>` with exact text "First".
   - Find a `<span>` with exact text "Accepted".
   - Find the first `<button>` with text "View".
   - Find and click a button with class `.button-order-more` and text "Order More".
