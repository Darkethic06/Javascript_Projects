let str = ""
let buttons = Array.from(document.querySelectorAll(".btn"))

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str)
            document.querySelector('input').value = str

        } else if (e.target.innerHTML == "CL") {
            document.querySelector('input').value = ""
            str = ""

        } else if (e.target.innerHTML == "DEL") {
           str =  str.slice(0,str.length-1)
            document.querySelector('input').value = str

        }
        else {
            console.log(e.target.innerHTML)
            str = str + e.target.innerHTML
            document.querySelector('input').value = str

        }

    })
})


