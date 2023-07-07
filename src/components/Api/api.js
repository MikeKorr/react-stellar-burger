const config = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    authorization: "b6d493d9-9d15-4534-b3ca-8c1e45e1565f",
    "Content-Type": "application/json",
  },
};

function getIngredients() {
  return fetch(config.baseUrl, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

function postIngredients(image, price, name) {
  return fetch(config.baseUrl, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      image: image,
      price: price,
      name: name,
    }),
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export { getIngredients, postIngredients };
