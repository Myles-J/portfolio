export default function Loading() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<div className="flex items-center justify-center">
				<div className="h-32 w-32 animate-spin rounded-full border-slate-200 border-t-2 border-b-2" />
			</div>
		</div>
	);
}
