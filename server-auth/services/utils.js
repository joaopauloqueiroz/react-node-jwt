const fs   = require('fs');
const jwt   = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
var privateKEY  = fs.readFileSync('./services/private.key', 'utf8');
var publicKEY  = fs.readFileSync('./services/public.key', 'utf8');

module.exports = {
 sign: async (payload, $Options) => {
  /*
   sOptions = {
    issuer: "Authorizaxtion/Resource/This server",
    subject: "iam@user.me", 
    audience: "Client_Identity" // this should be provided by client
   }
  */
  // Token signing options
  var signOptions = {
      issuer:  $Options.issuer,
      subject:  $Options.subject,
      audience:  $Options.audience,
      expiresIn:  "30d",    // 30 days validity
      algorithm:  "RS256"    
  };
  return await jwt.sign(payload, privateKEY, signOptions);
},
verify: (token, $Option) => {
  /*
   vOption = {
    issuer: "Authorization/Resource/This server",
    subject: "iam@user.me", 
    audience: "Client_Identity" // this should be provided by client
   }  
  */
  var verifyOptions = {
      issuer:  $Option.issuer,
      subject:  $Option.subject,
      audience:  $Option.audience,
      expiresIn:  "30d",
      algorithm:  ["RS256"]
  };
   try{
     return jwt.verify(token, publicKEY, verifyOptions);
   }catch (err){
     return false;
   }
},
 decode: (token) => {
    return jwt.decode(token, {complete: true});
    //returns null if token is invalid
 }
}

/*
  const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt; 

const secret = `
  MIIBOwIBAAJBAIwwEvcnfiUeAoMlxBQF/It4qCYqHNdTz2HNvnkmkUqIZc/5xKo8kLrSJok5Mdt5J3RSrSeYtWMGb0KMJ+Jm1A8CAwEAAQJAQBamRPl4EO30RhKY3nKSLwzdCn2MK+Cz2Ume/3HjUEf3uNXMC7/sxgfikf+ol7aJKY5BZRh1gvh+WCG6nKXGaQIhAMRRx+SlnBPg5LtYwaFnwgowFe7p6GYJjpJOlxIncLO1AiEAts3xt0PUlCTQVjsV+SB1CF22llgO3+jCKbGb8WM5SzMCIBMH3nnCuBORPHsQyoxr83prWOT1Fcs2Z/S0254t5pX1AiEAjWnflVAJwNiBulNW+jPblS85sjBIwXoDydE1u5Rwm/UCIQC5HQkIMgrTsottm8ppMK5J4ytaXwkLdx69jClf+oJMcA==
  `;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

const payload = { id: 10};
const token = jwt.sign(payload, secret);
console.log(token);


  
*/