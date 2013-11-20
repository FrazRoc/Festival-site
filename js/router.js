//Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/HomeView',
	'views/project/list'
	//,
	//'views/users/list'
	], function($, _, Backbone, HomeView, ProjectListView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				//url routes
				'projects': "showProjects",
				'users': 'showUsers',

				//Default
				'*actions': 'defaultAction'
			}
		
	});

	var initialize = function(){
		var app_router = new AppRouter;
		console.log("router")
		
		app_router.on('route:showProjects', function(){
			//call render on the dependency
			console.log("create project");
			var projectListView = new ProjectListView();
			//projectListView.render();
		});

		app_router.on('showUsers', function(){
			//call render on the dependency
			var userListView = new UserListView();
			//userListView.render();
		});

		app_router.on('route:defaultAction', function(actions){
	    	// We have no matching route, lets just log what the URL was
	    	console.log('No route:', actions);
	    	var homeView = new HomeView();
        	homeView.render();
	    });

	    Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});
