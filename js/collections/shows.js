// Filename: collections/shows

define([
  'jquery',
  'underscore',
  'backbone',
  'models/show/ShowModel'
], function($, _, Backbone, ShowModel){
  var ShowsCollection = Backbone.Collection.extend({
	model: ShowModel,

	url: function() {
	  return 'setlist/user/'+'EvanFrasz' + "/attended.json";
	},

	parse: function(response) {
	    return response.setlists.setlist;
	},

/*
	success: function(collection, response) {
		_.each(collection.models, function(model) {
			console.log(model.toJSON());
		}
	},
*/
	
	initialize: function(){
		console.log("this user:", this.user)
		//this.fetch();
		//console.log("this collection after fetch", this)
	}

  });
 
  return ShowsCollection;
});