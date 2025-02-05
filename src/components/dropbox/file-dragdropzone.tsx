
'use client';

import { uploadFile } from '../../app/actions/storageActions';
import { queryClient } from '@/config/ReactQueryClientProvider';
import { useMutation } from '@tanstack/react-query';
import React, { useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'; 

export default function FileDragDropZone() {

    const fileRef = useRef(null);

    // 이미지 업로드 // 
    const uploadImageMutation = useMutation({
        mutationFn: uploadFile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey:['images'] });
        }
    }); 

    // 파일 드롭이 발생하면 실행 // 
    const onDrop = useCallback( async(acceptedFiles) => {
        if(acceptedFiles.length > 0) {
            const formData =new  FormData();
            acceptedFiles.forEach(file => {
                formData.append(file.name, file)
            }); 
            const result = await uploadImageMutation.mutate(formData); 
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, multiple: true});

    return (
        <div 
            className="w-2/3 py-20 border-2 m-20 border-dotted border-indigo-700 flex flex-col
                dark:bg-slate-500 bg-slate-300
                rounded-xl items-center justify-center cursor-pointer"{...getRootProps()}>
            <input {...getInputProps()} />
            {
                uploadImageMutation.isPending ? 
                (<p>Loading...</p>) : 
                (
                    isDragActive ?
                    (<p>여기에 파일을 놓으세요.</p>) : 
                    (<p>파일을 여기에 끌어다 놓거나 클릭하여 업로드 하세요.</p>)
                )
            }
        </div>
    );
};