import { User } from "../schema/User.js"
import passport from "passport"
import path from "../paths.js"

export const getJoin = (req, res) => {
    res.render("join")
}

export const postJoin = async (req, res, next) => {
    const body = req.body
    const { username, password, password2, buisnessName, phoneNumber } = body
    console.log(body)
    console.log()
    if (password !== password2) {
        res.status(400)
        res.render('join')
    }
    else {
        try {
            const user = await User({ username, buisnessName, phoneNumber })
            await User.register(user, password)
            // req.flash('successJoinId', '회원가입 성공')
            console.log("SUCCEss")
            console.log(user)
            next()
        } catch (error) {
            // req.flash('error', '이미 존재하는 ID 입니다')
            console.log(error)
            res.render('logout', { pageTitle: 'Join' })
        }
    }
}

export const getLogin = (req, res) => {
    res.render("login")
}


export const postLogin = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/about"
})


export const postLogout = (req, res) => {
    req.logout()
    console.log("LOGGED OUT")
    res.redirect('/')
}



export const getHome = (req, res) => {
    res.render('home')
    console.log(req.user)
}