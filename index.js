import { maxPrice } from "./components/hw1.js";
import { massage } from "./components/hw3.js";
import { newAllPairs } from "./components/hw4.js";
import { arr } from "./components/hw5.js";
import { salaryUA } from "./components/hw7.js";
import { personGetInfo } from "./components/hw8.js";
import { generateBlocksInterval } from "./components/hw9/hw9.js";

const maxPriceElement = document.getElementById('max-price');
maxPriceElement.innerText = maxPrice;

const isPalyndromElement = document.getElementById('isPalyndrom');
isPalyndromElement.innerText = massage;

const newAllPairsElement = document.getElementById('newAllPairs');
newAllPairsElement.innerText = newAllPairs;

const arrElement = document.getElementById('arr');
arrElement.innerText = arr;

const salaryUAElement = document.getElementById('salaryUA')
salaryUAElement.innerText = salaryUA;

const personGetInfoElement = document.getElementById('personGetInfo');
personGetInfoElement.innerText = personGetInfo;

