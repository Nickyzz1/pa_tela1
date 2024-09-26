import Image from "next/image";
import Link from "next/link";
import bg from "../01 - assets/img/warriorof1.jpg"
import perfil from "../01 - assets/img/perfil-of.png"
import {Desc} from './Desc'
import {Card} from './Card'

export const Menu = ({op1, op2, op3, op4} : 
{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
}

) =>{
    const style = 
    {
    head:"mx-5 flex flex-row mt-3",
    img:"absolute -z-50 ",
    title: "text-white",
    p:"text-white gap-20 px-2 py-1 w-18",
    dc:"underline decoration-1",
    nav:"text-white gap-10 p-3 font-robFont flex flex-row justify-center align-center cursor-pointer",
    perfil: "w-7 ml-64 cursor-pointer self-start relative",
    main: "bg-black absolute bottom-0 w-full h-1/4 text-white shadow-[0_2px_50px_53px_rgba(0,0,0)] z-10",
    sd:"bg-black absolute w-full h-6 text-white shadow-[0_2px_60px_53px_rgba(0,0,0)] -z-40",
    box: "bg-blue-950 absolute bottom-0 w-full h-1/8 text-white z-20 shadow-[0_2px_90px_86px_#172554]",
    container: "h-3/4"
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.sd}>
            </div>
            <div className={style.head}>
                <h1 className={style.title} >MAX</h1>
                <Image className={style.perfil} src={perfil} alt="" />
            </div>
                <nav className={style.nav}>
                <p className={`${style.p} ${style.dc}`} >{op1}</p>
                <p className={style.p}>{op2}</p>
                <p className={style.p}>{op3}</p>
                <p className={style.p}>{op4}</p>
                <Image className={style.img} src={bg} alt="" />
            </nav>
        </div>

        <main>
            <div className={style.main} >
                <Desc/>
            </div>
            <div className={style.box}>
               <Card/>

            </div>
        </main>
        </>
    );
}