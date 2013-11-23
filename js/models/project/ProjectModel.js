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

		parse: function(response) {
	    	return response.artist;
		},
		initialize: function(){
			this.fetch();
			console.log("this model", this )
		}
	});

	return ProjectModel;  
});

