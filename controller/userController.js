import userModel from "../Models/userModel.js";

export const getAllUsers = async (req,res) => {    
    try {
        //cleaner way to find
        const allUsers = await userModel.find({}, {password: 0});
        res.status(202).json(allUsers);
    } catch (error) {
        console.error('error');
    }
};

export const getUserById = async (req,res) => {    
    try {
        const user = await userModel.findById(req.params.id);
        //destructuring
        const {password, ...remainingUserData} = user._doc;
        res.status(200).json(remainingUserData);
    } catch (error) {
        console.error('error');
    }
};

export const deleteUserById = async (req,res) => {    
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`User is deleted`)
    } catch (error) {
        console.error('error');
    }
};

export const updateUser = async (req, res) => {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

export const deleteAllUsers = async (req,res) => {    
    try {
        await userModel.deleteMany(req.params.id);
        res.status(200).send(`All users are deleted`)
    } catch (error) {
        console.error('error');
    }
};
