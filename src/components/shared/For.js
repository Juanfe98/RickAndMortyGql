export function For({ of: array = [], body }) {
  if (!array) return null;
  if (array.lenght === 0) return null//<p>empty</p>;
  if (typeof body !== "function") return null;
  return array.map(body);
}