module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: [
          'Gruntfile.js', 
          'src/components/*.js', 
          'src/config/*.js',
          'src/main.js',
          'test/**/*spec.js'],
      tasks: ['webpack', 'karma', 'uglify']
    },
    webpack: {
      src: {
        entry: "./src/main.js",
        output: {
            path: "./src/",
            filename: "bundle.js",
            publicPath: "./src/"
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        },

        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        },
        storeStatsTo: "stats",
        failOnError: true,
        watch: false,
        keepalive: false
      },
      test: {
        entry: [
            "./test/login-form-spec.js",
            "./test/dashboard-spec.js"
        ],
        output: {
            path: "./test",
            filename: "spec.js",
            publicPath: "./test/"
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        },
        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        },
        storeStatsTo: "stats",
        failOnError: true,
        watch: false,
        keepalive: false
      }
    },
    karma: {  
      unit: {
        options: {
          frameworks: ['jasmine'],
          singleRun: true,
          browsers: ['PhantomJS'],
          files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'test/spec.js'
          ]
        }
      }
    },
    uglify: {
        my_target: {
          files: {
            './src/app.js': ['./src/bundle.js']
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-karma'); 

  grunt.registerTask('default', ['webpack', 'karma', 'uglify']);
  grunt.registerTask('test', ['karma']);

};