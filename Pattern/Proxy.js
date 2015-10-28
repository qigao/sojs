//Proxy

Subject=Class(
    {
        public:
        {
            init:function()
            {
                print("subject init");
            },
            Operation:function()
            {
            },
        },
    });

RealSubject=Class(Subject,
                  {
                      public:
                      {
                          init:function()
                          {
                              print("realsubject init");
                          },
                          Operation:function()
                          {
                              print("realsubject operation");
                          }
                      }
                  });
Proxy=Class(Subject,
            {
                public:
                {
                    init:function()
                    {
                        print("proxy init");
                        this.real=new RealSubject();
                    },
                    Operation:function()
                    {
                        print("proxy called realsubject");
                        this.real.Operation();
                    }
                }
            });

var proxy=new Proxy();
proxy.Operation();
