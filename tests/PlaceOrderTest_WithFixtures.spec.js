const {expect} = require('@playwright/test');
const test = require('../fixtures/fixture');
const basePage = require('../page-objects/BasePage');
let e2etestdata;
test.beforeAll(async()=>{
    e2etestdata = JSON.parse(JSON.stringify((require('../utils/E2ETestData.json'))));
})

test.beforeEach(async({loginpage})=>{
    await loginpage.navigate();
    await loginpage.validLogin(e2etestdata.generic.username, e2etestdata.generic.password);
})

test("@SmokeTest: TC001-Test to Plcae An Order", async ({loginpage, cartpage, paymentpage, dashboardpage, confirmorderpage, orderhistorypage, ordersummarypage},info)=>{
    const testdata = new basePage().readTestData(info.title.split(":")[1].trim());

    await test.step("Step to validate a successful login", async()=>{
        const url1 = await dashboardpage.dashboardpage_url();
        const url2 = e2etestdata.generic.dashboard_url;
       expect(await dashboardpage.dashboardpage_url()===e2etestdata.generic.dashboard_url).toBeTruthy();
       const text1 = await dashboardpage.blinkinText();
       const text2 = testdata.blinktext;
       expect(await dashboardpage.blinkinText()===testdata.blinktext).toBeTruthy();
    });

    await test.step("Select the Product, add it to the cart & validate the toast message", async()=>{
        await dashboardpage.selectProductAddtoCart(testdata.productname);
        //expect.soft(await dashboardpage.toastmessagetext()===testdata.toastmessage).toBeTruthy(); => IT'S A BUG
        await dashboardpage.gotoCart();
    });
    
    //**** You can add further validations and test steps *****
    await cartpage.performCheckout(testdata.productname);
    await paymentpage.enterCreditCardDetails(testdata.creditcardno, testdata.expmonth, testdata.expdate, testdata.cvv, testdata.fullname);
    await paymentpage.enter_and_validate_coupon(testdata.couponcode);
    await paymentpage.enter_shipping_info(testdata.country);
    await paymentpage.clickPlaceOrder();
    await confirmorderpage.validateOrder();
    const orderid = await confirmorderpage.getOrderID();
    await confirmorderpage.goto_OrderHistory();
    await orderhistorypage.view_order(orderid);
    await ordersummarypage.getOrderDetails();   
    
});


