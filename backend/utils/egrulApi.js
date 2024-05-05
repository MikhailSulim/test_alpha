function fetchEgrulData(body, res, next) {
  return fetch('https://egrul.nalog.ru', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/javascript, */*; q=0.01',
    },
    credentials: 'include',
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response.status);
    })
    .then((token) => {
      return fetchSearchResult(token.t, res, next);
    })
    .catch((err) => next(err));
}

function fetchSearchResult(token, res, next) {
  return fetch(`https://egrul.nalog.ru/search-result/${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) =>
      resp.ok
        ? resp.json()
        : Promise.reject(resp.status + '   ' + resp.statusText)
    )
    .then((data) => {
      res.status(200).send(data);
      return data;
    })
    .catch((err) => next(err));
}

async function getData(req, res, next) {
  const data = await fetchEgrulData(req, res, next);
  return data;
}

module.exports = getData;
