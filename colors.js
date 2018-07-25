export const ansi = {
	black: `#08040B`,
	blackBright: `#27214D`,
	red: `#D42450`,
	redBright: `#D42450`,
	green: `#A9D400`,
	greenBright: `#A9D400`,
	yellow: `#D95702`,
	yellowBright: `#D95702`,
	blue: `#301D78`,
	blueBright: `#301D78`,
	magenta: `#D42450`,
	magentaBright: `#D42450`,
	cyan: `#00A7B5`,
	cyanBright: `#00A7B5`,
	white: `#E9C8D3`,
	whiteBright: `#C6E4E4`,
};

export const base16 = {
	background: ansi.black,
	backgroundLighter: ansi.blackBright,
	selection: ansi.blue,
	comments: ansi.white,
	foregroundDark: ansi.cyan,
	foreground: ansi.red,
	foregroundLight: ansi.green,
	backgroundLight: ansi.blue,
	variables: ansi.red,
	numbers: ansi.yellow,
	classes: ansi.cyan,
	strings: ansi.red,
	support: ansi.yellow,
	functions: ansi.red,
	keywords: ansi.cyan,
	deprecated: ansi.whiteBright,
};

// ========= HELPER FUNCTIONS =========

function hexToRGB(hex) {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
		hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b),
	);

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

export function hexToRGBAString(hex, alpha) {
	const color = hexToRGB(hex);
	return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}
