Feature: Home Page
    Scenario: TC_001: Validate whether the user is able to click on About Us button
        Given : User launches the Booking Engine URL
        When : The user clicks on the About Us button
        Then : The user should be navigated to the About Us page

    Scenario Outline: Selecting city: TC_002: Validate if the user is able to select city from drop down
        Given : User launches the Booking Engine URL
        When : The user clicks on the Enter City
        Then : The user should be able to select desired city
        Examples:
            | City    | Hotel names |
            | Chennai | Crown       |
            | Chennai | Emerald bay |
            | Chennai | Regency     |
            | Chennai | Five Points |

    Scenario: TC_003: Validate if the user is able to select Check-in and check-out dates
        Given : User launches the Booking Engine URL
        When : The user clicks on Check-in/Check-out button
        Then : The user should be able to select the check-in and check-out dates

    Scenario: TC_004: Validate if the user is able to select number of rooms
        Given : User launches the Booking Engine URL
        When : The user clicks on Rooms drop down option
        And : The user should be able to select the number of rooms by clicking '+' and '-' buttons
        Then : The user should be able to select the number of rooms

    Scenario: TC_005: Validate if the user is able to select number of Adults
        Given : User launches the Booking Engine URL
        When : The user clicks on Rooms drop down option
        And : The user should be able to select the number of Adults by clicking '+' and '-' buttons
        Then : The user should be able to select the number of Adults

    Scenario: TC_006: Validate if the user is able to select number of Children
        Given User launches the Booking Engine URL
        When The user clicks on Rooms drop down option
        And The user should be able to select the number of Children by clicking '+' and '-' buttons
        Then The user should be able to select the number of Children

    Scenario: TC_007: Validate if the user is able to search by clicking on Search button
        Given User launches the Booking Engine URL
        When The user clicks on the Search button
        Then The search results should be displayed

    Scenario: TC_008: Validate if the user is able to click on View Details button in the search reults
        Given User launches the Booking Engine URL
        When The user clicks on the View Details button
        Then The user should be navigated to the RoomType page

    Scenario: HomePage Journey : Validate if the user ia able to select a hotel by giving required details
        Given User launches the BookingEngine URL
        When The user clicks on the Enter City drop down
        And The user clicks on Check-in/Check-out button
        And The user selects the number of Rooms, Adults, Children by clicking '+' and '-' buttons from the Rooms drop down
        And The user clicks on the Search button
        And The user clicks on the View Details button of a particular hotel
        Then The user should be able to select desired city
        And The user should be able to select the check-in and check-out dates
        And The user should be able to select the number of Rooms, Adults, Children
        And The search results should be displayed
        And The user should be navigated to the RoomType page






