// In allegato trovate un layout di base e
//  un file js in cui è definito un array di oggetti 
//  che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per
//  stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di 
// esempio presente nell’html, stampiamo
//  dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizziamo gli input presenti nella pagina 
// per permettere all’utente di aggiungere nuovi
//  membri del team: cliccando sul pulsante “add”
//   viene creato un nuovo oggetto, il quale viene 
//   inserito nell’array iniziale, e viene stampata 
//   una nuova card con tutte le informazioni inserite
//    dall’utente.

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


//richiamo il container delle card 

let container_card = document.querySelector('.team-container');

console.log(container_card);

//creo 6 div "team card" da inserire nel container card
  for (let key in team) {

    //creo i div che contengono le team card
    let team_card = document.createElement("div");

    //creo i div che contengono le immagini del team
    let card_image = document.createElement("div");

    // creo gli elementi "immagini"
    let img = document.createElement("img");

    //creo il div card card text 
    let card_text = document.createElement("div");

    //creo il source delle img
    img.src = team[key].image;

    //metto le team card all'interno del container
    container_card.append(team_card);

    //metto le card image all'interno delle team card
    team_card.append(card_image);

    //inserisco le immagini all'interno dei div card image
    card_image.append(img);

    //inserisco i div card text nelle card
    team_card.append(card_text);

    //inserisco titolo e paragrafo all'interno di card text
    card_text.innerHTML = `<h3> ${team[key].name} </h3>`;
    card_text.append(team[key].role);

    //aggiungo la classe team card ai div team card
    team_card.classList.add("team-card");

    //aggiungo la classe card image ai div card image
    card_image.classList.add("card-image");

    //aggiungo la classe card text ai div card text
    card_text.classList.add("card-text");
   
    console.log(team_card);
   
  }

  //bonus

   //richiamo il bottone
   add_button = document.getElementById('addMemberButton');
   //aggiunto l'evento al btn
    add_button.addEventListener("click", function(){
    let nome = document.getElementById('name').value;
    console.log(nome);
    let role_v = document.getElementById('role').value;
    console.log(role_v);
      let newcard = {
      name : nome,
      role : role_v,
      image: "ciao"
    }
    team.push(newcard);
    
    console.log(team);
  });


   

