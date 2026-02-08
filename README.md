## QA Automation Assignment - UI Testing

This project contains UI automation tests for the DemoQA Book Store Application implemented using Playwright with JavaScript.

## Test Scenario

The automated test performs the following steps:

1. Navigate to "https://demoqa.com/"
2. Navigate to Books Store Application
3. Login using the newly created user
4. Upon successful login, Validate the username and logout button
5. Click on bookstore button
6. Search "Learning JavaScript Design Patterns"
7. Validate the search result to contain this book
8. Print Title, Author and Publisher into a file
9. Click on log out

## Test Output

As part of the UI automation flow, the test captures the Book Title, Author, and Publisher details from the Book Store page.

These details are written to a file named `book-result.txt`, which is generated automatically after successful test execution and is available in the project root directory.

## Tech Stack 

- Playwright
- JavaScript
- Node.js

## How to Run the Tests

Ensure the following are installed on your system:
- Node.js (v16 or later)
- Git

Run the following commands in your terminal:

1. Clone the repository:

```bash
git clone https://github.com/Dharan5547/ui-automation-dharineesh.git
cd ui-automation-dharineesh
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Run the tests:

```bash
npx playwright test
```
This will execute the UI tests.

