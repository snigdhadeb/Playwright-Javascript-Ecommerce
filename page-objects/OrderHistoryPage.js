class OrderHistoryPage{
    constructor(page){
        this.allorderstable = page.locator(".table");
        this.allorders_id = page.locator("th[scope='row']");
        this.all_view_btns = page.locator(".btn.btn-primary");
    }

    async view_order(orderid){
        await this.allorderstable.waitFor();
        for(let i=0;i<await this.allorders_id.count();i++){
            const currentorderid=await this.allorders_id.nth(i).textContent();
            if(orderid===currentorderid){
                await this.all_view_btns.nth(i).click();
                break;
            }
        }
    }

}
module.exports = {OrderHistoryPage};