//Filename: models/project/UserModel.js
define([
	'underscore',
	'backbone'
], function(_, Backbone){
	var UserModel = Backbone.Model.extend({
		defaults: {
			name: "Evan Frasz",
			setlist_user: "EvanFrasz",
			lastfm_user: "FrazRoc",
			avatar: "http://www.gravatar.com/avatar/5dca78c6737beee4fcaaeb73186c14d6"
		},

		initialize: function(){
			
			console.log("this model", this )
		}
	});

	return UserModel;  
});

