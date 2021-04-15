var userchoice = prompt ('plese enter a typy do you went (skincare ,makeup)?');
console.log(userchoice);
while (userchoice !=='skincare' && userchoice !== 'makeup'){
  userchoice = prompt ('plese enter a typy do you went (skincare ,makeup)?');
   }
   var userChoose;
   if (userchoice === 'skincare'){
userChoose ='<img scr ="https://tse1.mm.bing.net/th?id=OIP.I8MQC6hbOEp4b8XlUzufZQHaEK&pid=Api&P=0&w=290&h=164"/>';
//document.write(image);
  }
  else if (userchoice === 'makeup'){
var imge2 ='<img scr ="https://tse1.mm.bing.net/th?id=OIP.I8MQC6hbOEp4b8XlUzufZQHaEK&pid=Api&P=0&w=290&h=164"/>';
//document.write(image2);
  }
  var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);}




