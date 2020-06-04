package com.example.demo.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @Transient
    private List<Message> messages;

    public Channel() {
    }

    public Channel(String name) {
        this.name = name;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getChannelName() {
        return name;
    }

    public void setChannelName(String channelName) {
        this.name = name;
    }
}
