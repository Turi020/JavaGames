package games.firstgame;

import org.newdawn.slick.GameContainer;
import org.newdawn.slick.Graphics;

public class Eclipse implements Act {

    private float x,y;
    private float speed;

    public Eclipse(float x, float y){
        this.x=x;
        this.y=y;
        this.speed= 10;
    }
    @Override
    public void render(Graphics graphics){
        graphics.drawOval(this.x,this.y,10,15);

    }

    @Override
    public void update(GameContainer gameContainer, int delta){
        this.y+=(float) delta/this.speed;
        this.x+=(float) delta/this.speed;
        if (this.y>500){
            this.y=0;}
        if (this.x>900){
            this.x=0;
        }
    }
}
