import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

export async function getPictureImagesUrls(productId: string) {
  const storage = getStorage();
  const path = `images/${productId}/`;
  const listResult = await listAll(ref(storage, path));

  const imageUrls = await Promise.all(
    listResult.items.map(async (imgRef) => {
      const imageUrl = await getDownloadURL(imgRef);
      return { url: imageUrl };
    })
  );

  return imageUrls;
}
