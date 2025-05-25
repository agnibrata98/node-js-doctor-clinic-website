class TestimonialController {
    async testimonialPage(req, res) {
        try {
            res.render('testimonial', {
                title: 'Testimonial page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TestimonialController()