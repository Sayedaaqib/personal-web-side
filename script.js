var dabade = document.getElementsByClassName("text-title");
var dabade2 = document.getElementsByClassName("tap");
function opentab(tabname) {

    for (tablink of dabade) {
        tablink.classList.remove("active")

    }
    for (taptap of dabade2) {
        taptap.classList.remove("tap-best")

    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("tap-best")

}
document.getElementById("sub").addEventListener("click", () => {
    let email = document.getElementById("email").value
    let naam = document.getElementById("Name").value





    
let password=localStorage.getItem("password")
    if (password==null) {
        let aaqib = []
        aaqib.push({
            Email: email,
            Name: naam,
        })
        alert("password saved")
        localStorage.setItem("password",JSON.stringify(aaqib))
    }

    else if (email == "maaqibjdp@gmail.com" && naam == "aaqib") {
        let aaqib = JSON.parse(localStorage.getItem("password"))
        aaqib.push({
            Email: email.value,
            Name: naam.value
        })
        alert("password saved")
        localStorage.setItem(JSON.stringify(aaqib))
    }
   else if (email==null && naam==null) {
    alert("fillings tha blanks")
   }
  
})




