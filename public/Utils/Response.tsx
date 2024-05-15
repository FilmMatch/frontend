class ResponseObject {
  status: number;
  response: any;

  constructor(response: any, status: number) {
    this.status = status;
    this.response = response;
  }
}

export default ResponseObject;