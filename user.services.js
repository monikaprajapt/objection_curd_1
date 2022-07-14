const User = require("../models/user")

module.exports = class UserServices {
    async createUser(data) {  // data is coming from app.js through services.createUser()
        try {
            const newData = await User.query().where({ email: data.email })
            if (newData.length == 0) {
                await User.query().insert(data);
                // console.log(data)
                return { status: "Data Inserted" }
            }
        } catch (err) {
            console.log(err.message)
            return { "error": "Your Data is already exit" }
        }
    }

    //// Read all the inserted Data
    async getUser(id, data) {
        return await User.query()
    }

    //// Read Particular data by your ID
    async particularData(id) {
        const Particular_data = await User.query()
        .where({id})
        if (Particular_data == 0) {
            return {"error": "error while reading a particular data"}
        }
        return Particular_data
    }

    //// Update Particular Data
    async updateUserById (id, newData) {
        const updateCount = await User.query()
        .update(newData)
        .where({id})
        console.log("After Update")
        if (updateCount == 0) {
            return {"error": "error while updating user"}
        }
        return {status: "updated"}
    }


    //// DELETE YOUR PARTICULAR DATA BY ID
    async deleteUserById(id){
        const deleteCount = await User.query().deleteById
        if (deleteCount == 0){
            return {"error": "error while deleting data"}
        }
        return {status: "Data Deleted"}
    }
}; 