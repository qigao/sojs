//Strategy

Context=Class(
    {
        public:
        {
            init:function(strategy)
            {
                this.strategy=strategy;
                print("context init");
            },
            ContextInterface:function()
            {
                this.strategy.algorithmInterface();
            }
        }
    });
Strategy=Class(
    {
        public:
        {
            init:function(){},
            algorithmInterface:function()
            {
            },
        },
    });

ConcreteStrategyA=Class(Strategy,
                        {
                            public:
                            {
                                init:function()
                                {
                                    print("strategy init");
                                },
                                algorithmInterface:function()
                                {
                                    print("implement by algorithm A");
                                },
                            }
                        });

var strategy=new ConcreteStrategyA();
var context=new Context(strategy);

context.ContextInterface();