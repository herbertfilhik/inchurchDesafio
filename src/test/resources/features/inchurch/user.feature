Feature: Create User

  Scenario: Create a new user for inchurch
    Given I am on inchurch site to create a user
    When I search for Entrar como visitante to open option and input data for new user
    Then I must be inform data to insert register on the base
