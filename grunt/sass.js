module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'html/skin/frontend/future/default/scss/',
            src: ['*.scss'],
            dest: 'html/skin/frontend/future/default/css/',
            ext: '.css'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'html/skin/frontend/future/default/scss/',
            src: ['*.scss'],
            dest: 'html/skin/frontend/future/default/css/',
            ext: '.css'
        }]
    }
};