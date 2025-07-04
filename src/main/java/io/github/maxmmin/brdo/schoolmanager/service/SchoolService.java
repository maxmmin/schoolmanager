package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponseSchoolDto;

public interface SchoolService {

    ResponseSchoolDto createSchool(RequestSchoolDto schoolDto);
    void deactivateSchool(long id);
}
