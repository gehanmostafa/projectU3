

interface IProp {
    message: string;

}

const ErrorMessage = ({message }:IProp) => {
    return (
    // ا ظاهر span بيفضل
    //     message  حته لو مبعت 
    //     empity string => false value 
   message? <span className="text-red-800 block" >{message}</span>:null 
    );
}

export default ErrorMessage;
