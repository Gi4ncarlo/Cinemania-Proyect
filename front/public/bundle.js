(()=>{var e={496:(e,t,n)=>{const r=n(450),a=document.querySelector(".peliculas");e.exports=e=>{e.forEach((e=>{const t=document.createElement("article");t.classList.add("tarjeta");const n=document.createElement("img");n.classList.add("tarjeta-imagen");const r=document.createElement("div");r.classList.add("tarjeta-info");const i=document.createElement("h2"),o=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p"),{title:p,year:m,director:u,duration:g,genre:h,rate:E,poster:L}=e;i.innerHTML=p,o.innerHTML=`<strong>Año :</strong> ${m}`,d.innerHTML=`<strong>Director :</strong> ${u}`,s.innerHTML=`<strong>Duración :</strong> ${g}`,c.innerHTML=`<strong>Género :</strong> ${h}`,l.innerHTML=`<strong>Puntuación :</strong> ${E}`,n.src=L,n.alt=`Poster de ${p}`,r.appendChild(i),r.appendChild(o),r.appendChild(d),r.appendChild(s),r.appendChild(c),r.appendChild(l),t.appendChild(n),t.appendChild(r),i.classList.add("tarjeta-titulo"),c.classList.add("tarjeta-genero"),a.appendChild(t)})),(e=>{e.forEach((e=>{const t=document.createElement("article");t.classList.add("tarjeta");const n=document.createElement("img");n.classList.add("tarjeta-imagen");const r=document.createElement("div");r.classList.add("tarjeta-info");const i=document.createElement("h2"),o=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p"),{title:p,year:m,director:u,duration:g,genre:h,rate:E,poster:L}=e;i.innerHTML=p,o.innerHTML=`<strong>Año :</strong> ${m}`,d.innerHTML=`<strong>Director :</strong> ${u}`,s.innerHTML=`<strong>Duración :</strong> ${g}`,c.innerHTML=`<strong>Género :</strong> ${h}`,l.innerHTML=`<strong>Puntuación :</strong> ${E}`,n.src=L,n.alt=`Poster de ${p}`,r.appendChild(i),r.appendChild(o),r.appendChild(d),r.appendChild(s),r.appendChild(c),r.appendChild(l),t.appendChild(n),t.appendChild(r),i.classList.add("tarjeta-titulo"),c.classList.add("tarjeta-genero"),a.appendChild(t)}))})(r)}},450:e=>{e.exports=[{title:"Godzilla y Kong: El nuevo imperio",year:2024,director:"Adam Wingard",duration:"1h 55min",genre:["Action","Fantasy"],rate:9.5,poster:"https://img.asmedia.epimg.net/resizer/v2/R2QZNYBIYBETBHAJGBBVFNS5WM.jpg?auth=d889ebd70a610dc819c809e72ce739142564fee544f0a1621e99ab365b9229e4&width=1472&height=1104&smart=true"},{title:"Megamente contra el Sindicato de la Perdición",year:2024,director:"Eric Fogel",duration:"1h 25min",genre:["Comedia","Fantasy","Cine SuperHeroe"],rate:7.5,poster:"https://br.web.img3.acsta.net/img/53/93/5393cbc0b035346e06429049c8351db5.jpg"},{title:"El reino del planeta de los simios",year:2024,director:"Wes Ball",duration:"2h 25min",genre:["Ciencia ficción","Aventuras","Simios","Futuro "],rate:9.9,poster:"https://img.rtve.es/imagenes/cartel-reino-del-planeta-simios/01715175743713.jpg"},{title:"Top Gun Maverick",year:2022,director:"Joseph Kosinski",duration:"2h 11min",genre:["Acción","Ejército","Aviones","Secuela"],rate:9.7,poster:"https://musicart.xboxlive.com/7/8fa06100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"}]}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const e=n(496);$.get("https://students-api.up.railway.app/movies",((t,n)=>{e(t)}))})()})();