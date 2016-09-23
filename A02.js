function calculate(){
var userMonth = $("#month").val();
var userYear = $("#year").val();

var bDay = 2016 - userYear;
alert("You were born in " + userMonth + " and you are or will be " + bDay + " years old this year.");
}
