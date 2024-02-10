package com.event.barath.config;

import static com.event.barath.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.event.barath.Repository.UserRepository;
import com.event.barath.model.User;

import lombok.RequiredArgsConstructor;


@Component  //creating a container inside spring bean
@RequiredArgsConstructor //final key word
@SuppressWarnings("")
public class UserCLI implements CommandLineRunner {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count()>0) 
            return;
        
        var user=User.builder() //import user from usermodel
            .name("Krishnasarathy")
            .email("ksadmin@gmail.com")
            .password(passwordEncoder.encode("Ks@123"))
            .role(ADMIN)
            .build();
        
        userRepository.save(user);
    }
}
