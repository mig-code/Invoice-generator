
//Var declarations

const washBtn=document.getElementById("washCar")
const mowBtn=document.getElementById("mowLawn")
const pullBtn=document.getElementById("pullWeeds")
const sendBtn=document.getElementById("sendInvoiceButton")

const renderItemsEl = document.getElementById("renderItems")

let totalPriceEl= document.getElementById("totalPrice")
let totalAmount =0
totalPriceEl.innerHTML=totalAmount + " $"





//SERVICES VARIABLES
let washService =["Wash Car", 10]
let mowService=["Mow Lawn ",20]
let pullService=["Pull Weed",30]

//Var for check if a service is already selected

let notSelectedWash=true
let notSelecteMow=true
let notSelectedPull=true

let arrayOfServices=[]

washBtn.addEventListener("click", function(){

    if(notSelectedWash){
        arrayOfServices.push(washService)
        
        renderServices()
        renderPrice()
    }
    notSelectedWash=false
})

mowBtn.addEventListener("click",function(){
    if(notSelecteMow){
        arrayOfServices.push(mowService)
        renderServices()
        renderPrice()
    }
    notSelecteMow=false;

})

pullBtn.addEventListener("click",function(){
   
   if(notSelectedPull){
        arrayOfServices.push(pullService)
       renderServices()
       renderPrice()
   }
   notSelectedPull=false;
})


//FUNCTION TO SEND INVOICE

sendBtn.addEventListener("click",function(){
    if(totalAmount!=0){
        arrayOfServices=[]
        
        renderServices()
        renderPrice()
        notSelectedWash=true
        notSelecteMow=true
        notSelectedPull=true
    
        renderItemsEl.innerHTML="The invoice has been sent"
    }
})
//FUNCTION TO RENDER SERVICES 

function renderServices(){
    renderItemsEl.innerHTML=""

    for(i=0;i<arrayOfServices.length;i++){
        renderItemsEl.innerHTML+= `<p>${arrayOfServices[i][0]}<span class="text-align-right"> ${arrayOfServices[i][1]} $</span><p>`
    }
}


function renderPrice(){
    totalAmount=0

    for(i=0;i<arrayOfServices.length;i++){
       
        totalAmount+=arrayOfServices[i][1]
    }
    totalPriceEl.innerHTML=totalAmount+" $"
}



    


