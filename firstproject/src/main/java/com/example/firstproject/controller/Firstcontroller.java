package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Firstcontroller {
    @GetMapping("/main")
    public String body(Model model){
        model.addAttribute("username","손성호");
        return "body";
    }
}
