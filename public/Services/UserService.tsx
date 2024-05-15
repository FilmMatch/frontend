import RequestMaker from "../Utils/RequestMaker";
import type ResponseObject from "../Utils/Response";

class UserService{

    static async login(mail: string, password:string): Promise<ResponseObject>{
        return await RequestMaker.post("login", {'email': mail,  'password': password});
    }



}

export default UserService;