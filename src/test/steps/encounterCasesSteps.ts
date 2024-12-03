import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


setDefaultTimeout(60 * 1000);

    Given('I navigated to encounter case page and varified page', async function () {
        await pageFixture.page.goto(process.env.BASEURL);

        //assertion to verify text
        await expect(pageFixture.page.locator(".text-2xl")).toHaveText("Cases");
    });

    Given('I check whether searchBox is visible and enabled or not', async function () {
        //assertion to verify visibility
        await expect(pageFixture.page.locator(".flex-1 .MuiBox-root")).toBeEditable();
        await expect(pageFixture.page.locator(".flex-1 .MuiBox-root")).toBeVisible();
        await expect(pageFixture.page.locator(".flex-1 .MuiBox-root")).toBeEnabled();
    });
   
    When('I enter patient name in searchBox as {string}', async function (searchString) {
        const placeHolder = await pageFixture.page.locator(".flex-1 .MuiBox-root input").textContent();
        console.log(placeHolder);
        await pageFixture.page.locator(".flex-1 .MuiBox-root input").fill(searchString);
        await pageFixture.page.waitForTimeout(2000)
    });

    Then('I should be able to see respective result in table view', async function () {
    
    });