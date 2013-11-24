//Filename: js/views/show/ShowView.js
define([
	//'jquery',
	//'underscore', 
	'backbone',
	'collections/shows',
	'text!../../../templates/show/showListTemplate.html'
], function( Backbone, ShowsCollection, showListTemplate){
	var ShowView = Backbone.View.extend({
		el: $('#show-list'),
		initialize: function(){

			console.log("init show view");
			var self = this;

			this.collection = new ShowsCollection({user: 'evanfrasz'});
			this.collection.fetch({success: function(){
			    console.log("models:",self.collection); 
			    self.render(self.collection);
			}});

			//this.render(this.collection);

		},
		render: function(data){
			console.log("render show view", {shows: data.models})

			 $('.nav-tabs li').removeClass('active');
      		$('.nav-tabs li a[href="'+window.location.hash+'"]').parent().addClass('active');
		
			var compiledTemplate = _.template( showListTemplate, {shows: data.models});
			$("#page").html("");
			//console.log("compiledTemplate", compiledTemplate)
			$("#page").html(compiledTemplate);
		}
});
	
	return ShowView;  
});
