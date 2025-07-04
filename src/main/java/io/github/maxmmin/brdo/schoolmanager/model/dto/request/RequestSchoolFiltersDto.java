package io.github.maxmmin.brdo.schoolmanager.model.dto.request;

import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RequestSchoolFiltersDto {
    private String region;
    private Boolean active;
    private SchoolType type;
}
