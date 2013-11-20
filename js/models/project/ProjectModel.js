//Filename: models/project/ProjectModel.js
define([
	'underscore',
	'backbone'
], function(_, Backbone){
	var ProjectModel = Backbone.Model.extend({
		defaults: {
			name: "Modest Mouse",
			singer: "Isaac Brock"
		},
		initialize: function(){
			this.fetch();
		}
	});

	return ProjectModel;  
});

