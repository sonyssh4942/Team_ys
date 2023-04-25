package com.example.demo.dto;

public class ArticleForm {
    private String title;
    private String content;

    public ArticleForm(String input1,String input2){
        this.title=input1;
        this.content=input2;
    }

    @Override
    public String toString() {
        return "ArticleForm{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
