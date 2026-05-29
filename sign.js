function signupUser() {
    let name = document.getElementById("su_name").value;
    let user = document.getElementById("su_user").value;
    let pass = document.getElementById("su_pass").value;
    let num = document.getElementById("su_num").value;
    if (name === "" || user === "" || pass === "") {
        document.getElementById("signupMsg").innerText = "❌ اطلاعات را کامل کنید";
        return;
    }

    // ذخیره اطلاعات (ساده)
    localStorage.setItem("signedUp", "true");
    localStorage.setItem("su_name", name);
    localStorage.setItem("su_user", user);

    window.location.href = "index.html";
}