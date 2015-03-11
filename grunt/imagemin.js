module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'html/skin/frontend/future/default/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'images/prod/'
        }]
    }
};