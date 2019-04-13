// const fs   = require('fs');
// const jwt   = require('jsonwebtoken');

// // use 'utf8' to get string instead of byte array  (512 bit key)
// var privateKEY  = fs.readFileSync('./services/private.key', 'utf8');
// var publicKEY  = fs.readFileSync('./services/public.key', 'utf8');

// module.exports = {
//  sign: async (payload, $Options) => {
//   /*
//    sOptions = {
//     issuer: "Authorizaxtion/Resource/This server",
//     subject: "iam@user.me", 
//     audience: "Client_Identity" // this should be provided by client
//    }
//   */
//   // Token signing options
//   var signOptions = {
//       issuer:  $Options.issuer,
//       subject:  $Options.subject,
//       audience:  $Options.audience,
//       expiresIn:  "30d",    // 30 days validity
//       algorithm:  "RS256"    
//   };
//   return await jwt.sign(payload, privateKEY, signOptions);
// },
// verify: (token, $Option) => {
//   /*
//    vOption = {
//     issuer: "Authorization/Resource/This server",
//     subject: "iam@user.me", 
//     audience: "Client_Identity" // this should be provided by client
//    }  
//   */
//   var verifyOptions = {
//       issuer:  $Option.issuer,
//       subject:  $Option.subject,
//       audience:  $Option.audience,
//       expiresIn:  "30d",
//       algorithm:  ["RS256"]
//   };
//    try{
//      return jwt.verify(token, publicKEY, verifyOptions);
//    }catch (err){
//      return false;
//    }
// },
//  decode: (token) => {
//     return jwt.decode(token, {complete: true});
//     //returns null if token is invalid
//  }
// }

const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt; 

const secret = `
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTUxNzg5MjgsImV4cCI6MTU4NjcxNDkyOCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.xRpOLMcFbFv53QT81vO6w5Ytdj6AGK-gvKAMve53hCr1ul-ZT4y8s0n-U0_ux51VoPcy5ehmouzCiMJP6PWb4w
  `;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

const payload = { id: 10};

const token = async (req, res) => {
  let data = await jwt.sign(payload, secret);
  return data;
}

module.exports = {token}