const express = require('express')
const HomeController = require('../controller/HomeController')
const AboutController = require('../controller/AboutController')
const ServiceController = require('../controller/ServiceController')
const ContactController = require('../controller/ContactController')
const FeatureController = require('../controller/FeatureController')
const TeamController = require('../controller/TeamController')
const AppointmentController = require('../controller/AppointmentController')
const TestimonialController = require('../controller/TestimonialController')

const router = express.Router()

router.get('/', HomeController.homePage)

router.get('/about', AboutController.aboutPage)

router.get('/service', ServiceController.servicePage)

router.get('/contact', ContactController.contactPage)

router.get('/feature', FeatureController.featurePage)

router.get('/team', TeamController.teamPage)

router.get('/appointment', AppointmentController.appointmentPage)

router.get('/testimonial', TestimonialController.testimonialPage)

module.exports = router