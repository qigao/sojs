AbstractProductA=Class(
    {
        public:
        {
            init:function()
            {
                print("abstract productA");
            }
        }
    });
ProductA1=Class(AbstractProductA,
                {
                    public:
                    {
                        init:function()
                        {
                            print(" productA1");
                        }  
                    } 
                });
ProductA2=Class(AbstractProductA,
                {
                    public:
                    {
                        init:function()
                        {
                            print(" productA2");
                        }
                    }
                });
AbstractProductB=Class(
    {
        public:
        {
            init:function()
            {
                print("abstract productB");
            }
        }
    });
ProductB1=Class(AbstractProductB,
                {
                    public:
                    {
                        init:function()
                        {
                            print(" productB1");
                        }
                    }
                });
ProductB2=Class(AbstractProductB,
                {
                    public:
                    {
                        init:function()
                        {
                            print(" productB2");
                        }
                    }
                });
AbstractFactory=Class(
    {
        
        public:
        {
            init:function()
            {
                print(" productB1abstract factory");
            },
            CreateProductA:function()
            {
            },
            CreateProductB: function()
            {
            }  
        }
    });

ConcreteFactory1=Class(AbstractFactory,
                       {
                           
                           public:
                           {
                               init:function()
                               {
                                   print("Concretefactory1");
                               },
                               CreateProductA:function()
                               {
                                   return new ProductA1();
                               },
                               CreateProductB:function()
                               {
                                   return new ProductB1();
                               },
                           }
                       });

ConcreteFactory2=Class(AbstractFactory,
                       {

                           public:
                           {
                               init: function()
                               {
                                   print("Concretefactory2");

                               },
                               CreateProductA: function()
                               {
                                   return new ProductA2();
                               },
                               CreateProductB: function()
                               {
                                   return new ProductB2();
                               },
                           },
                       });

var pFactory=new ConcreteFactory1();
pProductA=pFactory.CreateProductA();
pProductB=pFactory.CreateProductB();
