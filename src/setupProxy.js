// Redirect home route `/` to `/popular` automatically
module.exports = app => {
	app.get(/^\/$/, (req, res) => res.redirect('/popular'));
};
