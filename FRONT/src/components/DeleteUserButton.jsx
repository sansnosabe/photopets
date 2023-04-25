export const DeleteUserButton = ({ deleteUser }) => {
	return (
		<button className="text-red-500 pt-5" onClick={deleteUser}>
			Eliminar usuario
		</button>
	);
};
