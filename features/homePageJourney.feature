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
        And User comapres the total price including GST and discount with the displayed total price
        And User enters the first name
        And User enters the last name
        And User enters the contact number
        And User enters the email id
        And User enters the address
        And User clicks the pay now button
        And User clicks on UPI payments option
        And User enters the UPI ID
        And User clicks on Make Payment button
        And User clicks on back to home button
    #negative journey
    Scenario: Validate if the user is not able to book with wrong details
        Given User launches the BookingEngine URL
        When User clicks on view detail
        And User selects the number of non ac rooms
        And User clicks on the nreserve button
        And User enters the firstname
        And User enters the lastname
        And User enters invalid contact number
        And User enters invalid email id
        And User enters address
        And User clicks the pay button
        And User clicks the UPI option