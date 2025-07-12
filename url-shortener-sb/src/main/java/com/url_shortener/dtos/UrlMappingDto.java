package com.url_shortener.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UrlMappingDto {
    private String originalUrl;
    private String shortUrl;
    private String username;
    private Long id;
    private LocalDateTime createdDate;
    private  int clickCount;

}
