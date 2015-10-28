//Adapter

Target=Class(
    {
        public:
        {
            init:function()
            {
                print('target init');
            },
            Request:function()
            {
            },
        }
    });
    Adaptee=Class(
        {
            public:
            {
                init:function()
                {
                    print("adatee init");
                },
                OrigRequest:function()
                {
                    print("Original request");
                },
            },
        });
    Adapter=Class(Target,
                  {
                      public:
                      {
                          init:function(adaptee)
                          {
                              print('adapter init');
                              this.adaptee=adaptee;
                          },
                          Request:function()
                          {
                              print("new request");
                              this.adaptee.OrigRequest();
                          }
                      }
                  });

    var adaptee=new Adaptee();
    var target=new Adapter(adaptee);
    target.Request();