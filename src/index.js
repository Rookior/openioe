function OpenIOE(name){ 
    this.name = name || "openIOE"; 
} 
OpenIOE.prototype = { 
    constructor : OpenIOE, 
    hello : function(){ 	
		  return "hello " + this.name;
    } 
} 
import { weather } from './lib/weather/weather';

OpenIOE.prototype.weather = weather;

const openioe = new OpenIOE();

export default openioe;