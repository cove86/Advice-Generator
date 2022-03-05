"use strict";

const API_URL = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice_id");
const adviceQuote = document.querySelector(".advice_quote");
const btn = document.querySelector(".btn");

const loadAdvice = async function () {
  const response = await fetch(API_URL);
  const data = await response.json();
  adviceId.textContent = `Advice # ${data.slip.id}`;
  adviceQuote.textContent = `"${data.slip.advice}"`;
};

btn.addEventListener("click", loadAdvice);
