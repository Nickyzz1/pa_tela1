import Image from "next/image";
import Link from "next/link";
import perfil from '../app/assets/img/perfil-of.png'
import bg from "../app/assets/img/warriorof1.jpg"

export const Desc = ({} : 
{
 
}

) =>{
    const style = 
    {
        p:"text-center mx-16 text-xs",
    }

    return(
        <>

        <p className={style.p} >Um perito em artes marciais viaja da China até São Francisco no séc. XIX, onde se junta a uma poderosa família de Chinatown.</p>

        </>
    );
}