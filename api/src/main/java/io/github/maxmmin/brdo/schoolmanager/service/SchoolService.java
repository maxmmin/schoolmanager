package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolFiltersDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponsePage;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponseSchoolDto;
import org.springframework.data.domain.Pageable;

public interface SchoolService {
    ResponsePage<ResponseSchoolDto> getSchools(Pageable pageable, RequestSchoolFiltersDto filters);
    ResponseSchoolDto createSchool(RequestSchoolDto schoolDto);
    void deactivateSchool(long id);
}
