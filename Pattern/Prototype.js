//Prototype
Prototype=Class(
    {
        
        public:
        {
            init:function()
            {
                print("prototype init");
            },
            Clone:function()
            {
                print("clone");
                return Object.create( this );
            }
        }
    });

ConcretePrototypeA=Class(Prototype,
                         {
                             
                             public:
                             {
                                 init:function()
                                 {
                                     print("concrete prototypeA");
                                 },
                                 // Clone:function()
                                 // {
                                 //     print("concrete prototypeA: clone");
                                 //    return Object.create(this);
                                 // }
                             }
                         });

ConcretePrototypeB=Class(Prototype,
                         {
                             
                             public:
                             {
                                 init:function()
                                 {
                                     print("concrete prototypeB");
                                 },
                                 // Clone:function()
                                 // {
                                 //     print("concrete prototypeB: clone");
                                 //     return Object.create(this);
                                 // }
                             }
                         });

var testPrototype1=new ConcretePrototypeA();
testPrototype2=testPrototype1.Clone();
var testPrototype3=new ConcretePrototypeB();
testPrototype4=testPrototype3.Clone();
print( testPrototype1==testPrototype2 );
