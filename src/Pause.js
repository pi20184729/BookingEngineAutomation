class Pause {
    pauseShort() {
        browser.pause(3000)
    }

    pauseMedium() {
        browser.pause(5000)
    }

    pauseLong() {
        browser.pause(8000)
    }
}

export default new Pause