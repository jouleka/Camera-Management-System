package com.camera.springboot.CameraManagementSystem;

import com.camera.springboot.CameraManagementSystem.repo.CameraRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = CameraRepository.class)
@SpringBootApplication
public class CameraManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(CameraManagementSystemApplication.class, args);
	}

}
