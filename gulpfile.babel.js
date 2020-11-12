import gulp from "gulp"
import browserify from "gulp-bro"
import babelify from "babelify"
import del from "del"

const path = {
    js: {
        watch: "src/assets/js/**/*",
        src: "src/assets/js/index.js",
        dest: "src/static/js"
    },
    scss: {
        watch: "/src/assets/scss/*",
        src: "/src/assets/*.scss",
        dest: "/src/static/css"
    }
}

const clean = () => del(["static"]);

const js = () =>
    gulp
        .src(path.js.src)
        .pipe(
            browserify({
                transform: [
                    babelify.configure({ presets: ["@babel/preset-env"] }),
                    ["uglifyify", { global: true }],
                ],
            })
        )
        .pipe(gulp.dest(path.js.dest));

const watch = () => gulp.watch(path.js.watch, js)

export const assets = gulp.series([clean, js, watch])
