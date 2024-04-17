import {Page, Locator} from "playwright"

export class CartPage{
    readonly page: Page;
    readonly checkoutLink: Locator; 
    readonly firstName: Locator; 
    readonly lastName: Locator; 
    readonly postCode: Locator;
    readonly continue: Locator; 
    readonly finish: Locator; 
    readonly thankyouMsg: Locator; 
    readonly orderConfirmationMsg: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.checkoutLink = page.locator('[data-test="checkout"]'); 
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');
        this.finish = page.locator('[data-test="finish"]');
        this.thankyouMsg = page.locator('[data-test="complete-header"]')
        this.orderConfirmationMsg = page.locator('[data-test="complete-text"]')
    }

async CompleteForm(firstName: string, lastName: string, Postcode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postCode.fill(Postcode);
    await this.continue.click();
    await this.finish.click(); 
}



}