(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{539:function(t,e,a){"use strict";a.r(e);var s=a(50),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-03-cc-vins-and-vouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-03-cc-vins-and-vouts"}},[t._v("#")]),t._v(" Chapter 03 - CC vins and vouts")]),t._v(" "),a("p",[t._v("You might want to review the bitcoin basics and other materials to refresh about how bitcoin outputs become inputs. It is a bit complicated, but ultimately it is about one specific amount of coins that are spent, once spent it is combined with the other coins that are also spent in that transaction and then various outputs are created.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vin0 + vin1 + vin2 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vout0 + vout1\n")])])]),a("p",[t._v("That is a 3 input, 2 output transaction. The value from the three inputs are combined and then split into vout0 and vout1, each of the vouts gets a spend script that must be satisfied to be able to be spent. Which means for all three of out vins, all the requirements (as specified in the output that created them) are satisfied.")]),t._v(" "),a("p",[t._v("Yes, I know this is a bit too complicated without a nice chart, so we will hope that a nice chart is added here:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Placeholder text "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nice chart goes here"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Out of all the aspects of the CC contracts, the flexibility that different vins and vouts created was the biggest surprise. When I started writing the first of these a month ago, I had no idea the power inherent in the smart utxo contracts. I was just happy to have a way to lock funds and release them upon some specific conditions.")]),t._v(" "),a("p",[t._v("After the assets/tokens CC contract, I realized that it was just a tip of the iceberg. I knew it was Turing complete, but after all these years of restricted bitcoin script, to have the full power of any arbitrary algorithm, it was eye opening. Years of writing blockchain code and having really bad consequences with every bug naturally makes you gun shy about doing aggressive things at the consensus level. And that is the way it should be, if not very careful, some really bad things can and do happen. The foundation of building on top of the existing (well tested and reliable) utxo system is what makes the CC contracts less likely for the monster bugs. That being said, lack of validation can easily allow an improperly coded CC contract to have its funds drained.")]),t._v(" "),a("p",[t._v("The CC contract breaks out of the standard limitations of a bitcoin transaction. Already, what I wrote explains the reason, but it was not obvious even to me at first, so likely you might have missed it too. If you are wondering what on earth I am talking about, THAT is what I am talking about!")]),t._v(" "),a("p",[t._v("To recap, we have now a new standard bitcoin output type called a CC output. Further, there can be up to 256 different types of CC outputs active on any given blockchain. We also know that to spend any output, you need to satisfy its spending script, which in our case is the signature and whatever constraints the CC validation imposes. We also have the convention of a globally shared keypair, which gives us a general CC address that can have funds sent to it, along with a user pubkey specific CC address.")]),t._v(" "),a("p",[t._v("Let us go back to the 3+2 transaction example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vin0 + vin1 + vin2 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vout0 + vout1\n")])])]),a("p",[t._v("Given the prior paragraph, try to imagine the possibilities the simple 3+2 transaction can be. Each vin could be a normal vin, from the global contract address, the user's CC address and the vouts can also have this range. Theoretically, there can be 257 * 257 * 257 * 257 * 257 forms of a 3+2 transaction!")]),t._v(" "),a("p",[t._v("In reality, we really dont want that much degrees of freedom as it will ensure a large degree of bugs! So we need to reduce things to a more manageable level where there are at most 3 types for each, and preferably just 1 type. That will make the job of validating it much simpler and simple is better as long as we dont sacrifice the power. We dont.")]),t._v(" "),a("p",[t._v("Ultimately the CC contract is all about how it constrains its inputs, but before it can constrain them, they need to be created as outputs. More about this in the CC validation chapter.")])])}),[],!1,null,null,null);e.default=n.exports}}]);