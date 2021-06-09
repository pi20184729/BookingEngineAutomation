import homePageLocators from '../locators/homePageLocators'
// import roomTypePageLocators from '..roomTypePageLocators'
import Pause from '../Pause'

class homePage extends homePageLocators{
    
    enterCity() {

        this.ENTER_CITY_SEARCH_BOX.waitForExist()
        this.ENTER_CITY_SEARCH_BOX.setValue('Chennai')
        Pause.pauseShort()
    }  
    
    chooseDates() {
        this.CALENDER_BUTTON.waitForExist()
        this.CALENDER_BUTTON.click()
        this.CHECK_IN_DATE.waitForExist()
        this.CHECK_IN_DATE.click()
        Pause.pauseShort()
        this.CHECK_OUT_DATE.waitForExist()
        this.CHECK_OUT_DATE.click()
        Pause.pauseShort()
        this.APPLY_DATE_BUTTON.waitForExist()
        this.APPLY_DATE_BUTTON.click()
        this.ROOM_BUTTON.waitForExist()
        this.ROOM_BUTTON.click()
        Pause.pauseShort()
    }
    chooseAdults(){
        this.ADD_ADULTS.waitForExist()
        this.ADD_ADULTS.click()
        this.ADD_ADULTS.click()
        this.ADD_ADULTS.click()
        Pause.pauseShort()
    }
    chooseChild(){
        this.ADD_CHILD.waitForExist()
        this.ADD_CHILD.click()
        this.ADD_CHILD.click()
        Pause.pauseShort()
        this.SUB_CHILD.click()
        Pause.pauseShort()
    }
    chooseSearch(){
        this.CLICK_ANYWHERE.click()
        this.SEARCH_BUTTON.waitForExist()
        this.SEARCH_BUTTON.click()
        Pause.pauseShort()
    }
    chooseViewDetails(){
        this.VIEW_DETAILS.waitForExist()
        Pause.pauseMedium()
        this.VIEW_DETAILS.click()
        Pause.pauseLong()
    } 
    chooseACIncrement(){
        this.ADD_AC_INCREMENT.waitForExist()
        this.ADD_AC_INCREMENT.click()
        this.ADD_AC_INCREMENT.click()
        Pause.pauseMedium()
        this.SUB_AC_INCREMENT.click()
        Pause.pauseShort()
    }
    chooseDeluxeACIncrement(){
        this.ADD_DELUXE_INCREMENT.waitForExist()
        this.ADD_DELUXE_INCREMENT.click()
        this.ADD_DELUXE_INCREMENT.click()
        Pause.pauseMedium()
        this.INCLUDE_FOOD_CHECK_DELUXE.click()
        Pause.pauseShort()
    }
    // comparePrice(){
    //     const acPrice = this.TOTAL_AC_PRICE.getValue()
    //     const deluxePrice = this.TOTAL_DELUXE_PRICE.getText()
    //     const totalPrice = this.TOTAL_PRICE.getText()
    //     console.log(acPrice)
    //     console.log(deluxePrice + acPrice)
    //     console.log(totalPrice)
    // }
    chooseReserveButton(){
        console.log(this.TOTAL_AC_PRICE.getText())
        this.RESERVE_BUTTON.waitForExist()
        this.RESERVE_BUTTON.click()
        Pause.pauseMedium()
    }
    enterFirstName() {
        this.FIRST_NAME.waitForExist()
        this.FIRST_NAME.click()
        this.FIRST_NAME.setValue('Aishwarya')
        Pause.pauseShort()
    }
    enterLastName() {
        this.LAST_NAME.waitForExist()
        this.LAST_NAME.click()
        this.LAST_NAME.setValue('R')
        Pause.pauseShort()
    }  
    enterContact() {
        this.CONTACT.waitForExist()
        this.CONTACT.click()
        this.CONTACT.setValue('3245167233')
        Pause.pauseShort()
    }  
    enterEmail() {
        this.EMAIL.waitForExist()
        this.EMAIL.click()
        this.EMAIL.setValue('Chennai@gmail.com')
        Pause.pauseShort()
    }  
    enterAddress() {
        this.ADDRESS.waitForExist()
        this.ADDRESS.click()
        this.ADDRESS.setValue('Chennai')
        Pause.pauseShort()
    }
    choosePayNowbutton() {
        this.PAY_NOW_BUTTON.waitForExist()
        this.PAY_NOW_BUTTON.click()
        Pause.pauseMedium()
    }    
    
}

export default new homePage()