Feature: Roomtype page
    Scenario: TC_001: Validate whether the user is able to increase or decrease the number of rooms
        Given User launches the view details page
        When The user clicks on the increment or decrement button
        Then The user should be select the number of desired rooms
    Scenario: TC_002: Validate whether the user is able to check or uncheck on the include food checkbox
        Given User launches the view details page
        When The user clicks on the include food checkbox
        Then The user should be able to check or uncheck the include food checkbox
    Scenario: TC_003: Validate whether the rate of the particular room shown is equal to the rate of the room multiplied by the number of rooms selected
        Given User launches the view details page
        When User has selected the number of rooms and food plan
        Then The rate of the particular room shown should be equal to the rate of the room multiplied by the number of rooms selected
    Scenario: TC_004: Validate whether the total price calculated is according to the number of rooms and food plan selected
        Given User launches the view details page
        When The user selects the rooms and food plans required
        Then The total price calculated should be according to the number of rooms and food plan selected
    Scenario: : TC_005: Validate whether the user is able to click on the Reserve button
        Given User launches the view details page
        When The user clicks on the reserve button
        Then The user should be directed to the Booking form page
    Scenario: RoomtypePage Journey : Validate if the user is able to select Rooms
        Given User launches the view details page
        When User the clicks on the increment or decrement button of the desired Rooms
        And The user clicks on the include food checkbox
        And The Price is shown at a particular room
        And Total Price is shown
        And The user clicks on the reserve button
        Then User should be able to select the number of rooms
        And The user should be able to check or uncheck on the include food checkbox
        And The rate of the particular room shown should be equal to the rate of the room multiplied by the number of rooms selected
        And The total price calculated should be according to the number of rooms and food plan selected
        And The user should be directed to the Booking form page