import type { NewsResponse } from "@/types/response";
import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";

interface PostState {
  posts: NewsResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: null,
};

type PostAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: NewsResponse[] }
  | { type: "FETCH_ERROR"; payload: string };

const postReducer = (state: PostState, action: PostAction): PostState => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        posts: [],
      };
    default:
      return state;
  }
};

const PostStateContext = createContext<PostState | undefined>(undefined);
const PostDispatchContext = createContext<Dispatch<PostAction> | undefined>(undefined);

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider = ({ children }: PostProviderProps) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>{children}</PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
};

export const usePostState = () => {
  const context = useContext(PostStateContext);
  if (context === undefined) {
    throw new Error("usePostState harus digunakan di dalam PostProvider");
  }
  return context;
};

// Hook untuk mendapatkan Dispatch (FUNGSI PERUBAH)
export const usePostDispatch = () => {
  const context = useContext(PostDispatchContext);
  if (context === undefined) {
    throw new Error("usePostDispatch harus digunakan di dalam PostProvider");
  }
  return context;
};
