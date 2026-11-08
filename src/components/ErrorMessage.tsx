export default function ErrorMessage({ message }: { message: string }) {
    if(!message) return null;
    return(
        <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3">
            {message}
        </div>
    );
}