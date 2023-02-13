import CryptoJS from "crypto-js";

function SHA256(string){
    const  hash = CryptoJS.SHA256(string);
}
export default SHA256