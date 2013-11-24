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
			this.collection.add({ name: "White Stripes", singer: "Jack White", id: '11ae9fbb-f3d7-4a47-936f-4c0a04d3b3b5.json'});
			this.collection.add({ name: "Radiohead", singer: "Thom Yorke", id: "a74b1b7f-71a5-4011-9441-d0b5e4122711.json"});

			this.render(this.collection.models);

		},
		render: function(data){
			console.log("render view", data)

			 $('.nav-tabs li').removeClass('active');
      		$('.nav-tabs li a[href="'+window.location.hash+'"]').parent().addClass('active');
		
			var compiledTemplate = _.template( projectListTemplate, {projects:data});
			$("#page").html("");
			//console.log("compiledTemplate", compiledTemplate)
			$("#page").html(compiledTemplate);
		}
});
	
	return ProjectListView;  
});
