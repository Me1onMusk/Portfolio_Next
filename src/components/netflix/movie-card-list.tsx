
'use client';

import MovieCard from "./movie-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMovies } from "../../app/actions/movieActions";
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { useSearchStore } from '../../utils/zustand/store';

export default function MovieCardList() {
    const search = useSearchStore((state) => state.searchTerm);  //검색어 상태 읽기
    const {
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movie', search],
        queryFn: ({ pageParam }) => searchMovies({ search, page: pageParam, pageSize: 12 }),
        getNextPageParam: (lastPage) => lastPage.page ? lastPage.page + 1 : null,
    });

    const { ref, inView } = useInView({
        threshold: 0
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetching && !isFetchingNextPage)
          fetchNextPage();
    }, [inView, hasNextPage]);

    return (
        <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
            {
                <>
                    {
                        data?.pages?.map((page) => page.data)?.flat()?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                    <div ref={ref}></div>
                </>
            }
            {
                (isFetching || isFetchingNextPage) && <p>Loading...</p>
            }
        </div>
    );
};