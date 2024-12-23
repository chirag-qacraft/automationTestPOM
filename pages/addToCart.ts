import {Page,Locator,expect} from "@playwright/test";
import { Console } from "console";

export class AddToCart{

    page : Page;
    productLink : Locator;
    addToCartButton : Locator;
    contShoppingButton : Locator;
    cartLink : Locator;
    verifyItemInCart : Locator;
    verifyPrice : Locator;
    verifyQty : Locator;
    verifyTotalPrice : Locator;
    removeItemButton : Locator;
    verifyEmptyCart : Locator;
    viewCart : Locator;
    checkoutButton : Locator;
    placeOrderButton : Locator;
    cardName : Locator;
    cardNumber : Locator;
    cardCVC : Locator;
    cardExpiryMonth : Locator;
    cardExpiryYear : Locator;
    pay : Locator;
    invoice : Locator;

    constructor (page:Page)
    {
        this.page = page;
        this.productLink = page.locator("//a[contains(text(),'Products')]//parent::li");
        this.addToCartButton = page.locator("(//a[text()='Add to cart'])[1]");
        this.contShoppingButton = page.locator("//button[contains(text(),'Continue')]");
        this.cartLink = page.locator("//a[contains(text(),'Cart')]//parent::li");
        this.verifyItemInCart = page.locator("//a[contains(text(),'Blue')]");
        this.verifyPrice = page.locator("(//p[contains(text(),'500')])[1]");
        this.verifyQty = page.locator("//button[text()='1']");
        this.verifyTotalPrice = page.locator("//p[@class='cart_total_price']");
        this.removeItemButton = page.locator("//a[@class='cart_quantity_delete']");
        this.verifyEmptyCart = page.locator("//b[contains(text(),'empty!')]");
        this.viewCart = page.locator("//u[contains(text(),'View')]");
        this.checkoutButton = page.locator("//a[contains(text(),'Checkout')]");
        this.placeOrderButton = page.locator("//a[contains(text(),'Place')]");
        this.cardName = page.locator("//input[@name='name_on_card']");
        this.cardNumber = page.locator("//input[@name='card_number']");
        this.cardCVC = page.locator("//input[@name='cvc']");
        this.cardExpiryMonth = page.locator("//input[@name='expiry_month']");
        this.cardExpiryYear = page.locator("//input[@name='expiry_year']");
        this.pay = page.locator("//button[@id='submit']");
        this.invoice = page.locator("//a[contains(text(),'Invoice')]");
    }

    async addToCartMethod()
    {
        await this.productLink.click();
        await this.addToCartButton.hover();
        await this.addToCartButton.click();
        await this.page.waitForTimeout(3000);
        await this.contShoppingButton.click();
        await this.page.waitForTimeout(3000);
        await this.cartLink.click();
        await this.page.waitForTimeout(3000);
    }

    async removeFromCartMethod()
    {
        await this.removeItemButton.click();
    }

    async checkOutMethod()
    {
        await this.productLink.click();
        await this.addToCartButton.hover();
        await this.addToCartButton.click();
        await this.page.waitForTimeout(3000);
        await this.contShoppingButton.click();
        await this.cartLink.click();
        await this.checkoutButton.click();
        await this.page.waitForTimeout(1000);
        await this.placeOrderButton.click();

    }

    async cardPaymentMethod()
    {
        await this.cardName.fill("robin");
        await this.cardNumber.fill("1234567890");
        await this.cardCVC.fill("311");
        await this.cardExpiryMonth.fill("01");
        await this.cardExpiryYear.fill("2040");
        await this.page.waitForTimeout(1000);
        await this.pay.click();
        await this.page.waitForTimeout(1000);
        await this.invoice.click();
        await this.page.waitForTimeout(4000);
    }
}