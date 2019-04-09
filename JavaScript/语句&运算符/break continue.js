// break 语句用于跳出循环。

// continue 用于跳过循环中的一个迭代。

function myFunction() {
  var x="",i=0;
  for (i=0;i<10;i++) {
	  if (i==3)
	    {
	    	break;
	    }
	  x=x + "The number is " + i + "<br>";
  }
  document.getElementById("demo").innerHTML=x;
}
/*
The number is 0
The number is 1
The number is 2
*/


function myFunction1() {
  var x="",i=0;
  for (i=0;i<10;i++) {
	  if (i==3)
	    {
	    	continue;
	    }
	  x=x + "The number is " + i + "<br>";
  }
  document.getElementById("demo").innerHTML=x;
}
/*
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/