let n = 5;
let ka = n;

for (index=1; index <= n; index+= 1){
    ka -=1;
    console.log(" ".repeat(ka) + "*".repeat(index));
}