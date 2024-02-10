package com.event.barath.service;

import com.event.barath.dto.request.LoginRequest;
import com.event.barath.dto.request.RegisterRequest;
import com.event.barath.dto.response.LoginResponse;
import com.event.barath.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
