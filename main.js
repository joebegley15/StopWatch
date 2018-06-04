function stopWatch(){
	this.timeElapsed = 0;
	this.getTime = function(){
		return this.timeElapsed;
	}
}