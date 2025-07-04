package io.github.maxmmin.brdo.schoolmanager.model.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.function.Function;

@Getter
@RequiredArgsConstructor
@Builder
public class ResponsePage<E> {
    private final Integer number;
    private final Integer size;
    private final Integer elements;
    private final List<E> content;
    private final Long totalElements;
    private final Integer totalPages;

    public <V> ResponsePage<V> map(Function<E, V> mapper) {
        return new ResponsePage<>(number, size, elements, content.stream().map(mapper).toList(), totalElements, totalPages);
    }

    public ResponsePage(Page<E> page) {
        number = page.getNumber();
        size = page.getSize();
        elements = page.getNumberOfElements();
        content = page.getContent();
        totalElements = page.getTotalElements();
        totalPages = page.getTotalPages();
    }
}
