
'use client';

import { useActionState, useEffect } from 'react';  //폼 태그를 쉽게 핸들링
// import style from './review-editor.module.css';
import { createReviewAction } from '@/app/actions/create-review-action';

// 리뷰 작성하기 // 
export function ReviewEditor({ bookId }:{ bookId : string }) {
    const [ state, formAction, isPending ] = useActionState(createReviewAction, null); 
    
    useEffect(() => {
        if(state && !state.status)
            alert(state.error);
    }, [state]);

    return (
        <section>
            <form  action={ formAction }> 
                <input 
                    name='bookId' 
                    value={ bookId } hidden readOnly />
                <textarea 
                    disabled={ isPending }
                    required name='content' 
                    placeholder='리뷰 내용' />
                <div>
                    <input 
                        disabled={ isPending }
                        required name='author' 
                        placeholder='작성자' />
                    <button 
                        disabled={ isPending } 
                        type='submit'>
                        { isPending ? "..." : "작성하기" }
                    </button>
                </div>
            </form>
        </section>
    );
};