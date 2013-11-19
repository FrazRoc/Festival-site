//Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'views/projects/list',
	'views/users/list'
	], function($, _, Backbone, ProjectListView, UserListView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				//url routes
				'/projects': "showProjects",
				'/users': 'showUsers',

				//Default
				'*actions': 'defaultAction'
			}
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;
		
		app_router.on('showProjects', function(){
			//call render on the dependency
			var projectListView = new ProjectListView();
			projectListView.render();
		});

		app_router.on('showUsers', function(){
			//call render on the dependency
			var userListView = new UserListView();
			userListView.render();
		});

		app_router.on('defaultAction', function(actions){
	    	// We have no matching route, lets just log what the URL was
	    	console.log('No route:', actions);
	    });

	    Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});
