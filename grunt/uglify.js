module.exports = {
    all: {
		options: {
			beautify: true,
			width: 100,
		},
        files: [{
            expand: true,
            cwd: 'html/skin/frontend/future/default/scripts/',
            src: '**/*.js',
            dest: 'html/skin/frontend/future/default/scripts/prod',
            ext: '.min.js'
        }]
    }
};