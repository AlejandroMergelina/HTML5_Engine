class MyGame extends Game
{
    constructor(renderer){
        super(renderer);
        this.graphicAssets={
            ET:{
                path: "MyGameAAA/Asset/ET.png", img:null
            }
        }
    }
    Start(){
        super.Start();

        this.redBox = new RectangleGO(new Vector2(this._screenHalfWidth, this._screenHalfHeight), 100, 100, Color.red);

        this.gameObjects.push(this.redBox);
        this.player = new Player(new Vector2(this._screenHalfWidth, this._screenHalfHeight), this.graphicAssets.ET.img);
        this.gameObjects.push(this.player);
    }

    Update(deltaTime){

        this.redBox.rotation += 1;
        this.redBox.y += Math.sin(totalTime *5)*10;
        this.redBox.x += Math.cos(totalTime * 5)*10;

        super.Update(deltaTime);
    }

    Draw(){
        this.renderer.DrawBasicRectangle(0,0,this._screenWidth, this._screenHeight, Color.blue);
        super.Draw();
    }
}

class Player extends SpriteObject{
    constructor(position, img){
        super(position,0, 1, img);
        this.speed = 100;
    }

    Update(deletaTime){
        if(Input.IsKeyPressed(KEY_LEFT)){
            this.x -= this.speed * deletaTime;
            this.scale = new Vector2( -1,1);
        }
        if(Input.IsKeyPressed(KEY_RIGHT)){
            this.x += this.speed * deletaTime;
            this.scale= new Vector2(1,1);
        }
        if(Input.IsKeyPressed(KEY_UP)){
            this.y -= this.speed * deletaTime;
        }
        if(Input.IsKeyPressed(KEY_DOWN)){
            this.y += this.speed * deletaTime;
        }
    }
}

window.onload = () =>{
    Init(MyGame);
}