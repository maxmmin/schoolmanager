import React, { useState } from "react";

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
    const [inputPage, setInputPage] = useState(page);

    const onChangePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setInputPage(val);
    };

    const goToPage = () => {
        if (inputPage >= 1 && inputPage <= totalPages) {
            setPage(inputPage);
        } else {
            setInputPage(page);
        }
    };

    return (
        <div>
            <div>
                <button disabled={page <= 1} onClick={() => setPage(page - 1)} type="button">
                    Назад
                </button>

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

                <span> / {totalPages} сторінок, всього записів: {totalElements}</span>

                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} type="button">
                    Вперед
                </button>
            </div>

            <div>
                <label>
                    Кількість на сторінку:{" "}
                    <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
                        {[5, 10, 20, 50].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};