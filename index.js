const fetch = require("node-fetch");

exports.message = function (user, user2, msg) {
  if (!msg) msg = "kissed";
  return `${user} ${msg} ${user2}!`;
};

const activities_list = [
  `https://gamearoo.top/ram-api-img/k1.gif`,
  `https://gamearoo.top/ram-api-img/k1.gif`,
  "https://gamearoo.top/ram-api-img/k2.gif",
  "https://gamearoo.top/ram-api-img/k3.gif",
  "https://gamearoo.top/ram-api-img/k4.gif",
];
const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

exports.imageurl = activities_list[index];

exports.test = async function () {
  console.log(
    `This is a test log! \n Msg ${message("1", "2")}! \n image: ${imageurl}`
  );
};
