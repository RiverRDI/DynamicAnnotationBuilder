define(["dojo/_base/declare", "CommonLabeler"], function (declare, CommonLabeler) {
    return declare(CommonLabeler, {
        constructor: function () {
            console.log("Base constructor");
        },
        Initialize: function (guid) {
            //Font Size: <input type="text" propertyName="FontSize" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Font Family: <input type="text" propertyName="FontFamily" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Text Color: <input type="text" propertyName="TextColor" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Map Width Text Appears: <input type="text" propertyName="TextAppear" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Map Width Text Disappears:  <input type="text" propertyName="TextDisappear" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Newline After Each:  <input type="checkbox" checked  propertyName="Newline" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            //Output Rows Variable:  <input type="text" propertyName="OutputRows" propertyTarget="value" name="txtDabFieldTextLabelerFieldsT" value="**RESET ON INIT" /><br />
            $("[guid=" + this.Guid + "] [propertyName=FontSize]").val(this.Properties.FontSize);
            $("[guid=" + this.Guid + "] [propertyName=FontFamily]").val(this.Properties.FontFamily);
            $("[guid=" + this.Guid + "] [propertyName=TextColor]").val(this.Properties.TextColor);
            $("[guid=" + this.Guid + "] [propertyName=TextAppear]").val(this.Properties.TextAppear);
            $("[guid=" + this.Guid + "] [propertyName=TextDisappear]").val(this.Properties.TextDisappear);
            $("[guid=" + this.Guid + "] [propertyName=Newline]").prop('checked', this.Properties.Newline);
            $("[guid=" + this.Guid + "] [propertyName=OutputRows]").val(this.Properties.OutputRows);
        },

        Properties: {
            FontSize: 12,
            FontFamily: "Arial",
            TextColor: "#000000",
            TextAppear: "All Scales",
            TextDisappear: "All Scales",
            Newline: true,
            OutputRows: function () {
                return "asdf";
            }
        }
        //,

        //GetGuid: function () {
        //    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        //        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        //        return v.toString(16);
        //    });
        //}
    });
});
