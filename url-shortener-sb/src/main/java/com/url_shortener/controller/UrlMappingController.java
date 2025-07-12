package com.url_shortener.controller;

import com.url_shortener.dtos.ClickEventDto;
import com.url_shortener.dtos.UrlMappingDto;
import com.url_shortener.models.ClickEvent;
import com.url_shortener.models.Users;
import com.url_shortener.service.UrlMappingService;
import com.url_shortener.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {
    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingDto> createShortUrl(@RequestBody Map<String,String> request, Principal principal){
        String originalUrl = request.get("originalUrl");
        Users user = userService.findByUsernme(principal.getName());
        UrlMappingDto urlMappingDto = urlMappingService.createShortUrl(originalUrl,user);
        return ResponseEntity.ok(urlMappingDto);
    }

    @GetMapping("/myUrls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDto>> getUserUrls(Principal principal){
        Users user = userService.findByUsernme(principal.getName());
        List<UrlMappingDto> urls = urlMappingService.getUrlsByUsername(user);
        return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDto>> getUrlAnalytics(@PathVariable String shortUrl
            , @RequestParam("startDate") String startDate
    , @RequestParam("endDate") String endDate){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDate,dateTimeFormatter);
        LocalDateTime end = LocalDateTime.parse(endDate,dateTimeFormatter);
        List<ClickEventDto> clickEventDtos = urlMappingService.getClickEventsByDate(shortUrl,start,end);
        return ResponseEntity.ok(clickEventDtos);
    }


    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate,Long>> getTotalClicksByDate(Principal principal
    ,@RequestParam("startDate") String startDate
            , @RequestParam("endDate") String endDate){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE;
        Users user = userService.findByUsernme(principal.getName());
        LocalDate start = LocalDate.parse(startDate,dateTimeFormatter);
        LocalDate end = LocalDate.parse(endDate,dateTimeFormatter);
        Map<LocalDate,Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user,start,end);
        return ResponseEntity.ok(totalClicks);



    }


}
