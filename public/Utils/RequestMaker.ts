import ResponseObject from "./Response";
import EnvoirmentVariebles from "./constants";


class RequestMaker {

  static async get(endpoint: string): Promise<ResponseObject>{
    const response = await fetch(EnvoirmentVariebles.baseUrl + endpoint);
    const data = await response.json();
    return new ResponseObject(data["response"], data["status"]);
  }

  static async post(endpoint: string, body: any) {
    const response = await fetch(EnvoirmentVariebles.baseUrl + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }    
  );
    const data = await response.json();
    // console.log(data);

    if (response.status > 200) {
      return new ResponseObject(data["detail"], response.status);
    }

    return new ResponseObject(data["response"], response.status);
  }
}

export default RequestMaker;