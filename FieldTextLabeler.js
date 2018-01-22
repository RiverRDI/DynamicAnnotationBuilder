dojo.declare("FieldTextLabeler", null, {

    // The constructor
    constructor: function (guid,parentGuid) {
        //dojo.safeMixin(this, args);
        this.Guid = guid;
        this.ParentGuid = parentGuid;
    },
    Guid: {},
    ParentGuid:{},
    Labeler: "FieldTextLabeler",
    InititializeMe: function (guid) {
        alert("init");
    },
    Properties: {
        FieldsToGet: "OBJECTID,NAME",
        Expression: "Hello [NAME]",
        DisplayText: "Field-Text Labeler"
    },
    CommonProperties:{
    }
});

