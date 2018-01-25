dojo.declare("CommonLabeler", null, {

    constructor: function (guid, parentGuid) {
        console.log("common constructor " + guid);
        this.CommonProperties = [
        {
            Property: "Display Text",
            Type: "Text",
            Value: "Field Text Labeler",
            Help: "Display Text is the value seen in the label tree.  The text can be anything you want, but should help you to understand what the particular label element is doing."
        },
        {
            Property: "Font Size",
            Type: "Text",
            Value: "12",
            Help: "Font Size help"
        },
        {
            Property: "Font",
            Type: "Text",
            Value: "Arial",
            Help: "Font Help"
        },
        {
            Property: "Text Color",
            Type: "Text",
            Value: "#000000",
            Help: "Text color help"
        },
        {
            Property: "Text Appear",
            Type: "Text",
            Value: "-1",
            Help: "Text appear help"
        },
        {
            Property: "Text Disappear",
            Type: "Text",
            Value: "-1",
            Help: "Text disappear help"
        },
        {
            Property: "New line",
            Type: "Checkbox",
            Value: "Checked",
            Help: "New line help"
        },
        {
            Property: "Output Rows",
            Type: "Text",
            Value: "Field Text Labeler",
            Help: "Output rows help"
        }
        ]
    },

    Initialize: function (guid) {
        //Font Size: <input type="text" propertyName="FontSize" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Font Family: <input type="text" propertyName="FontFamily" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Text Color: <input type="text" propertyName="TextColor" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Map Width Text Appears: <input type="text" propertyName="TextAppear" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Map Width Text Disappears:  <input type="text" propertyName="TextDisappear" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Newline After Each:  <input type="checkbox" checked  propertyName="Newline" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //Output Rows Variable:  <input type="text" propertyName="OutputRows" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
        //$("[guid=" + this.Guid + "] [propertyName=FontSize]").val(this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=FontFamily]").val(this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=TextColor]").val(this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=TextAppear]").val(this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=TextDisappear]").val(this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=Newline]").prop('checked', this.CommonProperties.FontSize);
        //$("[guid=" + this.Guid + "] [propertyName=OutputRows]").val(this.CommonProperties.FontSize);
    },

    CommonProperties: [

    ]

    //,

    //GetGuid: function () {
    //    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    //        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //        return v.toString(16);
    //    });
    //}
});


dojo.declare("FieldTextLabeler", CommonLabeler, {

    // The constructor
    constructor: function (guid, parentGuid) {
        console.log("ftl constructor");
        this.Guid = guid;
        this.ParentGuid = parentGuid;
        this.Properties = [{
            Property: "Fields",
            Type: "Text",
            Value: "OBJECTID,NAME",
            Help: "Enter a comma delimited list of fields that should be retrieved to satisfy the requirements of the label expression (e.g. 'ObjectID,NAME'). Enter the text without quotation.  Names of fields are not case sensitive.",
        }, {
            Property: "Expression",
            Type: "Text",
            Value: "Hello [NAME]",
            Help: "Help for expression"
        },

        ]
    },
    Guid: {},
    ParentGuid: {},
    Labeler: "FieldTextLabeler",
    Initialize: function (guid) {
        this.inherited(arguments);
        $("[guid=" + this.Guid + "] [propertyName=FieldsToGet]").val(this.Properties.FieldsToGet);
        $("[guid=" + this.Guid + "] [propertyName=Expression]").val(this.Properties.Expression);
        $("[guid=" + this.Guid + "] [propertyName=DisplayText]").val(this.Properties.DisplayText);

    },
    OnUpdate() {

    },
    Properties: []
});

