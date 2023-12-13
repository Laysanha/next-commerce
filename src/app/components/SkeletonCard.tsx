import clsx from "clsx";
import css from "styled-jsx/css";

export default function SkeletonCard({isLoading}: {isLoading?: boolean }) {
    return(
        <div className={clsx(
          'flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300',
          {
            'relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent': isLoading
          } 
        )}>
            <div className="h-60 rounded-lg bg-rose-100/10"></div>
            <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
            <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
            <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
        </div>
    )
}