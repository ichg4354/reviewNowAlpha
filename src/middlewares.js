export const localsMiddleware = (req, res, next) => {
    res.locals.isLogged = req.user
    next()
}