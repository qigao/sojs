
function Class()
{
    //get base class and arguments
    var methods = arguments[arguments.length-1]; 
    if(!methods) return;
    var parent= arguments.length>1 ? arguments[0] : function f(){};
    
    //run the init methods from klass
    function klass(){
        if(methods.public.init)
            methods.public.init.apply(this,arguments);
    };
    //new function object, all functions will be added to this function
    
    var F=function (){};
    F.prototype = parent.prototype;
    klass.prototype = new F();
    klass.prototype.constructor= klass;
    

    var reg_args=/[\s\(]*function[^(]*\(([^\)]*)\)/;
    var pri_code="";

    //make all the private methods a public method called into nest function
    for(var member in methods.private) 
    {
        var key_code_pri=methods.private[member].toString().replace(/this\./,'that.');        
        pri_code="var "+ member +"="+key_code_pri+";"+pri_code;
    }

    // add all public methods to prototype
    for( var public_ in  methods.public)
    {
        if(pri_code !="")
        { 
            //get public method codes
            var code_pub=methods.public[public_].toString();
            //get public method  argments
            var args_pub=code_pub.match(reg_args)[1].replace(/\s+/g, '').split(',');
            //delete arguments,function name and } at the end of the code
            //to get the code body
            var replace_reg=new RegExp('\\bfunction[^(]*\\('+args_pub+'\\)\\s*\\{');
            //this is the public method body
            var code_pub_body=code_pub.replace(replace_reg,'').replace(/\}$/,'');  
            //add the private methods to the head of this public method
            var func_pub="var that=this; "+pri_code+code_pub_body;
            //copy all the public method to new object
            klass.prototype[public_]=new Function(args_pub,func_pub);
        }else
            klass.prototype[public_]=methods.public[public_];
    }
    klass.Parent=parent;
   
    return klass; 
};


