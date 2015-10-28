//State

Context=Class(
    {
        public:
        {
            init:function(state)
            {
                print("context init");
                this.state=state;
            },
            Request:function()
            {
                this.state.Handle(this);
            },
            ChangeState:function(state)
            {
                this.state=state;
            },
        }
    });

State=Class(
    {
        public:
        {
            init:function(){},
            Handle:function(context){},
        }
    });

ConcreteStateA=Class(State,
                     {
                         public:
                         {
                             init:function()
                             {
                                 print("concrete state A init");
                             },
                             Handle:function(context)
                             {
                                 context.ChangeState(new ConcreteStateB());
                             },
                         }
                     });

ConcreteStateB=Class(State,
                     {
                         public:
                         {
                             init:function()
                             {
                                 print("concrete state B init");
                             },
                             Handle:function(context)
                             {
                                   context.ChangeState(new ConcreteStateA());
                             },
                         }
                     });

var state=new ConcreteStateA();
var context=new Context(state);
context.Request();
context.Request();
context.Request();
context.Request();
