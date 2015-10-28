//base class
var Person = Class    
({
       //public area
    public:
    { 
        //initialize methods
    init:function(name,age){
        this.name = name;
        this.age = age;
        print( this.name )
    },
 
        SayHello :function()
        {
            //print("Hello, I'm " + this.name + ", " + this.age + " years old.");
            // //public methods can call all the private methods
            // testP2('testp2'); 
            // testP("called from public method");
            // this.testA();
            //   testP1("tet");
        },
        testA:function(str)
        {
            print("--------------testA#Person----------------"+str);
        },
        empty:function(){ 0+0; },
    },
    //private area
    private:
    {
        //private methods can call each other, and use this to access the Class variants
        testP1:  function(str )
        {
            print("-------------testP1----------------"+str );
            testp3(str);
        },
        testP2:  function(str){
            print("-------------testP2----------------" );testP1(str);
        },       
        testP:  function(str)
        {
            print("-------------testP#Person----------------"+ str);
            print("-------------testPpppp#Person----------------"+this.name);
            testP1("testP1 called");
            testP2("testP2 called");
        },
        testp3:function(str)
        {
            print('--------------testp3---------------------------'+str+this.name);
            // testP1('test3- called');
        }
    }
});

var Employee = Class(Person,    //派生自Person类
                     {
                        
                         public:
                         {
                             init: function(name, age, salary)
                         {
                             this.name=name;
                             this.age=age;
                             this.salary = salary;
                         },
 
                             ShowMeTheMoney: function()
                             {   
                                 var that=this;
                                 var testpppp=function(str){
                                     //print("inner");
                                 };
                                 var testp__=function(str){
                                     //print(that.name);
                                     testpppp(str);
                                     //print("test again")
                                 }

                                 //print("---colsure test---");
                                 testp__();
                                 print(this.name + " $" + this.salary);
                             },
                             testA: function()
                             {
                                 print("--------------testA#Employee----------------"+this.name);
                                 //Object.getPrototypeOf(this).testA();
                                 //Employee.Parent.prototype.testA("ddd");
                             }
                         }
                     });


var dev1 = new Person("Bill Gates", 43);
var Manager = new Employee("Steve Jobs", 53, 1234);
dev1.SayHello();
Manager.SayHello();
Manager.ShowMeTheMoney();
Manager.testA();
print(dev1 instanceof Person);       //true
print(dev1 instanceof Employee);     //false
print(Manager instanceof Person);       //true

var People=function(name,age)
{
    this.name=name;
    this.age=age;
    this.SayHello=function(){
        
        var testpppp=function(str){
            //print("inner");
        };
        var testp__=function(str){
            //print(that.name);
            testpppp(str);
            //print("test again")
        }

        //print("---colsure test---");
        testp__();
    }
}
//test performance
// var p0=new People("BillGate",55);
// var t_start=new Date();
// for (var i=0;i<5000000;i++)
// {
//     //  var dev1=new Person("dev1",43);
//     // dev1.SayHello();
//      p0.SayHello();              
// }
// var t_end=new Date();
// print(t_end-t_start);

