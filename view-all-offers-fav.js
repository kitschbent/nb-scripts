javascript: (async function(){let e=[],o=!0,t=0;for(;o;){const n=await fetch("https://www.namebase.io/api/v0/offers/received?offset="+15*t+++"&sortKey=createdAt&sortDirection=desc",{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET",mode:"cors"}).then(e=>e.json());e=e.concat(n.domains),0===n.domains.length&&(o=!1)}for(let o of e.filter(e=>e.isUnseen))await fetch("https://www.namebase.io/api/v0/offers/view",{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:'{"domainOwnerId":"'+o.domainOwnerId+'"}',method:"POST",mode:"cors"});alert("view-all-offers done")})()