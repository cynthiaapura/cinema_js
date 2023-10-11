document.addEventListener("DOMContentLoaded", () => {
   const film = [{
      "titre": "Schindler's List",
      "date": "1993",
      "realisateur": "Steven Spielberg",
      "url": "https://www.senscritique.com/film/la_liste_de_schindler/422876",
      "cover": "./contenu/cover_schindlerlist.jpeg"
   }, {
      "titre": "OldBoy",
      "date": "2013",
      "realisateur": "Park Chan-Wook",
      "url": "https://www.senscritique.com/film/old_boy/444625",
      "cover": "./contenu/cover_oldboy.jpeg"
   }, {
      "titre": "Parasite",
      "date": "2019",
      "realisateur": "Bong Joon-Ho",
      "url": "https://www.senscritique.com/film/parasite/25357970",
      "cover": "./contenu/cover_parasite.jpeg"
   }];

   for (let index = 0; index < film.length; index++) {
      const titre = film[index];
      console.table(titre);
   }

   for (data of film) {
      console.log(` ${data.titre} ${data.date} ${data.realisateur} `);
   }

   const el_parent = document.getElementsByClassName("primary-collection")[0];
   const new_element = document.createElement("ul");

   el_parent.appendChild(new_element);

   for (data of film) {
      new_element.innerHTML += `
                              <li>
                                 <img src="${data.cover}" alt="cover">
                                 <figure style="font-weight:bold;color:black">
                                    <figcaption>
                                       <h2>${data.titre}</h2>
                                       <p>${data.date}</p>
                                       <p>${data.realisateur}</p>
                                       <a href = "${data.url}" target = "_blank"> Détails </a>
                                    </figcatption>
                                 </figure>
                              </li>`;
   }
   console.log(el_parent);
});