const {expect} = require('@playwright/test');
class ConfirmOrderPage{
    constructor(page){
        this.summary_box = page.locator(".box.box-ext.order-summary-box");
        this.thankyou_text = page.locator(".hero-primary");
        this.orderid = page.locator("label[class='ng-star-inserted']");
        this.goto_orderhistory_link = page.locator("label[routerlink='/dashboard/myorders']");

    }

    async validateOrder(){
        await this.summary_box.waitFor();
        await expect(this.thankyou_text).toHaveText(" Thankyou for the order. ");
    }

    async getOrderID(){
        const orderid = await this.orderid.textContent();
        return orderid.slice(3,27);
    }

    async goto_OrderHistory(){
        await this.goto_orderhistory_link.click();
    }
}
module.exports = {ConfirmOrderPage};