//Visitor

Element=Class(
    {
        public:
        {
            init:function(){},
            accept:function(visitor){},
        }
    });

ConcreteElementA=Class(Element,
                       {
                           public:
                           {
                               accept:function(visitor)
                               {
                                   visitor.visitElementA(this);
                               },
                               init:function()
                               {
                                   print("concrete element A init");
                               }
                           }
                       });
ConcreteElementB=Class(Element,
                       {
                           public:
                           {
                               accept:function(visitor)
                               {
                                   visitor.visitElementB(this);
                               },
                               init:function()
                               {
                                   print("concrete element B init");
                               }
                           }
                       });

Visitor=Class(
    {
        public:
        {
            visitElementA:function(elementA)
            {
            },
            visitElementB:function(elementB)
            {
            },
        }
    });
ConcreteVisitorA=Class(Visitor,
                       {
                           public:
                           {
                               init:function()
                               {
                                   print("Concrete Visitor A");
                               },
                               visitElementA:function(elementA)
                               {
                                   print("visit element A by concrete visitor A");
                               },
                               visitElementB:function(elementB)
                               {
                                   print("visit element B by concrete visitor B");
                               },
                           }
                       });
var visitorA=new ConcreteVisitorA();
var elementA=new ConcreteElementA();
elementA.accept(visitorA);
