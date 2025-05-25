class AboutController {
    async aboutPage(req, res) {
        try {
            res.render('about', {
                title: 'About page'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new AboutController()