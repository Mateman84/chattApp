package com.example.demo.controllers;


import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/users/who-am-i")
    public User whoAmI(){
        return userService.findCurrentUser();
    }

    @PostMapping("/users/register")
    public User registerUSer(@RequestBody User user){
        return userService.registerUser(user);
    }

}
