package io.github.maxmmin.brdo.schoolmanager.controller;

import io.github.maxmmin.brdo.schoolmanager.exception.IllegalOperationException;
import io.github.maxmmin.brdo.schoolmanager.exception.NonExistingEntityOperationException;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class ApplicationExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(NonExistingEntityOperationException.class)
    public ErrorResponse handleNonExistingEntityOperationException(NonExistingEntityOperationException ex) {
        String defaultMsg = "Illegal operation: operation entity seems to not exist";
        return ErrorResponse.builder(ex, HttpStatus.BAD_REQUEST, defaultMsg).build();
    }

    @ExceptionHandler(IllegalOperationException.class)
    public ErrorResponse handleIllegalOperationException(IllegalOperationException ex) {
        String defaultMsg = ex.getMessage();
        if (defaultMsg == null) defaultMsg = "Illegal operation";
        return ErrorResponse.builder(ex, HttpStatus.BAD_REQUEST, defaultMsg).build();
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ErrorResponse handleConstraintViolationException(ConstraintViolationException ex) {
        ErrorResponse.Builder builder = ErrorResponse.builder(ex, HttpStatus.UNPROCESSABLE_ENTITY, "Validation errors were found");
        ex.getConstraintViolations().forEach(violation -> {
            builder.property(violation.getPropertyPath().toString(), violation.getMessage());
        });
        return builder.build();
    }
}
