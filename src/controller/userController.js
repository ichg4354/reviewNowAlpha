import { User } from "../schema/User.js"
import passport from "passport"
import path from "../paths.js"
import { MainMenu } from "../schema/MainMenu.js"

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


export const getEditPage = async (req, res) => {
    const loggedUser = await User.findById(req.user._id).populate("mainMenu")
    const mainMenuOptions = loggedUser.mainMenu.options
    res.render('editPage', { mainMenuOptions })
}

export const postEditPage = async (req, res) => {
    const body = req.body
    const loggedUser = await User.findById(req.user._id)
    if (body.optionName === "mainMenu") {
        const mainMenu = await MainMenu.create({
            options: body.options
        })
        loggedUser.mainMenu = mainMenu
        loggedUser.save()
        console.log(loggedUser)
    }
}

export const getReviewPage = async (req, res) => {
    const loggedUser = await User.findById(req.user._id).populate("mainMenu")
    const mainMenuOptions = loggedUser.mainMenu.options
    res.render("reviewPage", { mainMenuOptions })
}