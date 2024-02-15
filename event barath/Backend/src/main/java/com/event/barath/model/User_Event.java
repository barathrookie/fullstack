package com.event.barath.model;

import static jakarta.persistence.GenerationType.UUID;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Event_details")
public class User_Event {
    @Id
    @GeneratedValue(strategy = UUID)
    private String eventId;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private String eventName;

    @Column(nullable = false)
    private Double payment;
}
