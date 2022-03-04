"use strict";

const API_URL = "https://api.adviceslip.com/advice";

const loadAdvice = async function () {
  const request = await fetch(API_URL);
  const data = await request.json();
  return data;
};

console.log(await loadAdvice());
