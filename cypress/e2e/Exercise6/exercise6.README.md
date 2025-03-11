# Documentation - Exercise 6 (QA Challenge - Cypress)

## Requirements

Write a Cypress test that specifically clicks the "Add to Cart" button for the Gaming Headset (the third product).

- Must click the correct "Add to Cart" button
- Note that:
  - All buttons have the same text
  - All buttons have the same data-cy attribute
  - Product order might change

---

## Your code here to

1. Find the product card containing "Gaming Headset"
2. Click its "Add to Cart" button
Note: All buttons have the same text and data-cy attribute

---

## Code Explanation

This exercise involves selecting a product ("Gaming Headset") from a product list and clicking its corresponding "Add to Cart" button.

1. The code first locates the product card containing the text "Gaming Headset" inside an `h2` tag.
2. It then identifies the closest `.product-card` element and finds the button with the `data-cy="add-button"` attribute within that card.
3. The button is clicked, and after this, the test checks for a visible success icon (`SuccessOutlinedIcon`).
4. Finally, it verifies that the message confirming the correct selection is displayed, with the text "Correct! You selected the Gaming Headset."

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 6 - Product Selection".
3. Ensure the button becomes active and the correct exercise title "Exercise 6: Product Selection" is visible.
4. Find the product card containing the "Gaming Headset."
5. Click the "Add to Cart" button within that product card.
6. Verify the success icon (`SuccessOutlinedIcon`) becomes visible.
7. Confirm that the message "Correct! You selected the Gaming Headset." is displayed.