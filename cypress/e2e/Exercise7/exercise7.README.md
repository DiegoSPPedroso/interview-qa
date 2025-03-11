# Documentation - Exercise 7 (QA Challenge - Cypress)

## Requirements

Write a Cypress test that intercepts an API call and verifies both request and response using callback functions.

- Must intercept POST request to jsonplaceholder.typicode.com/posts
- Verify request payload has:
  - title (string)
  - body (string)
  - userId (number)
- Verify response contains:
  - id field (number)
- Use callback functions for verification

---

## Your code here to

1.  Intercept POST request to jsonplaceholder.typicode.com/posts
2.  Verify request payload has title, body and userId
3.  Verify response contains id
4.  Handle the interception using callback functions

---

## Code Explanation

This exercise involves intercepting an API request and verifying the request payload and the response.

1. The test sends a POST request to `https://jsonplaceholder.typicode.com/posts` with a body containing `title`, `body`, and `userId`.
2. The test checks that the payload contains the correct values for `title`, `body`, and `userId`.
3. After receiving the response, the test ensures the response contains an `id` field and that its value is a number. It also logs other details from the response.
4. The test logs both the request payload and the response to the Cypress command log to assist with debugging and verification.

---

## Step-by-Step Execution

1. Visit the main page.
2. Locate and click the button labeled "Exercise 7 - API Intercept".
3. Ensure the button becomes active and the correct exercise title "Exercise 7: API Interception" is visible.
4. Intercept the POST request to `https://jsonplaceholder.typicode.com/posts` and verify the request payload contains `title`, `body`, and `userId`.
5. Verify the response contains the `id` field, and log the response details.
