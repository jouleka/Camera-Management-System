package com.camera.springboot.CameraManagementSystem.controller;

import com.camera.springboot.CameraManagementSystem.model.Camera;
import com.camera.springboot.CameraManagementSystem.repo.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CameraController {

    @Autowired
    CameraRepository cameraRepository;

    @GetMapping("/cameras")
    public ResponseEntity<List<Camera>> getAllCamera(@RequestParam(required = false) String name) {
        try {
            List<Camera> cameras = new ArrayList<Camera>();

            if (name == null)
                cameraRepository.findAll().forEach(cameras::add);
            else
                cameraRepository.findByNameContaining(name).forEach(cameras::add);

            if (cameras.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(cameras, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/cameras/{id}")
    public ResponseEntity<Camera> getCameraById(@PathVariable("id")String id) {
        Optional<Camera> cameraData = cameraRepository.findById(id);

        if (cameraData.isPresent()) {
            return new ResponseEntity<>(cameraData.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/cameras")
    public ResponseEntity<Camera> createCamera(@RequestBody Camera camera) {
        try {
            Camera _camera = cameraRepository.save(camera);
            return new ResponseEntity<>(_camera, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/cameras/{id}")
    public ResponseEntity<Camera> updateCamera(@PathVariable("id")String id, @RequestBody Camera camera) {
        Optional<Camera> cameraData = cameraRepository.findById(id);

        if (cameraData.isPresent()) {
            Camera _camera = cameraData.get();
            _camera.setName(camera.getName());
            _camera.setIP(camera.getIP());
            _camera.setModel(camera.getModel());
            _camera.setResolution(camera.getResolution());
            return new ResponseEntity<>(cameraRepository.save(_camera), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/cameras/{id}")
    public ResponseEntity<HttpStatus> deleteCamera(@PathVariable("id")String id) {
        try {
            cameraRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/cameras")
    public ResponseEntity<HttpStatus> deleteAllCameras() {
        try {
            cameraRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }  catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}