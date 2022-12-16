let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    // console.log("ok")

    let arr = "abcdefghijklmnopqrstyvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ1234567890!@#$%^&*(){}.><?/-+[]"

    let length = 10

    let pass = ""

    for (let i = 1; i <= 10; i++) {
        let rand = Math.round(Math.random() * arr.length)
        console.log(rand)
        pass += arr.substring(rand, rand + 1);
    }
    // showPass = pass;
    document.getElementById('pass').value = pass

    // console.log(pass)
})



