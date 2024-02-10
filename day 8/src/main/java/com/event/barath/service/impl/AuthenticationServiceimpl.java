package com.event.barath.service.impl;

import static com.event.barath.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.event.barath.Repository.UserRepository;
import com.event.barath.Utils.JwtUtil;
import com.event.barath.dto.request.LoginRequest;
import com.event.barath.dto.request.RegisterRequest;
import com.event.barath.dto.response.LoginResponse;
import com.event.barath.dto.response.RegisterResponse;
import com.event.barath.model.User;
import com.event.barath.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationServiceimpl implements AuthenticationService {
    

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;


    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
        if (isUserExists.isPresent()) {
            return RegisterResponse.builder().message("user with mail id"+request.getEmail()+" is already registered").build();
        }

        var user=User.builder()
        .name(request.getName())
        .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
        userRepository.save(user);

        return RegisterResponse.builder().message("User Created successfully").build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token=jwtUtil.generateToken(user);
        System.out.println(token);
        return LoginResponse.builder()
            .message("User Login Successfully")
            .token(token)
            .build();
    }

}
