async function apiRanking(value: string = "0") {
  const req = await fetch(`http://localhost:3000/api/simulate-ranking?mile_value=${value}`);
  const res = await req.json();
  return res;
}

export {apiRanking};