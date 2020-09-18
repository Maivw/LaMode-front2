import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./pagination.css";

export default function Paginations({ itemsPerPage, totalItems, paginate }) {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul className="pagination">
				{pageNumbers.map((num) => (
					<li key={num} className="pageItem">
						<a onClick={() => paginate(num)} className="pageLink">
							{num}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
