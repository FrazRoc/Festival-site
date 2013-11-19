//Filename: js/views/project/list.js
define([
	'jquery',
	'underscore', 
	'backbone',
	'collections/projects',
	'text!templates/project/list.html'
], function($, _, Backbone, projectListTemplate){
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),
		initialize: function(){
			this.collection = new ProjectsCollection();
			this.collection.add({ name: "White Stripes"});
			this.collection.add({ name: "Radiohead"});

			this.render(this.collection.models);

		}
		render: function(data){

			var compiledTemplate = _.template( projectListTemplate, data);

			this.$el.append( compiledTemplate );
		}
});
	
	return ProjectListView;  
});
