import { useRef, useReducer} from "react";

const initialState = {
    file: false,
    urlImg: null,
    large: false,
    formatCorrect: true,
    nota: 'Upload your photo (JPG or PNG, max size: 500KB).'
};

const actionTypes = {
    ISFILE: 'ISFILE',
    ISLARGE: 'ISLARGE',
    ERRORFORMAT: 'ERRORFORMAT',
    NOTA: 'NOTA',
    REMOVEFILEINPUT: 'REMOVEFILEINPUT',
    SAVEIMG: 'SAVEIMG'
};

const reducerObject = (state, payload) => ({
    [actionTypes.ISFILE]: {
        ...state,
        file: payload
    },
    [actionTypes.ISLARGE]: {
        ...state,
        large: payload
    },
    [actionTypes.ERRORFORMAT]: {
        ...state,
        formatCorrect: false
    },
    [actionTypes.NOTA]: {
        ...state,
        nota: payload
    },
    [actionTypes.REMOVEFILEINPUT]: {
        ...state,
        urlImg: null,
        file: false,
    },
    [actionTypes.SAVEIMG]: {
        ...state,
        large: false,
        formatCorrect: true,
        nota: "Upload your photo (JPG or PNG, max size: 500KB).",
        urlImg: payload,
        file: true
    }
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
};

export function CustomFileInput({ id, label, onFileSelected, error }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const isFile = (value) => dispatch({ type: actionTypes.ISFILE, payload: value });
    const cleanFiles = () => dispatch({ type: actionTypes.REMOVEFILEINPUT });
    const isLarge = (bool) => dispatch({ type: actionTypes.ISLARGE, payload: bool });
    const saveImg = (url) => dispatch({ type: actionTypes.SAVEIMG, payload: url })
    const errorFormat = () => dispatch({ type: actionTypes.ERRORFORMAT });
    const addNota = (nota) => dispatch({ type: actionTypes.NOTA, payload: nota });

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const maxSizeKb = 500 * 1024;
        error = {};
        if (!file.type.startsWith("image/")) {
            errorFormat();
            addNota("Incorrect file format. Only JPG or PNG allowed.");
            e.target.value = null;
            return;
        }
        if (file.size > maxSizeKb) {
            isLarge(true);
            addNota("File too large. Please upload a photo under 500KB.");
            e.target.value = null;
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        saveImg(imageUrl);
        onFileSelected(imageUrl);

    };
    const handleOpenFileDialog = () => {
        fileInputRef.current?.click();
    };
    const removeFileInput = () => {
        fileInputRef.current.value = null;
        cleanFiles();
        onFileSelected('');
    }

    return (
        <div className="flex flex-col gap-2 group">
            <label htmlFor={id}>{label}</label>
            <div className="p-0.5 border border-transparent rounded-xl hover:border group-focus-within:border-Neutral-0/50">
                <div className="flex flex-col items-center gap-2 border border-dashed border-Neutral-0/30 rounded-xl p-3 bg-Neutral-0/10 hover:bg-Neutral-0/25 relative">
                    <input
                        type="file"
                        id={id}
                        onChange={handleFileChange}
                        className="absolute opacity-0 w-full h-full cursor-pointer z-5"
                        accept=".jpg, .png"
                        ref={fileInputRef}
                    />

                    <label
                        htmlFor={id}
                        className="flex flex-col items-center justify-center size-10 overflow-hidden border border-Neutral-0/20 rounded-lg cursor-pointer bg-Neutral-0/20 hover:bg-gray-100 transition">
                        <span className="">
                            {state.urlImg ? (
                                <img
                                    src={state.urlImg}
                                    alt="Vista previa"
                                    className="w-full"
                                />
                            )
                                : (
                                    <img className="w-5" src="/assets/images/icon-upload.svg" alt="Upload-image" />
                                )}
                        </span>
                    </label>

                    {state.file ? (
                        <div className="flex gap-2 z-20">
                            <button className="bg-Neutral-0/20 py-0.5 px-1 rounded-sm text-[10px]" onClick={removeFileInput}>Remove Image</button>
                            <button className="bg-Neutral-0/20 py-0.5 px-1 rounded-sm text-[10px]" onClick={handleOpenFileDialog}> Change Image</button>
                        </div>
                    ) : (
                        <p className="text-sm text-Neutral-0/50">Drag and drop or click to upload</p>
                    )}
                </div>
            </div>
            <div className="flex gap-2 ">
                <div className={`size-4 ${(state.large || error) ? 'bg-Orange-500' : 'bg-Neutral-0'} mask mask-[url('/assets/images/icon-info.svg')] bg-no-repeat bg-center bg-cover`} />
                <p className={`text-[10px] font-light ${(!state.formatCorrect || state.large || error) ? 'text-Orange-500' : ''}`}>
                    {state.large
                        ? "File too large. Please upload a photo under 500KB."
                        : !state.formatCorrect
                            ? "Incorrect file format. Only JPG or PNG allowed."
                            : error || state.nota}
                </p>
            </div>
        </div>
    );
};
