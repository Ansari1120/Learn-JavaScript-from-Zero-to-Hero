function valFrom(){
    var check = event.target.children;
    if(check.fname.value == " "){
        msg("need a first name !");
        return false;
    }
    if(check.lname.value == " "){
        msg("need a last name !");
        return false;
    }
    if(check.age.value == " "){
        msg("need an age  input !");
        return false;
    }
    return true;
}
function msg(s){
    document.getElementById("fit").innerHTML = s;
}