//Filename: js/views/show/UserView.js
define([
	//'jquery',
	//'underscore', 
	'backbone',
	'models/user/UserModel',
	'text!../../../templates/show/showListTemplate.html'
], function( Backbone, UserModel, showListTemplate){
	var UserView = Backbone.View.extend({
		el: $('#show-list'),
		initialize: function(){

			console.log("init user view");
			var self = this;

			this.render();

		},
		render: function(data){
			//console.log("render show view", {shows: data.models})

			$('.nav-tabs li').removeClass('active');
      		$('.nav-tabs li a[href="'+window.location.hash+'"]').parent().addClass('active');
		
			//var compiledTemplate = _.template( showListTemplate, {shows: data.models});
			$("#page").html("");
			//$("#page").html(compiledTemplate);
		}
});
	
	return UserView;  
});
