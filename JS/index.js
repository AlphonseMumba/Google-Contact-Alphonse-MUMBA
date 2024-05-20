//Tableau pour stocker les contacts
let contactsList = [];

let mainElement = document.querySelector('.mainIndex');
let listContacts = document.createElement('div');
listContacts.classList.add('listContact');

let tableauContacts = document.createElement('table');
tableauContacts.classList.add('tableauContacts');

let tr1 = document.createElement('tr');
tr1.classList.add('titleTr');

let title = document.createElement('th');
let email = document.createElement('th');
let number = document.createElement('th');
let fonction = document.createElement('th');
let libelle = document.createElement('th');

title.textContent = 'Title';
email.textContent = 'E-mail';
number.textContent = 'Number';
fonction.textContent = 'Fonction et Entreprise';
libelle.textContent = 'Libellé';

tr1.appendChild(title);
tr1.appendChild(email);
tr1.appendChild(number);
tr1.appendChild(fonction);
tr1.appendChild(libelle);

tableauContacts.appendChild(tr1);

let titleContact = document.createElement('div');
titleContact.classList.add('titleContact');

let titleContainerH1 = document.createElement('h2');
titleContainerH1.classList.add('titleContainerH1');
titleContainerH1.textContent = 'Contacts';

let counterContact = 0;
let numberContacts = document.createElement('p');
numberContacts.classList.add('numberContacts');

if (contactsList.length === 0) {
  counterContact = 0;
  numberContacts.textContent = counterContact;
} else {
  counterContact = contactsList.length;
  numberContacts.textContent = counterContact;
}

titleContact.appendChild(titleContainerH1)
titleContact.appendChild(numberContacts);

let numberContactSide = document.querySelector('.numberContactSide');
numberContactSide.textContent = counterContact;

listContacts.appendChild(titleContact);
listContacts.appendChild(tableauContacts);

mainElement.appendChild(listContacts);

let btnNewContact = document.querySelector('.newContact');
btnNewContact.addEventListener('click', function() {
  let mainElement = document.querySelector('.mainIndex');
  let existingForm = mainElement.querySelector('.createContact');
  if (existingForm) {
    let listContactDiv = mainElement.querySelector('.listContact');
    if (listContactDiv) {
      listContactDiv.style.display = 'none';
    }
    existingForm.style.display = 'block';
  } else {
    let listContactDiv = mainElement.querySelector('.listContact');
    if (listContactDiv) {
      listContactDiv.style.display = 'none';
    }
    createContactForm();
  }
});

// Écouteur d'événement sur le bouton "showContact"
let btnShowContacts = document.querySelector('.showContact');
btnShowContacts.addEventListener('click', function showContacts() {
  let mainElement = document.querySelector('.mainIndex');
  let existingListContact = document.querySelector('.listContact');
  if (existingListContact){
    let hideCreateContact = document.querySelector('.createContact');
    if (hideCreateContact) {
      hideCreateContact.style.display = 'none';
    }
    existingListContact.style.display = 'block';
  }else{
    let hideCreateContact = document.querySelector('.createContact');
    if (hideCreateContact) {
      hideCreateContact.style.display = 'none';
    }
    mainElement.appendChild(listContacts);
  }
});

