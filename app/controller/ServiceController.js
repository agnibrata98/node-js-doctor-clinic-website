class ServiceController {
    async servicePage(req, res) {
        const testimonial = [
            {
                name: 'John Doe',
                proffession: 'Web Developer',
                comment: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
                image: '/img/testimonial-1.jpg'
            },
            {
                name: 'Jane Doe',
                proffession: 'Web Developer',
                comment: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
                image: '/img/testimonial-2.jpg'
            },
            {
                name: 'John Doe',
                proffession: 'Web Developer',
                comment: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
                image: '/img/testimonial-3.jpg'
            }
        ]
        try {
            res.render('service', {
                title: 'Service page',
                testimonial: testimonial
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ServiceController()