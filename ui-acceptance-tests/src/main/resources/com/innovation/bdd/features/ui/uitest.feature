Feature: Add A country and time
  As world temi checker
  I want to be able add times for different countrisin a table
@test

  Scenario: Add a country and time
    Given I have access to the url
    When I add a country
    And I add a number
    And I click the add button
    Then The table is populated with new country and time
