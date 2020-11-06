import { User } from "../schema/User.js"


export const getJoin = (req, res) => {
    res.render("join")
}

export const postJoin = async (req, res) => {
    const body = req.body
    console.log(body)
    const { id, password1, password2 } = body
    if (password1 !== password2) {
        res.status(400)
        res.render('join')
    }
    else {
        if (User.find({ id: req.body.id })) {
            res.render("join")
        } else {
            try {
                const user = await User({ id })
                await User.register(user, password1)
                res.render('home')
            } catch (e) {
                console.log(e)
            }
        }

    }
}
export const getLogin = (req, res) => {
    res.render("login")
}