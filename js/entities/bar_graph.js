///////////////bar_graph///////////////////
class bar_graph extends yentity
{
  constructor(x2,y2,data2) 
  {
	  super(x2,y2);
	  this.speed = 4;
	  this.type = "bar_graph";
    this.grafic_type="none";
    this.data = data2
    this.xspace = 40;
    this.xoffset = 80;
    this.yoffset = 450;
    this.bar_width = 20;
    this.max_height = 200;
    this.max_value = 2000;
    this.w = 0;
    this.h = 0;
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  t.generate_graph()
  }//end update
  
  generate_graph()
  {
    var t = this;
    //this.sprite.draw = function() {
      for (var i = 0; i <= t.data.length-1; i++) 
      {
        var xpos = i * t.xspace;
        //x,y,w,h
        rect( xpos+ t.xoffset, t.yoffset - t.do_op(t.data[i], t.max_value, t.max_height), t.bar_width, t.do_op(t.data[i], t.max_value, t.max_height));
      }
    //}
  }
  do_op(val, max_val, map_max) {
    console.log((val / max_val), map_max)
    return (val / max_val) * map_max
  }
  
  
}//end class
///////////////end bar_graph///////////////////