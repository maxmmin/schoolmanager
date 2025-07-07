package io.github.maxmmin.brdo.schoolmanager.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class InMemoryRegionProvider implements RegionProvider {
    private final List<String> regions = List.of(
            "Вінницька",
            "Волинська",
            "Дніпропетровська",
            "Донецька",
            "Житомирська",
            "Закарпатська",
            "Запорізька",
            "Івано-Франківська",
            "Київська",
            "Кіровоградська",
            "Луганська",
            "Львівська",
            "Миколаївська",
            "Одеська",
            "Полтавська",
            "Рівненська",
            "Сумська",
            "Тернопільська",
            "Харківська",
            "Херсонська",
            "Хмельницька",
            "Черкаська",
            "Чернівецька",
            "Чернігівська",
            "Автономна Республіка Крим"
    );

    @Override
    public List<String> getAllRegions() {
        return regions;
    }
}
