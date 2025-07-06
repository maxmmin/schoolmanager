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
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
public class SchoolServiceImpl implements SchoolService {
    private final SchoolRepo schoolRepo;
    private final SchoolDtoMapper schoolDtoMapper;
    private final SchoolSpecificationBuilder specificationBuilder;

    @Override
    public ResponsePage<ResponseSchoolDto> getSchools(Pageable pageable, RequestSchoolFiltersDto filters) {
        Specification<School> spec = specificationBuilder.build(filters);
        Page<School> schools = schoolRepo.findAll(spec, pageable);
        return new ResponsePage<>(schools.map(schoolDtoMapper::mapToResponse));
    }

    @Override
    public ResponseSchoolDto createSchool(@Valid RequestSchoolDto schoolDto) {
        School school = schoolDtoMapper.mapToEntity(schoolDto);
        school = schoolRepo.save(school);
        return schoolDtoMapper.mapToResponse(school);
    }

    @Override
    @Transactional
    public void deactivateSchool(long id) {
        School school = schoolRepo.findByIdWithLock(id).orElseThrow(NonExistingEntityOperationException::new);
        if (!school.isActive()) throw new IllegalOperationException("School is already deactivated");
        school.setActive(false);
        schoolRepo.save(school);
    }
}
