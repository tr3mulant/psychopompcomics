const intersectionObserverMock = () => ({
	constructor() {},

	observe() {},

	disconnect() {},

	unobserve() {},
});

window.IntersectionObserver = jest
	.fn()
	.mockImplementation(intersectionObserverMock);
