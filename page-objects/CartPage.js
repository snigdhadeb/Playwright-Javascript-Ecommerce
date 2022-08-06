const {expect}=require('@playwright/test');
class CartPage{
    constructor(page){
        this.cartitems_body= page.locator("div li");
        this.checkoutbutton = page.locator("text=Checkout");
        this.product_on_cart = page.locator("h3:has-text('zara coat 3')");

    }

    async performCheckout(productname){
        await this.cartitems_body.first().waitFor();
        await this.validateProductOnCart(productname);
        await this.checkoutbutton.click();
    }

    async validateProductOnCart(productname){
        await expect(this.product_on_cart).toHaveText(productname);
    }
}
module.exports = {CartPage};