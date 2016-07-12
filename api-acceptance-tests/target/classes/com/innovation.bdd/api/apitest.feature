Feature: Api level test of Time Machine
  As world time checker
  I want to be able add times for different countrisin a table

  @test

  Scenario: time is diplaying correctly

    Given I have time access
    When I query the url
    Then Then I assert a 200 is returned