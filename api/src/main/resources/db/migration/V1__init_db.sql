CREATE TABLE schools (
                         id BIGSERIAL PRIMARY KEY,
                         edrpou VARCHAR NOT NULL,
                         region VARCHAR NOT NULL,
                         type varchar(64) NOT NULL CHECK (type IN ('GYMNASIUM', 'LYCEUM', 'SECONDARY_SCHOOL')),
                         is_active BOOLEAN NOT NULL DEFAULT TRUE
);