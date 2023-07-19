
function sub(c,d) {
    var sub=c-d;
  
   // document.write(sub);
    console.log(sub);
    }


    function asking (country){
var country;//=prompt("enter a country name");
if(country==="Pakistan"){
    document.write("KARACHI");
}
else if(country==="Afghanistan"){
    document.write("Kabul");
}
else{
    document.write("not valid entry");
}
    }


     function checkAddress(fieldId) {
         if (document.getElementById(fieldId).value === "") {
         alert("Email address required.");
         }
         else(
           alert("form submitted !")
         )
         if(document.getElementById(fieldId).value === "Pakistan"){
            alert("your city is karachi !")
         }
         }

         function checkout(){
            var city_name;
            var check=document.getElementById("zip").value;
            switch(check){
                case "8084" :
                    city_name="Karhwan bhai ka city karachi maaon !";
                    break;
                case "6078" :
                    city_name="aby jaldi likh tere city ka naam panvel h";
                    break;
                default : 
                    city_name="invalid entry";
            }
            document.getElementById("city").value=city_name;
         }
        


         function paraexpands(){
            var par= "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
            document.getElementById("Slowloris").innerHTML=par;
        }

        function makeInvisible() {
            document.getElementById("ugly").className = "hidden";
            }

            function makebig(){
                document.getElementById("p1").className += " big";

            }

function webhistory(whereUserCameFrom){
    var whereUserCameFrom = document.referrer;
    console.log(whereUserCameFrom);
}


function reacted(){
    var windowSpecs = "'', '', 'width=420,height=380,left=200,top=100'";
 var faqPage = window.open(windowSpecs);
}

 function checkForPopBlocker() {
     var testPop = window.open("", "","width=100,height=100");
     if (testPop === null) {
    alert("Please disable your popup blocker.");
     }
     testPop.close();
     }

    function checkforlastnameanditscolor(){
        var targetfield=document.getElementById("lastnamefield");
        if(targetfield.value.length===0){
            alert("please enter a name to file the form !");
            targetfield.focus();
            targetfield.style.background="Yellow";
            return false;
        }
        else if(targetfield.value.length!==13 ){
            alert("please enter cnic under length of 14 digits !");
        }
        targetfield.style.background="White";
        document.write("Thankyou for filling out our form !");
    }


    function checkForSelection() {
         if (document.getElementById("states").selectedIndex === 0) {
         alert("Please select a state.");
         return false;
         }
         else {
            alert("selection done",states);
         }
         }


          function validateZIP() {
             var valueEntered = document.getElementById("zip").value;
             var numChars = valueEntered.length;
            if (numChars < 5) {
             alert("Please enter a 5-digit code.");
            return false;
            }
            for (var i = 0; i <= 4; i++) {
             var thisChar = parseInt(valueEntered[i]);
             if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
             return false;
             }
             }
             }

       
       function  checkbutton(eName){
        var button=document.getElementsByName(eName);
        for(var i=0;i<button.length;i++){
            if(button[i].checked){
                alert("button checked");
                return true;
            }
        }
        alert("please check a button !");
        return false;
       }

      // <body onLoad ="checkForPopBlocker();">


      function checkemail(){
        var checkillegaladdress=true;
        var checkemail=document.getElementById("efield").value;
        if(checkemail.indexof(" ") !==-1){
            checkillegaladdress = false;
        }
        if(checkemail.indexof("@") < 1 || checkemail.indexof("@") > checkemail.length - 5 ){
            checkillegaladdress = false;
        }
        if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
            checkillegaladdress = false;
 }
 if(checkillegaladdress===false){
    alert("Please enter email in correct format !");
    return false;

 }
 else {
alert("Email submitted !");
}

      }


  