import { TLimitStringHelper } from "../types";

const limitString: TLimitStringHelper = (text, limit) => {
    let output: string = '';

    for (let i = 0; i < text.length; i++) {
        output+=text[i];      
        if(i >= limit) {
            break
        }
    };

    return (output.length > limit)? output+="...": output;
}

export default limitString