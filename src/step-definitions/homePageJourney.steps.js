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
When('User comapres the total price including GST and discount with the displayed total price', () => {
    homePage.compareFinalPrice()
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

When('User clicks on UPI payments option', () => {
    homePage.chooseUPI()
})

When('User enters the UPI ID', () => {
    homePage.enterUPIID()
})

When('User clicks on Make Payment button', () => {
    homePage.chooseMakePayment()
})

When('User clicks on back to home button', () => {
    homePage.chooseBackToHomeButton()
})


//neegative journey


When('User clicks on view detail', () => {
    homePage.chooseViewDetail()
})
When('User selects the number of non ac rooms', () => {
    homePage.chooseNonACIncrement()
})
When('User clicks on the nreserve button', () => {
    homePage.chooseNReserveButton()
})
When('User enters the firstname', () => {
    homePage.enterFName()
})
When('User enters the lastname', () => {
    homePage.enterLName()
})
When('User enters invalid contact number', () => {
    homePage.enterContactN()
})
When('User enters invalid email id', () => {
    homePage.enterEmailId()
})
When('User enters address', () => {
    homePage.enterAddressP()
})
When('User clicks the pay button', () => {
    homePage.choosePaybutton()
})