module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'html/skin/frontend/future/default/scripts/',
            src: '**/*.js',
            dest: 'html/skin/frontend/future/default/scripts/prod',
            ext: '.min.js'
        }]
    }
};