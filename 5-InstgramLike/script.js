let heart = document.getElementById("heart")
let image = document.getElementById('image')
let count =0 
heart.addEventListener('click', liked)
image.addEventListener('dblclick', liked)

function liked() {
    let clsArr = heart.classList
    if (clsArr.contains('bx-heart')) {
        clsArr.remove('bx-heart')
        clsArr.add('bxs-heart')
        count++
        document.getElementById('like').innerHTML = count + ' Likes'
        console.log(count)
    }else{
        clsArr.remove('bxs-heart')
        clsArr.add('bx-heart')
    }
}