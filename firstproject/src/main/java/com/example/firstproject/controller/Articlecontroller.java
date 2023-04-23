package com.example.demo.controller;

import com.example.demo.dto.ArticleForm;
import com.example.demo.entity.Article;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class Articlecontroller {
    @GetMapping("/articles/register")
    public String newArticleForm(){
        return "articles/register";
    }
    @PostMapping("/articles/create")
    public String CreateArticle(ArticleForm form){
        System.out.println("테스트 출력");
        System.out.println(form.toString());
//        Article 받아와서 dto 를 엔티티로 변환

        Article article = form.toEntity();
        return "";
    }
}
