package com.camera.springboot.CameraManagementSystem.repo;

import com.camera.springboot.CameraManagementSystem.model.Camera;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CameraRepository extends MongoRepository<Camera, String> {
    List<Camera> findByNameContaining(String name);
}
