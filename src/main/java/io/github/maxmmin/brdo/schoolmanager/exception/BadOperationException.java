package io.github.maxmmin.brdo.schoolmanager.exception;

public class BadOperationException extends RuntimeException {
    public BadOperationException() {
    }

    public BadOperationException(String message) {
        super(message);
    }
}
