export const invalidateCookie = (noMatch, res) =>
 noMatch && res.clearCookie("session_token").status(403).send("Token is invalid");