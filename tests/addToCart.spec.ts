import { test, expect } from "@playwright/test";
import { RegisterUser } from "../pages/registerUser";
import { AddToCart } from "../pages/addToCart";


test('Add to Cart TC 2', async ({ page }) => {

  const registerUser = new RegisterUser(page, "", "");

  const username = registerUser.generateUsername(8);  // 8 characters for username
  const email = registerUser.generateEmail(10); 

  await page.goto("/")
  await registerUser.loginPageMethod();
  await registerUser.signUpCredentialMethod(username, email);
  await registerUser.enterInformation();

  const addToCartObj = new AddToCart(page);
  await addToCartObj.addToCartMethod();

  await expect(addToCartObj.verifyItemInCart).toHaveText("Blue Top");
  await page.waitForTimeout(2000);
  
  await expect(addToCartObj.verifyPrice).toHaveText("Rs. 500");
  await page.waitForTimeout(2000);

  await expect(addToCartObj.verifyQty).toHaveText("1");
  await page.waitForTimeout(2000);

  await expect(addToCartObj.verifyTotalPrice).toHaveText("Rs. 500");
  await page.waitForTimeout(2000);

  await addToCartObj.removeFromCartMethod();
  await page.waitForTimeout(2000);

  await expect(addToCartObj.verifyEmptyCart).toHaveText("Cart is empty!");

  await addToCartObj.checkOutMethod();
  
  await addToCartObj.cardPaymentMethod();

  console.log ("Both Test 1 & 2 are Completed... Nice Experience!!!");
});
