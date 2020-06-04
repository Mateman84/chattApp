package com.example.demo.repositories;

import com.example.demo.entities.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends CrudRepository<Message, Integer> {
    public Message findById(int id);
    public List<Message> findByChannelId(int channel_id); //SELECT * FROM messages WHERE channel_id
}
