class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.data =[2000,50,30,90,120,100,20,20,30,480];
    
  }

  init() {
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites
    allSprites.clear();
    
    var bgraph = new bar_graph(40, 40, t.data)
    t.add(bgraph)


  }//end init
  
  
  render() {
    var t = this;
    super.render();
    var xspace = 40;
    var xoffset = 80;
    var yoffset = 450;
    var bar_width = 20;
    for (var i = 0; i <= t.data.length-1; i++) 
    {
        var xpos = i * xspace;
        //x,y,w,h
        //rect( xpos+ xoffset, yoffset - t.data[i], bar_width, t.data[i]);
    }
    //line graph
    this.data =[100,100,100,200,200,100,20,20,30,40,60,20,100];
    // draw lines
    yoffset = 250   
    var px = 20;
    var py = yoffset -t.data[0];
    for(let i =0; i <= t.data.length-1; i++)
    {
        let x = i * 5+px; 
        let y = yoffset -t.data[i];
        stroke('red');
        line(px, py, x, y);

        //store the last position
        px = x;
        py = y;
    } 
  }//end render


}
