package com.example.demo.services;

import com.example.demo.entities.Channel;
import com.example.demo.entities.Message;
import com.example.demo.repositories.ChannelRepo;
import com.example.demo.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ChannelService {

    @Autowired
    ChannelRepo channelRepo;

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    SocketService socketService;

    public List<Channel> findAllChannels(){
        return (List<Channel>) channelRepo.findAll();
    }

    public Channel findCurrentChannel(int id){
        return channelRepo.findById(id);
    }

    public Channel joinChannel(int id){
        Channel channel = channelRepo.findById(id);
        if(channel == null) return null;

        List<Message> messages = messageRepo.findByChannelId(id);
        channel.setMessages(messages);

        return channel;
    }

    public Channel addChannel (String channelName){
        Channel channel = new Channel(channelName);
        try {
            channelRepo.save(channel);
            socketService.sendToAll(channel, Channel.class);
        } catch (Exception e){
            e.printStackTrace();
        }
        return channel;
    }
}

/*public User addUser(String username, String password){
        User user = new User(username, encoder.encode(password));
        try {
            return userRepo.save(user);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
    public User registerUser(User user) {
        return myUserDetailsService.addUser(user.getUsername(), user.getPassword());
    }
    */