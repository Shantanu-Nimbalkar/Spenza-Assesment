const Event=require('./event')

class Events {

    
    // Register an event handler
    on(eventName, callback) {
        
        Event.create({
            event:eventName,triggerTime:"date"
        },function(err,ev){
            if(err){
                console.log("kya kiye tum");
            }
            
            
            console.log("saved"+ev);
        })
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {}
  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {}
  }
  const event = new Events();
event.on()
 

  