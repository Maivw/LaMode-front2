// module.exports = {
// 	apiBaseUrl:
// 		process.env.NODE_ENV === "development"
// 			? process.env.REACT_APP_API_BASE_URL
// 			: "",
// };

module.exports = {
	apiBaseUrl:
		process.env.NODE_ENV == "development"
			? process.env.REACT_APP_API_BASE_URL
			: "https://git.heroku.com/lamodebackend2.git",
};
