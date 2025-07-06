package io.github.maxmmin.brdo.schoolmanager.model.dto.request;

import io.github.maxmmin.brdo.schoolmanager.model.entity.SchoolType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RequestSchoolDto {
    private @NotBlank @Size(max = 128) String name;
    private @NotBlank @Size(min = 8, max = 8) String edrpou;
    private @NotBlank @Size(max = 64) String region;
    private @NotNull SchoolType type;
}
