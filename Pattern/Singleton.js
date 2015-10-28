//Singleton

Singleton=Class(
    {
        public:
        {
            testA: function()
            {
                print("this is a test");
            },
            init:function(name)
            {
                print("Singleton init");
               
                this.name=name;  
                var instance=this;
                Singleton=function()
                {
                    return instance;
                }
            },
            testB: function()
            {
                print(this.name);
            }
        }
    });

//var tester=new Singleton();
var d=new Singleton("aaa");
var ddd=new Singleton("test");
print(d===ddd);//true
d.testA(); //this is a test
ddd.testB();//aaa