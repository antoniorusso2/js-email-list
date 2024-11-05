console.log('email list');
//DOM ELEMENTS

//lista dove appendere li contenenti le mail generate
const ulElement = document.querySelector('.list-group');
console.log(ulElement);

//button per la generazione di 10 nuove mail
const btn = document.querySelector('.btn.btn-dark');

//funzione creazione elemento da appendere nel dom
function createDOMElement(tag, classList = [], content = '') {

  const element = document.createElement(tag);

  element.classList.add(...classList);
  element.innerHTML = content;

  return element;
}

//funzione genera numero di mail in base al numero in parametro
function emailGen(num) {
  for (let i = 0; i < num; i++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {

        const email = res.data.response;

        //creazione elemento lista da mostrare nel dom
        const liElement = createDOMElement('li', ['list-group-item'], email);
        console.log;
        ulElement.appendChild(liElement);

        // console.log(email);

      })

      .catch((error) => {
        console.error('errore');
      });

  }
}

const mailList = emailGen(10);

//genera altre 10 mail svuotando il contenitore da quelle precedenti
btn.addEventListener('click', () => {
  ulElement.innerHTML = '';

  emailGen(10);
})


