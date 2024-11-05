console.log('email list');

//DOM ELEMENTS

//funzione genera numero di mail in base al numero in parametro


for (let i = 0; i < 10; i++) {

  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {

      const email = res.data.response;

      console.log(email);

    })

    .catch((error) => {
      console.error('errore');
    });
}





function createDOMElement(tag, classes = [], content = '') {

  const element = document.createElement('tag');

  element.classList = classes;
  element.innerHTML = content;
}