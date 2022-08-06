const base = require('@playwright/test');
const { CartPage } = require("../page-objects/CartPage");
const { ConfirmOrderPage } = require("../page-objects/ConfirmOrderPage");
const { DashboardPage } = require("../page-objects/DashboardPage");
const { LoginPage } = require("../page-objects/LoginPage");
const { OrderHistoryPage } = require("../page-objects/OrderHistoryPage");
const { OrderSummaryPage } = require("../page-objects/OrderSummaryPage");
const { PaymentPage } = require("../page-objects/PaymentPage");

const test = base.test.extend({
    loginpage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    cartpage: async({page},use)=>{
        await use(new CartPage(page));
    },
    dashboardpage: async({page},use)=>{
        await use(new DashboardPage(page));
    },
    paymentpage: async({page},use)=>{
        await use(new PaymentPage(page));
    },
    confirmorderpage: async({page},use)=>{
        await use(new ConfirmOrderPage(page));
    },
    ordersummarypage: async({page},use)=>{
        await use(new OrderSummaryPage(page));
    },
    orderhistorypage: async({page},use)=>{
        await use(new OrderHistoryPage(page));
    },
});

module.exports=test;
