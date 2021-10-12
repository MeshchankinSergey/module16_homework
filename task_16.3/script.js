/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * url - урл, по которому будет осуществляться запрос
  * callback - функция, которая вызовется при успешном выполнении
  * и первым параметром получит объект-результат запроса
  */
 function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
  
  console.log(useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', crtateTable))
  
  // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.table'); //
  // Ищем кнопку, по нажатии на которую будет запрос
  const btn = document.querySelector('.btn');
  
  /**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */
//   function displayResult(apiData) {
//     let cards = '';
//     // console.log('start cards', cards);
    
//     apiData.forEach(item => {
//       const cardBlock = `
//         <div class="card">
//           <img
//             src="${item.download_url}"
//             class="card-image"
//           />
//           <p>${item.author}</p>
//         </div>
//       `;
//       cards = cards + cardBlock;
//     });
    
//     // console.log('end cards', cards);
      
//     resultNode.innerHTML = cards;
//   }
  
//   // Вешаем обработчик на кнопку для запроса
//   btnNode.addEventListener('click', () => {
//     useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
//   })

function crtateTable () {
    table.insertAdjacentHTML('afterend','<table><tr><th>1 кв.</th><th>2 кв.</th><th>3 кв.</th><th>4 кв.</th></tr><tr><td></td><td></td><td></td><td></td></tr></table>')
};

btn.addEventListener("click", crtateTable); 
