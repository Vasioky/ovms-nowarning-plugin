(function(){
	print('nowo start');
	PubSub.subscribe('vehicle.on', function(){
		print('vehicle.on');
		var eventName = 'usr.nowo.timeout';
		var i = 0;
		function sendCommand(){
			print('call: ' + i);
			if(i++<2){
				OvmsCommand.Exec('can can3 tx standard 0x681 0x04 20 40 0d a3 ff ff ff');
				OvmsEvents.Raise(eventName , 100);
			} else {
				PubSub.unsubscribe(eventName );
			}
		}
			PubSub.subscribe(eventName , sendCommand);
			
			// start timeout:
			OvmsEvents.Raise(eventName , 12000);
		});
	}
)();