import { Page } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

class LoginPage {

    private Elements = {

        logintext_loc        : '//h5[normalize-space()="Login"]',
        userfield_loc        : '//input[@placeholder="username"]',
        Passfield_loc        : '//input[@placeholder="password"]',
        button_loc           : '//button[normalize-space()="Login"]',
        invalidmsg_loc       : '//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]',
        withoutcred_loc      : '//div[@class="orangehrm-login-slot-wrapper"]//div[1]//div[1]//span[1]',
        dashboardtext_loc    : '//h6[normalize-space()="Dashboard"]'

    }

    loginTextLocater() {
        return pageFixture.page.locator(this.Elements.logintext_loc);
    }

    userEnable() {
        return pageFixture.page.locator(this.Elements.userfield_loc);
    }

    pasEnable() {
        return pageFixture.page.locator(this.Elements.Passfield_loc);
    }

    userFiledLocater(value: string) {
        return pageFixture.page.locator(this.Elements.userfield_loc).fill(value);
    }

    passwordFieldLocater(value: string) {
        return pageFixture.page.locator(this.Elements.Passfield_loc).fill(value);
    }

    buttonLoginLocater() {
        return pageFixture.page.locator(this.Elements.button_loc);
    }

    invalidMessageLocater() {
        return pageFixture.page.locator(this.Elements.invalidmsg_loc);
    }

    withoutCredsLocater() {
        return pageFixture.page.locator(this.Elements.withoutcred_loc);
    }

    dashboardTextLocater() {
        return pageFixture.page.locator(this.Elements.dashboardtext_loc);
    }



}

const loginpage = new LoginPage();
export default loginpage;