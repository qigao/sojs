//Observer


Subject=Class(
    {
        public:
        {
            init:function()
            {
                print("subject init");
                this.observers=[];
            },
            notify:function()
            {
                var tmp=this.observers;
                for(var item in tmp)
                {
                    print("notify item: "+item);
                    if(tmp[item])
                    {
                        tmp[item].update(this);
                        print("notifying observer: "+item);
                    }
                };
            },
            attach:function(observer)
            {
                print("observer attached");
                var tmp=[];
                var arr=tmp.concat(this.observers,observer);
                this.observers=arr;
            },
            detach:function(observer)
            {
                var tmp=this.observers;
                for(var item in tmp)
                {
                    if(tmp[item]==observer)
                    {
                        delete tmp[item];
                        print("observer detached: "+ item);
                    };
                }
                this.observers=tmp;
            },
            setState:function(state)
            {
       
            },
            getState:function()
            {
            }
        }
    });

Observer=Class(
    {
        public:
        {
            init:function()
            {
                print("observer init");
            },
            update:function(subject)
            {
                this.subject=subject;
            },
        }
    });

ConcreteSubject=Class(Subject,
                      {
                          public:
                          {
                              init:function()
                              {
                                  print("concrete subject init");
                              },
                              setState:function(state)
                              {
                                  this.state=state;
                                  print("Concrete subject set state:"+ state);
                              },
                              getState:function()
                              {
                                  print("Concrete subject get state:");
                                  return this.state;
                              }
                          }
                      });

ConcreteObserver=Class(Observer,
                       {
                           public:
                           {
                               init:function(test)
                               {
                                   print("concrete observer init: "+test);
                                   this.test=test;
                               },
                               update:function(subject)
                               {
                                   state= subject.getState();
                                   print("state is: "+ state);
                                   print("test name:"+this.test);

                               }
                           }
                       });

var ob1=new ConcreteObserver("obj1");
var ob2=new ConcreteObserver("obj2");
var sub=new ConcreteSubject();

sub.attach(ob1);
sub.attach(ob2);
sub.setState(4);
sub.notify();
sub.detach(ob1);
sub.setState(10);
sub.notify();
                               