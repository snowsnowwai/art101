let b;
        let b2

        function setup() { 
        createCanvas(300, 300);
        // simple net test
        b = loadImage("https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2094c59e43e6f946/60ce79bbe1b3f7481347ddb0/Pizza.jpg");
        // Images must be in a "assets" directory to load correctly
        b = loadImage("assets/pizza.jpg"); 
        b2 = loadImage("assets/pineapple.jpg");
        // don't put loadImage in the draw loop bc it keeps loading
        } 

        function draw() { 
        background(0); 
        image(b, 0, 0, 100,100);
        //imgref, x, y, w, h

        image(b2, 100, 100, 100,100);
        // when you have the images placed/loaded correctly, uncomment the line below, to show the pineapple
        //image(b2, 200, 200, 100,100);
        } 