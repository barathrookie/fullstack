package com.event.barath.service;



import com.event.barath.dto.request.UserRequest;
import com.event.barath.dto.response.BasicResponse;
import com.event.barath.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

    BasicResponse<UserResponse> getById(String userId);

    
    UserResponse updateUser(String userId, UserRequest userRequest);

    UserResponse  deleteUser(String userId);
    
    

   

}
