// Filename: collections/projects

define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel'
], function($, _, Backbone, ProjectModel){
  var ProjectsCollection = Backbone.Collection.extend({
	model: ProjectModel,
	url: function() {
	  return 'lastfm/?method=user.gettopartists&user=' + 'frazroc' + '&api_key=' + 'bd9844981c1afbab9b83da62a89604e3' + '&format=json';
	},

	parse: function(response) {
	    return response.topartists.artist;
	},

	initialize: function(){
	}

  });
 
  return ProjectsCollection;
});