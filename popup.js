(function () {
  var bitcore = require('bitcore');
  var RpcClient = bitcore.RpcClient;
  var rpc = new RpcClient(Config.rpc);

  rpc.getBalance('', function(err, ret) {
    if (err) {
      console.error('error occured');
      console.error(err);
      return;
    }
    console.log(ret);
    var bal = document.querySelectorAll('span.balance');
    bal.text = ret.result;
  });
})();
