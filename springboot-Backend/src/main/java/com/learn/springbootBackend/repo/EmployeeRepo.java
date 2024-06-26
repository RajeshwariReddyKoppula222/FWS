package com.learn.springbootBackend.repo;

import com.learn.springbootBackend.mode.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
}
