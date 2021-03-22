/*var  nameColor =prompt(" enter your favourite color ")

if(nameColor=="red"){
    document.write("<p style=color:red; font-size=50px;>"+"Chandeliers"+"</p>")
}
else if(nameColor=="blue"){
    document.write("<p style=color:blue; font-size=50px;>"+"Chandeliers"+"</p>")

}
else if(nameColor=="black"){
    document.write("<p style=color:black; font-size=50px;>"+"Chandeliers"+"</p>")

}
else if(nameColor=="green"){
    document.write("<p style=color:green; font-size=50px;>"+"Chandeliers"+"</p>")


}
else{
    alert("write one of these colors[red,blue,black,green]")
}
console.log(nameColor);
*/

var Age = prompt("whats your age?");
function getAge(yourAge) {

    console.log(Age);
    if (yourAge >= 20 && yourAge <= 50) {
        alert('welcome to the site');
    
    } else {
        alert('can not see this site');
    }
}
document.write(getAge(Age))
var count=''
var typeChandeliers = prompt("enter name of Chandeliers type ");

var Chandeliers = function () {
    while (typeChandeliers != 'crystal' && typeChandeliers != 'kitchen') {
        typeChandeliers = prompt("plase enter the correct name from this name 1-crystal 2-kitchen")

    }

    count = prompt("pleas enter the number of items you want the image to appear")
    var result = '';

    var imges = '';
    if (typeChandeliers == 'crystal') {
        imges = '<img src="https://www.lampsplus.com/images/landing-pages/chandeliers-n/Chandeliers_Crystal.jpg"/>'
        document.write(imges)

    }
    else if (typeChandeliers == 'kitchen') {
        imges = '<img src="https://image.lampsplus.com/is/image/cropped/48298cropped.fpx?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg"/>'
        document.write(imges);

    }
    for (i = 0; i < count; i++) {
        result += imges
        return result



    } 



}



document.write(Chandeliers());
document.write("number img =" + count);












