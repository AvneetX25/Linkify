package com.url_shortener.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int clickCount=0;
    private String originalUrl;
    private String shortUrl;
    private LocalDateTime createdDate;



    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @OneToMany(mappedBy = "urlMapping")
    private List<ClickEvent> clickEvents;

}
