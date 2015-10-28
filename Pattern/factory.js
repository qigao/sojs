//scenario
//assume we should get some data from a source, the data should be converted into xml or json, we'll see how the factory method applied

//base product
XMLData=Class(
    {
        
        public:
        {
            init: function()
            {
                print("XML Data, base product init");
                print("===========================");
            },
            toString: function()
            {
                print("XMLData toString--");
            },
            toJSON:function()
            {
                print("XMLData toJSON");
            }
        }
    });

//inherited P1 data product
P1XMLData=Class(XMLData,
                {
                    
                    public:
                    {
                        init:function()
                        {
                            print("P1XMLData inherited from XMLData init");
                            print("===========================");
                        },                           
                        toString: function()
                        {
                            print(" P1Data toString--");
                        },
                        toJSON: function()
                        {
                            print("P1Data toJSON");
                        }

                    }
                });

//inherited P2Data product
P2XMLData=Class(XMLData,
                { 
                    
                    public:
                    {
                        init:function()
                        {
                            print("P2XMLData inherited from XMLData init");
                            print("===========================");
                        },
                        toString: function()
                        {
                            print(" <xml><name>ycdeng</name><gender>male</gender><id>22222</id></xml>");
                        },
                        toJSON: function()
                        {
                            print("P2Data toJSON");
                            //Object.getPrototypeOf(this).toJSON(); 
                            P2XMLData.Parent.prototype.toJSON();
                        }
                    }
                });

//factory
XMLDataFactory=Class(
    {
        
        public:
        {
            init:function()
            {
                print("XMLDataFactory init");
                print("===========================");
                this.data=new XMLData();
            }, 
            loadFile : function(file)
            {
                print("load xml file from--"+file);
            },
            loadString : function(xmlstring)
            {
                print("load xml from --"+xmlstring);
            },
            transform: function()
            {
                print("transform xmldata");
                return this.data;
            },
        }
    });

//P1 factory inherited from factory
P1XMLDataFactory=Class(XMLDataFactory,
                       {
                           public: 
                           {

                               init:function()
                               {
                                   print("P1XMLDataFactory init");
                                   print("===========================");
                                   this.P1=new P1XMLData();
                               },
                               transform: function()
                               {
                                   print("transforming P1Data");
                                   return this.P1;
                               },
                           }
                       });

//P2 factory inherited from factory
P2XMLDataFactory=Class(XMLDataFactory,
                       {
                           
                           public: 
                           {
                               init:function()
                               {
                                   print("P2XMLDataFactory init");
                                   print("===========================");
                                   this.P2=new P2XMLData();
                               },
                               transform: function()
                               {
                                   print("transforming P2Data");
                                   return this.P2;
                               },
                               // toJSON: function()
                               // {
                               //     print("P2Data toJSON");
                               
                               // }

                           },
                           
                       });

XMLDataController=Class(
    {
        
        public:
        {
            init:function(datatype)
            {
                print("===========================");
                print("XMLDataController init");
                print("===========START===========");
                this.datatype=datatype;
                this.data=new XMLData();
            },
            transformXMLData:function(xmlfactory)
            {
                switch(this.datatype){
                case "p1":  this.data=xmlfactory.transform(); break;
                case "p2":  this.data=xmlfactory.transform(); break;
                    dafault:  print("not a factory");
                }
                return this.data;
            },
        }
        
    });


print('------------------------------------');

//use p1 data
var data1=new XMLDataController('p1');
var xmlfactory1=new P1XMLDataFactory();
var p1=data1.transformXMLData(xmlfactory1);
p1.toJSON();
print('------------------------------------');

//use p2 data
var data=new XMLDataController('p2');
var xmlfactory=new P2XMLDataFactory();
var p2=data.transformXMLData(xmlfactory);
p2.toString();
p2.toJSON();

// var t_start=new Date();
// for (var i=0;i<50000;i++)
// {
//  var data1=new XMLDataController('p1');
//  var xmlfactory1=new P1XMLDataFactory();
//      p1=data1.transformXMLData(xmlfactory1);
//     p1.toString();
// }
// var t_end=new Date();
// print(t_end-t_start);
