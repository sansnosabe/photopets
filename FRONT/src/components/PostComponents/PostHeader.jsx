import React from "react";

import { formatDistanceToNow, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { es } from "date-fns/locale";

export function PostHeader({ owner, createdAt, profileImage }) {
	const parsedDate = parseISO(createdAt);
	const zonedDate = utcToZonedTime(parsedDate, "Etc/GMT-1");
	const formattedDate = formatDistanceToNow(zonedDate, { locale: es })

	return (
		<div className="flex items-center space-x-1 pb-3 pl-1">
			<img className="w-10 h-10 rounded-full object-cover" src={`${import.meta.env.VITE_BACKEND}/public/${profileImage}`} alt="" />
			<p className="text-black text-sm font-medium">{owner}</p>
			<p className="text-sm font-medium">· {formattedDate} </p>
		</div>
	);
}
