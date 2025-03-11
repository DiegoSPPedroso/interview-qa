# Documentation - Exercise 3 (QA Challenge - Cypress)

## Requirements

Write a Cypress command to verify if a specific checkbox is checked.

- Checkbox must be associated with a paragraph containing "Test2".
- Must be within the test-grid-3 section.
- Must be inside an item-content div.
- Multiple "Test2" texts exist in different locations.
- Several checkboxes are checked.
- Similar structures appear in different grids.
- Some "Test2" texts are in different element types.

---

## Your code here to

1. Find checkbox within test-grid-3
2. Ensure it's within item-content div
3. Verify it's associated with paragraph containing "Test2"
4. Check if it's checked

---

## Code Explanation

The test navigates through the page to locate the checkboxes within the specified grid, ensuring that they meet all the criteria outlined in the requirements. The flow of the test is as follows:

1. Find the checkbox inside the `test-grid-3` section.
2. Ensure it’s inside a `div` with the class `item-content`.
3. Verify that it’s associated with a paragraph containing the text "Test2".
4. Check if the checkbox is checked.

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 3 - Checkbox Verification".
3. Confirm the button becomes active and the correct exercise title "Exercise 3: Verify Checkbox State" is visible.
4. Locate the checkbox inside the `test-grid-3` section and ensure it's within the `item-content` div.
5. Inside this checkbox, validate if it’s associated with a paragraph containing the text "Test2" and check if it’s checked.