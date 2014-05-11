(function () {
  var bitcore = require('bitcore');
  var RpcClient = bitcore.RpcClient;
  var rpc = new RpcClient(Config.rpc);

  rpc.getBalance(function(err, ret) {
    if (err) {
      console.error('error occured');
      console.error(err);
      return;
    }
    var balance = ret.result;
    chrome.browserAction.setBadgeText({'text': String(balance)});
    $("td.btc").text(balance);
    $("td.usd").text(balance * 447);
    $("td.inr").text(balance * 447 * 60);
  });
})();
