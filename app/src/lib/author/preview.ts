import {authors} from "$db/blog";
import {generateSignedUrl} from "$lib/helper/imageUri";

export async function getPreviewAuthors() {
    const authorData = await authors.find({}, {
        projection: {
            name: 1,
            slogan: 1,
            previewImageUri: 1,
            previewImageAlt: 1
        }
    }).toArray();

    // Update each author's previewImageUri
    authorData.forEach(author => {
        author.previewImageUri = generateSignedUrl(author.previewImageUri, "100x100/filters:round_corner(20,255,255,255)");
    });

    return authorData
}