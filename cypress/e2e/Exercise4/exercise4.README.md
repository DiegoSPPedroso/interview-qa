# Documentation - Exercise 4 (QA Challenge - Cypress)

## Requirements

Write two Cypress commands that will verify element relationships.

- Verify "old-car" is within an element with class "my-class"
- Verify that the number "1" is a sibling of "old-car"
- Solution should work even if:
- The order of the cards changes
- There are multiple "old-car" texts
- There are multiple numbers

---

## Your code here to

1.  Verify "old-car" is within an element with class "my-class"
2.  Verify that the number "1" is a sibling of "old-car"

---

## Code Explanation

The test focuses on verifying the relationship between specific elements on the page, ensuring that the element containing the text "old-car" is within a container that has the class `my-class`, and that the number "1" appears as a sibling element of "old-car".

1. The button for "Exercise 4 - Element Relations" is located, and the test ensures it is visible, has the appropriate attributes (`tabindex`, `role`, `type`, and `aria-selected`).
2. After clicking the button, the test checks that the exercise header, "Exercise 4: Element Relations", becomes visible.
3. The test searches for the `.my-class` element, checks if it contains the text "old-car", and confirms that its sibling element is a `<span>` containing the text "1".

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 4 - Element Relations".
3. Confirm the button becomes active and the correct exercise title "Exercise 4: Element Relations" is visible.
4. Locate the element with the class `.my-class` and check if it contains the text "old-car".
5. Verify that the sibling element of "old-car" is a `<span>` and that it contains the number "1".
