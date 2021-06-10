class homePageLocators {

    get ENTER_CITY_SEARCH_BOX() {
        return $('#browser')
    }

    get CALENDER_BUTTON() {
        return $('//*[@aria-label="select"]')
    }
    get ROOM_BUTTON() {
        return $('//*[@class="ui button roomRange"]')
    }
    get SEARCH_BUTTON() {
        return $('//*[@class="searchButton"]')
    }
    get VIEW_DETAILS() {
        return $('//*[@id="Emerald bay"]') //Five points Hotel
    }
    get CAROUSEL_PREV_ICON() {
        return $('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/div/a[1]/span[1]')
    }
    get CAROUSEL_NEXT_ICON() {
        return $('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/div/a[2]/span[1]')
    }
    get CHECK_IN_DATE() {
        return $('//*[text() = "15"]')
    }
    get CHECK_OUT_DATE() {
        return $('//*[text() = "19"]')
    }
    get APPLY_DATE_BUTTON() {
        return $('//*[@id="ej2-datetimepicker_0_popup"]/div[2]/button[1]')
    }
    get ADD_ADULTS() {
        return $('//*[@id="simple-menu"]/div[3]/ul/div[1]/div[2]')
    }
    get ADD_CHILD() {
        return $('//*[@id="simple-menu"]/div[3]/ul/div[2]/div[2]')
    }
    get SUB_CHILD() {
        return $('//*[@id="simple-menu"]/div[3]/ul/div[2]/div[1]')
    }
    get CLICK_ANYWHERE() {
        return $('//*[@id="simple-menu"]/div[1]')
    }
    // get REGENCY() {
    //     return $('//*[text() = "Regency"]')
    // }
    get ADD_AC_INCREMENT() {
        return $('//*[@id="AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]')
    }
    get ADD_SUITE_INCREMENT() {
        return $('///*[@id="Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]')
    }
    get ADD_JSUITE_INCREMENT() {
        return $('//*[@id="Junior Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]/svg')
    }
    get ADD_DELUXE_INCREMENT() {
        return $('//*[@id="Deluxe AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]')
    }
    get SUB_AC_INCREMENT() {
        return $('//*[@id="AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[1]')
    }
    get SUB_SUITE_INCREMENT() {
        return $('//*[@id="Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[1]/svg')
    }
    get SUB_JSUITE_INCREMENT() {
        return $('//*[@id="Junior Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[1]/svg')
    }
    get SUB_DELUXE_INCREMENT() {
        return $('//*[@id="Deluxe AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[1]/svg')
    }
    get INCLUDE_FOOD_CHECK_AC(){
        return $('/html/body/div/div/div[2]/div/div[3]/div/div/div[2]/div[1]/div/div[2]/div[2]/div[2]/div/div[2]/label/input')
    }
    get INCLUDE_FOOD_CHECK_SUITE(){
        return $('/html/body/div/div/div[2]/div/div[3]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/label/input')
    }
    get INCLUDE_FOOD_CHECK_JSUITE(){
        return $('/html/body/div/div/div[2]/div/div[3]/div/div/div[2]/div[3]/div/div[2]/div[2]/div[2]/div/div[2]/label/input')
    }
    get INCLUDE_FOOD_CHECK_DELUXE(){
        return $('/html/body/div/div/div[2]/div/div[3]/div/div/div[2]/div[4]/div/div[2]/div[2]/div[2]/div/div[2]/label/input')
    }
    get RESERVE_BUTTON(){
        return $('//*[@id="root"]/div/div[2]/div/div[3]/div/div/div[3]/div[2]/a')
    }
    get GO_BACK_BUTTON(){
        return $('//*[@id="root"]/div/div[2]/div/div[3]/div/div/div[3]/div[2]/div/a')
    }
    get TOTAL_AC_PRICE(){
        return $('//*[@id="AC"]/div/div[2]/div[2]/div[1]/div/div[4]/h3')
    }
    get TOTAL_DELUXE_PRICE(){
        return $('//*[@id="Deluxe AC"]/div/div[2]/div[2]/div[1]/div/div[4]/h3')
    }
    get TOTAL_PRICE(){
        return $('//*[@id="root"]/div/div[2]/div/div[3]/div/div/div[3]/div[1]/h3')
    }
    get FIRST_NAME(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/input')
    }
    get LAST_NAME(){
        return $('// *[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/input')    
    }
    get CONTACT(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[2]/div/div[3]/div[2]/div/input')
    }
    get EMAIL(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[2]/div/div[4]/div[2]/div/input')
    }
    get ADDRESS(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[2]/div/div[5]/div[2]/div/div/input')
    }
    get PAY_NOW_BUTTON(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[1]/div[3]/button')
    }
    get TOT_AC_PRICE(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div[4]')
        }
        get TOT_DELUXE_PRICE(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[4]')
        }
        get TOT_AMOUNT(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[1]/div[4]/div[4]')
        }
        get GST(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[1]/div[5]/div[4]')
        }
        get DISCOUNT(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[1]/div[6]/div[4]')
        }
        get TOT_PRICE(){
        return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/form/div[2]/div[2]/div[2]/div[2]/div[2]/div/p[2]')
        }
}

export default homePageLocators




