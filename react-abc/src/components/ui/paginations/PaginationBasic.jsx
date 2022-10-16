import React from "react";
import classes from "./PaginationBasic.module.css";
import {getPagesArray} from "../../../utils/pages";

const PaginationBasic = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);

    return <div className={classes.page__wrapper}>
        {pagesArray.map(p => (
            <button
                onClick={() => changePage(p)}
                className={page === p ? [classes.page, classes.page__current].join(' ') : classes.page} key={p}
            >
                {p}
            </button>
        ))}
    </div>
};

export default PaginationBasic;
