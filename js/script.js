const team = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "mbianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "marrossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "roblorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danamet@team.com",
      img: "img/female3.png"
    },
    {
        name: "Daniele Battistelli",
        role: "CEO",
        email: "ceo@team.com",
        img: "img/ceo.png"
      }
  ];

   

  document.addEventListener('DOMContentLoaded', () => {
    const teamContainer = document.getElementById('teamContainer');
    const teamList = document.getElementById('teamList');
    const addMemberForm = document.getElementById('addMemberForm');

    // Funzione per creare card
    function createCard(member) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="./img/assets/${member.img}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <p class="card-text"><small>${member.email}</small></p>
            </div>
        `;
        return card;
    }

    // Funzione per creare lista
    function createListItem(member) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${member.name} - ${member.role} - ${member.email}`;
        return listItem;
    }

    // Funzione per visualizzare il team
    function displayTeam() {
        teamContainer.innerHTML = '';
        teamList.innerHTML = '';
        for (let i = 0; i < team.length; i++) {
            const card = createCard(team[i]);
            teamContainer.appendChild(card);

            const listItem = createListItem(team[i]);
            teamList.appendChild(listItem);
        }
    }

    // Funzione per rimuovere un membro 
    window.removeMember = function(index) 
    { team.splice(index, 1); displayTeam(); };

    // Aggiungi nuovo membro
    addMemberForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newMember = {
            name: document.getElementById('name').value,
            role: document.getElementById('role').value,
            email: document.getElementById('email').value,
            img: document.getElementById('img').value
        };
        team.push(newMember);
        displayTeam();
        addMemberForm.reset();
    });

    // Visualizza il team all'avvio
    displayTeam();
});
