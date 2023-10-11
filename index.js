const contentWrapper = document.querySelector(".container");
let cards = [];

async function getData() {
  const response = await fetch(
    "https://conf.ontico.ru/api/conferences/forCalendar.json"
  );
  const data = await response.json();
  const results = data.result;
  
  cards = results
}
getData();

function createCard(arr) {
  const div = document.createElement("div");
  div.className = "wrapper";
  div.innerHTML = arr
    .map((el) => {
      return `<div class="card">
        <span class="card__date">
        ${el.date_range}
        </span>
        <img class="card__img" src=https:${el.logo} alt="logo" />
        <h2 class="card__name">${el.name}</h2>
        <span class="card__description">${el.brief}</span>
        
        <div class="card__footer">
          <div class="card__locationWrapper">
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2372 6.3871C12.2997 2.90323 9.55254 1.68889e-06 6.18105 1.41465e-06C2.80956 1.14041e-06 -1.76429e-05 2.77419 -1.79702e-05 6.25806C-1.81339e-05 8 0.749202 10.2581 2.31008 12.9677C3.55878 15.0323 5.80643 18 5.99374 18C6.11861 18 8.49114 15.0968 9.73984 13.0323C11.3631 10.3226 12.2372 8.06452 12.2372 6.3871Z" fill="black" fill-opacity="0.29"/>
            <ellipse cx="6.11862" cy="6.0937" rx="3.67118" ry="3.69501" fill="white"/>
            </svg>

            <span class="card__location">${el.location}</span>
          </div>
        
          <div class="card__linkWrapper">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_535)">
            <path d="M8.12499 11.375H1.62499V1.62499H8.12499V2.43748H9.74997V0H0V13H9.75V10.5625H8.12501V11.375H8.12499Z" fill="#B5B5B5"/>
            <path d="M10.3006 3L9.15164 4.14892L10.2022 5.19944H6V6.82445H10.2022L9.15164 7.87498L10.3006 9.0239L13.3125 6.01194L10.3006 3Z" fill="#B5B5B5"/>
            </g>
            <defs>
            <clipPath id="clip0_1_535">
            <rect width="13" height="13" fill="white"/>
            </clipPath>
            </defs>
            </svg>
  
            <a class="card__website" href="#">${el.uri}</a>
          </div>


          <div class="card__buttonsWrapper">
            <button class="card__btn">
              Купить билет
            </button>
  
            <a class="card__link" href="#">Подробнее</a>
  
          </div>
        </div>
          
      </div>
        `;
    })
    .join("");
  contentWrapper.appendChild(div);

}

async function initApp() {
  await getData();
  createCard(cards);
}

initApp();
