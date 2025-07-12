package com.url_shortener.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.aot.generate.Generated;

@Entity
@Data
@Table(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String email;

    private String password;

    private String role = "ROLE_USER";

    public Long getId() { return id; }

}

