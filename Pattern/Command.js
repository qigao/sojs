//Command

Command=Class(
    {
        public:
        {
            init:function()
            {
                print("init Command");
            },
            Execute:function()
            {
                print("Exceute command");
            }
        }
    });

Receiver=Class(
    {
         public:
        {
            init:function()
            {
                print("init Receiver");
            },
            Action:function()
            {
                print("Action from Receiver");
            },
        }
    });

ConcreteCommand=Class(Command,
                      {
                          public:
                          {
                              init: function(receiver)
                              {
                                  this.receiver=receiver;
                                  print("ConcreteCommand init");
                              },
                              Execute:function()
                              {
                                  print("execute from concrete command");
                                  this.receiver.Action();
                              },
                          }
                      });
Invoker=Class(
    {
        public:
        {
            init:function(command)
            {
                this.command=command;
                print("init invoker");
            },
            Invoke:function()
            {
                print("Invoking command");
                this.command.Execute();
            },
        }
    });

var receiver=new Receiver();
var command=new ConcreteCommand(receiver);
var invoker=new Invoker(command);
invoker.Invoke();
