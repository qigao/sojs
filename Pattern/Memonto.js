//Memento

Originator=Class(
    {
        public:
        {
            init:function(state)
            {
                print("Originator init");
                this.state=state;
            },
            getState:function()
            {
                return this.state;
            },
            setState:function(state)
            {
                this.state=state;
            },
            restoreSate:function(memento)
            {
                this.state=memento.getState();
            },
            printState:function()
            {
                print("state="+this.state);
            },
        }
    });
Memento=Class(
    {
        public:
        {
            setState:function(state)
            {
                this.state=state;
            },
            init:function(orig)
            {
                this.state=orig.getState();
            },
            getState:function()
            {
                return this.state;
            }
        },
    });

var orig=new Originator("old state");
orig.printState();
var memento=new Memento(orig);
orig.setState("new state");
orig.printState();
print("state="+memento.getState());
orig.restoreSate(memento);
orig.printState();