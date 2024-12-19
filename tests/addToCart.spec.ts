import { test, expect } from "@playwright/test";
import { RegisterUser } from "../pages/registerUser";
import { AddToCart } from "../pages/addToCart";


test('Add to Cart', async ({ page }) => {

  const registerUser = new RegisterUser(page, "", "");

  const username = registerUser.generateUsername(8);  // 8 characters for username
  const email = registerUser.generateEmail(10); 

  await registerUser.openBrowser();
  await registerUser.loginPageMethod();
  await registerUser.signUpCredentialMethod(username, email);
  await registerUser.enterInformation();

  const addToCartObj = new AddToCart(page);
  await addToCartObj.addToCartMethod();

  await expect(addToCartObj.verifyItemInCart).toBeVisible({ timeout: 30000 });
  
});
