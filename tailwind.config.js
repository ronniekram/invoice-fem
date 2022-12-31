module.exports = {
	theme: {
		extend: {
			colors: {
				current: `currentColor`,
				transparent: `transparent`,
				white: `#FFFFFF`,
				black: `#000000`,
				purple: {
					100: `#7945FF`,
					200: `#5C22D5`,
				},
				pink: {
					100: `#FD6687`,
				},
				yellow: {
					100: `#FFCE67`,
				},
			},
			fontSize: {
				xs: [`16px`, `21px`],
				sm: [`20px`, `26px`],
				md: [`24px`, `31px`],
				lg: [`56px`, `71px`],
			},
			fontWeight: {
				regular: 400,
				medium: 500,
				bold: 700,
			},
			fontFamily: {
				sans: [`Space Grotesk`, `Roboto`, `sans-serif`],
			},
			borderRadius: {
				DEFAULT: `20px`,
			},
			borderWidth: {
				3: `3px`,
			},
			boxShadow: {
				"black-sm": `0px 5px 0px #000000`,
				"black-lg": `0px 10px 0px #000000`,
				"purple-sm": `0px 5px 0px #5C2DD5`,
				"purple-lg": `0px 10px 0px #5C2DD5`,
			},
		},
	},
};
