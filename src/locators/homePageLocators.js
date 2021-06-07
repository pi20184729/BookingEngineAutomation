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
        return $('//*[text() = "View Details"]') //Five points Hotel
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
    get REGENCY() {
        return $('//*[text() = "Regency"]')
    }

}

export default homePageLocators




