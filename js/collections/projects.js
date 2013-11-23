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
	  return this.document.url() + '/notes';
	},
	
	initialize: function(){

	  //this.add([project0, project1, project2, project3, project4]);
	  //this.

	}

  });
 
  return ProjectsCollection;
});