var BlocklyCodingGame = window.BlocklyCodingGame || {};
/** @enum {number} Type of objects to create in the receiver. */
BlocklyCodingGame.MessageType = {
	UNKNOWN: 0,
	START: 1,
	MOVE: 2,
	NORTH: 3,
	SOUTH: 4,
	EAST: 5,
	WEST: 6,
	FINISH: 7,
	STEPS: 8,
	GAMESTATE:9,
	DEBUG:100,
	_: function(code){
		return this["_"+code];
	}
};

for (var prop in BlocklyCodingGame.MessageType) {
    // skip loop if the property is from prototype
    if(!BlocklyCodingGame.MessageType.hasOwnProperty(prop)) continue;
    BlocklyCodingGame.MessageType["_"+BlocklyCodingGame.MessageType[prop]] = prop;
}

//alert(BlocklyCodingGame.MessageType._(BlocklyCodingGame.MessageType.FINISH)) == / 'FINISH'

/**
* JSON serializable message from a sender to create an object in the receiver.
* @struct
* @constructor
* @export
*/
BlocklyCodingGame.Message = function(type) {
	/**
	* @type {BlocklyCodingGame.MessageType}
	*/
	this.type = type || BlocklyCodingGame.MessageType.UNKNOWN;
};