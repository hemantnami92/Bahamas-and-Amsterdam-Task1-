Feature: Verification of Bahamas and Amsterdam details

  Scenario Outline: Check in google about Amsterdam and Bahamas
    Given Launch google chrome
    Then user enters "<keyword>"
    When title of login page is displayed
    Then take the screen shot the page
    And  close browser

    Examples: 
      | keyword |
      | Bahamas |
      | Amsterdam |