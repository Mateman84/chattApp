package com.example.demo.controllers;

        import com.example.demo.entities.Message;
        import com.example.demo.services.MessageService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/rest")
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping("/messages")
    public List<Message> getAllMessages() {
        return messageService.findAllMessages();
    }

    @GetMapping("/messages/{id}")
    public List<Message> getAllMessagesForChannel(@PathVariable int id){
        return messageService.findAllMessagesForChannel(id);
    }

    @PostMapping("/messages")
    public Message sendMessage(@RequestBody Message message){
        return messageService.addMessage(message);
    }
}
