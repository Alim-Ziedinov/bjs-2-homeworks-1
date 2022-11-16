function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant < 0){
    let arr = []; 
    return(arr);
  }
  else if(discriminant == 0){
    let root = -b / (2 * a);
    arr[0] = Number(root.toFixed(2));
  }
   else if(discriminant > 0){
    let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [root1, root2];
  }
   return arr; // array
}


