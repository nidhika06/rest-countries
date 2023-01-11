const countriesElem=document.querySelector(".countries");
// console.log(countriesElem);
const dropElem=document.querySelector(".drop");
const region=document.querySelectorAll(".region");
console.log(region);
const regionName=document.getElementsByClassName("regionName")
console.log(regionName);
const search=document.querySelector(".searching");
const countryName=document.getElementsByClassName("countryName")
const toggle=document.querySelector(".toggle");
const card=document.getElementsByClassName("card");
console.log(card);
async function getcountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json();
    // console.log(typeof res);
    // console.log(res);
    // console.log(res[0].name.common);
    // console.log(res[0].flags.png)
    // console.log(res.value);
    res.forEach(element=>{
        showCountry(element);
    })
   
}
getcountry();
function showCountry(data){
    const country=document.createElement("div");
    country.innerHTML=` <div class="card  m-5" style="width: 13rem;"> 
    <div class="country-img" >
        <img src="${data.flags.png}"alt="" class="rounded-top " style="width: 13rem;">
    </div>
    
    <div class="card-body">
        <h5 class="pb-3 countryName">${data.name.common}</h5>
        <p><strong>Population</strong>${data.population}</p>
        <p>Region :<span class="regionName">${data.region}</span></p>
        <p><strong>Capital</strong>${data.capital}</p>
    </div>
  
    </div>`
    // console.log(card);
    countriesElem.appendChild(country);
    country.addEventListener("click",function(){
        showCountryDetail(data)
    })
}    
// console.log(country)



// filter 


region.forEach((ele) => {
    ele.addEventListener("click",function (){
       console.log(ele);
       Array.from(regionName).forEach((elem)=>{
    //    console.log(ele);
        if(elem.innerText.includes(ele.innerText)||ele.innertext=='All'){
            elem.parentElement.parentElement.parentElement.style.display='grid';
        }
        else{
            elem.parentElement.parentElement.parentElement.style.display='none';
        }
       })
    })
    // console.log(ele.innerHTML);

})


//    search
search.addEventListener("click",function(){
    // console.log(search.value);

    Array.from(countryName).forEach((elem)=>{
        //    console.log(ele);
            if(elem.innerText.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())){
                elem.parentElement.parentElement.parentElement.style.display='grid';
            }
            else{
                elem.parentElement.parentElement.parentElement.style.display='none';
            }
           })
})


// toggle//

toggle.addEventListener("click",function(){
    console.log("hello");
    document.body.classList.toggle("dark_theme");
    // card.classList.add("new");
})

////***********next page */



const countryModal=document.querySelector(".countryModal")
function showCountryDetail(data){
     countryModal.classList.toggle("show");
     const c=document.createElement("div");
     c.innerHTML=` <div class="row m-5 d-flex flex-column flex-lg-row ">
     <div class="mb-5 ">
         <button class="btn2 back">Back</button>
     </div>
    
     <div class="col container mr-5 mb-5">
         <div>
             <img src="${data.flags.png}" alt="" class="img1 img-fluid">
         </div>
        
     </div>
     <div class="col">
         <h1>${data.name}</h1>
         <div class="d-flex flex-column flex-md-row flex-lg-row">
             <div class="col1 mr-5">
                 <p><strong>Native Name</strong>${data.nativeName}</p>
                 <p>Population<span>${data.population}</span></p>
                 <p><strong>Region</strong>${data.region}</p>
                 <p><strong>Sub-region</strong>${data.subregion}</p>
             </div>
             <div class="col2">
                 <p><strong>Capital</strong>${data.capital}</p>
                 <p>Top Level Domain<span >${  data.topLevelDomain}</span></p>
                 <p><strong>Currencies</strong>${ data.currencies}</p>
                 <p><strong>Language</strong>${data.language}</p>
             </div>
         </div>
         
     </div>
 </div>`
 countryModal.appendChild(c);
 const back=document.querySelector(".back")
back.addEventListener("click",function(){
     countryModal.classList.toggle("show");

}) 
}




