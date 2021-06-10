import {When} from '@cucumber/cucumber'
import homePage from '../pages/homePage.page'

When('The user clicks on the Enter City drop down and enters a city', () => {
    homePage.enterCity()    
})
When('User clicks on the date picker', () => {
    homePage.chooseDates()
})
When('User selects number of adults', () => {
    homePage.chooseAdults()
})
When('User selects number of children', () => {
    homePage.chooseChild()
})
When('User clicks on the search button', () => {
    homePage.chooseSearch()
})
When('User clicks on the view details', () => {
    homePage.chooseViewDetails()
})
When('User selects the number of AC rooms', () => {
    homePage.chooseACIncrement()
})
When('User clicks on the Deluxe AC increment button and include food checkbox', () => {
    homePage.chooseDeluxeACIncrement()
})
When('User compares the total price with the total number of rooms selected', () => {
    homePage.comparePrice()
})
When('User clicks on the reserve button', () => {
    homePage.chooseReserveButton()
})
When('User enters the first name', () => {
    homePage.enterFirstName()
})
When('User enters the last name', () => {
    homePage.enterLastName()
})
When('User enters the contact number', () => {
    homePage.enterContact()
})
When('User enters the email id', () => {
    homePage.enterEmail()
})
When('User enters the address', () => {
    homePage.enterAddress()
})
When('User clicks the pay now button', () => {
    homePage.choosePayNowbutton()
})

When('User clicks on include food checkbox', () => {
})
