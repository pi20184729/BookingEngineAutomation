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


