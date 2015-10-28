//Facade

Data1=Class(
    {
        public:
        {
            init:function()
            {
                print("data1 init");
            },
            Add:function()
            {
                print("data1 add");
            },
            Remove:function()
            {
                print("data1 remove");
            }
        }
    });

Data2=Class(
    {
        public:
        {
            init:function()
            {
                print("data2 init");
            },
            Start:function()
            {
                print("data2 start");
            },
            Stop:function()
            {
                print("data2 stop");
            }
        }
    });

Data=Class(
    {
        public:
        {
            init:function()
            {
                print("data init");
                this.data1=new Data1();
                this.data2=new Data2();
            },
            Operation:function()
            {
                this.data1.Add();
                this.data1.Remove();
                this.data2.Start();
                this.data2.Stop();
            }
        }
    });


var data=new Data();
data.Operation();