class LoginPage{
    constructor(page){
        this.emailid = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginBtn=page.locator("#login");
        this.page=page;
    }

    async validLogin(username, password){
        
        await this.emailid.type(username);
        await this.password.type(password);
        await this.loginBtn.click();    
    }

    async navigate(){
        await this.page.goto("https://rahulshettyacademy.com/client");
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {LoginPage};