import { useState, useEffect, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';

export const useMedia = () => {
	const theme = useTheme();

	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const onResize = () => {
			const isMobile =
				window.innerWidth <= parseInt(theme.breakpoints.sm.replace('px', ''));
			setMobile(isMobile);
		};
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};

		function isMobileSized() {
			setMobile(
				window.innerWidth <= parseInt(theme.breakpoints.sm.replace('px', ''))
			);
		}
		// Add event listener
		window.addEventListener('resize', isMobileSized);
		isMobileSized();
		return () => window.removeEventListener('resize', isMobileSized);
	}, [isMobile, theme.breakpoints.sm]);

	// useLayoutEffect(() => {
	// 	const onResize = () => {
	// 		const isMobile =
	// 			window.innerWidth <= parseInt(theme.breakpoints.sm.replace('px', ''));
	// 		setMobile(isMobile);
	// 	};
	// 	window.addEventListener('resize', onResize);
	// 	return () => {
	// 		window.removeEventListener('resize', onResize);
	// 	};
	// }, [theme.breakpoints.sm]);

	return { isMobile };
};
