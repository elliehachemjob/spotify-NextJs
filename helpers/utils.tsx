export const justOneIndex = (value: any, array: any) => {
  array.filter(
    (v: any, i: any, a: any) => a.findIndex((t: any) => t.name === v.name) === i
  );
};
