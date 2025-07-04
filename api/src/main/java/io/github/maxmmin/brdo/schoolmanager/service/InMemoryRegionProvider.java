package io.github.maxmmin.brdo.schoolmanager.service;

import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class InMemoryRegionProvider implements RegionProvider {
    private final Set<String> regions = Set.of(
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

    public Set<String> getAllRegions() {
        return regions;
    }
}
