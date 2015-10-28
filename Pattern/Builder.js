//Builder pattern

Builder=Class(
    {
        
        public:
        {
            init:function()
            {
                print("builder init");
            },
            BuildPartA:function(){
            },
            BuildPartB:function(){
            },
        }
    });

ConcreteBuilder1=Class(Builder,
                       {
                           
                           public:
                           {
                               init:function()
                               {
                                   print("concrete builder1");
                               },
                               BuildPartA:function()
                               {
                                   print("Build PartA by builder1");
                               },
                               BuildPartB:function()
                               {
                                   print("Build PartB by Builder1");
                               },
                           }
                       });

ConcreteBuilder2=Class(Builder,
                       {
                           
                           public:
                           {
                               init:function()
                               {
                                   print("ConcreteBuilder2");
                               },
                               BuildPartA:function()
                               {
                                   print("Build PartA by Builder2");
                               },
                               BuildPartB:function()
                               {
                                   print("Build PartB by Builder2");
                               }
                           }
                       });

Director=Class(
    {
        
        public:
        {
            init:function(builder)
            {
                this.builder=builder;
                print("director init");
            },
            Construct: function()
            {
                this.builder.BuildPartA();
                this.builder.BuildPartB();
            },
        }
    });

builder1=new ConcreteBuilder1();
director=new Director(builder1);
director.Construct();