function createContactForm() {
  let existingForm = document.querySelector('.createContact');
  if (existingForm) {
    return; // Arrêter l'exécution de la fonction
  }

  let createContact = document.createElement('div');
  createContact.classList.add('createContact');

  let firstFormDiv = document.createElement('div');
  firstFormDiv.classList.add('firstFormDiv');

  let showListContactBtn = document.createElement('button');
  showListContactBtn.classList.add('showListContact');
  showListContactBtn.id = 'return';
  let showListContactBtnImg = document.createElement('img');
  showListContactBtnImg.classList.add('showListContactBtnImg');
  showListContactBtnImg.src = './icon/bi--arrow-return-left.png'

  showListContactBtn.appendChild(showListContactBtnImg);

  let saveContactBtn = document.createElement('button');
  saveContactBtn.classList.add('btnSaveContact');
  saveContactBtn.textContent = 'Enregistrer les contacts';

  firstFormDiv.appendChild(showListContactBtn);
  firstFormDiv.appendChild(saveContactBtn);

  let secondFormDiv = document.createElement('div');
  secondFormDiv.classList.add('secondFormDiv');

  let googleContactImg = document.createElement('img');
  googleContactImg.src = './icon/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png';
  googleContactImg.alt = 'Google Contact Image';

  secondFormDiv.appendChild(googleContactImg);

  let inputElementContact = document.createElement('div');
  inputElementContact.classList.add('inputElementContact');

  let titleDiv = document.createElement('div');
  titleDiv.classList.add('title');

  let firstNameLabel = document.createElement('label');
  firstNameLabel.setAttribute('for', 'firstNameInput');
  let firstNameLabelContainer = document.createElement('img')
  firstNameLabelContainer.src = './icon/arcticons--contacts-alt.png';
  firstNameLabelContainer.id = 'firstNameLabelContainer';

  firstNameLabel.appendChild(firstNameLabelContainer);

  let br = document.createElement('br');

  let firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.id = 'firstNameInput';

  let nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'nameInput');
  let nameLabelContainer = document.createElement('img')
  nameLabelContainer.src = './icon/arcticons--contacts-alt.png';
  nameLabelContainer.id = 'nameLabelContainer';

  nameLabel.appendChild(nameLabelContainer);

  let nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'nameInput';

  titleDiv.appendChild(firstNameLabel);
  titleDiv.appendChild(firstNameInput);
  titleDiv.appendChild(br);
  titleDiv.appendChild(nameLabel);
  titleDiv.appendChild(nameInput);

  let emailDiv = document.createElement('div');
  emailDiv.classList.add('email');

  let emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'emailInput');
  let emailLabelContainer = document.createElement('img');
  emailLabelContainer.src = './icon/ant-design--mail-outlined.png';
  emailLabelContainer.id = 'emailLabelContainer';

  emailLabel.appendChild(emailLabelContainer);

  let emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'emailInput';

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  let numberDiv = document.createElement('div');
  numberDiv.classList.add('number');

  let numberLabel = document.createElement('label');
  numberLabel.setAttribute('for', 'numberInput');
  let numberLabelContainer = document.createElement('img')
  numberLabelContainer.src = './icon/ic--baseline-phone.png';
  numberLabelContainer.id = 'numberLabelContainer';

  numberLabel.appendChild(numberLabelContainer);

  let numberInput = document.createElement('input');
  numberInput.type = 'tel';
  numberInput.id = 'numberInput';

  numberDiv.appendChild(numberLabel);
  numberDiv.appendChild(numberInput);

  let fonctionDiv = document.createElement('div');
  fonctionDiv.classList.add('fonction');

  let enterpriseLabel = document.createElement('label');
  enterpriseLabel.setAttribute('for', 'enterpriseInput');
  let enterpriseLabelContainer = document.createElement('img')
  enterpriseLabelContainer.src = './icon/mdi--building.png';
  enterpriseLabelContainer.id = 'enterpriseLabelContainer';

  enterpriseLabel.appendChild(enterpriseLabelContainer);

  let enterpriseInput = document.createElement('input');
  enterpriseInput.type = 'text';
  enterpriseInput.id = 'enterpriseInput';

  let br2 = document.createElement('br');

  let fonctionLabel = document.createElement('label');
  fonctionLabel.setAttribute('for', 'fonctionInput');
  let fonctionLabelContainer = document.createElement('img')
  fonctionLabelContainer.src = './icon/mdi--building.png';
  fonctionLabelContainer.id = 'fonctionLabelContainer';

  fonctionLabel.appendChild(fonctionLabelContainer);

  let fonctionInput = document.createElement('input');
  fonctionInput.type = 'text';
  fonctionInput.id = 'fonctionInput';

  fonctionDiv.appendChild(enterpriseLabel);
  fonctionDiv.appendChild(enterpriseInput);
  fonctionDiv.appendChild(br2);
  fonctionDiv.appendChild(fonctionLabel);
  fonctionDiv.appendChild(fonctionInput);

  let libelleDiv = document.createElement('div');
  libelleDiv.classList.add('libelle');

  let btnAddLibelle = document.createElement('button');
  btnAddLibelle.classList.add('btnAddLibelle');
  btnAddLibelle.textContent = '+';
  btnAddLibelle.addEventListener('click', function(){
    let libelleListDiv = document.createElement('div');
    libelleListDiv.classList.add('libelleListDiv');

    let listLibelleContainer = ['Bureau', 'Famille', 'Amis'];
    console.log(listLibelleContainer);

    let label1 = document.createElement('label');
    label1.textContent = listLibelleContainer[0];

    let checkbox1 = document.createElement('input');
    checkbox1.classList.add('checkBoxLibelle');
    checkbox1.type = 'checkbox';
    checkbox1.value = 'bureau';

    let label2 = document.createElement('label');
    label2.textContent = listLibelleContainer[1];

    let checkbox2 = document.createElement('input');
    checkbox2.classList.add('checkBoxLibelle');
    checkbox2.type = 'checkbox';
    checkbox2.value = 'famille';

    let label3 = document.createElement('label');
    label3.textContent = listLibelleContainer[2];

    let checkbox3 = document.createElement('input');
    checkbox3.classList.add('checkBoxLibelle');
    checkbox3.type = 'checkbox';
    checkbox3.value = 'amis';

    libelleListDiv.appendChild(label1);
    libelleListDiv.appendChild(checkbox1);
    libelleListDiv.appendChild(label2);
    libelleListDiv.appendChild(checkbox2);
    libelleListDiv.appendChild(label3);
    libelleListDiv.appendChild(checkbox3);

    let libelleDiv = document.querySelector('.libelle');
    libelleDiv.appendChild(libelleListDiv);
  });

  let libelleInput = document.createElement('input');
  libelleInput.type = 'text';
  libelleInput.id = 'libelleInput';

  libelleDiv.appendChild(btnAddLibelle);
  libelleDiv.appendChild(libelleInput);

  // Ajout des div à inputElementContact
  inputElementContact.appendChild(titleDiv);
  inputElementContact.appendChild(emailDiv);
  inputElementContact.appendChild(numberDiv);
  inputElementContact.appendChild(fonctionDiv);
  inputElementContact.appendChild(libelleDiv);

  // Ajout des div à la structure principale
  createContact.appendChild(firstFormDiv);
  createContact.appendChild(secondFormDiv);
  createContact.appendChild(inputElementContact);

  // Ajout de la structure au DOM
  let mainElement = document.querySelector('.mainIndex');
  mainElement.appendChild(createContact);

  let btnSaveContact = document.querySelector('.btnSaveContact');
  btnSaveContact.addEventListener('click', function () {
    // Recuperer les inputs du form createContact
    let firstName = document.querySelector('#firstNameInput');
    let name = document.querySelector('#nameInput');
    let email = document.querySelector('#emailInput');
    let number = document.querySelector('#numberInput');
    let enterprise = document.querySelector('#enterpriseInput');
    let fonction = document.querySelector('#fonctionInput');
    let libelle = document.querySelector('#libelleInput');

    // Validation des inputs 
    let newContactRow = {
      title: firstName.value + ' ' + name.value,
      email: email.value,
      number: number.value,
      fonction: enterprise.value + ' ' + fonction.value,
      libelle: libelle.value
    }; console.log(newContactRow);

    contactsList.push(newContactRow);
    // console.log(contactsList);

    let tr2 = document.createElement('tr');
    tr2.classList.add('tr2');

    // Création de cinq nouveaux éléments 'td' pour chaque contact (nom, email, numéro, fonction, libellé)
    let titleTd = document.createElement('td');
    titleTd.textContent = newContactRow.title;

    let emailTd = document.createElement('td');
    emailTd.textContent = newContactRow.email;

    let numberTd = document.createElement('td');
    numberTd.textContent = newContactRow.number;

    let fonctionTd = document.createElement('td');
    fonctionTd.textContent = newContactRow.fonction;

    let libelleTd = document.createElement('td');
    libelleTd.textContent = newContactRow.libelle;

    let modifierTd = document.createElement('img');
    modifierTd.classList.add('modify');
    modifierTd.src = './icon/uil--pen.png';

    let supprimerTd = document.createElement('img');
    supprimerTd.classList.add('remove');
    supprimerTd.src = './icon/material-symbols--delete-outline.png';

    // let checkBoxTd = document.createElement('input');
    // checkBoxTd.type = 'checkBox';
    // checkBoxTd.id = 'checkBox';
    // checkBoxTd.name = 'checkBox';
    // checkBoxTd.value = '1';

    tr2.appendChild(titleTd);
    tr2.appendChild(emailTd);
    tr2.appendChild(numberTd);
    tr2.appendChild(fonctionTd);
    tr2.appendChild(libelleTd);
    tr2.appendChild(modifierTd);
    tr2.appendChild(supprimerTd);
    // tr2.appendChild(checkBoxTd);

    tableauContacts.appendChild(tr2);
    // console.log(tr2);

    firstName.value = '';
    name.value = '';
    email.value = '';
    number.value = '';
    enterprise.value = '';
    fonction.value = '';
    libelle.value = '';

    let btnModifyContact = document.querySelectorAll('.modify');
    btnModifyContact.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Récupération des informations du contact à modifier
        let row = this.closest('tr');
        // console.log(row);
        let title = row.querySelector('td:nth-child(1)').textContent;
        let email = row.querySelector('td:nth-child(2)').textContent;
        let number = row.querySelector('td:nth-child(3)').textContent;
        let fonction = row.querySelector('td:nth-child(4)').textContent;
        let libelle = row.querySelector('td:nth-child(5)').textContent;
    
        // Affichage des fenêtres de type prompt pour la modification
        showModifyForm(title, email, number, fonction, libelle);
      });
    });

    function showModifyForm(title, email, number, fonction, libelle) {
      // Récupération du prénom et du nom à partir du titre
      let [firstName, lastName] = title.split(' ');

      // Affichage des fenêtres de type prompt pour saisir les nouvelles informations
      let newFirstName = prompt("Entrez le nouveau prénom :", firstName);
      let newLastName = prompt("Entrez le nouveau nom :", lastName);
      let newEmail = prompt("Entrez le nouvel email :", email);
      let newNumber = prompt("Entrez le nouveau numéro :", number);
      let newLibelle = prompt("Entrez le nouveau libellé :", libelle);

      let newEnterprise, newFonction;
      if (fonction) {
        let [enterprise, fonctionValue] = fonction.split(' ');
        newEnterprise = prompt("Entrez la nouvelle entreprise :", enterprise);
        newFonction = prompt("Entrez la nouvelle fonction :", fonctionValue);
      } else {
        newEnterprise = prompt("Entrez la nouvelle entreprise :");
        newFonction = prompt("Entrez la nouvelle fonction :");
      }

      // Mise à jour des informations du contact dans le tableau 'contactsList'
      let contactIndex = contactsList.findIndex(function(contact) {
        return contact.title === title && contact.email === email && contact.number === number && contact.fonction === fonction && contact.libelle === libelle;
      });

      if (contactIndex !== -1) {
        contactsList[contactIndex].title = newFirstName + ' ' + newLastName;
        contactsList[contactIndex].email = newEmail;
        contactsList[contactIndex].number = newNumber;
        contactsList[contactIndex].fonction = newEnterprise + ' ' + newFonction;
        contactsList[contactIndex].libelle = newLibelle;
      }

      // Mise à jour de l'affichage de la ligne correspondante dans le tableau
      let row = document.querySelector(`tr[data-index="${contactIndex}"]`);
      row.querySelector('td:nth-child(1)').textContent = newFirstName + ' ' + newLastName;
      row.querySelector('td:nth-child(2)').textContent = newEmail;
      row.querySelector('td:nth-child(3)').textContent = newNumber;
      row.querySelector('td:nth-child(4)').textContent = newEnterprise + ' ' + newFonction;
      row.querySelector('td:nth-child(5)').textContent = newLibelle;
    };

    let btnRemoveContact = document.querySelectorAll('.remove');
    btnRemoveContact.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Récupération des informations du contact à supprimer
        let row = this.closest('tr');
        console.log(row);
        let title = row.querySelector('td:nth-child(1)').textContent;
        let email = row.querySelector('td:nth-child(2)').textContent;
        let number = row.querySelector('td:nth-child(3)').textContent;
        let fonction = row.querySelector('td:nth-child(4)').textContent;
        let libelle = row.querySelector('td:nth-child(5)').textContent;

        // Vérification si l'utilisateur souhaite supprimer le contact
        if (confirm('Voulez-vous vraiment supprimer ce contact ?')) {
          // Recherche du contact dans le tableau 'contactsList' et suppression
          let contactIndex = contactsList.findIndex(function(contact) {
            return contact.title === title && contact.email === email && contact.number === number && contact.fonction === fonction && contact.libelle == libelle;
          });

          if (contactIndex !== -1) {
            contactsList.splice(contactIndex, 1);
            row.remove();
            counterContacts();
          }
        }
      });
      
    });
    counterContacts();

    titleContact.appendChild(titleContainerH1)
    titleContact.appendChild(numberContacts);
    
  });

  // Écouteur d'événement sur le bouton "showContact"
  let btnShowContacts = document.querySelector('.showListContact');
  btnShowContacts.addEventListener('click', function showContacts() {
    let mainElement = document.querySelector('.mainIndex');
    let existingListContact = document.querySelector('.listContact');
    if (existingListContact){
      let hideCreateContact = document.querySelector('.createContact');
      if (hideCreateContact) {
        hideCreateContact.style.display = 'none';
      }
      existingListContact.style.display = 'block';
    }else{
      let hideCreateContact = document.querySelector('.createContact');
      if (hideCreateContact) {
        hideCreateContact.style.display = 'none';
      }
      mainElement.appendChild(listContacts);
    }
  })
}

function counterContacts() {
  let counterContact = 0;
  let numberContacts = document.querySelector('.numberContacts');
  let numberContactSide = document.querySelector('.numberContactSide');

  if (contactsList.length === 0) {
    counterContact = 0;
    numberContacts.textContent = counterContact;
    numberContactSide.textContent = counterContact;
  } else {
    counterContact = contactsList.length;
    numberContacts.textContent = counterContact;
    numberContactSide.textContent = counterContact;
  }
}