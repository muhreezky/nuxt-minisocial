export const emailRegex = (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]/igm);
export const passwordRegex = (/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&._])[a-z\d$@$!%*?&._]$/i);
// export const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
export const usernameRegex = (/[^a-z0-9]/i);

export function validateEmail(e) {
	return emailRegex.test(e) || 'Alamat e-mail harus valid';
}

export function validateMinLength(e, min) {
	return e.length >= min || `Min. ${min} karakter`;
}

export function validateMaxLength(e, max) {
	return e.length <= max || `Max. ${max} karakter`;
}

export function validatePassword(e) {
	return passwordRegex.test(e) || 'Password harus ada huruf, angka, dan simbol';
}

export function validateUsername(e) {
	return !usernameRegex.test(e) || 'Username hanya boleh ada huruf dan angka';
}