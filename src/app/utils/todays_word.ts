import { SEED_DATE } from "app/app-constants";
import words from "./words.json";

function GetWordIndex(seed: Date, dateToRetrieve: Date) {
  const s = new Date(seed),
    t = new Date(dateToRetrieve).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.round(t / 864e5);
}

function GetWordIndexForDate(dateToRetrieve: Date) {
  return GetWordIndex(SEED_DATE, dateToRetrieve);
}

export function GetWordOfTheDay(dateToRetrieve: Date) {
  const wordIndex = GetWordIndexForDate(dateToRetrieve);
  return words[wordIndex % words.length];
}
