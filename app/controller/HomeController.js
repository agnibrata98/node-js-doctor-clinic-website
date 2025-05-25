class HomeController {
    async homePage(req, res) {
        try {
            res.render('home', {
                title: 'Home page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new HomeController()