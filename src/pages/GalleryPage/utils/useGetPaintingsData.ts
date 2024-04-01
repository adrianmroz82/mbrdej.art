import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { PaintingData } from "../model/PaintingData";
import { db } from "../../../firebase/config";

export function useGetPaintingsData() {
  const [paintingData, setPaintingData] = useState<PaintingData[]>([]);

  useEffect(() => {
    async function getPaintingsData() {
      const querySnapshot = await getDocs(collection(db, "pictures"));
      const imageData: PaintingData[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as PaintingData;
        imageData.push({ ...data, id: doc.id });
      });

      setPaintingData(imageData);
    }

    getPaintingsData();
  }, []);

  return paintingData;
}
