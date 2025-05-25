class FeatureController {
    async featurePage(req, res) {
        try {
            res.render('feature', {
                title: 'Feature page'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new FeatureController()