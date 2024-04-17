import {Page, Locator} from "playwright"

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly menuButton: Locator;
    readonly logoutMenuItem: Locator;
    readonly ErrorMessage: Locator;
    readonly menu: Locator; 
    readonly Logoutbutton: Locator; 


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutMenuItem = page.locator('text=Logout');
        this.ErrorMessage = page.locator('[data-test="error"]');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.Logoutbutton = page.locator('[data-test="logout-sidebar-link"]');
    }

    async navigateToLandingPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    async logout() {
        await this.menu.click();
        await this.Logoutbutton.click(); 
        await this.page.waitForLoadState("networkidle");
    }

}