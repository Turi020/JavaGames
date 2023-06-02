package games.firstgame;
import org.newdawn.slick.Graphics;
import org.newdawn.slick.GameContainer;
public interface Act {
    public void render(Graphics graphics);
    public void update(GameContainer gameContainer, int delta);
}
