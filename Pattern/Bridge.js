//Bridge

Abstraction=Class(
    {
        public:
        {
            init:function(implementor)
            {
                print("abstraction init");
                this.implementor=implementor;
            },
            Operation:function()
            {
                print("operation");
                this.implementor.OperationImp();
            }
        }
    });

Implementor=Class(
    {
        public:
        {
            init:function()
            {
                print("Implementor init");
            },
            OperationImp:function()
            {
                print("operation implementor");
            },
        }
    });

ConcreteImplementorA=Class(Implementor,
                           {
                               public:
                               {
                                   init:function()
                                   {
                                       print("concrete implementor A");
                                   },
                                   OperationImp:function()
                                   {
                                       print("operation implementor A");
                                   },
                               }
                           });

ConcreteImplementorB=Class(Implementor,
                           {
                               public:
                               {
                                   init:function()
                                   {
                                       print("concrete implementor B");
                                   },
                                   OperationImp:function()
                                   {
                                       print("operation implementor B");
                                   },
                               }
                           });

var ImpA=new ConcreteImplementorA();
var abs=new Abstraction(ImpA);
abs.Operation();