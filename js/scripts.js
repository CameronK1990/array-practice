// business logic



// User Interface Logic
$(document).ready(function(){
  $("#formFav").submit(function(event){
    event.preventDefault();
    let myArr = [];
    myArr.push($("input#form1").val());
    myArr.push($("input#form2").val());
    myArr.push($("input#form3").val());
    myArr.push($("input#form4").val());
    console.log(myArr);

    let newArr = [];
    newArr.push(myArr[0], myArr[1], myArr[2]);

    newArr.forEach(function(element){
      $(ul#newList).append
    })


  });
});
