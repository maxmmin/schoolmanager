package io.github.maxmmin.brdo.schoolmanager.controller;

import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponseSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class SchoolsController {
    private final SchoolService schoolService;

    @PostMapping("/schools")
    public ResponseSchoolDto createSchool(@RequestBody RequestSchoolDto requestSchoolDto) {
        return schoolService.createSchool(requestSchoolDto);
    }

    @PatchMapping("/schools/{id}")
    public void deactivateSchool(@PathVariable("id") long schoolId) {
        schoolService.deactivateSchool(schoolId);
    }
}
