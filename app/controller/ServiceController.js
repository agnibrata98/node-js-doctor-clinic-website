class ServiceController {
    async servicePage(req, res) {
        try {
            res.render('service', {
                title: 'Service page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ServiceController()