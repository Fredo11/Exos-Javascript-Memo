//fonction shuffle pour mélanger un tableau
			
			Array.prototype.shuffle = function() {

		    var input = this;

		    for (var i = input.length-1; i >=0; i--) {

	        var randomIndex = Math.floor(Math.random()*(i+1));

	        var itemAtIndex = input[randomIndex];

	        input[randomIndex] = input[i];

	        input[i] = itemAtIndex;

		    }
// fin de la fonction de mélange aléatoire
		    return input;

			}

			var tempArray = ['./img/Dardevil.jpg','./img/Dardevil.jpg','./img/DrStrange.jpg','./img/DrStrange.jpg','./img/Ghost-Rider.jpg','./img/Ghost-Rider.jpg','./img/Hulk.jpg','./img/Hulk.jpg'];

			tempArray.shuffle();

			document.getElementById().value="";


			// var images = "Image";

			// for(var i = 1; i < tempArray.length + 1; i++){

		 //    images = "Image" + i;

		 //    var images = document.getElementById(i);

		 //    images.setAttribute("id", tempArray[i - 1]);

//}

