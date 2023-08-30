export const emailRegex = (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm);
export const passwordRegex = (/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&._])[a-z\d$@$!%*?&._]{6,12}$/i);
export const usernameRegex = (/^[a-z0-9]{4, 15}$/i);