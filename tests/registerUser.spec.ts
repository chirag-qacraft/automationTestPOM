import { test, expect } from "@playwright/test";
import { RegisterUser } from "../pages/registerUser";
import { AddToCart } from "../pages/addToCart";


test('Register User', async ({ page }) => {

  const registerUser = new RegisterUser(page, "", "");

  const username = registerUser.generateUsername(8);  // 8 characters for username
  const email = registerUser.generateEmail(10); 

  await registerUser.openBrowser();
  await registerUser.loginPageMethod();
  await registerUser.signUpCredentialMethod(username, email);
  await registerUser.enterInformation();

  await expect(registerUser.accountCreatedMsg).toHaveText("Account Created!");
  
  const accountCreatedText = await registerUser.accountCreatedMsg.textContent();
  await expect(registerUser.accountCreatedMsg).toHaveText("Account Created!");
  console.log(accountCreatedText); 

  await registerUser.continueButtonMethod();

  await expect(registerUser.verifyUser).toBeVisible();
  console.log(`Username is ${username}`);
  
  
});
