require.config({
    waitSeconds: 7,
    paths: {
        jquery: 'js/lib/jquery-1.11.1',
        underscore: 'js/lib/underscore-1.6.0',
        backbone: 'js/lib/backbone-1.1.2',

        ListModel: 'js/app/list/list-model',
        ListCollection: 'js/app/list/list-collection',
        ListView: 'js/app/list/list-view',

        'jasmine': 'tests/lib/jasmine-1.0.0/jasmine',
        'jasmine-html': 'tests/lib/jasmine-1.0.0/jasmine-html',
        'func': 'tests/lib/funcunit'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});