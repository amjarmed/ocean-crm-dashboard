// convert a  string to capitalize

export const capitalize = (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// convert a string to camel case
export const camelCase = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join('');
};

//convert a string to pascal case
export const toPascalCase = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => capitalize(word))
    .join('');
};
