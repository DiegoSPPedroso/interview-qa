# Interview QA

This repository contains a series of end-to-end automation exercises using [Cypress](https://www.cypress.io/), focused on hands-on QA interview challenges.

Repository: [github.com/DiegoSPPedroso/interview-qa](https://github.com/DiegoSPPedroso/interview-qa)

---

## Requirements

- Node.js (v16 or higher recommended)
- NPM or Yarn

---

## Installation

To get started, clone this repository and install the dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/DiegoSPPedroso/interview-qa.git
   cd interview-qa
   ```

2. Install dependencies:

   You can use **NPM** or **Yarn** to install the project dependencies.

   - Using NPM:

     ```bash
     npm install
     ```

   - Using Yarn:

     ```bash
     yarn install
     ```

---

### Running E2E Tests

Once the dependencies are installed, you can run the tests in two modes:

---

### Running E2E Tests

- Run Cypress in Interactive Mode (GUI)

  - npm run cypress:open
    or
  - yarn cypress:open

- Run Cypress in Headless Mode
  - npm run cypress:run
    or
  - yarn cypress:run

---

### Project Info

- No local server is required.
- The tests are located in the cypress/e2e folder.
- Cypress commands and setup are under cypress/support.

---

### Created by Diego Pedroso
