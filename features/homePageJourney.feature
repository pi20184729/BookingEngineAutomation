Feature: To automate the home page journey
    Scenario: Validate if the user is able to select a hotel by giving required details
        Given User launches the BookingEngine URL
        When The user clicks on the Enter City drop down and enters a city
        And User clicks on the date picker
        And User selects number of adults
        And User selects number of children
        And User clicks on the search button
        And User clicks on the view details
