module.exports = {
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	images: {
		domains: ['via.placeholder.com'],
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};
