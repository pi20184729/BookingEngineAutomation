
const {Given} = require('cucumber');
const home = require('./../pages/home.page');

//const Home = new home();

Given('The user is on the home page', () => {
    home.launchURL();
});