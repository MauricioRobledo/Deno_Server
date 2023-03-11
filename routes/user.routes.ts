import { Router } from "../depts.ts";
import { findUserAll,findUserById,createUser} from "../controller/user.controller.ts";
import { deleteUserById, updateUserById } from "../controller/user.controller.ts";


export const userRouter = new Router()
    .get("/users",findUserAll)
    .get("/users/:id", findUserById)
    .post("/users", createUser)
    .delete("/users/:id",deleteUserById)
    .put("/users/:id",updateUserById)
