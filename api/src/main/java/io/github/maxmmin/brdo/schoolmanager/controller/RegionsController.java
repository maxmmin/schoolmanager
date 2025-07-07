package io.github.maxmmin.brdo.schoolmanager.controller;

import io.github.maxmmin.brdo.schoolmanager.service.RegionProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/regions")
@RequiredArgsConstructor
public class RegionsController {
    private final RegionProvider regionProvider;

    @GetMapping("")
    public List<String> getAllRegions() {
        return regionProvider.getAllRegions();
    }
}
