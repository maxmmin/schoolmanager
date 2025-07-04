package io.github.maxmmin.brdo.schoolmanager.repository;

import io.github.maxmmin.brdo.schoolmanager.model.entity.School;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface SchoolRepo extends JpaRepository<School, Long>, JpaSpecificationExecutor<School> {
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM School s WHERE s.id = :id")
    Optional<School> findByIdWithLock(long id);
}
