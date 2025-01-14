
import { create } from "zustand";

// 상태와 액션 타입 정의
interface SearchState {
    searchTerm: string; // 검색어 상태
    setSearchTerm: (term: string) => void; // 검색어 업데이트 함수
}

export const useSearchStore = create<SearchState>((set) => ({
    searchTerm: '', // 초기 상태
    setSearchTerm: (term) => set({ searchTerm: term }), // 상태 업데이트
}));
