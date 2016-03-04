$("#div1").click(function() {
    $(this).hide();
});
$("#div2").hover(function() {
    $(this).css("border-width", 4);
});
$("#div2").click(function() {
    $("#div3").css("font-size", 25);
});
$(".opg2").click(function() {
    value = $(this).text()
    console.log(value);
    $(this).text(value * value);
});

for (var i = 0; i < 10; i++) {
    $("#ulist").append("<li>List Item: " + i + "</li>");
}

$("li").filter(":even").css("background-color", "lightgrey");

$("li").filter(function (index) {
    $(this).css("font-size", 10 + (index * 2));
});

$("#formId").submit(function () {
    var $inputs = $("#formId :input");
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    console.log(values);
    if (values.nameInput === "" || values.otherInput === "") {
        $("#formId").prepend("<p style='background-color: red'>Input missing</p>");
        return false;
    }
});

$('input[type="submit"]').prop('disabled', true);
$('input[type="text"]').keyup(function () {
    if ($(this).val() != '') {
        $('input[type="submit"]').prop('disabled', false);
    }
});

function person(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

var persons = [
    new person("Lars", "Larsen", 123),
    new person("Lars2", "Larsen", 3),
    new person("Lars3", "Larsen", 4),
    new person("Lars4", "Larsen", 112),
    new person("Lars5", "Larsen", 44)
];

var table = $("<table></table>");
$.each(persons, function (index, value) {
    console.log("index: " + index + ". Value " + value.fName + value.lName + value.age);
    var row = $("<tr></tr>");
    var td1 = $("<td>" + value.fName + "</td>");
    var td2 = $("<td>" + value.lName + "</td>");
    var td3 = $("<td>" + value.age + "</td>");
    row.append(td1);
    row.append(td2);
    row.append(td3);
    table.append(row);
});

$("body").append(table);

var lastWasOperand = false;
var calcSym = "";
var firstNumber = 0;

function appendNumber(number) {
    if (lastWasOperand) {
        text = $("#display").text();
        $("#display").text(text + number);
    } else {
        $("#display").text(number);
        lastWasOperand = true;
    }
}

function calcFunc(symbol) {
    var display = document.getElementById('display');
    if (lastWasOperand) {
        firstNumber = $("#display").text();
    }
    $("#display").text(symbol);
    calcSym = symbol;
    lastWasOperand = false;
}

function equal() {
    var displayNumb = $("#display").text();
    res = 0;
    switch (calcSym) {
        case "+":
            res = parseFloat(firstNumber) + parseFloat(displayNumb);
            break;
        case "-":
            res = parseFloat(firstNumber) - parseFloat(displayNumb);
            break;
        case "*":
            res = parseFloat(firstNumber) * parseFloat(displayNumb);
            break;
        case "/":
            res = parseFloat(firstNumber) / parseFloat(displayNumb);
            break;
    }
    $("#display").text(res);
    firstNumber = res;
    lastWasOperand = false;
}

$(".t1").click(function () {
    switch (this.id) {
        case "multiply":
            calcFunc("*");
            break;
        case "divide":
            calcFunc("/");
            break;
        case "minus":
            calcFunc("-");
            break;
        case "plus":
            calcFunc("+");
            break;
        case "comma":
            appendNumber(".");
            break;
        case "equal":
            equal();
            break;
        default:
            console.log($(this).text());
            appendNumber($(this).text());
            break;
    }
});

for (var i = 0; i < 10; i++) {
    var randomColor = "#" + Math.floor(Math.random() * 15777215).toString(16);
    var $div = $("<div>", {id: "imageId" + i, class: "abc"}).css("background", randomColor);
    $div.click(function () {
        var random = Math.floor((Math.random() * 10));
        $("#" + this.id).before($("#imageId" + random));
        console.log("swapped " + this.id + " and imageId" + random)
    });

    $("#images").append($div);
}
