const root=document.querySelector("#root");
//----------------bodyContainer--------------
const Containers=document.querySelector(".Container-2")

async function getCountriesDate(){
    try{

        const response=await fetch(`https://restcountries.com/v2/all`)
        const datas =await response.json();
        console.log(datas);
        
        datas.forEach(data => {
            showCountriesDetial(data)

            
        });

    }
    catch(err){
        console.log("Error throw from  getCountriesDate-() ");
    }
    

    

}
getCountriesDate();


function showCountriesDetial(item)
{
    const container=document.createElement("div");
    Containers.append(container)
    container.classList.add("container")
    container.innerHTML+=`<h2>${item.name}</h2>`
    container.innerHTML+=`<img src="${item.flag}"></img>`
    container.innerHTML+=`<h3>Capital : ${item.name}</h3>`
    
    container.innerHTML+=`<h3>Country code : ${item.cioc}</h3>`
    container.innerHTML+=`<h3> Region : ${item.region}</h3>`
    container.innerHTML+=`<h3>Lat,Long :${item.latlng}</h3>`



    

    
    
    

    
    // root.innerHTML+= `<p>${item.name}</p>` 
    
   
}