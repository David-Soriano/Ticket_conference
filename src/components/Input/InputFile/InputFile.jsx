import { useRef, useState } from "react";

export function CustomFileInput({ nota, id, label }) {
    const [isFile, setIsFile] = useState(false);
    const [urlImg, setUrlImg] = useState(null);
    const [isLarge, setIsLarge] = useState(false);
    const [isFormatCorrect, setIsFormatCorrect] = useState(true);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const maxSizeKb = 500 * 1024;
        if (!file.type.startsWith("image/")) {
            setIsFormatCorrect(false)
            e.target.value = null;
            return;
        }
        if (file.size > maxSizeKb) {
            setIsLarge(true);
            e.target.value = null;
            return;
        }
        setUrlImg(imageUrl)
        setIsFile(file ? true : false);

    };
    const handleOpenFileDialog = () => {
        fileInputRef.current?.click();
    };
    const removeFileInput = () => {
        document.getElementById('file-upload').value = null;
        setUrlImg(null);
        setIsFile(false);
    }

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <div className="flex flex-col items-center gap-2 border border-dashed border-Neutral-0/30 rounded-md p-3 bg-Neutral-0/10">
                <input
                    type="file"
                    id={id}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg, .png"
                    ref={fileInputRef}
                />

                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center size-10 overflow-hidden border border-Neutral-0/20 rounded-lg cursor-pointer bg-Neutral-0/20 hover:bg-gray-100 transition">
                    <span className="">
                        {urlImg ? (
                            <img
                                src={urlImg}
                                alt="Vista previa"
                                className="w-full"
                            />
                        )
                            : (
                                <img className="w-5" src="/public/assets/images/icon-upload.svg" alt="Upload-image" />
                            )}
                    </span>
                </label>

                {isFile ? (
                    <div className="flex gap-2">
                        <button className="bg-Neutral-0/20 py-0.5 px-1 rounded-sm text-[10px]" onClick={removeFileInput}>Remove Image</button>
                        <button className="bg-Neutral-0/20 py-0.5 px-1 rounded-sm text-[10px]" onClick={handleOpenFileDialog}> Change Image</button>
                    </div>
                ) : (
                    <p className="text-sm text-Neutral-0/50">Drag and drop or click to upload</p>
                )}
                {isLarge && (
                    <p className="text-sm text-Orange-700/50">The image exceeds the allowed weight</p>
                )}
                {!isFormatCorrect && (
                    <p className="text-sm text-Orange-700/50">Incorrect Format</p>
                )}
            </div>
            <div className="flex gap-2">
                <img src="/public/assets/images/icon-info.svg" alt="" />
                <p className="text-[10px] font-light">{nota}</p>
            </div>
        </div>
    );
}
