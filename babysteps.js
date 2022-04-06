
/* use .length to find the length of array*/
var len = process.argv.length;

/* define for loop to evaluate sum of the array */

var sum=0;
for(var i=2;i<len;i++)
    sum+=Number(process.argv[i]);
