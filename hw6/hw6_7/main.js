function sortNums(nums,direction){
   if (direction === 'ascending'){return nums.sort((a, b) =>a-b);}
if (direction === 'descending' ){return nums.sort((a, b) =>b-a); }

}

console.log(sortNums([11,21,3],'descending'));


