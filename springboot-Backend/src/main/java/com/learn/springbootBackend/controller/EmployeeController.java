package com.learn.springbootBackend.controller;

import com.learn.springbootBackend.exception.ResourceNotFoundException;
import com.learn.springbootBackend.mode.Employee;
import com.learn.springbootBackend.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // enable access to frontend application
public class EmployeeController {
    @Autowired
    EmployeeRepo employeeRepo;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepo.findAll();
    }

    @PostMapping("/employee")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepo.save(employee);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> findByID(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(employeeRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("no such element with id "+ id) ));
    }

    //basepath/employess?id=x
    @GetMapping("/employee")
    public ResponseEntity<Employee> findIfID(@RequestParam Long id){

        return ResponseEntity.ok(employeeRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("no such element with id "+ id) ));
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee newEmployee){
        Employee employee = employeeRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("not found "));
        employee.setEmail(newEmployee.getEmail());
        employee.setFname(newEmployee.getFname());
        employee.setLname(newEmployee.getLname());
        employeeRepo.save(employee);
        return ResponseEntity.ok(employee);
    }

    @DeleteMapping("employee/{id}")
    public String deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("not found "));

        employeeRepo.delete(employee);
        return  "successfully Deleted";
    }

}
