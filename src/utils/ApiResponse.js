class ApiResponse{
    constructor(statusCode,success, message="success", data){
        this.statusCode=statusCode;
        this.success=statusCode<400;
        this.message=message;
        this.data=data;
    }

}
export {ApiResponse};