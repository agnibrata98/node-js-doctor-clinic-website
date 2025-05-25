class TeamController {
    async teamPage(req, res) {
        const team = [
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-1.jpg'
            },
            {
                name: 'Jane Doe',
                department: 'Web Developer',
                image: '/img/team-2.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-3.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-4.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-2.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-3.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-4.jpg'
            },
            {
                name: 'John Doe',
                department: 'Web Developer',
                image: '/img/team-1.jpg'
            }
        ]
        try {
            res.render('team', {
                title: 'Team page',
                team: team
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TeamController()