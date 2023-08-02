import jwt from "jsonwebtoken"

//if a user like button then this middleware come first it confirm that this user going to like button then it goes to like functionality

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Checking ut is actually a user 
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret); //give username and id of a person through jason web token

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;  //For Google Auth
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;