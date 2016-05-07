
// Define default background image
var defaultimg = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Palmyra_-_Decumanus_Maximus.jpg/515px-Palmyra_-_Decumanus_Maximus.jpg')"; 
document.getElementById("canvas").style.backgroundImage = defaultimg;
var backview = document.getElementById("canvas").style.backgroundImage;



// define input url
var imgUrl = document.getElementById('addimg');
// add a listener
imgUrl.addEventListener("input", imgload);

//So every time a user types a url the img loading fuction starts
function imgload() {
	//to record the input value
	var userUrl = imgUrl.value;
	//if there is input
	if (userUrl.length>0){
	// constract the backgroundImage css value of the new image link
	var userLink = 'url('+"'"+userUrl+"'"+')';
	// at the end we take a reusable backgroundImage css value
	document.getElementById("canvas").style.backgroundImage = userLink;
} else {
	//if the input field is empty reload the default image
	document.getElementById("canvas").style.backgroundImage = defaultimg;
  }
	console.log(userUrl.length);
}


//Gif generation Seriously.js function

(function() {
		//main code goes here

		// declare our variables
		var seriously, // the main object that holds the entire composition
			meme, // a wrapper object for our source gif image
			chroma, // a chroma effect
			target; // a wrapper object for our target canvas

		seriously = new Seriously();
		meme = seriously.source('#gif');
		target = seriously.target('#canvas');
		chroma = seriously.effect('chroma');


		// connect all our nodes in the right order
		chroma.source = meme;
		target.source = chroma;
		seriously.go();

	}());
