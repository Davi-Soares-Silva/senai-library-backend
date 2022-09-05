import { MultipleFilesModel } from "@/domain/models/file";

export const getFileNamesFromRequest = (files: MultipleFilesModel) =>  {
  console.log(files);

    const imageNames = Object.keys(files);


    const images = imageNames.map((imageName: string) => {
        return {[imageName]: files[imageName][0].filename}
      })

    return images.reduce((acc, curr)  => {
      return {
        ...acc,
        ...curr,
      }
    }, {})
}