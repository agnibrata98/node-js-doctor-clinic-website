class AppointmentController {
    async appointmentPage(req, res) {
        try {
            res.render('appointment', {
                title: 'Appointment page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new AppointmentController()