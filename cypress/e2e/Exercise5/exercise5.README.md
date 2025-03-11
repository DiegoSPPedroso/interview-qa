# Documentation - Exercise 5 (QA Challenge - Cypress)

## Requirements

Create a custom Cypress command for user login functionality.

- Command should
  - Accept email and password as parameters
  - Use data-cy attributes for selectors
  - Include a basic assertion to verify login success
  - Follow Cypress best practices for custom commands
  - Can be reused across different test files
  - Should verify successful login

---

## Your code here to

1. Create a custom command that logs in a user
2. Accept email and password as parameters
3. Use data-cy attributes for selectors
4. Include assertion to verify login success

---

## Example usage

- `cy.login('test@example.com', 'password123')`

## Code Explanation

This exercise involves using a custom login command. The `cy.login` command does the following:

1. The first command checks the email input field, validating its value and attribute type. It also ensures the field has the correct placeholder and is empty before filling it with an invalid email (for initial validation).
2. Then, it finds and clicks the login button, validating the button text, attribute type, and behavior.
3. Before filling in the email field again, it checks that the welcome message is not visible.
4. The email field is filled with the provided email, and the password field is filled with the provided password.
5. After submitting the login form, the command checks for the presence of the welcome message, confirming that the login was successful.

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 5 - Login Command".
3. Ensure the button becomes active and the correct exercise title "Exercise 5: Login Command" is visible.
4. Use the custom `cy.login` command to log in with the generated email and password.
5. Verify the login was successful by checking the presence of the welcome message: "Welcome back!".
