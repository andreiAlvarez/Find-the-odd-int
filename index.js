//solution 1

const findOdd = A => {
    var num;
    var count =0;
    for(i=0;i<A.length;i++){
       num = A[i]
       for(a=0;a<A.length;a++){
          if(A[a]==num){
          count++;
          }
     } if(count%2!=0){
          return num;
     }
   }
}

//solution 2

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
