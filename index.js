let vehicle=document.querySelectorAll('#btn');

for(let i=0;i<vehicle.length;i++){
    vehicle[i].addEventListener('click',()=>{
      location.href="vehicle.html"
    })
}