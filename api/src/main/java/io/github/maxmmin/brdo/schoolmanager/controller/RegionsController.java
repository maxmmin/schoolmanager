package io.github.maxmmin.brdo.schoolmanager.controller;

import io.github.maxmmin.brdo.schoolmanager.service.RegionProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/v1/schools")
@RequiredArgsConstructor
public class RegionsController {
    private final RegionProvider regionProvider;

    @GetMapping("")
    public Set<String> getAllRegions() {
        return regionProvider.getAllRegions();
    }
}
