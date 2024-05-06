//event emitter is an object that facilitate the communication between different part of your code by allowing one part to emit the event and other part will listen for or allow and respond to those events.it is commonly used pattern in asynchronous programming.
// class EventEmitter {
//     constructor() {
//       this.events = {};
//     }
  
//     on(eventName, listener) {
//       if (!this.events[eventName]) {
//         this.events[eventName] = [];
//       }
//       this.events[eventName].push(listener);
//     }
  
//     emit(eventName, ...args) {
//       if (this.events[eventName]) {
//         this.events[eventName].forEach(listener => {
//           listener(...args);
//         });
//       }
//     }
  
//     removeListener(eventName, listenerToRemove) {
//       if (this.events[eventName]) {
//         this.events[eventName] = this.events[eventName].filter(listener => {
//           return listener !== listenerToRemove;
//         });
//       }
//     }
  
//     removeAllListeners(eventName) {
//       delete this.events[eventName];
//     }
//   }
  
const EventEmitter=require('events');
const emitter=new EventEmitter();
//Register a Listener
emitter.on('message Logged',()=>{
    console.log('Listener Called');
});
emitter.on('message Logged',(a,b)=>{
  console.log(`sum of a and b is : ${a}`);
});
emitter.on('message Logged',(a,b,c)=>{
  let temp=a+b+c;
  console.log(`sum of a,b and c is ${temp}`);
});
emitter.once('call once',()=>{
  console.log('Listener Called only once');
});//This event can be only emit once
//Raise an  event
// emitter.emit('message Logged');
// emitter.emit('message Logged',(10,20));
// emitter.emit('message Logged',(10,20,30));
// emitter.emit('message Logged');
// emitter.emit('message Logged');
// emitter.emit('call once');
const callback = (stream) => {
  console.log('someone connected!');
};
emitter.removeListener('message Logged',callback);// removeListener() / off(): remove an event listener from an event
emitter.removeAllListeners('message Logged'); //remove all listeners for an event if we don't pass any event name then it will remove all the events.
emitter.emit('message Logged',(10,20,30));
emitter.emit('call once');
