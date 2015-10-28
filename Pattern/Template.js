//Template

Abstract=Class(
    {
        public:
        {
            init:function()
            {
                print("abstract init");
            },
            OperationA:function()
            {
                print("Operation A");
            },
            OperationB:function()
            {
                print("Operation B"); 
            },
            Templatemethod:function()
            {
                this.OperationA();
                this.OperationB();
            }
        }
    });

ConcreteA=Class(Abstract,
                {
                    public:
                    {
                        init:function()
                        {
                            print("concrete A init");
                        },
                        OperationA:function()
                        {
                            print("Operation A from concrete");
                        },
                        OperationB:function()
                        {
                            print("Operation B from concrete"); 
                        },
                        
                    }
                });

var tmp=new ConcreteA();
tmp.Templatemethod();

