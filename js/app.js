var userchoice = prompt ('plese enter a typy do you went (skincare ,makeup)?');
console.log(userchoice);
while (userchoice !=='skincare' && userchoice !== 'makeup'){
  userchoice = prompt ('plese enter a typy do you went (skincare ,makeup)?');
   }
   var userChoose;
   if (userchoice === 'skincare'){
userChoose ='<img src ="http://ghk.h-cdn.co/assets/16/03/1600x800/landscape-1453252591-skincare-woman.jpg"/>';

  }
  else if (userchoice === 'makeup'){
 userChoose='<img src ="https://tse1.mm.bing.net/th?id=OIP.I8MQC6hbOEp4b8XlUzufZQHaEK&pid=Api&P=0&w=290&h=164"/>';
 
  }
  var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);}