Feature: To automate the home page journey
    Scenario: Validate if the user is able to select a hotel by giving required details
        Given User launches the BookingEngine URL
        When The user clicks on the Enter City drop down and enters a city
        And User clicks on the date picker
        And User selects number of adults
        And User selects number of children
        And User clicks on the search button
        And User clicks on the view details
        And User selects the number of AC rooms
        And User clicks on the Deluxe AC increment button and include food checkbox
        And User compares the total price with the total number of rooms selected
        And User clicks on the reserve button
        And User enters the first name
        And User enters the last name
        And User enters the contact number
        And User enters the email id
        And User enters the address
        And User clicks the pay now button