class Food{
    constructor(foodStock){
       this.image = loadImage("Image/Milk.png");
    }

    getState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value",function(data){
            gameState = data.val();
        })
       
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,22,70,70);

        if(this.foodStock != 0){
           for(var i=0;i<this.foodStock;i++) {
               if (i % 10==0){
                   x=80;
                   y=y+50
               }
               this.image(this.image,x,y,50,50);
               x=x+30;
           }
        }
    }
}