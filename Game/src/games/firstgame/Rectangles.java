package games.firstgame;

import org.newdawn.slick.Graphics;
import org.newdawn.slick.GameContainer;

public class Rectangle implements Act {
    public enum DIRECTION {RIGHT, DOWN, LEFT, UP}

    private float x;
    private float y;
    private float speed;
    private DIRECTION direction;

    public Rectangle(int x, int y, float speed, DIRECTION direction) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
    }

    public void render(Graphics graphics) {
        graphics.drawRect(this.x, this.y, 40, 20);
    }

    public void update(GameContainer gameContainer, int delta) {
        if (this.direction.equals(DIRECTION.LEFT)) {
            this.x -= (float) delta / this.speed;
        } else {
            this.x += (float) delta / this.speed;
        }
        if (this.x > 600) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = 600;
        }
    }

}