export function PostLikes({ likes }) {
	return (
		<div className="flex items-center justify-between">
			<p className="text-black text-sm font-medium pt-2 pb-1">{likes} Me gusta</p>
		</div>
	);
}
