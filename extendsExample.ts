type  Apple= {
	color:'red';
	seed:string 
}
type Banana ={
	color:'yellow',
	seed:number
}

type Fruits = Apple | Banana

interface Tree<S extends Fruits> {

	fruit: S
}

function named({color, seed}){
	console.log(color, seed);
	
}
named({color:'adf', seed: 1})
const Mytree:Tree<Fruits> = {
	fruit: {
		color: 'red',
		seed:  '1'
	}
}