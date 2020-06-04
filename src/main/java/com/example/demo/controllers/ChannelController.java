package com.example.demo.controllers;


import com.example.demo.entities.Channel;
import com.example.demo.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class ChannelController {

    @Autowired
    ChannelService channelService;

    @GetMapping("/channels")
    public List<Channel> getAllChannels(){
        return channelService.findAllChannels();
    }
    @GetMapping("/channels/{id}")
    public Channel getOneChannel(@PathVariable int id){
        return channelService.joinChannel(id);
    }

    //Koden nedan ledde till lösningen som jag bråkat med länge. Jag kunde inte lägga till en ny kanal på grund av "Null constraint på name.

    @PostMapping("/channels/{name}")
    public Channel addChannel(@RequestBody Channel channel, @PathVariable String name){
        return channelService.addChannel(name);
    }
}
