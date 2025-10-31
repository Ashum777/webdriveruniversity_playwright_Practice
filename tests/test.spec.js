const { test, expect } = require('@playwright/test');

test.only('Verify the functionality of Reset Button', async ({ browser }) => {
    const Context = await browser.newContext();
    const Page = await Context.newPage();

    // Visiting the base URL (Playwright will automatically append the relative path '/' to the base URL)
    await Page.goto('/'); // This should now work, as the baseURL is configured

    console.log(await Page.title());
});
