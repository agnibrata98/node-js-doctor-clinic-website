class TeamController {
    async teamPage(req, res) {
        try {
            res.render('team', {
                title: 'Team page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TeamController()