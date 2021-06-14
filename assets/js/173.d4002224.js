(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{562:function(e,o,t){"use strict";t.r(o);var a=t(50),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"add-a-bitcoin-compatible-coin-to-agama-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-bitcoin-compatible-coin-to-agama-desktop"}},[e._v("#")]),e._v(" Add a Bitcoin Compatible coin to Agama Desktop")]),e._v(" "),t("p",[e._v("This guide will help you to add Bitcoin compatible coins into Agama desktop wallet. You have to edit the backend part and the UI part to add. Follow the guide carefully.")]),e._v(" "),t("h2",{attrs:{id:"backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend"}},[e._v("#")]),e._v(" Backend")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Add network params "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/bitcoinjs-networks.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/bitcoinjs-networks.js@dev"),t("OutboundLink")],1),e._v(". Make use of isPoS or isZcash flags if applicable in your case.")])]),e._v(" "),t("li",[t("p",[e._v("Add an electrum server "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/electrum-servers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/electrum-servers.js@dev#L1"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add a safe fixed fee (per transaction) "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/fees.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/fees.js@dev#L1"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add an explorer "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L62"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Submit a PR")])])]),e._v(" "),t("h2",{attrs:{id:"ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[e._v("#")]),e._v(" UI")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Drop a 100 x 100 px (better 200 x 200 px) logo into "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/tree/dev/react/src/assets/images/cryptologo/btc",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/assets/images/cryptologo/btc@dev"),t("OutboundLink")],1),e._v(" .")])]),e._v(" "),t("li",[t("p",[e._v("Add your coin name to EN translation file "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/blob/dev/react/src/translate/coins.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/translate/coins.js@dev"),t("OutboundLink")],1),e._v(", look for "),t("code",[e._v("CRYPTO")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add your coin to coins helper file "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/blob/dev/react/src/util/coinHelper.js#L300",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/util/coinHelper.js@dev#L300"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Submit a PR to "),t("code",[e._v("dev")]),e._v(" branch of each repo .")])])]),e._v(" "),t("h2",{attrs:{id:"how-to-get-network-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-network-parameters"}},[e._v("#")]),e._v(" How to get network parameters")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("pubKeyHash: "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L169",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L169"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("scriptHash: "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L170",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L170"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("wif: "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L171",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L171"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("bip32 public: "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L172"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("bip32 private: "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L173",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L173"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("If you can't find "),t("code",[e._v("chainparams.cpp")]),e._v(" in your code base, all of the information and parameters required are normally contained within but not limited to these files (depends on your coin):")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("init.cpp")]),e._v(": "),t("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("base58.h")]),e._v(": "),t("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/base58.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/base58.h"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("chainparamsbase.h")]),e._v(": "),t("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Please make sure the BTC compatible coin is working in Agama before making a PR. Pull requests containing partial information or not working assets/servers will remain unmerged until all requirements are fulfilled.")])])}),[],!1,null,null,null);o.default=r.exports}}]);