/*TODO add description*/
export default function insertCharIntoString(str,indexPos,char){
  return str.substring(0, indexPos) + char + str.substring(indexPos);
};
