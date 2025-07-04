package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponseSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.entity.School;
import org.springframework.stereotype.Service;

@Service
public class SchoolDtoMapper {
    public School mapToEntity(RequestSchoolDto requestSchoolDto) {
        School school = new School();
        school.setId(requestSchoolDto.getId());
        school.setType(requestSchoolDto.getType());
        school.setRegion(requestSchoolDto.getRegion());
        school.setActive(requestSchoolDto.getActive());
        school.setEdrpou(requestSchoolDto.getEdrpou());
        return school;
    }

    public ResponseSchoolDto mapToResponse(School school) {
        return ResponseSchoolDto.builder()
                .id(school.getId())
                .type(school.getType().name())
                .region(school.getRegion())
                .active(school.isActive())
                .edrpou(school.getEdrpou())
                .build();
    }
}
