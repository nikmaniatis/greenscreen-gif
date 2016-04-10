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