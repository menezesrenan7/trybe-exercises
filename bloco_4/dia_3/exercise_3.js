let n = 5;
array = '';
Position = n;

for (index0 = 1; index0 <= n; index0 += 1) {
    for (let index = 1; index <= n; index += 1) {
        if (index < Position) {
            array += ' ';
        } else {
            array += '*';
        }
    } 
    console.log(array);
    array = '';
    Position -= 1;
}