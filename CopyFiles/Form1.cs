using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.IO;    
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.VisualBasic.Devices;

namespace CopyFiles
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            System.IO.File.Copy(@"D:\WAB\arcgis-web-appbuilder-2.6\WebAppBuilderForArcGIS\client\stemapp\widgets\DynamicAnnotationBuilder\Widget.js", @"D:\WAB\arcgis-web-appbuilder-2.6\WebAppBuilderForArcGIS\server\apps\7\widgets\DynamicAnnotationBuilder\widget.js");
        }

        private void button2_Click(object sender, EventArgs e)
        {
        }

        private void button3_Click(object sender, EventArgs e)
        {
            string serverTargetAppID = "7";
            string serverTargetDir = @"D:\WAB\arcgis-web-appbuilder-2.6\WebAppBuilderForArcGIS\server\apps\" + serverTargetAppID + @"\widgets\DynamicAnnotationBuilder";
            string clientTargetDir = @"D:\WAB\arcgis-web-appbuilder-2.6\WebAppBuilderForArcGIS\client\stemapp\widgets\DynamicAnnotationBuilder";

            //clientTargetDir = @"C:\temp";
            string mod = DateTime.Now.ToString();
            string thisLocation = Environment.CurrentDirectory;
            DirectoryInfo di = new DirectoryInfo(thisLocation).Parent.Parent.Parent;
            string Thisdir = di.FullName;
            //modify HTML so we know that this is the current file. 
            var html = System.IO.File.ReadAllText(Thisdir + @"\Widget.html");
            html = html.Replace("Modified at", mod);

            var c = new Computer();
            c.FileSystem.CopyDirectory(Thisdir, clientTargetDir,true);
            c.FileSystem.CopyDirectory(Thisdir, serverTargetDir, true);
            File.WriteAllText(clientTargetDir + @"\Widget.html", html);
            File.WriteAllText(serverTargetDir + @"\Widget.html", html);
            //var vb = new Microsoft.VisualBasic.Devices.Computer().FileSystem.CopyDirectory(sourceFolder, outputFolder);
            MessageBox.Show("Copied");
            
            //D:\WAB\arcgis - web - appbuilder - 2.6\WebAppBuilderForArcGIS\client\stemapp\widgets\DynamicAnnotationBuilder\images

        }
    }
}
