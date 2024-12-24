import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
    try {
        //next.js has extended fetch; look up uses
        const res = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })
        if (!res.ok) throw new Error("Fetch Images Error!\n")

        const imagesResults: ImagesResults = await res.json()

        console.log("API Response:", imagesResults)

        // parse data with zod schema

        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)
        console.log("Validated Data:", parsedData);


        if (parsedData.total_results === 0) return undefined
    
        return parsedData
    } catch (e) {
        //will show in terminal

        //if (e instanceof Error) console.log(e.stack)
        
        if (e instanceof Error) {
            console.error("Error:", e.message);
            if ("issues" in e) console.error("Validation Issues:", (e as any).issues);
        }
        
    }
}