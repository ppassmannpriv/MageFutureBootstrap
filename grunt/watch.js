module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'html/skin/frontend/future/default/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'html/skin/frontend/future/default/scss/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
};