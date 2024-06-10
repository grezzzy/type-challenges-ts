type MyPick<T, K extends keyof T> = {
  // K is a union of potential keys
  [key in K]: T[key];
}
