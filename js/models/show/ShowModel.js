//Filename: models/project/ShowModel.js
define([
	'underscore',
	'backbone'
], function(_, Backbone){
	var ShowModel = Backbone.Model.extend({
		defaults: {
			name: "Show Name",
			venue: "Venue"
		},

		initialize: function(){
			//this.fetch();
			console.log("this show model", this.get("artist") )
		}
	});

	return ShowModel;  
});

