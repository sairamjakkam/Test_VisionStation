Feature: Encounter Creation
verify the Create encounter functionality 

  Background:
    Given I navigated to the login page
    And I enter valid credentials username as "wmohiuddin" and password as "Kwasif@2020"
    And I click on the login button
    
@Encounters
 Scenario: I should be able to create a new encounter in room number 2 with a new patient MRN not in the database

    When I select the room number as 2
    Then I verify the selected room number is updated to 2
    And I verify the "Create Encounter" button is visible on the page
    When I click on the "Create Encounter" button
    And I enter the Patient MRN as "<Patient MRN>" and click on "Search"
    And I enter the Patient name as "<Patient name>" and Date of Birth as "<dob>"
    And I click on the "Create Patient" button
    Then I verify the "Create Encounter" button is disabled
    When I enter the Procedure name as "<Procedure name>", Physician name as "<Physician name>", and Nurse name as "<Nurse name>"
    Then I verify the "Create Encounter" button is enabled
    When I enter a duplicate Case ID "<Duplicate case id>"
    Then I verify the "Create Encounter" button is disabled
    When I enter a unique Case ID "<Unique case id>"
    Then I verify the "Create Encounter" button is enabled
    When I click on the "Create Encounter" button
    Then I verify the encounter name is "<Patient name>" on the homepage

Examples:
    | Patient MRN  | Patient name  | dob        | Procedure name | Physician name | Nurse name | Duplicate case id | Unique case id |
    | MRN345       | William Sams | 01/01/1990 | Procedure A    | Dr. Smith      | Nurse John  |        123        |      5670      | 
