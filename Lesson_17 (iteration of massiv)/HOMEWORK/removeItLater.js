'use strict';
const selectCountry = document.getElementById('country'),
    selectCity = document.getElementById('city'),
    body = document.querySelector('body');

const cityArr = {
    rus: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};

const {rus, uk, bel, jap} = cityArr,
    {Москва, Санкт, Новосибирск, Екатеринбург, Нижний, Казань, Челябинск} = rus,
    {Киев, Харьков, Одесса, Днепр, Донецк, Запорожье, Львов} = uk,
    {Минск, Гомель, Могилёв, Витебск, Гродно, Брест} = bel,
    {Токио, Киото, Осака, Иокогама} = jap;
console.log(rus);
console.log(uk);
console.log(bel);
console.log(jap);

function test (event){
    console.log(`это случилось из-за ${event.target} (${event.target.value}`);
    if (event.target.value !== ''){
        selectCity.insertAdjacentHTML('beforeend', `<option>${''}</option>`);
        selectCity.style.display = 'block';
    }
    if (event.target.value === 'uk'){
        let option = selectCity.querySelector('option');
        option.setAttribute('value', 'ukCity');
            for (let qty = 0; qty < (uk.length - 1); qty++){
              selectCity.insertAdjacentHTML('beforeend', `<option value="ukCity">${''}</option>`);  
            } 
        let options = selectCity.querySelectorAll('option');
        options.forEach((elem, index) => {
            elem.insertAdjacentText('beforeend', `${uk[index]}`);
        });
    }
        
}
selectCountry.addEventListener('change', test);