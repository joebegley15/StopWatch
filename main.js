function stopWatch(){
	this.duration = 0;
	this.startTime;
	this.stopTime;
	this.getTime = function(){
		if (this.startTime) {
			this.duration = (new Date() - this.startTime) / 1000;
			return this.duration;
		} else {
			return 0;
		}
	}
	this.start = function() {
		this.startTime = new Date();
	}
	this.stop = function(){
		this.stopTime = new Date();
		this.duration = this.stopTime - this.startTime;
		return this.duration;
	}
	this.reset = function(){
		this.stopTime = undefined;
		this.startTime = undefined;
		this.duration = undefined;
		return 0;
	}
}

var myStopWatch = new stopWatch();