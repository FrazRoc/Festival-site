define([
  'backbone',
  'text!templates/home/homeTemplate.html'
], function(Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('li').removeClass('active');
      $('li a[href="#"]').parent().addClass('active');
      console.log("home view")

      this.$el.html(homeTemplate);

      //var sidebarView = new SidebarView();
      //sidebarView.render();
 
    }

  });

  return HomeView;
  
});