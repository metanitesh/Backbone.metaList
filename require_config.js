require.config({
    waitSeconds: 200,
    paths: {
        jquery: 'js/lib/jquery-1.11.1',
        underscore: 'js/lib/underscore-1.6.0',
        backbone: 'js/lib/underscore-1.6.0',

        'jasmine': 'tests/lib/jasmine-1.0.0/jasmine',
        'jasmine-html': 'tests/lib/jasmine-1.0.0/jasmine-html',
        'func': 'tests/lib/funcunit'
    },
    
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


