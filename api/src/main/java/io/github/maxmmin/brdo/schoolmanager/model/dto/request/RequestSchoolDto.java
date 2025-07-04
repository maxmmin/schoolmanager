package io.github.maxmmin.brdo.schoolmanager.model.dto.request;

import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RequestSchoolDto {
    private Long id;
    private String edrpou;
    private String region;
    private SchoolType type;
    private Boolean active;
}
