import Gallery from "@/app/components/Gallery";

type Props = {
    params: {
        myParams?: string[]; // Optional array of strings
    };
};

// Generate metadata dynamically based on the params
export function generateMetadata({ params: { myParams } }: Props) {
    const topic = myParams?.[0] ?? "curated";
    const page = myParams?.[1] ?? "1";
    return {
        title: `Results for ${topic} - Page ${page}`,
    };
}

// Render the Gallery component with topic and page as props
export default function SearchResults({ params: { myParams } }: Props) {
    const topic = myParams?.[0] ?? "curated";
    const page = myParams?.[1] ?? "1";
    return <Gallery topic={topic} page={page} />;
}
