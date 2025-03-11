# Documentation - Exercise 1 (QA Challenge - Cypress)

## Requirements

Write a Cypress command to find the product with price **$59**.

---

## Code Explanation

The test iterates through a list of products and identifies those priced at **$59**. Two variables are used for this purpose:

1. **`productFound`**: stores the number of products found with the specified price.
2. **`productNames`**: an array that holds the names of the matching products.

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 1 - Find Product".
3. Confirm the button becomes active and the correct exercise title "Exercise 1: Find Product with Specific Price" is visible.
4. It searches the product list:
   - 4.1. Selects the product list (`.product-list`) and finds the items (`[data-cy="product-item"]`).
   - 4.2. Uses `.each()` to iterate over the found products.
   - 4.3. For each product, gets the price (`[data-cy="product-price"]`).
   - 4.4. If the price is **$59**, it captures the product name, adds it to the `productNames` array, and increments `productFound`.
5. After the loop, it checks if any products were found:
   - 5.1. If yes, it logs the quantity and names in the Cypress output.
   - 5.2. If no products were found, it logs a message saying that no matching products were found.
