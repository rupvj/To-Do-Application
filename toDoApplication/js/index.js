function chkLogin(){

    let username = txtEmail.value;
    let password = txtPassword.value;

    if(username !="" && password != ""){

        if(username=="rup@gmail.com" && password=="1234"){

            window.location.replace("home.html");
    
        }else{

            $("#errormassege").prop("hidden", false);
            $("#errormassege").html("Please enter correct username and password ..!");
        }
    }else{
        $("#errormassege").prop("hidden", false);
        $("#errormassege").html("Please enter all fields..!");
    }
    
}