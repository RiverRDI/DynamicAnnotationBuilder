var x = define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
      //To create a widget, you need to derive from BaseWidget.
      var _treeview;
      return declare([BaseWidget], {
          // Custom widget code goes here

          baseClass: 'jimu-widget-DynamicAnnotationBuilder',
          name: 'DynamicAnnotationBuilder',

          //methods to communication with app container:

          // postCreate: function() {
          //   this.inherited(arguments);
          //   console.log('postCreate');
          // },

          startup: function() {
              this.inherited(arguments);
              //this.mapIdNode.innerHTML = 'map id:' + this.map.id;
              //alert("T");
              console.log('startup');
              //dabLIClick(); 
              // _treeview = $('#tree').treeview;
              $('#tree').treeview({
                  data: getTree(),
                  onNodeSelected: function(event, data) {
                      //alert(data);
                  } 
              });

              $('#dabBtnAddToTree').click(function () {
                  debugger;
                  var parentNode = [$('#tree').treeview('getSelected')[0]];
                  var numberOfChildren = parentNode.length + 1;
                  var newNode = [{ text: 'New Node' }];
                  $('#tree').treeview('addNode', [newNode, parentNode, numberOfChildren]);
                  //debugger;
                  
              } 
              );
      
              $('.list-group li').click(function (e) {
                  e.preventDefault();
                  //dabLIClick();
                  $that = $(this);

                  $that.parent().find('li').removeClass('active');
                  $that.addClass('active');
                  var selectedLabelerName = ($that.text());
                  for (var i = 0; i < _labelItems.length; i++) {
                      if (_labelItems[i].DisplayName === selectedLabelerName) {
                          $('#divDescription').html(_labelItems[i].Description);
                          //$.get(_labelItems[i].File, function(data) {
                          //  
                          //});
                      }
                  }
              });

          }


        // onOpen: function(){
        //   console.log('onOpen');
        // },

        // onClose: function(){
        //   console.log('onClose');
        // },

        // onMinimize: function(){
        //   console.log('onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('onMaximize');
        // },

        // onSignIn: function(credential){
        //   /* jshint unused:false*/
        //   console.log('onSignIn');
        // },

        // onSignOut: function(){
        //   console.log('onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('onPositionChange');
        // },

        // resize: function(){
        //   console.log('resize');
        // }

        //methods to communication between widgets:

          })
  });
  
var _labelItems = [{
    DisplayName: 'Field / Text',
    File: "FieldTextLabeler.html",
    Description:"Description for Field Text Labeler"
}, {
    DisplayName: 'Relationship',
    File: "RelationshipLabeler.html",
    Description:"Description for Relationship Labeler"
}, {
    DisplayName: 'External',
    File: "ExternalLabeler.html",
    Description:"Description for External Labeler"
}, {
    DisplayName: 'Spatial',
    File: "SpatialLabeler.html",
    Description:"Description for Spatial Labeler"
}, {
    DisplayName: 'Filter',
    File: "FilterLabeler.html",
    Description:"Description for Filter Labeler"
}, {
    DisplayName: 'Group',
    File: "GroupLabeler.html",
    Description:"Description for Group Labeler"
}];
var tree = [
  {
      text: "Parent 1",
      nodes: [
        {
            text: "Child 1",
            nodes: [
              {
                  text: "Grandchild 1"
              },
              {
                  text: "Grandchild 2"
              }
            ]
        },
        {
            text: "Child 2"
        }
      ]
  },
  {
      text: "Parent 2"
  },
  {
      text: "Parent 3"
  },
  {
      text: "Parent 4"
  },
  {
      text: "Parent 5"
  }
];
function getTree() {

    return tree;
}  
function dabLIClick(e) {

      //e.preventDefault();
  
      $that = $(this);
  
      $that.parent().find('li').removeClass('active');
      $that.addClass('active');
      var selectedLabelerName = ($that.text());
      for (var i = 0; i < _labelItems.length; i++) {
        if (_labelItems[i].DisplayName === selectedLabelerName) {
        $('#divDescription').html(_labelItems[i].Description);
        //$.get(_labelItems[i].File, function(data) {
        //  
        //});
        }
      }
}
  
