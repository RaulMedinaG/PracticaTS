import './style.css';
import { Actividad } from './interfaces/actividad';

let actividad: Actividad;

let contenedor_app: HTMLElement | null = document.getElementById('app');

let p_nombre: HTMLElement = document.createElement('p');
let p_accesibilidad: HTMLElement = document.createElement('p');
let p_participantes: HTMLElement = document.createElement('p');
let p_precio: HTMLElement = document.createElement('p');

let div_boton: HTMLElement = document.createElement('div');

let boton: HTMLElement = document.createElement('button');

// let imagen: HTMLElement = document.createElement('img');

let select_participantes: HTMLElement | null = document.getElementById('participantes');
let select_accesibilidad: HTMLElement | null = document.getElementById('accesibilidad');
let select_precio: HTMLElement | null = document.getElementById('precio');

let url: string = '';

for (let index = 0; index <= 5; index++) {
  let option = document.createElement('option');
  if (index==0) {
    option.value = '';
    option.textContent = '';
  } else {
    option.value = index.toString();
    option.textContent = index.toString();
  }
  
  select_participantes?.appendChild(option);
}

for (let index = 0; index <= 10; index++) {
  let option = document.createElement('option');

  if (index==0) {
    option.value = '';
    option.textContent = '';
  } else if (index==10) {
    option.value = '1';
    option.textContent = '1';
  } else {
    option.value = '0.' + index.toString();
    option.textContent = '0.' + index.toString();
  }

  select_accesibilidad?.appendChild(option);
}

for (let index = 0; index <= 9; index++) {
  let option = document.createElement('option');
  if (index==0) {
    option.value = '';
    option.textContent = '';
  } else {
    option.value = '0.' + index.toString();
    option.textContent = '0.' + index.toString();
  }
  select_precio?.appendChild(option);
}

function generarActividad():Actividad {
  if (select_participantes?.value == '' && select_accesibilidad?.value == '' && select_precio?.value == ''){
    
  fetch('https://www.boredapi.com/api/activity?').then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no se dio...');
    }
    return response.json();
  }).then(data => {

    actividad = data;

    p_nombre.classList.add('text-2xl' , 'font-semibold', 'text-gray-800', 'text-center');
    p_accesibilidad.classList.add('text-gray-600', 'mt-2', 'text-center');
    p_participantes.classList.add('text-gray-600', 'mt-2', 'text-center');
    p_precio.classList.add('text-gray-600', 'mt-2', 'text-center');

    div_boton.classList.add('text-center');
    boton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'py-2', 'px-4', 'rounded', 'mt-3');

    p_nombre.textContent = actividad.activity;
    p_accesibilidad.textContent = 'Accesibilidad:' + actividad.accessibility.toString();
    p_participantes.textContent = 'Nº de Participantes:' + actividad.participants.toString();
    p_precio.textContent = 'Precio:' + actividad.price.toString();

    boton.textContent = 'Nueva actividad';

    contenedor_app?.appendChild(p_nombre);
    contenedor_app?.appendChild(p_accesibilidad);
    contenedor_app?.appendChild(p_participantes);
    contenedor_app?.appendChild(p_precio);

    div_boton?.appendChild(boton);
    contenedor_app?.appendChild(div_boton);

    console.log(actividad);
    

  })
    .catch(error => {
      console.error('error.-..', error);
    });

    // let src = await generaImage(`https://api.pexels.com/v1/search?${actividad.type}`);

    // imagen.setAttribute('src', src);

  }
  
  if (select_participantes?.value != '') {
      url = `https://www.boredapi.com/api/activity?participants=${select_participantes?.value}`;
      
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no se dio...');
        }
        return response.json();
      }).then(data => {

        actividad = data;

        p_nombre.textContent = actividad.activity;
        p_accesibilidad.textContent = 'Accesibilidad:' + actividad.accessibility.toString();
        p_participantes.textContent = 'Nº de Participantes:' + actividad.participants.toString();
        p_precio.textContent = 'Precio:' + actividad.price.toString();

      })

    //   let src = await generaImage(`https://api.pexels.com/v1/search?${actividad.type}`);

    // imagen.setAttribute('src', src);
      
    }

    if (select_accesibilidad?.value != '') {
      url = `https://www.boredapi.com/api/activity?accessibility=${select_accesibilidad?.value}`;
      
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no se dio...');
        }
        return response.json();
      }).then(data => {

        actividad = data;

        p_nombre.textContent = actividad.activity;
        p_accesibilidad.textContent = 'Accesibilidad:' + actividad.accessibility.toString();
        p_participantes.textContent = 'Nº de Participantes:' + actividad.participants.toString();
        p_precio.textContent = 'Precio:' + actividad.price.toString();

      })

      // let src = await generaImage(`https://api.pexels.com/v1/search?${actividad.type}`);

      // imagen.setAttribute('src', src);
      
    }

    if (select_precio?.value != '') {
      url = `https://www.boredapi.com/api/activity?price=${select_precio?.value}`;
      
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no se dio...');
        }
        return response.json();
      }).then(data => {

        actividad = data;

        p_nombre.textContent = actividad.activity;
        p_accesibilidad.textContent = 'Accesibilidad:' + actividad.accessibility.toString();
        p_participantes.textContent = 'Nº de Participantes:' + actividad.participants.toString();
        p_precio.textContent = 'Precio:' + actividad.price.toString();
        
      })

      // let src = await generaImage(`https://api.pexels.com/v1/search?${actividad.type}`);

      // imagen.setAttribute('src', src);
      
    }

  return actividad;
}

generarActividad();

boton.addEventListener('click', generarActividad);

// async function generaImage(url: string){

//   const response = await fetch(url, {
//       method: "GET",
//       headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           "Authorization": "kO8BKKcgDmPm94UEJ8MDcXGev7n4O1nndEOBZDrqaWFuKGhUoKagzAKk"
//       }
//   });
//   const json = await response.json();
//   console.log(json.photos[0].src.original);
  
//   return (json.photos[0].src.original);
  
// };