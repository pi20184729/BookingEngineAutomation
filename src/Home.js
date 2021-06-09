class Home {
    openHomePage() {
        browser.url('http://localhost:3000/')
        // browser.maximizeWindow()
    }
}
export default new Home()