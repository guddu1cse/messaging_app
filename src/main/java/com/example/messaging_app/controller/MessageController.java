package com.example.messaging_app.controller;


import com.example.messaging_app.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @MessageMapping("/message")
    @SendTo("/topic/return-to")
    public Message getContent(@RequestBody Message message){

        try{

            Thread.sleep(200);

        } catch (InterruptedException e){
            e.printStackTrace();
        }
        return message;
    }
}
