//Filename: js/views/project/list.js
define([
	//'jquery',
	//'underscore', 
	'backbone',
	'collections/projects',
	'text!../../../templates/project/projectListTemplate.html'
], function( Backbone, ProjectsCollection, projectListTemplate){
	var ProjectListView = Backbone.View.extend({
		el: $('#projects-list'),
		initialize: function(){

			console.log("init view");

			this.collection = new ProjectsCollection();
			this.collection.add({ name: "White Stripes", singer: "Jack White"});
			this.collection.add({ name: "Radiohead", singer: "Thom Yorke"});

			this.render(this.collection.models);

		},
		render: function(data){
			console.log("render view", data)
		
			var compiledTemplate = _.template( projectListTemplate, {projects:data});
			$("#page").html("");
			console.log("compiledTemplate", compiledTemplate)
			$("#projects-list").html(compiledTemplate);
		}
});
	console.log("there");
	return ProjectListView;  
});
