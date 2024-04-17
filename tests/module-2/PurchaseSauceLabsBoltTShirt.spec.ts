import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/loginPage';
import { ProductsPage } from '../../pages/saucedemo/productsPage';
import { CartPage } from '../../pages/saucedemo/cartPage';
let page: Page;
let loginpage;
let productsPage;
let cartPage; 

   
    test.beforeAll("Login Application as a valid user",async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLandingPage();
    await loginPage.login("standard_user", "secret_sauce");
});


test("Add product to the shopping cart", async ({ browser }) => {
    const productsPage = new ProductsPage(page);
    const cartsPage = new CartPage(page);
    await productsPage.navigateToLandingPage();
    await productsPage.addSauceLabsBolt_TShirt_ToShoppingCart();
    await expect(productsPage.shoppingCartIcon).toContainText('1');
    await productsPage.navigateToShoppingCartPage();
    await productsPage.navigateTocheckout();
    await cartsPage.CompleteForm("Sankara", "Narayanan", "5092");
    await expect(cartsPage.thankyouMsg).toContainText('Thank you for your order!');
    await expect(cartsPage.orderConfirmationMsg).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await productsPage.navigateToLandingPage();
});

test.afterAll("Logout application", async ({browser}) => {
    const loginPage = new LoginPage(page);
    await loginPage.logout();
    console.log('Logout ');
});
