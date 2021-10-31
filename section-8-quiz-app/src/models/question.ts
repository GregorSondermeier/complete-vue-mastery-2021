import { Answer } from "./answer";

export interface Question {
  q: string;
  answers: Answer[];
}
