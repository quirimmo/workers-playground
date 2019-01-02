var myWorker;
if (window.Worker) {
  myWorker = new Worker("./worker.js");
  myWorker.onmessage = onMessageReceived;
}

function onSendMessageToWorkerClick() {
  console.log("Message posted to worker");
  myWorker.postMessage("yeah message sent from app to worker");
}

function onMessageReceived(e) {
  console.log("message received from the worker to the app:", e);
}

function test() {
  console.log("clicked test");
}

function test2(e) {
  e.stopPropagation();
  console.log("clicked test2");
}
