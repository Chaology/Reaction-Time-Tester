	// Helper functions

		function getAvg(arr){

			for (var i = 0, sum = 0; i < arr.length; i++ ){

				sum += arr[i];
			}

			return sum/i
 
		}


		function getRandomColor() {

		    var letters = '0123456789ABCDEF';
		    var color = '#';

		    for (var i = 0; i < 6; i++ ) {

        		color += letters[Math.floor(Math.random() * 16)];

    		}

    		return color;

		}


	// Varibles

		var start = new Date().getTime();

		var timeArray = new Array();

		var onGame = false;


	// Main Functions	

		function makeShapeAppear(){

			if (onGame == true) {

				var top = Math.random() * 400;

				var left = Math.random() * 400;

				var width = Math.random() * 100 + 100;

				if (Math.random() > 0.5) {

					document.getElementById("shape").style.borderRadius = "50%";

				} else {

					document.getElementById("shape").style.borderRadius = "0";

				}

				document.getElementById("shape").style.backgroundColor = getRandomColor();

				document.getElementById("shape").style.width = width + "px";

				document.getElementById("shape").style.height = width + "px";

				document.getElementById("shape").style.top = top + "px";

				document.getElementById("shape").style.left = left + "px";

				document.getElementById("shape").style.display = "block";

				start = new Date().getTime();

			}
		}


		function appearAfterDelay(){

			setTimeout(makeShapeAppear,2000 * Math.random() + 1000);

		}


		function startTest(){

			if (onGame == false){

				onGame = true;

				appearAfterDelay();

				document.getElementById("shape").onclick  = function(){

					document.getElementById("shape").style.display = "none";

					var end = new Date().getTime();

					var timeTaken = (end - start)/1000;

					document.getElementById("timeTaken").innerHTML = timeTaken + "s";

					timeArray.push(timeTaken);

					avgTime = getAvg(timeArray);

					document.getElementById("avgTime").innerHTML = avgTime + "s";

					appearAfterDelay();
				}			
			}
		}


		function resetTest(){

		if (onGame == true) {
				onGame = false;
				document.getElementById("shape").style.display = "none";
				start = "";
				end = "";
				timeTaken = "";
				timeArray = new Array();
				avgTime = "";
				document.getElementById("timeTaken").innerHTML = "";
				document.getElementById("avgTime").innerHTML = "";
			}
		}


		document.getElementById("starter").onclick = function(){

			startTest();

		}


		document.getElementById("reseter").onclick = function(){

			resetTest();

		}


