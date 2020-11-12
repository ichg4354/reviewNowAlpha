
import { User, userSchema } from "./schema/User.js"
import passport from "passport"

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())