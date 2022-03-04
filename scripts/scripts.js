
//Var declarations

const washBtn=document.getElementById("washCar")
const mowBtn=document.getElementById("mowLawn")
const pullBtn=document.getElementById("pullWeeds")
const sendBtn=document.getElementById("sendInvoice")

const renderItemsEl = document.getElementById("renderItems")


const washService =["Wash Car", 10, true]
const mowService=["Mow service",20, true]
const PullService=["Pull service",30, true]

washBtn.addEventListener("click", function(){

    renderItemsEl.innerHTML= washService[0] +washService[1]
    console.log("clicked")
})

function log (){
    console.log("hello")
}