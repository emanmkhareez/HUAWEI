var number1=parseInt(prompt("Enter the first number"));
var number2=parseInt(prompt("Enter the second number"));
var operation=prompt("Enter the operation");
var num1=parseInt(prompt("Enter number"));
var num2=parseInt(prompt("Enter number"));

if(operation=="+"){
    var result=number1+number2
    document.write("<div>"+result+"</div>")

}
else if(operation=="-"){
    var result=number1-number2
    document.write("<div>"+result+"</div>")

}
else if(operation=="*"){
    var result=number1*number2
    document.write("<div>"+result+"</div>")

}
else if(operation=="/"){
    var result=number1/number2
    document.write("<div>"+result+"</div>")}
    else if(operation=="%"){
        var result=number1%number2
        document.write("<div>"+result+"</div>")}
        else{
            document.write("<div>"+"no answer"+"</div>")
            

        }
        function myFunction() {
            var thank = document.createTextNode("thank you");
            document.body.appendChild(thank);
          }
          if(num1>=num2){
            document.write("<div>"+num1+"<br>"+"num1 grater than num2"+"</div>")

          }
          else{
            document.write("<div>"+num2+"<br>"+"num2 greater than num1"+"</div>")

          }
        

