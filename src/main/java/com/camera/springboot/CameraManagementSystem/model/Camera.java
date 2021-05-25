package com.camera.springboot.CameraManagementSystem.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cameras")
public class Camera {
    @Id
    private String id;

    private String name;
    private String model;
    private String resolution;
    private String IP;

    public Camera() {

    }

    public Camera(String id, String name, String model, String resolution, String IP) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.resolution = resolution;
        this.IP = IP;
    }

    public Camera(String name, String description, boolean b) {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public String getIP() {
        return IP;
    }

    public void setIP(String IP) {
        this.IP = IP;
    }

    @Override
    public String toString() {
        return "Camera{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", model='" + model + '\'' +
                ", resolution='" + resolution + '\'' +
                ", IP='" + IP + '\'' +
                '}';
    }
}