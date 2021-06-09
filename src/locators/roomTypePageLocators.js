class roomTypePageLocators {

    get ADD_AC_INCREMENT() {
        return $('//*[@id="AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]/svg')
    }
    get ADD_SUITE_INCREMENT() {
        return $('//*[@id="Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]/svg')
    }
    get ADD_JSUITE_INCREMENT() {
        return $('//*[@id="Junior Suite"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]/svg')
    }
    get ADD_DELUXE_INCREMENT() {
        return $('//*[@id="Deluxe AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[2]/svg')
    }
    get SUB_AC_INCREMENT() {
        return $('//*[@id="AC"]/div/div[2]/div[2]/div[2]/div/div[1]/button[1]/svg')
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

}
// export default roomTypePageLocators