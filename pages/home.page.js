class home {
    constructor(){
        this.home = 'home';
    }
    launchURL(){
        browser.url('http://localhost:3000/');
    }

} module.exports = new home();
