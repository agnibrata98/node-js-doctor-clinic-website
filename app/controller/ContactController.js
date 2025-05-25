class ContactController {
    async contactPage(req, res) {
        try {
            res.render('contact', {
                title: 'Contact page'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ContactController()