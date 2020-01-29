let DefaultPveProgress = null;

function onLoadConfig() {
  // Log.debug(`function:${onLoadConfig.name}`);
  DefaultPveProgress = {};
  DefaultPveProgress.lastPveTime = 0;//last pve time
  DefaultPveProgress.statisticData = [];
}

function otherFunc() {
	return "something"
}

onLoadConfig()
console.log('DefaultPveProgress', DefaultPveProgress)

module.exports = {
	otherFunc
}
