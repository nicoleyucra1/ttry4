export default function EmptyState({ text }: { text: string }){
    return (
        <p className="text-center text-gray-500 bg-white border border-dashed border-gray-300 rounded-2xl py-10">
            {text}
        </p>
    )
}