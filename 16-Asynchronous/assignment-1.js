
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
            <img class="country__img" src=${data.flag}
    }/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(2)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
              <p class="country__row"><span>💰</span>(${
                data.currencies[0].code
              }) ${data.currencies[0].name}</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const imageContainer = document.querySelector('.images');

// const createImage = imgPath => {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const wait = seconds => {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {

  try {
    
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords

    console.log('Lat: ', lat, 'Lng: ', lng);
  
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)

    if(!resGeo.ok) throw new Error('Country not found');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);
  
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );

    if(!res.ok) throw new Error('Problem getting Country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.countryName}`
  } catch (error) {
    console.log(`Error: ${error} 💥`);
    renderError(`Something went wrong 💥 ${error.message}`);

    //?reject promise from async function
    throw error
  }
};



//  const result =  whereAmI();

// console.log(result)

(async function(){
  try {
   const city = await whereAmI();
   console.log(`2: ${city}`);
  } catch (error) {
    console.log(`2: ${error.message} 💥`);
  }

  console.log('3: Finished getting location');
})()