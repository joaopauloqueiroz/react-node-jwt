const TOKEN_KEY = 'auth'

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

const getToken = () => localStorage.getItem(TOKEN_KEY) !== null;

const login = token => {
	localStorage.setItem(TOKEN_KEY, token);
}

const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
}

export { isAuthenticated, getToken, login, logout };