Feature: Login

  Scenario: Login to inchurch site and validate the user name
    Given I am on inchurch site
    When I search for Entrar como visitante
    Then I should make login on system and validate the user name
