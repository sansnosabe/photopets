import React from "react";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

export function PostHeader({ owner, createdAt }) {
	const formattedDate = moment(createdAt).fromNow();

	return (
		<div className="flex space-x-1">
			<p className="text-black text-sm font-medium mb-2">{owner}</p>
			<p className="text-sm font-medium mb-2">· {formattedDate}</p>
		</div>
	);
}
