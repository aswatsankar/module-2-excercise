
import {Page, Locator} from "playwright"

export class ProductsPage{
    readonly page: Page;
    readonly Backpack: Locator;
    readonly FleeceJacket: Locator;
    readonly BoltTShirt: Locator;
    readonly addToCart: Locator; 
    readonly shoppingCartIcon: Locator;
    readonly checkoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Backpack = page.locator('[data-test="item-4-title-link"]')
        this.FleeceJacket = page.locator('[data-test="item-5-title-link"]')
        this.BoltTShirt=page.locator('[data-test="item-1-title-link"]')
        this.addToCart = page.locator('[data-test="add-to-cart"]')
        this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.checkoutLink = page.locator('[data-test="checkout"]'); 
    }

    async addFleeceJacketToShoppingCart() {
        await this.FleeceJacket.click();
        await this.addToCart.click(); 
        await this.page.waitForLoadState("networkidle");
    }

    async addSauceLabsBolt_TShirt_ToShoppingCart() {
        await this.BoltTShirt.click();
        await this.addToCart.click(); 
        await this.page.waitForLoadState("networkidle");
    }

    async addProductToShoppingCart(product: string) {
        await this.FleeceJacket.click();
        await this.addToCart.click(); 
        await this.page.waitForLoadState("networkidle");
    }

    async navigateToLandingPage() {
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }

    async navigateToShoppingCartPage() {
        await this.shoppingCartIcon.click(); 
        await this.page.waitForLoadState("networkidle");
    }

    async navigateTocheckout() {
        await this.checkoutLink.click(); 
        await this.page.waitForLoadState("networkidle");
    }
    



}
