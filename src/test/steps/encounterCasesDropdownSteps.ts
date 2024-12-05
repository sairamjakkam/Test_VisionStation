import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import  encountercasespage from "../pages/encounterCasesPage";

//let encounterCasesPage: EncounterCasesPage;


setDefaultTimeout(60 * 1000);

    //below is without using pom
    /* Then('I enter patient name in searchBox as {string} and selects some options in {string} dropdown', async function (patientName, roomName) {
        //accessing dropdown
        await pageFixture.page.click("(//div[@role='combobox'])[1]");
        await pageFixture.page.waitForTimeout(1000)
        await pageFixture.page.click(`//li[@data-value="${roomName}"]//input`);
        await pageFixture.page.waitForTimeout(2000)
    });
    */

    // below is using pom
    Then('I enter patient name in searchBox as {string} and selects some options in {string} dropdown', async function (patientName, roomName) {
        //accessing dropdown
        
        expect(encountercasespage.pageHeadingLocator()).toHaveText("Cases");
        expect(encountercasespage.searchBoxLocator()).toBeEditable();
        await encountercasespage.clickSelectRoomDropdown();
        await pageFixture.page.waitForTimeout(1000)
        await encountercasespage.selectDropdownOptionWithValue('OR 2');
        await encountercasespage.selectDropdownOptionWithValue('OR 4');
    });