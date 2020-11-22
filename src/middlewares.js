export const localsMiddleware = async (req, res, next) => {
    res.locals.isLogged = req.user
    next()
}

