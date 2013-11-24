//Filename: models/project/UserModel.js
define([
	'underscore',
	'backbone'
], function(_, Backbone){
	var UserModel = Backbone.Model.extend({
		defaults: {
			name: "Evan Frasz",
			setlist_user: "EvanFrasz"
		},

		parse: function(response) {
	    	return response;
		},

		initialize: function(){
			//this.fetch();
			console.log("this model", this )
		}
	});

	return UserModel;  
});

