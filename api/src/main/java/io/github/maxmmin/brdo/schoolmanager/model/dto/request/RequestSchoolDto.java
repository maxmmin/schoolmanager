package io.github.maxmmin.brdo.schoolmanager.model.dto.request;

import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RequestSchoolDto {
    private @NotBlank String edrpou;
    private @NotBlank String region;
    private @NotNull SchoolType type;
}
