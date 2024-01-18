function show_password() {
    let pass = document.querySelector("#pass")

    if (pass.type == "password") {
        pass.type = "text"
        return false
    } else {
        pass.type = "password"
        return false
    }
}