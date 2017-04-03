(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.config = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
var configs = {};

//mainnet
configs["mainnet"] = {
  homeURL: 'https://etherdelta.github.io',
  // homeURL: 'http://localhost:8080',
  contractEtherDelta: 'smart_contract/etherdelta.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtherDeltaAddrs: [
    {addr: '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', info: 'Deployed 02/09/2017'},
    {addr: '0x373c55c277b866a69dc047cad488154ab9759466', info: 'Deployed 10/24/2016 -- please withdraw'},
    {addr: '0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65', info: 'Deployed 08/30/2016 -- please withdraw'},
    {addr: '0x2136bbba2edca21afdddee838fff19ea70d10f03', info: 'Deployed 08/03/2016 -- please withdraw'},
    {addr: '0xc6b330df38d6ef288c953f1f2835723531073ce2', info: 'Deployed 07/08/2016 -- please withdraw'}
  ],
  ethTestnet: false,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000123',
  ethAddrPrivateKey: '',
  tokens: [
    {addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xd8912c10681d8b21fd3742244f44658dba12264e', name: 'PLU', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7', name: '1ST', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x936f78b9852d12f5cb93177c1f84fb8513d06263', name: 'GNTW', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x01afc37f4f85babc47c0e2d0eababc7fb49793c8', name: 'GNTM', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xa74476443119a942de498590fe1f2454d7d4ac0d', name: 'GNT', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170', name: 'VSL', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xac709fcb44a43c35f0da4e3163b117a17f3770f5', name: 'ARC', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x14f37b574242d366558db61f3335289a5035c506', name: 'HKG', decimals: 3, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x888666ca69e0f178ded6d75b5726cee99a87d698', name: 'ICN', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5', name: 'REP', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', name: 'SNGLS', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81', name: 'XAUR', decimals: 8, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xc66ea802717bfb9833400264dd12c2bceaa34a6d', name: 'MKR', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    // {addr: '0x569348f5204f0491a137c0b8bd5b0ab72c5a659c', name: 'NEWB', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', name: 'DGD', decimals: 9, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd', name: 'EPOSY', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0', name: 'EPOSN', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413', name: 'DAO', decimals: 16, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x55e7c4a77821d5c50b4570b08f9f92896a25e012', name: 'P+', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x45e42d659d9f9466cd5df622506033145a9b89bc', name: 'NXC', decimals: 3, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6', name: 'DCN', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x01a7018e6d1fde8a68d12f59b6532fb523b6259d', name: 'USD.DC', decimals: 8, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xffad42d96e43df36652c8eaf61a7e6dba2ad0e41', name: 'BTC.DC', decimals: 8, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x949bed886c739f1a3273629b3320db0c5024c719', name: 'AMIS', decimals: 9, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', name: 'SWT', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xf77089f2f00fca83501705b711cbb10a0de77628', name: 'BME', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xb802b24e0637c2b87d2e8b7784c055bbe921011a', name: 'EMV', decimals: 2, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53', name: 'TIME', decimals: 8, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x059d4329078dcA62c521779c0Ce98EB9329349e6', name: 'TIG', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x38124611aC29A3D54EeAaBb63742D5e62a5da0D4', name: 'POWER4', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', name: 'MLN', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x168296bb09e24a88805cb9c33356536b980d3fc5', name: 'RHOC', decimals: 8, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c', name: 'EDG', decimals: 0, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c', name: 'GUP', decimals: 3, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
  ],
  pairs: [
    {token: 'PLU', base: 'ETH'},
    {token: '1ST', base: 'ETH'},
    {token: 'ARC', base: 'ETH'},
    {token: 'GNTW', base: 'ETH'},
    {token: 'GNTM', base: 'ETH'},
    {token: 'NXC', base: 'ETH'},
    {token: 'ICN', base: 'ETH'},
    {token: 'REP', base: 'ETH'},
    {token: 'MLN', base: 'ETH'},
    {token: 'SNGLS', base: 'ETH'},
    {token: 'MKR', base: 'ETH'},
    {token: 'DGD', base: 'ETH'},
    {token: 'SWT', base: 'ETH'},
    {token: 'VSL', base: 'ETH'},
    {token: 'HKG', base: 'ETH'},
    {token: 'XAUR', base: 'ETH'},
    {token: 'TIME', base: 'ETH'},
    {token: 'GUP', base: 'ETH'},
    {token: 'ETH', base: 'USD.DC'},
    {token: 'ETH', base: 'BTC.DC'},
  ],
  ordersOnchain: false,
  gitterHost: 'https://api.gitter.im',
  gitterStream: 'stream.gitter.im',
  gitterToken: '7e7772f3f3b2b715122f0d1789cf173ef49238da',
  gitterRoomID: '57756375c2f0db084a20cf77',
  chatServer: 'https://etherdeltachat.herokuapp.com:443',
  apiServer: 'https://api.etherdelta.com',
  // apiServer: 'http://localhost:3000',
  userCookie: 'EtherDelta',
  eventsCacheCookie: 'EtherDelta_eventsCache',
  deadOrdersCacheCookie: 'EtherDelta_deadOrdersCache',
  ordersCacheCookie: 'EtherDelta_ordersCache',
  defaultToken: 1,
  defaultBase: 0,
  etherscanAPIKey: 'GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE',
};

//testnet
configs["testnet"] = {
  homeURL: 'https://etherdelta.github.io',
  // homeURL: 'http://localhost:8080',
  contractEtherDelta: 'smart_contract/etherdelta.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtherDeltaAddrs: [
    {addr: '0x228344536a03c0910fb8be9c2755c1a0ba6f89e1', info: 'Deployed 02/09/2017'},
    {addr: '0xf80cd360e96fa96b8b7d9e95d5a7911ac5f09ec2', info: 'Deployed 10/24/2016'},
    {addr: '0xcdd152384c55dd4e5b5a3128cc90e0d9311570de', info: 'Deployed 10/06/2016'},
    {addr: '0x24b0ed7ba8d6d969bfe8409b4e6aeee3a40f8855', info: 'Deployed 08/03/2016'},
    {addr: '0x91739eeb4f3600442ea6a42c43f7fa8cd8f78a3d', info: 'Deployed 06/30/2016'},
    {addr: '0x0000000000000000000000000000000000000000', info: 'Zero contract'}
  ],
  ethTestnet: true,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  tokens: [
    {addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18, gasApprove: 150000, gasDeposit: 150000, gasWithdraw: 150000, gasTrade: 250000, gasOrder: 250000},
    {addr: '0x40aade55175aaeed9c88612c3ed2ff91d8943964', name: '1ST', decimals: 18, gasApprove: 250000, gasDeposit: 250000, gasWithdraw: 250000, gasTrade: 250000, gasOrder: 250000},
  ],
  pairs: [
    {token: '1ST', base: 'ETH'},
  ],
  ordersOnchain: false,
  gitterHost: 'https://api.gitter.im',
  gitterStream: 'stream.gitter.im',
  gitterToken: '7e7772f3f3b2b715122f0d1789cf173ef49238da',
  gitterRoomID: '57756375c2f0db084a20cf77',
  chatServer: 'https://etherdeltachat.herokuapp.com:443',
  apiServer: 'https://etherdeltapublicapi.herokuapp.com',
  // apiServer: 'http://localhost:3000',
  userCookie: 'EtherDelta_testnet',
  eventsCacheCookie: 'EtherDelta_eventsCache_testnet',
  deadOrdersCacheCookie: 'EtherDelta_deadOrdersCache_testnet',
  ordersCacheCookie: 'EtherDelta_ordersCache_testnet',
  defaultToken: 0,
  defaultBase: 1,
  etherscanAPIKey: 'GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE',
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//default config
var index = "mainnet"; //mainnet
if (typeof(window)!='undefined') {
  var network = getParameterByName("network");
  if (network) {
    index = network;
  }
} else if (global.network) {
  index = global.network;
}
var config = configs[index];

try {
  global.config = config;
  global.configs = configs;
  module.exports = config;
} catch (err) {}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});