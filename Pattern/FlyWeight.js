//FlyWeight

FlyWeight=Class(
    {
        public:
        {
            init:function(state)
            {
                this.state=state;
            },
            getIntrinsicState:function()
            {
                return this.state;
            },
            operation:function(extrinsicState)
            {
            },
        }
    });
FlyWeightFactory=Class(
    {
        public:
        {
            getFlyWeight:function(key)
            {
                var tmp=this.items;
                for(var item in tmp)
                {
                    if(tmp[item].getIntrinsicState()==key)
                    {
                        print("the flyweight :"+key+" already exists");
                        return tmp[item];
                    }
                };
                print("create a new flyweight");
                var flyweight=new ConcreteFlyWeight(key);
                var arr=[];
                var arr_new=arr.concat(this.items,flyweight);
                this.items=arr_new;
                return flyweight ;
            },
            init:function()
            {
                this.items=[];
            }
        }
    });
ConcreteFlyWeight=Class(FlyWeight,
                        {
                            public:
                            {
                                init:function(state)
                                {
                                    this.state=state;
                                },
                                operation:function(exstrinsicState)
                                {},
                            }
                        });

var flyweightfactory=new FlyWeightFactory();
flyweightfactory.getFlyWeight("hello");
flyweightfactory.getFlyWeight("world");
flyweightfactory.getFlyWeight("hello");
