function validate() {
    var u = document.getElementsByName("username").value;
    var n = document.getElementsByName("name").value;
    var p1 = document.getElementsByName("password").value;
    var p2 = document.getElementsByName("repassword").value;
    var e = document.getElementsByName("email").value;
    if (!e.match(/\S/)) {
        window.alert("Email không được để trống!");
    }
    var ph = document.getElementsByName("phonenumber").value;
    var testphone = /^\([0-9]{4}\)\-[0-9]{3}\-[0-9]{3}$/;  //phone = (xxxx)-xxx-xxx
    if (!ph.match(/\S/)) {
        alert("Điện thoại không được để trống!");
    } else if (!testphone.test(phone))
        alert("Nhập đúng điện thoại (xxxx)-xxx-xxx");
    var g = document.getElementsByName("gender");
    for (var i = 0, length = g.length; i < length; i++) {
        if (g[i].checked) {
            value.g = g[i].value;
            break;
        }
    }
}
