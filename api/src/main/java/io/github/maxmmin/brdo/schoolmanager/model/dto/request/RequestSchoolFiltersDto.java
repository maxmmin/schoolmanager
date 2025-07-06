package io.github.maxmmin.brdo.schoolmanager.model.dto.request;

import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import lombok.*;

@Data
public class RequestSchoolFiltersDto {
    private String region;
    private Boolean active;
    private SchoolType type;
}
