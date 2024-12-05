import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import loginpage from "../pages/loginpage";


setDefaultTimeout(60 * 1000);

Given('I navigated to the login page', async function () {

    await pageFixture.page.goto(process.env.BASEURL)
});

Then('I verify that user landed to a correct page', async function () {

    expect(await loginpage.loginTextLocater().isVisible())
});

Then('the username field should be enabled', async function () {

    expect(await loginpage.userEnable().isEnabled());

});

Then('the password field should be enabled', async function () {

    expect(await loginpage.pasEnable().isEnabled());

});

Then('the login button should be visible', async function () {

    expect(await loginpage.buttonLoginLocater().isVisible());

});

When('i enter invalid credentials username as {string} and password as {string}',
    async function (user: string, password: string) {
        await loginpage.userFiledLocater(user);
        await loginpage.passwordFieldLocater(password);


    }
);

When('clicks the login button', async function () {

    await loginpage.buttonLoginLocater().click();
    await pageFixture.page.waitForTimeout(6000);

});

Then('an error message should be displayed', async function () {

    expect(loginpage.invalidMessageLocater().isVisible());

});

When('i clicks the login button without entering credentials', async function () {

    await loginpage.buttonLoginLocater().click();

});

When('i enter valid credentials username as {string} and password as {string}',
    async function (user: string, password: string) {
        await loginpage.userFiledLocater(user);
        await loginpage.passwordFieldLocater(password);


    }
);

Then('a validation error should be displayed', async function () {
    expect(loginpage.withoutCredsLocater().isVisible());
});


Then('i should be redirected to the dashboard', async function () {

    expect(loginpage.dashboardTextLocater().isVisible());

});

