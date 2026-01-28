// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Framer Motion runs RAF-based animations that can keep Jest open.
// For unit tests, a lightweight mock is enough.
jest.mock("framer-motion", () => {
	const React = require("react");

	const motion = new Proxy(
		{},
		{
			get: (_target, key) => {
				return React.forwardRef(({ children, ...rest }, ref) =>
					React.createElement(typeof key === "string" ? key : "div", { ref, ...rest }, children)
				);
			},
		}
	);

	return {
		motion,
		AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
	};
});

// jsdom doesn't implement IntersectionObserver; framer-motion + our navbar use it.
class MockIntersectionObserver {
	constructor() {}
	observe() {}
	unobserve() {}
	disconnect() {}
}

Object.defineProperty(global, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: MockIntersectionObserver,
});

Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: MockIntersectionObserver,
});

// Some components use matchMedia / RAF.
if (!window.matchMedia) {
	window.matchMedia = () => ({
		matches: false,
		media: '',
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	});
}

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
}
if (!window.cancelAnimationFrame) {
	window.cancelAnimationFrame = (id) => clearTimeout(id);
}
