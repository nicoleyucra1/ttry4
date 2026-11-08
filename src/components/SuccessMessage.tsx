export default function SuccessMessage({ message }: { message: string }) {
    if(!message) return null;
    return(
        <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg px-4 py-3">
            {message}
        </div>
    );
}