//Decorator

Component=Class(
    {
        public:
        {
            init:function()
            {
                print("init Component");
            },
            Operation:function()
            {
            },
        },
    });

Decorator=Class(Component,
                {
                    public:
                    {
                        init:function(component)
                        {
                            this.component=component;
                            print("Decorator init");
                        },
                        Operation:function()
                        {
                            print("Operation Decorator");
                        }
                    }
                });

ComponentA=Class(Component,
                 {
                     public:
                     {
                         init:function()
                         {
                             print("component A");
                         },
                         Operation:function()
                         {
                             print(" component A operation");
                         }
                     }
                 });

DecoratorA=Class(Decorator,
                 {
                     public:
                     {
                         init:function(component)
                         {
                             this.component=component;
                             print("DecoratorA init");
                         },
                         
                         Operation:function()
                         {
                             print("DecoratorA operation");
                             this.component.Operation();
                         }
                     }
                 });

DecoratorB=Class(Decorator,
                 {
                     public:
                     {
                         init:function(component)
                         {
                             this.component=component;
                             print("DecoratorB init");
                         },
                         Operation:function()
                         {
                             print("DecoratorB operation");
                             this.component.Operation();
                         }
                     }
                 });

var component=new ComponentA();
var decoratorA=new DecoratorA(component);
decoratorA.Operation();
var decoratorB=new DecoratorB( component );
// var decoratorB=new DecoratorB(new DecoratorA(component));
decoratorB.Operation();
