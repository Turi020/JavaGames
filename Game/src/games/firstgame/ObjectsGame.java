package games.firstgame;

import org.newdawn.slick.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ObjectsGame extends BasicGame {
    private List<Act>acts;

    public ObjectsGame(String title){ super(title);}

    @Override

    public void init(GameContainer gameContainer) throws SlickException{
        this.acts=new ArrayList<>();
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            Rectangles rectangles =new Rectangles(random.nextInt( random.nextInt(600), random.nextInt(600))600);
            rectangles.add(rectangles);
            
        }
    }
    @Override

    public void update(GameContainer gameContainer, int delta) throws SlickException{
        for(Rectangles rectangles:this.rectangles){
            rectangles.update(delta);
        }
    }
    @Override
    public void render (GameContainer gameContainer, Graphics graphics) throws SlickException{
        for (Rectangles rectangles:this.rectangles) {
            rectangles.render(graphics);
        }
    }
    public static void main (String []argv){
        try{
            AppGameContainer container=new AppGameContainer(new ObjectsGame("Rectangles"));
            container.setDisplayMode(800,600,false);
            container.start();
        } catch (SlickException e){
            e.printStackTrace();
        }
    }
}
