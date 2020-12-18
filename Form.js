class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(200,0);
        var input = createInput("name");
        var button = createButton('play');
        var greeting = createElement('h3');
        input.position(200,160);
        button.position(200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello Welcome to this Game "+name);
            greeting.position(200,160);
        })
    }
}