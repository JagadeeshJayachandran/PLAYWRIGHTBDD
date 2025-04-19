Feature: Google Home Page
  As a user
  I want to visit Google
  So that I can see the Google title

  Scenario: Visit Google and check title
    Given I am on the Google home page
    Then the page title should contain "Google"
