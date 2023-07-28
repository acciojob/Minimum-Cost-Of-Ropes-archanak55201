let rope= document.getElementById("rope-lengths");
function calculateMinCost() {
	let val=rope.value.split(",")
    let arr=[];
    // console.log(Number(val[0]))
    let sum=Number(val[0]);
    // console.log(sum)
    let sum2=0;
    for(let i=1;i<val.length;i++){
        sum+=Number(val[i]);
        arr.push(sum);
       
       
    }
    for(let i=0;i<arr.length;i++){
        sum2+=arr[i];
    }
// console.log(sum2);
let result=document.getElementById("result");
result.innerText=sum2;
  //your code here
  
  
  
}  
