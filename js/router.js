//Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/HomeView',
	'views/project/list',
	'views/show/ShowView',
	'views/user/UserView'
	], function($, _, Backbone, HomeView, ProjectListView, ShowView, UserView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				//url routes
				'projects': "showProjects",
				'user': 'showUser',
				'shows': 'showShows',

				//Default
				'*actions': 'defaultAction'
			}
		
	});

	var initialize = function(){
		var app_router = new AppRouter;
		
		app_router.on('route:showProjects', function(){
			//call render on the dependency
			console.log("create project");
			var projectListView = new ProjectListView();
		});

		app_router.on('route:showShows', function(){
			//call render on the dependency
			console.log("create shows");
			var showView = new ShowView();
		});

		app_router.on('route:showUser', function(){
			//call render on the dependency
			var userView = new UserView();
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
