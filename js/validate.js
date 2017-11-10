function firstNameValidate(){
    var firstName = document.getElementById("fName").value;
    var name = /^[A-Za-z]+$/;

    if (firstName == "" ){
        document.getElementById("fName_error").innerHTML = "Please Enter First Name.";
        return false;
    }
    else if ( !firstName.match(name) ){
        document.getElementById("fName_error").innerHTML = "Name should have characters.";
        return false;
    }
    else{
        document.getElementById("fName_error").innerHTML = "";
        return true;
    }
}

function lastNameValidate(){
    var lastName = document.getElementById("lName").value;
    var name = /^[A-Za-z]+$/;

    if (lastName == "" ){
        document.getElementById("lName_error").innerHTML = "Please Enter last Name.";
        return false;
    }
    else if (!lastName.match(name)){
        document.getElementById("lName_error").innerHTML = "Name should have characters.";
        return false;
    }
    else{
        document.getElementById("lName_error").innerHTML = "";
        return true;
    }
}

function  phoneNoValidate() {
    var phnNo = document.getElementById("phnNo").value;
    var number = /^[7-9]{1}[0-9]{9}$/;

    if (phnNo == "" ){
        document.getElementById("phnNo_error").innerHTML = "Please Enter Phone number.";
        return false;
    }
    else if (!phnNo.match(number)){
        document.getElementById("phnNo_error").innerHTML = "Please Enter 10 digits number.";
        return false;
    }
    else{
        document.getElementById("phnNo_error").innerHTML = "";
        return true;
    }
}

function officeNoValidate() {
    var offNo = document.getElementById("offNo").value;
    var number = /^[7-9]{1}[0-9]{9}$/;

    if (offNo == "" ){
        document.getElementById("offNo_error").innerHTML = "Please Enter office phone number.";
        return false;
    }
    else if (!offNo.match(number)){
        document.getElementById("offNo_error").innerHTML = "Please Enter 10 digits number.";
        return false;
    }
    else{
        document.getElementById("offNo_error").innerHTML = "";
        return true;
    }
}

function emailValidate() {

    var mail = document.getElementById("mail").value;
    var email = /^([a-zA-Z\d\-\.]+)@([a-zA-Z]{2,5})\.([a-zA-Z]{2,4})$/;

    if (mail == "" ){
        document.getElementById("mail_error").innerHTML = "Please Enter Email id.";
        return false;
    }
    else if (!mail.match(email)){
        document.getElementById("mail_error").innerHTML = "Please Enter valid email id.";
        return false;
    }
    else{
        document.getElementById("mail_error").innerHTML = "";
        return true;
    }
}

function passwordValidate() {

    var pass= document.getElementById("pass").value;
    var password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

    if (pass == "" ){
        document.getElementById("pass_error").innerHTML = "Please Enter password";
        return false;
    }
    else if(!pass.match(password)){
        document.getElementById("pass_error").innerHTML = "Please Enter valid password.";
        return false;
    }
    else{
        document.getElementById("pass_error").innerHTML = "";
        return true;
    }
}

function conpasswordValidate() {

    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;

    if (conpass == "" ){
        document.getElementById("conpass_error").innerHTML = "Please confirm your password";
        return false;
    }
    else if (conpass != pass){
        document.getElementById("conpass_error").innerHTML = "Password do not matched";
        return false;
    }
    else{
        document.getElementById("conpass_error").innerHTML = "";
        return true;
    }
}

function yearDropdownList(){
    var start = 1900;
    var end = new Date().getFullYear();
    var options = "";
    for(var year = start ; year <=end; year++){
        options += "<option>"+ year +"</option>";
    }
    document.getElementById("year").innerHTML = options;


}
function genderValidation(){
    var male = document.getElementById("residence1").checked;
    var female = document.getElementById("residence2").checked;
    if (male == "" && female == ""){
        document.getElementById("gender_error").innerHTML = "Please select gender.";
        return false;
    }
    else{
        document.getElementById("gender_error").innerHTML = "";
        return true;
    }
}

function interestValidate(){
    var interest = document.getElementsByName("chk[]");
    if (interest[0].checked || interest[1].checked || interest[2].checked){
        document.getElementById("checkbox_sample_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("checkbox_sample_error").innerHTML = "Please select atleast one interest";
        return false;
    }
}

function aboutyouValidate(){
    var aboutyou = document.getElementById("details").value;
    if (aboutyou.length < 1){
       document.getElementById("aboutyou_error").innerHTML = "Please enter something about you";
       return false;
    }
    else{
        document.getElementById("aboutyou_error").innerHTML = "";
        return true;
    }
}

function formValidation(){

    var error = 0;

    if (!firstNameValidate()){
        error++;
    }
    if (!lastNameValidate()){
        error++;
    }
    if (!phoneNoValidate()){
        error++;
    }
    if (!officeNoValidate()){
        error++;
    }
    if (!emailValidate()){
        error++;
    }
    if (!passwordValidate()){
        error++;
    }
    if (!conpasswordValidate()){
        error++;
    }
    if(!calculate_age())

    if (!genderValidation()){
        error++;
    }
    if (!interestValidate()){
        error++;
    }
    if (!aboutyouValidate()){
        error++;
    }
    if (error == 0 ){
        return true;
    }
    else{
        return false;
    }
}

function years(){
    var start = 1900;
    var end = new Date().getFullYear();
    var options = "";
    for(var year = start ; year <=end; year++){
        options += "<option>"+ year +"</option>";
    }
    document.getElementById("year").innerHTML = options;
}

function calculate_age() {
    var birth_year = document.getElementById("year").value;
    var birth_month = document.getElementById("month").value;
    var birth_day = document.getElementById("date").value;

    var today = new Date();
    var birthday = new Date(birth_year, birth_month-1, birth_day);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000); //365*24*60*60*1000
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);//365*24*60*60*1000 / 60*60*24*1000

    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
        alert("Happy B'day!!!");
    }

    var month_age = Math.floor(day_age/30);

    day_age = day_age % 30;

    var tMnt= (month_age + (year_age*12));
    var tDays =(tMnt*30) + day_age;

    document.getElementById("age").value = year_age + "." + month_age;

}

/*
function calculate_age_in_years() {
    var birth_month = document.getElementById("month").value;
    var birth_day = document.getElementById("date").value;
    var birth_year = document.getElementById("year").value;
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();

    var age_years = today_year - birth_year;
    if (today_month < (birth_month - 1)) {
        return age_years--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
        return age_years--;
    }
    // alert('you are ' + age + 'yeas old');
    document.getElementById("age").value = age_years;
}
*/