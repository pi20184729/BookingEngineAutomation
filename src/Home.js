class Home {
    openHomePage() {
        browser.url('http://localhost:3000/')
        browser.maximizeWindow()
        //browser.fullscreenWindow()
        
    }
}
export default new Home()