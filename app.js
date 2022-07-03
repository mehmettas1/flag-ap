//*=========================================================
//*                     FLAG-APP
//*=========================================================

const select = document.getElementById("select");
const dive = document.getElementById("dive");
const option = document.querySelectorAll("option");

bringCountry();
async function bringCountry() {
  const url = `https://restcountries.com/v3.1/all `;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      fonkerror(`Something went wrong:${res.status}`);
      throw new Error();
    }
    const data = await res.json();
    let countryList = [];
    data.forEach((user) => {
      select.innerHTML += `<option value="${user.name.common}">${user.name.common}</option>`;
    });
 
  } catch (error) {
    console.log(error);
  }
}
   select.addEventListener("change", (e) => {
      console.log(e.target.value);
      send(e.target.value);
    });



function fonkerror(msg) {
  console.log(msg);
}

const send = (country) => {


   const url = `https://restcountries.com/v2/name/${country}`;

 
    const res = fetch(url).then((res)=> res.json())
    .then((country)=>{
      console.log(country[0]);
      
      const {
        capital,
        name,
        region,
     languages,
        flags: { svg },
        currencies,
      } = country[0];
      console.log(name,capital,region,svg,currencies,languages);
  dive.innerHTML = `      
      <img src="${svg}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name} </h5>
        <p class="card-text">${capital}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${region}</li>
        <li class="list-group-item">${languages[0].name}</li>
        <li class="list-group-item">${Object.values(currencies)[0].name},${
    Object.values(currencies)[0].symbol
  }</li>
      </ul>`;


    })


 
    

};
