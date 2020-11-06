import { User } from "../schema/User.js"
import passport from "passport"
import path from "../paths.js"

export const getJoin = (req, res) => {
    res.render("join")
}

export const postJoin = async (req, res, next) => {
    const body = req.body
    const { id, password1, password2, buisnessName, phoneNumber } = body
    if (password1 !== password2) {
        res.status(400)
        res.render('join')
    }
    else {
        try {
            const user = await User({ id, buisnessName, phoneNumber })
            await User.register(user, password1)
            // req.flash('successJoinId', '회원가입 성공')
            res.render('home')
            console.log("SUCCEss")
            next()
        } catch (e) {
            // req.flash('error', '이미 존재하는 ID 입니다')
            console.log(error)
            res.render('join', { pageTitle: 'Join' })
        }
    }
}

export const getLogin = (req, res) => {
    res.render("login")
}

export const postLogin = passport.authenticate('local', {
    failureRedirect: path.JOIN,
    successRedirect: path.HOME,
})


export const postLogout = (req, res) => {
    req.logout()
    res.redirect('/')
}

export const getHome = (req, res) => {
    console.log(req.user)
    res.render('home')
}