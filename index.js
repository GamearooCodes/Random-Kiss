const fetch = require("node-fetch");

exports.printMsg = function () {
  console.log("This is a message from the demo package");
};

exports.kissmsg = function (user, user2) {
  return `${user} kissed ${user2}!`;
};

exports.kissimg = async function () {
  const { url } = await fetch("http://ram.gamearoo.top/api/kiss")
    .then((response) => response.json())
    .catch((err) => {
      return `http://ram.gamearoo.top/api is not responding!`;
    });
  return `${url}`;
};
