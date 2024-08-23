const isEmpty = (array: any) => {
  console.log("array :", array?.length);
  if (!array || array?.length === 0) return true;
  return false;
};

export const arrayHp = { isEmpty };
