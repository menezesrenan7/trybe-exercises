let n = 5, position = 3, array = '';
 
for (index = 1; index <= 3; index += 1) {
    for (index1 = 1; index1 <= position; index1 += 1) {
        if (index1 <= n - position) {
            array += ' ';
        } else {
            array += '*';
        }
    }
    console.log(array);
    position += 1;
    array = '';
}