package com.event.barath.Repository;

import java.util.Optional;
import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.barath.model.Event;


public interface EventRespository extends JpaRepository<Event,String>{
    Optional<Event> findByEventId(String eventId);
    void deleteByEventId(String eventId);
    List<Event> findAll();
}
