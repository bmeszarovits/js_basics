// first problem solved


var sum = 0;

for(var i = 3; i < 1000; i++) {
		if((i % 3 === 0) || (i % 5 === 0)) {
			sum += i;
	}	
}
	

console.log(sum);







// second problem (finally) solved :)

var fib = [];
fib[0] = 0;
fib[1] = 1;
var sum = 0;


for(var i = 2; i < 4000000; i++) {
	fib[i] = fib[i-1] + fib[i-2]; {
		if(fib[i] % 2 === 0 && sum < 4000000)
		 sum += fib[i];
	}
}	

console.log(sum);


