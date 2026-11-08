export type Tone = 'green' | 'red' | 'yellow' | 'blue' | 'gray';

const tones: Record<Tone, string> = {
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-gray-100 text-gray-700',
};

export default function Badge({text, tone}: {text:string, tone: Tone}){
    return(
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${tones[tone]}`}>
            {text}
        </span>
    )
}