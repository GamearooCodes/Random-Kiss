const fetch = require("node-fetch");

exports.printMsg = function () {
  console.log("This is a message from the demo package");
};

exports.kissmsg = function (user, user2, msg) {
  if (!msg) msg = "kissed";
  return `${user} ${msg} ${user2}!`;
};

exports.kissimg = async function () {
  const { url } = await fetch("http://ram.gamearoo.top/api/kiss")
    .then((response) => response.json())
    .catch((err) => {
      return `http://ram.gamearoo.top/api is not responding!`;
    });
  return `${url}`;
};

exports.test = async function () {
  console.log(`This is a test log! \n Msg ${kissmsg}! \n image: ${kissimg}`)
}
