//Iterator

Aggregate=Class(
    {
        public:
        {
            init:function()
            {
                print(" aggregate init");
            },
            getSize:function(){},
            getItem:function(index){},
            CreateIterator:function(aggregate){},
        }
    });

Iterator=Class(
    {
        public:
        {
            First:function(){},
            Next:function(){},
            IsDone:function(){},
            CurrentItem:function(){},
        }
    });

ConcreteIterator=Class(Iterator,
                       {
                           public:
                           {
                               init:function(aggregate)
                               {
                                   print("Concrete Iterator init");
                                   this.con_aggregate=aggregate;
                                   this.index=0;
                               },
                               First:function()
                               {
                                   this.index=0;
                               },
                               Next:function()
                               {
                                   if(this.index< this.con_aggregate.getSize())
                                   {
                                       ++this.index;
                                   };
                               },
                               IsDone:function()
                               {
                                   return this.index==this.con_aggregate.getSize();
                               },
                               CurrentItem:function()
                               {
                                   return this.con_aggregate.getItem(this.index);
                               }
                           }
                       });

ConcreteAggregate=Class(Aggregate,
                        {
                            public:
                            {
                                init:function(size)
                                {
                                    print("concrete aggregate init");
                                    this.data=[];
                                    this.size=size;

                                    for(var i=0;i<size;++i)
                                    {
                                        this.data[i]="__item__"+i;
                                    };
                                },
                                CreateIterator:function(aggregate)
                                {
                                    return new ConcreteIterator(this);
                                },
                                getSize:function()
                                {
                                    return this.size;
                                },
                                getItem:function(index)
                                {
                                    return this.data[index];
                                },
                            }
                        });

var aggregate=new ConcreteAggregate(4);
var iterator=new ConcreteIterator(aggregate);
for(; false== iterator.IsDone();iterator.Next())
{
    print("current item: "+iterator.CurrentItem());
};
print(aggregate.getItem(1));