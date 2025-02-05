
import { deleteFile } from "../../app/actions/storageActions";
import { queryClient } from "@/config/ReactQueryClientProvider";
import { getImageURL } from "@/utils/supabase/storage";
import { useMutation } from "@tanstack/react-query";

export default function DropboxImage({ image }) {

    // 파일 삭제 //
    const deleteFileMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['images'] })
        }
    });
    
    return (
        <div className="relative w-full mb-10 flex flex-col p-5 border border-gray-100 rounded-2xl shadow-md gap-2">
            <div>
                <img
                    className="w-full aspect-square rounded-2xl" 
                    src={ getImageURL(image.name) } />
            </div>
            
            <div>{ image.name }</div> 

            <div className="absolute top-4 right-4">
                <button 
                    onClick={ () => deleteFileMutation.mutate(image.name) }>
                    {
                        deleteFileMutation.isPending ? 
                        (<p>Loading...</p>) :
                        (<i className="fas fa-trash text-red-500 text-4xl" />)
                    }
                </button>
            </div>
        </div>
    );
};