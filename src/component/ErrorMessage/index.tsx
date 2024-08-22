

interface IProp {
    message: string;

}

const ErrorMessage = ({message }:IProp) => {
    return (
    // ا ظاهر span بيفضل
    //     message  حته لو مبعت 
    //     empity string => false value 
   message? <span className="block text-red-700 font-semibold text-sm" >{message}</span>:null 
    );
}

export default ErrorMessage;
