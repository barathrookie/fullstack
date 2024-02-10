package com.event.barath.controller;

import static com.event.barath.Utils.MyConstant.USER;
import static com.event.barath.Utils.MyConstant.USERLIST;
import static com.event.barath.Utils.MyConstant.USERUPDATE;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.barath.Utils.MyConstant;
import com.event.barath.dto.request.UserRequest;
import com.event.barath.dto.response.BasicResponse;
import com.event.barath.dto.response.UserResponse;
import com.event.barath.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor

public class UserController {
    private final UserService userService; 
    @GetMapping(USERLIST)
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response = userService.getAllUser();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.USERGETID)
public ResponseEntity<BasicResponse<UserResponse>> getById(@PathVariable String getId){
    BasicResponse<UserResponse> response=new BasicResponse<>();
    try{
        response = userService.getById(getId); // Pass the required argument
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    catch(Exception e){
        response.setMessage("Something went wrong!");
        return new ResponseEntity<>(response, EXPECTATION_FAILED);
    }
}



 @PutMapping(USERUPDATE)
    public ResponseEntity<UserResponse> updateUser(@PathVariable String userId, @RequestBody UserRequest userRequest) {
        UserResponse response=userService.updateUser(userId, userRequest);
        
        // EventResponse response = userService.updateUser(userId, userRequest);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping(MyConstant.USERDELETE)
    public ResponseEntity<UserResponse> deleteUser(@PathVariable String userId) {
        UserResponse response=userService.deleteUser(userId);
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    
}
