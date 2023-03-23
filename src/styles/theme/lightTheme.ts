import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const lightTheme = createTheme({
	typography: {
		button: {
			textTransform: 'none',
		},
		fontFamily: [
			'Inter',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		mode: 'light',
		primary: {
			main: 'hsla(0, 0%, 0%, 1)',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: 'hsla(0, 0%, 100%, 1)',
			paper: 'hsla(220, 13%, 95%, 1)',
		},
	},
	components: {
		MuiButtonBase: {
			// The properties to apply
			defaultProps: {
				disableRipple: true, // No more ripple, on the whole application!
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
				},
			},
		},
	},
	shape: {
		borderRadius: 7,
	},
});

export default lightTheme;
