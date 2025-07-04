package io.github.maxmmin.brdo.schoolmanager.service;

import io.github.maxmmin.brdo.schoolmanager.model.entity.School;
import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import org.springframework.data.jpa.domain.Specification;

public class SchoolSpecifications {
    public static Specification<School> typeIs(SchoolType type) {
        return (root, query, cb) -> cb.equal(root.get("type"), type);
    }

    public static Specification<School> regionIs(String region) {
        return (root, query, cb) -> cb.equal(root.get("region"), region);
    }

    public static Specification<School> activeIs(boolean value) {
        return (root, query, cb) -> cb.equal(root.get("active"), value);
    }
}
