package com.example.demo.services;

import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    SocketService socketService;

    public List<Message> findAllMessages(){
        return (List<Message>) messageRepo.findAll();
    }

    public List<Message> findAllMessagesForChannel(int id){
        return (List<Message>) messageRepo.findByChannelId(id);
    }

    public Message addMessage(Message message) {
        Message dbMessage = null;
        try {
            dbMessage = messageRepo.save(message);
            socketService.sendToAll(dbMessage, Message.class);
        } catch (Exception e){
            e.printStackTrace();
        }
        return dbMessage;
    }

}
