function takeANumber(lineOfPeople){
 var personsNumber = 0;
 personsNumber+=1;
 lineOfPeople.push(personsNumber);
 
 //pushes personsNumber(1) into lineOfPeople[]
 return  ". You are " number + (lineOfPeople.length)+ " in line.";
 //prints the statement 
}
  
function nowServing(lineOfPeople){
 console.log (personsNumber);
  if(lineOfPeople.length<=0) {
  return "There is nobody waiting to be served!";
  }
 else if (lineOfPeople.length>0){
  var firstElement = lineOfPeople.shift();
  return "Currently serving "+firstElement+"."; 
  
 }
}

function currentLine(customerLine){
 
  if (customerLine.length>0){
      var i = 0; 
      var customerMessage = "The line is currently: ";
      
        do {
              customerMessage +=(i+1)+". "+ customerLine[i];
              if (i<customerLine.length-1){
                customerMessage += ", ";
              }
              //The line is currently: 1. Bill, 2. Jane, 3. Ann
              i++;
            } while (customerLine.length>i);
            return customerMessage;
  }     
      else {
      return "The line is currently empty.";
  }
}