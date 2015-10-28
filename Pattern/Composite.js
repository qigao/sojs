//Composite

Component=Class(
    {
        public:
        {
            init:function()
            {
                print("Component init");
            },
            Operation:function()
            {
            },
            Add:function(child)
            {
            },
            getChild:function(index)
            {
            },
        }
    });

Leaf=Class(Component,
    {
        public:
        {
            init:function()
            {
                print("leaf");
            },
            Operation:function()
            {
                print("leaf operation");
            }
        }
    });

Composite=Class(Component,
    {
        public:
        {
            init:function()
            {
                print("Composite init");
                this.items=[];
            },
            Operation:function()
            {
                for(var item in this.items)
                {
                    this.items[item].Operation();
                }
            },
            Add:function(child)
            {
                this.items.push(child);
            },
            getChild:function(index)
            {
                return this.items[index];
            },
        }
    });

var leaf1=new Leaf();
var leaf2=new Leaf();
var composite=new Composite();
composite.Add(leaf1);
composite.Add(leaf2);
composite.Operation();
composite.getChild(1).Operation();
