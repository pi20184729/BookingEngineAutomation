import homePageLocators from '../locators/homePageLocators'
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
        this.VIEW_DETAILS.click()
        Pause.pauseLong()
    }   
}

export default new homePage()