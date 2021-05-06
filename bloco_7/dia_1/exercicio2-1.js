const factorial = num => {
  let fatorial = num;
  for (let index = 1; index < num; index += 1) {
    fatorial = fatorial * (num - index);
  }
  return fatorial;
}
