/**
 * @internal
 */
import { format } from 'util';
export const bufferTypes = [
	'png',
	'jpg',
	'jpeg',
	'apng',
	'webp',
	'gif',
	'avif',
	'mp4',
	'mp3',
	'wav',
	'webm',
	'bmp',
	'ico',
	'tiff',
];

export const Reset = '\x1b[0m';
export const Bright = '\x1b[1m';
export const Dim = '\x1b[2m';
export const Underscore = '\x1b[4m';
export const Blink = '\x1b[5m';
export const Reverse = '\x1b[7m';
export const Hidden = '\x1b[8m';

export const FgBlack = '\x1b[30m';
export const FgRed = '\u001b[31m';
export const FgGreen = '\x1b[32m';
export const FgYellow = '\x1b[33m';
export const FgBlue = '\x1b[34m';
export const FgMagenta = '\x1b[35m';
export const FgCyan = '\x1b[36m';
export const FgWhite = '\x1b[37m';

export const BgBlack = '\x1b[40m';
export const BgRed = '\x1b[41m';
export const BgGreen = '\x1b[42m';
export const BgYellow = '\x1b[43m';
export const BgBlue = '\x1b[44m';
export const BgMagenta = '\x1b[45m';
export const BgCyan = '\x1b[46m';
export const BgWhite = '\x1b[47m';

export function useColorTag(color: string, val: string): string {
	switch (color) {
		case 'yellow':
		case 'warn':
		case 'txt-yellow':
			return format('%s%s\x1b[0m', FgYellow, val);
		case 'blue':
		case 'txt-blue':
		case 'status':
		case 'log':
			return format('%s%s\x1b[0m', FgBlue, val);
		case 'red':
		case 'txt-red':
		case 'error':
		case 'err':
			return format('%s%s\x1b[0m', FgRed, val);
		case 'green':
		case 'txt-green':
		case 'success':
		case 'ok':
			return format('%s%s\x1b[0m', FgGreen, val);
		default:
			return format('%s%s\x1b[0m', Reset, val);
	}
}
