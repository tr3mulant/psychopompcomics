import styled from 'styled-components';
import Link from 'next/link';

const StyledPrimaryLink = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: ${(props) => props.theme.spaces.md};

	:focus {
		color: hsl(
			var(--brand-hue) var(--brand-saturation)
				calc(var(--brand-lightness) * 1.5)
		);
	}
`;

const StyledPrimaryLinkLg = styled(StyledPrimaryLink)`
	a {
		font-size: ${(props) => props.theme.fonts.sizes.lg};
		height: ${(props) => props.theme.spaces.lg};
		min-width: ${(props) => props.theme.spaces.lg};
		line-height: ${(props) => props.theme.spaces.lg};
	}
`;

const StyledPrimaryLinkMd = styled(StyledPrimaryLink)`
	a {
		font-size: ${(props) => props.theme.fonts.sizes.md};
		height: ${(props) => props.theme.spaces.md};
		min-width: ${(props) => props.theme.spaces.md};
		line-height: ${(props) => props.theme.spaces.md};
	}
`;

const StyledPrimaryLinkXs = styled(StyledPrimaryLink)`
	a {
		font-size: ${(props) => props.theme.fonts.sizes.xs};
		height: ${(props) => props.theme.spaces.xs};
		min-width: ${(props) => props.theme.spaces.xs};
		line-height: ${(props) => props.theme.spaces.xs};
	}
`;

const StyledPrimaryLinkSm = styled(StyledPrimaryLink)`
	a {
		font-size: ${(props) => props.theme.fonts.sizes.sm};
		height: ${(props) => props.theme.spaces.sm};
		min-width: ${(props) => props.theme.spaces.sm};
		line-height: ${(props) => props.theme.spaces.sm};
	}
`;

const StyledPrimaryLinkXl = styled(StyledPrimaryLink)`
	a {
		font-size: ${(props) => props.theme.fonts.sizes.xl};
		height: ${(props) => props.theme.spaces.xl};
		min-width: ${(props) => props.theme.spaces.xl};
		line-height: ${(props) => props.theme.spaces.xl};
	}
`;

export function PrimaryLink(props) {
	return (
		<StyledPrimaryLink>
			<Link href={props.href}>
				<a onClick={props.onClick}>{props.children}</a>
			</Link>
		</StyledPrimaryLink>
	);
}

export function PrimaryLinkLg(props) {
	return (
		<StyledPrimaryLinkLg>
			<Link href={props.href}>
				<a onClick={props.onClick}>{props.children}</a>
			</Link>
		</StyledPrimaryLinkLg>
	);
}

export function PrimaryLinkXs(props) {
	return (
		<StyledPrimaryLinkXs>
			<Link href={props.href}>
				<a onClick={props.onClick}>{props.children}</a>
			</Link>
		</StyledPrimaryLinkXs>
	);
}

export function PrimaryLinkSm(props) {
	return (
		<StyledPrimaryLinkSm>
			<Link href={props.href}>
				<a onClick={props.onClick}>{props.children}</a>
			</Link>
		</StyledPrimaryLinkSm>
	);
}

export function PrimaryLinkMd(props) {
	return (
		<StyledPrimaryLinkMd>
			<Link href={props.href}>
				<a onClick={props.onClick}>{props.children}</a>
			</Link>
		</StyledPrimaryLinkMd>
	);
}

// export const SecondaryLink = styled(Link)`

// `;

// export const SecondaryLinkLg = styled(SecondaryLink)`
//     & a {
//         font-size: ${(props) => props.theme.fonts.sizes.md};
//         height: ${(props) => props.theme.spaces.lg.replace('rem', '') * 2}rem;
//         min-width: ${(props) => props.theme.spaces.xxl.replace('rem', '') * 2}rem;
//         line-height: ${(props) => props.theme.spaces.lg.replace('rem', '') * 2}rem;
//     }
// `;

// export const SecondaryLinkSm = styled(SecondaryLink)`
//     & a {
//         font-size: ${(props) => props.theme.fonts.sizes.xs};
//         height: ${(props) => props.theme.spaces.lg};
//         min-width: ${(props) => props.theme.spaces.xxl.replace('rem', '')}rem;
//         line-height: ${(props) => props.theme.spaces.lg};
//     }
// `;
