document.getElementById("2").disabled = true;
document.getElementById("3").disabled = true;
document.getElementById("4").disabled = true;
let formInfoArray = [];
function form(){
    document.getElementById("Form").classList.remove("hidden")
}
function submitForm(){
    let name =document.getElementById("name").value;
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    if(name && userName && email){
        let obj = {
            Name: name,
            userName: userName,
            email: email,
        }
        formInfoArray.push(obj);
        document.getElementById("2").disabled = false;
        document.getElementById("1").disabled = true;
        alert("your Info Is Submitted Successfully! Click On The NExt Image To View Your Info.")
        document.getElementById("form").classList.add("hidden");

    }
    else{
        alert("Please fill all the fields.")
    }
}

