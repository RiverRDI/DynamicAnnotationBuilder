var x = define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function (declare, BaseWidget) {
      //To create a widget, you need to derive from BaseWidget.
      var _treeview;
      var _activeNodeId = "0.0";
      var counter = 0;
      return declare([BaseWidget], {
          // Custom widget code goes here

          baseClass: 'jimu-widget-DynamicAnnotationBuilder',
          name: 'DynamicAnnotationBuilder',

          //methods to communication with app container:

          // postCreate: function() {
          //   this.inherited(arguments);
          //   console.log('postCreate');
          // },

          startup: function () {
              //fieldTextLabeler().InititializeMe();
              this.inherited(arguments);
              //this.mapIdNode.innerHTML = 'map id:' + this.map.id;
              //alert("T");
              console.log('startup');
              //dabLIClick(); 
              // _treeview = $('#tree').treeview;
              $('#tree').treeview({
                  data: getTree(),
                  onNodeSelected: function (event, data) {
                      _activeNodeId = data.nodeId;
                      var activeGuid = "asdf";
                  },
                  onDoubleClick: function (event, data) {
                      OnTreeDoubleClick();
                  }
                  //,
                  //onNodeRendered: function (event, data) {
                  //    counter++;
                  //    console.log(counter + " : " + data);
                  //}
              });

              /*$('#dabBtnAddToTree').click(function () {
                  debugger;
                  var parentNode = [$('#tree').treeview('getSelected')[0]];
                  var numberOfChildren = parentNode.length + 1;
                  var newNode = [{ text: 'New Node' }];
                  $('#tree').treeview('addNode', [newNode, parentNode, numberOfChildren]);

                  //debugger;
                  
              } 
              );*/

              $('#btnDabUpdateLabelElement').click (function(event,data){
                  var selectedNode = $('#tree').treeview('getSelected')[0];
              });

              $('#tree').dblclick(function () {
                  //OnTreeDoubleClick();
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
    Description: "Description for Field Text Labeler"
}, {
    DisplayName: 'Relationship',
    File: "RelationshipLabeler.html",
    Description: "Description for Relationship Labeler"
}, {
    DisplayName: 'External',
    File: "ExternalLabeler.html",
    Description: "Description for External Labeler"
}, {
    DisplayName: 'Spatial',
    File: "SpatialLabeler.html",
    Description: "Description for Spatial Labeler"
}, {
    DisplayName: 'Filter',
    File: "FilterLabeler.html",
    Description: "Description for Filter Labeler"
}, {
    DisplayName: 'Group',
    File: "GroupLabeler.html",
    Description: "Description for Group Labeler"
}];
var tree = [
  {
      text: "New Label Expression (select to set properties)",
      labeler: "DABTopLevelLabeler",
      state:{
          selected:true
      },
      Guid:getGuid(),
      nodes: [
      ]
  }
];
var _selectedLabelItem = "FieldTextLabeler";
function getTree() {

    return tree;
}
function btnDabUpdateLabelElement() {
    var selectedNode = $('#tree').treeview('getSelected')[0];
}
var _labelElementsInExpression = [];
function dabAddLabelElement() {
    //$.get("Widgets/DynamicAnnotationBuilder/" + _selectedLabelItem + ".html", function (data) {
        
        var parentNode = $('#tree').treeview('getSelected')[0];
        var numberOfChildren = parentNode.length + 1;
        var newLabeler = "";
        var guid = getGuid();
        //data = data.replace("***REPLACE WITH GUID***", guid);
        var parentGuid = parentNode.Guid;
        var newNode = { text: "Default Text", Guid: guid , parentGuid: parentGuid};
        if (_selectedLabelItem === "FieldTextLabeler") {
            newLabeler = new FieldTextLabeler(guid,parentGuid);
        }
        if (_selectedLabelItem === "RelationshipLabeler") {
            newLabeler = new RelationshipLabeler(guid, parentGuid);
        }
        //...
        newNode.text = newLabeler.Properties.DisplayText;
        newNode.Labeler = newLabeler;
        $('#tree').treeview('addNode', [newNode , [parentNode], numberOfChildren]);
        HydrateLabelElement(newLabeler)

        //_labelElementsInExpression.push(newLabeler);
        //$('#divDabLabelElementSpecificProperties').html(data);
        //$.get("Widgets/DynamicAnnotationBuilder/CommonLabeler.html", function (commonLabelerData) {
        //    $('#divDabCommonProperties').html(commonLabelerData);
        //    newLabeler.Initialize();
        //});
    //});
}

function HydrateLabelElement(newLabeler) {
    var html = "";
    require(["dojo/_base/array"],
    function (array) {
        array.forEach(newLabeler.CommonProperties, function (item, i) {
            html += item;
            //domConst.create("TR", { innerHTML: "<TD>" +  i + 1 + ". " + item }, "divDabLabelElementProperties");
        });
    });

}

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

$('#listGroupDabLabelElements li').click(function (e) {
    e.preventDefault();
    //dabLIClick();
    $that = $(this);
    _selectedLabelItem = dojo.attr(this, 'labeler');
    $that.parent().find('li').removeClass('active');
    $that.addClass('active');
    var selectedLabelerName = ($that.text());
    for (var i = 0; i < _labelItems.length; i++) {
        if (_labelItems[i].DisplayName === selectedLabelerName) {
            $('#divDescription').html(_labelItems[i].Description);
        }
    }
});


