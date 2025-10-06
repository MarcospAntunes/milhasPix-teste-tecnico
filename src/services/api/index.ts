async function apiRanking(value: string = "0") {
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://api.milhaspix.com/simulate-ranking?mile_value=${value}`);
  const res = await req.json();
  return res;
}
async function apiSimulateOffers() {
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://api.milhaspix.com/simulate-offers-list`);
  const res = await req.json();
  return res;
}

export {apiRanking, apiSimulateOffers};