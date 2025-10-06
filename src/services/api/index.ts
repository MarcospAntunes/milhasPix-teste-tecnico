async function apiRanking(value: string = "0") {
  const req = await fetch(`/api/ranking?value=${value}`);
  const res = await req.json();
  return res;
}

async function apiSimulateOffers() {
  const req = await fetch('/api/simulateoffers');
  const res = await req.json();
  return res;
}


export {apiRanking, apiSimulateOffers};