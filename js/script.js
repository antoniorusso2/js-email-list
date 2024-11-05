console.log('email list');

//DOM ELEMENTS
const ulElement = document.querySelector('.email-list');
console.log(ulElement);

function createDOMElement(tag, classes = [], content = '') {

  const element = document.createElement(tag);

  element.classList = classes;
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
        const liElement = createDOMElement('li', 'email', email);
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


