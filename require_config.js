require.config({
    waitSeconds: 200,
    paths: {
        jquery: 'js/lib/jquery-1.11.1',
        underscore: 'js/lib/underscore-1.6.0',
        backbone: 'js/lib/backbone-1.1.2',

        ListModel: 'js/app/list/list-model',
        ListCollection: 'js/app/list/list-collection',
        ListView: 'js/app/list/list-view',
        ListCollectionView: 'js/app/list/list-collection-view',
        AddListView: 'js/app/list/add-list-view',

        TaskModel: 'js/app/task/task-model',
        TaskView: 'js/app/task/task-view',
        TaskCollection: 'js/app/task/task-collection',
        TaskCollectionView: 'js/app/task/task-collection-view',
        AddTaskView: 'js/app/task/add-task-view',
        
        NoteView: 'js/app/note/note-view',

        CommentView: 'js/app/comment/comment-view',
        AddCommentView: 'js/app/comment/add-comment-view',
           
        ActionbarView: 'js/app/actionbar/actionbar-view',
        ResponsiveView: 'js/app/responsive/responsive-view',

        bootstrapdata: 'js/app/bootstrapdata',
        app: 'js/app/app-objects-registry',
        util: 'js/app/util',

        Router: 'js/app/router',

        'jasmine': 'tests/lib/jasmine-1.0.0/jasmine',
        'jasmine-html': 'tests/lib/jasmine-1.0.0/jasmine-html',
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