module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      tasks: ['webpack', 'karma']
    },
    webpack: {
      src: {
        entry: "./src/app.js",
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
        entry: "./test/login-form-spec.js",
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-karma'); 

  grunt.registerTask('default', ['webpack', 'karma']);
  grunt.registerTask('test', ['karma']);

};