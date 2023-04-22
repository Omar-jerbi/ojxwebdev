import { ReactElement } from "react";

interface props {
    img: ReactElement,
    txt: ReactElement,
    inv?: boolean
}
export function Card({ img, txt, inv }: props) {
    return <div className={"il w-full flex justify-center items-center gap-10 my-32 max-sm:my-20" + (inv ? " flex-row-reverse" : '')}>
        <div className="text-3xl w-5/12 max-sm:text-lg">
            <hr className='h-1 w-1/3 border-0 bg-gradient-to-l from-[var(--font)] to-transparent mb-6' />
            {txt}
        </div>
        <div className="ic overflow-hidden">
            {img}
        </div>
    </div>;
}
