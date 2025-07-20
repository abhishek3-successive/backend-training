import  Jwt  from "jsonwebtoken";
import { Request , Response  } from "express";

interface User{
    id : number,
    username : string,
    password : string
}

interface AuthRequest extends Request{
    user ?:any ;
}

// Mock user data

const users : User[] = [
    {id : 1 , username :'GG', password : 'pass123'},
    {id : 2 , username : "Goku", password : 'pass234'}
];
const login = (req : Request , res : Response) => {
    const {username , password} = req.body;

    if(!username || !password){
        return res.status(400).json({message : 'username and password are required'})
    }

    const user = users.find(u=> u.username === username && u.password === password);

    if(!user){
        return res.status(400).json({message : 'Invalid Credentials'});
    }

    const secret = 'secretkey'

    const tokken = Jwt.sign(
        {id : user.id , username : user.username },
        secret,
        {expiresIn : '1m'}
    );
    res.json({
        message : 'Login Successfully',
        tokken,
        user : { id : user.id , username : user.username}
})
};

const getUserProfile = (req : AuthRequest, res : Response) => {
    // req.user is pop by auth middlware

    res.json({
        message : 'user profile retrieved succesfully',
        user : req.user
    })
}

const createUser = (req : Request , res : Response)=>{
    const {username , password} = req.body;

    if (!username || !password){
        return res.status(400).json({message : "Username and password is required"});
    }

    //check if user exist

    const existingUser = users.find(u => u.username === username)
    if(existingUser){
        return res.status(400).json({message : 'User already exists'});
    }

    const newUser : User = {
        id : users.length + 1,
        username,
        password
    };

    users.push(newUser)

    res.status(201).json({
      user : {id : newUser.id , username : newUser.username }  
    });
}

export {
    login,
    getUserProfile,
    createUser
}