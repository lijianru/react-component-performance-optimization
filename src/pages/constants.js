export const person = {
  info: {
    age: 18,
  },
};

export function expensiveFnCopy(type) {
  console.log(`Lv05_useMemo: expensiveFnCopy ${type}`);
  let result = 0;
  for (let i = 0; i < 10000; i++) {
    result += i;
  }
  return result;
}
