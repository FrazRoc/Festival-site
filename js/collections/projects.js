// Filename: collections/projects

define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel'
], function($, _, Backbone, ProjectModel){
  var ProjectsCollection = Backbone.Collection.extend({
	model: ProjectModel,
	url: 'setlist/artist/',

	//not used
	urlId: function() {
	  return 'setlist/artist/' + this.id + '.json';
	},
	
	initialize: function(){

	  //this.add([project0, project1, project2, project3, project4]);
	  //this.

	}

  });
 
  return ProjectsCollection;
});