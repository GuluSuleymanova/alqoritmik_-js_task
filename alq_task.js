let input = document.getElementById("input");
let button = document.getElementById('btn');



button.addEventListener('click', function reqemal() {
  let name =input.value;
  console.log(name);
  
   let herfcemi=0;

   for (let i = 0; i < name.length; i++) {
    herfcemi+=name.charCodeAt(i);
   }

 let reqem= (herfcemi%100)+1;

 alert(reqem);

}
)