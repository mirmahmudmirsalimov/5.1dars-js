var HowMuchMoneyDoYouHave = prompt("QANCHA PULING BOR?");
var ruble = 5000;
var dollar = 91.869;
var euro = 89.475;

var ruble = 5000 * 184.22;
var dollar = 91.869 * 10855.23;
var euro = 89.475 * 11176.22;

var count = Number(ruble + dollar + euro);

if (HowMuchMoneyDoYouHave >= count) {
  alert("PULING YETADI, LIKIN JS DARSLARIDAN BARIBIR QOCHIB KETOLMAYSAN!");
} else {
  alert("PUL YETMAS EKAN, ENDI JS DARSLARIDAN QOCHIB KETOLMAYSAN!");
}

