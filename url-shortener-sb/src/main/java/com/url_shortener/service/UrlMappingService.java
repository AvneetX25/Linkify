package com.url_shortener.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.url_shortener.dtos.ClickEventDto;
import com.url_shortener.dtos.UrlMappingDto;
import com.url_shortener.models.ClickEvent;
import com.url_shortener.models.UrlMapping;
import com.url_shortener.models.Users;
import com.url_shortener.repository.ClickEventRepository;
import com.url_shortener.repository.UrlMappingRepository;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UrlMappingService {
    private UrlMappingRepository urlMappingRepository;
    private ClickEventRepository clickeventRepository;
    public UrlMappingDto createShortUrl(String originalUrl, Users user) {
        String shortUrl = generateShortUrl();

        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);

        urlMapping.setUser(user);
        urlMapping.setCreatedDate(LocalDateTime.now());
        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);
        return convertToDto(savedUrlMapping);
    }

    private UrlMappingDto convertToDto(UrlMapping urlMapping){
        UrlMappingDto urlMappingDto = new UrlMappingDto();
        urlMappingDto.setId(urlMapping.getId());
        urlMappingDto.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDto.setShortUrl(urlMapping.getShortUrl());

        urlMappingDto.setClickCount(urlMapping.getClickCount());
        urlMappingDto.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingDto.setUsername(urlMapping.getUser().getUsername());
        return  urlMappingDto;
    }

    private String generateShortUrl() {
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        Random random = new Random();
        StringBuilder shortUrl = new StringBuilder(8);
        for(int i=0;i<8;i++){
            shortUrl.append(chars.charAt(random.nextInt(chars.length())));
        }

        return shortUrl.toString();
    }

    public List<UrlMappingDto> getUrlsByUsername(Users user) {
        return urlMappingRepository.findByUser(user).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<ClickEventDto> getClickEventsByDate(String shortUrl, LocalDateTime start, LocalDateTime end) {
        UrlMapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
        if(urlMapping!=null){
            return clickeventRepository.findByUrlMappingAndClickDateBetween(urlMapping,start,end).stream()
                    .collect(Collectors.groupingBy(click-> click.getClickDate().toLocalDate(),Collectors.counting()))
                    .entrySet().stream()
                    .map(entry ->{
                        ClickEventDto clickEventDto = new ClickEventDto();
                        clickEventDto.setClickDate(entry.getKey());
                        clickEventDto.setCount(entry.getValue());
                        return  clickEventDto;
                    })
                    .collect(Collectors.toList());
        }
        return null;
    }


    public Map<LocalDate, Long> getTotalClicksByUserAndDate(Users user, LocalDate start, LocalDate end) {
        List<UrlMapping> urlMappings = urlMappingRepository.findByUser(user);
        List<ClickEvent> clickEvents = clickeventRepository.findByUrlMappingInAndClickDateBetween(urlMappings,start.atStartOfDay(),end.plusDays(1).atStartOfDay());
        return clickEvents.stream()
                .collect(Collectors.groupingBy(click -> click.getClickDate().toLocalDate(),Collectors.counting()));
    }

    public UrlMapping getOriginalUrl(String shortUrl) {
        UrlMapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
        if(urlMapping!=null){
            urlMapping.setClickCount(urlMapping.getClickCount()+1);
            urlMappingRepository.save(urlMapping);

            //Record Click Event
            ClickEvent clickEvent = new ClickEvent();
            clickEvent.setClickDate(LocalDateTime.now());
            clickEvent.setUrlMapping(urlMapping);
            clickeventRepository.save(clickEvent);
        }
        return urlMapping;

    }


}
