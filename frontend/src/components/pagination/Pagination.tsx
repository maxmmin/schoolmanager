import React, { useState } from "react";
import "./Pagination.scss";

type PaginationProps = {
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
    setPage: (page: number) => void;
    setSize: (size: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                   totalElements,
                                                   totalPages,
                                                   page,
                                                   size,
                                                   setPage,
                                                   setSize,
                                               }) => {
    const [inputPage, setInputPage] = useState(page + 1);

    const onChangePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setInputPage(val);
    };

    const goToPage = () => {
        if (inputPage > 0 && inputPage < totalPages) {
            setPage(inputPage - 1);
        } else setInputPage(page + 1);
    };

    return (
        <div className={"pagination-container"}>
            <div className={"pagination-container__page-number-selector"}>
                <button disabled={page <= 0} onClick={() => setPage(page - 1)} type="button">
                    Назад
                </button>

                <p style={{"margin": 0}}>Сторінка</p>

                <input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={inputPage}
                    onChange={onChangePageInput}
                    onBlur={goToPage}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            goToPage();
                            e.currentTarget.blur();
                        }
                    }}
                />

                <span> / {totalPages}</span>

                <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)} type="button">
                    Вперед
                </button>
            </div>

            <div className={"pagination-container__page-size-selector"}>
                <label>
                    Кількість на сторінку:{" "}
                    <select value={size} onChange={(e) => {
                        setPage(0);
                        setSize(Number(e.target.value));
                    }}>
                        {[5, 10, 20, 50].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <p className="pagination-container__total-records">
                Всього записів: {totalElements}
            </p>
        </div>
    );
};