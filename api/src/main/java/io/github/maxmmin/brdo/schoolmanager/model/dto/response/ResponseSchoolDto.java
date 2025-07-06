package io.github.maxmmin.brdo.schoolmanager.model.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder
@RequiredArgsConstructor
public class ResponseSchoolDto {
    private final Long id;
    private final String name;
    private final String edrpou;
    private final String region;
    private final String type;
    private final Boolean active;
}
