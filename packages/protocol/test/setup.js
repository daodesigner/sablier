const BigNumber = require("bignumber.js");
const chai = require("chai");
const chaiBigNumber = require("chai-bignumber");

chai.use(chaiBigNumber(BigNumber));
chai.should();
