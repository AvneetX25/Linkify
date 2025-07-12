package com.url_shortener.service;

import com.url_shortener.dtos.LoginRequest;
import com.url_shortener.models.Users;
import com.url_shortener.repository.UserRepository;
import com.url_shortener.security.jwt.JwtAutheticationResponse;
import com.url_shortener.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private JwtUtils jwtUtils;
    private AuthenticationManager authenticationManager;

    public Users registerUser(Users user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    public JwtAutheticationResponse loginUser(LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateToken(userDetails);
        return new JwtAutheticationResponse(jwt);

    }


    public Users findByUsernme(String name) {
        return userRepository.findByUsername(name).orElseThrow(
                ()-> new UsernameNotFoundException("User not found with username: "+ name)
        );
    }
}
