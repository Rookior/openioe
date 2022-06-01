function Openioe(name){ 
    this.name = name || "openIOE"; 
} 
Openioe.prototype = { 
    constructor : Openioe, 
    hello : function(){ 	
		  return "hello " + this.name;
    } 
} 
import { weather } from './lib/weather/weather';

Openioe.prototype.weather = weather;

const openioe = new Openioe();

export default openioe;