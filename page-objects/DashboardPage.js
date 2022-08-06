class DashboardPage{
    constructor(page){
        this.allproduct_cards = page.locator(".row .col-lg-4 .card");
        this.cart_button = page.locator("button[routerlink='/dashboard/cart']");
        this.productdiv = page.locator("#products");
        this.blinkmessage = page.locator(".m-2.blink_me");
        this.toastmessage = page.locator(".ng-tns-c4-7.toast-message.ng-star-inserted");
        this.page=page;

    }

    async selectProductAddtoCart(productname){
        await this.allproduct_cards.first().waitFor();
        const count=await this.allproduct_cards.count();
        for(let i=0;i<count;i++){
            if(await this.allproduct_cards.nth(i).locator("b").textContent()===productname){
                await this.allproduct_cards.locator("button").nth(1).click();
                break;
            }
        }
        
    }

    async blinkinText(){
        return await this.blinkmessage.textContent();
    }

    async dashboardpage_url(){
        await this.allproduct_cards.first().waitFor();
        await this.page.waitForLoadState('networkidle');
        return await this.page.url();
    }

    /*
        How to pause the DOM while inspecting a toast message in chrome: press F12(developer tool will open) -->  Go to
        Console --> Type: setTimeout(()=>{debugger},2000) -->and immediately perform the action 
    */
    async toastmessagetext(){
        return await this.toastmessage.textContent();
    }

    async gotoCart(){
        await this.cart_button.click();
    }
}
module.exports= {DashboardPage};