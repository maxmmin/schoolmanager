package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.exception.IllegalOperationException;
import io.github.maxmmin.brdo.schoolmanager.exception.NonExistingEntityOperationException;
import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolFiltersDto;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponsePage;
import io.github.maxmmin.brdo.schoolmanager.model.dto.response.ResponseSchoolDto;
import io.github.maxmmin.brdo.schoolmanager.model.entity.School;
import io.github.maxmmin.brdo.schoolmanager.repository.SchoolRepo;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
public class SchoolService {
    private final SchoolRepo schoolRepo;
    private final SchoolDtoMapper schoolDtoMapper;
    private final SchoolSpecificationBuilder specificationBuilder;

    public ResponsePage<ResponseSchoolDto> getSchools(Pageable pageable, RequestSchoolFiltersDto filters) {
        Specification<School> spec = specificationBuilder.build(filters);
        if (pageable.getSort().isUnsorted()) pageable = withSort(pageable, Sort.by(Sort.Direction.DESC, "id"));
        Page<School> schools = schoolRepo.findAll(spec, pageable);
        return new ResponsePage<>(schools.map(schoolDtoMapper::mapToResponse));
    }

    public ResponseSchoolDto createSchool(@Valid RequestSchoolDto schoolDto) {
        School school = schoolDtoMapper.mapToEntity(schoolDto);
        school = schoolRepo.save(school);
        return schoolDtoMapper.mapToResponse(school);
    }

    @Transactional
    public void deactivateSchool(long id) {
        School school = schoolRepo.findByIdWithLock(id).orElseThrow(NonExistingEntityOperationException::new);
        if (!school.isActive()) throw new IllegalOperationException("School is already deactivated");
        school.setActive(false);
        schoolRepo.save(school);
    }

    private PageRequest withSort(Pageable pageable, Sort sort) {
        return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), sort);
    }
}
