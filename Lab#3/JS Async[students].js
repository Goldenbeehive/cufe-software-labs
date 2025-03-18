// const  processOrderNotWorking  = async (orderId) => {
//   if (!orderId) {
//     console.log("Invalid order ID", orderId);
//     return;
//   }
//   let orderDetails;
// return new Promise((resolve, reject)=>{
//   if (!orderId) {
//     reject("Invalid order ID");
//   }
//   setTimeout(() => {
//     console.log("Fetched order details for order ID:", orderId);
//     orderDetails = { orderId, status: "Processed" };
//     resolve(orderDetails);
//   }, 1000);
//   });
// };

// // As you can see this code did not behave as expected
// let initOrderId = 100;
// const newOrder =   processOrderNotWorking(initOrderId).then(order=> console.log("Order details:",order));

// --------------------------------------------------------------------
// PROMISES
// --------------------------------------------------------------------

//TODO: How many parameters should this function take?

const processOrderPromise = (orderId) => {
  //TODO: Implement a function using a promises to fetch order details and return the order after fetching [2 Marks]
  //TODO: Handle invalid order ID [1 Mark]
  return new Promise((resolve, reject) => {
    if (!orderId) {
      reject("Invalid order ID");
    }
    setTimeout(() => {
      console.log("Fetching order details for order ID:", orderId);
      orderDetails = { orderId, status: "Processed" };
      resolve(orderDetails);
    }, 1000);
  });
};
//TODO: Call processOrderPromise() properly to console log the returned order details and catch any errors [1 Mark]
processOrderPromise(12)
  .then((order) => console.log("Order details:", order))
  .catch((error) => console.error("Error:", error));

const processOrderNotWorking = (orderId) => {
  if (!orderId) {
    console.log("Invalid order ID", orderId);
    return;
  }
  let orderDetails;
  setTimeout(() => {
    console.log("Fetched order details for order ID:", orderId);
    orderDetails = { orderId, status: "Processed" };
  }, 1000);

  return orderDetails;
};

// As you can see this code did not behave as expected
let initOrderId = 100;
const newOrder = processOrderNotWorking(initOrderId);
console.log("Order details:", newOrder);

// --------------------------------------------------------------------
// PROMISES
// --------------------------------------------------------------------

const processOrderAwait = async (orderId) => {
  //Handle error [1 Mark]
  if (!orderId) {
    console.log("Invalid order ID", orderId);
    return;
  }
  const orderDetails = await processOrderPromise(orderId);
  console.log("Async order details:", orderDetails);
  //[HINT]: Use the promise from processOrderPromise [1 Mark]
  //[NOTE]: You do not have to return any value, console log here
};

processOrderAwait(200);
processOrderAwait();
