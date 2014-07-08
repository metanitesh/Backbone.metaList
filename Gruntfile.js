module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({

		jshint: {
			all: [],
			options: {
				bitwise: false,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				newcap: true,
				noarg: true,
				noempty: true,
				nonew: true,
				plusplus: false,
				quotmark: true,
				regexp: true,
				trailing: true,
				maxparams: false,
				maxdepth: false,
				maxstatements: 50
			}
		},

		jasmine: {
			src: [],
			options: {
				specs: '',
				template: require('grunt-template-jasmine-requirejs'),
				templateOptions: {
					requireConfig: {
						baseUrl: './',
						paths: {
						}
					},

				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jasmine', 'jshint']);

};