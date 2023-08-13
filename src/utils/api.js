export const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export function getIngredients() {
  return fetch(config.baseUrl + "/ingredients", {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

export function postOrder(ingList) {
  return fetch(config.baseUrl + "/orders", {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      ingredients: ingList,
    }),
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
