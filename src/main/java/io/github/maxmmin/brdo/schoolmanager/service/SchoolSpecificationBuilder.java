package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.model.dto.request.RequestSchoolFiltersDto;
import io.github.maxmmin.brdo.schoolmanager.model.entity.School;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class SchoolSpecificationBuilder {
    public Specification<School> build(RequestSchoolFiltersDto filters) {
        // since Specification.where() method is deprecated and Specification.unrestricted() is not met yet in this version of spring data
        // I use this workaround
        // (it's exactly the code from Specification.unrestricted() - https://github.com/spring-projects/spring-data-jpa/blob/dc854df7412d3a0dbe71bc05c440bcb152039e46/spring-data-jpa/src/main/java/org/springframework/data/jpa/domain/Specification.java#L61
        Specification<School> specification = (root, query, builder) -> null;
        if (filters.getRegion() != null) specification = specification.and(SchoolSpecifications.regionIs(filters.getRegion()));
        if (filters.getActive() != null) specification = specification.and(SchoolSpecifications.activeIs(filters.getActive()));
        if (filters.getType() != null) specification = specification.and(SchoolSpecifications.typeIs(filters.getType()));
        return specification;
    }
}
