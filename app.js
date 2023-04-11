console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <100; i++){
    if(i % 2 == 0)
    {
        continue;
    }
    else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++)
{
    let x = 1;
    while (x < 100)
    {
    let output = "";
    if (i % 3 == 0)
    {
        output += "FIZZ";
    }
    if (i % 5 == 0)
    {
        output += "BUZZ";
    }
    console.log(i, output);
    x++;
    }
}

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++)
{
    if ( i== value)
    {
        console.log("found" ,{value});
        break;
    }
    console.log("No Dice.");
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++)
{
    let output = "";
    if (i % fizzDivisor == 0)
    {
        output+="FIZZ";
    }
    if(i % buzzDivisor == 0)
    {
        output+="BUZZ";
    }
    console.log(i, output);
}
console.log(fizzDivisor, buzzDivisor);
