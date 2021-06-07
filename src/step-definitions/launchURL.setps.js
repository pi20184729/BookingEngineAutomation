import {Given} from '@cucumber/cucumber'
import Home from '../Home'

Given('User launches the BookingEngine URL', () => {
    Home.openHomePage()
})
