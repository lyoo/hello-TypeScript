interface States {
  [state: string]: boolean;
}

interface States1 {
  // An index signature parameter type must be 'string' or 'number'.
  [index: number]: number;
}

let s: States = {
  enabled: true,
  maximized: false,
};
console.log(s);
console.log(s["enabled"]);

let s1: States1 = [1, 2, 3, 4];
console.log(s1);
console.log(s1[0]);
// Property 'length' does not exist on type 'States1'.
// console.log(s1.length);

let s2: number[] = [1, 2, 3];
console.log(s2.length);
