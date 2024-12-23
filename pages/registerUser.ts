import {Page,Locator,expect} from "@playwright/test";
import { Console } from "console";

export class RegisterUser 
{

    page : Page;
    username: string;
    email: string;
    loginLink : Locator;
    nameTextBox : Locator;
    emailTextBox : Locator;
    signUpButton : Locator;
    titleRadioButton : Locator;
    passwordTextBox : Locator;
    accountCreatedMsg : Locator;
    continueButton : Locator;
    verifyUser : Locator;
    checkBox1 : Locator;
    checkBox2 : Locator;
    addrFirstNameTextBox : Locator;
    addrLastNameTextBox : Locator;
    addr1TextArea : Locator;
    addr2TextArea : Locator;
    stateTextBox : Locator;
    cityTextBox : Locator;
    zipTextBox : Locator;
    mobileTextBox : Locator;
    createAccountButton : Locator;
    logOutButton : Locator;

    
    constructor (page:Page, username: string, email:string)
    {
        this.page = page;
        this.username = username;
        this.email = email;
        this.loginLink = page.locator("//a[contains(text(),'Signup')]");
        this.nameTextBox = page.locator("//input[@placeholder='Name']");
        this.emailTextBox = page.locator("(//input[@placeholder='Email Address'])[2]");
        this.signUpButton = page.locator("//button[text()='Signup']");
        this.titleRadioButton = page.locator("//input[@id='id_gender1']");
        this.passwordTextBox = page.locator("//input[@id='password']");
        this.accountCreatedMsg = page.locator("//b[text()='Account Created!']");
        this.continueButton = page.locator("//a[text()='Continue']//parent::div");
        this.verifyUser = page.locator(`//b[contains(text(),'${username}')]`);
        this.checkBox1 = page.locator("//input[@id='newsletter']");
        this.checkBox2 = page.locator("//input[@id='optin']");
        this.addrFirstNameTextBox = page.locator("//input[@id='first_name']");
        this.addrLastNameTextBox = page.locator("//input[@id='last_name']");
        this.addr1TextArea = page.locator("//input[@id='address1']");
        this.addr2TextArea = page.locator("//input[@id='address2']");
        this.stateTextBox = page.locator("//input[@id='state']");
        this.cityTextBox = page.locator("//input[@id='city']");
        this.zipTextBox = page.locator("//input[@id='zipcode']"); 
        this.mobileTextBox = page.locator("//input[@id='mobile_number']");
        this.createAccountButton = page.locator("//button[text()='Create Account']"); 
        this.logOutButton = page.locator("//a[text()=' Logout']//parent::li");

    }

    // Improved dynamic username generation function
    generateUsername(length: number = 8): string 
    {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        this.username = Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        return this.username;
    }
    generateEmail(length: number = 10): string 
    {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.email = Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        return `${this.email}@gmail.com`;
    }

    async openBrowser()
    {
        await this.page.goto("http://automationexercise.com/", { waitUntil: "domcontentloaded", timeout: 120000 });

    }

    async loginPageMethod()
    {
        await this.page.waitForTimeout(6000);
        await this.loginLink.click();
    }

    async signUpCredentialMethod(nameValue: string, emailValue: string): Promise<void> 
    {
        

        // Fill in the name and email dynamically
        await this.nameTextBox.fill(nameValue);
        await this.emailTextBox.fill(emailValue);

        await this.page.waitForTimeout(5000);
        
        // Click the signup button
        await this.signUpButton.click();
    }
    

    async enterInformation()
    {
        await this.titleRadioButton.click();
        await this.passwordTextBox.fill("12345678");
        await this.page.selectOption("//select[@id='days']", { value: '30' });
        await this.page.selectOption("//select[@id='months']", { value: '1' });
        await this.page.selectOption("//select[@id='years']", { value: '1995' });
        await this.checkBox1.click();
        await this.checkBox2.click();
        await this.addrFirstNameTextBox.fill("Jackson");
        await this.addrLastNameTextBox.fill("Robin");
        await this.addr1TextArea.fill("address 1");
        await this.addr2TextArea.fill("address 2");
        await this.page.selectOption("//select[@id='country']", { value: 'India' });
        await this.stateTextBox.fill("Gujarat");
        await this.cityTextBox.fill("Vadodara");
        await this.zipTextBox.fill("390025");
        await this.mobileTextBox.fill("111111111");
        await this.createAccountButton.click();
    
    }

    async continueButtonMethod()
    {
        await this.continueButton.click();
    }

    
    async logOutMethod()
    {
        await this.logOutButton.click();
    }

}