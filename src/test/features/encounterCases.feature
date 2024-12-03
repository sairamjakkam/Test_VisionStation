Feature: Encounter Case page search functionality check

  @test
  Scenario: I should be able to search, filter cases
    Given I navigated to encounter case page and varified page
    And I check whether searchBox is visible and enabled or not
    When I enter patient name in searchBox as "ram"
    Then I should be able to see respective result in table view
