import { Result } from "@/models";

export function findResult(
  results: Result[],
  questionsAnsweredCorrectly: number
): Result | undefined {
  return results.find(
    (result: Result) =>
      result.min <= questionsAnsweredCorrectly &&
      questionsAnsweredCorrectly <= result.max
  );
}
