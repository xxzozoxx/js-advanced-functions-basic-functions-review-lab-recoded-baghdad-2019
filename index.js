// Your code here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}
let mondayWork = function (activity ='go to the office'){
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(adjective = '*'){
  return function(para = 'special'){
    //inner 
    return `You are ${adjective}${para}${adjective}!`;
    
  }
}
wrapAdjective("%")("a dedicated programmer")
let Calculator ={function add(){
  return 1 + 3;
}, function subtract(){
  return 1 - 3;
},function multiply(){
  return 1 * 3;
}, function divide(){
  return 10 / 5;
}};