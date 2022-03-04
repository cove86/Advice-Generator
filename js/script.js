"use strict";

const API_URL = "https://api.adviceslip.com/advice";

const loadAdvice = function () {};
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data.slip.advice));
loadAdvice();
