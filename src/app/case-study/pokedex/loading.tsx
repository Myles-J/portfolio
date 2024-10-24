export default function PokedexLoading() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-200" />
			</div>
		</div>
	);
}
