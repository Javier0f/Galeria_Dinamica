"use srtict";
const swichtContent = document.querySelector(".swicht-content")
const swicht = document.querySelector(".swicht")
const galeria = document.getElementById("galeria")
const btnArchivo = document.getElementById("btnArchivo")
let id = 0

swicht.addEventListener("click",()=>{
    swicht.classList.toggle("active")
    swichtContent.classList.toggle("active")
    document.body.classList.toggle("oscuro")
    btnArchivo.classList.toggle("oscuro2")
    galeria.classList.toggle("oscuro3")
})

btnArchivo.addEventListener("change",(e)=>{
    for(let i of e.target.files){
        if(i.type == "image/png" || i.type == "image/jpeg"){
            addfoto(i)
        }else {
            notImg()
        }
    }
})
const notImg = ()=>{
    let noimagen = document.createElement("h3")
    noimagen.textContent = "Archivo invalido!"
    noimagen.classList.add("noimagen")
    galeria.appendChild(noimagen)
}

const addfoto = (ar)=>{
    let read = new FileReader();
    read.readAsDataURL(ar)
    read.addEventListener("load",()=>{
        const img = document.createElement("img")
        img.src = read.result
        img.id = "a"+ id++
        img.classList.add("foto")
        galeria.appendChild(img)
        asigar(img)
        return img
    })
}


const asigar = (i)=>{
    setInterval(()=>{
        if(i.width < i.height){
            cambiarGrid(i.getAttribute("id"))
        }
        else{
            if(i.height > 180){
                ajustarAncho(i.getAttribute("id"))
            }
        }
    },2000)
}

const cambiarGrid = (id)=>{
    let foto = document.getElementById(`${id}`)
    foto.classList.add("estirar")
}

const ajustarAncho = (id)=>{
    let foto = document.getElementById(`${id}`)
    foto.classList.add("ajustarAncho")
}