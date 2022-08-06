const {expect}=require('@playwright/test');
class PaymentPage{
    constructor(page){
        this.creditcardnumber = page.locator("input:below(:text(\"Credit Card Number \"))");
        this.date_month_dropdown = page.locator("select[class='input ddl']");
        this.cvv = page.locator("input:below(:text(\"CVV Code \"))");
        this.name_on_card = page.locator("input:below(:text(\"Name on Card \"))");
        this.coupon = page.locator("input[name='coupon']");
        this.apply_coupon_btn = page.locator("button[type='submit']");
        this.coupontext = page.locator("p:has-text('* Coupon Applied')");
        this.select_country = page.locator("input[placeholder='Select Country']");
        this.select_country_optionlist = page.locator(".ta-results");
        this.placeorder_btn = page.locator(".btnn.action__submit");
    }

    async enterCreditCardDetails(creditcardno, expdate, expmonth, cvv, fullname){
        await this.creditcardnumber.first().fill(creditcardno);
        await this.date_month_dropdown.first().selectOption({label: "09"});
        await this.date_month_dropdown.last().selectOption({label: "26"});
        await this.cvv.first().fill(cvv);
        await this.name_on_card.first().fill(fullname);
    }

    async enter_and_validate_coupon(couponcode){
        await this.coupon.fill(couponcode);
        await this.apply_coupon_btn.click();
        await this.coupontext.waitFor();
        await expect(this.coupontext).toBeVisible();
    }

    async enter_shipping_info(country){
        await this.select_country.type(country.slice(0,3), {delay: 200});
        await this.select_country_optionlist.waitFor();
        const optioncount=await this.select_country_optionlist.locator("button").count();
        for(let i=0;i<optioncount;i++){
            const optiontext=await this.select_country_optionlist.locator("button").nth(i).textContent();
            if(await optiontext.trim()===country){
                await this.select_country_optionlist.locator("button").nth(i).click();
                break;
        }
    }
    }

    async clickPlaceOrder(){
        await this.placeorder_btn.click();
    }

}
module.exports = {PaymentPage};