Feature: Login functionality
  To ensure the login page works as expected, we need to verify field visibility, button availability,
   and the functionality of login with various credentials.

  Background:
    Given I navigated to the login page

  @Login
  Scenario: Verify login fields are enabled
    Then I verify that user landed to a correct page
    And the username field should be enabled
    And the password field should be enabled

  Scenario: Verify login button is visible
    Then the login button should be visible

  Scenario: Verify login with invalid credentials
    When i enter invalid credentials username as "<user>" and password as "<password>"
    And click on the login button
    Then an error message should be displayed

    Examples:
      | user | password |
      | john | john123  |

  Scenario: Verify login without credentials
    When i click on the login button without entering credentials
    Then a validation error should be displayed

  Scenario: Verify login with valid credentials
    When i enter valid credentials username as "<user>" and password as "<password>"
    And click on the login button
    Then i should be redirected to the dashboard

    Examples:
      | user  | password |
      | Admin | admin123 |

  Scenario: Verify the profile icon visibility and logout functionality
    When i enter valid credentials username as "<user>" and password as "<password>"
    And click on the login button
    Then i should be able to see the profile icon on the home page
    And click on the logout button
    Then i need to validate to login page

    Examples:
      | user  | password |
      | Admin | admin123 |
