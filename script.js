// let iconclick = document.querySelector(".ri-menu-line");

// let navCenter = document.querySelector("nav .center");


// if(iconclick){
// iconclick.addEventListener("click",function(){
//     navCenter.classList.toggle("active");
// })    

// }else {
//     console.log("Element not found");
// }

let hoverEftect = document.querySelector(".one-experience");

hoverEftect.addEventListener("mouseenter",function(){
    hoverEftect.style.boxShadow = "2.4px 2.4px 3.2px #004643"
});

hoverEftect.addEventListener("mouseleave",function(){
     hover4Efect.style.boxShadow ="none";
    hoverEftect.style.boxShadow = " 0px 3px 8px rgba(191, 186, 186, 0.829)"
})


let hover2Efect = document.querySelector("#two");

hover2Efect.addEventListener("mouseenter",function(){
    hover2Efect.style.boxShadow = "2.4px 2.4px 3.2px #004643";
});

hover2Efect.addEventListener("mouseleave",function(){
     hover4Efect.style.boxShadow ="none";
    hover2Efect.style.boxShadow =" 0px 3px 8px rgba(191, 186, 186, 0.829)";
});


let hover3Efect = document.querySelector("#three");

hover3Efect.addEventListener("mouseenter",function(){
    hover3Efect.style.boxShadow = "2.4px 2.4px 3.2px #004643";
});

hover3Efect.addEventListener("mouseleave",function(){
     hover4Efect.style.boxShadow ="none";
    hover3Efect.style.boxShadow =" 0px 3px 8px rgba(191, 186, 186, 0.829)";
});

let hover4Efect = document.querySelector("#four");

hover4Efect.addEventListener("mouseenter",function(){
    hover4Efect.style.boxShadow = "2.4px 2.4px 3.2px #004643";
});

hover4Efect.addEventListener("mouseleave",function(){
      hover4Efect.style.boxShadow ="none";
    hover4Efect.style.boxShadow ="  0px 3px 8px rgba(191, 186, 186, 0.829)";
});