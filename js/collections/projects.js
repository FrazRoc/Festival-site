// Filename: collections/projects
/*define([
	'underscore',
	'backbone',
	// Pull in the Model module from above
	'models/project/ProjectModel'
], function(_, Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
	model: ProjectModel
	});
	// You don't usually return a collection instantiated
	return ProjectCollection;
});
*/

define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel'
], function($, _, Backbone, ProjectModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return ProjectsCollection;
});