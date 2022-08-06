class OrderSummaryPage{
    constructor(page){
        this.orderid = page.locator(".email-container small + div");
        this.address_table = page.locator(".address");

    }

async getOrderDetails(){
    console.log("*** Order Summary *** ");
    console.log("Order ID: "+await this.orderid.textContent());
    console.log(await this.address_table.locator("div").first().textContent()+": "+ await this.address_table.locator("p").first().textContent());
    console.log(await this.address_table.locator("div").first().textContent()+": "+ await this.address_table.locator("p").nth(1).textContent());
    console.log(await this.address_table.locator("div").last().textContent()+": "+ await this.address_table.locator("p").nth(2).textContent());
    console.log(await this.address_table.locator("div").last().textContent()+": "+ await this.address_table.locator("p").nth(3).textContent());

}

}

module.exports = {OrderSummaryPage};
    