package io.github.maxmmin.brdo.schoolmanager.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class InMemoryRegionProvider implements RegionProvider {
    private final List<String> regions = List.of(
            "Вінницька область",
            "Волинська область",
            "Дніпропетровська область",
            "Донецька область",
            "Житомирська область",
            "Закарпатська область",
            "Запорізька область",
            "Івано-Франківська область",
            "Київська область",
            "Кіровоградська область",
            "Луганська область",
            "Львівська область",
            "Миколаївська область",
            "Одеська область",
            "Полтавська область",
            "Рівненська область",
            "Сумська область",
            "Тернопільська область",
            "Харківська область",
            "Херсонська область",
            "Хмельницька область",
            "Черкаська область",
            "Чернівецька область",
            "Чернігівська область",
            "Автономна Республіка Крим"
    );

    @Override
    public List<String> getAllRegions() {
        return regions;
    }
}
