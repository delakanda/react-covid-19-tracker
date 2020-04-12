import Numeral from "numeral";

export function formatNum(num: number | null | undefined)
{
    if(num)
    {
        return Numeral(num).format("0,0");
    }
    return null;
}