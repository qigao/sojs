//Chain of Responsibility

Handler=Class(
    {
        public:
        {
            init:function(successor)
            {
                this.successor=successor;
            },
            handleRequest:function(){},
        }
    });

ConcreteHandler1=Class(Handler,
                      {
                          public:
                          {
                              init:function(successor)
                              {
                                  this.successor=successor;
                                  print("Concrete handler 1 init");
                              },
                              handleRequest:function()
                              {
                                  if(null!=this.successor)
                                  {
                                      this.successor.handleRequest();
                                  }else
                                  {
                                      print("handle request by concrete handler 1");
                                  }
                              },
                          }
                      });

ConcreteHandler2=Class(Handler,
                      {
                          public:
                          {
                              init:function(successor)
                              {
                                  this.successor=successor;
                                  print("Concrete handler 2 init");
                              },
                              handleRequest:function()
                              {
                                  if(null !=this.successor)
                                  {
                                      this.successor.handleRequest();
                                  }else
                                  {
                                      print("handle request by concrete handler 2");
                                  }
                              },
                          }
                      });

var handler1=new ConcreteHandler1();
var handler2=new ConcreteHandler2(handler1);

handler2.handleRequest();