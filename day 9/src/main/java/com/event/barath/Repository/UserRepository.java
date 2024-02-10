package com.event.barath.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.barath.model.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String username);
    Optional<User> findById(String userId);
    
}
