module.exports = function(grunt) {

    // config 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // js hint ma' files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            target: [
                'js/main.js'
            ]
        },

        // build custom modernizr
        modernizr: {
            'devFile': 'bower_components/modernizr/modernizr.js',
            'outputFile': 'js/modernizr.js',
            'files': [
                '*.html',
                '_layouts/**/*.html',
                '_includes/**/*.html',
                'js/**/*.js',
                'sass/**/*.scss'
            ]
        },

        // sass
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'img',
                    javascriptsDir: 'js',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        },

        // jekyll
        jekyll: {
            options: {
                bundleExec: true,
                src : '<%= app %>'
            },
            dist: {
                options: {
                    dest: '<%= dist %>',
                    config: '_config.yml,_config.build.yml'
                }
            }
        },

        // copy files
        copy: {
            dist: {
                src: [
                    'css/**/*',
                    'img/**/*',
                    'js/**/*'
                ], 
                dest: 'tmp/'
            },
        },

        // html min
        htmlmin: {
            dist: {
                expand: true,
                cwd: '_site/',
                src: '**/*.html',
                dest: 'tmp/',
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                }
            }
        },

        // uglify
        uglify: {
            dist: {
                files: {
                    'js/main.min.js': [
                        'js/modernizr.js',
                        'bower_components/jquery/jquery.js',
                        'bower_components/fitvids/jquery.fitvids.js', 
                        'bower_components/FlowTypeJS/flowtype.js',
                        'bower_components/OwlCarousel/owl-carousel/owl.carousel.js',
                        'js/main.js'
                    ]
                }
            }
        },

        // compress images
        imagemin: { 
            dist: {
                options: {
                    pngquant: true
                },
                files: [{
                    expand: true,
                    src: ['img/**/*.{png,jpg,gif}'],
                    dest: ''
                }]
            }
        },

        // compress svg
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    src: ['img/**/*.svg'],
                    dest: ''
                }]
            }
        },

        // clean files
        clean: {
            dist: {
                src: ['tmp']
            }
        },

        // upload to davidpaulsson.se
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ftp.davidpaulsson.se',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'tmp',
                dest: '/www'
            }
        },

    });

    // load all tasks
    require('load-grunt-tasks')(grunt);

    // assign tasks
    grunt.registerTask('default', [
        'jshint'
    ]);
    grunt.registerTask('deploy', [
        'compass',
        'htmlmin',
        'uglify',
        'imagemin',
        'svgmin',
        'copy',
        'ftp-deploy',
        'clean'
    ]);

};