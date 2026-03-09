const {test, expect} = require('@playwright/test');
const fs = require('fs');

test('UI Assignment', async({ page }) => {  
    test.setTimeout(60000);

    // Navigate to application
    await page.goto('https://demoqa.com/');

    // Create variable to store details of new user created manually
    const userName = 'Dharineesh';
    const password = 'Dharan@123'; 

    // Navigate to Book Store Application
    await page.getByText('Book Store Application').click();

    // Login using the newly created user
    await page.locator('.left-pannel').getByText('Login', {exact: true}).click();
    await page.getByPlaceholder('UserName').fill(userName);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', {name: 'Login'}).click();

    // Upon successful login, Validate username and logout button
    await expect(page.locator('#userName-value')).toHaveText(userName, {timeout: 15000});
    await expect(page.getByRole('button', {name: 'Logout'})).toBeVisible({timeout: 15000});

    // Click on bookstore button
    await page.getByRole('button', {name: 'Go To Book Store'}).click();

    // Search "Learning JavaScript Design Patterns"
    await page.getByPlaceholder('Type to search').fill('Learning JavaScript Design Patterns');

    // Validate the search result to contain this book
    const bookRow =  page.locator('tr').filter({hasText: 'Learning JavaScript Design Patterns'});
    await expect(bookRow).toBeVisible();

    // Print Title, Author and Publisher into a file
    const title = await bookRow.locator('td').nth(1).textContent();
    const author = await bookRow.locator('td').nth(2).textContent();
    const publisher = await bookRow.locator('td').nth(3).textContent();  
    
   
   const textData = `Title: ${title.trim()}\nAuthor: ${author.trim()}\nPublisher: ${publisher.trim()}`;
    fs.writeFileSync('book-result.txt', textData);

    // Click on log out
    await page.getByRole('button', {name: 'Log out'}).click();
}
)
