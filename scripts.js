function doFirst() {
    document.write("Hello please REFRESH and fill THE TEXT BOX one by one filling base first, height and lastly hypotenus");

}
doFirst();

function onlyNumbersWithDot(e) {
         var charCode;
         if (e.keyCode > 0) {
             charCode = e.which || e.keyCode;
         }
         else if (typeof (e.charCode) != "undefined") {
             charCode = e.which || e.keyCode;
         }
         if (charCode == 46)
             return true
         if (charCode > 31 && (charCode < 48 || charCode > 57))
             return false;
         return true;
       }
var base =parseInt(prompt("Enter the base length of triangle below."));
var height =parseInt(prompt("Enter the height length of triangle below."));
var hypotenus =parseInt(prompt("Enter the hypotenus length of triangle below."));

if ((base===height) && (height===hypotenus) &&(hypotenus===base)){
  alert("Definitely The triangle is a Equilateral Triangle ");
}
else if((base===height) || (height===hypotenus)||(hypotenus===base)){
  alert("Without Doubt The triangle is an Isosceles Triangle ");
}
else if((base===height) || (height===hypotenus)||(hypotenus===base)){
  alert("Without Doubt The triangle is an Isosceles Triangle ");
}
else if((base+height) <=hypotenus || (height===hypotenus) <=base ||(hypotenus===base) <=height){
  alert("Trust me thats not a TRIANGLE ! try again");
}
else if((base+height) <=hypotenus || (height===hypotenus) <=base ||(hypotenus===base) <=height){
  alert("Trust me thats not a TRIANGLE ! try again");
}
