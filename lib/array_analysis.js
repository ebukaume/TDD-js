const analyze = (array) => {
  if(array.length  === 0) return {} 

  let length = 0;
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

  array.forEach(element => {
    length += 1
    min = element < min ? element : min
    max = element > max ? element : max
    sum += element
  });

  return {
    min,
    max,
    average: sum / length ,
    length
  }
}

export default analyze