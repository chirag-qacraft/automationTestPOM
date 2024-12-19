import {Page,Locator,expect} from "@playwright/test";
import { Console } from "console";

export class AddToCart{

    readonly page : Page;
    readonly productLink : Locator;
    readonly addToCartButton : Locator;
    readonly contShoppingButton : Locator;
    readonly cartLink : Locator;
    readonly verifyItemInCart : Locator;
    readonly verifyProduct : Locator;

    constructor (page:Page)
    {
        this.page = page;
        this.productLink = page.locator("//a[contains(text(),'Products')]//parent::li");
        this.addToCartButton = page.locator("(//a[text()='Add to cart'])[1]");
        this.contShoppingButton = page.locator("//button[contains(text(),'Continue')]");
        this.cartLink = page.locator("//a[contains(text(),'Cart')]//parent::li");
        this.verifyItemInCart = page.locator("//p[contains(text(),'Women')]");
        
    }

    async addToCartMethod()
    {
        await this.productLink.click();
        await this.addToCartButton.hover();
        await this.addToCartButton.click();
        await this.contShoppingButton.click();
        await this.page.waitForTimeout(3000);
        await this.cartLink.click();
        await this.page.waitForTimeout(3000);
    }


}