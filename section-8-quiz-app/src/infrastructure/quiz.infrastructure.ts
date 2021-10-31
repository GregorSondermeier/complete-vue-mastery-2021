import { Question, Result } from "@/models";

export async function getQuestions(): Promise<Question[]> {
  let response = await fetch("./questions.json");
  return await response.json();
}

export async function getResults(): Promise<Result[]> {
  let response = await fetch("./results.json");
  return await response.json();
}
